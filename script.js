const todoList = document.getElementById("todoList");
const userInput = document.getElementById("userInput");
const saveButton = document.getElementById("saveButton");


if(localStorage.getItem("todoItems")) {
    console.log("LS todoItems exists");
} else {
    let todoItems = ["Print out the list", "Add to list", "Remove from list"];
    console.log("LS todoItems doesnt exist - create it!");
    localStorage.setItem("todoItems", JSON.stringify(todoItems))
}

function printList() {
    todoList.innerHTML = "";

    let todoItems = JSON.parse(localStorage.getItem("todoItems"));
    for (let item of todoItems) {

        let li = document.createElement("li");
        li.textContent = item;
        li.id = item;

        todoList.appendChild(li);

        li.addEventListener("click", (evt) => {
            todoItems.splice(todoItems.indexOf(evt.target.id), 1)
            printList();
        })
    }
}

printList();

saveButton.addEventListener("click", () => {
    let newItem = userInput.value;
    // Hämta
    let todoItems = JSON.parse(localStorage.getItem("todoItems"));
    // Ändra
    todoItems.push(newItem);
    // Ersätta
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
    printList();
})