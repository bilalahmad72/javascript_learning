class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    makeSound() {
        console.log(`${this.name} make sound...`);
    }
}


// Inheritance in JavaScript
class Dog extends Animal {

    constructor(name, type, breed) {
        // super keyword is used to call the constructor of the parent class.
        super(name, type);
        // Add a new property
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is type of ${this.type} and barks ${this.breed}`);
    }
}

let dog = new Dog('Dog', 'Mammal', 'yummy');

dog.makeSound();
dog.bark();

