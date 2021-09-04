let productSaveInLocalStorage = JSON.parse(localStorage.getItem("product"));
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

        let cardContainer = document.createElement("div");
        let card = document.createElement("div");
        let cardImg = document.createElement("img");
        let cardDescription = document.createElement("div");
        let productName = document.createElement("p");
        let quantity = document.createElement("p");

    }

    
} 
