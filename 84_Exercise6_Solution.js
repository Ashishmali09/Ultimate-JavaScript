let submit = document.getElementById("submit");
let deleteBtn = document.getElementById("deleteBtn");
let todo = document.getElementById("todo");
let title = document.getElementById("title");
let desc = document.getElementById("desc");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let titlec = title.value;
  let descc = desc.value;
  localStorage.setItem("Todo", JSON.stringify([titlec, descc]));
  console.log(e);
  todo.innerHTML = `<h1>${titlec}</h1>-
    <h2>${descc}</h2>`;
  title.value = "";
  desc.value = "";
});

deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("Todo");
  todo.innerHTML = "";
});
