export default function deleteItem(id) {
    let todoItems = JSON.parse(localStorage.getItem("todoItems"));
    todoItems.splice(todoItems.indexOf(id), 1);
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
}