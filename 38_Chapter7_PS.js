// Problem 1
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

// Problem 2
// NO

// Problem 3
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

// Problem 4

Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "cyan";
});

// Problem 5
//None of these as we cannot see farthest element which matches css selector