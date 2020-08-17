const addButton = document.getElementById("addButton");

const addTask = (event) => {
  event.preventDefault();
  const task = `☐ ${document.getElementById("task").value}`;
  const newTask = document.createElement("LI");
  const newTaskText = document.createTextNode(task);
  newTask.appendChild(newTaskText);
  newTask.addEventListener("click", checkTask);
  document.getElementById("toDoList").appendChild(newTask);
};

const checkTask = (event) => {
  event.preventDefault();

  if (event.target.innerText[0] === "☐") {
    event.target.style.textDecoration = "line-through";
    event.target.innerText = event.target.innerText.replace("☐", "☑︎");
  } else {
    event.target.style.textDecoration = "none";
    event.target.innerText = event.target.innerText.replace("☑︎", "☐");
  }
};

addButton.addEventListener("click", addTask);
