//récupération de l'URL de la page
var currentUrl = window.location.href;

//role de cette ligne?
var url = new URL(currentUrl);

//récupération de l'id de l'URL
var id = url.searchParams.get("id");
console.log(id);
console.log(currentUrl);
console.log(url);


//Récupération de l'adresse API du canapé (revoir commentaire???)
const urlProduct = "http://localhost:3000/api/products/"+id

console.log(urlProduct)

//creation fonction pour afficher dynamiquement le canapé sélectionné

async function getArticle () {

  //recupération données API
  const res = await fetch(urlProduct)
  const data = await res.json()

    console.log(data)

//ajout image avec balise alt et src
    const container = document.querySelector('.item__img')
    const img = document.createElement ("img")
    container.appendChild(img)
    img.setAttribute ("src", data.imageUrl)
    img.setAttribute ("alt", data.altTxt)

  //ajout du titre h1 lié au canapé spécifique ds la page product.html
  document.querySelector('h1').textContent = data.name;
  console.log(data.name);

//ajout du prix dans id=price liié au canapé spécifique ds la page product.html
  document.querySelector('#price').textContent = data.price

//ajout de la description dans id=description lié au canapé spécifique ds la page product.html
  document.querySelector('#description').textContent = data.description
  
//ajout des options de couleur
console.log(data.colors[0])
console.log(data.colors[1])
console.log(data.colors[2])

for (let color of data.colors) {
console.log(color)
const colorChoice = document.getElementById('colors')
const option = document.createElement ("option")
colorChoice.appendChild(option)
option.setAttribute ("option", color)

const optionContent = document.createTextNode(color)
option.appendChild(optionContent)
console.log(optionContent)

}

}

getArticle()

