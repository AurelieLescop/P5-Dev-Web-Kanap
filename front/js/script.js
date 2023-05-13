const urlInventory = "http://localhost:3000/api/products";

/** récupération des données de l'API
 * @returns le tableau des canapés avec les données relatives à chaque canapé
 */
async function fetchArticleFromApi() {
  const res = await fetch(urlInventory);
  const data = await res.json();
  return data;
}

/** creation élément a et ajout attribut href unique pour 1 canapé donné
 * href est créé à partir de l'identifiant unique du canapé
 * @param {*} canape pour récupérer l'identifiant du canapé et l'ajouter dans l'attribut href
 * @returns l'élément a avec son attribut href
 */
function createElementA(canape) {
  const a = document.createElement("a");
  a.setAttribute("href", `./product.html?id=${canape._id}`);
  return a;
}

/** affichage de l'article pour 1 canapé donné
 * creation article et rattachement à index.html
 * @param {*} a pour le rattachement de l'article à a dans index.html
 * @returns l'élément article
 */
function displayElementArticle(a) {
  const article = document.createElement("article");
  a.appendChild(article);
  return article;
}

/** affichage élément image pour 1 canapé donné
 * création img, rattachement à index.html et ajout des attributs src et alt
 * @param {*} article pour le rattachement de l'image à article dans index.html
 * @param {*} canape pour récupérer le texte alternatif et la photo du canapé
 * @returns l'élément image
 */
function displayElementImg(article, canape) {
  const img = document.createElement("img");
  article.appendChild(img);
  img.setAttribute("src", canape.imageUrl);
  img.setAttribute("alt", canape.altTxt);
  return img;
}

/** affichage titre h3 pour 1 canapé donné
 * creation titre h3, création contenu titre, rattachement contenu à h3 puis à index.html, ajout de l'attribut class
 * @param {*} canape pour récupérer le nom du canapé et l'ajouter dans le titre h3
 * @param {*} article pour le rattachement de h3 à article dans index.html
 * @returns l'élément h3
 */
function displayElementH3(canape, article) {
  const h3 = document.createElement("h3");
  const h3Content = document.createTextNode(canape.name);
  h3.appendChild(h3Content);
  article.appendChild(h3);
  h3.setAttribute("class", "productName");
  return h3;
}

/** affichage description p pour 1 canapé donné
 * creation paragraphe p, création contenu de p, rattachement contenu à p puis à index.html, ajout de l'attribut class
 * @param {*} canape pour récupérer la description du canapé et l'ajouter dans le contenu de p
 * @param {*} article pour le rattachement de p à article dans index.html
 * @returns l'élément p
 */
function displayElementp(canape, article) {
  const p = document.createElement("p");
  const pContent = document.createTextNode(canape.description);
  p.appendChild(pContent);
  article.appendChild(p);
  p.setAttribute("class", "productDescription");
  return p;
}

/**Permet d'afficher 1 canapé dans son intégralité (image, titre, description) dans la page html
 * Fonction qui reprend l'ensemble des fonctions précédemment décrites permettant de créer les éléments lié à 1 canapé donné
 * @param {*} canape correspondant à 1 canapé de l'ensemble des produits du catalogue
 * @returns l'élément a
 */
function displayCanapeElement(canape) {
  const a = createElementA(canape);
  const article = displayElementArticle(a);
  displayElementImg(article, canape);
  displayElementH3(canape, article);
  displayElementp(canape, article);
  return a;
}

/** permet d'afficher dynamiquement les produits du catalogue
 * pour chaque canapé du catalogue,
 * création des éléments liés à 1 canapé donné,
 * et intégration dans la page html
 */
async function getArticles() {
  const data = await fetchArticleFromApi();
  //pour chaque objet (canapé) du tableau
  for (const canape of data) {
    //endroit intégration dans index.html
    const container = document.getElementById("items");
    // creation des différents éléments spécifiques au canapé
    const newElement = displayCanapeElement(canape);
    // rattachement des élément et intégration à index.html
    container.appendChild(newElement);
  }
}

getArticles();
