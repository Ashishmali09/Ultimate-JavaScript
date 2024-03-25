let num = [9, 23, 45, 99, 18];
let a = num.toString(); // a is now new string
console.log(a, typeof a);

let b = num.join("_");
console.log(b, typeof b);

// let c = num.pop(); // pop returns the popped element
// console.log(num, c);

// let d = num.push(7); // push returns the new array length
// console.log(num, d);

// let e = num.shift(); // Removes an element from the beginning of the array and returns it
// console.log(num, e);

let f = num.unshift(39);
console.log(num, f);


