let titre = document.querySelector("#product-titre");
let productPrice = document.querySelector("#product-price");
let quantityProducts = document.querySelector("#lens-quantity-input");
let lensSizeSelect = document.querySelector("#lens-size-select");


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

      
      
      let priceInit = Number(response.price) / 100;
      priceConv = new Intl.NumberFormat("eu-EU", {style: "currency", currency: "EUR"}).format(priceInit);
      productPrice.innerHTML = priceConv;

      

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
  quantity: parseFloat(quantityProducts.value),
  id: id,
  options: lensSizeSelect.value,
};


  let productSaveInLocalStorage = JSON.parse(localStorage.getItem("product"));
  let pushToLocalStorage = () => {
    productSaveInLocalStorage.push(dataProductToCart);
    localStorage.setItem("product", JSON.stringify(productSaveInLocalStorage));
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
  }

  else {
    productSaveInLocalStorage = [];
    pushToLocalStorage();
    console.log(productSaveInLocalStorage);
  }


})





