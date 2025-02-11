// so we nomally used the prototype to user the properties of other methods, objects or functions
// we access the prototype of the object by using the __proto__ property
// the __proto__ property is the prototype of the object

let computer = {
    cpu: 14,
    ram: 16,
};

let lenovo = {
    screen: "HD",

    // this is the old way to take the properties of the object
    __proto__: computer,
};


// console.log(lenovo);
// console.log(lenovo.cpu);
// console.log(lenovo.ram);
// console.log(lenovo.__proto__);


// the new way to take the properties of the object is by using the prototype

let car = {
    tyres: 4,
    doors: 4,
    driver: "Person"
};

let tesla = {
    driver: "AI",
};

Object.setPrototypeOf(tesla, car);


// console.log(`Car Driver is : ${car.driver} and Tesla Driver is : ${tesla.driver}`);
// console.log(`Car tyres are : ${car.tyres} and Tesla tyres are : ${tesla.tyres}`);
// console.log(`Car Doors are : ${car.doors} and Tesla Doors are : ${tesla.doors}`);

let proto = Object.getPrototypeOf(tesla);
console.log(`Tesla Prototype is : `, proto);
console.log(`Tesla Driver is : ${tesla.driver} and Proto Drive is : ${proto.driver}`);

