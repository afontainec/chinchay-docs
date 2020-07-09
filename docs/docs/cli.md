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

### What is created?

So what is actualy being created? Well it depends on how you have configured the [chainfile](./chainfile) and which flages are passed. But in a nutshel it will create a model, a controller, views, routes and a knex migration.

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

For a complete guide on how to add columns visit the [knex documentation](http://knexjs.org/#Schema-createTable).



### Where is everything created and why there?



## the frontend flag

## the backend flag

## the middleware flag

## the backend flag

## Do I prefer camels or snakes?
