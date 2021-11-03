const { add, substraction, multiply, divide } = require("./operations");
const operations = (number1, number2) => {
  let html;
  if (Number.isNaN(+number1) || Number.isNaN(+number2)) {
    return `<p>Oh error...</p>`;
  } else {
    html = `<h1>Resultados:</h1>
  <ul><li>${number1} + ${number2} = ${add(
      number1,
      number2
    )}</li><li>${number1} - ${number2} = ${substraction(
      number1,
      number2
    )}</li><li>${number1} * ${number2} = ${multiply(
      number1,
      number2
    )}</li><li>${number1} / ${number2} = ${divide(number1, number2)}</li></ul>`;
  }
  return html;
};

module.exports = operations;
