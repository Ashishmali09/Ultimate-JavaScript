const prompt = require("prompt-sync")();

//  Excercise-1

let generateRandomNumber = Math.random() * 100;
generateRandomNumber = Number.parseInt(generateRandomNumber);
// console.log(generateRandomNumber);
let guessedNumber;
let score = 100;

while (generateRandomNumber != guessedNumber) {
  score = score - 1;
  guessedNumber = prompt("Guess the number: ");

  if (guessedNumber == generateRandomNumber) {
    console.log(
      `Congratulations! You guessed the correct number! i.e. ${generateRandomNumber}`
    );
    console.log(`You guessed the number in ${100 - score} chances`);
    console.log(`Your score is ${score}`);
  } else if (generateRandomNumber < guessedNumber && guessedNumber < 100) {
    console.log(`Well try! but RandomNumber is smaller than your number`);
  } else if (guessedNumber < generateRandomNumber && guessedNumber > 0) {
    console.log(`Ohh! RandomNumber is greater than your number`);
  } else {
    console.log("Enter the number between 1 to 100");
  }
}
