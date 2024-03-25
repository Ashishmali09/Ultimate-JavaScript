// const prompt = require("prompt-sync")();

// // Problem 1
// let age = prompt("Enter your age: ");
// age = Number.parseInt(age);

// const canDrive = (age) => {
//   return age > 18 ? true : false;
// };

// if (canDrive(age)) {
//   alert("Yes, you can drive!");
// } else {
//   alert("Sorry, you can't drive!");
// }

// // Problem 2
// const canDrive = (age) => {
//   return age > 18 ? true : false;
// };
// let runAgain = true;

// while (runAgain) {
//   let age = prompt("Enter your age: ");
//   age = Number.parseInt(age);

//   if (canDrive(age)) {
//     alert("Yes, you can drive!");
//   } else {
//     alert("Sorry, you can't drive!");
//   }
//   confirm("Do you want to play again?");
// }

// // Problem 3
// const canDrive = (age) => {
//   return age > 18 ? true : false;
// };
// let runAgain = true;

// while (runAgain) {
//   let age = prompt("Enter your age: ");
//   age = Number.parseInt(age);
//   if (age < 0) {
//     console.error("Please enter the valid age");
//     break;
//   }

//   if (canDrive(age)) {
//     alert("Yes, you can drive!");
//   } else {
//     alert("Sorry, you can't drive!");
//   }
//   confirm("Do you want to play again?");
// }

// // Problem 4
// let no = prompt("Enter the number");
// no = Number.parseInt(no);

// if (no > 4) {
//   window.location.href = "https://www.google.com";
// }

// Problem 5
let color = prompt("Enter the page background color");
document.body.style.background = color;
