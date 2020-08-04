## Overview

  The ChinchayError is a class that extends the Error class. In simple its the same that the error class, but it has a user-defined identifier called the chinchayCode. This is used by the ErrorHandler to identify each error.

### parameters

  * error: A given Error. If you want to mantain an Error but add the chinchayCode, pass it as the first argument. See more in the [Map to Another Error Section](#map-to-another-error).
  * code: 
  * message:



## chichayCode



## chinchayMessage




## Map to Another Error

Sometimes you do not want to create a new Error, rather you desire to transform a given error into a ChinchayError. For example, you are working with an external API and the its the API the one that throws the Error:


```javascript
  requestify.get('https://example.com/api/coffee/find/').then((result) => {
    resolve(result);
  }).catch((err) => {
    const error = new ChinchayError(err, 'api_error');
    reject(error);
  });
```

In the previous example we do not desire to loose the information of the `err` variable, therefore we pass it on so that chinchay will build over it.