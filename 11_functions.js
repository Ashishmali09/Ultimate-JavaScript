const hello = () => {
  console.log("Hey, how are you. I am  toh pretty good yar");
  return "Hey Ash";
};

function onePlusAvg(x, y) {
  return 1 + (x + y) / 2;
}

const sum = (q, r) => {
  return q + r;
};

let a = 1;
let b = 2;
let c = 3;

const v = hello();
console.log(v);

console.log("One plus average of a and b is ", onePlusAvg(a, b)); //function invoking everytime
console.log("One plus average of b and c is ", onePlusAvg(b, c));
console.log("One plus average of c and a is ", onePlusAvg(c, a));
console.log(sum(9, 7));
