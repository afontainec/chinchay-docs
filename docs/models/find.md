## Overview

Next in line, we will see about the `find` method. This is an asynchronous method that returs an array of javascript object, where each javascript object represent an entry of the database that meets with the parameters requested. This is one of the most flexible and powerful tool. With no more overdues, lets get to it.


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

 

## startDate and endDate

## Order by, limit and offset

## rawSelect and RawWhere

## Return as Query

## Group By

## FindById


## all

## findIdIn

## findIn

## arrayOfIds



