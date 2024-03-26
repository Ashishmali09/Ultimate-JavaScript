const hello = () => {
  console.log("Ash Bhai");
};
const aHello = (name) => {
  console.log("Hello " + name);
};

module.exports = { hello, aHello }; // Same as below line
// module.exports = { hello: hello, aHello: aHello };
