
// Polymorphism 

class Bird {
    fly() {
        return `I am flying...`;
    }
}

class Panguin extends Bird {

    // here is the polymorphism 
    fly() {
        return `Panguin can't fly... `;
    }
}

let bird = new Bird();
let panguin = new Panguin();

console.log(bird.fly());
console.log(panguin.fly());




