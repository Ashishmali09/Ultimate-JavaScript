// Problem 1
// class ComplexNum {
//   constructor(real, imaginary) {
//     this.real = real;
//     this.imaginary = imaginary;
//   }
// }

// let c = new ComplexNum(1,7);
// let d = new ComplexNum(7, 9);

// Problem 2
// class ComplexNum {
//   constructor(real, imaginary) {
//     this.real = real;
//     this.imaginary = imaginary;
//   }
//   add(num) {
//     console.log(this.real,this.imaginary);
//     this.real = this.real + num.real;
//     this.imaginary = this.imaginary + num.imaginary;
//     console.log(num.real,num.imaginary);
//   }
// }

// let c = new ComplexNum(1, 7);
// let d = new ComplexNum(7, 9);
// c.add(d);
// console.log(`${c.real}+${c.imaginary}i`);

// Problem 3
// class Human {
//   constructor(name, favFood) {
//     this.name = name;
//     this.favFood = favFood;
//   }
//   run() {
//     console.log(`${this.name}: Human is running`);
//   }
// }

// class Student extends Human {
//   run() {
//     console.log(
//       `${this.name}: Student is running(🏃‍♂️) and his favorite food is ${this.favFood}(🍛)`
//     );
//   }
// }

// let h = new Human("Shiv", "Gavari");
// let s = new Student("Ash", "Paneer");
// h.run();
// s.run();

// Problem 4 (Comment out problem 3 for using below part)
// console.log(s instanceof Human);

// Problem 5
class ComplexNum {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  add(num) {
    // console.log(this.real, this.imaginary);
    this.real = this.real + num.real;
    this.imaginary = this.imaginary + num.imaginary;
    // console.log(num.real, num.imaginary);
  }
  get real() {
    return this._real;
  }
  set real(newReal) {
    this._real = newReal;
  }
  get imaginary() {
    return this._imaginary;
  }
  set imaginary(newImaginary) {
    this._imaginary = newImaginary;
  }
}

let c = new ComplexNum(1, 7);
console.log(c.real, c.imaginary);
c.real = 10;
c.imaginary = 10;
let d = new ComplexNum(7, 9);

c.add(d);
console.log(`${c.real}+${c.imaginary}i`);
