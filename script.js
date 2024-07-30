import { todos } from "./lib/db.js";
import { reload } from "./lib/utils.js";
import { ToDoItem } from "./components/ToDo.js";

const baseURL = "http://localhost:8080";
const container = document.querySelector(".container");
const form = document.querySelector(".todo form");

createToDo();

form.onsubmit = (e) => {
  e.preventDefault();
  const todo = {
    id: crypto.randomUUID(),
    title: new FormData(e.target).get("title"),
    time: new Date().toLocaleTimeString(),
    isDone: false,
  };
  fetch(baseURL + "/todos", {
    method: "POST",
    body: JSON.stringify(todo),
  }).then((res) => console.log(res));
  createToDo();
};

function createToDo() {
  fetch(baseURL + "/todos")
    .then((res) => res.json())
    .then((todos) => reload(todos, ToDoItem, container));
}

reload(todos, ToDoItem, container);
