document.addEventListener("DOMContentLoaded", addTask);
//Select DOM Elements
const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

//Create the addTask Function:
function addTask() {
  const taskInput = document.getElementById("task-input");
  let taskText = taskInput.value.trim();
  if (taskText == "") {
    alert("Please enter a task");
  }
  //Task Creation and Removal:
  else if (taskText.length > 1) {
    let li = document.createElement("li");
    li.textContent = taskText;
    let removeButton = document.createElement("button");
    //style remove button
    removeButton.classList.add = "remove-btn";
    removeButton.textContent = "remove";
    removeButton.style.backgroundColor = "red";
    removeButton.style.color = "white";
    removeButton.style.borderRadius = "4px";
    removeButton.style.padding = "4px";
    removeButton.style.border = "none";
    removeButton.style.color = "white";

    removeButton.onclick = function () {
      li.remove();
    };
    li.appendChild(removeButton);
    taskList.appendChild(li);
  }

  taskInput.value = "";
}
//Attach Event Listeners:
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
