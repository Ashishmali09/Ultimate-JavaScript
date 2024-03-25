class Animal {
  constructor(name) {
    this._name = name;
  }
  fly() {
    console.log("Mai ud raha hoo...!");
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}
class Rabbit extends Animal {
  eatCarrots() {
    console.log("Eating Carrot");
  }
}

let a = new Animal("Grey");
let b = new Rabbit();

a.fly();
console.log(a.name);
a.name = "Katy";
console.log(a.name);

let c = 99;
console.log(a instanceof Animal);
console.log(b instanceof Animal); // True cz it inherits from Animal class
console.log(b instanceof Rabbit);
console.log(c instanceof Animal);
