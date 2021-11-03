require("dotenv").config();
const http = require("http");
const url = require("url");

const server = http.createServer();

const results = require("./calculator");

const port = process.env.SERVER_URL || 5000;

server.listen(port);

server.on("request", (request, response) => {
  const queryParam = url.parse(request.url, true);
  const { a, b } = queryParam.query;
  response.setHeader("Content-type", "text/html");
  if (url.parse(request.url, true).pathname === "/calculator") {
    response.write(results(a, b));
  } else {
    response.write("<h1>Oh error... sorry</h1>");
  }

  response.end();
});
