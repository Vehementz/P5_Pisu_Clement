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
    formSection.innerHTML = `<div class="contact_box_form">       
        <form>
            <fieldset class="contact_title_form">
                <legend>Panier</legend>
            

            <div class="contact_container_name">
                
                <div class="contact_firstname">
                    <label class="contact_label_name"  for="prenom" name="prenom" id="prenom">Entrez votre prénom</label>
                    <input class="contact_name_input" type="text" name="prenom" id="prenom" placeholder="Prénom" nom required maxlength="50">
                </div>

                <div class="contact_lastname">
                    <label class="contact_label_name" for="nom" name="nom" id="nom">Entrez votre nom</label>
                    <input class="contact_name_input" type="text" name="nom" id="nom" placeholder="Nom" required maxlength="50">
                </div>
                
            </div>

            <label for="adress">Adresse</label>
            <input type="text" id="adress" name="adress" required>

            <label for="city">Ville</label>
            <input type="text" id="city" name="city" required>
            
            <label for="postal-code">Code Postal</label>
            <input type="text" id="postal-code" name="postal-code" required>

            <label for="email" class="contact_label_email">Entrez votre adresse Email</label>
            <input type="email" name="email" id="email" class="contact_email_inp" required maxlength="50" placeholder="Entrez votre Email">

            <button>Envoyez</button>
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




