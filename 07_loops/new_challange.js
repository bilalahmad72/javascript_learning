// First ( for loop )

let teaList = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
let findTea;

for (let i = 0; i < teaList.length; i++) {
  findTea = teaList[i];
  if (findTea == "chai") {
    break; // we can use this keyword to stop the loop
  }
  selectedTeas.push(findTea);
}

console.log(`Select Tea Are : ${selectedTeas}`);

// Second ( for loop )

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  const currentCity = cities[i];

  if (currentCity == "Paris") {
    continue; /// so its mean ignore this braces and continue
  }
  visitedCities.push(currentCity);
}

console.log(visitedCities);

// Third  ( forof loop)

let numbers = [1, 2, 3, 4, 5];
let smallNumber = [];

for (const num of numbers) {
  if (num == 4) {
    break;
  }
  smallNumber.push(num);
}

console.log(smallNumber);

// forth ( forof loop )

let teas = ["green tea", "herbal tea", "black tea", "chai"];
let preferredTeas = [];

for (const tea of teas) {
  if (tea == "herbal tea") {
    continue;
  }

  preferredTeas.push(tea);
}

console.log(preferredTeas);

// fifth ( forin loop )

let citiesPopulations = {
  London: 890000,
  "New York": 120000,
  Paris: 230000,
  Berlin: 880000,
};

let newCityPopulations = {};

// console.log(Object.keys(citiesPopulations)); // this is used to get the keys of an Object
// console.log(Object.values(citiesPopulations));

for (const city in citiesPopulations) {
  // console.log(city); in this way its will printout the keys of the Object
  // to access the values of the key we use perenthese []
  // console.log(citiesPopulations[city]);  we can access the value in this way,
  // as we need to store one object into another object so

  // key = value

  if (city == "Berlin") {
    break;
  }

  newCityPopulations[city] = citiesPopulations[city];
}

console.log(newCityPopulations);

// sixth ( forin loop )

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Peris: 2200000,
};

let largeCities = {};

for (const largeCity in worldCities) {
  if (worldCities[largeCity] < 3000000) {
    continue;
  }

  largeCities[largeCity] = worldCities[largeCity];
}

console.log(largeCities);

// 7th ( ForEach loop )

let newTeaCollection = ["earl grey tea", "green tea", "chai", "oolong tea"];

let availableTeas = [];

newTeaCollection.forEach((tea) => {
  if (tea == "chai") {
    return;
  }
  availableTeas.push(tea);
});

console.log(`\n\n ${availableTeas}`);

/// this is the same working as of the top one, here ' tea ' is the variable that we can anything, its indicating the each value of array one by one
// newTeaCollection.forEach(function (tea) {
//   console.log(`${tea}`);
// });

// ways of declare a fuction

// function hello() {}  this is the classic way to write a function

// function is keyword that indicate its a function
// hello() is the function name that indicate that we can call a function with its name
// {} is the body of the function in which we can perform any task that we want

// () => {}  we can write the function is this way as well, its the same as at top
// so for ForEach loop we can write function in new way as well

// newTeaCollection.forEach(function hello() {});
// newTeaCollection.forEach(function() {});

// these both are the way to declare function

// One things need to remind that break keyword can't be used inside the function body, break keyword works inside the loop body to break the loops.

// newTeaCollection.forEach((val) => {
//   if(val == "chai") {
//     break;
//   }
// });

// so to tackle this thing we use return keyword, and its used for function to return nothing

// 8th  ( ForEach loop )

let newCitiesCollection = ["Berlin", "Tokyo", "Sydney", "Paris"];
let travelledCities = [];

newCitiesCollection.forEach((city) => {
  if (city == "Sydney") {
    return;
  }
  travelledCities.push(city);
});

// This is also the same way to declare function

// newCitiesCollection.forEach(function (city) {
//   if (city == "Sydney") {
//     return;
//   }
//   travelledCities.push(city);
// });

console.log(travelledCities);

// 9th ( for loop )

let numberCollection = [2, 5, 7, 9];
let doubleNumbers = [];

for (let i = 0; i < numberCollection.length; i++) {
  if (numberCollection[i] == 7) {
    continue;
  }

  let dNumber = numberCollection[i] * 2;

  doubleNumbers.push(dNumber);
}

console.log(doubleNumbers);

// 10th ( for-of loop )

let forTeas = ["green tea", "herbal tea", "black tea", "jasmine tea", "chai"];
let shortTeas = [];

for (const tea of forTeas) {
  const teaLength = tea.length;
  if (teaLength > 10) {
    continue;
  }

  shortTeas.push(tea);
}

console.log(shortTeas);
