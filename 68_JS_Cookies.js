// console.log(document.cookie);
document.cookie = "Name=Ash";
document.cookie = "Name2=Shiv";
let key = prompt("Enter your key");
let value = prompt("Enter your value");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);
