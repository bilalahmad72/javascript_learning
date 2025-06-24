const person = {
  name: "Bilal",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet();

//

const greetFunction = person.greet;
greetFunction(); // This will not work as expected, because this will lost context

const boundGreetFunction = person.greet.bind({ name: "Ahmad" });
boundGreetFunction(); // This will work as expected, because we have bound the context to a new object with name "Ahmad"

// The bind method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// bind, call and apply are methods that allow you to set the value of this in a function.
// bind returns a new function with the this value set to the first argument passed to it
// call and apply call the function immediately with the this value set to the first argument passed to them, but call takes arguments as a list while apply takes arguments as an array.
