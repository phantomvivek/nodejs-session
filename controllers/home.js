module.exports = (req, res, next) => {
  //Session declared here as auth middleware needs to be configured on home path
  let session = req.session || {
    firstname: "Vivek",
    lastname: "Shah",
    company: "Uber",
    email: "vivek.shah@uber.com"
  };

  //FIXME: Fix this with appropriate conditions! Or this will always crash
  let name = req.session.name || "Vivek";

  //TODO: Render the index file with session and name variable instead of sending hello
  res.send("Hello");
};
