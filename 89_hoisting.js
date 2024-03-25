// Following lines will run successfully due to javascript hoisting

/* greet();
const greet = () => {
  console.log("Good Evening");
}; */

console.log(a);
let a = 9; // Declaration hoisted to the top but initialisation is not
console.log(a);

// let b;
console.log(b);
var b = 9; // it will be hoisted but variable will have gone to temprory dead zone.
console.log(b);
