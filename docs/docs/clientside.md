## Overview

In this section you are going to learn how to work with the API from a client side. How can you access data, order it and filter it. This Section assumes a running Chinchay API on `http://localhost:3000`. We will be using the one generated in the [Getting Started Tutorial](../gettingstarted/ejs).


:::tip NOTE
  For all the following examples, you must change the `http://localhost:3000` for the domain of your API. Also change the `coffee` to the name of your relation. 

:::



## Create

 ### Endpoint

 ```
 POST http://localhost:3000/coffee/new
 ```


### Description

 Receives a JSON object and, in the database, inserts an entry with values defined in the JSON. It will return whether it was successful or not, and the saved entry.

### Example

```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"this is the name","price":100}' \
  http://localhost:3000/api/coffee/new
```

### Response

```javascript
{
  "message": "Elemento guardado exitosamente",
  "data": {
    "id": 1,
    "name": "this is the name",
    "price": 100,
    "created_at": "2018-11-21T11:54:42.840Z",
    "updated_at": "2018-11-21T11:54:42.840Z",
    "links": [
      { "rel": "self", "href": "/api/coffee/1", "type": "GET" },
      { "rel": "edit", "href": "/api/coffee/1/edit", "type": "POST" },
      { "rel": "delete", "href": "/api/coffee/1/delete", "type": "DELETE" },
      { "rel": "new", "href": "/api/coffee/new", "type": "POST" },
      { "rel": "all", "href": "/api/coffee/find", "type": "GET" },
      { "rel": "count", "href": "/api/coffee/count", "type": "GET" }
    ],
  }
}
```


## Update

 ### Endpoint

 ```
 PUT http://localhost:3000/coffee/:id/edit
 POST http://localhost:3000/coffee/:id/edit
 PATCH http://localhost:3000/coffee/:id/edit
 ```

 ### Description

This URL can be called either with PUT, PATCH or POST. It receives a JSON object and, in the database, updates the values defined in the JSON for the entry with id = :id. It will response if it was successful the update and the entry updated. 

:::tip
The [RESTful API](https://restfulapi.net/http-methods/) recommends the PUT verb for edits/updates, so we recommend you to prefer that verb.
:::

 ### Example

 ```
  curl --header "Content-Type: application/json" \
    --request POST \
    --data '{"name":"this is the updated name" }' \
    http://localhost:3000/api/coffee/1/edit
```

 ### Response

 ```javascript
{
  "message": "Elemento actualizado exitosamente",
  "data": {
    "id": 1,
    "name": "this is an updated name",
    "price": 100,
    "created_at": "2018-11-21T11:57:02.767Z",
    "updated_at": "2018-12-12T11:52:32.750Z",
    "links": [
      { "rel": "self", "href": "/api/coffee/1", "type": "GET" },
      { "rel": "edit", "href": "/api/coffee/1/edit", "type": "POST" },
      { "rel": "delete", "href": "/api/coffee/1/delete", "type": "DELETE" },
      { "rel": "new", "href": "/api/coffee/new", "type": "POST" },
      { "rel": "all", "href": "/api/coffee/find", "type": "GET" },
      { "rel": "count", "href": "/api/coffee/count", "type": "GET" }],
  }
}
```

Note that only the name was changed and the price was left intact, as the `data` did not provide a new price.


## Delete

 ### Endpoint

 ```
 DELETE http://localhost:3000/coffee/:id
 ```

 ### Description

This URL deletes the entry with id = :id. Be very careful with this endpoint as it is irreversible.


:::tip
  Rather than eliminating the entry you can add an "archived" column to the table. Where if an entry has `archived=true` it means it is "deleted". So if you screw up and delete something you can get it back (by setting `archived=false`).
:::

 ### Example

 ```
curl --request DELETE \
  http://localhost:3000/api/coffee/1
```

 ### Response

 ```javascript
{
  "message": "Elemento eliminado exitosamente",
  "data": {
    "id": 1,
    "name": "this is an updated name",
    "price": 100,
    "created_at": "2018-11-21T11:57:02.767Z",
    "updated_at": "2018-12-12T11:52:32.750Z",
    "links": [
      { "rel": "self", "href": "/api/coffee/1", "type": "GET" },
      { "rel": "edit", "href": "/api/coffee/1/edit", "type": "POST" },
      { "rel": "delete", "href": "/api/coffee/1/delete", "type": "DELETE" },
      { "rel": "new", "href": "/api/coffee/new", "type": "POST" },
      { "rel": "all", "href": "/api/coffee/find", "type": "GET" },
      { "rel": "count", "href": "/api/coffee/count", "type": "GET" }],
  }
}
```

## Find by ID 

 ### Endpoint

 ```
 GET http://localhost:3000/coffee/:id
 ```

 ### Description

Returns a JSON object representing the object with id = :id. If there is no such entry, it reports the error.

 ### Example

 ```
curl --request GET \
  http://localhost:3000/api/coffee/1
```

 ### Response

 ```javascript
{
  "message": "Elemento encontrada exitosamente",
  "data": {
    "id": 1,
    "name": "this is an updated name",
    "price": 100,
    "created_at": "2018-11-21T11:57:02.767Z",
    "updated_at": "2018-12-12T11:52:32.750Z",
    "links": [
      { "rel": "self", "href": "/api/coffee/1", "type": "GET" },
      { "rel": "edit", "href": "/api/coffee/1/edit", "type": "POST" },
      { "rel": "delete", "href": "/api/coffee/1/delete", "type": "DELETE" },
      { "rel": "new", "href": "/api/coffee/new", "type": "POST" },
      { "rel": "all", "href": "/api/coffee/find", "type": "GET" },
      { "rel": "count", "href": "/api/coffee/count", "type": "GET" }],
  }
}
```

## Find

 ### Endpoint

 ```
 GET http://localhost:3000/coffee
 ```

 ### Description

Returns an array with all the entries matching the given query. This is where the magic really happens. The user can customize the result by adding a query, in our first example we would look when no query is given (therefor returns all the entries), and the dig into all the options that can be added to filter and customize your search.


 ### Example

 ```
curl --request GET \
  http://localhost:3000/api/coffee
```

 ### Response

  Will return an array with all the entries:

  ```javascript
  {
    "message": "Busqueda encontrada exitosamente",
    "data": [{
        "id": 1,
        "name": "this is an updated name",
        "price": 100,
        "created_at": "2018-11-21T11:54:42.840Z",
        "updated_at": "2018-11-21T11:54:42.840Z",
        "links": [Object, Object, Object, Object, Object, Object],
      }, {
        "id": 2,
        "name": "this is the name",
        "price": null,
        "created_at": "2018-11-21T11:57:02.767Z",
        "updated_at": "2018-11-21T11:57:02.767Z",
        "links": [Object, Object, Object, Object, Object, Object],
      }, {
        "id": 3,
        "name": "other",
        "price": 100,
        "created_at": "2018-11-21T12:06:04.065Z",
        "updated_at": "2018-11-21T12:06:04.065Z",
        "links": [Object, Object, Object, Object, Object, Object],
      }, {
        "id": 4,
        "name": "expensive",
        "price": 110,
        "created_at": "2018-11-21T12:06:22.400Z",
        "updated_at": "2018-11-21T12:06:22.400Z",
        "links": [Object, Object, Object, Object, Object, Object],
      }],
  }
  ```

## Count
