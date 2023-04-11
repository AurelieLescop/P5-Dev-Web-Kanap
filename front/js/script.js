//* definitions des constantes*//
 const urlInventory = "http://localhost:3000/api/products"
 const vignette = document.getElementById("items")

 //* fonction pour récupérer les articles*//
 const getArticles = () => {
        fetch(urlInventory)
        .then(function (answer) {
            return answer.json()
        })
        .then(function (data) {
            for(product in data) {
                vignette.innerHTML += `<a href="./product.html?id=42">
                <article>
                  <img src="${data[product].imageUrl}" alt="${data[product].altTxt}">
                  <h3 class="productName">${data[product].name}</h3>
                  <p class="productDescription">${data[product].description}</p>
                </article>
              </a>`
            }
        })
 }

 getArticles()