export default function addItem(userInput) {
    // Hämta
    let todoItems = JSON.parse(localStorage.getItem("todoItems"));
    // Ändra
    todoItems.push(userInput);
    // Ersätta
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
}