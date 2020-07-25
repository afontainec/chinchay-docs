## Overview

If you want to extend the class and add your own methods it is very easy! Here we are going to talk of how to add methods to your models that fits with your special needs!

## Creating custom methods

When the `chinchay` new command the following model is created:

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

Lets assume we what to add a method called `findByName`, where it will return all the entries where the name matches an input.


## Overwriting exisiting methods