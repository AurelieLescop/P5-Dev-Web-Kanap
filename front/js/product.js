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
async function fetchArticleFromApi () {
  const res = await fetch(urlProduct)
  const data = await res.json()

  console.log(data)
  return data
}

//création image avec balise alt et src et intégration
function createImg (data) {
  const img = document.createElement("img")
  img.setAttribute("src", data.imageUrl)
  img.setAttribute("alt", data.altTxt)
  return img
}

function integrateImg (img) {
  const container = document.querySelector('.item__img')
  container.appendChild(img)
  return img
}

//ajout du titre h1 lié au canapé spécifique ds la page product.html
function addTitleContentH1 (data) {
  document.querySelector('h1').textContent = data.name;
  console.log(data.name);
}

//ajout du prix dans id=price lié au canapé spécifique ds la page product.html
function addContentPrice (data) {
  document.querySelector('#price').textContent = data.price
}

//ajout de la description dans id=description lié au canapé spécifique ds la page product.html
function addContentDescription (data) {
  document.querySelector('#description').textContent = data.description
}

function createElement (data) {
  const img = createImg (data)
  integrateImg(img)
  addTitleContentH1 (data)
  addContentPrice (data)
  addContentDescription (data)
}

function createColorOption (color) {
  const colorChoice = document.getElementById('colors')
  const option = document.createElement("option")
  colorChoice.appendChild(option)
  option.setAttribute("option", color)
  return option
}

function addColorContent (color, colorOption) {
  const optionContent = document.createTextNode(color)
  colorOption.appendChild(optionContent)
  console.log(optionContent)
}

//creation fonction pour afficher dynamiquement le canapé sélectionné
async function getArticle() {
  const data = await fetchArticleFromApi ()
  createElement (data)
   

  //ajout des options de couleur
  console.log(data.colors[0])
  console.log(data.colors[1])
  console.log(data.colors[2])

  for (let color of data.colors) {
    console.log(color)
    const colorOption = createColorOption (color)
    addColorContent (color, colorOption)
  }
}

getArticle()

