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

## Model

## Controller

## Routes

## views

## frontend

## backend

## middleware

## access

## thewall