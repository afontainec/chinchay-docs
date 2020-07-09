## Overview

Work in progress!

## The magical new command

Most of Chinchay's magic happens with a simple: 

```
$ chinchay new relation
```

This simple, but yet powerful, command will create all that is needed to create, read, update and delete entries to the _relation_. The keyword _relation_ corresponds to what are you building, for instance in the [getting started tutorial](../gettingstarted) they are creating coffees therefore the command was:

```
$ chinchay new coffee
```

## Chinchay Configurations: Chainfile

All of the configurations needed will be in a file called .chainfile.js on the base of the repository. So before we go on we will explain the minimum chainfile neeeded for the new command to operate. For more information on the chainfile, visit the [chainfile documentation](./chainfile)

### The mimimal chainfile

The minimal chainfile needed by Chinchay is one that indicates where the [knex](http://knexjs.org/) instance is. So it should look something like this: 

```javascript
const path = require('path');

module.exports = {
  knex:  path.join(__dirname, 'knex.js')
};
```

Where the knex.js file exports the knex instance. Check the [Getting started tutorial](../ettingstarted/ejs.html#connecting-to-the-database), there you can see an example of a knex.js file. 


### What is created?

So now that we have our minimal chainfile, what is actualy being created? It will create a knex migration, a model, a controller, views, and some routes. 

::: tip DISCLAIMER
  Depending on how the chainfile is defined, the files created might vary.
:::

#### Knex migration

Well everything starts with the database. So a migration to add the new table is created. If by this point your a thinking database, table, knex, migration? WTF are those? dont worry check the explanation [here](./overview.html#updating-the-database). 

The migration should look like something like this:

```javascript
exports.up = function (knex) {
  return knex.schema.createTable('coffee', (table) => {
    // Incremental id
    table.increments();
    // created_at and updated_at
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('coffee');
};
```

Lets explain every bit, we are creating a table called coffee, in this case the relation was named coffee, if we would have run `chinchay new tea` the table would have been called tea. the `table.increments()` add an id column that will auto-increment and `table.timestamps()` adds a created_at and updated_at columns. So far the table is something like this:

| Column  | Type  |  Collation | Nullable  | Default  |
|---|---|---|---|---|
| id  | integer  |   | not null  | nextval('coffee_id_seq'::regclass)  |
| created_at  | timestamp with time zone  |   |   |   |
| updated_at  | timestamp with time zone  |   |   |   |

So you must edit this file to add the columns you desire:

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

For a complete guide on how to add columns visit the [knex documentation](http://knexjs.org/#Schema-createTable). Dont forget to run:

```
$ knex migrate:latest
```

For the migration to be taken into account!

#### The Model

The model is the one responsible to interacting with the table created by the knex migration. It is very simple and it should look like this:

```javascript
const { Table } = require('chinchay');


class Coffee extends Table {
  constructor() {
    const tableName = 'coffee';
    super(tableName);
  }
}


const instance = new Coffee();


module.exports = instance;

```

As you may notice this is a [singleton](https://www.dofactory.com/javascript/design-patterns/singleton?s=40) (their will only be one instance of the Coffee class). This class extends the Table class from Chinchay, that has all the basic methods you need to get started. But if you need more, feel free to add more methods to the Coffee class. For more information on this, [click here](./model).

::: warning
  The tableName must match with the table created in the migration!
:::

By default the file will be created in a model directory in the root of the repository. This is customizable by adding a model configuration to the chainfile as follows: 

```javascript
const path = require('path');

module.exports = {
  models: {
    directory: path.join(__dirname, 'server', 'models'),
  },
  knex:  path.join(__dirname, 'knex.js')
};
```




## the frontend flag

## the backend flag

## the middleware flag

## the backend flag

## Do I prefer camels or snakes?
