## Overview

The chainfile is where all the configuratios of Chinchay are defined. It a file that must be named `.chainfile.js` and must be on the root of the repository.

Here we are going to indicate all the configurations:



## Knex: The minimal Configuration

The minimal chainfile needed by Chinchay is one that indicates where the [knex](http://knexjs.org/) instance is. So it should look something like this: 

```javascript
const path = require('path');

module.exports = {
  knex:  path.join(__dirname, 'knex.js')
};
```

Where the knex.js file exports the knex instance. Check the [Getting started tutorial](../ettingstarted/ejs.html#connecting-to-the-database), there you can see an example of a knex.js file. 

## Model + Controller + Routes

The model property expects a json as follows:

```javascript
const path = require('path');

module.exports = {
  models: {
    directory: 'path/to/directory/containing/models'
  },
  knex:  path.join(__dirname, 'knex.js')
};
```


where `models.directory` is the path of the directory where all the models should be located. 

For controllers and routes is analogous, so if we want to create a reposity with the following structure:

    .
    ├── server
        ├── controllers       
        └── models
        └── routes

The chainfile should look like this

```javascript
const path = require('path');

module.exports = {
  models: {
    directory: path.join(__dirname, 'server', 'models'),
  },
  controllers: {
    directory: path.join(__dirname, 'server', 'controllers'),
  },
  routes: {
    directory: path.join(__dirname, 'server', 'routes'),
  },
  knex:  path.join(__dirname, 'knex.js')
};
```

If these configurations are not set, the model, controller and routes will be generate in a `models`, `controllers` and `routes` directory in the root of the repository. If the directory does not exist it will create it.

::: tip
  I always group all the backend-related (models, controllers, routes, etc) in a server folder.
:::


## views

For the views its _almost_ the same. If you desire to use the ejs templating language it would be exactly the same: 

```javascript
const path = require('path');

module.exports = {
  models: {
    directory: path.join(__dirname, 'server', 'models'),
  },
  controllers: {
    directory: path.join(__dirname, 'server', 'controllers'),
  },
  routes: {
    directory: path.join(__dirname, 'server', 'routes'),
  },
  views: {
    directory: path.join(__dirname, 'frontend', 'views'),
  },
  knex:  path.join(__dirname, 'knex.js')
};
```

In this cases the ejs files will be created within the `frontend/views` directory.

However, if the app is an angular app, the root of the Angular app must be provided as follows:

```javascript
module.exports = {
  models: {
    directory: path.join(__dirname, 'server', 'models'),
  },
  controllers: {
    directory: path.join(__dirname, 'server', 'controllers'),
  },
  routes: {
    directory: path.join(__dirname, 'server', 'routes'),
  },
  views: {
    directory: path.join(__dirname, 'frontend', 'views'),
    angular: path.join(__dirname, 'frontend'),
  },
  knex:  path.join(__dirname, 'knex.js')
};

```

If you are not sure what is the root of the Angular app, is the directory where you would normally run `ng generate component coffee`.

The most common use case is that the root of the Angular app is the same as the root of the repository. in such a case, angular should be defined as follows:

```javascript
  views: {
    angular: '.'
  }
```

::: warning
  For Angular this is not the path where the files will be created. It depends on how the angular is configured, but most certainly it will be created in the `src/app`.
:::


## frontend

A `frontend` property can be added to the chainfile. this is equivalent to add the flag `--frontend` when running `chinchay new`. See the [cli documentation](./cli.html#frontend-flag) for more information.

This can be either:

  * ejs: The ejs templating language will be used to create the frontend app.
  * angular: Angular will be used to create the frontend app. Several components, a service and a router file will be generated.
  * disable: No frontend app will be generated.

  So for angular the chainfile should look something like this:

```javascript
  module.exports = {
  models: {
    directory: path.join(__dirname, 'server', 'models'),
  },
  controllers: {
    directory: path.join(__dirname, 'server', 'controllers'),
  },
  routes: {
    directory: path.join(__dirname, 'server', 'routes'),
  },
  views: {
    angular: path.join(__dirname, 'frontend'),
  },
  knex:  path.join(__dirname, 'knex.js'),
  frontend: 'angular'
};

```


## backend

## middleware

## access

## thewall