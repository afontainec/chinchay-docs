## Overview

Next in line, we will see about the `find` method. This is an asynchronous method that returs an array of javascript object, where each javascript object represent an entry of the database that meets with the parameters requested. This is one of the most flexible and powerful tool. With no more overdues, lets get to it.


## Simple Queries

The first parameter of the `find` method is a javascript object where you define what you want to search for. Lets see some examples:

```javascript
  Coffee.find({ price: 100 });
```

This will return all the coffees of price = 100.

```javascript
  Coffee.find({ price: 100, name: 'latte' });
```

This will return all the coffees of price = 100 and name = 'latte'.


## Queries for Masters

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



