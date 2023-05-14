/** permet de récupérer le numéro de commande dans l'adresse url
 * @returns le numéro de commande
 */
function getOrderIdFromUrl() {
    //récupération de l'URL de la page
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);

    //récupération de l'id de l'URL
    const orderNumber = url.searchParams.get("order");
    return orderNumber;
}

/** permet de récupérer le numéro de commande dans l'adresse url
 * et de l'afficher dans la page html
 */
function displayOrderId() {
    const orderId = getOrderIdFromUrl();
    const orderIdElement = document.getElementById("orderId");
    orderIdElement.textContent = orderId;
}

displayOrderId();
