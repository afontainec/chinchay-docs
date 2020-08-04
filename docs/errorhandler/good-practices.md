## Defining Chinchay Codes

One big question is how to build Chinchay Codes? Lets keep in mind that the `chinchayCode` is intended to be machine-readable, therefore it is not necessary for it to be self explanatory, so keep it short. One tempting option is to number them, error 1, error 2, and so forth. However I would advice against that option, eventhough it is not intended for it to be easily understood by humans, it does not mean it has to be crazy difficult. I would suggest something that would give a hint of what happen. Some examples:

#### don'ts

  ```javascript
  1 // avoid numbering
  '0x13' // I know hex can look pro, but again avoid numbering
  'error when the parameter given does not match with an existing one' // too long, too much bla bla 
  ```

#### do's

  ```javascript
  'unexistant_parameter'
  'id_not_found'
  'incorrect_format'
  'emptyData' // can be camel case or your case of preference. For these errors I tend to go for snake cases though.
  ```


### Recicling chinchayCode

A common question is should I create a different `chinchayCode` for every posible Error or should I reuse them?

It truly depends on the case. Keep in mind that the mission here is to give to the client the correct correct and understandables messages. So do not try to overoptimize the chinchayCodes. However if two errors are very similar, will have the same message and the same code, well yeah, then please do recycle! This will maintain a shorter `errorTranslate`, easier to read or debug.

## Global ErrorHandler

One interesting way of organizing the ErrorHandler is to have 1 errorHandler for the whole proyect. In one file, `errorhandlerfile.js` we will store the `errorTranslate` parameter:

```javascript
  module.exports = {
    empty_update: {
      code: 422,
      message: 'Could not be processed.'
    }, 
    no_access: {
      code: 403, message: 'Forbidden. You can not access the requested data.'
    },
    ...
    unexistant_option: {
      code: 400, message: 'Requested option is not valid.'
    },
  };
```

Then, in another file, lets call it `errorhandler.js`, we add the following:

```javascript
  const errorTranslate = require('path/to/errorhandlerfile');
  const { ErrorHandler } = require('chinchay');

  const errorHandler = new ErrorHandler(errorTranslate);

  module.exports = errorHandler;
```

Lastly, in each controller we replace:

```javascript
const { Table, ErrorHandler } = require('chinchay');

const errorHandler = new ErrorHandler();
```

with:

```javascript
  const errorHandler = require('path/to/errorhandler');
```

#### pros

The main reason to use it this way is because the `errorTranslate` parameter requires spaces. If you have a complete mapping of errors, your controllers will endup being more errorTranslate than controller. This look ugly. 

Moreover, it is quite common for controllers to have very similar `errorTranslate`. This will lead to a lot of copy/pasting. On the long run this is hell, imagine you have 10 controller and you found one new Error you haven't thought before. Even worst, this error can happen in every controller, you will have to add it to the 10 controller. With a centralized errorHandler it is just one change.  

#### cons

You loose flexibility. You might want to return different messages for the same error depending on the controller (you could be interested in returning different http status codes as well, but that is less common).

## HTTP Codes guide

Here is a quick guide of the codes I use and when I use them.

### 200

Success, when everything go as expected.

### 400

This is basically a "its not my fault" code. Whenever an error is thrown because the client made a wierd request.

### 401 

401 the user is not authorized. The user must give a valid Authorization header field.

### 403

Forbidden. The user does not have access to the requested data.

### 404

Not Found. What you are looking for has not been found.

### 500

This is basically "not a clue what happen". It oficially means "Internal Server Error", but it is usually used as something we did not expect to happen, occurred.

### And More

There are plenty of more errors, here is a [complete list](https://www.restapitutorial.com/httpstatuscodes.html).

## Developer Alert

If you are deploying to production is a must to monitor the health of your server. This will let you know when something unexpected happen and act accordingly. 

In my experience, I usually do not do much of error handeling at the beggining. Lets just return 500 to every error (or well, almost every error) and place an alert that would notify me everytime an error 500 occurs. When this alert triggers, I then analyze the request, see what happened and what would be the correct code and message, add it to the errorHandler and move on. This allows me to only populate the errorHandler with real cases, rather than overthinking everything that can go wrong.


