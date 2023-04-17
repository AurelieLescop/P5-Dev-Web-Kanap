///* definitions des constantes*/
const urlInventory = "http://localhost:3000/api/products"
/*const vignette = document.getElementById("items")*/


/* fonction pour récupérer les articles*/
// const getArticles = () => {
function getArticles() {
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

          //  data.forEach(function (product) {
               
          //      console.log(product)
          //  })
           data.forEach(displayProduct);
       })
}

function displayProduct(product) {
  console.log(product);
}

// getArticles()
function wait() {
    return new Promise(function (resolve) {
        setTimeout(resolve, 500);
    });
}


function addSync(a, b) {
    return a + b;
}

function addCallback(a, b, callback) {
    /* traitement long */
    callback(a + b);
}

function addPromise(a, b) {
    const promise = new Promise(async function (resolve, reject) {
        /* traitement long */
        await wait();
        if (a + b === 20) {
            reject(`error`);
        }
        resolve(a + b);
    });
    return promise;
}

// const res = addSync(5, 5);
// console.log(res);

// addCallback(10, 10, function (result) {
//     console.log(`Result Callback: ${result} = ${10} + ${10}`);
//     console.log('Result Callback: ', result, ' = ', 10, ' + ', 10);

//     // => Suite du traitement
// });

// Promise
// addPromise(10, 10).then(function (result) {
//     console.log(`Result Promise: ${result}`);
// }).catch(function (error) {
//     console.log(`Reject Promise: ${error}`);
// });

// const promise = addPromise(10, 10);
// promise.catch(function (error) {
//     console.log(`Reject Promise: ${error}`);
// });
// promise.then(function (result) {
//     console.log(`Result Promise: ${result}`);
// });


async function main() {
    const promise = addPromise(15, 15);
    const result = await promise;
    console.log(`Result Promise Await: ${result}`);


    let result2;
    addPromise(30, 30).then(function (res) {
        result2 = res;
    });
    console.log(`Result Promise: ${result2}`);
}

// const promise = addPromise(15, 15);
// const result = await promise;
// console.log(`Result Promise Await: ${result}`);
// => Interdit par le langage


(async function() {
    await main();
})();


--------------------------

//collage version actuelle de script.js au 16/04

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