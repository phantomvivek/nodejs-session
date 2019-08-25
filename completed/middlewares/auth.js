const { get } = require("../utility/redis");

module.exports = (req, res, next) => {
  //Get the cookie first
  let authCookie = req.cookies["sessionId"] || "";

  if (
    authCookie &&
    /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(
      authCookie
    )
  ) {
    //Get data out of redis
    get(authCookie, (err, result) => {
      if (err) {
        next({ status: 400, message: "Unauthorized" });
      } else {
        //Enrich request with user's session
        req.session = result;
        next();
      }
    });
  } else {
    next({ status: 400, message: "Unauthorized" });
  }
};
