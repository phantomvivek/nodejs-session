const uuid = require("uuid");
const { set } = require("../utility/redis");

module.exports = (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  //Ideally, this goes into a check on the database where the password is one way encrypted
  if (username && password && username === "vivek" && password === "tester") {
    //login is valid, save session in redis
    let session = {
      firstname: "vivek",
      lastname: "shah",
      company: "uber",
      email: "vivek.shah@uber.com"
    };
    let uuidv4 = uuid.v4();

    //Set data in redis and pass control to the next middleware
    set(uuidv4, session, err => {
      if (err) {
        next(err);
      } else {
        //Set cookie in browser so we can manage session
        res.cookie("sessionId", uuidv4, {
          domain: "localhost",
          path: "/",
          maxAge: 86400000
        });
        res.send("Success!");
      }
    });
  } else {
    next({ status: 400, message: "Unauthorized" });
  }
};
