let num1 = 10;
let num2 = 20;

console.log(num1); // value of variable

let num3 = new Number(30);
console.log(num3);

console.log(typeof num1);
console.log(typeof num3);

/// as num3 is an object, so its mean that every premitive can be converted to the non-premitive, because Object is a non-premitive

/// so its things exist that in javascript langauge everything is an object

/// String

let myName = "Bilal Ahamd";

console.log(myName);

/// to printout multiple strings at once we user back tick ( String interpolation)

let fName = "Bilal";
let sName = "Ahmad";

let userName = `${fName} ${sName}`;

console.log(userName);

/// Symbol => always refere to the uniqueness, always provide a unique thing
// Even values are same but these variable can't be equal, because alwasy provide us uniqueness

let sm1 = Symbol("Bilal");
let sm2 = Symbol("Bilal");

console.log(sm1);
console.log(sm2);
console.log(sm1 == sm2);
