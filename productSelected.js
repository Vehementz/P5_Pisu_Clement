$(document).ready(function() {

  let queryString = window.location.search;
  let urlSearchParams = new URLSearchParams(queryString);
  $.get(`http://localhost:3000/api/cameras/${urlSearchParams.get("id")}`,function(response) { 
      
      $('#titre').html(response.name);
      $('#img-title').html(response.description);
      let imgTag = `<img src="${response.imgUrl}" alt="${response.name}" >`;
      $("#img-container").html(imgTag);
  
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
