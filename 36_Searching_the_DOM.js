// Change the card title color to Red
// let cTitle = document.getElementsByClassName("card-title")[0];
// cTitle.style.color = "blue";

let text = document.getElementById("firstCardText");
text.style.color = "red";

let ctitles = document.querySelectorAll(".card-title");
ctitles[0].style.color = "blue";
ctitles[1].style.color = "red";
ctitles[2].style.color = "green";
console.log(ctitles);

document.querySelector(".this").style.color = "red";
document.querySelector(".this").style.background = "yellow";

console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));
console.log(document.getElementsByName("search"));

const num = 9.8767;
let a = num.toPrecision(2);
console.log(a);
