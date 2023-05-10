
const urlInventory = "http://localhost:3000/api/products"


/** récupération des données de l'API
 * @returns le tableau des canapés avec les données relatives à l'ensemble des canapés
 */
async function fetchArticleFromApi() {
  //recupération données API
  const res = await fetch(urlInventory)
  const data = await res.json()
  console.log("data",data)
  return data
}


/** creation element a et ajout attribut href unique pour 1 canapé donné
 * href est créé à partir de l'identifiant unique du canapé
 * @param {*} canape 
 * @returns l'élément a avec son attribut href
 */
function createElementA(canape) {
  const a = document.createElement("a")
  a.setAttribute("href", "./product.html?id=" + canape._id)
  return a
}

/** affichage de l'article pour 1 canapé donné
 * creation article et rattachement à index.html
 * @param {*} a pour le rattachement à index.html
 * @returns l'élément article
 */
function displayElementArticle(a) {
  const article = document.createElement("article")
  a.appendChild(article)
  return article
}

/** affichage element image pour 1 canapé donné
 * creation img, rattachement à index.html et ajout des attributs src et alt
 * @param {*} article 
 * @param {*} canape 
 * @returns 
 */
function displayElementImg(article, canape) {
  const img = document.createElement("img")
  article.appendChild(img)
  img.setAttribute("src", canape.imageUrl)
  img.setAttribute("alt", canape.altTxt)
  return img
}

/** affichage titre h3 pour 1 canapé donné
 * creation titre h3, création contenu titre, rattachement contenu à h3 puis à index.html, ajout de l'attribut class
 * @param {*} canape 
 * @param {*} article 
 * @returns 
 */
function displayElementH3(canape, article) {
  const h3 = document.createElement("h3")
  const h3Content = document.createTextNode(canape.name)
  h3.appendChild(h3Content)
  article.appendChild(h3)
  h3.setAttribute("class", "productName")
  return h3
}

/** affichage description p pour 1 canapé donné
 * creation paragraphe p, création contenu p, rattachement contenu à p puis à index.html, ajout de l'attribut class
 * @param {*} canape 
 * @param {*} article 
 * @returns 
 */
function displayElementp(canape, article) {
  const p = document.createElement("p")
  const pContent = document.createTextNode(canape.description)
  p.appendChild(pContent)
  article.appendChild(p)
  p.setAttribute("class", "productDescription")
  return p
}

/**Permet d'afficher 1 canapé dans son intégralité (image, titre, description) dans la page html
 * Fonction qui reprend l'ensemble des fonctions précédemment décrites permettant de créer les éléments lié à 1 canapé donné
 * @param {*} canape correspondant à 1 canapé de l'ensemble des produits du catalogue
 * @returns 
 */
function displayCanapeElement(canape) {
  const a = createElementA(canape)
  const article = displayElementArticle(a)
  displayElementImg(article, canape)
  displayElementH3(canape, article)
  displayElementp(canape, article)

  console.log(canape)
  return a
}

/** permet d'afficher dynamiquement les produits du catalogue
 * pour chaque canapé du catalogue, 
 * création des éléments liés à 1 canapé donné, 
 * et intégration dans la page html
 */
async function getArticles() {

  const data = await fetchArticleFromApi()

  //pour chaque objet (canapé) du tableau
  for (let canape of data) {

    //endroit intégration dans index.html
    const container = document.getElementById("items")

    // creation d'un element
    const newElement = displayCanapeElement(canape)

    // rattachement de l'element et intégration à index.html
    container.appendChild(newElement)
  }
}

getArticles()

