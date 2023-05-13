/** récupération de l'URL de la page dans la barre d'adresse
 */
const currentUrl = window.location.href;
const url = new URL(currentUrl);

/** récupération de l'id depuis l'URL
 */
let id = url.searchParams.get("id");
console.log(id);
console.log(currentUrl);
console.log(url);

/** creation url permettant d'interroger l'API et obtenir les informations liées à ce canapé précisément (grâce à son identifiant)
 */
const urlProduct = "http://localhost:3000/api/products/" + id;
console.log(urlProduct);

/** recupération données API
 * utilisation de l'URL créée précédemment permettant de récupérer les données liées à 1 unique produit/canapé
 * @returns data qui est l'objet contenant l'ensemble des données liées au produit/canapé que l'on souhaite afficher 
 */
async function fetchArticleFromApi() {
  const res = await fetch(urlProduct);
  const data = await res.json();
  console.log(data);
  return data;
}

/** création de l'élément image et ajout de ses attributs
 * @param {*} data objet contenant l'ensemble des données liées au produit/canapé que l'on souhaite afficher
 * permet de récupérer le texte alternatif et la photo du canapé  
 * @returns l'élément img
 */
function createImg(data) {
  const img = document.createElement("img");
  img.setAttribute("src", data.imageUrl);
  img.setAttribute("alt", data.altTxt);
  return img;
}

/** intégration de l'élément image dans la page html
 * @param {*} img précédemment créé
 * @returns img qui est intégré dans la page html
 */
function integrateImg(img) {
  const container = document.querySelector('.item__img');
  container.appendChild(img);
  return img;
}

/** ajout du titre h1 spécifique au canapé sélectionné dans la page product.html
 * @param {*} data objet contenant l'ensemble des données liées au produit que l'on souhaite afficher
 * permet de récupérer le nom du canapé 
 */
function addTitleContentH1(data) {
  document.querySelector('h1').textContent = data.name;
  console.log(data.name);
}

/** ajout du prix dans la page product.html au niveau de l'élément contenant id=price
 * @param {*} data objet contenant l'ensemble des données liées au produit que l'on souhaite afficher
 * permet de récupérer le prix du canapé 
 */
function addContentPrice(data) {
  document.getElementById('price').textContent = data.price;
}

/** ajout de la description dans la page product.html au niveau de l'élément contenant id=description
 * @param {*} data objet contenant l'ensemble des données liées au produit que l'on souhaite afficher
 * permet de récupérer la description du canapé 
 */
function addContentDescription(data) {
  document.getElementById('description').textContent = data.description;
}

/** affichage des éléments image, titre, prix et description du canapé
 * @param {*} data objet contenant l'ensemble des données liées au produit que l'on souhaite afficher
 */
function displayElement(data) {
  const img = createImg(data);
  integrateImg(img);
  addTitleContentH1(data);
  addContentPrice(data);
  addContentDescription(data);
}

/** modification du titre de la page (dans l'onglet) en adéquation avec le nom du canapé
 * @param {*} data objet contenant l'ensemble des données liées au produit que l'on souhaite afficher
 * permet de récupérer le nom du canapé 
 */
function modifyPageTitleContent(data) {
  document.querySelector('title').textContent = data.name;
}

/** création des options de couleur possibles
 * @param {*} color 1 des couleurs possibles pour 1 canapé donné
 * @returns l'élément option
 */
function createColorOption(color) {
  const colorChoice = document.getElementById('colors');
  const option = document.createElement("option");
  colorChoice.appendChild(option);
  option.setAttribute("option", color);
  return option;
}

/** affichage des options de couleur dans le menu déroulant
 * @param {*} color 
 * @param {*} colorOption 
 */
function addColorContent(color, colorOption) {
  const optionContent = document.createTextNode(color);
  colorOption.appendChild(optionContent);
  console.log(optionContent);
}


// ------------ GESTION DU PANIER-------------------------------

// Fonction qui sauvegarde les données dans le panier
function saveCart(cartContent) {
  localStorage.setItem("cartProduct", JSON.stringify(cartContent));
}

/** Récupère les données enregistrées dans le local storage et renvoit un tableau de produits
 * @returns un tableau des produits du local storage (tableau vide si le local storage est vide)
 */
function getFromCart() {
  let cartContent = localStorage.getItem("cartProduct");

  //si le contenu du panier est nul alors il faut créer un tableau vide
  if (cartContent == null) {
    return [];
  } else {
    return JSON.parse(cartContent);
  }
}

/** ajout des produits au panier selon différentes conditions
 * @param {*} product correspondant au canapé ajouté (identifiant, couleur) 
 */
function addToCart(product) {
  // récupération du panier
  let cartContent = getFromCart();
  //voir si un produit similaire existe dans le panier
  let foundProduct = cartContent.find(p => p.id == product.id && p.color == product.color);
  console.log(product);
  // on vérifie la sélection d'une couleur et d'une quantité comprise entre 1 et 100
  if ((product.color == "")) {
    alert("Veuillez sélectionner la couleur de votre canapé");
  } else if ((product.quantity <= 0) || (product.quantity > 100)) {
    alert("Veuillez choisir une quantité comprise entre 1 et 100");
    // si le produit n'existe pas dans le panier, on l'ajoute au panier (on le créé)
  } else if (foundProduct == undefined) {
    cartContent.push(product);
    saveCart(cartContent);
    if (window.confirm("Votre canapé a bien été ajouté au panier. Voulez-vous voir votre panier?")) {
      document.location.href = "./cart.html";
    }

    // si le produit existe dans le panier mais que l'ajout de cette quantité a pour conséquence une quantité totale > 100, on envoit une alerte
  } else {
    if (Number(foundProduct.quantity + product.quantity) >= 100) {
      alert("Vous ne pouvez pas commander plus de 100 canapés identiques");
    }
    // si le produit existe dans le panier et que la quantité ajoutée ne fait pas dépasser 100 la quantité totale, on modifie sa quantité
    else {
      foundProduct.quantity += product.quantity;
      saveCart(cartContent);
      if (window.confirm("Votre canapé a bien été ajouté au panier. Voulez-vous voir votre panier?")) {
        document.location.href = "./cart.html";
      }
    }
  }
}


/** affichage dynamique du canapé sélectionné dans la page html
 * récupération des données lié au canapé
 * affichage des éléments de ce même canapé
 * modification du titre de la page (dans l'onglet) en adéquation avec le nom du canapé
 * envoi des données liées à l'article sélectionné dans le local storage au clic sur "ajouter au panier"
 */
async function getArticle() {
  const data = await fetchArticleFromApi();
  displayElement(data);
  modifyPageTitleContent(data);

  //ajout des options de couleur
  console.log(data.colors[0]);

  //pour chaque couleur possible du canapé
  for (let color of data.colors) {
    console.log(color);
    const colorOption = createColorOption(color);
    addColorContent(color, colorOption);
  }

  //ajout d'un événement au bouton "ajouter au panier"
  let addToCartButton = document.getElementById('addToCart')
  addToCartButton.addEventListener("click", () => {
    console.log(data);

    //au clic, données du produit qui seront envoyées dans le local storage
    let product = {
      productId: data._id,
      color: document.getElementById('colors').value,
      quantity: Number(document.getElementById('quantity').value),
    }
    addToCart(product);
    console.log(document.getElementById('price').textContent);
  })
}

getArticle();