require("dotenv").config();
const http = require("http");

const server = http.createServer();

const { add, substraction, multiply, divide } = require("./operations");

const port = process.env.SERVER_URL || 5000;

const html = `<h1>Resultados</h1><ul><li>6 + 3 = 9</li><li>6 - 3 = 3</li><li>6 * 3 = 18</li><li>6 / 3 = 2</li></ul>`;

server.listen(port);

server.on("request", (request, response) => {
  // const queryParam = port.parse(request.port, true).query;
  // console.log(queryParam);
  response.setHeader("Content-type", "text/html");
  response.write(JSON.stringify(html));
  response.end();
});
