class Employee {
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
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`);
  }
  requestLeaves(leaves) {
    super.requestLeaves(2);
    console.log(`One extraa is granted`);
    // console.log(`Employee has requested ${leaves + 1} leaves (extraa one granted)`);
  }
}

let s = new Programmer();
s.login();
s.requestLeaves();
s.requestCoffee(2);
