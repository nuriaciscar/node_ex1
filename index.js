require("dotenv").config();
const http = require("http");
const url = require("url");

const server = http.createServer();

const results = require("./calculator");

const { program } = require("commander");
program.version("0.0.1");

program.option("-p, --port <port>", "output extra debugging");
program.parse(process.argv);

const options = program.opts();

let port;

if (options.port) {
  port = options.port;
} else {
  port = process.env.SERVER_URL || 5000;
}

server.listen(port);

server.on("request", (request, response) => {
  const queryParam = url.parse(request.url, true);
  const { a, b } = queryParam.query;

  response.setHeader("Content-type", "text/html");
  if (url.parse(request.url, true).pathname === "/calculator") {
    response.write(results(a, b));
    response.statusCode = 200;
  } else {
    response.write("<h1>Oh error... sorry</h1>");
    response.statusCode = 404;
  }

  response.end();
});
