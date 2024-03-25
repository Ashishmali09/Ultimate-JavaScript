const prompt = require("prompt-sync")();

// Problem 1
// let arr = [1, 2, 3, 4, 5, 6, 7, 89];
// let a = prompt("Enter the number: ");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

// Problem 2
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 89];
// let b;
// while (b != 0) {
//   b = prompt("Enter the number: ");
//   b = Number.parseInt(b);
//   arr2.push(b);
//   console.log(arr2);
// }

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 89];
// let b;
// do {
//   b = prompt("Enter the number: ");
//   b = Number.parseInt(b);
//   arr2.push(b);
// } while (b != 0);
// console.log(arr2);

// Problem 3
// let arr3 = [20, 25, 87, 40, 19, 48, 90, 60];
// let n = arr3.filter((x) => {
//   return x % 10 == 0;
// });
// console.log(n);

// Problem 4
// let arr4 = [15, 25, 35, 45, 55, 65, 75];
// let newArr4 = arr4.map((x) => {
//   return x * x;
// });
// console.log(newArr4);

// Problem 5
let arr5 = [1, 2, 3, 4, 5, 6];
let n = arr5.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(n);
