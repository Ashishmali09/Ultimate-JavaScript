class Password {
  constructor() {
    console.log("Welocome to password generator");
    this.pass = "";
  }

  generatePassword(len) {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let nums = "0123456789";
    let specialChars = "!@#$%^&*()";
    if (len < 4) {
      alert(`Your password should be at least 4 characters long`);
    } else {
      let i = 0;
      while (i < len) {
        this.pass += chars[Math.floor(Math.random() * chars.length)];
        this.pass += nums[Math.floor(Math.random() * nums.length)];
        this.pass +=
          specialChars[Math.floor(Math.random() * specialChars.length)];
        i += 3;
      }
      this.pass = this.pass.substr(0, len);
      return this.pass;
    }
  }
}
let p = new Password();

console.log(p.generatePassword(7));

// Just a random problem
/* let n = "lydia";
function getName() {
  console.log(n);
  let n = "sarah";
}
getName();  // It gives reference error i.e cannot access 'n' before initialisation */
