// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(num.length);
// delete num[4];
// console.log(num.length);
// console.log(num);

// let num_more = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// let num_even_more = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
// let newArray = num.concat(num_more,num_even_more);
// console.log(newArray);
// console.log(num_more);
// console.log(num_even_more);

//Sort method
// let compare = (a, b) => {
//   return a - b;
// };
// let num = [1, 532, 3, 54, 35, 16, 97, 48, 79];
// num.sort(); // Sort values alphabetically
// console.log(num);
// num.sort(compare);
// // num.reverse();
// console.log(num);

//Splice and Slice method
let num = [1, 532, 3, 54, 35, 16, 97, 48, 79];
// let deletedValues = num.splice(2, 3, 1023, 1024, 1025, 1026, 1027);
// console.log(num);
// console.log(deletedValues);

let slicedArray = num.slice(3, 6);
console.log(slicedArray);
