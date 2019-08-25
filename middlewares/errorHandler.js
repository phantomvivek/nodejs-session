const logger = require("../utility/logger");

module.exports = (err, req, res, next) => {
  //Log the error
  logger.error({ err, stack: err && err.stack }, "Error handler logger");

  //Status should be from error object or set as 500 - Internal server error
  if (err && err.status && err.message) {
    res.status(err.status).render("error", err);
  } else {
    res.status(500).render("error", { message: "Something went wrong!" });
  }
};
