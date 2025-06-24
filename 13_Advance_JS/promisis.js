// Promisis are used to handle asynchronous operations in JavaScript.
// They allow you to write cleaner code compared to traditional callback methods.

// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        const data = { id: 1, name: "John Doe" };
        console.log("Data fetched successfully:", data);
        resolve(data); // Simulate successful data fetch
      } else {
        console.error("Failed to fetch data");
        reject(new Error("Failed to fetch data")); // Simulate a failure
      }
    }, 2000);
  });
}

/// How to consume a Promise
let response = fetchData();
console.log("Response:", response); // This will log a Promise object

response
  .then((data) => {
    console.log("Data received:", data);
    return `Bilal Ahmad`;
  })
  .then((value) => {
    console.log("Processed Value:", value);
  })
  .catch((data) => {
    console.error("Error:", data.message);
  });
