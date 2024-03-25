let first = document.getElementById("first");
let second = document.getElementById("second");
let a = first.getAttribute("class");
console.log(a);

console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));

second.setAttribute("target", "_blank");

// first.removeAttribute("class");

console.log(first.attributes);

console.log(second.dataset);
console.log(second.dataset.game);
console.log(second.dataset.player);
