
Welcome to the **Chinchay ErrorHandler**



## ErrorHandler

The ErrorHandler is responsible for 'translating' or 'mapping' the errors that occurred in the server to [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). When I started coding, if no error was encounteredI would return the 200 code and if an error occurred, a 500 code. But then it hit me, there are ~100 codes and I'm only using 2... something seems off. But it is not an easy task to get your http codes right. How to decide which http code to use for each possible Error? 

Enter the ErrorHandler! it will help you to map the Errors that are rejected in the server to corresponding HTTP codes. Also providing a meaningful message so that the client can understand what went wrong. I assume we all have been annoyed when working with an API and it returns an error with the message "Something went wrong" and we are left there clueless. The ErrorHandler helps you build an API that gives meaningful messages.
