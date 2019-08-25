const logger = require("../utility/logger.js");
module.exports = (req, res, next) => {
  let url = req.url;
  let method = req.method;

  logger.info({ url, method }, "Incoming request to app");

  //Call next so that the next function in the middleware stack can be called
  next();
};
