/* message = "Ohayou gozaimasu";
function hello() {
  let message = "Good Morning";
  //   let message = "Good Afternoon";
  console.log("Hello: " + message);

  let c = function hello2() {
    console.log("I am fun c: " + message);
  };
  return c;
}
c = hello();
c(); */

/* function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  name = "Ash";
  return displayName;
}
let c = init();
c(); */

function returnFunc() {
  let x = () => {
    let a = 1;
    console.log(a);
    let y = () => {
      //   let a = 2;
      console.log(a);
      let z = () => {
        // let a = 3;
        console.log(a);
      };
      z();
    };
    a = 99;
    y();
  };
  return x;
}

let a = returnFunc();
a();
