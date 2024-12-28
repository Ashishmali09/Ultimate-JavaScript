// Problem 1
/* button with multiple alerts ft. index.html */

//Problem 2
/* See index.html */

//Problem 3
document.getElementById("google").addEventListener("click", function (e) {
  window.location = "https://www.google.com";
});
document.getElementById("javatpoint").addEventListener("click", function (e) {
  window.location = "https://www.javatpoint.com";
});
document.getElementById("twitter").addEventListener("click", function (e) {
  window.location = "https://www.twitter.com";
});

//Problem 4
const fetchContent = async (url) => {
  con = await fetch(url);
  let a = con.json();
  return a;
};

setInterval(async function () {
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  console.log(await fetchContent(url));
}, 5000);

//Problem 5
setInterval(() => {
  document.querySelector("#bulb").classList.toggle("bulbcontainer");
}, 400);
