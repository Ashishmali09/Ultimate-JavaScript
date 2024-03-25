let id1 = document.getElementById("id1");
console.log(id1);
let sp1 = document.getElementById("sp1");

console.log(id1.matches(".first"));
console.log(id1.matches(".box"));

console.log(sp1.closest("#id2")); // Return element itself and check nearest ancestor(parent) who matches css selector

console.log(id2.contains(sp1));
console.log(sp1.contains(sp1));
console.log(sp1.contains(id2));
