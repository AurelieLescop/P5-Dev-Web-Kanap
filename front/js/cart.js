


let productId, productColor
// creation article
function createArticle(product) {
    const container = document.getElementById("cart__items")
    const article = document.createElement("article")
    container.appendChild(article)
    article.setAttribute("class", "cart__item")
    article.setAttribute("data-id", product.productId)
    article.setAttribute("data-color", product.color)
    productId = product.productId
    productColor = product.color

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
    inputQuantity.setAttribute("data-id", product.productId)
    inputQuantity.setAttribute("data-color", product.color)
}


//creation div class = cart__item__content__settings__delete
function createDivContentSettingsDelete(divContentSettings) {
    const divContentSettingsDelete = document.createElement("div")
    divContentSettings.appendChild(divContentSettingsDelete)
    divContentSettingsDelete.setAttribute("class", "cart__item__content__settings__delete")
    return divContentSettingsDelete
}

//creation p class = cart__item__content__settings__delete
function createPDelete(divContentSettingsDelete, product) {
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
    createPDelete(divContentSettingsDelete, product)
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

function displayCart() {
    const container = document.getElementById("cart__items")

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let productsLoadedInLocalStorage = JSON.parse(localStorage.getItem("cartProduct"));

    let totalQty = 0;
    let totalPrice = 0;
    for (let product of productsLoadedInLocalStorage) {

        // endroit intgration dans html
        createCartElement(product)

        // product.quantity
        // product.price
        totalQty = totalQty + Number(product.quantity);
        totalPrice = totalPrice + (Number(product.quantity) * Number(product.price));


        // // Mise à jour compteur
        // const totalCartQuantity = calculTotalQuantity(product)
        // // integrateTotalQuantity(totalCartQuantity)


        // const totalCartPrice = calculTotalPrice(product)
        // // integrateTotalPrice(totalCartPrice)
    }
    integrateTotalQuantity(totalQty)
    integrateTotalPrice(totalPrice)
    registerEvent()
}

displayCart()



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

function removeFromCart(id, color) {
    //debugger;
    let cart = getFromCart()
    cart = cart.filter(p => !(p.productId === id && p.color === color))
    //cart = cart.filter(p => p.id !== product.id || p.color !== product.color)
    console.log("affiche cart", cart)
    saveCart(cart)
}



function manageDeleteEvent(event) {
    {
        //console.log(essai)
        //console.log(productId)
        console.log(event);
        console.log(event.target);
        console.log(event.target.closest("article").dataset.color);
        console.log(event.target.closest("article").dataset.id);

        /*let product = {
            id: event.target.dataset.id,
            color: event.target.dataset.color,
        }*/
        // debugger;
        removeFromCart(event.target.closest("article").dataset.id, event.target.closest("article").dataset.color)
        displayCart()
    }
}

function registerEvent() {
    const removeToCartButtons = document.querySelectorAll('.deleteItem')
    for (let removeToCartButton of removeToCartButtons) {
        //const essai = removeToCartButton.closest('article > div')
        //const essai = removeToCartButton.closest('data-id')

        removeToCartButton.addEventListener("click", manageDeleteEvent)
    }

    let containerDisplayCart = document.getElementById('cart__items')
    let modifyQuantityButtons = containerDisplayCart.querySelectorAll('input')

    for (let modifyQuantityButton of modifyQuantityButtons) {
        modifyQuantityButton.addEventListener("change", manageQuantityChange)
    }

}

function modifyQuantity(newQuantity, id, color) {
    const cartArray = getFromCart()
    //cartArray[0].quantity
    //si index non trouvé, il mettra -1
    let index = cartArray.findIndex(p => p.productId === id && p.color === color)
    if (index > -1) {
        cartArray[index].quantity = newQuantity
        console.log("nouvelle quantité", newQuantity)

    }
    return cartArray
}

function manageQuantityChange(event, id, color) {
    console.log(event);
    console.log(event.target.value)


    if ((Number(event.target.value) <= 0) || (Number(event.target.value) > 100)) {
        alert("Veuillez choisir une quantité comprise entre 1 et 100")
        const cartArray = getFromCart()
        let index = cartArray.findIndex(p => p.productId === id && p.color === color)
        if (index > -1) {
            event.target.value = cartArray[index].quantity
            console.log("ancienne quantité", evnt.target.value)
        }
        saveCart(cartArray)
        displayCart()
        /* getFromCart()
         event.target.value = à reprendre*/

    }
    else {
        const cartArray = modifyQuantity(Number(event.target.value), event.target.dataset.id, event.target.dataset.color)
        saveCart(cartArray)
        displayCart()
    }

}

//Modification quantité


// Formulaire

// vérification des champs saisis

/*function inputIsInvalid() {
    const form = document.querySelector(".cart__order__form")
    const inputs = form.querySelectorAll("input")

//debugger
    for (let input of inputs) {

        let paragraphes = form.querySelectorAll("p")
        for (let paragraphe of paragraphes) {
            if (input.textContent == "") {
                paragraphe.textContent = "Veuillez compléter l'ensemble des champs"
            }
       
        console.log(input)
        console.log(input.textContent)
        console.log(form)
        console.log(form.querySelector("input").textContent)
        console.log(form.querySelector("p"))
        console.log(form.querySelectorAll("p"))
        console.log(input.textContent)
        console.log(paragraphe.textContent)
        }
    }
}*/

function firstNameIsInvalid(regex) {
    const firstName = document.querySelector("#firstName").value
    //const regex = /^[A-Z][A-Za-z\é\è\ê\-]+$/
    let errorMessageFirstName = document.getElementById("firstNameErrorMsg")
    if ((firstName === "") || (!regex.test(firstName))) {

        errorMessageFirstName.textContent = "Veuillez remplir le champ avec un prénom valide (sans chiffre ni ponctuation autre que -)"
        //   return true
    }

    else {
        errorMessageFirstName.textContent = ""
        //  return false
    }
}



function lastNameIsInvalid(regex) {
    const lastName = document.querySelector("#lastName").value
    //const regex = /^[A-Z][A-Za-z\é\è\ê\-]+$/
    let errorMessageLastName = document.getElementById("lastNameErrorMsg")
    if ((lastName === "") || (!regex.test(lastName))) {
        errorMessageLastName.textContent = "Veuillez remplir le champ avec un nom de famille valide (sans chiffre ni ponctuation autre que -)"
        //  return true
    }
    else {
        errorMessageLastName.textContent = ""
        //return false
    }
}

function addressIsInvalid() {
    const address = document.querySelector("#address").value
    let addressErrorMsg = document.getElementById("addressErrorMsg")
    if (address === "") {
        addressErrorMsg.textContent = "Veuillez remplir le champ avec un nom de ville valide (sans chiffre ni ponctuation autre que -)"
        //    return true
    }
    else {
        addressErrorMsg.textContent = ""
        //    return false

    }
}

function citysIsInvalid(regex) {
    const city = document.querySelector("#city").value
    let cityErrorMsg = document.getElementById("cityErrorMsg")
    //const regex = /^[A-Z][A-Za-z\é\è\ê\-]+$/
    if ((city === "") || (!regex.test(city))) {
        cityErrorMsg.textContent = "Veuillez remplir le champ avec un nom de ville valide"
        //   return true
    }
    else {
        cityErrorMsg.textContent = ""
        // return false

    }
}


function emailIsInvalid() {
    const email = document.querySelector("#email").value
    // const regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/
    //const regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-][.][a-zA-Z]{2,3}$/
    const regex = /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/
    let emailErrorMsg = document.getElementById("emailErrorMsg")
    if ((email === "") || (!regex.test(email))) {
        emailErrorMsg.textContent = "Veuillez remplir le champ avec une adresse email valide"
        //   return true
    }
    else {
        emailErrorMsg.textContent = ""
        //     return false
    }

}

function checkInputIsValid() {
    const regex = /^[A-Z][A-Za-z\é\è\ê\-]+$/
    !firstNameIsInvalid(regex)
        && !lastNameIsInvalid(regex)
        && !addressIsInvalid()
        && !citysIsInvalid(regex)
        && !emailIsInvalid()
}


let validateOrderButton = document.getElementById('order')

validateOrderButton.addEventListener("click", (event) => {
    const cartArray = getFromCart()
    event.preventDefault()
    if (cartArray.length === 0) {
        alert("Votre panier est vide, commande impossible")
        return
    }
    // if (checkInputIsInvalid() === true) 
    else if (checkInputIsValid()) {
        postForm()
    }
    /*else {
        alert("Une erreur est survenue")
    }*/
})

function postForm() {
    let order = {
        contact: {
            firstName: document.querySelector("#firstName").value,
            lastName: document.querySelector("#lastName").value,
            address: document.querySelector("#address").value,
            city: document.querySelector("#city").value,
            email: document.querySelector("#email").value,
        },
        products: getIdsFromLocalStorage(),
    }
    fetch("http://localhost:3000/api/products/order", {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            localStorage.clear();
            window.location.href = `confirmation.html?order=${response.orderId}`;
        })
        .catch((error) => {
            console.log(error);
        });
}




/*function firstNameIsInvalid(regex) {
    const firstName = document.querySelector("#firstName").value
    //const regex = /^[A-Z][A-Za-z\é\è\ê\-]+$/
    let errorMessageFirstName = document.getElementById("firstNameErrorMsg")
    if ((firstName === "") || (!regex.test(firstName))) {

        errorMessageFirstName.textContent = "Veuillez remplir le champ avec un prénom valide (sans chiffre ni ponctuation autre que -)"
        //   return true
    }

    else {
        errorMessageFirstName.textContent = ""
        //  return false
    }
}



function lastNameIsInvalid(regex) {
    const lastName = document.querySelector("#lastName").value
    //const regex = /^[A-Z][A-Za-z\é\è\ê\-]+$/
    let errorMessageLastName = document.getElementById("lastNameErrorMsg")
    if ((lastName === "") || (!regex.test(lastName))) {
        errorMessageLastName.textContent = "Veuillez remplir le champ avec un nom de famille valide (sans chiffre ni ponctuation autre que -)"
        //  return true
    }
    else {
        errorMessageLastName.textContent = ""
        //return false
    }
}

function addressIsInvalid() {
    const address = document.querySelector("#address").value
    let addressErrorMsg = document.getElementById("addressErrorMsg")
    if (address === "") {
        addressErrorMsg.textContent = "Veuillez remplir le champ avec un nom de ville valide (sans chiffre ni ponctuation autre que -)"
        //    return true
    }
    else {
        addressErrorMsg.textContent = ""
        //    return false

    }
}

function citysIsInvalid(regex) {
    const city = document.querySelector("#city").value
    let cityErrorMsg = document.getElementById("cityErrorMsg")
    //const regex = /^[A-Z][A-Za-z\é\è\ê\-]+$/
    if ((city === "") || (!regex.test(city))) {
        cityErrorMsg.textContent = "Veuillez remplir le champ avec un nom de ville valide"
        //   return true
    }
    else {
        cityErrorMsg.textContent = ""
        // return false

    }
}


function emailIsInvalid() {
    const email = document.querySelector("#email").value
    // const regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/
    //const regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-][.][a-zA-Z]{2,3}$/
    const regex = /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/
    let emailErrorMsg = document.getElementById("emailErrorMsg")
    if ((email === "") || (!regex.test(email))) {
        emailErrorMsg.textContent = "Veuillez remplir le champ avec une adresse email valide"
        //   return true
    }
    else {
        emailErrorMsg.textContent = ""
        //     return false
    }

}

function checkInputIsInvalid() {
    const regex = /^[A-Z][A-Za-z\é\è\ê\-]+$/
    firstNameIsInvalid(regex)
        || lastNameIsInvalid(regex)
        || addressIsInvalid()
        || citysIsInvalid(regex)
        || emailIsInvalid()
}


let validateOrderButton = document.getElementById('order')

validateOrderButton.addEventListener("click", (event) => {
    const cartArray = getFromCart()
    event.preventDefault()
    if (cartArray.length === 0) {
        alert("Votre panier est vide, commande impossible")
        return
    }
    // if (checkInputIsInvalid() === true) 
    else if (checkInputIsInvalid()) {
        return
    }
    else {
        let order = {
            contact: {
                firstName: document.querySelector("#firstName").value,
                lastName: document.querySelector("#lastName").value,
                address: document.querySelector("#address").value,
                city: document.querySelector("#city").value,
                email: document.querySelector("#email").value,
            },
            products: getIdsFromLocalStorage(),
        }
        console.log(order)
        //return order

        fetch("http://localhost:3000/api/products/order", {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                localStorage.clear();
                window.location.href = `confirmation.html?order=${response.orderId}`;
            })
            .catch((error) => {
                console.log(error);
            });*/

/* essai async / await
const urlProductsOrder = "http://localhost:3000/api/products/order"

let response = await fetch(urlProductsOrder, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(order),
}
);
let result = await response.json();

ligne 484 jusqu'à ligne 489 ?
*/




//Envoi de la requête POST au back-end
// Création de l'entête de la requête



/* essai async / await
const urlProductsOrder = "http://localhost:3000/api/products/order"

let response = await fetch(urlProductsOrder, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(order),
}
);
let result = await response.json();

let data = await {
    const orderId = data.orderId,
    window.location.href = "/html/confirmation.html" + "?orderId=" + orderId
  }
  */


/*
  fetch(postUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  })
    .then((res) => res.json())
    // to check res.ok status in the network
    .then((data) => {
      localStorage.clear();
      let confirmationUrl = "./confirmation.html?id=" + data.orderId;
      window.location.href = confirmationUrl;
    })
    .catch(() => {
      alert("Une erreur est survenue, merci de revenir plus tard.");
    }); // catching errors
});
*/

/*inspiration depuis page script.js
async function fetchArticleFromApi() {
    const res = await fetch(urlInventory)
    const data = await res.json()
    return data
}*/

/*
const body = makeRequestBody()
fetch("http://localhost:3000/api/products/order", {
  method: "POST",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json"
  }
})
  .then((res) => res.json()) // fait jusque là
  .then((data) => {
    const orderId = data.orderId
    window.location.href = "/html/confirmation.html" + "?orderId=" + orderId
  })
  .catch((err) => console.error(err))
*/

/* issu du lien dans le projet
let user = {
  name: 'John',
  surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
*/




/*
const urlInventory = "http://localhost:3000/api/products"

async function fetchArticleFromApi () {
  const res = await fetch(urlInventory)
  const data = await res.json()
  return data
}

*/

function getIdsFromLocalStorage() {
    const cartArray = getFromCart()
    let products = []
    for (let product of cartArray) {

        //products.push(product.productId)

        console.log(product)
        console.log(product.productId)
        console.log(cartArray[0].productId)
        console.log(products)
        products.push(product.productId)

        //return products

    }
    console.log(cartArray)
    console.log(products)
    return products
}

//

/**
 *
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * products: [string] <-- array of product _id
 *
 */

// brouillon

/*function firstNameIsInvalid() {
    const firstName = document.querySelector("#firstName").value
    const regex = /^[A-Z][A-Za-z\é\è\ê\-]+$/
    return (!regex.test(firstName))

    /{

        return true
    }
    else {
        return false
    }/

}



function lastNameIsInvalid() {
    const lastName = document.querySelector("#lastName").value
    const regex = /^[A-Z][A-Za-z\é\è\ê\-]+$/
    let errorMessageLastName = document.getElementById("lastNameErrorMsg")
   if (lastName === "") {
    errorMessageLastName.textContent = "Veuillez remplir le champ nom"
   }
   else /if (lastName !== "") /{
   / errorMessageLastName.textContent = ""/
    if (!regex.test(lastName)) {
    errorMessageLastName.textContent = "Merci de renseigner un nom de famille valide (sans chiffre ni ponctuation autre que -)"}

   }
    /if (!regex.test(lastName)) {
       
        return true
    }
    else {
        return false
    }/

}

function emailIsInvalid() {
    const email = document.querySelector("#email").value
    // const regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/
    //const regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-][.][a-zA-Z]{2,3}$/
    const regex = /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/
    return (!regex.test(email)) 
    
    /{
        alert("Merci de renseigner une adresse email valide")
        return true
    }
    else {
       return false
    }/
}

let validateOrderButton = document.getElementById('order')

validateOrderButton.addEventListener("click", () => {
/    if (inputIsInvalid()) {
        return
    } else/ if (firstNameIsInvalid()) {
        alert("Merci de renseigner un prénom valide (sans chiffre ni ponctuation autre que - et ')")
        return
    }
    else if (lastNameIsInvalid()) {
        alert("Merci de renseigner un nom de famille valide (sans chiffre ni ponctuation autre que -)")
        return
    }
    else if (emailIsInvalid()) {
        alert("Merci de renseigner une adresse email valide")
       // return
}})*/