// Problem 1
/* const a = async (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 2000);
  });
};

(async () => {
  let text = await a("Hello");
  console.log(text);
  text = await a("World");
  console.log(text);
})(); */

// Problem 2
/* function avg(a, b, c, d, e) {
  let sum = a + b + c + d + e;
  return sum / 5
}

let x = [1, 3, 5, 7, 9];
console.log(`The average of given numbers is ${avg(...x)}`); */

// Problem 3
/* const s = async (text, n = 2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, n * 1000);
  });
};

(async () => {
  let r = await s("I am resolving after 3 seconds", 3);
  console.log(r);
  r = await s("I am resolving after 4 seconds", 4);
  console.log(r);
})(); */

// Problem 4
const simpleInterest = (p, r, t) => {
  return (p * r * t) / 100;
};
console.log(`Simple interest will be ${simpleInterest(1000000, 9, 1)}`);
