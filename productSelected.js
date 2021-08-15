$(document).ready(function() {

  let queryString = window.location.search;
  let urlSearchParams = new URLSearchParams(queryString);
  $.get(`http://localhost:3000/api/cameras/${urlSearchParams.get("id")}`,function(response) { 
      
      let titre = document.querySelector("#product-titre");
      titre.innerHTML = response.name;
      // $('#titre').html(response.name);
      let imgTag = document.querySelector("#product-card-img");
      imgTag.src = response.imageUrl;
      imgTag.alt = response.name;

      let productPrice = document.querySelector("#product-price");
      
      let priceInit = Number(response.price) / 100;
      priceConv = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(priceInit);
      productPrice.innerText = priceConv;

      

      let productContainer = document.querySelector('.product-container');
      let cardContainer = document.querySelector('#product-card-container');
      let productDescription = document.querySelector("#product-description");
      productDescription.innerHTML = response.description;
     
      
      

      } );

    });




// const queryStringUrlId = window.location.search;
// console.log(queryStringUrlId);

// // let idRaw = queryStringUrlId.slice(1);
// // console.log(idRaw);


// let urlSearchParams = new URLSearchParams(queryStringUrlId);

// console.log(urlSearchParams);

// const id = urlSearchParams.get("id");
// console.log(id);


// // let url = new URL(url_str);
// let search_params = urlSearchParams.searchParams; 

// maVariableQuiDétientId = search_params.get('id')
// fetch( "localhost:3000/api/cameras/"  + maVariableQuiDétientId )
