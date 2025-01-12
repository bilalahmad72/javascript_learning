// there are many datatypes in javascript

// Most commons are :

/*

String
Number
Boolean
Bigint ( Big integer )

Undefined => mean no definition 
Null => mean empty, its doesn't mean zero, its mean emoty


Object

Symbol => whenever need the uniqueness, unique value, unique integer etc, then this come up


*/

// var first = "I am ";   this was the old way

// New way is this

let first = "I am ";
let second = "Hello World!";
let score = 102;
let wickets = 3;
let isLogIn = false;

console.log(first + second);
console.log("This is", score);

// Objects

let teaTypes = ["Green Tea", "Orange Tea", "Lemon Tea"];
let user = {
  firsName: "Bilal",
  lastName: "Ahamd",
  position: "Flutter Developer",
};

// array type output
console.log(teaTypes);
console.log(teaTypes[0]);
console.log(teaTypes[1]);
console.log(teaTypes[2]);

// user outpt
console.log(user);
console.log(user.firsName);
console.log(user.lastName);
console.log(user.position);

// To borrow value
let getScore = score;
console.log(getScore);
