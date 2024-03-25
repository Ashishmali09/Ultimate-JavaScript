let p = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("I am Promise and I am fulfilled");
    resolve(true);
  }, 4000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("I am Promise and I am rejected");
    reject(new Error("Promise failed"));
  }, 4000);
});

console.log(p, p2);
// p.then((value) => {
//   console.log(value);
// });

// p2.catch((error) => {
//   console.log("Some error occurred in p2");
// });

//Solution 2
p2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
