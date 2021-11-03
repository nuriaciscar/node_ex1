require("dotenv").config();
const http = require("http");

const server = http.createServer();

const port = process.env.SERVER_URL || 5000;

server.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

server.on("request", (request, response) => {
  const queryParam = port.parse(request.port, true).query;
  console.log(queryParam);
  response.setHeader("Content-Type", "application/json");
  response.write(JSON.stringify("hola"));
  response.end();
});

// const prompt = require("prompt-sync")();

// const params = process.argv.slice(2);

// const operar = (number1, number2) => {
//   if (typeof number1 === "undefined") {
//     number1 = prompt("Enter first number: ");
//   }
//   if (typeof number2 === "undefined") {
//     number2 = prompt("Enter second number: ");
//   }

//   if (Number.isNaN(+number1) || Number.isNaN(+number2)) {
//     console.log("One of the parameters is not a number :( ");
//     process.exit(9);
//   }

//   console.log("Resultados: ");
//   console.log(`${number1} + ${number2} = ${+number1 + +number2}`);
//   console.log(`${number1} - ${number2} = ${+number1 - +number2}`);
//   console.log(`${number1} * ${number2} = ${+number1 * +number2}`);
//   console.log(`${number1} / ${number2} = ${+number1 / +number2}`);
// };

// operar(params[0], params[1]);
