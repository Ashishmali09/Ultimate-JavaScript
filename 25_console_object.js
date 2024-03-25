console.log("log");
console.info("info");
console.error("error");
console.warn("warn");
console.assert("log" != false);
console.assert("log" == false);

// time for for loop
console.time("forLoop");
for (let i = 0; i < 5; i++) {
  console.log(935);
}
console.timeEnd("forLoop");

// time for while loop
console.time("whileLoop");
let i = 0;
while (i < 5) {
  console.log(935);
  i++;
}
console.timeEnd("whileLoop");
