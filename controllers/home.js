module.exports = (req, res, next) => {
  //Session declared here as auth middleware needs to be configured on home path
  let session = req.session || {
    firstname: "Vivek",
    lastname: "Shah",
    company: "Uber",
    email: "vivek.shah@uber.com"
  };

  //TODO: Render the index file with session and name variable instead of sending hello
  res.send("Hello");
};
