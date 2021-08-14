const urlApi = "http://localhost:3000/api/cameras";
// const cameraContainer = document.getElementsByClassName("card-container");
let cameraContainer = document.querySelector(".card-container");

let resultatAllProduct;


function fetchCamera() {
fetch(urlApi)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })

  .catch(function(err) {
    cameraContainer.innerHTML = "Nous sommes désolé une erreur c'est produite";
    
  })
  
  .then(function(data) {



    for(let i = 0; i < data.length; i++) {

      let carte = document.createElement("div");
      let imgCard = document.createElement("img");
      imgCard.src = data[i].imageUrl;
      let containerDescription = document.createElement("div");
      containerDescription.classList.add("container-description");

      let name = document.createElement("p");
      name.innerText = data[i].name;
      name.classList.add("contenair-description-name");
      
      let price = document.createElement("p");
      priceInit = data[i].price
      priceConv = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(priceInit);
      price = priceConv.innerText;

      // price.innerText = data[i].price;
      
      price.classList.add("container-description-price");


  
      
      cameraContainer.appendChild(carte);
  
      carte.classList.add("camera-card");
      carte.appendChild(imgCard);
      
      carte.appendChild(containerDescription);
      containerDescription.appendChild(name);
      containerDescription.appendChild(price);
      new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
  }
    
  })

  
 

}

fetchCamera();






// function createCards(arr) {
  
//   for(let i = 0; i < arr.length; i++) {
//     const carte = document.createElement("a");
//     const imgCard = document.createElement("img");
//     imgCard.src = [i].imageUrl;
//     const name = document.createElement("p");
//     name.innerText = [i].name;

//     card-container.appendChild(carte);

//     carte.classList.add("camera-card");
//     carte.appendChild(imgCard);
//     carte.appendChild(name);
//   }
// }