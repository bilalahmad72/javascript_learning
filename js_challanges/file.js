function stringToNumber(text) {
  let num = typeof text;
  if (num === "number") {
    return "Number";
  } else {
    return "Not a number";
  }
}

let output = stringToNumber(123);
let output1 = stringToNumber("Hello");

// console.log(output);
// console.log(output1);

function flipBoolean(input) {
  let inputType = typeof input;
  if (inputType === "string") {
    return true;
  } else {
    return false;
  }
}

let type = flipBoolean(123);
// console.log(type);

function whatAmI(input) {
  let text = typeof input;

  if (text === "string") {
    return "I am a String!";
  }

  if (text === "number") {
    return "I am a Number";
  }
}

let iAM = whatAmI("Bilal");

// console.log(iAM);

function isItTruthy(input) {
  if (input === "true") {
    return "It's truthy!";
  }

  if (input === "false") {
    return "It's falsy!";
  }
}

let val = isItTruthy("true");
// console.log(val);
