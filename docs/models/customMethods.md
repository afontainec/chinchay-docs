## Overview

If you want to extend the class and add your own methods it is very easy! Here we are going to talk of how to add methods to your models that fits with your special needs!

## Creating custom methods

When the `chinchay new ` command the following model is created:

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

Lets assume we what to add a method called `findByName`, where it will return all the entries where the name matches the given input. We can easily add it at such: 


```javascript
const { Table } = require('chinchay');


class Coffee extends Table {
  constructor() {
    const tableName = 'coffee';
    super(tableName);
  }

  findByName(name) {
    const search = { name };
    return super.find(search);
  }
}


const instance = new Coffee();


module.exports = instance;
```

We have added a `findByName` method that parse the input to the search paremeter and call the find function.

Here another example:

```javascript
const { Table } = require('chinchay');


class Coffee extends Table {
  constructor() {
    const tableName = 'coffee';
    super(tableName);
  }

  expensive() {
    const search = { price: ['>', 100] };
    const options = { orderBy: 'price' };
    return super.find(search, 'all', options);
  }
}


const instance = new Coffee();


module.exports = instance;
```

We have added an `expensive` method that will return all the coffee of a price higher than 100 ordered by price.

## Overwriting exisiting methods

You may want to overwrite existing methods to change same aspect. For instance, let assume you have a users relation in the database. Were each user has a username and a password. When you `findById` you do not want to return the password property. Let's look at the example: 

```javascript
const { Table } = require('chinchay');


class Users extends Table {
  constructor() {
    const tableName = 'users';
    super(tableName);
  }

  async findById(id, columns, options) {
    const result = await super.findById(id, columns, options);
    delete result.password;
    return result;
  }
}


const instance = new Users();

module.exports = instance;
```

Here we are removing the password property before returning. 