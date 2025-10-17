export default function checkLocalStorage() {
    if(localStorage.getItem("todoItems")) {
        console.log("LS todoItems exists");
    } else {
        let todoItems = ["Print out the list", "Add to list", "Remove from list"];
        console.log("LS todoItems doesnt exist - create it!");
        localStorage.setItem("todoItems", JSON.stringify(todoItems))
    }
}