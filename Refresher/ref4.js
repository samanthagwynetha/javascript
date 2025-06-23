//Refresher4: Switch Statement Exercises

const prompt = require('prompt-sync')();

const num1 = Number(prompt("Enter first number: "));
const operator = prompt("Enter operator (+, -, *, /): ");
const num2 = Number(prompt("Enter second number: "));

switch (operator) {
  case '+':
    console.log(`Result: ${num1 + num2}`);
    break;
  case '-':
    console.log(`Result: ${num1 - num2}`);
    break;
  case '*':
    console.log(`Result: ${num1 * num2}`);
    break;
  case '/':
    console.log(`Result: ${num1 / num2}`);
  default:
    console.log("Invalid operator");
}
