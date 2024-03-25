class Employee {
  constructor(name) {
    this.name = name;
    console.log(`${this.name} Employee's constructor is here`);
  }
  login() {
    console.log(`Employee has logged in`);
  }

  logout() {
    console.log(`Employee has logged out`);
  }

  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves - Auto approved`);
  }
}

class Programmer extends Employee {
  constructor(name) {
    // this.name = name;   // Write super constructor before this.
    super(name);
    console.log(`This is newly written constructor`);
  }
  //   constructor(...args) { --> If there is no constructor in the child class, this will create automatically
  //     super(...args);
  //   }
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`);
  }
  requestLeaves(leaves) {
    super.requestLeaves(2);
    console.log(`One extraa is granted`);
    // console.log(`Employee has requested ${leaves + 1} leaves (extraa one granted)`);
  }
}

let s = new Programmer("Ash");
s.login();
s.requestLeaves(4);
s.requestCoffee(2);
