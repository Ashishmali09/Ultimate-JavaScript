let p = fetch("https://goweather.herokuapp.com/weather/Ny");
// let p = fetch("https://api.dictionaryapi.dev/api/v2/entries/en/fart");
p.then((response) => {
  console.log(response.status);
  console.log(response.ok);
  console.log(response.headers);
  // console.log(response.text());
  return response.json();
}).then((response) => {
  console.log(response);
});
