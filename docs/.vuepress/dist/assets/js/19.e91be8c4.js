(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{360:function(t,e,a){"use strict";a.r(e);var s=a(26),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"defining-chinchay-codes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-chinchay-codes"}},[t._v("#")]),t._v(" Defining Chinchay Codes")]),t._v(" "),a("p",[t._v("One big question is how to build Chinchay Codes? Let's keep in mind that the "),a("code",[t._v("chinchayCode")]),t._v(" is intended to be machine-readable, therefore it is not necessary for it to be self explanatory, so keep it short. One tempting option is to number them, error 1, error 2, and so forth. However I would advise against that option, even though it is not intended for it to be easily understood by humans, it does not mean it has to be crazy difficult. I would suggest something that would give a hint of what happened. Some examples:")]),t._v(" "),a("h4",{attrs:{id:"don-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#don-ts"}},[t._v("#")]),t._v(" don'ts")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// avoid numbering")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x13'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// I know hex can look pro, but again avoid numbering")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error when the parameter given does not match with an existing one'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// too long, too much bla bla ")]),t._v("\n")])])]),a("h4",{attrs:{id:"do-s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-s"}},[t._v("#")]),t._v(" do's")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unexistant_parameter'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id_not_found'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'incorrect_format'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emptyData'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// can be camelcase or your case of preference. For these errors I tend to go for snake cases though.")]),t._v("\n")])])]),a("h3",{attrs:{id:"recycling-chinchaycode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recycling-chinchaycode"}},[t._v("#")]),t._v(" Recycling chinchayCode")]),t._v(" "),a("p",[t._v("A common question is should I create a different "),a("code",[t._v("chinchayCode")]),t._v(" for every possible Error or should I reuse them?")]),t._v(" "),a("p",[t._v("It truly depends on the case. Keep in mind that the mission here is to give to the client the correct and understandable messages. So do not try to over optimize the chinchayCodes. However if two errors are very similar, will have the same message and the same code, well yeah, then please do recycle! This will maintain a shorter "),a("code",[t._v("errorTranslate")]),t._v(", easier to read or debug.")]),t._v(" "),a("h2",{attrs:{id:"global-errorhandler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-errorhandler"}},[t._v("#")]),t._v(" Global ErrorHandler")]),t._v(" "),a("p",[t._v("One interesting way of organizing the ErrorHandler is to have 1 errorHandler for the whole project. In one file, "),a("code",[t._v("errorhandlerfile.js")]),t._v(" we will store the "),a("code",[t._v("errorTranslate")]),t._v(" parameter:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    empty_update"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("422")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Could not be processed.'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    no_access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Forbidden. You can not access the requested data.'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    unexistant_option"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Requested option is not valid.'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Then, in another file, let's call it "),a("code",[t._v("errorhandler.js")]),t._v(", we add the following:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" errorTranslate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/errorhandlerfile'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ErrorHandler "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chinchay'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" errorHandler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ErrorHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("errorTranslate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" errorHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Lastly, in each controller we replace:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ErrorHandler "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chinchay'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" errorHandler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ErrorHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("with:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" errorHandler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/errorhandler'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"pros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pros"}},[t._v("#")]),t._v(" pros")]),t._v(" "),a("p",[t._v("The main reason to use it this way is because the "),a("code",[t._v("errorTranslate")]),t._v(" parameter requires spaces. If you have a complete mapping of errors, your controllers will end up being more errorTranslate than controller. This looks ugly.")]),t._v(" "),a("p",[t._v("Moreover, it is quite common for controllers to have very similar "),a("code",[t._v("errorTranslate")]),t._v(". This will lead to a lot of copy/pasting. In the long run this is hell, imagine you have 10 controllers and you found one new Error you haven't thought about before. Even worse, this error can happen in every controller, you will have to add it to the 10 controllers. With a centralized errorHandler it is just one change.")]),t._v(" "),a("h4",{attrs:{id:"cons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cons"}},[t._v("#")]),t._v(" cons")]),t._v(" "),a("p",[t._v("You lose flexibility. You might want to return different messages for the same error depending on the controller (you could be interested in returning different http status codes as well, but that is less common).")]),t._v(" "),a("h2",{attrs:{id:"http-codes-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-codes-guide"}},[t._v("#")]),t._v(" HTTP Codes guide")]),t._v(" "),a("p",[t._v("Here is a quick guide of the codes I use and when I use them.")]),t._v(" "),a("h3",{attrs:{id:"_200"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_200"}},[t._v("#")]),t._v(" 200")]),t._v(" "),a("p",[t._v("Success, when everything goes as expected.")]),t._v(" "),a("h3",{attrs:{id:"_400"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_400"}},[t._v("#")]),t._v(" 400")]),t._v(" "),a("p",[t._v('This is basically a "it\'s not my fault" code. Whenever an error is thrown because the client made a weird request.')]),t._v(" "),a("h3",{attrs:{id:"_401"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_401"}},[t._v("#")]),t._v(" 401")]),t._v(" "),a("p",[t._v("401 the user is not authorized. The user must give a valid Authorization header field.")]),t._v(" "),a("h3",{attrs:{id:"_403"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_403"}},[t._v("#")]),t._v(" 403")]),t._v(" "),a("p",[t._v("Forbidden. The user does not have access to the requested data.")]),t._v(" "),a("h3",{attrs:{id:"_404"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_404"}},[t._v("#")]),t._v(" 404")]),t._v(" "),a("p",[t._v("Not Found. What you are looking for has not been found.")]),t._v(" "),a("h3",{attrs:{id:"_500"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_500"}},[t._v("#")]),t._v(" 500")]),t._v(" "),a("p",[t._v('This is basically "not a clue what happened". It officially means "Internal Server Error", but it is usually used as something we did not expect to happens, did occur.')]),t._v(" "),a("h3",{attrs:{id:"and-more"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#and-more"}},[t._v("#")]),t._v(" And More")]),t._v(" "),a("p",[t._v("There are plenty of more errors, here is a "),a("a",{attrs:{href:"https://www.restapitutorial.com/httpstatuscodes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("complete list"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"developer-alert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developer-alert"}},[t._v("#")]),t._v(" Developer Alert")]),t._v(" "),a("p",[t._v("If you are deploying to production it's a must to monitor the health of your server. This will let you know when something unexpected happen and act accordingly. There are plenty of tools to monitor the health of your code and let you know whenever a code 4XX or 5XX occurs, amount of requests, CPU usage, logs analyzers and much more.")]),t._v(" "),a("p",[t._v("In my experience, I usually do not do much error handling at the beginning, just the basic and obvious errors. All the rest I just return 500 and place an alert that would notify me everytime an error 500 occurs. When this alert triggers, I then analyze the request, see what happened and what would be the correct code and message, add it to the errorHandler and move on. This allows me to only populate the errorHandler with real cases, rather than overthinking everything that can go wrong.")])])}),[],!1,null,null,null);e.default=r.exports}}]);