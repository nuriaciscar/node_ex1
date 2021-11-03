const prompt = require("prompt-sync")();

const { divide } = require("./divide");
const multiply = require("./multiply");
const substract = require("./substract");
const suma = require("./suma");

const params = process.argv.slice(2);

const operar = (number1, number2) => {
  if (typeof number1 === "undefined") {
    number1 = prompt("Enter first number: ");
  }
  if (typeof number2 === "undefined") {
    number2 = prompt("Enter second number: ");
  }

  if (Number.isNaN(+number1) || Number.isNaN(+number2)) {
    console.log("One of the parameters is not a number :( ");
    process.exit(9);
  }

  console.log("Resultados: ");
  console.log(`${number1} + ${number2} = ${suma(number1, number2)}`);
  console.log(`${number1} - ${number2} = ${substract(number1, number2)}`);
  console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);
  console.log(`${number1} / ${number2} = ${divide(number1, number2)}`);
};

operar(params[0], params[1]);
