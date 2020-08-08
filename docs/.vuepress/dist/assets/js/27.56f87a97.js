(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{388:function(e,t,a){"use strict";a.r(t);var n=a(26),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Welcome to the "),a("strong",[e._v("Chinchay Middleware")])]),e._v(" "),a("h2",{attrs:{id:"middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#middleware"}},[e._v("#")]),e._v(" Middleware")]),e._v(" "),a("p",[e._v("With Chinchay you can easily create a RESTful API, not only that but Chinchay provides a complete flexible interface\nwhere the client can build specific queries to consult information. But... what about who can access the API?")]),e._v(" "),a("p",[e._v("With Chinchay Middleware you can easily transform your API into an "),a("a",{attrs:{href:"https://oauth.net/2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("oAuth 2.0"),a("OutboundLink")],1),e._v(" API, oAuth is an industry-standard protocol for authorization. In simple terms, you can protect so each user only access the endpoint you give him access to. Before consulting the API, The user authenticates with it's credentials and an access token is given. After that, the user must pass the access token for every request.")]),e._v(" "),a("p",[e._v("The Chinchay Middleware will be in charge of inspecting that the token is present, valid and that the user of that token has access to the given endpoint. The token is expected to be given as a "),a("a",{attrs:{href:"https://swagger.io/docs/specification/authentication/bearer-authentication/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bearer Token"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The Access Module will be in charge of generating the access token, the token follows the json web token standard, by generating the token with the "),a("a",{attrs:{href:"https://www.npmjs.com/package/jsonwebtoken",target:"_blank",rel:"noopener noreferrer"}},[e._v("jsonwebtoken"),a("OutboundLink")],1),e._v(" npm package.")]),e._v(" "),a("p",[e._v("To actually define which user has access to which endpoints, chinchay uses the "),a("a",{attrs:{href:"https://www.npmjs.com/package/thewall",target:"_blank",rel:"noopener noreferrer"}},[e._v("thewall"),a("OutboundLink")],1),e._v(" npm package.")]),e._v(" "),a("p",[e._v("Moreover you might have one route that it's accessible by different users but the content must be different. For instance, with chinchay (running locally) the route: http://localhost/api/coffee/find will return all the coffees. If we have a customer1 user and a customer2 user, we might want to use that endpoint to return all the coffees that the user has access. So how do we filter them? With thewall we give access to both users to that route, but with the Access Module we can add the corresponding filter so that when the information is fetched to the database only the corresponding coffees are given.")])])}),[],!1,null,null,null);t.default=o.exports}}]);