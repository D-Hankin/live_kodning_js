import deleteItem from "./deleteItem.js";

export default function printList(todoList) {
    todoList.innerHTML = "";

    let todoItems = JSON.parse(localStorage.getItem("todoItems"));
    for (let item of todoItems) {

        let li = document.createElement("li");
        li.textContent = item;
        li.id = item;

        todoList.appendChild(li);

        li.addEventListener("click", (evt) => {
            deleteItem(evt.target.id);
            printList(todoList);
        })
    }
}