console.log("Tutorial for var, let and const");
var a=45;
let b="Ashish";
const author="Ashish";
//author='ss';  //Throws an error cz constants cannot be changed
let c="Katy";
c="Taylor";
{
    let b="this"
    console.log(b);
}
console.log(b);
let d= null;
let e=undefined;