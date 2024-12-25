let first = document.getElementById("first");

first.className = "red";

console.log(first.classList);

first.classList.remove("red");
// first.classList.add("red");
first.classList.toggle("red"); //  class nahi lagi hai to laga dega aur lagi hai to hata dega

console.log(first.classList.contains("red"));
