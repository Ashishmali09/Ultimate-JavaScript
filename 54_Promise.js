const promise = new Promise(function (resolve, reject) {
  alert("I am an alert in promise!");
  resolve(54);
  // reject(78);
});

console.log("Hello One!");
setTimeout(() => {
  console.log("Hello Two!");
}, 2000);
console.log("Hello Three!");
console.log(promise);

// Fetch google.com homepage     ==> console.log('google.com homepage done')
// Fetch data from the data api
// Fetch pictures from the server
// Print downloading
// Rest of the script
