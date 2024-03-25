// Global scope
let p = 9;

// Block scope
/* {
  let a = 27;
}
console.log(a); */

// Function scope
function vp() {
  let b = 7;
  console.log(p);
  console.log(b);
}
vp();
// console.log(b);
console.log(p);
