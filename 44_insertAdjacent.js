let first = document.getElementById("first");

first.insertAdjacentHTML("beforebegin", "<div class='test'>before begin</div>");
first.insertAdjacentHTML("beforeend", "<div class='test'>before end</div>");
first.insertAdjacentHTML("afterbegin", "<div class='test'>after begin</div>");
first.insertAdjacentHTML("afterend", "<div class='test'>after end</div>");

let div = document.createElement("div");
div.innerHTML = "<span>I am Span </span>";
// first.insertAdjacentElement("beforebegin", div);
// first.insertAdjacentElement("beforeend", div);
// first.insertAdjacentElement("afterbegin", div);
// first.insertAdjacentElement("afterend", div);

let text = "We have to go to Japan";
// first.insertAdjacentText("beforebegin", text);
// first.insertAdjacentText("beforeend", text);
// first.insertAdjacentText("afterbegin", text);
// first.insertAdjacentText("afterend", text);

// first.remove();