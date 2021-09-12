let productSaveInLocalStorage = JSON.parse(localStorage.getItem("product"));
let totalPriceInLocalStorage = parseFloat(JSON.parse(localStorage.getItem("total-cost")));
let totalArticlesInLocalStorage = Number(JSON.parse(localStorage.getItem("nbArticlesTotal")));

let nbInCart = document.querySelector("#nb-in-cart");
nbInCart.innerHTML = totalArticlesInLocalStorage;

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
        
        let imgElement = document.createElement("img");
        let productImg = document.querySelector("#img-category");
        imgElement.src = productSaveInLocalStorage[j].imgProduct;
        productImg.appendChild(imgElement);

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
    formSection.innerHTML = `<div class="contact-box-form">       
        <form>
            <fieldset class="contact-title-form">
                <legend>Panier</legend>
            
                
                <h3 id="total-price">Montant total: ${totalPriceInLocalStorage} €</h3>
                
                
            <div class="contact-container-name">
                
                <div class="contact-firstname">
                    <label class="contact-label-name"  for="prenom" name="prenom" id="prenom">Entrez votre prénom</label>
                    <input class="contact-name-input" type="text" name="lastName" id="prenom" placeholder="Prénom" required maxlength="50" pattern="[a-zA-Z\-]{2,50}">
                </div>

                <div class="contact-lastname">
                    <label class="contact-label-name" for="nom" name="nom" id="nom">Entrez votre nom</label>
                    <input class="contact-name-input" type="text" name="firstName" id="nom" placeholder="Nom" required maxlength="50" pattern="[a-zA-Z\-\s]{2,50}">
                </div>
                
            </div>

            <label for="email" class="contact-label-email">Entrez votre adresse Email</label>
            <input type="email" name="email" id="email" class="contact-email-inp" required maxlength="50" pattern="/^([a-zA-Z0-9\._-]+)@([\a-zA-Z0-9]+)\.([a-zA-Z\.]{2,8})$/" placeholder="Email">


            <label for="contact-adress" class="contact-label-adress">Adresse</label>
            <input type="text" id="contact-adress" name="adress" class="contact-adress-inp" placeholder="12 rue des developpeurs"  pattern="^([0-9]{1,5})(\s)([a-zA-Z\.\s]*)$" required>
        
            <label for="contact-city" class="contact-label-city">Ville</label>
            <input type="text" id="contact-city" name="city" class="contact-city-inp" placeholder="Paris" required pattern="[a-zA-Z]{2,20}" >
            
            <label for="contact-postal-code" class="contact-label-postal-code">Code Postal</label>
            <input type="number" id="contact-postal-code" name="postal-code" class="contact-postal-code-inp" placeholder="75015" max="99999" required pattern="[0-9]{5}">

            
            <button>Valider</button>
        </fieldset>
        </form>
    </div>`;
    

} 

// Selection du boutton du formulaire pour envoyer au backend ultérieurement 
// puis  enregistrement des données du formulaire en localStorage

/*
let btnSendForm = document.querySelector("#btn-send-form");

btnSendForm.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("firstName", document.querySelector("#firstName").value);
    localStorage.setItem("lastName", document.querySelector("#lastName").value);
    localStorage.setItem("adress", document.querySelector("#adress").value);
    localStorage.setItem("city", document.querySelector("#city").value);
    localStorage.setItem("email", document.querySelector("#email").value);

    const dataFormAddToLocalStorage = {
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        adress: localStorage.getItem("adress"),
        city: localStorage.getItem("city"),
        email: localStorage.getItem("email"),

    }

    const dataFormToSend = {
        productSaveInLocalStorage,
        dataFormAddToLocalStorage,
    }

});

*/ 




