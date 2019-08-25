module.exports = (req, res, next) => {
  let url = req.url;
  res.status(404).send(`Path ${url} not found!`);
};
