// This CommonJS module exports the same three functions: add, subtract, and multiply.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}
// Exporting the functions using CommonJS syntax
module.exports = {
  add,
  subtract,
  multiply,
};
