// Prototypal inheritance is a core feature of JavaScript that allows objects to inherit properties and methods from other objects. This is done through the prototype chain, where an object can access properties and methods of its prototype.

// In JavaScript, every object has a prototype, which is another object from which it can inherit properties and methods. This allows for a powerful way to create reusable code and share functionality between objects.

// Example of Prototypal Inheritance

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

let bilal = new Person("Bilal", 25);
bilal.greet();
