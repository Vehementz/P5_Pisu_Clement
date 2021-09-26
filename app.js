const urlApi = "http://localhost:3000/api/cameras";
let cameraContainer = document.querySelector(".card-container");

let resultatAllProduct;


// Récupération des ressources de l'api pour recevoir toutes les caméras

function getCameras() {
fetch(urlApi)
  .then(function(res) { 
    if (res.ok) {
      return res.json();
    }
  })


// si il y a une erreur celà sera communiqué à l'utilisateur qu'une erreur c'est produite 

  .catch(function(err) {
    cameraContainer.innerHTML = "Nous sommes désolés une erreur c'est produite";
    cameraContainer.style.justifyContent = "center";
    cameraContainer.style.fontSize = "2.5rem";
  })
  
  .then(function(data) {

// Permet de créer une carte avec différents attributs pour chacun des produits de l'api

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
      // price.innerText = data[i].price;
      let priceInit = Number(data[i].price) / 100;
      priceConv = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(priceInit);
      price.innerText = priceConv;
      
      price.classList.add("container-description-price");


  
      
      cameraContainer.appendChild(carte);
  
      carte.classList.add("camera-card");
      carte.appendChild(imgCard);
      
      carte.appendChild(containerDescription);
      containerDescription.appendChild(name);
      containerDescription.appendChild(price);


      let detailLink = document.createElement("a");
      containerDescription.appendChild(detailLink);
      detailLink.innerText = "Details";
      detailLink.href = "./product.html?id=" + data[i]._id;
      detailLink.classList.add("detail-link");
      
}
    
  })

}

// on appele la fonction getCameras()

getCameras();



