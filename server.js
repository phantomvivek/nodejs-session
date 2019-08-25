//TODO: Lets start by requiring express
//TODO: Require cookie.parse

const { connect } = require("./utility/redis");

//TODO: Require all middlerwares except auth
//TODO: Require the routes to add as a middleware

//Boilerplate code
//TODO: Define app

//Setting view engine to pug, formerly jade templating engine
//This tells express that pug is the templating engine to be used
//app.set("view engine", "pug");
//This tells express that the templates will be in the public folder
//app.set("views", "./public");

//TODO: Add logger as a middleware
//TODO: Get cookie out of headers, parse them as object via the cookie module, and attach them to request object

//TODO: Add routes to path /app

//TODO: Attach 404 handler

//TODO: Attach error handler

//We only start listening on the port once our redis dependency is connected
const port = 8000;
connect(() => {
  //TODO: Listen to a port using app.listen here
  //TODO: Log in case there is an error
});
