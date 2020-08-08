## New

The new method will return a javascript object representing a _new_ and empty entry.

::: warning
  **Important:** this entry is not saved on the database until the save method is called.
:::

Using the example of the [Getting Started tutorial](../gettingstarted/ejs) the following:

```javascript
  coffee.new();
```

will return:

```javascript
{ id: null,
  name: null,
  price: null,
  created_at: null,
  updated_at: null }
```

## Save

Method to save data to the database. It expects a javascript object representing the data to be saved.

```javascript
  coffee.save({name: 'cappuccino', price: 5 });
```

The previous code will save an entry where the name is 'cappuccino' and the price is `5`.


## Save several at once

The same method can be used to save several instances at once. To do this an array of javascript objects must be passed. Each object will represent one database entry.

```javascript
  coffee.save([{ name: 'cappuccino', price: 5 }, { name: 'latte' }]);
```

This will save two entries, the first named cappuccino at a price of 5, and the second named latte and without a given price. The previous is equivalent to:

```javascript
  Promise.all([coffee.save({ name: 'cappuccino', price: 5 }), coffee.save({ name: 'latte' })]);
```
