///                                                 Objects in JS

// let user = {
//   firstName: "Bilal",
//   lastName: "Ahmad",
//   email: "test@gmail.com",
//   isLoggedIn: false,
// };

// When a object is declared or initialized then an amount of memory is resered to that respected object,

// so user is an object, we can initialize this with const keyword as well, then that means that constant memory is reserved that can't be changed

const user = {
  firstName: "Bilal",
  lastName: "Ahmad",
  email: "test@gmail.com",
  isLoggedIn: false,
};

console.log(user);

// But we can change its value, i mean const Object that have some premitives inside we can change that anytime in the whole program at where we need

user.password = "123456"; // We can add the more premitives as well,

// We can access the Object premitive value by using the ( . ) symbol

console.log(user.email);

user.email = "bilal@gmail.com"; // In this way we can change the value of a variable inside the project anywhere

console.log(user.firstName);
console.log(user.lastName);
console.log(user.email);
console.log(user.password);
console.log(user.isLoggedIn);

// we can access the value of an object in one more way
console.log("\n\n\n2nd way to access value:");
console.log(user["firstName"]);
console.log(user["lastName"]);
console.log(user["email"]);
console.log(user["password"]);
console.log(user["isLoggedIn"]);

/// some predefind Object

let today = new Date();
let today1 = Date();

console.log("\n\n");

console.log(today);
console.log(today1);
console.log(today.getDate());
console.log(today.getHours());

///                                             Array in JS

// we can store each and every datatype in the array

let names = [
  "Bilal",
  "Hamad",
  "Hassan",
  "Ali",
  "Raza",
  "Afzal",
  "Sajjad",
  12,
  23,
  23.0,
  343.0232,
  true,
  undefined,
  null,
  user,
];

for (var i in names) {
  console.log(names[i]);
}

//                                  explicit conversion

let isValue = true;
let isValue1 = false;

// because programming always store true as 1 and false as 0

console.log(isValue + 1);
console.log(isValue1 + 1);

//  NaN mean => Not a Number

// another way is that to covert a datatype into number datatype or any other datatype, we can user Object of that

let number = "12";

console.log(Number(number) + 15);
