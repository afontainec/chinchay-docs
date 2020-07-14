## Overview

Next in line, we will see about the `find` method. This is an asynchronous method that returns an array of javascript object, where each javascript object represent an entry of the database that meets with the parameters requested. This is one of the most flexible and powerful tool. With no more overdues, lets get to it.


### Parameters

  * Search: Javascript object with the definition of what should be searched.
  * Columns: An array with the columns that should be return. If its null or 'all' will return all the columns.
  * Options: A javascript object for more configurations, such us sorting, grouping, etc.

### Return value

an array of javascript object, where each javascript object represent an entry of the database that meets with the parameters requested. An example could be:

  ```javascript
   [{
      "id": 1,
      "name": "this is an updated name",
      "price": 100,
      "created_at": "2018-11-21T11:54:42.840Z",
      "updated_at": "2018-11-21T11:54:42.840Z",
    }, {
      "id": 2,
      "name": "this is the name",
      "price": null,
      "created_at": "2018-11-21T11:57:02.767Z",
      "updated_at": "2018-11-21T11:57:02.767Z",
    }, {
      "id": 3,
      "name": "other",
      "price": 100,
      "created_at": "2018-11-21T12:06:04.065Z",
      "updated_at": "2018-11-21T12:06:04.065Z",
    }, {
      "id": 4,
      "name": "expensive",
      "price": 110,
      "created_at": "2018-11-21T12:06:22.400Z",
      "updated_at": "2018-11-21T12:06:22.400Z" }],
  ```



## Simple Queries

The first parameter of the `find` method is the `search`: a javascript object where you define what you want to search for. Lets see some examples:

```javascript
  Coffee.find({ price: 100 });
```

This will return all the coffees of price = 100.

```javascript
  Coffee.find({ price: 100, name: 'latte' });
```

This will return all the coffees of price = 100 and name = 'latte'.


```javascript
  Coffee.find();
```

If no search is defined, it will return all the entries. The same behaviour will occur if an empty search is provided: 

```javascript
  Coffee.find({});
```

## Queries for Masters

Simple queries are very powerful but not always meet what we are expecting. Let see more sophisticated examples:

```javascript
  Coffee.find({ price: ['>', 100] });
```

This will return all the coffees where the price is greater than 100.

```javascript
  Coffee.find({ price: ['<>', 100], name: 'latte' });
```

This will return all the coffees where the price is distinct to 100 and the name is 'latte'.

```javascript
  Coffee.find({ price: ['in', [100, 90]]});
```

 This is one of my favorites, in this case will return all the entries where the price is either 90 or 100. 

### General Rule

 As a general rule, you can define the property of the `search` as an array with two values, key=["command",value]. The query will translate to SQL as follows `WHERE  key command value`.


## columns

Sometimes the entries have way to many information and you only desire to access some few attributes of each entry, or there are sensible information you do not want to expose. In this cases the second parameter can be used: the `columns`. Lets look at some examples:

```javascript
  Coffee.find({ price: 100 });
```

By default it will return the complete object will all the columns.


```javascript
  Coffee.find({ price: 100 }, 'all');
```

It will return the complete object will all the columns, this is the default configuration.

```javascript
  Coffee.find({ price: 100 }, ['id', 'name']);
```

If it is defined as an array, will return only the columns defined in the array. In this case, only the id and name of every entry where its price is 100.

```javascript
  Coffee.find({ price: 100 }, ['id as identifier']);
```

In this case it will the id of return all the entries where the price is 100. However, instead of calling it id it will call it `identifier`.



## startDate and endDate

Lets assume you what to access all the coffees that where created before 2020? We could do it as follows:

```javascript
  Coffee.find({ created_at: ['<', '2020-01-01 00:00:00.000']);
```

And that totally fine, however this can also be achieved using the third parameter: `options`. The `startDate` and `endDate` can be define to return values created at a certain interval.

 ```javascript
   Coffee.find({}, 'all', { startDate:'2018-11-21T11:55:00.000Z' });
 ```
 
 In this case will return all the entries where the created_at is after the given startDate, in this case, after 2018-11-21T11:55:00.000Z.

  ```javascript
   Coffee.find({}, 'all', { endDate:'2018-11-21T12:00:00.000Z' });
 ```
 
 In this case will return all the entries where the created_at is after the given startDate, in this case, before 2018-11-21T12:00:00.000Z..

  ```javascript
   Coffee.find({}, 'all', { endDate:'2018-11-21T12:00:00.000Z', startDate: '2018-11-21T11:55:00.000Z&' });
 ```
 
 In this case will return all the entries where the created_at is in between the given startDate and endDate, in this case, between 2018-11-21T11:55:00.000Z and 2018-11-21T12:00:00.000Z.
 


## Order by, limit and offset

With the options, you can sort and limit your responses. Let see some examples: 

```javascript
   Coffee.find({}, 'all', { orderBy:'id', limit: '2' });
```
 
In this case will return the first two entries ordered by id in ascending order.

```javascript
   Coffee.find({}, 'all', { orderBy:['id', 'desc'], limit: '2' });
```
 
 In this case will return the first two entries ordered by id in descending order. 

```javascript
   Coffee.find({}, 'all', { orderBy:['id', 'asc'], limit: '2', offset: 1 });
```

 In this case will return the second and third entries ordered by id in ascending order. It skips the first one because of the offset given. 


 ```javascript
   Coffee.find({}, 'all', { orderBy: [["price","desc"],["id", "asc"]] });
```
 
 In this case will return the entries ordered by price in a descending order. In case that some entries have the same price, then they will be ordered by id in ascending order.

## rawSelect and RawWhere

## Return as Query

## Group By

## FindById


## all

## findIdIn

## findIn

## arrayOfIds



