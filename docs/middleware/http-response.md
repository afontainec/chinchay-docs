## Overview

 `httpResponse` will be responsible to generate the response for every http Request. It has two methods, `success` for when everything went right and `error` for when an error occurred.


## Success


  ### Parameters

   * text: friendly message indicating the response.
   * keys: Array of keys that the response is expected to have. Optionally, if it is only one key it can be passed as string.
   * values: Array of values that the response is expected to have. Value n will be assigned to key n.

  ### Examples


  ```javascript
  > httpResponse.success('ok', 'user', { id: 1, username: 'example' });
  <- { message: 'ok', user: { id: 1, username: 'example' } }
  ```

  ```javascript
  > httpResponse.success('ok', ['id', 'user'], [1, { id: 1, username: 'example' }]);
  <- { message: 'ok', id: 1, user: { id: 1, username: 'example' } }
  ```

## Error


  ### Parameters

   * text: friendly message indicating the response.
   * keys: Array of keys that the response is expected to have. Optionally, if it is only one key it can be passed as string.
   * values: Array of values that the response is expected to have. Value n will be assigned to key n.

  ### Examples


  ```
  ```

