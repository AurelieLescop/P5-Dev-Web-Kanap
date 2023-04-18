
const urlInventory = "http://localhost:3000/api/products"

//creation fonction pour afficher dynamiquement les produits
async function getArticles () {

  //recupération données API
  const res = await fetch(urlInventory)
  const data = await res.json()

  console.log(data)

//pour chaque objet du tableau
 for (let canape of data) {

  //endroit intégration dans index.html
  const container = document.getElementById("items")
  
  //creation a et rattachement à index.html
  const a = document.createElement ("a")
  container.appendChild(a)
  
  //creation article et rattachement à index.html
  const article = document.createElement ("article")
  a.appendChild(article)
  
  //creation img, rattachement à index.html et ajout des attributs src et alt
  const img = document.createElement ("img")
  article.appendChild(img)
  img.setAttribute ("src", canape.imageUrl)
  img.setAttribute ("alt", canape.altTxt)
  
 //creation titre h3, création contenu titre, rattachement contenu à h3 puis à index.html, ajout de l'attribut class
  const h3 = document.createElement ("h3")
  const h3Content = document.createTextNode(canape.name)
  h3.appendChild(h3Content)
  document.body.appendChild(h3)
  article.appendChild(h3)
  h3.setAttribute ("class", "productName")
  
  //creation paragraphe p, création contenu p, rattachement contenu à p puis à index.html, ajout de l'attribut class
  const p = document.createElement ("p")
  const pContent = document.createTextNode(canape.description)
  p.appendChild(pContent)
  document.body.appendChild(p)
  article.appendChild(p)
  p.setAttribute ("class", "productDescription")

  console.log (canape)
 }

}

getArticles()

