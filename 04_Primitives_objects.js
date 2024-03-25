// nn bb ss u  --> Primitives in JS

let a=null;
let b=345;
let c=true;  // can also be false
let d=BigInt("547") + BigInt("2")
let e="Ash"
let f=Symbol("I am a nice symbol");
let g=undefined;
let i;
console.log(a,b,c,d,e,f,g,i);
console.log(typeof e);

//Object in JS --> Non-primitive data type
const item={
    "Ash":true,
    "Shiv":false,
    "Lovish":99,
    "Amruta":undefined
}
console.log(item["Lovish"]);