(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{373:function(t,a,n){"use strict";n.r(a);var e=n(26),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"getting-started-with-chinchay-angular"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-chinchay-angular"}},[t._v("#")]),t._v(" Getting Started with Chinchay + Angular")]),t._v(" "),n("h3",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("For this tutorial we will have to servers running at the same time. One with the backend and another running the Angular app.")]),t._v(" "),n("h2",{attrs:{id:"backend-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#backend-server"}},[t._v("#")]),t._v(" Backend Server")]),t._v(" "),n("p",[t._v("For the backend server, follow "),n("a",{attrs:{href:"https://afontainec.github.io/chinchay/clitutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("the getting started "),n("OutboundLink")],1),t._v(". The only difference, is when running the chinchay new command, you can add the flag "),n("code",[t._v("--frontend disable")]),t._v(" as follows:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ chinchay new coffee --frontend disable\n")])])]),n("p",[t._v("This will not create the ejs files. We will not be needing them, we are going to do the frontend with Angular.")]),t._v(" "),n("p",[t._v("The only new difference, its we need to configure so we do not get blocked by CORS. If you do not know what this is you can read "),n("a",{attrs:{href:"https://www.codecademy.com/articles/what-is-cors",target:"_blank",rel:"noopener noreferrer"}},[t._v("this blog"),n("OutboundLink")],1),t._v(", but in short, by default the server will block any request that coming from another app. Therefore, it will block the requests of the frontend. On the backend, we add the following to our app.js. Its important that this should be defined "),n("em",[t._v("BEFORE")]),t._v(" we indicate the app to use the coffeeAPI routes.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("  app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Origin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Headers'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Origin, X-Requested-With, Content-Type, Accept'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Lets go and run the backend, run the following command on the backend directory:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ npm start\n")])])]),n("h2",{attrs:{id:"angular-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#angular-app"}},[t._v("#")]),t._v(" Angular App")]),t._v(" "),n("p",[t._v("Next, we need to create an Angular app. We need to install the "),n("a",{attrs:{href:"https://angular.io/cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular cli"),n("OutboundLink")],1),t._v(".\nIf you do not have it go and run:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ npm install -g @angular/cli\n")])])]),n("p",[n("em",[t._v("NOTE")]),t._v(": You will need to have "),n("a",{attrs:{href:"https://www.npmjs.com/get-npm",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),n("OutboundLink")],1),t._v(" installed.")]),t._v(" "),n("p",[t._v("Then we simply create the angular app called testChinchayAngular")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ ng new testChinchayAngular && cd testChinchayAngular\n")])])]),n("p",[t._v("A prompt asking if you like to add the angular routing will show, press y to confirm we will like to add it and then select the stylesheet format of your preference. We will use CSS.")]),t._v(" "),n("p",[t._v("Next, we will add couple of modules. In the app.module.ts file, found within the src/app directory we will add the "),n("code",[t._v("FormsModule")]),t._v(" and the "),n("code",[t._v("HttpClientModule")]),t._v(" to the imports:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BrowserModule "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/platform-browser'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NgModule "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/core'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HttpClientModule "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/common/http'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" FormsModule "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/forms'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AppRoutingModule "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./app-routing.module'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AppComponent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./app.component'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  declarations"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    AppComponent\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  imports"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    FormsModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    HttpClientModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    BrowserModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    AppRoutingModule\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  providers"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bootstrap"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AppComponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppModule")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[t._v("We are now ready to run our chinchay command.")]),t._v(" "),n("h2",{attrs:{id:"chinchay"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chinchay"}},[t._v("#")]),t._v(" Chinchay")]),t._v(" "),n("p",[t._v("We install chinchay:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ npm install chinchay -s\n$ npm install chinchay -g\n")])])]),n("p",[t._v("Then we simply run the command to create all the views and logic to work with the "),n("code",[t._v("coffee")]),t._v(" relation of the backend:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ chinchay new coffee --frontend angular --backend disable\n")])])]),n("p",[t._v("Note we are indicating the frontend is angular and that no backend files should be created.")]),t._v(" "),n("p",[t._v("This will create a coffee directory within src/app. This will include:")]),t._v(" "),n("ul",[n("li",[t._v("Index component: Where a list of all the coffees will display.")]),t._v(" "),n("li",[t._v("New component: To create a new coffee.")]),t._v(" "),n("li",[t._v("Edit component: To edit an existing coffee.")]),t._v(" "),n("li",[t._v("Show component: To view a coffee and its properties.")]),t._v(" "),n("li",[t._v("Service: For connecting with the backend, to create, edit or retrieve data.")]),t._v(" "),n("li",[t._v("Router: Configuration for the routes.")])]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"connecting-backend-and-frontend"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connecting-backend-and-frontend"}},[t._v("#")]),t._v(" Connecting Backend and Frontend")]),t._v(" "),n("p",[t._v("To connect the backend to the frontend we need to configure one more thing. In the file src/environments/environment.ts we need to add the variable "),n("code",[t._v("backend = https://chinchay-docs.herokuapp.com")]),t._v(". This will indicate that the backend is running in the port 3000 of our machine.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" environment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  production"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  backend"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://chinchay-docs.herokuapp.com'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Last, but not least we need to add the routes to the router. The router is in "),n("code",[t._v("src/app/app-routing.module.ts")]),t._v(". We import the routes generated by chinchay and concatenate them to the end of our routes. Note, the routes variable must not be a constant.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NgModule "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/core'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Routes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RouterModule "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/router'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" coffeeRoutes "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./coffee/router'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" routes"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Routes "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nroutes "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" routes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coffeeRoutes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  imports"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RouterModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forRoot")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  exports"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RouterModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppRoutingModule")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"running-the-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-the-app"}},[t._v("#")]),t._v(" Running the app")]),t._v(" "),n("p",[t._v("Now we are ready to run our app! We run:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ ng serve\n")])])]),n("p",[t._v("This will make our app run on "),n("a",{attrs:{href:"localhost:4200"}},[t._v("localhost:4200")]),t._v(".")]),t._v(" "),n("p",[t._v("Well, when you visit your app you get a Angular default webpage... To remove it, we go to "),n("code",[t._v("src/app/app.component.html")]),t._v(" and leave only the router-outlet.")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-outlet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-outlet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("Now we reload, and get an empty page. But lets navigate to "),n("a",{attrs:{href:"localhost:4200"}},[t._v("localhost:4200/coffee")]),t._v(" and we will see all our coffees! Go ahead and create more coffees!")]),t._v(" "),n("p",[t._v("Important: remember that the backend must be running!")]),t._v(" "),n("p",[t._v("Enjoy!")]),t._v(" "),n("p",[t._v("For more information to work around Chinchay CLI:")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://afontainec.github.io/chinchay/clidocs",target:"_blank",rel:"noopener noreferrer"}},[t._v("See the Command Line Interface Documentation!"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);