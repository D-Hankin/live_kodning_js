const todoList = document.getElementById("todoList");
const userInput = document.getElementById("userInput");
const saveButton = document.getElementById("saveButton");

let todoItems = ["Print out the list", "Add to list", "Remove from list"];

function printList() {
    todoList.innerHTML = "";
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
    todoItems.push(newItem);
    printList();
})