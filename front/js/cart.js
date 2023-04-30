
let productsLoadedInLocalStorage = JSON.parse(localStorage.getItem("cartProduct"));
console.log(productsLoadedInLocalStorage);

console.log("Hello")
console.log(JSON.parse(localStorage.getItem("cartProduct")))
console.log(productsLoadedInLocalStorage[0].quantity)
console.log(productsLoadedInLocalStorage[0].price)


// creation article
function createArticle(product) {
    const container = document.getElementById("cart__items")
    const article = document.createElement("article")
    container.appendChild(article)
    article.setAttribute("class", "cart__item")
    article.setAttribute("data-id", product.productId)
    article.setAttribute("data-color", product.color)
    return article
}

//creation div class = cart__item__img
function createDivImg(article) {
    const divImg = document.createElement("div")
    article.appendChild(divImg)
    divImg.setAttribute("class", "cart__item__img")
    return divImg
}

// creation Img
function createImg(divImg, product) {
    const img = document.createElement("img")
    divImg.appendChild(img)
    img.setAttribute("src", product.imageUrl)
    img.setAttribute("alt", product.altText)
    console.log(product)
}

//creation div class = cart__item__content
function createDivContent(article) {
    const divContent = document.createElement("div")
    article.appendChild(divContent)
    divContent.setAttribute("class", "cart__item__content")
    return divContent
}

//creation div class = cart__item__content__description
function createDivContentDescription(divContent) {
    const divContentDescription = document.createElement("div")
    divContent.appendChild(divContentDescription)
    divContentDescription.setAttribute("class", "cart__item__content")
    return divContentDescription
}


//creation titre h2
function createH2(divContentDescription, product) {
    const h2 = document.createElement("h2")
    const h2Content = document.createTextNode(product.name)
    h2.appendChild(h2Content)
    divContentDescription.appendChild(h2)
}


//creation paragraphe p couleur
function createPColor(divContentDescription, product) {
    const pColor = document.createElement("p")
    const pColorContent = document.createTextNode(product.color)
    pColor.appendChild(pColorContent)
    divContentDescription.appendChild(pColor)
}

//creation paragraphe p prix
function createPPrice(divContentDescription, product) {
    const pPrice = document.createElement("p")
    const pPriceContent = document.createTextNode(product.price + " €")
    pPrice.appendChild(pPriceContent)
    divContentDescription.appendChild(pPrice)
}


//creation div class = cart__item__content__settings
function createDivContentSettings(divContent) {
    const divContentSettings = document.createElement("div")
    divContent.appendChild(divContentSettings)
    divContentSettings.setAttribute("class", "cart__item__content__settings")
    return divContentSettings
}

//creation div class = cart__item__content__settings__quantity
function createDivContentSettingsQuantity(divContentSettings) {
    const divContentSettingsQuantity = document.createElement("div")
    divContentSettings.appendChild(divContentSettingsQuantity)
    divContentSettingsQuantity.setAttribute("class", "cart__item__content__settings__quantity")
    return divContentSettingsQuantity
}

//creation paragraphe p prix
function createPQuantity(divContentSettingsQuantity) {
    const pQuantity = document.createElement("p")
    const pQuantityContent = document.createTextNode("Qté : ")
    pQuantity.appendChild(pQuantityContent)
    divContentSettingsQuantity.appendChild(pQuantity)
}

//creation tab input quantity
function createInputQuantity(divContentSettingsQuantity, product) {
    const inputQuantity = document.createElement("input")
    divContentSettingsQuantity.appendChild(inputQuantity)
    inputQuantity.setAttribute("type", "number")
    inputQuantity.setAttribute("class", "itemQuantity")
    inputQuantity.setAttribute("name", "itemQuantity")
    inputQuantity.setAttribute("min", "1")
    inputQuantity.setAttribute("max", "100")
    inputQuantity.setAttribute("value", product.quantity)
}


//creation div class = cart__item__content__settings__delete
function createDivContentSettingsDelete(divContentSettings) {
    const divContentSettingsDelete = document.createElement("div")
    divContentSettings.appendChild(divContentSettingsDelete)
    divContentSettingsDelete.setAttribute("class", "cart__item__content__settings__delete")
    return divContentSettingsDelete
}

//creation p class = cart__item__content__settings__delete
function createPDelete(divContentSettingsDelete) {
    const pDelete = document.createElement("p")
    const pDeleteContent = document.createTextNode("Supprimer")
    pDelete.appendChild(pDeleteContent)
    divContentSettingsDelete.appendChild(pDelete)
    pDelete.setAttribute("class", "deleteItem")
}

function createCartElement(product) {
    const article = createArticle(product)
    const divImg = createDivImg(article)
    createImg(divImg, product)
    const divContent = createDivContent(article)
    const divContentDescription = createDivContentDescription(divContent)
    createH2(divContentDescription, product)
    createPColor(divContentDescription, product)
    createPPrice(divContentDescription, product)
    const divContentSettings = createDivContentSettings(divContent)
    const divContentSettingsQuantity = createDivContentSettingsQuantity(divContentSettings)
    createPQuantity(divContentSettingsQuantity)
    createInputQuantity(divContentSettingsQuantity, product)
    const divContentSettingsDelete = createDivContentSettingsDelete(divContentSettings)
    createPDelete(divContentSettingsDelete)
}

// calcul total quantité
let totalCartQuantity = 0
function calculTotalQuantity(product) {
    totalCartQuantity = totalCartQuantity + product.quantity
    console.log(product.quantity)
    console.log(totalCartQuantity)
    return totalCartQuantity
}

function integrateTotalQuantity(totalCartQuantity) {
    document.getElementById('totalQuantity').textContent = totalCartQuantity
    console.log(totalCartQuantity)

}

//calcul total prix
let totalCartPrice = 0
function calculTotalPrice(product) {
    totalCartPrice = totalCartPrice + (product.quantity * product.price)
    console.log(totalCartPrice)
    return totalCartPrice
}

function integrateTotalPrice(totalCartPrice) {
    document.getElementById('totalPrice').textContent = totalCartPrice
    console.log(totalCartQuantity)

}

function createCart() {
    for (let product of productsLoadedInLocalStorage) {

        // endroit intgration dans html
        createCartElement(product)

        const totalCartQuantity = calculTotalQuantity(product)
        integrateTotalQuantity(totalCartQuantity)
        

        const totalCartPrice = calculTotalPrice(product)
        integrateTotalPrice(totalCartPrice)


    }
}






createCart()


/*
// gestion du panier
// Fonction qui sauvegarde les données dans le panier
function saveCart(cartContent) {
    localStorage.setItem("cartProduct", JSON.stringify(cartContent))
  }

  //fonction qui récupère le panier
function getFromCart() {
    let cartContent = localStorage.getItem("cartProduct");
    if (cartContent == null) {
      return []
    } else {
      return JSON.parse(cartContent)
    }
  }

function removeFromCart(product) {
    let cart = getFromCart()
    cart = cart.filter(p => p.name == product.name && p.color == product.color)
    saveCart(cart)
}*/

let removeToCartButtons = document.querySelectorAll('.deleteItem')

for (let removeToCartButton of removeToCartButtons) {
const essai = removeToCartButton.closest('article > div')
//const essai = removeToCartButton.closest('data-id')

removeToCartButton.addEventListener("click", () => {


    console.log(essai)
})

}

function removeFromCart() {
    
}

   /*let addToCartButton = document.getElementById('addToCart')
  
   addToCartButton.addEventListener("click", () => {
     //const data = getData()
     let product = {
       productId: id,
       quantity: Number(document.getElementById('quantity').value),
       color: document.getElementById('colors').value,
       price: Number(document.getElementById('price').textContent),
      imageUrl: imgUrl, 
      altText: altTxt,
      name: productName
     }
     addToCart(product)*/


   // gestion du panier






  /*

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
    if ((product.color == "")) {
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
  //price: parseFloat(productCardPrice.innerHTML)
  let addToCartButton = document.getElementById('addToCart')
  
  addToCartButton.addEventListener("click", () => {
    //const data = getData()
    let product = {
      productId: id,
      quantity: Number(document.getElementById('quantity').value),
      color: document.getElementById('colors').value,
      price: Number(document.getElementById('price').textContent),
     imageUrl: imgUrl, 
     altText: altTxt,
     name: productName
    }
    addToCart(product)
  console.log (document.getElementById('price').textContent)
  })
  */