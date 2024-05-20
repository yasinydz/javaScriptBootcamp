let result;

ul = document.getElementById("task-list");

let gorevListesi = [
    {"id" : 1, "gorevAdi" : "Görev 1"},
    {"id" : 2, "gorevAdi" : "Görev 2"},
    {"id" : 3, "gorevAdi" : "Görev 3"},
    {"id" : 4, "gorevAdi" : "Görev 4"}
];

for (const gorev in gorevListesi) {
    let li = `
        <li class="task list-group-item">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${gorev.id}" />
             <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
          </div>
        </li>
`;
ul.insertAdjacentHTML("beforeend",li);

}

document.querySelector("#task-list").parentElement.remove();
document.querySelector("#task-list").children[0].remove();
document.querySelector("#task-list").removeAttribute("class");
document.querySelector("#task-list").children[1].removeAttribute("class");
document.querySelector("#task-list").children[1].getAttribute("class");
document.querySelector("#task-list").children[1].setAttribute("class","degisen");
result = document.querySelector("#task-list").children[1].classList[1];
result = document.querySelector("#task-list").children[1].classList.add("bg-danger");
result = document.querySelector("#task-list").children[1].classList.remove("bg-danger");
result = document.querySelector("#task-list").children[1].classList.contains("bg-danger");
console.log(result);

