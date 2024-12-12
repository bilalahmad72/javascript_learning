let a = 10;
let b = 2;

let first = 10;
let second = 4;
let third = 21;

// a = a + 5;

a += 5;

console.log(a);

b -= 5;

console.log(b);

first *= 2;

console.log(first);

second /= 2;

console.log(second);

third %= 4;

console.log(third);

// if want to do multiple oprations than better is that to round up the values under the perenthesis

let score = 10 * 4 + 12 - 10 / 2;

// rather than that use this bottom way, this bottom is the better approach

let newScore = (10 * (4 + 12 - 10)) / 2;

console.log(newScore);
