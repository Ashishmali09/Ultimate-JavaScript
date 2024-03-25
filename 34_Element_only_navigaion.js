const changeBG = () => {
  document.body.firstElementChild.style.background = "cyan";
};

let b = document.body;
console.log("The first child of b is: ", b.firstChild);
console.log("The first Element of b is: ", b.firstElementChild);
