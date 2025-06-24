// Generator Iterators

// Generator functions are a special type of function that can be paused and resumed, allowing them to yield multiple values over time. They are defined using the `function*` syntax.

// A generator function can yield values using the `yield` keyword, and it can be paused and resumed using the `next()` method.

/// Generator function doesn't execute all items at once, it executes only when the next() method is called.

function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = generatorFunction();
let genTwo = generatorFunction();

console.log(gen.next().value); // { value: 1, done: false }
console.log(gen.next().value); // { value: 2, done: false }
console.log(gen.next().value); // { value: 3, done: false }
console.log(gen.next().value); // { value: 3, done: false }

console.log(genTwo.next().value);
console.log(genTwo.next().value);
