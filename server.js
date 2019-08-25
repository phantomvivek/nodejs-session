//Lets start by requiring express
const express = require("express");
const cookieParse = require("cookie").parse;
const port = 8000;
const { connect } = require("./utility/redis");
const logger = require("./utility/logger");

const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const middlewareLogger = require("./middlewares/logger");
const router = require("./routes/index");

//Boilerplate code
//Setting view engine to pug, formerly jade templating engine
const app = express();
app.set("view engine", "pug");
app.set("views", "./public");

app.use(middlewareLogger);
app.use((req, res, next) => {
  let cookieHeader = req.headers["cookie"] || "";
  cookies = cookieParse(cookieHeader);

  //Attach the cookie object to the request object so it is available in downstream middlewares
  req.cookies = cookies;
  next();
});

app.use("/app", router);

//Attaching 404 handler
app.use(notFoundHandler);

//Attaching error handler
app.use(errorHandler);

//We only start listening on the port once our redis dependency is connected
connect(() => {
  app.listen(port, err => {
    logger.info({ err: err, port: port }, "Server listening!");
  });
});
