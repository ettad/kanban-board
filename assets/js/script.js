var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) { 

  event.preventDefault(); //prevents the browser form reloading the page.

  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 
  listItemEl.textContent = "This is a new task."; 
  tasksToDoEl.appendChild(listItemEl); 
}; 

formEl.addEventListener("submit", createTaskHandler);
