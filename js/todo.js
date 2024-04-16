const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

function hanleTodoSubmit(event) {
    event.preventDefault();
    
}
toDoForm.addEventListener("submit", hanleTodoSubmit); 