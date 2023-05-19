const taskList = [];

function addTask() {
  const taskInput = document.getElementById("inputBox");
  const task = taskInput.value.trim();
  if (task !== "") {
    taskList.push(task);
    displayTasks();
    taskInput.value = "";
  }
}

function removeTask(index) {
  taskList.splice(index, 1);
  displayTasks();
}

function displayTasks() {
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";

  if (taskList.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Task list is empty.";
    taskListElement.appendChild(emptyMessage);
  } else {
    taskList.forEach((task, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = task;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.className = "remove";
      removeButton.addEventListener("click", () => removeTask(index));

      listItem.appendChild(removeButton);
      taskListElement.appendChild(listItem);
    });
  }
}
