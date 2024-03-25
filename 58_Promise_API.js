let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 10000);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
    // reject(new Error("Error"));
  }, 2000);
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

// promise.then((value) => {
//   console.log(value);
// });
// promise2.then((value) => {
//   console.log(value);
// });
// promise3.then((value) => {
//   console.log(value);
// });

// let promise_all = Promise.all([promise, promise2, promise3]);
// promise_all.then((value) => {
//   console.log(value);
// });

// let promise_allSettled = Promise.allSettled([promise, promise2, promise3]);
// promise_allSettled.then((value) => {
//   console.log(value);
// });

// let promise_race = Promise.race([promise, promise2, promise3]);
// promise_race.then((value) => {
//   console.log(value);
// });

// let promise_any = Promise.any([promise, promise2, promise3]);
// promise_any.then((value) => {
//   console.log(value);
// });

// let promise_resolve = Promise.resolve(9);
// promise_resolve.then((value) => {
//   console.log(value);
// });

let promise_reject = Promise.reject(new Error("Rejected error"));
promise_reject.then((value) => {
  console.log(value);
});
