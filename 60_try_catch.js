setTimeout(() => {
  console.log("Hacking wifi...Please wait..");
}, 1000);

try {
  setTimeout(() => {
    console.log(Rakul); // it's scheduled and try don't find error here so next code executes
  }, 500);
} catch (error) {
  console.log("Wow wow", error);
}

setTimeout(() => {
  console.log("Fetching username and password...Please wait..");
}, 2000);

setTimeout(() => {
  console.log("Hacking Rakul's instagram Id...Please wait..");
}, 3000);

setTimeout(() => {
  console.log(
    "Username and Password of Rakul's (+919890898872) fetched...Please wait.."
  );
}, 4000);
