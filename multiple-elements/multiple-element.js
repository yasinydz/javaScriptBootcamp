let result;

result = document.getElementsByClassName("task")[0];
result = document.getElementsByClassName("task")[1];

taskList = document.getElementsByClassName("task");

taskList = document.querySelectorAll("#task-list li");

ul = document.getElementById("task-list");
taskList = document.getElementsByTagName("li");

for (let task of taskList) {
    task.style.color = "red";
    console.log(task);
}

