// let arr = [3, 6, 9, 12, 15, 18, 21, 24, 27];
// let a = arr[0]; // No need to do this instead use destructuring
// let b = arr[1]; // No need to do this instead use destructuring

/* let [a, b, c, d, ...rest] = arr;
console.log(a, b, c, d, rest); */

// Syntax 2
/* let arr = [3, 6, 9, 12, 15, 18, 21, 24, 27];
let [a, , b, ...rest] = arr;
console.log(a, b, rest); */

// Syntax 3 (objects)
/* let { a, b } = { a: 9, b: 18 };
console.log(a, b); */

// Spread Operator
/* let arr1 = [3, 6, 9];
let obj = { ...arr1 };
console.log(obj);

const sum = (v1, v2, v3) => {
  return v1 + v2 + v3;
};

console.log(sum(...arr1)); */

// This will be used in React
let obj2 = {
  name: "Ash",
  company: "Synechron",
  address: "Tokyo",
};
console.log({ ...obj2, name: "Shiv", company: "Veritas" });
// console.log({ name: "Shiv", company: "Veritas", ...obj2 }); // This will print original object without changing values


// for practice
/* const a = "Yes"
const b = "No"
const c = { a, b }
console.log(c); */