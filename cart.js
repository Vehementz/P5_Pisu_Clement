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

        /*---------------- Enlever juste un article -------------- */


    //     let btnClearArticle = document.createElement("button");
    //     let removeCategory = document.querySelector("#remove-category");
    //     let btnClearArticleP = document.createElement("p");
    //     btnClearArticleP.innerHTML = "Supprimer";
    //     btnClearArticle.appendChild(btnClearArticleP);
    //     removeCategory.appendChild(btnClearArticle);

    //             btnClearArticle.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     localStorage.removeItem(productSaveInLocalStorage[j]);   
    //     alert("Votre article a été supprimé");
    //     window.location.href = "cart.html"
    // });

    }

    let totalPriceP = document.createElement("p");
    let totalPrice = document.querySelector("#total-price");
    totalPriceP.innerHTML = `${totalPriceInLocalStorage} €`;
    totalPrice.appendChild(totalPriceP);

    let nbTotalArticlesP = document.createElement("p");
    let nbTotalArticles = document.querySelector("#nb-total-articles");
    nbTotalArticlesP.innerHTML = totalArticlesInLocalStorage;
    nbTotalArticles.appendChild(nbTotalArticlesP);
    
    let clearWholeCartContainer = document.querySelector("#clear-whole-cart-container");

    
    let buttonClearAll = document.createElement("button");
    buttonClearAll.classList.add("btn-all");
    let buttonClearAllP = document.createElement("p");
    buttonClearAllP.innerHTML = "Vider le panier";
    buttonClearAll.appendChild(buttonClearAllP);
    buttonClearAll.classList.add("clear-whole-cart-btn");
    clearWholeCartContainer.appendChild(buttonClearAll);
    

    buttonClearAll.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.clear();    
        alert("Le panier à été vidé");
        window.location.href = "cart.html"
    });
    
    let formSection = document.querySelector("#form-section");
    formSection.innerHTML = `<form id="form-container" action="#">
    <label for="firstName">Prénom</label>
    <input type="text" id="firstName" name="firstName" required>

    <label for="lastName">Nom</label>
    <input type="text" id="lastName" name="lastName" required>

    <label for="adress">Adresse</label>
    <input type="text" id="adress" name="adress" required>

    <label for="city">Ville</label>
    <input type="text" id="city" name="city" required>

    <label for="email">Email</label>
    <input type="text" id="email" name="email" required>

    <button id="send-form" type="submit" name="send-form">
      Payer
    </button>
  </form>`
    

} 



