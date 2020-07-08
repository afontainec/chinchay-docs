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

Well everything starts with the database. So a migration to add the new table is created. If by this point your a thinking database, table, knex, migration? WTF are those? dont worry we are going to explain them right away.

Chinchay works with [Postgres](https://www.postgresql.org/about/). This is the [database system](https://en.wikipedia.org/wiki/Database) that stores the data. 

#### Why not another database system?

To be honest, just because. Postgres is one of the most popular databases and it seemed as a good starting point. At the moment we are working to make Chinchay compatible with mysql and other databases.






### Where is everything created and why there?



## the frontend flag

## the backend flag

## the middleware flag

## the backend flag

## Do I prefer camels or snakes?
