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

document.querySelector("#btnAddNewTask").addEventListener("click",newTask)

document.querySelector("#btnClear").addEventListener("click",newTask)

function newTask(event) {
  event.target.classList.add("btn-lg")
  event.preventDefault();
}