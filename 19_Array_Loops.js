let num = [3, 35, 2, 11, 24];
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

num.forEach((element) => {
  console.log(element * element);
});

//Array.from
let name = "Ashish";
let arr = Array.from(name);
console.log(arr);

//for....of
for (let i of num) {
  console.log(i);
}

//for...in
for (let item in num) {
  console.log(item);
}
