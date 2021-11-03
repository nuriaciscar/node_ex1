require("dotenv").config();
const http = require("http");

const server = http.createServer();

const results = require("./calculator");

const port = process.env.SERVER_URL || 5000;

server.listen(port);

server.on("request", (request, response) => {
  // const queryParam = port.parse(request.port, true).query;
  // console.log(queryParam);
  response.setHeader("Content-type", "text/html");
  response.write(results(1, 2));
  response.end();
});
