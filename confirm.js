//RECUPERATION DES DONNEES DE L URL
// let paramsUrl = new URL(window.location).searchParams;

// let orderId = paramsUrl.get("orderId");

//RECUPERATION DES DONNEES CONTACT
let contactFirstName = localStorage.getItem("contactFirstName");
let contactLastName = localStorage.getItem("contactLastName");
let contactEmail = localStorage.getItem("contactEmail");
let orderId = localStorage.getItem("orderId");
// RECUPERATION DU PRIX TOTAL
let totalCost = JSON.parse(localStorage.getItem("total-cost"));
console.log(totalCost);
// AFFICHAGE HTML
confirmSection = document.querySelector("#confirm-section");

function display (){
    confirmSection.innerHTML = `
    
        <p>
        Merci ${contactFirstName} ${contactLastName} 
        </p>
        <p>Nous avons bien reçu votre commande N° ${orderId} d'un montant de : ${totalCost} €</br>
        </p>
       <p> Un email vous sera envoyer à l'adresse : ${contactEmail} </p> 
    `
};

display();
console.log(display);
