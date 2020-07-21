## Overview

Here we are going to talk about the `count` method. This is an asynchronous method that returns the amount of entries that matches with the given search. So lets dive into it!


### Parameters

  * Search: Javascript object with the definition of what should be searched.
  * Options: A javascript object for more configurations, such us sorting, grouping, etc.

  In this tutorial we are going to see several examples. However for a fully detailed of how to set both of this parameters check the [find documentation](./find).


### Return value

An integer indicating the amount of entries wich meets with the requested:

  ```javascript
  2
  ```

## Count: Search Examples  

Lets go for the fun part: 


```javascript
  Coffee.count({ price: 100 });
```

This will count all the coffees of price = 100.

```javascript
  Coffee.count({ price: 100, name: 'latte' });
```

This will count all the coffees of price = 100 and name = 'latte'.


```javascript
  Coffee.count();
```

```javascript
  Coffee.count({});
```

If no search is defined, it will count all the entries. The same behaviour will occur if an empty search is provided.



```javascript
  Coffee.count({ price: ['>', 100] });
```

This will count all the coffees where the price is greater than 100.

```javascript
  Coffee.count({ price: ['<>', 100], name: 'latte' });
```

This will count all the coffees where the price is distinct to 100 and the name is 'latte'.

```javascript
  Coffee.count({ price: ['in', [100, 90]]});
```

 This is one of my favorites, in this case will count all the entries where the price is either 90 or 100. 

## startDate and endDate

Lets assume you what to count all the coffees that where created before 2020? We could do it as follows:

```javascript
  Coffee.count({ created_at: ['<', '2020-01-01 00:00:00.000']);
```

And that totally fine, however this can also be achieved using the third parameter: `options`. The `startDate` and `endDate` can be define to count values created at a certain interval.

 ```javascript
   Coffee.count({}, { startDate:'2018-11-21T11:55:00.000Z' });
 ```
 
 In this case will count all the entries where the created_at is after the given startDate, in this case, after 2018-11-21T11:55:00.000Z.

  ```javascript
   Coffee.count({}, { endDate:'2018-11-21T12:00:00.000Z' });
 ```
 
 In this case will count all the entries where the created_at is after the given startDate, in this case, before 2018-11-21T12:00:00.000Z..

  ```javascript
   Coffee.count({}, { endDate:'2018-11-21T12:00:00.000Z', startDate: '2018-11-21T11:55:00.000Z&' });
 ```
 
 In this case will count all the entries where the created_at is in between the given startDate and endDate, in this case, between 2018-11-21T11:55:00.000Z and 2018-11-21T12:00:00.000Z.
 

## rawWhere

  Now this is getting advanced, this is intended for people who knows SQL. Sometimes we have craaazy ideas and we need even more sophisticated queries. In the options we can pass a `rawWhere` property. 

  RawWhere allows you to be even more specific on how you want to filter your results, sometime we just what wierd queries. It can be given as a string or an array for sql injection. Lets look at some examples:

   ```javascript
   Coffee.count({}, { rawWhere: "name = 'expensive' or price = 100 "});
  ```

  If you want to count all the coffees where they are either named expensive or priced at 100, the previous rawWhere will allow you to do so.

  #### SQL Injection

  :::danger
  Be very careful with this as it can be used as [sql injection](https://www.acunetix.com/websitesecurity/sql-injection/). As Uncle Ben once said, _with great power comes great responsability_. 
  :::

  [Sql injection](https://www.acunetix.com/websitesecurity/sql-injection/) is one of the most typical and dangerous attack a website can recieve, so it is important to be extremely careful about it. If you do not know what it is, this meme should explain it:

  ![SQL INJECTION](https://chinchay-docs.herokuapp.com/assets/sql-injections.png)


  To prevent sql injections you can defined the rawSelect as an array. An example: 

  ```javascript
   Coffee.count({}, { rawWhere: ["name = ? or price = ? ", ["expensive", 100]] });

  ```
  In this case `expensive` and `100` are indicated as `?` and passed in a second parameter.

  :::warning
  If by any chance a user input will be used to create the `rawWhere`, the `rawWhere` **MUST** by in array form and the user input passed as the second value of that array.
  :::


  

## Group By

For same case uses grouping your response can be very helpful. For instance let assume we want to count all the entries by price, in other words how many coffees cost 1, how many cost 2, and so on. This can be achieved by the group by:

```javascript
  Coffee.count({}, {groupBy: 'price' });
```

This will no longer return a single integer it will return an array as follows:

```javascript
[ { count: 1, price: 12 }, { count: 2, price: 100 } ]
```

So there is 1 coffee priced at 12, and 2 coffees priced at 100.

  ### rawSelect

  So know we can pass a RawSelect option that can be very powerful. It can be given as a string or an array for sql injection. Fo instance:

  ```javascript
   Coffee.count({}, { rawSelect: 'EXTRACT(MONTH FROM created_at) as month', groupBy: 'month'});
  ```
  Here we are using the rawSelect to use the psql function extract to return the month of creation. Then we are counting how many entries are created each month.


  #### SQL Injection

  :::danger
  Be very careful with this as it can be used as [sql injection](https://www.acunetix.com/websitesecurity/sql-injection/). As Uncle Ben once said, _with great power comes great responsability_. 
  :::

  [Sql injection](https://www.acunetix.com/websitesecurity/sql-injection/) is one of the most typical and dangerous attack a website can recieve, so it is important to be extremely careful about it. If you do not know what it is, this meme should explain it:

  ![SQL INJECTION](https://chinchay-docs.herokuapp.com/assets/sql-injections.png)


  To prevent sql injections you can defined the rawSelect as an array. An example: 

  ```javascript
   Coffee.count({}, { groupBy: 'month', rawSelect: ['EXTRACT(MONTH FROM ??) as month', ['created_at']] });

  ```
  In this case the `created_at` is indicated as `??` and passed in a second parameter.

  :::warning
  If by any chance a user input will be used to create the `rawSelect`, the `rawSelect` **MUST** by in array form and the user input passed as the second value of that array.
  :::

## Return as Query

Last but definetely not least: `returnAsQuery`. If this parameter is defined as `true`, it will return a knex query object. With it you can use all of knex options to build even more sophisticated queries. Lets look at an example:

```javascript
  const query = Coffee.count({}, { returnAsQuery: true });
  query.join('tea', 'coffee.id', '=', 'tea.id');
```

This way we can cross the tea table with the coffee relation. This is very powerful and can allow you to do many things!

:::tip DEBUGGING TIP
  For debugging, set `{ returnAsQuery: true }` and then do `console.log(query.toString())` and you will be able to see the psql command. 
:::


## countGroupBy

  The same done by passing the groupBy in the options can be achieved with the countGroupBy method.

  ```javascript
  Coffee.count({}, { groupBy: 'price' });
  ```

Is equivalent to: 

  ```javascript
    Coffee.countGroupBy('price');
  ```

  :::tip
  In my opinion is "cleaner" to just use the count method.
  :::

## countIn


  The `countIn` method will count all the entries where the `target` parameter is within the `validOptions`. This can also be done using the `count` method:

```javascript
  Coffee.count({ price: ['in', [100, 90]]});
```

Is equivalent to: 

  ```javascript
    Coffee.countIn('price', [100, 90]);
  ```

  :::tip
  In my personal opinion is "cleaner" to just use the count method.
  :::




