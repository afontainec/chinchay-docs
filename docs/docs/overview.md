## Overview: What is Chinchay?

Ufff this is a tough question.... What Chinchay aims to do is to facilitate how things are structured in your repository and speed up your development.

When building a large application order is a key factor, very easily the reposity becomes a big plate of spaghetti! Basically just chaos.

### How does it do it?

The most fascinating and value piece of Chinchay its the flexible TableGateway model. It handles all the interaction from and to a certain table in the database, without you knowing any sql! We just one command you will be able to create, read, update, delete, count, sum and many other operations in the database, its true just that simple. If by any chance you are a sql master and want to go beyond, Chinchay will allow you and help you to organize more your queries.

But that is just the beginning.... Chinchays will help you a LOT more. In my early years programming I had this problems:


*  Organizing the files
*  Managing the updates to the database
*  Making a _good_ api
*  Managing user access: who can access what

It was then that I decided to build a tool that would allow me to tackle each of this issues. This tool include both a Command Line Interface as a packages and other tools to tackle each problem.

Here goes how every problem was tackled:


## File Structure: Model-View-Controller (MVC) Architecture

For starters, lets begin with a disclaimer: I did not reinvent the wheel. Chinchay uses the state-of-the-art, in this case it was MVC Architecture. If you do not know what that is, here are a list of useful links:

*  [Techterm article](https://techterms.com/definition/mvc)
*  [Tutorialspoint definition](https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm)
*  [The stackexchange forum](https://softwareengineering.stackexchange.com/questions/127624/what-is-mvc-really)
*  [The always useful Wikipedia article](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

But in a nutshell, the code is logically separated in three areas. The model, where the logical-business code is written. They are the gateway to the database and would do most of the "important" job. The view manages all the UI logic and the controller is the interface that connects the view with the model.

The [Command Line Interface](./cli) will allow you to generate files in this pattern to keep everything organized and clean.

## Updating the Database

Chinchay works with [Postgres](https://www.postgresql.org/about/). This is the [database system](https://en.wikipedia.org/wiki/Database) that stores the data. As you may know the data is saved in tables. So how do we actually create or modify this tables?

### Schema Migrations

  A schema migration is a piece of code that does one change to the database. It usually has the code to revert that change. For instance if we add the column user_id to the table coffees but then you regret that decision, you can rollback that migration. Here are some interesting articles you might find interesting:

  * [science direct article](https://www.sciencedirect.com/topics/computer-science/schema-migration)
  * [perk article about migration and knex](http://perkframework.com/v1/guides/database-migrations-knex.html)
  *  [The always useful Wikipedia article](https://en.wikipedia.org/wiki/Schema_migration)

  I guess you are asking yourself how does this actually works, the answer is: knex.

#### knex

  [knex](http://knexjs.org/) is the magical tool that will manage all the migrations. Everytime you need to make a change to the database you make a knex migration as follows:

  ```
  $ knex migrate:make migration_name
  ```

  That will create a code that usually goes something like this: 

  ```javascript
    exports.up = function (knex) {
      // code to make the change in the database
    };

    exports.down = function (knex) {
      // code to revert the change in the database
    };
  ```

  In the **up** function you write the code for the change and in the **down** function the code to revert the change of the **up** function.

  Then just run the following to apply the change (it will execute the up function):
  ```
  $ knex migrate:make latest
  ```
  If you want to revert it, run the following (it will execute the down function):
  ```
  $ knex migrate:make rollback
  ```

  When you use the [Chinchay Command Line Interface](./cli) to create migrations it will use this. For more information on migrating with knex go to the [documentation](http://knexjs.org/). 

### Why postgres and not another database system?

To be honest, just because. Postgres is one of the most popular databases and it seemed as a good starting point. At the moment we are working to make Chinchay compatible with mysql and other databases, actually if you are a database expert help us out making Chinchay compatible with more databases!



## REST API

### Hateoas


### oAuth 2.0

## the backend flag

## the middleware flag

## the backend flag

## Do I prefer camels or snakes?
