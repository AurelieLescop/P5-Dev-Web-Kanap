
//récupération de l'URL de la page
var currentUrl = window.location.href;
var url = new URL(currentUrl);

//récupération de l'id de l'URL
var id = url.searchParams.get("id");
console.log(id);
console.log(currentUrl);
console.log(url);


//Fabrication URL canape
const urlProduct = "http://localhost:3000/api/products/" + id
console.log(urlProduct)

//recupération données API
async function fetchArticleFromApi() {
  const res = await fetch(urlProduct)
  const data = await res.json()

  console.log(data)
  return data
}

//création image avec balise alt et src et intégration
function createImg(data) {
  const img = document.createElement("img")
  img.setAttribute("src", data.imageUrl)
  img.setAttribute("alt", data.altTxt)
  return img
}

function integrateImg(img) {
  const container = document.querySelector('.item__img')
  container.appendChild(img)
  return img
}

//ajout du titre h1 lié au canapé spécifique ds la page product.html
function addTitleContentH1(data) {
  document.querySelector('h1').textContent = data.name;
  console.log(data.name);
}

//ajout du prix dans id=price lié au canapé spécifique ds la page product.html
function addContentPrice(data) {
  document.querySelector('#price').textContent = data.price
}

//ajout de la description dans id=description lié au canapé spécifique ds la page product.html
function addContentDescription(data) {
  document.querySelector('#description').textContent = data.description
}

function createElement(data) {
  const img = createImg(data)
  integrateImg(img)
  addTitleContentH1(data)
  addContentPrice(data)
  addContentDescription(data)
}

//ajout du titre title lié au canapé spécifique ds la page product.html
function ModifyPageTitleContent(data) {
  document.querySelector('title').textContent = data.name;
}

function createColorOption(color) {
  const colorChoice = document.getElementById('colors')
  const option = document.createElement("option")
  colorChoice.appendChild(option)
  option.setAttribute("option", color)
  return option
}

function addColorContent(color, colorOption) {
  const optionContent = document.createTextNode(color)
  colorOption.appendChild(optionContent)
  console.log(optionContent)
}

//creation fonction pour afficher dynamiquement le canapé sélectionné
async function getArticle() {
  const data = await fetchArticleFromApi()
  createElement(data)
  ModifyPageTitleContent(data)

  //ajout des options de couleur
  console.log(data.colors[0])
  console.log(data.colors[1])
  console.log(data.colors[2])

  for (let color of data.colors) {
    console.log(color)
    const colorOption = createColorOption(color)
    addColorContent(color, colorOption)
  }
}

getArticle()

// gestion du panier

// Fonction qui sauvegarde les données dans le panier
function saveCart(cartContent) {
  localStorage.setItem("cartProduct", JSON.stringify(cartContent))
}

// Fonction qui récupère les données du panier
function getFromCart() {
  let cartContent = localStorage.getItem("cartProduct");

  //si le contenu du panier est nul alors il faut créer un tableau vide
  if (cartContent == null) {
    return []
  } else {
    return JSON.parse(cartContent)
  }
}

// Fonction qui ajoute des produits dans le panier
function addToCart(product) {
  let cartContent = getFromCart()
  let foundProduct = cartContent.find(p => p.id == product.id && p.color == product.color)
  console.log(product)
  // si le produit n'existe pas dans le panier, on l'ajoute au panier (on le créé)
  if ((product.color == "") /*&& (product.quantity>0 && product.quantity<=100)*/) {
    alert("Veuillez sélectionner la couleur de votre canapé")
  } else if ((product.quantity <= 0) || (product.quantity > 100)) {
    alert("Veuillez choisir une quantité comprise entre 1 et 100")
  } else if (foundProduct == undefined) {
    cartContent.push(product)
    saveCart(cartContent)
    alert("Votre canapé a bien été ajouté au panier")
    
    // si le produit existe dans le panier, on modifie sa quantité
  } else {
    if (Number(foundProduct.quantity + product.quantity) >=100) {
      alert("Vous ne pouvez pas commander plus de 100 canapés identiques")
    }
    else {
      foundProduct.quantity += product.quantity
      //foundProduct.quantity = foundProduct.quantity + product.quantity
      saveCart(cartContent)
      alert("Votre canapé a bien été ajouté au panier")
  }
  }
}

let addToCartButton = document.getElementById('addToCart')

addToCartButton.addEventListener("click", () => {
  let product = {
    productId: id,
    quantity: Number(document.getElementById('quantity').value),
    color: document.getElementById('colors').value,
    price: Number(document.getElementById('colors').value)
  }
  addToCart(product)

})