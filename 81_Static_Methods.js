class Animal {
  constructor(name) {
    this.name = Animal.capitalize(name);
  }
  walk() {
    // console.log("Animal " + Animal.capitalize(this.name) + " is walking");
    console.log("Animal " + this.name + " is walking");
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}

// let a = new Animal(Animal.capitalize("rocky"));
let a = new Animal("rocky");
a.walk();
// a.capitalize("Shiv");  ----> This doesn't work
