function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model) {
    this.make = make;
    this.model = model;
}

// this keyword is referecing the newly creaeted object

let myPerson = new Person('John', 30);
let person1 = new Person('Jane', 25);

// console.log(myPerson);
// console.log(person1);


let myCar = new Car('Toyota', 'Corolla');

// console.log(myCar);

function Tea(type) {
    this.type = type;
    this.describe = function() {
        return `this is the cup of ${this.type}`;
    }
}

let myTea = new Tea('Green Tea');

// console.log(`${myTea.describe()}`);

function Animal(species) {
    this.species = species;
}

Animal.prototype.sound = function() {
    return `${this.species} makes a sound`;
}

let myAnimal = new Animal('Dog');

// console.log(myAnimal.sound());


function Drink(name) {

    if(!new.target) {
        throw new Error('Drink must be called with new keyword');
    }
    this.name = name;
}

let myDrink = new Drink('Coke');
let drink1 =  new Drink('Pepsi');

console.log(myDrink, drink1);
