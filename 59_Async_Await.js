async function ash() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 deg");
    }, 2000);
  });
  let bangloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("18 deg");
    }, 4000);
  });
  //   delhiWeather.then(alert);
  //   bangloreWeather.then(alert);
  console.log("Fetching Delhi Weather please wait...");
  let delhiW = await delhiWeather;
  console.log("Fetched Delhi Weather: " + delhiW);
  console.log("Fetching Banglore Weather please wait...");
  let bangloreW = await bangloreWeather;
  console.log("Fetched Banglore Weather: " + bangloreW);
  return [delhiW, bangloreW];
}
let bash = async () => {
  console.log("Hey I am bash and I am waiting");
};

const note = async () => {
  console.log("Welcome to weather control room");
  let x = await ash();
  let y = await bash();
};
note();
// ash().then((z) => {
//   alert(z);
// });
