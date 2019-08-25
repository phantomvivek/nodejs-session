const logger = require("../utility/logger");

module.exports = (err, req, res, next) => {
  //TODO: Log the error

  //Status should be from error object or set as 500 - Internal server error
  if (err && err.status && err.message) {
    res.status(err.status).render("error", err);
  } else {
    res.status(500).render("error", { message: "Something went wrong!" });
  }
};
