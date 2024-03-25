let name = "Ashish Amruta Vikas Rutuja Rudresh";
// console.log(name.length);

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(2, 10));
// console.log(name.slice(2));
console.log(name.replace("Vikas", "Virat"));

let friend = "Naman";
console.log(name.concat(" is a friend of ", friend, " dost "));
let friend2 = "     Rohit       ";
console.log(friend2.trim());

let fr = "Shivika";
console.log(fr[0]);
console.log(fr[1]);
console.log(fr[2]);
console.log(fr[3]);
// fr[4] = w;   //This is not possible
console.log(fr);

// Use a for loop to print a string

for (let i = 0; i < fr.length; i++) {
  console.log("The name of my crush is ", fr[i]);
}
