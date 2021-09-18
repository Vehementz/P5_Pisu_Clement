let productSaveInLocalStorage = JSON.parse(localStorage.getItem("product"));
let totalPriceInLocalStorage = parseFloat(JSON.parse(localStorage.getItem("total-cost")));
let totalArticlesInLocalStorage = Number(JSON.parse(localStorage.getItem("nbArticlesTotal")));

let nbInCart = document.querySelector("#nb-in-cart");
nbInCart.innerHTML = totalArticlesInLocalStorage;

let cartContainer = document.querySelector("#cart-container");
let productsObj = [];
    

if(productSaveInLocalStorage === null) {
  cartContainer.innerHTML= "Panier vide";
  cartContainer.style.marginLeft = "43%";
  cartContainer.style.fontSize = "5rem";
  cartContainer.style.marginTop = "3rem";
  cartContainer.style.fontFamily = "Style Script, Arial";
  cartContainer.style.whiteSpace = "nowrap";
}   
else {
  
  //let productCartStructure = [];
  for (j = 0; j < productSaveInLocalStorage.length; j++) {
    productSaveInLocalStorage[j] 
    
    let cartContainer = document.querySelector("#cart-container");

    let bodyWholeCard = document.createElement("div");
    bodyWholeCard.classList.add("body-whole-card");
    cartContainer.appendChild(bodyWholeCard);

    let imageSide = document.createElement("div");
    imageSide.classList.add("image-side");
    bodyWholeCard.appendChild(imageSide);

    let imgElement = document.createElement("img");
    imgElement.classList.add("cart-img-element");
    imgElement.src = productSaveInLocalStorage[j].imgProduct;
    imageSide.appendChild(imgElement);

    let cardBodyRight = document.createElement("div");
    cardBodyRight.classList.add("card-body-right");
    bodyWholeCard.appendChild(cardBodyRight);


    let nameElement = document.createElement("p");
    
    nameElement.innerHTML = productSaveInLocalStorage[j].name;
    nameElement.classList.add("cart-card-title");
    cardBodyRight.appendChild(nameElement);

    let lensElement = document.createElement("p");
    lensElement.innerHTML = `Lentille: ${productSaveInLocalStorage[j].options}`;
    cardBodyRight.appendChild(lensElement);

    let priceElement = document.createElement("p");
    priceElement.innerHTML = `Prix : ${(productSaveInLocalStorage[j].price) *(productSaveInLocalStorage[j].quantity)} €`;
    cardBodyRight.appendChild(priceElement);

    let quantityElement = document.createElement("p");
    quantityElement.innerHTML = `Quantité : ${productSaveInLocalStorage[j].quantity}`;
    cardBodyRight.appendChild(quantityElement);

  }

  let nbTotalArticlesP = document.createElement("p");
  nbTotalArticlesP.innerHTML = ` Nombre total d'articles: <span>${totalArticlesInLocalStorage}</span>`;
  cartContainer.appendChild(nbTotalArticlesP);
  cartContainer.classList.add("cart-nb-total-articles")  
  //let clearWholeCartContainer = document.querySelector("#clear-whole-cart-container");
  let nbAndRemove = document.createElement("div");
  nbAndRemove.classList.add("cart-nb-and-remove");
  cartContainer.appendChild(nbAndRemove);

  let buttonClearAll = document.createElement("button");
  buttonClearAll.classList.add("btn-all");
  buttonClearAll.innerHTML = "Vider le panier";
  buttonClearAll.classList.add("clear-whole-cart-btn");

  nbAndRemove.appendChild(buttonClearAll);
  nbAndRemove.appendChild(nbTotalArticlesP);
  buttonClearAll.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem('nbArticlesTotal');    
      localStorage.removeItem('product');
      localStorage.removeItem('total-cost');
      document.location.reload();
  });
  
  let formSection = document.querySelector("#form-section");
  formSection.innerHTML = getHtml(totalPriceInLocalStorage);
} 

// Selection du boutton du formulaire pour envoyer au backend ultérieurement 
// puis  enregistrement des données du formulaire en localStorage

let btnSendForm = document.querySelector("#btn-send-form");
let cartForm = document.querySelector("#cart-form");

cartForm.addEventListener('submit', function (e) {
  e.preventDefault();
    let contact = {
      firstName: document.querySelector("#firstName").value,
      lastName:document.querySelector("#lastName").value,
      address: document.querySelector("#contact-adress").value,
      city: document.querySelector("#contact-city").value,
      email: document.querySelector("#email").value
    }        
    
    let products = [];
    // si le panier existe et il est pas vide
    if(productSaveInLocalStorage && productSaveInLocalStorage.length > 0) {
      for (p = 0; p < productSaveInLocalStorage.length; p++) {
        products.push(productSaveInLocalStorage[p].productId);
      }
    }
   
    console.log(products);
    console.log(contact);
    fetch("http://localhost:3000/api/cameras/order", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            contact: contact,
            products: products
        })
    })
    .then(response => response.json())
    .then((resultat) => {
        console.log(resultat);
        localStorage.setItem('contact', getContactFullName(resultat.contact));
        localStorage.setItem('orderId', resultat.orderId);
        // TODO : oublie pas de vider le panier ici
        //window.location.replace("./confirmation.html");
    }).catch(function (error) {
        console.log(error);
    });
});

function getHtml(totalPrice) {
  return (`<div class="contact-box-form">       
        <form id="cart-form" action="post" type="submit">
            <fieldset class="contact-title-form">
                <legend>Panier</legend>
            
                
                <h3 id="total-price">Montant total: ${totalPrice} €</h3>
                
                
            <div class="contact-container-name">
                
                <div class="contact-firstname">
                    <label class="contact-label-name"  for="prenom" name="prenom" id="prenom">Entrez votre prénom</label>
                    <input class="contact-name-input" type="text" name="lastName" id="lastName" placeholder="Prénom" required maxlength="50" pattern="[a-zA-Z\-]{2,50}">
                </div>

                <div class="contact-lastname">
                    <label class="contact-label-name" for="nom" name="nom" id="nom">Entrez votre nom</label>
                    <input class="contact-name-input" type="text" name="firstName" id="firstName" placeholder="Nom" required maxlength="50" pattern="[a-zA-Z\-\s]{2,50}">
                </div>
                
            </div>

            <label for="email" class="contact-label-email">Entrez votre adresse Email</label>
            <input type="email" name="email" id="email" class="contact-email-inp" required maxlength="50" pattern="^([a-zA-Z0-9_-]+)@{1}([a-z]{2,10})(\.{1})[a-z]{2,8}$" placeholder="Email">


            <label for="contact-adress" class="contact-label-adress">Adresse</label>
            <input type="text" id="contact-adress" name="adress" class="contact-adress-inp" placeholder="12 rue des developpeurs" required>
        
            <label for="contact-city" class="contact-label-city">Ville</label>
            <input type="text" id="contact-city" name="city" class="contact-city-inp" placeholder="Paris" required pattern="[a-zA-Z]{2,20}" >
            
            <label for="contact-postal-code" class="contact-label-postal-code">Code Postal</label>
            <input type="number" id="contact-postal-code" name="postal-code" class="contact-postal-code-inp" placeholder="75015" max="99999" required pattern="[0-9]{5}">

            
            <button id="btn-send-form">Valider</button>
        </fieldset>
        </form>
    </div>`);
}

function getContactFullName(contact) {
  return contact.firstName + ' ' + contact.lastName;
}

  



    // pattern="[a-zA-Z0-9\s,.'-]{3,100}"
