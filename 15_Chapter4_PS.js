//Problem 1
// let name = "Ash\"";
// console.log(name.length);

//Problem2
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(sentence.includes(word));
console.log(
  `The word ${word} ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);

// const str1 = "Saturday night plans";
// console.log(str1.startsWith("Sat")); //true
// console.log(str1.startsWith("day", 5)); //true

// const str1 = "Cats are the best!";
// console.log(str1.endsWith("est!"));
// console.log(str1.endsWith("best", 17));
// const str2 = "Is this a question?";
// console.log(str2.endsWith("question"));

//Problem 3
const str1 = "Bishnoi";
console.log(str1.toLowerCase());

//Problem 4
let str2 = "Please give Rs 1000";
let amount = Number.parseInt(str2.slice("Please give Rs ".length));
console.log(amount);
console.log(typeof amount);
console.log(str2.slice(15));

//Problem 5
let friend = "Ranbir";
friend[3] = "d";
console.log(friend); //This is not possible because strings are immutable
