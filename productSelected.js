let titre = document.querySelector("#product-titre");
let productPrice = document.querySelector("#product-price");
let quantityProducts = document.querySelector("#lens-quantity-input");
let lensSizeSelect = document.querySelector("#lens-size-select");
var imgProduct = document.querySelector("#product-card-img");

// Permet de sélectionner l'id qui est placé après id dans le lien de la page

let params = (new URL(document.location)).searchParams;
let id = params.get('id'); 



$(document).ready(function() {

  let queryString = window.location.search;
  let urlSearchParams = new URLSearchParams(queryString);
  $.get(`http://localhost:3000/api/cameras/${urlSearchParams.get("id")}`,function(response) { 
      
      
      titre.innerHTML = response.name;

      let imgTag = document.querySelector("#product-card-img");
      imgTag.src = response.imageUrl;
      imgTag.alt = response.name;

      
      
      let priceInit = parseFloat(response.price) / 100;
      // priceConv = new Intl.NumberFormat("eu-EU", {style: "currency", currency: "EUR"}).format(priceInit);
      productPrice.innerHTML =`${priceInit} €`;

      

      let productContainer = document.querySelector('.product-container');
      let cardContainer = document.querySelector('#product-card-container');
      let productDescription = document.querySelector("#product-description");
      productDescription.innerHTML = response.description;
     
     
      for (let i = 0; i < response.lenses.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = response.lenses[i];
        lensSizeSelect.appendChild(option);
      
      }
      } );

    });


const btnSendToCard = document.querySelector("#product-add-to-cart-btn");
btnSendToCard.addEventListener("click", (e) => {
  e.preventDefault();

  let dataProductToCart = {
  name: titre.innerHTML,
  price: parseFloat(productPrice.innerHTML),
  quantity: parseInt(quantityProducts.value),
  id: id,
  options: lensSizeSelect.value,
  imgProduct: imgProduct.src,
  
};

  let dataTotalPrice = {
    cost: (parseFloat(dataProductToCart.price)) * (parseFloat(dataProductToCart.quantity)),
  }

  let nbArticle = Number(dataProductToCart.quantity);


console.log(dataTotalPrice.cost);


  let productSaveInLocalStorage = JSON.parse(localStorage.getItem("product"));
  
  let pushToLocalStorage = () => {
    productSaveInLocalStorage.push(dataProductToCart);
    localStorage.setItem("product", JSON.stringify(productSaveInLocalStorage));
  }
  
  
  let pushTotalCost = () => {
    valueJson = JSON.parse(localStorage.getItem("total-cost"));
    console.log(valueJson);
    value = parseFloat(valueJson) + parseFloat(dataTotalPrice.cost);
    console.log(value);
    localStorage.setItem("total-cost", JSON.stringify(value));
  }

  pushFirstPrice = () => {
    localStorage.setItem("total-cost", JSON.stringify(dataTotalPrice.cost));
  }
  

  pushTotalNbArticles = () => {
    valueNb = JSON.parse(localStorage.getItem("nbArticlesTotal"));
    totalValue = parseInt(valueNb) + nbArticle;
    localStorage.setItem("nbArticlesTotal", JSON.stringify(totalValue));
  } 

  pushFirstNbArticles = () => {
    localStorage.setItem("nbArticlesTotal", JSON.stringify(nbArticle));
  }



  const popupConfirm = () => {
    if(window.confirm(`${dataProductToCart.name} lentille ${dataProductToCart.options} a été ajouté au panier. OK pour consulter le panier, ANNULER pour retourner à l'accueil`)) {
      window.location.href = "cart.html";
    } else {
      window.location.href = "home.html";
    }
  }

  if (productSaveInLocalStorage) {
    pushToLocalStorage();
    popupConfirm();
    pushTotalCost();
    pushTotalNbArticles();
  }

  else {
    productSaveInLocalStorage = [];
    pushToLocalStorage();
    pushFirstPrice();
    pushFirstNbArticles();
    popupConfirm();
    
  }


})





