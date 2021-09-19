const totalArticlesInLocalStorage = Number(JSON.parse(localStorage.getItem("nbArticlesTotal")));
nbInCart = document.querySelector("#nb-in-cart");
nbInCart.innerHTML = totalArticlesInLocalStorage;