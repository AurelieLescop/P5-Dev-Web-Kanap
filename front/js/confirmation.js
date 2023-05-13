/** permet de récupérer le numéro de commande dans l'adresse url
 * @returns le numéro de commande
 */
function getOrderId() {
    //récupération de l'URL de la page
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);

    //récupération de l'id de l'URL
    let orderNumber = url.searchParams.get("order");
    return orderNumber;
}

/** permet d'afficher le numéro de commmande dans la page html
 * @param {*} orderNumber le numéro de commande
 */
function integrateOrderId(orderNumber) {
    const orderId = document.getElementById("orderId");
    orderId.textContent = orderNumber;
}

/** permet de récupérer le numéro de commande dans l'adresse url 
 * et de l'afficher dans la page html
 */
function displayOrderId() {
    const orderNumber = getOrderId();
    integrateOrderId(orderNumber);
}

displayOrderId();