// sessionStorage.setItem("Name", "Ash");
// sessionStorage.getItem("Name");
// sessionStorage.removeItem("Name");
// sessionStorage.clear();
// sessionStorage.length;

window.onstorage = (e) => {
  alert("Values changed");
  console.log(e);
};
