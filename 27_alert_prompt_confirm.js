// alert("Hello Your script works!");
alert("Enter the value of a!");
let a = prompt("Enter the value of a", "999");
a = Number.parseInt(a);
alert("You entered a type of " + typeof a);

let write = confirm("Do you want to write it to the page?");
if (write) {
  document.write(a);
} else {
  document.write("Please allow me to write");
}
