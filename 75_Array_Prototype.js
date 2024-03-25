let a = {
  name: "Ash",
  language: "JavaScript",
  run: () => {
    alert("self run");
  },
};
console.log(a);

let p = {
  run: () => {
    alert("run");
  },
};
a.__proto__ = p;

p.__proto__ = {
  name2: "Shivani",
};

a.run();
console.log(a.name2);
