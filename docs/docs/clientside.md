## Overview

In this section you are going to learn how to work with the API from a client side. How can you access data, order it and filter it. This Section assumes a running Chinchay API on `http://localhost:3000`. We will be using the one generated in the [Getting Started Tutorial](../gettingstarted/ejs).


:::tip NOTE
  For all the following examples, you must change the `http://localhost:3000` for the domain of your API. Also change the `coffee` to the name of your relation. 

:::



## CREATE

 ### Endpoint

 ```
 POST http://localhost:3000/coffee/new
 ```


### Description
 Receives a JSON object and, in the database, inserts an entry with values defined in the JSON. It will return whether it was successful or not, and the saved entry.

### Example

```
url --header "Content-Type: application/json" \
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



## UPDATE

## DELETE

## FIND BY ID 


## FIND

## COUNT
