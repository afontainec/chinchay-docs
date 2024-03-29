![Chinchay](/logo.png)



Welcome to **Chinchay Collaborate**

This section is intended to help you (or anyone) to become part of the Chinchay Community! Chinchay is a beginners friendly environment, if you have any doubt just contact me: [antonio.fontainecorrea@gmail.com](antonio.fontainecorrea@gmail.com).

## Overview


The [Chinchay Repo](https://github.com/afontainec/chinchay) is hosted in github.

* [Github Repository](https://github.com/afontainec/chinchay)
* [Issues](https://github.com/afontainec/chinchay/issues)
* [Pull Requests](https://github.com/afontainec/chinchay/pulls)

Pull Request are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests appropriately.

If you want to help but don't know how, contact me [antonio.fontainecorrea@gmail.com](antonio.fontainecorrea@gmail.com) and we will discuss which functionalities of the backlog you can help with.


## Continuous Integration

  For any pull request to be approved will require for the test to pass with a minimum coverage. Moreover the linter will be checked. Linter warnings are allowed but non-preferred.

  To locally check this run:

  ```
  npm run test
  npm run coverage
  npm run linter
  ```

## commit

For commits, we follow [this guide](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits).

But in a nutshell every commit must be as follows:

```
git commit -m 'type(context): description
```

or

```
git commit -m 'type(context/subcontext): description
```

*Type* should answer why are you committing. Choose one of the following:

* **feat:** A new feature
* **fix:** A bug fix
* **docs:** Documentation only changes
* **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc)
* **refactor:** A code change that neither fixes a bug nor adds a feature
* **perf:** A code change that improves performance
* **test:** Adding missing or correcting existing tests
* **chore:** Changes to the build process or auxiliary tools and libraries such as documentation generation

*Context*, or also called scope is what you are working on? In which component, functionality or subdivision of the app are you working on. Optionally you can add a *subcontext*, for giving a more detailed information.

*Description* A description of what you are working on, it should be short. All together the commit shouldn't have more than 100 characters.


## File Structure

To get you started the file structure is as follows: 

```
  .
  ├── chinchapp                  
  ├── cliApp       
  ├── db   
  ├── example              
  ├── models
  └── test
```

There are more files and directories but this is the "main skeleton". Let's dig into each directory:

### chinchapp

If you look into de `.gitignore`, you may notice the content of chinchapp is ignored. So actually this isn't a fundamental part of the package. But is useful for development and debugging. Look at [Running Locally and Debugging](#running-locally-and-debugging) for further information.


### cliApp

Next in line is the cliApp, here is all the code in charge of handling the Command Line Interface (CLI). If we look at the package.json we will see the following:

```javascript
  "bin": {
    "chinchay": "./cliApp/lector.js"
  },
```

So when we are indicating that when someone rans `chinchay` in the terminal the file `cliApp/lector.js` will be invoked.

The logic within this module is quite simple:

1. `lector.js` receives the command written by a user in the command line and invokes the corresponding function of the `interpreter.js`
2. `interpreter.js` interprets the user input and decides what should be done.
3. The rest of the files are the ones that actually **do the thing**. 

If we would have to do a parallel to a web app, the `lector.js` would be the `router`, the `interpreter` the `controller` and the rest are the `models`.

Full disclosure, this is not the tidiest part of the package and if you are looking where you could help, this is a strong candidate!

### db

There isn't much to tell about this directory, is where the migrations and seeds for the database are defined. If by this point you are thinking why on earth does Chinchay need a database for? Well actually it doesn't! The database is just for testing and developing. 

### example

`example` is where all the templates of the files generated by the CLI are. These templates are 'compiled', where the in-text variables are changed by what the user defines. Each in-text variable is delimited by the $ character. For example:

```
  This is $VARIABLE$
```

If, when compiled a `VARIABLE` key is passed, the in-text variable will be changed. For instance:

```javascript
  fileCreator.compileString('this is  $VARIABLE$', {VARIABLE: 'Chinchay!'})
  >> 'This is a Chinchay'
```



### models

This is the most interesting part of Chinchay. Here is where all the magic happens. 

* accessToken: This file holds the functions for creating and decrypting the accessToken. It does assumes the token is present as Bearer Token. 
* middleware: In charge of filtering that each request to the server holds a valid authentication and that has access to the endpoint requested. Works hand by hand with [TheWall](https://www.npmjs.com/package/thewall).
* access: Functions to help you filter and define which users can access which data.
* chinchayError: Especial error generated by chinchay, works with the ErrorHandler.
* ErrorHandler: In charge of mapping the errors that occurred in the server to http status codes and human-readable messages. Works hand by hand with the ChinchayError.
* hateoas: Hateoas generator to add hateoas to your API.
* table: The class from which every table gateway model extends. It holds all the code to do CRUD operations. This is the most complete model of all.

### test

Here all the tests are located. As a general guidance, each function is tested in one file, each file holds all the tests of that function. The relative path to this test file, from the test folder, is equivalent to the relative path from the base of the repo to where that function is located.

For example, the function `isAdmin` of the file `models/access.js` is located at:
`test/models/access/isAdmin.js`

## Running Locally and Debugging

For debugging and developing first of all you must have postgreSQL running on your computer. Create a database called `chinchay_test`. Once the database is created, migrate it:

```
npm i knex -g # install knex globally
knex migrate:latest --env test
```
By running the previous commands on the repo it should run all the migrations needed to run the tests. For more guidance see the [Getting Started Tutorial](../gettingstarted/ejs). 


### Creating an App for Debugging

If you need a running chinchay app, just build one in the chinchapp folder. Note that all it's content is ignored in the .gitignore file. I personally have a functional Angular app there working with Chinchay, however feel free to do the app that best fits your needs! As it is in the .gitignore only you will see it!


## Documentation

The documentation lives in [this repo](https://github.com/afontainec/chinchay-docs). For every functionality you do develop the corresponding documentation must be added, otherwise the pull request will not be approved. Actually this same text is written in that repo! It is built with vuepress.


### Versioning

It is important to note that since version 2.0.0 the version of chinchay and chinchay-docs is synchronized. Therefore version 2.0.0 of the chinchay-docs documents chinchay@2.0.0.