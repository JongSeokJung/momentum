const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODO_KEY = "todos";

let todoArr = [];

function saveTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoArr));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    todoArr = todoArr.filter(todoArr => todoArr.id !== parseInt(li.id));
    saveTodo();
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");

    span.innerText = newTodo.text;
    btn.innerText = "✅";
    btn.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    todoArr.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo()
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = localStorage.getItem(TODO_KEY);

if(savedTodo) {
    const parsedTodo = JSON.parse(savedTodo);
    todoArr = parsedTodo;
    parsedTodo.forEach(paintTodo);
}

