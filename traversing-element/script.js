let result;

ul = document.getElementById("task-list");

result = ul.children;
result = ul.children[0];
result = ul.firstElementChild;
result = ul.lastElementChild;
result = document.getElementById("title").parentElement;
result = document.querySelector(".task").nextElementSibling.previousElementSibling;

console.log(result)