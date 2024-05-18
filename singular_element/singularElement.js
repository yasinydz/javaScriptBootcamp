let result;

result = document.getElementById("title");
result = document.getElementById("title").id;
result = document.getElementById("title").className;
result = document.getElementById("title").classList;

document.getElementById("title").style.fontSize = "30px";
// document.getElementById("title").style.display = "none";

document.getElementById("title").innerText = "Web App";
document.getElementById("title").innerHTML = "<p>Komple</p>";

result = document.querySelector("#title");
result = document.querySelector(".cart-title");
result = document.querySelector("div");

result = document.querySelector("li:firts-child");
result = document.querySelector("li:last-child");
result = document.querySelector("li:nth-child(1)");


console.log(result);