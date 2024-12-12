//  && and
// ||  or
//  !  reverse

let isLoggedIn = true;
let isPaid = false;

if (isLoggedIn && isPaid) {
  console.log("Successful");
} else {
  console.log("Error");
}

if (isLoggedIn || isPaid) {
  console.log("Successful");
} else {
  console.log("Error");
}

// if isLoggedIn = true , isPaid = false

console.log(!isLoggedIn);
console.log(!isPaid);
