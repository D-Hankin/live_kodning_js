import printList from "./printList.js";
import addItem from "./addItem.js";
import checkLocalStorage from "./checkLocalStorage.js";

const todoList = document.getElementById("todoList");
const userInput = document.getElementById("userInput");
const saveButton = document.getElementById("saveButton");

checkLocalStorage();
printList(todoList);

saveButton.addEventListener("click", () => {
   addItem(userInput.value);
   printList(todoList);
})