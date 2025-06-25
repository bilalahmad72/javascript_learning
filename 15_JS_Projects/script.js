/// Its mean when DOM is loaded successfully, then run the function, get the input and button elements etc...

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-button");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTask(newTask));

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    todoInput.value = "";
    console.log(tasks);
  });

  /// load tasks from localStorage
  function renderTask(task) {
    console.log(task);
  }

  /// save tasks to localStorage
  function saveTasks() {
    /// JSON.stringify(tasks) converts the tasks array to a JSON string, because localStorage.setItem() only accepts strings.
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
