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

## frontend

## backend

## middleware

## access

## thewall