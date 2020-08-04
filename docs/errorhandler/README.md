
Welcome to the **Chinchay ErrorHandler**



## ErrorHandler

The ErrorHandler is the responsible for 'translating' or 'mapping' the errors that occured in the server to [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). When I started coding, if no error was encounter I would return the 200 code and if an error occured, a 500 code. But the it hit me, there are ~100 codes and I'm only using 2... something seems off. But it is not an easy task to get your http codes right. How to decide which http code to use for each posible Error? 

Enter the ErrorHandler! it will help you to map the Errors that are rejected in the server to corresponding HTTP codes. Also providing a meaningful message so that the client can understand what went wrong. I assume we all have been annoyed when working with an API and it returns an error with message "Something went wrong" and we are left there clueless. The ErrorHandler helps you buid an API that given meaningful messages.
