const logger = require("../utility/logger.js");
module.exports = (req, res, next) => {
  //TODO: Log the request URL and request METHOD via the logger
  //Call next so that the next function in the middleware stack can be called
  next();
};
