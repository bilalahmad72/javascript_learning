// Closures are the functions that they remember the environment in which they were created.

function makeCounter() {
  let count = 3; // This variable is private to the makeCounter function

  return function () {
    count += 1; // Increment the count
    return count; // Return the current count
  };
}

console.log("Counter Example:");
const counter = makeCounter(); // Create a new counter instance
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
