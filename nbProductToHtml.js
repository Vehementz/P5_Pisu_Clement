// permet de juste indiquer le nombre de produits dans le panier
// affiché dans la barre de navigation.

const totalArticlesInLocalStorage = Number(JSON.parse(localStorage.getItem("nbArticlesTotal")));
nbInCart = document.querySelector("#nb-in-cart");
nbInCart.innerHTML = totalArticlesInLocalStorage;