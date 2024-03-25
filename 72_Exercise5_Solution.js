let messages = [
  "Hello Shraddha...",
  "Initializing Hack tool...",
  "Connecting to Instagram...",
  "Connecting to server1...",
  "Connection failed. Retrying...",
  "Connecting to server2...",
  "Connected Successfully...",
  "Username shraddha09...",
  "Trying brute force...",
  "200k passwords tried...",
  "Match not found...",
  "Another 200k passwords tried...",
  "Match not found...",
  "Another 200k passwords tried...",
  "Match not found...",
  "Another 200k passwords tried...",
  "Match not found...",
  "Another 200k passwords tried...",
  "Match found...",
  "Accessing account of Shraddha09...",
  "Hack successful...",
];

const sleep = async (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};
const showHack = async (message) => {
  await sleep(2);
  //   console.log(message);
  let hack = document.getElementById("hack");
  hack.innerHTML = hack.innerHTML + message + "<br>";
};

(async () => {
  for (let i = 0; i < messages.length; i++) {
    await showHack(messages[i]);
  }
})();
