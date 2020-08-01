## Overview

 The Access Module has two Functions. The first one is to be in charge of generating an access token. This token follows the json web token standard, by generating the token with the [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) npm package. The routes protected by the Middleware will expect request to hold this token as a Bearer token.

  Second, it restrict which users can access different content, functionalities, functions, etc. It work with roles, were each user can have many roles. Each role will give him access to certain data and/or functionalities. There are two types of roles:

  * RESTRICTED ROLES: roles that has access to a particular entry. Its accessibility is limited to that entry. For example, lets assume you have an app with information about coffees, if a user can only access 1 particular coffee, he should be granted a restricted role.
  * UNRESTRICTED_ROLES: roles that have complete access on a particular module or subdivision of the app. Usually used for a certain database relation. lets assume you have an app with information about coffees and teas, if a user can access all the coffees but not the teas, he should be granted an unrestricted role to coffees.

  This module works side by side with [TheWall](https://www.npmjs.com/package/thewall). and will require a working instance of TheWall to work properly.


## Configure


  ### Restriced and Unrestricted Roles

  To configure it, we need to pass it a configuration file indicating which roles are unrestricted and which are restricted. For example lets create a `access.js` file with the following:

  ```javascript
  const UNRESTRICTED_ROLES = {
    coffee: ['admin', 'coffeeAdmin'],
    tea: ['admin', 'teaAdmin'],
  };

  const RESTRICTED_ROLES = {
    coffee: ['coffeeDrinker'],
    tea: ['teaDrinker'],
  };

  module.exports = {
    UNRESTRICTED_ROLES,
    RESTRICTED_ROLES,
  };
  ```

  In this example, coffeeAdmin has unrestricted access to the coffees, but no access to the teas, whereas the coffeeDriker has restricted access to coffee.

  For Chinchay to use this, the path of the configuration file must be provided in the `.chainfile.js`:

  ```javascript
  const path = require('path');

  module.exports = {
      access: path.join(__dirname, 'access.js'),
      knex:  path.join(__dirname, 'knex.js')
  };
  ```

  ### TheWall

  Lastly, a [TheWall](https://www.npmjs.com/package/thewall) instance must be provided in the `chainfile`. 
  
  We create the a `thewallfile.js` to hold the configuration of the wall:

  ```javascript
  const path = require('path');

  module.exports = {
    access: {
      admin: ['*'], // access everything
      coffeeAdmin: ['/api/coffee/*'], // access to all routes starting with /api/coffee/
      coffeeDrinker: [
        '/api/coffee/find', /* index with all the coffee it has access to */
        ['/api/coffee/:id', 'id', 'get'], /* view the coffee with id=:id, only if it has the role coffeeDrinker to that :id. */
      ], 
      teaAdmin: ['/api/tea/*'], /* access to all routes starting with /api/tea/ */
      teaDrinker: [
        '/api/tea/find', /* index with all the tea it has access to */
        ['/api/tea/:id', 'id', 'get'], /* view the tea with id=:id, only if it has the role teaDrinker to that :id. */
      ],
    },
    knex: path.join(__dirname, 'knex.js'),
  };
  ```

Now create a `thewall` instance:

  ```
  $ touch thewall.js
  ```

  Fill the generate fill with:
  ```javascript
  const config = require('./thewallfile');

  module.exports = require('thewall')(config);
  ```

  Add it to the `chainfile.js`: 
    
  ```javascript
  const path = require('path');

  module.exports = {
      access: path.join(__dirname, 'access.js'),
      thewall: path.join(__dirname, 'thewall.js'),
      knex:  path.join(__dirname, 'knex.js')
  };
  ```
  
  
  For more information as to how add TheWall instance look at the [API tutorial](../gettingstarted/apiMiddleware) and/or the [Chainfile Docs](../chainfile.html#middleware-access-thewall).
  
  





### bootstrap

## isAdmin

## hasAccessToAll

## accessiblesIds

## addAccessibleToSearch

## find

## hasAccessTo

## generateToken
