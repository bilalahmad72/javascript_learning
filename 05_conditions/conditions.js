// If-else condition

let a = 8;

let b = 10;

console.log("Upper code");

if (a > b) {
  console.log("A is greater than B");
} else {
  console.log("B is greater than A");
}

console.log("Bottom code");

let score = 44;

if (typeof score === "number") {
  console.log("This is a number");
} else {
  console.log("This is not number");
}

let userName = "Bilal";

if (typeof userName === "string") {
  console.log(`This is a String ${userName}`);
}

let isSignnedIn = false;

if (isSignnedIn) {
  console.log("Yeah! user is signned in");
} else {
  console.log("No!, user is not signned in");
}

let items = ["Bilal", false, null, "Ahmad", "Hassan"];

if (items.length == 5) {
  console.log("Yeah Items length is 5");
}
