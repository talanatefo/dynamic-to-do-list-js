document.addEventListener("DOMContentLoaded", () =>
  //Select DOM Element
  {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    let tasks = [];
    console.log(tasks);
    let fetchedData = localStorage.getItem("tasks");
    // console.log(fetchedData);
    if (fetchedData !== null) {
      //convert from JSON to list
      let fetchedTasks = JSON.parse(fetchedData);
      //fill the array with fetched tasks
      tasks.push(...fetchedTasks);
    }
    //output all the tasks
    if (tasks) {
      tasks.forEach((task) => {
        let li = document.createElement("li");
        li.textContent = task;
        let removeButton = document.createElement("button");
        removeButton.classList.add("remove-btn");
        removeButton.textContent = "Remove";

        removeButton.onclick = function () {
          li.remove();
        };
        li.appendChild(removeButton);
        taskList.appendChild(li);
      });
    }

    //Create the addTask Function:
    function addTask() {
      const taskInput = document.getElementById("task-input");
      let taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task");
      }
      //Task Creation and Removal:
      else {
        let li = document.createElement("li");
        li.textContent = taskText;
        let removeButton = document.createElement("button");
        removeButton.classList.add("remove-btn");
        removeButton.textContent = "Remove";

        removeButton.onclick = function () {
          li.remove();
        };
        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = "";
        //adding tasks to local storage
        tasks.push(taskText);
        let jsonTasks = JSON.stringify(tasks);
        localStorage.setItem("tasks", jsonTasks);
      }
    }
    //Attach Event Listeners:
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addTask();
      }
    });

    //add new tasks to storage tasks
    //function loadTasks() {
    //tasks.forEach((task) => {
    /// addTask();
    // });

    // tasks.push(...storedTasks, taskText);
  }
);
