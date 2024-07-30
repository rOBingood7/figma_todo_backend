export function ToDoItem(item) {
  const box = document.createElement("div");
  const head_item = document.createElement("div");
  const span = document.createElement("span");
  const btn_del = document.createElement("button");
  const checked = document.createElement("button");
  const time = document.createElement("span");

  box.classList.add("box");
  head_item.classList.add("head_item");
  span.innerHTML = item.title;
  btn_del.innerHTML = "delete";
  checked.innerHTML = "checked";
  time.innerHTML = item.time;

  box.append(head_item, time);
  head_item.append(span, btn_del, checked);

  btn_del.onclick = () => {
    fetch(`http://localhost:8080/todos/${item.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        box.remove();
      } else {
        alert("Error");
      }
    });
  };

  checked.onclick = () => {
    item.isDone === true;
    span.classList.add("done");
  };

  return box;
}
