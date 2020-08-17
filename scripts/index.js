const addButton = document.getElementById("addButton");

const addTask = (event) => {
  event.preventDefault();
  const task = `☐ ${document.getElementById("task").value}`;
  const newTask = document.createElement("LI");
  const newTaskText = document.createTextNode(task);
  newTask.appendChild(newTaskText);
  document.getElementById("toDoList").appendChild(newTask);
};

addButton.addEventListener("click", addTask);
