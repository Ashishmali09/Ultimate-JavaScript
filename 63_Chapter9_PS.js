// //Problem 1
// let wallStreet = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(src + " Successfully Done");
//     };
//     document.head.appendChild(script);
//   });
// };

// let a = wallStreet(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
// );
// a.then((value) => {
//   console.log(value);
//   alert(value);
// });

// //Problem 2
// let wallStreet = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(src + " Successfully Done");
//     };
//     document.head.appendChild(script);
//   });
// };
// let wall = async () => {
//   console.log(new Date().getMilliseconds());
//   let a = await wallStreet(
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
//   );
//   console.log(a);
//   console.log(new Date().getMilliseconds());
// };
// wall();

// Problem 3
// let promise = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("This is not acceptable gentleman"));
//     }, 3000);
//   });
// };

// let a = async () => {
//   try {
//     let x = await promise();
//     console.log(x);
//   } catch (error) {
//     console.log("This error has been handled");
//   }
// };
// a();

// Problem 4
let promise = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 2000);
  });
};
let promise2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 1000);
  });
};
let promise3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, 3000);
  });
};

const run = async () => {
  console.time("run");
  // let a = await promise(); // Fetch first 10 products from the database
  // let b = await promise2(); // Fetch another 10 products from the database
  // let c = await promise3(); // Fetch yet another 10 products from the database

  let a = promise(); // Fetch first 10 products from the database
  let b = promise2(); // Fetch another 10 products from the database
  let c = promise3(); // Fetch yet another 10 products from the database
  let abc = await Promise.all([a, b, c]);
  console.log(abc);
  console.log(a, b, c);
  console.timeEnd("run");
};

run();
