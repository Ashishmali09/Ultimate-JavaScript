document.write("Hello Dakota");

let a = setTimeout(function () {
  alert("Hey I am inside the settimeout");
}, 5000);
console.log(a);

let b = prompt("Do you want to run this settimeout?");
if (b == "n") {
  clearTimeout(a);
}

// const sum = (a, b, z) => {
//   console.log("Yes I am running a sum", a + b + z);
// };

// setTimeout(sum, 3000, 5, 4, 9);

const random = () => {
  alert("Hey I am setInterval");
};

let c = setInterval(random, 3000);

clearInterval(c);
