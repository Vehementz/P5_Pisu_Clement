//RECUPERATION DES DONNEES DE L URL
let paramsUrl = new URL(window.location).searchParams;

let orderId = paramsUrl.get("orderId");

//RECUPERATION DES DONNEES CONTACT
let contact = JSON.parse(localStorage.getItem("contact"));

// RECUPERATION DU PRIX TOTAL
let totalCost = JSON.parse(localStorage.getItem("total-cost"));

// AFFICHAGE HTML
confirmSection = document.querySelector("#confirm-section");

function display (){
    confirmSection.innerHTML = `
        <p>
        Merci  ${contact.firstName } ${contact.lastName} 
        </p>
        <hr>
        <p>Nous avons bien reçu votre commande N° ${orderId} </br>
        D'un montant de :${prixTotal}  </br>
        </p>
       <p> Un email vous sera envoyer à l'adresse : ${contact.email} </p> 
    `
};

display();