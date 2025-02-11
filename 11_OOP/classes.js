// Classes in JavaScript are templates for creating objects. 
// They encapsulate data with code to work on that data.
// Classes are defined using the 'class' keyword followed by the class name.
// The 'constructor' method is a special method for creating and initializing an object created with a class.
// Methods are functions that are defined within a class and can be used to perform actions on the object.


// Class declarations
class Person {

    // constructor method is a special method for creating and initializing an object created with a class.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Methods are functions that are defined within a class
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// when constructor add inside the class then we require to pass the value while initialzied the class
let person = new Person('John', 30);
let person2 = new Person('Jane', 25);

// console.log(person);
// console.log(person2);



// Class expressions => we can make class expression like this as well
let Animal = class {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    makeSound() {
        console.log('Making sound...');
    }
}


// Another way to define class without the constructor

class User {
    name = '';
    age;

    getVal() {
        return `My Name is ${this.name} and I am ${this.age} years old`;
    }
}

let user = new User();
user.name = 'John';
user.age = 20;

console.log(user.getVal());
