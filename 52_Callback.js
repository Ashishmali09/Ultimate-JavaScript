const prompt = require("prompt-sync")();

//Synchronous programming

// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favourite color?");

// console.log(a + " is " + b + " years old and has " + c + " favourite color ");

//Asynchronous programming

console.log("Start");
setTimeout(() => {
  console.log("Hey I am Good");
}, 3000);
console.log("End");
