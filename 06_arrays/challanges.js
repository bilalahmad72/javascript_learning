// First Challange

let teaFlavors = ["greenTea", "black tea", "oolong tea"];

let firstTea = teaFlavors[0];

console.log(`First Tea is : ${firstTea}`);

// Second Challange

let cities = ["London", "Tokyo", "Paris", "New York"];

let favCity = cities[2];

console.log(`Favorite City is : ${favCity}`);

// Third challange

let teaTypes = ["herbal tea", "white tea", "masala chai"];

teaTypes[1] = "jasmine tea";

console.log(teaTypes);

// Fourth Challange

let citiesVisited = ["Mumbai", "Sydney"];

citiesVisited[citiesVisited.length] = "Berlin"; // We can add in this way as well
citiesVisited.push("Berlin");

console.log(citiesVisited);

// Fifth Challange

let teaOrders = ["Chai", "Iced Tea", "Matcha", "Earl Grey"];

let lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);

// Sixth Challange (Soft copy of array)

let popularTeas = ["Green tea", "Chai", "colone tea"];

console.log(popularTeas);
softCopyTeas = popularTeas;

popularTeas.pop();
console.log(popularTeas);
console.log(softCopyTeas);

// Seventh Challange (hard copy of array)

let topCities = ["Berlin", "Singapore", "New York"];

let hardCopyCities = [...topCities];

// let hardCopyCity = topCities.slice();  we can copy array in this way as well

console.log(hardCopyCities);
topCities.pop();

console.log(topCities);
console.log(hardCopyCities);

// Eigth Challange

let europeanCities = ["Paris, Rome"];
let asianCities = ["Tokyo", "Bangkok"];

let worldCities = europeanCities.concat(asianCities);

console.log(worldCities);

// Ninth Challange

let cityBucketList = ["Tokyo", "London", "Cape Town", "Lahore", "SKP"];

let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);

// also must need to see the documentation as well, on mdn about javascript array
