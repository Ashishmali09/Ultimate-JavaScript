const prompt = require("prompt-sync")();

//Problem 1
const marks = {
  Ash: 98,
  Nilesh: 57,
  Amruta: 69,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  // console.log("The marks of "+ Object.keys(marks)[i] +" are "+ marks[Object.keys(marks)[i]]);
}

//Problem 2
for (let key in marks) {
  //   console.log("The marks of " + key + " are " + marks[key]);
}

//Problem 3
let cn = 39;
let i;
while (i != cn) {
  console.log("Try again");
  i = prompt("Enter a number: ");
}
console.log("You have entered a correct number");

//Problem 4
const mean = (q, w, r, t, y) => {
  return (q + w + r + t + y) / 5;
};

console.log("The mean is " + mean(2, 6, 4, 9, 7));
