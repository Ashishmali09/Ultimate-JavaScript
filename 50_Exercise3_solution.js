let joke = document.getElementById("joke");
let myJokes = [
  {
    category: "Programming",
    type: "twopart",
    joke: "How can you tell an extroverted programmer?",
    delivery: "He looks at YOUR shoes when he's talking.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 17,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "twopart",
    joke: "Why do Java programmers hate communism?",
    delivery: "They don't want to live in a classless society.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 53,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "single",
    joke: "ASCII silly question, get a silly ANSI.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 25,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "single",
    joke: "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 27,
    safe: false,
    lang: "en",
  },
  {
    category: "Programming",
    type: "single",
    joke: 'A guy walks into a bar and asks for 1.4 root beers.\nThe bartender says "I\'ll have to charge you extra, that\'s a root beer float".\nThe guy says "In that case, better make it a double."',
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 2,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "twopart",
    joke: "Why do programmers wear glasses?",
    delivery: "Because they need to C#",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 50,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "single",
    joke: "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 44,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "twopart",
    joke: "Why is 6 afraid of 7 in hexadecimal Canada?",
    delivery: "Because 7 8 9 A?",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 7,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "twopart",
    joke: "Why did the web developer walk out of a resturant in disgust?",
    delivery: "The seating was laid out in tables.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 6,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "single",
    joke: "If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 22,
    safe: true,
    lang: "en",
  },

  {
    category: "Programming",
    type: "twopart",
    joke: "How many programmers does it take to screw in a light bulb?",
    delivery: "None. It's a hardware problem.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 1,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "single",
    joke: 'A guy walks into a bar and asks for 1.4 root beers.\nThe bartender says "I\'ll have to charge you extra, that\'s a root beer float".\nThe guy says "In that case, better make it a double."',
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 2,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "single",
    joke: "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 3,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "single",
    joke: 'A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks "may I join you?"',
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 5,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "single",
    joke: "Your mama's so FAT she can't save files bigger than 4GB.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: true,
    },
    id: 9,
    safe: false,
    lang: "en",
  },
  {
    category: "Programming",
    type: "single",
    joke: "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 4,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "single",
    joke: "// This line doesn't actually do anything, but the code stops working when I delete it.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 12,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "twopart",
    joke: "Why did the web developer walk out of a resturant in disgust?",
    delivery: "The seating was laid out in tables.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 6,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "twopart",
    joke: "Why do programmers confuse Halloween and Christmas?",
    delivery: "Because Oct 31 = Dec 25",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 11,
    safe: true,
    lang: "en",
  },
];

let index = Math.floor(Math.random() * myJokes.length - 1);
console.log(index);
joke.innerHTML = myJokes[index].joke;
