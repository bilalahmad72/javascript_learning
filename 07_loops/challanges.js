// Types of loop

// 1) While loop        2) do-While loop        3) for loop
// 4) for-in loop       5) for-of loop          6) forEach loop

// While Loop Challange

let sum = 0;
let i = 1;

while (i <= 5) {
  sum = sum + i; // also can write sum += i;
  i++;
}

console.log(sum);

let countdown = [];
let j = 5;

while (j >= 1) {
  countdown.push(j);
  j--;
}

console.log(`Countdown Array : ${countdown}`);

// Do while loop

// let teaCollection = [];
// let tea;

// do {
//   tea = prompt(`Enter your favorite tea (Type stop) to finish`);
//   if (tea != "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea != "stop");

// console.log(teaCollection);

//

let result = 0;
let k = 1;

do {
  result = result + k;
  k++;
} while (k <= 3);

console.log(result);

//

let arr = [2, 4, 6];
let multipliedArr = [];
let num;

for (let i = 0; i < arr.length; i++) {
  num = arr[i] * 2;
  multipliedArr.push(num);
}

console.log(multipliedArr);

//

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  const myCity = cities[i];
  cityList.push(myCity);
}

console.log(cityList);
