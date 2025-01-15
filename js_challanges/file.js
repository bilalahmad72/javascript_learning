function simulateAsyncTask() {
  console.log("Task Started");
  setTimeout(() => {
    console.log("Task Finished");
  }, 2000);
}

// simulateAsyncTask();

function simulateMultipleTasks() {
  setTimeout(() => {
    console.log("Task 1 Finisehd");
  }, 1000);

  setTimeout(() => {
    console.log("Task 2 Finisehd");
  }, 2000);

  setTimeout(() => {
    console.log("Task 3 Finisehd");
  }, 3000);
}

// simulateMultipleTasks();

function fetchDataWithCallBack(callBack) {
  setTimeout(() => {
    const data = "Fetched Data";
    callBack(data);
  }, 2000);
}

fetchDataWithCallBack(function (data) {
  console.log("Callback received:", data);
});
