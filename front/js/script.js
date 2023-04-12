/* definitions des constantes*/
 const urlInventory = "http://localhost:3000/api/products"
 const vignette = document.getElementById("items")

 /* fonction pour récupérer les articles*/
 const getArticles = () => {
    /*pour requêter l'API*/
        fetch(urlInventory)

        /*récupérer la réponse émise*/
        .then(function (answer) {
            return answer.json()
        })

        /*parcourir la fonction pour insérer chaque produit dans la page d'accueil*/
        .then(function (data) {
            console.log(data)
            /*for(product in data) {*/

            data.forEach(product => {
                
                console.log(product)

                
                /*
                create
                vignette.innerHTML += `<a href="./product.html?id=42">
                <article>
                  <img src="${product.imageUrl}" alt="${product.altTxt}">
                  <h3 class="productName">${product.name}</h3>
                  <p class="productDescription">${product.description}</p>
                </article>
              </a>`*/
            })
        })
 }

 getArticles()