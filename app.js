const express = require('express');
const useragent = require('express-useragent');
const requestIp = require('request-ip');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const http = require('http');


const Middleware = require('./server/middleware/middleware');

const pymeAPI = require('./server/routes/pymeAPI');
const productAPI = require('./server/routes/productAPI');
const aws = require('./server/routes/aws');
const orderAPI = require('./server/routes/ordersAPI');
const productOrderAPI = require('./server/routes/productOrderAPI');
const formulaeAnswersAPI = require('./server/routes/formulaeAnswersAPI');
const sellerAPI = require('./server/routes/sellerAPI');
const recaptchaAPI = require('./server/routes/recaptchaAPI');
const usersAPI = require('./server/routes/usersAPI');
const wkSellersApi = require('./server/routes/wkSellersAPI');
const wkProductsAPI = require('./server/routes/wkProductsAPI');
const notifierAPI = require('./server/routes/notifierAPI');
const ddbbcopystatusAPI = require('./server/routes/ddbbcopystatusAPI');
const sellersBackUp = require('./server/routes/sellersBackUp');

// WEBhook
const orderShopifyWebhook = require('./server/routes/webhook/payedOrders');
const productShopifyWebhook = require('./server/routes/webhook//product');

// V2
const coupon = require('./server/routes/v2/copuon');
const seller = require('./server/routes/v2/seller');
const customerV2 = require('./server/routes/v2/customer');
const paymentReport = require('./server/routes/v2/paymentReport');
const payOff = require('./server/routes/v2/payOff');

const customerTrackingAPI = require('./server/routes/customerTrackingAPI');
const pymeTrackingAPI = require('./server/routes/pymeTrackingAPI');
const emailScheduleAPI = require('./server/routes/emailScheduleAPI');

const AttackLogger = require('./server/models/attackLogger');

// passport
const passportLogin = require('./server/routes/login');

const app = express();


app.use(useragent.express());
app.use(requestIp.mw());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

Middleware.prerouting(app);


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next();
});

// LOG REQUESTS
if (process.env.NODE_ENV !== 'test') {
  logger.token('body', (req) => {
    return req.url.includes('login') ? 'hidden' : JSON.stringify(req.body || {});
  });
  app.use(logger('[:date[clf]] :method :url HTTP/:http-version :status :response-time ms :res[content-length] ":body"'));
}

// app.use(logger('dev'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// angular static app files

app.use('', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/pymes', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/validate/:pyme/', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/vendor/:name/', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/pyme/new', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/pyme/all', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/product/new', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/products', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/product/:id', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/orders', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/pyme/:pyme_name/products', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/pyme/missing/first/fee', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/pyme/:id/name', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/errors', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/seller/info', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/customer/info', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/join/rappi', AttackLogger.catchUpRequestFormulaeRappi, express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/join/ubereats', AttackLogger.catchUpRequestFormulaeUber, express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/join/atp', AttackLogger.catchUpRequestFormulae, express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/join/ripley', AttackLogger.catchUpRequestFormulaeRipley, express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/join/linio', AttackLogger.catchUpRequestFormulaeLinio, express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/user/new', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/user/:id/change/password', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/user/:id/edit', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/user/:id', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/users', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/login', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/ddbbcopystatus', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/ddbbcopystatus/:id', express.static(path.join(__dirname, 'dist/guayo-front')));

app.use('/pyme_tracking', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/pyme_tracking/new', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/pyme_tracking/:id', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/pyme_tracking/:id/edit', express.static(path.join(__dirname, 'dist/guayo-front')));

app.use('/customer_tracking', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/customer_tracking/new', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/customer_tracking/:id', express.static(path.join(__dirname, 'dist/guayo-front')));
app.use('/customer_tracking/:id/edit', express.static(path.join(__dirname, 'dist/guayo-front')));

app.use('/product_excel', express.static(path.join(__dirname, 'dist/guayo-front')));


// vuepress static app files

app.use('/docs', express.static(path.join(__dirname, '/docs/.vuepress/dist/')));

// passport config
require('./server/passport')(passport); // login strategies defined

app.use(
  session({
    secret: 'cats',
  }),
);
app.use(passport.initialize()); // passport boot up
app.use(passport.session()); // // persistent login sessions

app.use('/', passportLogin(passport));
app.use('/', pymeAPI);
app.use('/', productAPI);
app.use('/', aws);
app.use('/', orderAPI);
app.use('/', productOrderAPI);
app.use('/', coupon);
app.use('/', orderShopifyWebhook);
app.use('/', seller);
app.use('/', customerV2);
app.use('/', formulaeAnswersAPI);
app.use('/', productShopifyWebhook);
app.use('/', sellerAPI);
app.use('/', paymentReport);
app.use('/', payOff);
app.use('/', customerTrackingAPI);

app.use('/', sellersBackUp);
app.use('/', recaptchaAPI);
app.use('/', usersAPI);
app.use('/', wkSellersApi);
app.use('/', wkProductsAPI);
app.use('/', ddbbcopystatusAPI);
app.use('/', pymeTrackingAPI);
app.use('/', emailScheduleAPI);
app.use('/', notifierAPI);

Middleware.postrouting(app);


function normalizePort(val) {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

// websockets

require('./server/websockets/product')(server);


module.exports = {
  server,
  port,
};

// module.exports = app;
