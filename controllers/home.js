module.exports = (req, res, next) => {
  //Session declared here as auth middleware needs to be configured on home path
  let session = req.session || {
    firstname: "Vivek",
    lastname: "Shah",
    company: "Uber",
    email: "vivek.shah@uber.com"
  };

  res.render("index", { session: session, name: session.name });
};
