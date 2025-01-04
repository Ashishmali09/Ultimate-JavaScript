let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolved after 2 seconds");
    resolve(54);
  }, 2000);
});

promise
  .then((value) => {
    console.log(value);
    let promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise 2");
      }, 2000);
    });
    return promise2; // When Promise2 fulfilled only then .then() will work and give its value
  })
  .then((value) => {
    console.log("We are done with ", value);
    return 9;
  })
  .then((value) => {
    console.log("We are pakka done 👍 ", value);
  });

//Quiz to write loadScript function with promises
/*const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      //   resolve(1);
      resolve("Script has been loaded");
    };
    script.onerror = () => {
      reject(0);
    };
  });
};
let p = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
);
p.then((value) => {
  console.log(value);
  return loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  );
})
  .then((value) => {
    console.log("Second script ready");
  })
  .catch((error) => {
    console.log("We are sorry but we are having problems loading this script");
    // console.log(error);
  });*/
