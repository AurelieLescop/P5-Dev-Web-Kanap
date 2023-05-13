/** affichage de l'élément article
 * création de l'élément article, ajout de ses attributs et intégration à la page html
 * @param {*} product correspondant à 1 produit récupéré dans le local storage contenant certaines données (identifiant, couleur, quantité)
 * @returns l'élément article
 */
function displayArticle(product) {
    const container = document.getElementById("cart__items");
    const article = document.createElement("article");
    container.appendChild(article);
    article.setAttribute("class", "cart__item");
    article.setAttribute("data-id", product.productId);
    article.setAttribute("data-color", product.color);
    return article;
}

/** affichage divImg dont la class = cart__item__img
 * création de la div et intégration à la page html
 * @param {*} article permettant le rattachement de l'élément div à article dans la page cart.html
 * @returns divImg
 */
function createDivImg(article) {
    const divImg = document.createElement("div");
    article.appendChild(divImg);
    divImg.setAttribute("class", "cart__item__img");
    return divImg;
}

/** affichage image
 * création de l'image, ajout de ses attributs et intégration dans la page html
 * @param {*} divImg précédemment créé
 * @param {*} data correspondant au produit issu de l'API à partir de l'identifiant du canapé product récupéré dans le local storage
 */
function createImg(divImg, data) {
    const img = document.createElement("img");
    divImg.appendChild(img);
    img.setAttribute("src", data.imageUrl);
    img.setAttribute("alt", data.altTxt);
}

/** affichage divContent class = cart__item__content
 * création de la divContent, ajout de son attribut et intégration dans la page html
 * @param {*} article précédemment créé
 * @returns divContent
 */
function createDivContent(article) {
    const divContent = document.createElement("div");
    article.appendChild(divContent);
    divContent.setAttribute("class", "cart__item__content");
    return divContent;
}

/** affichage div class = cart__item__content__description
 * création de la divContentDescription, ajout de son attribut et intégration dans la page html
 * @param {*} divContent précédemment créé
 * @returns divContentDescription
 */
function createDivContentDescription(divContent) {
    const divContentDescription = document.createElement("div");
    divContent.appendChild(divContentDescription);
    divContentDescription.setAttribute("class", "cart__item__content");
    return divContentDescription;
}

/** affichage titre h2
 * création titre h2, ajout de son attribut et intégration dans la page html
 * @param {*} divContentDescription précédemment créé
 * @param {*} data correspondant au produit issu de l'API à partir de l'identifiant du canapé product récupéré dans le local storage
 */
function createH2(divContentDescription, data) {
    const h2 = document.createElement("h2");
    const h2Content = document.createTextNode(data.name);
    h2.appendChild(h2Content);
    divContentDescription.appendChild(h2);
}

/** affichage paragraphe p couleur
 * création paragraphe p couleur, ajout de son attribut et intégration dans la page html
 * @param {*} divContentDescription précédemment créé
 * @param {*} product correspondant à 1 produit récupéré dans le local storage contenant certaines données (identifiant, couleur, quantité)
 */
function createPColor(divContentDescription, product) {
    const pColor = document.createElement("p");
    const pColorContent = document.createTextNode(product.color);
    pColor.appendChild(pColorContent);
    divContentDescription.appendChild(pColor);
}

/** affichage paragraphe p prix
 * création paragraphe p prix, ajout de son attribut et intégration dans la page html
 * @param {*} divContentDescription précédemment créé
 * @param {*} data correspondant au produit issu de l'API à partir de l'identifiant du canapé product récupéré dans le local storage
 */
function createPPrice(divContentDescription, data) {
    const pPrice = document.createElement("p");
    const pPriceContent = document.createTextNode(`${data.price} €`);
    pPrice.appendChild(pPriceContent);
    divContentDescription.appendChild(pPrice);
}

/** affichage DivContentSettings avec class = cart__item__content__settings
 * création div class = cart__item__content__settings, ajout de son attribut et intégration dans la page html
 * @param {*} divContent précédemment créé
 * @returns divContentSettings
 */
function createDivContentSettings(divContent) {
    const divContentSettings = document.createElement("div");
    divContent.appendChild(divContentSettings);
    divContentSettings.setAttribute("class", "cart__item__content__settings");
    return divContentSettings;
}

/** affichage div class = cart__item__content__settings__quantity
 * création div class = cart__item__content__settings__quantity, ajout de son attribut et intégration dans la page html
 * @param {*} divContentSettings précédemment créé
 * @returns divContentSettingsQuantity
 */
function createDivContentSettingsQuantity(divContentSettings) {
    const divContentSettingsQuantity = document.createElement("div");
    divContentSettings.appendChild(divContentSettingsQuantity);
    divContentSettingsQuantity.setAttribute("class", "cart__item__content__settings__quantity");
    return divContentSettingsQuantity;
}

/** affichage paragraphe p prix
 * création paragraphe p prix et intégration dans la page html
 * @param {*} divContentSettingsQuantity précédemment créé
 */
function createPQuantity(divContentSettingsQuantity) {
    const pQuantity = document.createElement("p");
    const pQuantityContent = document.createTextNode("Qté : ");
    pQuantity.appendChild(pQuantityContent);
    divContentSettingsQuantity.appendChild(pQuantity);
}

/** affichage tab input quantity
 * création tab input quantity, ajout de ses attributs et intégration dans la page html
 * @param {*} divContentSettingsQuantity précédemment créé
 * @param {*} product correspondant à 1 produit récupéré dans le local storage contenant certaines données (identifiant, couleur, quantité)
 */
function createInputQuantity(divContentSettingsQuantity, product) {
    const inputQuantity = document.createElement("input");
    divContentSettingsQuantity.appendChild(inputQuantity);
    inputQuantity.setAttribute("type", "number");
    inputQuantity.setAttribute("class", "itemQuantity");
    inputQuantity.setAttribute("name", "itemQuantity");
    inputQuantity.setAttribute("min", "1");
    inputQuantity.setAttribute("max", "100");
    inputQuantity.setAttribute("value", product.quantity);
}

/** affichage divContentSettingsDelete avec class = cart__item__content__settings__delete
 * création div class = cart__item__content__settings__delete, ajout de son attribut et intégration dans la page html
 * @param {*} divContentSettings
 * @returns divContentSettingsDelete
 */
function createDivContentSettingsDelete(divContentSettings) {
    const divContentSettingsDelete = document.createElement("div");
    divContentSettings.appendChild(divContentSettingsDelete);
    divContentSettingsDelete.setAttribute("class", "cart__item__content__settings__delete");
    return divContentSettingsDelete;
}

/** affichage p class = cart__item__content__settings__delete
 * création p class = cart__item__content__settings__delete, ajout de son attribut et intégration dans la page html
 * @param {*} divContentSettingsDelete précédemment créé
 */
function createPDelete(divContentSettingsDelete) {
    const pDelete = document.createElement("p");
    const pDeleteContent = document.createTextNode("Supprimer");
    pDelete.appendChild(pDeleteContent);
    divContentSettingsDelete.appendChild(pDelete);
    pDelete.setAttribute("class", "deleteItem");
}

/** affichage de l'article
 * appel des fonctions précédemment développées
 * @param {*} product correspondant à 1 produit récupéré dans le local storage contenant certaines données (identifiant, couleur, quantité)
 * @param {*} data correspondant au produit issu de l'API à partir de l'identifiant du canapé product récupéré dans le local storage
 */
function displayCartElement(product, data) {
    const article = displayArticle(product);
    const divImg = createDivImg(article);
    createImg(divImg, data);
    const divContent = createDivContent(article);
    const divContentDescription = createDivContentDescription(divContent);
    createH2(divContentDescription, data);
    createPColor(divContentDescription, product);
    createPPrice(divContentDescription, data);
    const divContentSettings = createDivContentSettings(divContent);
    const divContentSettingsQuantity = createDivContentSettingsQuantity(divContentSettings);
    createPQuantity(divContentSettingsQuantity);
    createInputQuantity(divContentSettingsQuantity, product);
    const divContentSettingsDelete = createDivContentSettingsDelete(divContentSettings);
    createPDelete(divContentSettingsDelete, product);
}

/** affichage total quantité du panier
 * @param {*} totalCartQuantity correspondant à la quantité totale
 */
function integrateTotalQuantity(totalCartQuantity) {
    document.getElementById('totalQuantity').textContent = totalCartQuantity;
}

/** affichage total prix du panier
 * @param {*} totalCartPrice correspondant au prix total
 */
function integrateTotalPrice(totalCartPrice) {
    document.getElementById('totalPrice').textContent = totalCartPrice;
}

/** récupération des données de l'API
 * @param {*} urlProduct correspondant à l'URL de l'API
 * @returns les données relatives au produit
*/
async function fetchArticleFromApi(urlProduct) {
    const res = await fetch(urlProduct);
    const data = await res.json();
    return data;
}

/** affichage du panier
 */
async function displayCart() {
    const container = document.getElementById("cart__items");

    //suppression d'un éventuel précédent panier
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // récupération des produits du local storage
    const productsLoadedInLocalStorage = getFromCart();

    let totalQty = 0;
    let totalPrice = 0;

    // pour chaque produit du local storage
    for (const product of productsLoadedInLocalStorage) {
        const id = product.productId;
        const data = await fetchArticleFromApi(`http://localhost:3000/api/products/${id}`);

        // affichage des éléments dans la page html
        displayCartElement(product, data);

        totalQty += Number(product.quantity);
        totalPrice += Number(product.quantity) * Number(data.price);
    }
    integrateTotalQuantity(totalQty);
    integrateTotalPrice(totalPrice);
    registerEvent();
}

// -------------- GESTION DU PANIER
// Sauvegarde les données dans le panier
function saveCart(cartContent) {
    localStorage.setItem("cartProduct", JSON.stringify(cartContent));
}

// Récupération des données du panier
function getFromCart() {
    const cartContent = localStorage.getItem("cartProduct");
    if (cartContent == null) {
        return [];
    }
    return JSON.parse(cartContent);
}

/** suppression d'un produit du panier
 * @param {*} id correspondant à l'identifiant du produit
 * @param {*} color correspondant à la couleur du produit
 */
function removeFromCart(id, color) {
    // récupération du panier
    let cart = getFromCart();
    //permet d'afficher le tableau dépourvu du produit ayant le même identifiant et la même couleur
    cart = cart.filter((p) => !(p.productId === id && p.color === color));
    //enregistrement du nouveau panier
    saveCart(cart);
}

/** gestion de l'évènement supprimer
 * @param {*} event
 */
function manageDeleteEvent(event) {
    //suppression du produit du panier ayant cet identifiant et cette couleur
    removeFromCart(event.target.closest("article").dataset.id, event.target.closest("article").dataset.color);
    displayCart();
}

/** ajout d'évènements à tous les boutons "supprimer"
 * et tous les menus déroulants de quantité du panier
 */
function registerEvent() {
    const removeToCartButtons = document.querySelectorAll('.deleteItem');
    for (const removeToCartButton of removeToCartButtons) {
        removeToCartButton.addEventListener("click", manageDeleteEvent);
    }
    const containerDisplayCart = document.getElementById('cart__items');
    const modifyQuantityButtons = containerDisplayCart.querySelectorAll('input');

    for (const modifyQuantityButton of modifyQuantityButtons) {
        modifyQuantityButton.addEventListener("change", manageQuantityChange);
    }
}

/** permet de modifier la quantité directement dans le panier affiché (à la saisie ou avec le menu)
 * recherche le produit dans le panier ayant le même identifiant et la même couleur
 * modifie la quantité dans le panier stocké dans le local storage
 * @param {*} newQuantity
 * @param {*} id
 * @param {*} color
 * @returns
 */
function modifyQuantity(newQuantity, id, color) {
    const cartArray = getFromCart();
    //si index non trouvé, il mettra -1
    const index = cartArray.findIndex((p) => p.productId === id && p.color === color);
    if (index > -1) {
        cartArray[index].quantity = newQuantity;
    }
    return cartArray;
}

/** prise en compte du changement de la quantité
 * vérification que le nombre est compris entre 1 et 100
 * si non, message alerte et prise en compte précédente quantité, sauvegarde et affichage panier
 * si oui, modification de la quantité avec la nouvelle donnée, sauvegarde et affichage du panier
 * @param {*} event
 * @param {*} id
 * @param {*} color
 */
function manageQuantityChange(event, id, color) {
    if ((Number(event.target.value) <= 0) || (Number(event.target.value) > 100)) {
        alert("Veuillez choisir une quantité comprise entre 1 et 100");
        const cartArray = getFromCart();
        const index = cartArray.findIndex((p) => p.productId === id && p.color === color);
        if (index > -1) {
            //affichage et prise en compte de l'ancienne quantité
            event.target.value = cartArray[index].quantity;
        }
        saveCart(cartArray);
        displayCart();
    } else {
        const cartArray = modifyQuantity(Number(event.target.value), event.target.closest("article").dataset.id, event.target.closest("article").dataset.color);
        saveCart(cartArray);
        displayCart();
    }
}

// ------------ VERIFICATION CHAMPS FORMULAIRE

/** vérification du champ prénom
 * si champ vide ou si ne vérifiant pas l expression régulière, affichage message d'erreur
 * si non, aucun affichage
 * @returns
 */
function firstNameIsValid() {
    const firstName = document.querySelector("#firstName").value;
    const regex = /^[A-Za-zéèêëç-]+$/;
    const errorMessageFirstName = document.getElementById("firstNameErrorMsg");
    errorMessageFirstName.textContent = "";
    if (firstName !== "" && regex.test(firstName)) {
        return true;
    }
    errorMessageFirstName.textContent = "Veuillez remplir le champ avec un prénom valide (sans chiffre ni ponctuation autre que -)";
    return false;
}

/** vérification du champ nom de famille
 * si champ vide ou si ne vérifiant pas l expression régulière, affichage message d'erreur
 * si non, aucun affichage
 * @returns
 */
function lastNameIsValid() {
    const lastName = document.querySelector("#lastName").value.trim();
    const regex = /^[A-Za-zéèêëç-]+$/;
    const errorMessageLastName = document.getElementById("lastNameErrorMsg");
    errorMessageLastName.textContent = "";
    if (regex.test(lastName)) {
        return true;
    }
    errorMessageLastName.textContent = "Veuillez remplir le champ avec un nom de famille valide (sans chiffre ni ponctuation autre que -)";
    return false;
}

/** vérification du champ adresse
 * si champ vide, affichage message d'erreur
 * si non, aucun affichage
 * @returns
 */
function addressIsValid() {
    const address = document.querySelector("#address").value;
    const addressErrorMsg = document.getElementById("addressErrorMsg");
    addressErrorMsg.textContent = "";
    if (address !== "") {
        return true;
    }
    addressErrorMsg.textContent = "Veuillez remplir le champ avec une adresse valide";
    return false;
}

/** vérification du champ ville
 * si champ vide ou si ne vérifiant pas l expression régulière, affichage message d'erreur
 * si non, aucun affichage
 * @returns
 */
function cityIsValid() {
    const city = document.querySelector("#city").value;
    const regex = /^[A-Za-zéèêëç-]+$/;
    const cityErrorMsg = document.getElementById("cityErrorMsg");
    cityErrorMsg.textContent = "";
    if (city !== "" && regex.test(city)) {
        return true;
    }
    cityErrorMsg.textContent = "Veuillez remplir le champ avec un nom de ville valide (sans chiffre ni ponctuation autre que -)";
    return false;
}

/** vérification du champ email
 * si champ vide ou si ne vérifiant pas l expression régulière, affichage message d'erreur
 * si non, aucun affichage
 * @returns
 */
function emailIsValid() {
    const email = document.querySelector("#email").value;
    const regex = /^[\w.=-]+@[\w.-]+\.[\w]{2,3}$/;
    const emailErrorMsg = document.getElementById("emailErrorMsg");
    emailErrorMsg.textContent = "";
    if (email !== "" && regex.test(email)) {
        return true;
    }
    emailErrorMsg.textContent = "Veuillez remplir le champ avec une adresse email valide";
    return false;
}

/** vérification de l'ensemble des champs
 * si tous les champs sont valides, renvoit true
 * @returns boolean
 */
function checkInputIsValid() {
    let isValid = true;

    if (!firstNameIsValid()) {
        isValid = false;
    }
    if (!lastNameIsValid()) {
        isValid = false;
    }
    if (!addressIsValid()) {
        isValid = false;
    }
    if (!cityIsValid()) {
        isValid = false;
    }
    if (!emailIsValid()) {
        isValid = false;
    }
    return isValid;
}

/** gestion de l'évènement lié au bouton d'envoi du formulaire
 * si panier vide, message d'alerte envoyé, pas d'envoi de formulaire et de la commande
 * si champ du formulaire invalide, pas d'envoi de formulaire et de la commande
 * sinon envoi du formulaire et de la commande
 */
async function manageClicOrderButton(event) {
    event.preventDefault();
    const cartArray = getFromCart();
    if (cartArray.length === 0) {
        alert("Votre panier est vide, commande impossible");
        return;
    }
    if (!checkInputIsValid()) {
        return;
    }
    await postOrder();
}

/** ajout d'un évènement au bouton d'envoi de formulaire
 */
function registerOrderEvent() {
    const validateOrderButton = document.getElementById('order');
    validateOrderButton.addEventListener("click", manageClicOrderButton);
}

/** permet de récupérer les identifiants des produits du panier sous forme de tableau
 * @returns
 */
function getIdsFromLocalStorage() {
    const cartArray = getFromCart();
    const products = [];
    for (const product of cartArray) {
        products.push(product.productId);
    }
    return products;
}

/** définition et envoi de la requête au back end
 */
async function postOrder() {
    const order = {
        contact: {
            firstName: document.querySelector("#firstName").value,
            lastName: document.querySelector("#lastName").value,
            address: document.querySelector("#address").value,
            city: document.querySelector("#city").value,
            email: document.querySelector("#email").value,
        },
        products: getIdsFromLocalStorage(),
    };

    const urlProductsOrder = "http://localhost:3000/api/products/order";

    try {
        const response = await fetch(urlProductsOrder, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        });

        if (response.status < 200 || response.status >= 300) {
            console.log(`Server badly replied: ${response.status}`);
            // Avertir l'utilisateur
            return;
        }

        const result = await response.json();
        localStorage.removeItem('cartProduct');
        window.location.href = `confirmation.html?order=${result.orderId}`;
    } catch (e) {
        console.log(`Error happened`, e);
    }
}

displayCart();
registerOrderEvent();
