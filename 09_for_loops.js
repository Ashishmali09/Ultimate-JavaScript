const prompt = require("prompt-sync")();

let sum = 0;
let n = prompt("Enter the value of n: ");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  sum += i + 1;
  console.log(i + 1);
}
console.log("Sum of first " + n + " natural numbers is " + sum);
// console.log(i);

// For in loop
let obj = {
  Ash: 90,
  Shiv: 88,
  Virat: 67,
  Anushka: 47,
  Aishwarya: 32,
};
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}

//For of loop
for (let b of "Ash") {
  console.log(b);
}
