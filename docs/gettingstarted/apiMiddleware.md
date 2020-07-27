## Building our first RESTful API

This tutorial will walk you through building your first API with Chinchay! It will not only be a RESTful API but we will also configure our middleware and access to filter which user can access which resources. 


### Defining concepts


 * [oAuth 2.0](https://oauth.net/2/): oAuth is a industry-standard protocol for authorization. In simple, you can protect so each users only access the endpoint you give him access to. The user authenticates given its credentials and is granted an access token. For every request he does after he must provide the token to prove his identity.

 * [The Chinchay Middleware](./middleware) will be in charge of inspect that the token is present, valid and that the user of that token has access to the given endpoint. The token is expected to be given as a [Bearer Token](https://stackoverflow.com/questions/25838183/what-is-the-oauth-2-0-bearer-token-exactly/25843058).

* [thewall npm package](https://www.npmjs.com/package/thewall). To actually define which user has access to which endpoints.

 * The [Access Module](./middleware#access) will be in charge of generating the access token, the token follows the [json web token standard](https://jwt.io/), by generating the token with [the jsonwebtoken npm package](https://www.npmjs.com/package/jsonwebtoken). Also will be incharge of filtering who has access to which data within a given endpoint.



### Quick Overview

So we are going to create an API with information about coffees and teas. Some users will only be allowed to read information about specific coffees, other only about specific teas, whereas other will be granted full access. So lets dive into how to configure this!



### Requirements
  * [npm](https://www.npmjs.com/get-npm)
  * [express](https://expressjs.com/)
  * [Postgres](https://www.postgresql.org/)

  If you do not have express installed you can easily install it with npm
```
$ npm install express -g
```

## Create nodejs app with express

Create a nodejs app called: tutorial-chinchay-api
```
$ express tutorial-chinchay-api && cd tutorial-chinchay-api
```
<br/>
We will install drivers to use PostgresSQL database. we will use knexjs and pg

```
$ npm install pg -s
$ npm install knex -s
```
<br/>
Also we will use ejs instead of jade. So we need to run


Lets run the app to see what we have so far!

```
$ npm install
$ npm start
```
<br/>

You can visit [http://localhost:3000](http://localhost:3000) to see the defaut express web app... but we are here for the API so lets move on!

### Create Postgresql Database

In this tutorial we will not dig in how Postgres fully work. For more information on how to work around Postgres visit [https://www.postgresql.org/](https://www.postgresql.org/).

In order to connect to Postgres, we need to create a database. If you have postgresql installed you can run
```
$ psql
```
<br/>
This should open up postgresql console. Run the following command:

```
postgres=# CREATE DATABASE tutorial_chinchay_api;
```
*NOTE:* Depending on your default user and psql version the syntax of the previous line may vary.

if its successful close psql, run:
```
postgres=# \q
```


### Connecting to the Database

For connecting our app to the database chinchay uses [knex](https://knex.org/). In this tutorial we will not dig in how knex fully work. For more information on how to work around knex [click here](https://knex.org/).

First of all, we highly recommend to install knex globally:

```
$ npm install knex -g
```
<br/>
Until now we should have the following Directory Structure:

    .
    ├── bin                  
    ├── node_modules       
    ├── public   
    ├── routes
    ├── views              
    ├── app.js
    ├── package-lock.json
    └── package.json

We will add the following:

    .
    ├── bin
    ├── database
        ├── migrations       
        └── seeds
            ├── development
            ├── production   
            └──  test
    ├── node_modules       
    ├── public   
    ├── routes
    ├── views              
    ├── app.js
    ├── knexfile.js        
    ├── knex.js        
    ├── package-lock.json
    └── package.json

<br/>

* database/migrations/ directory will hold all the migrations (changes) to the database.
* database/seed/ directory will hold all the seed files. Every subdirectory will hold the seed corresponding to that environment.
* knex.js Will be the instance that connects to the database and the knexfile.js will hold the configurations.
<br/>
Go ahead and create those files

Before we continue we need to create a configuration file to let knex know how to interact with the database. We need to create a knexfile.js
```
$ touch knexfile.js
```
<br/>
Add the following code to knexfile.js

```javascript
const path = require('path');

module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://localhost:5432/test_chinchay',
    migrations: {
      directory: path.join(__dirname, '/database/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/database/seeds/test'),
    },
    acquireConnectionTimeout: 10000,
  },
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/tutorial_chinchay_api',
    migrations: {
      directory: path.join(__dirname, '/database/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/database/seeds/development'),
    },
    acquireConnectionTimeout: 10000,
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/tutorial_chinchay_api',
    migrations: {
      directory: path.join(__dirname, '/database/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/database/seeds/production'),
    },
    acquireConnectionTimeout: 10000,
  },
  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/tutorial_chinchay_api',
    migrations: {
      directory: path.join(__dirname, '/database/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/database/seeds/production'),
    },
    acquireConnectionTimeout: 10000,
  },
};

```
:::warning
 If your Postgres user it is not postgres change it accordingly in the connection URL.
:::

We will not get in detail of how this file works, but basically we are telling knex where we want to save the migrations, the seeds and what is the url to connect to the database. Note that the knexfile defines this variables for every environment by separate.


Now we need to add the following code to the knex.js file:

```javascript
const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[environment];
module.exports = require('knex')(config);
```

Now knex is configured to connect to the database.


## Creating the coffee + tea relations

Now lets get to the fun part: Chinchay. We will create the .chainfile.js, this file holds all of the configurations for chinchay.

Go ahead and create this file.


In the .chainfile.js add the following:


```javascript
const path = require('path');

module.exports = {
  models: {
    directory: path.join(__dirname, 'models'),
  },
  controllers: {
    directory: path.join(__dirname, 'controllers')
  },
  views: {
    directory: path.join(__dirname, 'views')
  },
  routes: {
    directory: path.join(__dirname, 'routes')
  },
  knex:  path.join(__dirname, 'knex.js')
};
```

Here we are defining which directories will hold the models, the controllers, the views and the routes.

Install chinchay:
```
$ npm install chinchay -s
$ npm install chinchay -g
```
<br/>
Installing chinchay globally will allow you to run chinchay CLI.


### Coffee And Tea

Now its time to create the coffees and the teas!

```
$ chinchay new coffee --middleware api --frontend disable
```

```
$ chinchay new tea --middleware api --frontend disable
```

These will create models, controllers, views, routes andknex migrations in the directories defined in .chainfile.js. We shall use this to work with both coffees and teas.


The migrations will be saved in the directory `database/migrations/`. The name will vary, as it takes the current date and time to make the file, The file that has `coffee.js` appended add the following:

```javascript
exports.up = function (knex) {
  return knex.schema.createTable('coffee', (table) => {
    // Incremental id
    table.increments();
    table.string('name').notNullable();
    table.integer('price');
    // created_at and updated_at
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('coffee');
};
```

This piece of code will create a relation called coffee within our database with the variables name and price. Also will generate a id and a created_at and updated_at timestamps for every entry. To run this migration:


We will do the sale with the file that ends in `tea.js`:
```javascript
exports.up = function (knex) {
  return knex.schema.createTable('tea', (table) => {
    // Incremental id
    table.increments();
    table.string('name').notNullable();
    table.integer('price');
    // created_at and updated_at
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('tea');
};
```


Now we can run these migrations:

```
$ knex migrate:latest
```
<br/>

Last but not least, in the app.js file, right after these lines:

```javascript
app.use('/', routes);
app.use('/users', users);
```

add the following:

```javascript
const teaAPI = require('./routes/teaAPI');
const coffeeAPI = require('./routes/coffeeAPI');
app.use('/', teaAPI);
app.use('/', coffeeAPI);
```
This lines tell the app to use the generated API.

Now if we ran the app:

```
$ npm start
```

We will get an error! Why? We have not configured the middleware yet!

### Temporaring Middleware Configuration


On the [Configure the Middleware](#configuring-the-middleware) part we will dig on ho to fully configure the middleware, for now lets add the following:

#### access.js

Creat an `access.js` file 

```
$ touch access.js
```

and add the following:
```javascript
const UNRESTRICTED_ROLES = {};
const RESTRICTED_ROLES = {};

module.exports = {
  UNRESTRICTED_ROLES,
  RESTRICTED_ROLES,
};
```

#### thewall.js

We need to add thewall to the project:

```
$ npm i thewall -s
```

Lets create a thewallfile that will hold all the configurations:

```
$ touch thewallfile.js
```

Fill the generate fill with:
```javascript
const path = require('path');

module.exports = {
  access: { },
  knex: path.join(__dirname, 'knex.js'),
};
```

Now create a `thewall` instance:

```
$ touch thewall.js
```

Fill the generate fill with:
```javascript
const config = require('./thewallfile');

module.exports = require('thewall')(config);

```

#### chainfile.js

Last but not least add the following to the chainfile:

```javascript
  access: path.join(__dirname, 'access.js'),
  thewall: path.join(__dirname, 'thewall.js'),
```

Right after the line:

```javascript
  knex:  path.join(__dirname, 'knex.js')
```

Its time to rerun our app: 

```
$ npm start
```

Visit an API endpoint, for instance: [localhost:3000/api/coffee/find](http://localhost:3000/api/coffee/find)

We will recieve a 401 Unauthorized error. This is because we added the `--middleware` flag and did not provide a valid authentication. Lets create users and start requesting with a valid authentication!


## Creating the users

We shall do the same than before for the users:

```
$ chinchay new users --middleware api --frontend disable
```

Replace the generated migration with the following:
```javascript
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    // Incremental id
    table.increments();
    table.string('username').notNullable();
    table.text('password');
    // created_at and updated_at
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
```
Run the migration:

```
$ knex migrate:latest
```

On the generated model, we will add the following:

```javascript
const { Table } = require('chinchay');
const bcrypt = require('bcrypt-nodejs');


class Users extends Table {
  constructor() {
    const tableName = 'users';
    super(tableName);
  }

  save(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8), null); // encrypt password
    return super.save(user);
  }

  async checkCredentials(username, password) {
    const user = await this.find({ username });
    if (!user) return false;
    return bcrypt.compareSync(password, user.password);
  }
}


const instance = new Users();

module.exports = instance;

```

:::danger
  Password must **NEVER** be saved as plain text in the database and always should be encrypted.
:::

We added two methods. One that overwrites the `save` method by encrypting the password before saving the user The other method is to check that some given credentials are correct. For it to work we must add the following package:

```
  $ npm i bcrypt-nodejs -s
```



## Configuring the Middleware