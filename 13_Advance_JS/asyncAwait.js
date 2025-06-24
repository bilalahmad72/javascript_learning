function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { name: "John Doe", age: 30, url: "https://google.com" };
      resolve(userData);
    }, 2000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("User data : ", userData);
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
}
