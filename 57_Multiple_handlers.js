let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    alert("Hey I am not resolved");
    resolve(1);
    // reject(0);
  }, 2000);
});

promise
  .then(() => {
    console.log("Hurray......!");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve(9);
        reject(0);
      }, 5000);
    });
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

promise.then(() => {
  console.log("Congratulations this promise is now resolved");
});

console.log(promise);
