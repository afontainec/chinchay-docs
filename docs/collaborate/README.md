![Chinchay](https://chinchay-docs.herokuapp.com/assets/logo.png)



Welcome to **Chinchay Collaborate**

This section is intended to help you (or anyone) to became part of the Chinchay Community! Chinchay is a beginners friendly environment, if you have any doubt just contact me: [antonio.fontainecorrea@gmail.com](antonio.fontainecorrea@gmail.com).

## Overview


The [Chinchay Repo](https://github.com/afontainec/chinchay) is hosted in github.

* [Github Repository](https://github.com/afontainec/chinchay)
* [Issues](https://github.com/afontainec/chinchay/issues)
* [Pull Requests](https://github.com/afontainec/chinchay/pulls)

Pull Request are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests appropriately.

If you want to help but don't know how, contact me [antonio.fontainecorrea@gmail.com](antonio.fontainecorrea@gmail.com) and we will discuss which functionalities of the backlog you can help with.


## Continuous Integration

  For any pull request to be approved will require for the test to pass with a minimmum coverage. Moreover the linter will be checked. Linter warnings are allowed but non-preferred.

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

*Type* should answer why are you commiting. Choose one of the following:

* **feat:** A new feature
* **fix:** A bug fix
* **docs:** Documentation only changes
* **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor:** A code change that neither fixes a bug nor adds a feature
* **perf:** A code change that improves performance
* **test:** Adding missing or correcting existing tests
* **chore:** Changes to the build process or auxiliary tools and libraries such as documentation generation

*Context*, or also called scope is what are you working on? In which component, functionality or subdivision of the app are you working on. Optionally you can add a *subcontext*, for giving a more detailed information.

*Description* A description of what are you working on, it should be short. All together the commit shouldn't have more that 100 characters.


## File Structure

To get you started the file structure is as follows: 

```
  .
  ├── chinchapp                  
  ├── cliApp       
  ├── db   
  ├── docs
  ├── example              
  ├── models
  └── test
```

There are more files and directories but this is the "main skeleton". Lets dig into each directory:

### chinchapp

If you look into de `.gitignore`, you may notice the content of chinchapp is ignored. So actually this isn't a fundamental part of the package. But is useful for development and debugging. Look at [Running Locally and Debugging](#running-locally-and-debugging) for further information.


### cliApp

### db

### docs

### example

### models

### test

## Running Locally and Debugging

### Chinchapp


## Documentation

### Versioning