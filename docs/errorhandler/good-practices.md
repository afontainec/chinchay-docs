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


