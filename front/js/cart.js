let productId, productColor
// creation article

/** affichage de l'article
 * création de l'élément article, ajout de ses attributs et intégration à la page html
 * @param {*} product 
 * @returns 
 */
function displayArticle(product) {
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

/** affichage div class = cart__item__img
 * création de la div et intégration à la page html
 * @param {*} article 
 * @returns 
 */
function createDivImg(article) {
    const divImg = document.createElement("div")
    article.appendChild(divImg)
    divImg.setAttribute("class", "cart__item__img")
    return divImg
}

/** affichage image
 * création de l'image, ajout de ses attributs et intégration dans la page html
 * @param {*} divImg 
 * @param {*} product 
 */
function createImg(divImg, data /*imageUrl, altTxt, product*/) {
    const img = document.createElement("img")
    divImg.appendChild(img)
    // img.setAttribute("src", product.imageUrl)
    // img.setAttribute("alt", product.altText)
    // img.setAttribute("src", imageUrl)
    // img.setAttribute("alt", altTxt)
    // console.log("altTxt createImage", altTxt)

    img.setAttribute("src", data.imageUrl)
    img.setAttribute("alt", data.altTxt)
    
    //mis en commentaire console.log(product)
}

/** affichage div class = cart__item__content
 * création de la divContent, ajout de son attribut et intégration dans la page html
 * @param {*} article 
 * @returns 
 */
function createDivContent(article) {
    const divContent = document.createElement("div")
    article.appendChild(divContent)
    divContent.setAttribute("class", "cart__item__content")
    return divContent
}

/** affichage div class = cart__item__content__description
 * création de la divContentDescription, ajout de son attribut et intégration dans la page html
 * @param {*} divContent 
 * @returns 
 */
function createDivContentDescription(divContent) {
    const divContentDescription = document.createElement("div")
    divContent.appendChild(divContentDescription)
    divContentDescription.setAttribute("class", "cart__item__content")
    return divContentDescription
}

/** affichage titre h2
 * création titre h2, ajout de son attribut et intégration dans la page html
 * @param {*} divContentDescription 
 * @param {*} product 
 */
function createH2(divContentDescription, data) {
    const h2 = document.createElement("h2")
    const h2Content = document.createTextNode(data.name)
    h2.appendChild(h2Content)
    divContentDescription.appendChild(h2)
}

/** affichage paragraphe p couleur
 * création paragraphe p couleur, ajout de son attribut et intégration dans la page html
 * @param {*} divContentDescription 
 * @param {*} product 
 */
function createPColor(divContentDescription, product) {
    const pColor = document.createElement("p")
    const pColorContent = document.createTextNode(product.color)
    pColor.appendChild(pColorContent)
    divContentDescription.appendChild(pColor)
}

/** affichage paragraphe p prix
 * création paragraphe p prix, ajout de son attribut et intégration dans la page html
 * @param {*} divContentDescription 
 * @param {*} product 
 */
function createPPrice(divContentDescription, data) {
    const pPrice = document.createElement("p")
    const pPriceContent = document.createTextNode(data.price + " €")
    pPrice.appendChild(pPriceContent)
    divContentDescription.appendChild(pPrice)
}

/** affichage div class = cart__item__content__settings
 * création div class = cart__item__content__settings, ajout de son attribut et intégration dans la page html
 * @param {*} divContent 
 * @returns 
 */
function createDivContentSettings(divContent) {
    const divContentSettings = document.createElement("div")
    divContent.appendChild(divContentSettings)
    divContentSettings.setAttribute("class", "cart__item__content__settings")
    return divContentSettings
}

/** affichage div class = cart__item__content__settings__quantity
 * création div class = cart__item__content__settings__quantity, ajout de son attribut et intégration dans la page html
 * @param {*} divContentSettings 
 * @returns 
 */
function createDivContentSettingsQuantity(divContentSettings) {
    const divContentSettingsQuantity = document.createElement("div")
    divContentSettings.appendChild(divContentSettingsQuantity)
    divContentSettingsQuantity.setAttribute("class", "cart__item__content__settings__quantity")
    return divContentSettingsQuantity
}

/** affichage paragraphe p prix
 * création paragraphe p prix et intégration dans la page html
 * @param {*} divContentSettingsQuantity 
 */
function createPQuantity(divContentSettingsQuantity) {
    const pQuantity = document.createElement("p")
    const pQuantityContent = document.createTextNode("Qté : ")
    pQuantity.appendChild(pQuantityContent)
    divContentSettingsQuantity.appendChild(pQuantity)
}

/** affichage tab input quantity
 * création tab input quantity, ajout de ses attributs et intégration dans la page html
 * @param {*} divContentSettingsQuantity 
 * @param {*} product 
 */
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

/** affichage div class = cart__item__content__settings__delete
 * création div class = cart__item__content__settings__delete, ajout de son attribut et intégration dans la page html
 * @param {*} divContentSettings 
 * @returns 
 */
function createDivContentSettingsDelete(divContentSettings) {
    const divContentSettingsDelete = document.createElement("div")
    divContentSettings.appendChild(divContentSettingsDelete)
    divContentSettingsDelete.setAttribute("class", "cart__item__content__settings__delete")
    return divContentSettingsDelete
}

/** affichage p class = cart__item__content__settings__delete
 * création p class = cart__item__content__settings__delete, ajout de son attribut et intégration dans la page html
 * @param {*} divContentSettingsDelete 
 * @param {*} product 
 */
function createPDelete(divContentSettingsDelete, product) {
    const pDelete = document.createElement("p")
    const pDeleteContent = document.createTextNode("Supprimer")
    pDelete.appendChild(pDeleteContent)
    divContentSettingsDelete.appendChild(pDelete)
    pDelete.setAttribute("class", "deleteItem")
}

/** affichage de l'article
 * appel des fonctions précédemment développées
 * @param {*} product 
 */

//function displayCartElement(product)
function displayCartElement(product, data) {
    const article = displayArticle(product)
    const divImg = createDivImg(article)
    createImg(divImg, data)
    //    createImg(divImg, product)
    const divContent = createDivContent(article)
    const divContentDescription = createDivContentDescription(divContent)
    createH2(divContentDescription, data)
    createPColor(divContentDescription, product)
    createPPrice(divContentDescription, data)
    const divContentSettings = createDivContentSettings(divContent)
    const divContentSettingsQuantity = createDivContentSettingsQuantity(divContentSettings)
    createPQuantity(divContentSettingsQuantity)
    createInputQuantity(divContentSettingsQuantity, product)
    const divContentSettingsDelete = createDivContentSettingsDelete(divContentSettings)
    createPDelete(divContentSettingsDelete, product)
}

/** affichage total quantité
 */
function integrateTotalQuantity(totalCartQuantity) {
    document.getElementById('totalQuantity').textContent = totalCartQuantity
    console.log(totalCartQuantity)

}

/** affichage total prix
 */
function integrateTotalPrice(totalCartPrice) {
    document.getElementById('totalPrice').textContent = totalCartPrice
    console.log(totalCartPrice)
}

/*function fetchIdData () {
    let items = getFromCart()
    console.log("items", items)
    console.log("items[0].productId", items[0].productId)

    for (let item of items) {
        console.log("item", item)
        let id = item.productId
        let color = item.color
        let quantity = item.quantity
        console.log ("id", id)
        const urlProduct = "http://localhost:3000/api/products/" + id
        fetchArticleFromApi(urlProduct)
        displayArticle()
        return (id, color, quantity)
        // return id
    } 
}

let id
let color
let quantity



async function fetchArticleFromApi(urlProduct) {
    const res = await fetch(urlProduct)
    const data = await res.json()
  
    console.log("data", data)
    return data
  }
  

fetchIdData()*/

/** affichage du panier
 */

//essai
async function fetchArticleFromApi(urlProduct) {
    const res = await fetch(urlProduct)
    const data = await res.json()

    console.log("data", data)
    return data
}

//let articleName, price, quantity, altTxt, imageUrl

//essai

async function displayCart() {
    const container = document.getElementById("cart__items")

    //suppression d'un précédent éventuel panier
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // récupération des produits du local storage
    let productsLoadedInLocalStorage = JSON.parse(localStorage.getItem("cartProduct"));

    let totalQty = 0;
    let totalPrice = 0;
    for (let product of productsLoadedInLocalStorage) {
        console.log("product", product)
        console.log("productId", product.productId)

        //essai
        let id = product.productId
        const urlProduct = "http://localhost:3000/api/products/" + id
        const data = await fetchArticleFromApi(urlProduct)
        /*articleName = data.name
        price = data.price
        color = product.color
        quantity = product.quantity
        altTxt = data.altTxt
        imageUrl = data.imageUrl*/
        console.log("data l289", data)
        console.log("name from API", data.name)
        console.log(data.altTxt)
        //fin essai

        // endroit intgration dans html
        displayCartElement(product, data)

        //ancienne version
        // totalQty = totalQty + Number(product.quantity);
        // totalPrice = totalPrice + (Number(product.quantity) * Number(product.price));

        totalQty = totalQty + Number(product.quantity);
        totalPrice = totalPrice + (Number(product.quantity) * Number(data.price));
    }
    integrateTotalQuantity(totalQty)
    integrateTotalPrice(totalPrice)
    registerEvent()
}

displayCart()



// -------------- GESTION DU PANIER
// Sauvegarde les données dans le panier
function saveCart(cartContent) {
    localStorage.setItem("cartProduct", JSON.stringify(cartContent))
}

// Récupération des données du panier
function getFromCart() {
    let cartContent = localStorage.getItem("cartProduct");
    if (cartContent == null) {
        return []
    }
    return JSON.parse(cartContent)
}

/** suppression produit du panier
 * @param {*} id 
 * @param {*} color 
 */
function removeFromCart(id, color) {
    // récupération du panier
    let cart = getFromCart()
    //permet de retrouver le produit ayant le même identifiant et la même couleur
    cart = cart.filter(p => !(p.productId === id && p.color === color))
    console.log("affiche cart", cart)
    //enregistrement du nouveau panier
    saveCart(cart)
}


/**
 * gestion de l'évènement supprimer
 * @param {*} event 
 */
function manageDeleteEvent(event) {
    {
        console.log(event);
        console.log(event.target);
        //chemin permettant de récupérer la couleur du produit
        console.log(event.target.closest("article").dataset.color);
        //chemin permettant de récupérer l'identifiant du produit
        console.log(event.target.closest("article").dataset.id);

        //suppression du produit du panier ayant cet identifiant et cette couleur
        removeFromCart(event.target.closest("article").dataset.id, event.target.closest("article").dataset.color)
        displayCart()
    }
}

/** ajout d'évènements à tous les boutons "supprimer" 
 * et tous les menus déroulants de quantité du panier
 */
function registerEvent() {
    const removeToCartButtons = document.querySelectorAll('.deleteItem')
    for (let removeToCartButton of removeToCartButtons) {
        removeToCartButton.addEventListener("click", manageDeleteEvent)
    }

    let containerDisplayCart = document.getElementById('cart__items')
    let modifyQuantityButtons = containerDisplayCart.querySelectorAll('input')

    for (let modifyQuantityButton of modifyQuantityButtons) {
        modifyQuantityButton.addEventListener("change", manageQuantityChange)
    }

}

/** permet de modifier la quantité directement dans le panier affiché (à la saisie ou avec le menu)
 * recherche le produit dans le panier ayant le même identifiant et la même couleur
 * modifie la quantité dans le panier stocké dans le local storage
 * @param {*} newQuantity 
 * @param {*} id 
 * @param {*} color 
 * @returns 
 */
function modifyQuantity(newQuantity, id, color) {
    const cartArray = getFromCart()
    //si index non trouvé, il mettra -1
    let index = cartArray.findIndex(p => p.productId === id && p.color === color)
    if (index > -1) {
        cartArray[index].quantity = newQuantity
        console.log("nouvelle quantité", newQuantity)
    }
    return cartArray
}

/** prise en compte du changement de la quantité
 * vérification que le nombre est compris entre 1 et 100
 * si non, message alerte et prise en compte précédente quantité, sauvegarde et affichage panier
 * si oui, modification de la quantité avec la nouvelle donnée, sauvegarde et affichage du panier
 * @param {*} event 
 * @param {*} id 
 * @param {*} color 
 */
function manageQuantityChange(event, id, color) {
    console.log(event);
    console.log(event.target.value)

    if ((Number(event.target.value) <= 0) || (Number(event.target.value) > 100)) {
        alert("Veuillez choisir une quantité comprise entre 1 et 100")
        const cartArray = getFromCart()
        let index = cartArray.findIndex(p => p.productId === id && p.color === color)
        if (index > -1) {
            //affichage et prise en compte de l'ancienne quantité
            event.target.value = cartArray[index].quantity
            console.log("ancienne quantité", event.target.value)
        }
        saveCart(cartArray)
        displayCart()
    }
    else {
        const cartArray = modifyQuantity(Number(event.target.value), event.target.closest("article").dataset.id, event.target.closest("article").dataset.color)
        saveCart(cartArray)
        displayCart()
    }

}

// ------------ VERIFICATION CHAMPS FORMULAIRE

/** vérification du champ prénom
 * si champ vide ou si ne vérifiant pas l expression régulière, affichage message d'erreur
 * si non, aucun affichage
 * @returns 
 */
function firstNameIsValid() {
    const firstName = document.querySelector("#firstName").value
    const regex = /^[A-Z][A-Za-z\é\è\ê\-]+$/
    let errorMessageFirstName = document.getElementById("firstNameErrorMsg")
    errorMessageFirstName.textContent = ""
    if (firstName !== "" && regex.test(firstName)) {
        return true
    }
    errorMessageFirstName.textContent = "Veuillez remplir le champ avec un prénom valide (sans chiffre ni ponctuation autre que -)"
    return false
}

/** vérification du champ nom de famille
 * si champ vide ou si ne vérifiant pas l expression régulière, affichage message d'erreur
 * si non, aucun affichage
 * @param {*}  
 * @returns 
 */
function lastNameIsValid() {
    const lastName = document.querySelector("#lastName").value
    const regex = /^[A-Z][A-Za-z\é\è\ê\-]+$/
    let errorMessageLastName = document.getElementById("lastNameErrorMsg")
    errorMessageLastName.textContent = ""
    if (lastName !== "" && regex.test(lastName)) {
        return true
    }
    errorMessageLastName.textContent = "Veuillez remplir le champ avec un nom de famille valide (sans chiffre ni ponctuation autre que -)"
    return false
}

/** vérification du champ adresse
 * si champ vide, affichage message d'erreur
 * si non, aucun affichage
 * @param {*}  
 * @returns 
 */
function addressIsValid() {
    const address = document.querySelector("#address").value
    let addressErrorMsg = document.getElementById("addressErrorMsg")
    addressErrorMsg.textContent = ""
    if (address !== "") {
        return true
    }

    addressErrorMsg.textContent = "Veuillez remplir le champ avec une adresse valide"
    return false


}

/** vérification du champ ville
 * si champ vide ou si ne vérifiant pas l expression régulière, affichage message d'erreur
 * si non, aucun affichage
 * @param {*} regex 
 * @returns 
 */
function cityIsValid() {
    const city = document.querySelector("#city").value
    const regex = /^[A-Z][A-Za-z\é\è\ê\-]+$/
    let cityErrorMsg = document.getElementById("cityErrorMsg")
    cityErrorMsg.textContent = ""
    if (city !== "" && regex.test(city)) {
        return true
    }
    cityErrorMsg.textContent = "Veuillez remplir le champ avec un nom de ville valide (sans chiffre ni ponctuation autre que -)"
    return false
}

/** vérification du champ email
 * si champ vide ou si ne vérifiant pas l expression régulière, affichage message d'erreur
 * si non, aucun affichage
 * @param {*} regex 
 * @returns 
 */
function emailIsValid() {
    const email = document.querySelector("#email").value
    const regex = /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/
    let emailErrorMsg = document.getElementById("emailErrorMsg")
    emailErrorMsg.textContent = ""
    if (email !== "" && regex.test(email)) {
        return true
    }
    emailErrorMsg.textContent = "Veuillez remplir le champ avec une adresse email valide"
    return false
}

/** vérification de l'ensemble des champs
 * si tous les champs sont valides, renvoit true
 * @returns boolean
 */
function checkInputIsValid() {
    let isValid = true;

    if (!firstNameIsValid()) {
        isValid = false
    }

    if (!lastNameIsValid()) {
        isValid = false
    }

    if (!addressIsValid()) {
        isValid = false
    }
    if (!cityIsValid()) {
        isValid = false
    }

    if (!emailIsValid()) {
        isValid = false
    }
    return isValid
}


let validateOrderButton = document.getElementById('order')

validateOrderButton.addEventListener("click", async (event) => {
    event.preventDefault()
    const cartArray = getFromCart()
    if (cartArray.length === 0) {
        alert("Votre panier est vide, commande impossible")
        return
    }
    if (!checkInputIsValid()) {
        return
    }
    await postOrder()
});

/** permet de récupérer les identifiants des produits du panier sous forme de tableau
 * @returns 
 */
function getIdsFromLocalStorage() {
    const cartArray = getFromCart()
    let products = []
    for (let product of cartArray) {
        products.push(product.productId)
    }
    console.log("articles dans le panier", cartArray)
    console.log("articles dans la commande", products)
    return products
}

/** envoi de la requête au back end
 */
async function postOrder() {
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

    //Envoi de la requête POST au back-end
    // fetch("http://localhost:3000/api/products/order", {
    //     method: "POST",
    //     body: JSON.stringify(order),
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // })
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((response) => {
    //         localStorage.clear();
    //         window.location.href = `confirmation.html?order=${response.orderId}`;
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })




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
    localStorage.clear();
    window.location.href = `confirmation.html?order=${result.orderId}`;
}


