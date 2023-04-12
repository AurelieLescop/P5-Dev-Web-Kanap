/* definitions des constantes*/
 const urlInventory = "http://localhost:3000/api/products"
 /*const vignette = document.getElementById("items")*/

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

            // data.forEach(function (product) {
            // data.forEach(product => {
              data.forEach((product) => {
                
                console.log(product)

                
                /*
                vignette.innerHTML += `<a href="./product.html?id=42">
                document.getElementById("items").innerHTML += `<a href="./product.html?id=42">
                <article>
                  <img src="${product.imageUrl}" alt="${product.altTxt}">
                  <h3 class="productName">${product.name}</h3>
                  <p class="productDescription">${product.description}</p>
                </article>
              </a>`*/
            })
        })
 }

 async function getArticles2() {
  /*pour requêter l'API*/
      const answer = await fetch(urlInventory);
      const data = await answer.json();

      // console.log(data)

      for (id in data) {
        console.log(`ID: ${id}`);
      }
      for (product of data) {
      // data.forEach(product => {
          
          console.log(`Product: ${product.name}`);

          
          /*
          vignette.innerHTML += `<a href="./product.html?id=42">
          document.getElementById("items").innerHTML += `<a href="./product.html?id=42">
          <article>
            <img src="${product.imageUrl}" alt="${product.altTxt}">
            <h3 class="productName">${product.name}</h3>
            <p class="productDescription">${product.description}</p>
          </article>
        </a>`*/
      }
}

 getArticles2()