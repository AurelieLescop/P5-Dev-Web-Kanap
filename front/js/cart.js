
let productsLoadedInLocalStorage = JSON.parse(localStorage.getItem("cartProduct"));
console.log(productsLoadedInLocalStorage);

console.log("Hello")
console.log(JSON.parse(localStorage.getItem("cartProduct")))
console.log(productsLoadedInLocalStorage[0].quantity)
console.log(productsLoadedInLocalStorage[0].price)


/*
- créer article et attribuet class, data-id et data-colors
- créer div avec class = cart__item__img
    - créer img avec src et alt dans cette div
- créer div avec class ="cart__item__content__description"
    - créer h2 avec contenu
    - créer p couleur
    - créer p prix
- créer div avec class="cart__item__content__settings"
    - créer div avec class="cart__item__content__settings__quantity
        - créer p avec qté
        - créer <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
    - créer div avec class="cart__item__content__settings__delete"
        - créer p avec p class="deleteItem" et contenu "supprimer"
*/

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



function createCart() {
    for (let product of productsLoadedInLocalStorage) {

        // endroit intgration dans html
 

        const article = createArticle(product)



        //creation div class = cart__item__img
        const divImg = document.createElement("div")
        article.appendChild(divImg)
        divImg.setAttribute("class", "cart__item__img")

        // creation Img
        const img = document.createElement("img")
        divImg.appendChild(img)
        img.setAttribute("src", product.imageUrl)
        img.setAttribute("alt", product.altText)
        console.log(product)

        //creation div class = cart__item__content
        const divContent = document.createElement("div")
        article.appendChild(divContent)
        divContent.setAttribute("class", "cart__item__content")

        //creation div class = cart__item__content__description
        const divContentDescription = document.createElement("div")
        divContent.appendChild(divContentDescription)
        divContentDescription.setAttribute("class", "cart__item__content")

        //creation titre h2
        const h2 = document.createElement("h2")
        const h2Content = document.createTextNode(product.name)
        h2.appendChild(h2Content)
        divContentDescription.appendChild(h2)

        //creation paragraphe p couleur
        const pColor = document.createElement("p")
        const pColorContent = document.createTextNode(product.color)
        pColor.appendChild(pColorContent)
        divContentDescription.appendChild(pColor)

        //creation paragraphe p prix
        const pPrice = document.createElement("p")
        const pPriceContent = document.createTextNode(product.price + " €")
        pPrice.appendChild(pPriceContent)
        divContentDescription.appendChild(pPrice)

        //creation div class = cart__item__content__settings
        const divContentSettings = document.createElement("div")
        divContent.appendChild(divContentSettings)
        divContentSettings.setAttribute("class", "cart__item__content__settings")

        //creation div class = cart__item__content__settings__quantity
        const divContentSettingsQuantity = document.createElement("div")
        divContentSettings.appendChild(divContentSettingsQuantity)
        divContentSettingsQuantity.setAttribute("class", "cart__item__content__settings__quantity")

        //creation paragraphe p prix
        const pQuantity = document.createElement("p")
        const pQuantityContent = document.createTextNode("Qté : ")
        pQuantity.appendChild(pQuantityContent)
        divContentSettingsQuantity.appendChild(pQuantity)

        //creation tab input quantity
        const inputQuantity = document.createElement("input")
        divContentSettingsQuantity.appendChild(inputQuantity)
        inputQuantity.setAttribute("type", "number")
        inputQuantity.setAttribute("class", "itemQuantity")
        inputQuantity.setAttribute("name", "itemQuantity")
        inputQuantity.setAttribute("min", "1")
        inputQuantity.setAttribute("max", "100")
        inputQuantity.setAttribute("value", product.quantity)

        //creation div class = cart__item__content__settings__delete
        const divContentSettingsDelete = document.createElement("div")
        divContentSettings.appendChild(divContentSettingsDelete)
        divContentSettingsDelete.setAttribute("class", "cart__item__content__settings__delete")


        //creation p class = cart__item__content__settings__delete
        const pDelete = document.createElement("p")
        const pDeleteContent = document.createTextNode("Supprimer")
        pDelete.appendChild(pDeleteContent)
        divContentSettingsDelete.appendChild(pDelete)
        pDelete.setAttribute("class", "deleteItem")

        // calcul total quantité
        totalCartQuantity = totalCartQuantity + product.quantity
        console.log(product.quantity)
        console.log(totalCartQuantity)

        //calcul total prix
        totalCartPrice = totalCartPrice + (product.quantity * product.price)
        console.log(totalCartPrice)
    }
}

let totalCartQuantity = 0
let totalCartPrice = 0


createCart()

   // function removeFromCart(product)

/*
function createElement(data) {
  const img = createImg(data)
  integrateImg(img)
  addTitleContentH1(data)
  addContentPrice(data)
  addContentDescription(data)
}*/

/*
function createCanapeElement (canape) {
  const a = createElementA (canape)
  const article = createElementArticle (a)
  createElementImg (article, canape)
  createElementH3 (canape, article)
  createElementp (canape, article)

  console.log (canape)

  return a
}*/