const http = require("http");
const url = require("url");

function requestHandler(req, res) {
  let path = url.parse(req.url).pathname;

  switch (path) {
    case "/":
    case "/home":
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("Hello!");
      break;
    default:
      res.writeHead(404, { "Content-type": "text/plain" });
      res.end("Page not found!");
  }
}

const port = 8000;

http.createServer(requestHandler).listen(port, err => {
  console.log(`Server listening on port ${port}`, err || "");
});
