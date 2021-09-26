//Récupération des données de contact, de l'id de la commande et du prix


let contactFirstName = localStorage.getItem("contactFirstName");
let contactLastName = localStorage.getItem("contactLastName");
let contactEmail = localStorage.getItem("contactEmail");
let orderId = localStorage.getItem("orderId");
let totalCost = JSON.parse(localStorage.getItem("total-cost"));
console.log(totalCost);

// Affichage d'un message remerciant le client
// avec un récapitulatif des différentes informations de la commande
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
