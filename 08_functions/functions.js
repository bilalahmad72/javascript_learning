function makeTea(teaType) {
  return `Making ${teaType}`;
}

let tea = makeTea("Green Tea");
// console.log(tea);

function orderTea(teaType) {
  function confirmOrder() {
    return "Order Confirm for chai";
  }

  return confirmOrder();
}

let orderConfirmation = orderTea("Chai");

// console.log(orderConfirmation);

function orderTea() {
  function confirmOrder() {
    return "Order Confirm for chai";
  }

  return confirmOrder();
}

let orderConfirm = orderTea();

// console.log(orderConfirm);

// Arrow Function

// thse are the way to delcare the function
// () => {};   arrow function
// function greet() {}; named Function

const greet = () => {}; // this is the arrow function, stored in the greet variable

const calculateTotal = (price, quantity) => {
  return price * quantity;
};

let totalCost = calculateTotal(12, 2);

console.log(totalCost);

// 4th

function makeTea(typeOfTea) {
  return `Tea type is : ${typeOfTea}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("Earl grey");
}

let order = processTeaOrder(makeTea);

console.log(order);

// fifth

function createTeaMaker() {
  return teaMake("Green tea");
}

function teaMake(teaType) {
  return `Making ${teaType}`;
}

let teaMaker = createTeaMaker();

console.log(teaMaker);

// a new way in JS

function createTeaMake(name) {
  return function (teaType) {
    return `Making a ${teaType} ${name}`;
  };
}

let myTea = createTeaMake("by Bilal Ahmad");
let result = myTea("Green tea");

console.log(result);
