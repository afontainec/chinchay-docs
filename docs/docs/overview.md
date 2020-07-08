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

But in a nutshell, the code is logically separated in three areas. The model, here is where the logical-business code is written. They are the gateway to the database and would do most of the "important" job. The view manages all the UI logic and the controller is the interface that connects the view whith the model.

The [Command Line Interface](./cli) will allow you to generate files in this pattern to keep everything organized and clean.

## Database


So what is actualy being created? Well it depends on how you have configured the [chainfile](./chainfile) and which flages are passed. But in a nutshel it will create a model, a controller, views, routes and a knex migration.

#### Knex migration

Well everything starts with the database. So a migration to add the new table is created. If by this point your a thinking database, table, knex, migration? WTF are those? dont worry we are going to explain them right away.

Chinchay works with [Postgres](https://www.postgresql.org/about/). This is the [database system](https://en.wikipedia.org/wiki/Database) that stores the data. 

#### Why not another database system?

To be honest, just because. Postgres is one of the most popular databases and it seemed as a good starting point. At the moment we are working to make Chinchay compatible with mysql and other databases.






## REST API

### Hateoas


### oAuth 2.0

## the backend flag

## the middleware flag

## the backend flag

## Do I prefer camels or snakes?
