let user = prompt("Enter S,W or G");
let computerIn = Math.floor(Math.random() * 3);
let computer = ["S", "W", "G"][computerIn];

const match = (user, computer) => {
  if (user === computer) {
    return "Nobody. Match is tied";
  } else if (user === "S" && computer === "W") {
    return "user";
  } else if (user === "W" && computer === "G") {
    return "user";
  } else if (user === "G" && computer === "S") {
    return "user";
  } else if (user === "W" && computer === "S") {
    return "computer";
  } else if (user === "G" && computer === "W") {
    return "computer";
  } else if (user === "S" && computer === "G") {
    return "computer";
  }
};
let result = match(user, computer);
document.write(
  `Computer: ${computer} <br> User: ${user} <br> The winner is ${result.toUpperCase()} `
);
