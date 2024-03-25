const sayHello = (name, greeting) => console.log(greeting + " " + name);

sayHello("Ash", "Good afternoon");

const x = {
  name: "Ash",
  role: "JS Developer",
  exp: 10,
  show: function () {
    // let that = this;
    // console.log(this);
    setTimeout(() => {
      // When we use arrow functions it will take lexical this
      console.log(`The name is ${this.name}\nThe role is ${this.role}`);
    }, 2000);
  },
};

// console.log(x.name, x.exp);
x.show();
