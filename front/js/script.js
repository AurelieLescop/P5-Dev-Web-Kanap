
const urlInventory = "http://localhost:3000/api/products"

async function getArticles () {

  const res = await fetch(urlInventory)
  const data = await res.json()

  console.log(data)

 for (let canape of data) {
  const container = document.getElementById("items")
  const a = document.createElement ("a")
  container.appendChild(a)
  const article = document.createElement ("article")
  a.appendChild(article)
  const img = document.createElement ("img")
  article.appendChild(img)
  img.setAttribute ("src", canape.imageUrl)
  console.log (canape)
 }

 /*
          <a href="./product.html?id=42">
            <article>
              <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
            </article>
          </a>
 */


 
//  for (let i=0; i<data.length; i=i+1) {
//console.log(data[i])
//}
}

getArticles()

// /* definitions des constantes*/
//  const urlInventory = "http://localhost:3000/api/products"
//  /*const vignette = document.getElementById("items")*/

//  /* fonction pour récupérer les articles*/
//  const getArticles = function () {
//     /*pour requêter l'API*/
//         fetch(urlInventory)

//         /*récupérer la réponse émise*/
//         .then(function (answer) {
//             return answer.json()
//         })

//         /*parcourir la fonction pour insérer chaque produit dans la page d'accueil*/
//         .then(function (data) {
//             console.log(data)
//             /*for(product in data) {*/

//             // data.forEach(function (product) {
//             // data.forEach(product => {
//               data.forEach((product) => {
                
//                 console.log(product)

                
//                 /*
//                 vignette.innerHTML += `<a href="./product.html?id=42">
//                 document.getElementById("items").innerHTML += `<a href="./product.html?id=42">
//                 <article>
//                   <img src="${product.imageUrl}" alt="${product.altTxt}">
//                   <h3 class="productName">${product.name}</h3>
//                   <p class="productDescription">${product.description}</p>
//                 </article>
//               </a>`*/
//             })
//         })
//  }

//  async function getArticles2() {
//   /*pour requêter l'API*/
//       const answer = await fetch(urlInventory);
//       const data = await answer.json();

//       // console.log(data)

//       for (id in data) {
//         console.log(`ID: ${id}`);
//       }
//       for (product of data) {
//       // data.forEach(product => {
          
//           console.log(`Product: ${product.name}`);

          
//           /*
//           vignette.innerHTML += `<a href="./product.html?id=42">
//           document.getElementById("items").innerHTML += `<a href="./product.html?id=42">
//           <article>
//             <img src="${product.imageUrl}" alt="${product.altTxt}">
//             <h3 class="productName">${product.name}</h3>
//             <p class="productDescription">${product.description}</p>
//           </article>
//         </a>`*/
//       }
// }

//  getArticles2()