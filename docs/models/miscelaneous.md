## Overview

There are several more miscelaneous function that can be used. So here we will look at them.


## columnsNames

What if you want to get all the column names? Maybe to check if the a certain relation has a certain property?

```javascript
  Coffee.columnsNames();
```

will return an array with the name of all the columns: 

```javascript
  [ 'id', 'name', 'price', 'created_at', 'updated_at' ]
```

## getFirstDate

This method will return the created_at of the first entry:
```javascript
  Coffee.getFirstDate();
```

will return a Date Object: 

```javascript
  2019-07-13T21:18:08.748Z
```

This is very similar to the following query:

```javascript
  Coffee.find({}, 'all', { rawSelect: 'min(created_at)', clearSelect: true });
```

However this will return an array with the result, whereas the first one will return the date straight away.


## extractSearch

## extractColumns

## extractOptions
