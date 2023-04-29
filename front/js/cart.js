
let productsLoadedInLocalStorage = JSON.parse(localStorage.getItem("cartProduct"));
console.log(productsLoadedInLocalStorage);

console.log("Hello")
console.log(JSON.parse(localStorage.getItem("cartProduct")))
console.log(productsLoadedInLocalStorage[0].quantity)
console.log(productsLoadedInLocalStorage[0].price)

/*
for (let canape of data) {

  //endroit intégration dans index.html
  const container = document.getElementById("items")
  
  // creation d'un element
  const newElement = createCanapeElement (canape)
  
  // rattachement de l'element et intégration à index.html
  container.appendChild(newElement)
 }

function createCanapeElement (canape) {
  const a = createElementA (canape)
  const article = createElementArticle (a)
  createElementImg (article, canape)
  createElementH3 (canape, article)
  createElementp (canape, article)

  console.log (canape)

  return a
}

function createElementA (canape) {
    const a = document.createElement ("a")
    a.setAttribute ("href", "./product.html?id="+canape._id)
    return a
  }
  
    //creation article et rattachement à index.html
function createElementArticle (a) {
    const article = document.createElement ("article")
    a.appendChild(article)
    return article
  }*/

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

  function createCart() {
    for (let product of productsLoadedInLocalStorage) {

    // endroit intgration dans html
    const container = document.getElementById("cart__items")
    
    // creation article
    const article = document.createElement ("article")
    container.appendChild(article)
    article.setAttribute("class", "cart__item")
    article.setAttribute("data-id", product.productId)
    article.setAttribute("data-color", product.color)

    // creation Img
    const img = document.createElement ("img")
    article.appendChild(img)
    img.setAttribute ("src", product.imageUrl)
    img.setAttribute ("alt", product.altTxt)

    
    // rattachement de l'element et intégration à index.html
    }
    console.log(product)
    return product
    
    }
    
    createCart()



/*function createCart(productsLoadedInLocalStorage) {
for (let product of productsLoadedInLocalStorage) {
/*


// endroit intgration dans html
const container = document.getElementById("cart__items")

// creation d'un element
//const newElement = createCartElement (product)

const a = document.createElement ("a")
a.setAttribute ("href", "./product.html?id="+ product.id)

const article = document.createElement ("article")
a.appendChild(article)



// rattachement de l'element et intégration à index.html
container.appendChild(article)
}
}

createCart(productsLoadedInLocalStorage)*/

//function createCartElement (a) {

  //}




// Creation article



/* <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
            <div class="cart__item__img">
                <img src="../images/product01.jpg" alt="Photographie d'un canapé">
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__description">
                    <h2>Nom du produit</h2>
                    <p>Vert</p>
                    <p>42,00 €</p>
                </div>
            <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                    <p>Qté : </p>
                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                </div>
                <div class="cart__item__content__settings__delete">
                    <p class="deleteItem">Supprimer</p>
                </div>
            </div>
        </div>
</article>*/

//Creation article


/*function createImg(data) {
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
}*/