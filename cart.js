let productSaveInLocalStorage = JSON.parse(localStorage.getItem("product"));
let totalPriceInLocalStorage = parseFloat(JSON.parse(localStorage.getItem("total-cost")));
let totalArticlesInLocalStorage = Number(JSON.parse(localStorage.getItem("nbArticlesTotal")));

let cartContainer = document.querySelector("#cart-container");


if(productSaveInLocalStorage === null) {
    cartContainer.innerHTML= "Panier vide";
    cartContainer.style.textAlign = "center";
    cartContainer.style.fontSize = "5rem";
    cartContainer.style.marginTop = "3rem";
    cartContainer.style.fontFamily = "Style Script, Arial"

}   
else {
    let productCartStructure = [];

    for (j = 0; j < productSaveInLocalStorage.length; j++) {
        productSaveInLocalStorage[j] 

        let nameElement = document.createElement("p");
        let productName = document.querySelector("#name-category");
        nameElement.innerHTML = productSaveInLocalStorage[j].name;
        productName.appendChild(nameElement);

        let lensElement = document.createElement("p");
        let productLens = document.querySelector("#lens-category");

        lensElement.innerHTML = productSaveInLocalStorage[j].options;
        productLens.appendChild(lensElement);

        let priceElement = document.createElement("p");
        let productPrice = document.querySelector("#price-category");
        priceElement.innerHTML = `${(productSaveInLocalStorage[j].price) *(productSaveInLocalStorage[j].quantity)} €`;
        productPrice.appendChild(priceElement);

        let quantityElement = document.createElement("p");
        let productQuantity = document.querySelector("#quantity-category");
        quantityElement.innerHTML = productSaveInLocalStorage[j].quantity;
        productQuantity.appendChild(quantityElement);
    }

    let totalPriceP = document.createElement("p");
        let totalPrice = document.querySelector("#total-price");
        totalPriceP.innerHTML = `${totalPriceInLocalStorage} €`;
        totalPrice.appendChild(totalPriceP);

     let nbTotalArticlesP = document.createElement("p");
     let nbTotalArticles = document.querySelector("#nb-total-articles");
     nbTotalArticlesP.innerHTML = totalArticlesInLocalStorage;
     nbTotalArticles.appendChild(nbTotalArticlesP);

} 

/* ---------------------- Vider le panier -----------------*/

const clearAllProduct = document.querySelector("#clear-whole-cart");
