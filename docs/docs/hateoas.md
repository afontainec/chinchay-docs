## Overview

HATEOAS is one of the most distintive features of a REST API and is hardly ever present. HATEOAS tries to mimic our real-life browsing, when we visit a page all the posible links are presented (as buttons, images, etc). HATEOAS aims to do the same, which every API request a list of followup links are given. However, doing so its a pain in the *** for the developer, he is responsible to, for every API request, return all the followup link. So guess what does chinchay do? Yes it will make it veeery easy to do so with its HATEOAS generator.

You can read more about [HATEOAS here](https://restfulapi.net/hateoas/).


## HATEOAS Generator

So, lets get started. Will exemplify with the controller of [Getting Started Tutorial](../gettingstarted/ejs).

So the controller goes like this:

```javascript
const HateoasGenerator = require('chinchay').Hateoas;

...

const HATEOAS = new HateoasGenerator();
```

So here we are creating one instance of the HATEOAS generator for this specific controller.

:::tip
It is recommended to have 1 hateoas instance per controller. You may have 1 hateoas instance (created in a separated file) for many controller but hardly ever that is recommended. You may also have more several instances in one controller, however usally that is a sign that the controller needs some refactoring and to be splitted in several controller.
:::

## addLink

So we have our instance, how do we inform which urls should he add to every request?
Well its very simple, if we look at the controller we would see this auto-generated lines:

```javascript
  HATEOAS.addLink('self', '/api/coffee/:id');
  HATEOAS.addLink('edit', '/api/coffee/:id/edit', 'POST');
  HATEOAS.addLink('delete', '/api/coffee/:id/delete', 'DELETE');
  HATEOAS.addLink('new', '/api/coffee/new', 'POST');
  HATEOAS.addLink('all', '/api/coffee/find');
  HATEOAS.addLink('count', '/api/coffee/count');
```

So, 6 links are added. This generate a HATEOAS as such:

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


 Lets explain a bit the method `addLink(name, url, type)`

* **name**: the name defines a human-readable name for that link. It will be assign to property `rel`.
* **url**: Is the url of the given link. It is assign to the property `href`. Note that variables can be passed for the url. For instanse the self url is given an `:id` which is then replaced by the corresponding id.
* **type**: The http verb. It will be assing to the property `type`.

## get


## removeLink

