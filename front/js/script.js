
const urlInventory = "http://localhost:3000/api/products"

//import { urlInventory } from './config'

async function fetchArticleFromApi () {
  //recupération données API
  const res = await fetch(urlInventory)
  const data = await res.json()

  console.log(data)

  return data
}

//creation a et rattachement à index.html puis ajout attribut href unique
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
}

  //creation img, rattachement à index.html et ajout des attributs src et alt
function createElementImg (article, canape) {
  const img = document.createElement ("img")
  article.appendChild(img)
  img.setAttribute ("src", canape.imageUrl)
  img.setAttribute ("alt", canape.altTxt)
  return img
}

 //creation titre h3, création contenu titre, rattachement contenu à h3 puis à index.html, ajout de l'attribut class
function createElementH3 (canape, article) {
  const h3 = document.createElement ("h3")
  const h3Content = document.createTextNode(canape.name)
  h3.appendChild(h3Content)
  article.appendChild(h3)
  h3.setAttribute ("class", "productName")
  return h3
}

  //creation paragraphe p, création contenu p, rattachement contenu à p puis à index.html, ajout de l'attribut class
function createElementp (canape, article) {
  const p = document.createElement ("p")
  const pContent = document.createTextNode(canape.description)
  p.appendChild(pContent)
  article.appendChild(p)
  p.setAttribute ("class", "productDescription")
  return p
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

//creation fonction pour afficher dynamiquement les produits
async function getArticles () {

  const data = await fetchArticleFromApi ()

  //pour chaque objet du tableau
 for (let canape of data) {

  //endroit intégration dans index.html
  const container = document.getElementById("items")
  
  // creation d'un element
  const newElement = createCanapeElement (canape)
  
  // rattachement de l'element et intégration à index.html
  container.appendChild(newElement)
 }
}

getArticles()

