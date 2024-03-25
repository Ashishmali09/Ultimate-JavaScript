// Problem 1
let url = "https://fakestoreapi.com/products";
let cardContainer = document.getElementById("cardContainer");

let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((stores) => {
    console.log(stores);
    ihtml = "";
    for (item in stores) {
      console.log(stores[item]);
      ihtml += `<div class="card m-2" style="width: 20rem;">
          <img src="${stores[item].image}" width="40" height="290" class="card-img-top" alt="Distinct brands" />
          <div class="card-body">
            <h5 class="card-title">${stores[item].title}</h5>
            <p class="card-text">Category: 
             ${stores[item].category}
            </p>
            <p class="card-text">Description: 
             ${stores[item].description}
            </p>
            <p class="card-text">Price: 
             ${stores[item].price}
            </p>
            <p class="card-text">Rating: 
             ${stores[item].rating.rate}
            </p>
            <a href="#" class="btn btn-primary">Visit Store</a>
          </div>
        </div>`;
    }
    cardContainer.innerHTML = ihtml;
  });

/* **** Notes App (Remaining questions of practice set) **** */
// let Note = localStorage.getItem("note");
// alert("Your note is " + Note);

// let a = prompt("Enter your note");
// if (a) {
//   localStorage.setItem("note", a);
// }

// let c = confirm("Do you want to delete this note?");
// if (c) {
//   localStorage.removeItem("note");
//   alert("Note deleted successfully");
// }
