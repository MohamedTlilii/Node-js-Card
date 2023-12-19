const http = require("http");
var path = require("path");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./content/index.html", "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      // res.statusCode(200);
      // res.write(data);
      // res.end()
      res.end(data);
    });
  } else if (req.url.match("/index.css")) {
    var cssPath = path.join(__dirname, "content", req.url);
    var fileStream = fs.createReadStream(cssPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res);
  } else if (req.url.match("/script.js")) {
    var jsPath = path.join(__dirname, "content", req.url);
    var fileStream = fs.createReadStream(jsPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/javascript" });
    fileStream.pipe(res);
  } else if (req.url.match("/assets/play5.webp")) {
    var imagePath = path.join(__dirname, "content", req.url);
    var fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/png" });
    fileStream.pipe(res);
  } else if (req.url.match("/assets/iphone12.png")) {
    var imagePath = path.join(__dirname, "content", req.url);
    var fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/png" });
    fileStream.pipe(res);
  } else if (req.url.match("/assets/casque.webp")) {
    var imagePath = path.join(__dirname, "content", req.url);
    var fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/png" });
    fileStream.pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("No Page Found");
  }
});

server.listen(5000, () => {
  console.log("server is up and running");
});
