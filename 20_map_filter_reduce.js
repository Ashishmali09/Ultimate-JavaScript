let arr = [45, 99, 54];
// console.log(arr);

//Array map method
let a = arr.map((value, index, array) => {
  //   console.log(value, index, array);
  return value + index;
});
console.log(a);

//filter method
let arr2 = [45, 99, 54, 0, 3, 5];
let a2 = arr2.filter((val) => {
  return val < 10;
});
console.log(a2);

//Array reduce method
let arr3 = [1, 2, 3, 4, 2, 6, 1];
let reduce_func = (a, b) => {
  return a + b;
};
let newarr3 = arr3.reduce(reduce_func);
console.log(newarr3);
