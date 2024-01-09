
// OLD 
const urlApi = "https://oniroco.onrender.com/api/cameras";

// const urlApi = "http://176.31.163.69:45500/api/cameras";



// const urlApi = "http://localhost:3000/api/cameras";
let cameraContainer = document.querySelector(".card-container");
let resultatAllProduct;


function getCameras() {
fetch(urlApi)
  .then(function(res) { 
    if (res.ok) {
      return res.json();
    }
  })

  .catch(function(err) {
    cameraContainer.innerHTML = "Nous sommes désolés une erreur c'est produite";
    cameraContainer.style.justifyContent = "center";
    cameraContainer.style.fontSize = "2.5rem";
  })
  
  .then(function(data) {



    for(let i = 0; i < data.length; i++) {
  // Create the anchor tag
          let detailLink = document.createElement("a");
          detailLink.href = "./product.html?id=" + data[i]._id;
          detailLink.classList.add("camera-card", "detail-link");
          
          // Create the card container
          let carte = document.createElement("div");
          carte.classList.add("camera-card-content");

          // Image for the card
          let imgCard = document.createElement("img");
          imgCard.src = data[i].imageUrl;

          // Container for the description
          let containerDescription = document.createElement("div");
          containerDescription.classList.add("container-description");

          // Name of the camera
          let name = document.createElement("p");
          name.innerText = data[i].name;
          name.classList.add("container-description-name");

          // Price of the camera
          let price = document.createElement("p");
          let priceInit = Number(data[i].price) / 100;
          let priceConv = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(priceInit);
          price.innerText = priceConv;
          price.classList.add("container-description-price");

          // Append all the card content to the card container
          carte.appendChild(imgCard);
          carte.appendChild(containerDescription);
          containerDescription.appendChild(name);
          containerDescription.appendChild(price);

          // Now, wrap the card content with the detail link
          detailLink.appendChild(carte);
          
          // Append the detail link (which now contains the card) to the main container
          cameraContainer.appendChild(detailLink);
      
      
      
}

let EmptyContentAfter =  document.querySelector(".card-container");
EmptyContentAfter.insertAdjacentHTML('beforeend', `
            <i class="camera-card knit-card">
             
            <i>

            <i class="camera-card knit-card">
             
            <i>

            <i class="camera-card knit-card">
             
            <i>
`);

    
  })


};



getCameras();



function createHamburgerMenu() {
  // Create hamburger icon and add it to the navigation
  const nav = document.getElementById('navigation');
  const hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');
  hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `; // Three lines for the hamburger

  nav.appendChild(hamburger);

  // Create a toggle for the responsive menu
  hamburger.addEventListener('click', function() {
    const linkContainer = document.getElementById('cart-link-container');
    linkContainer.classList.toggle('active');
  });
}

// Call the function to create the hamburger menu
createHamburgerMenu();