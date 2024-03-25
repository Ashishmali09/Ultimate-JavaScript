// let x = prompt("Hey, What's your age?");
// x = Number.parseInt(x); // converting the string into a number
// // console.log(typeof x);
// if (x < 0) {
//   alert("This is an invalid age");
// } else if (x < 9) {
//   alert("You are a kid and you cannot even think of driving");
// } else if (x < 18 && x >= 9) {
//   alert("You are a kid and you can think of driving after 18");
// } else {
//   alert("You can now drive as you are above 18");
// }

// Ternary operator
let a = 17;
console.log("You can", a > 18 ? "Drive" : "not drive");

// Switch statement

let b = 2 + 2;

switch (b) {
  case 3:
    alert("Too small");
    break;

  case 4:
    alert("Exactly");
    break;

  case 5:
    alert("Too big");
    break;

  default:
    alert("I don't know such values");
}
