/* eslint-disable no-console, no-unused-vars */
const requestify = require('requestify');
const codemaster = require('codemaster');
const MultivendorSeller = require('./server/models/multivendor/seller');
const MultivendorCustomFields = require('./server/models/multivendor/customField');
const MultivendorOrders = require('./server/models/multivendor/orders');
const ShopifyProduct = require('./server/models/shopify/product');
const MultivendorProduct = require('./server/models/multivendor/products');
const multivendorAPI = require('./server/models/multivendor/multivendorApi');
const tagger = require('./server/models/tagger');
const productsWithIncompleteSellers = require('./server/models/notifier/productsWithIncompleteSellers');
const WelcomeNotification = require('./server/models/notifier/welcome');
// const ONE_HOUR = 1000 * 60 * 60;
// const threshold = new Date(new Date().getTime() - ONE_HOUR * 10);
const id = '4502203236425';
const params = { tags: 'servicios antfont software' };

// https://www.api-football.com/demo/v2/players/squad/2/2020

requestify.get('https://www.api-football.com/demo/v2/players/squad/9/2019').then((result) => {
  const body = result.getBody();
  console.log(body.api);
}).catch((err) => {
  console.log(err);
});
