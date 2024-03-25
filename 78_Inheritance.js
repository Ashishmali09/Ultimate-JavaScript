class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = this.color;
  }
  run() {
    console.log(this.name + " is running..!");
  }

  shout() {
    console.log(this.name + " is Shouting..!");
  }
}

class Monkey extends Animal {
  eatBanana() {
    console.log(this.name + " is eating banana");
  }
  hide() {
    console.log(`${this.name} is hiding..!`);
  }
}

let Ani = new Animal("Bruno", "White");
let mon = new Monkey("Chimpu", "Orange");

Ani.run();
mon.eatBanana();
mon.shout();
mon.hide();
// Ani.hide();  This will throw an error
