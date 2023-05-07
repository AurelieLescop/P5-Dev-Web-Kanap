const orderId = getOrderId()
displayOrderId(orderId)
//removeAllCache()

function getOrderId() {
//récupération de l'URL de la page
const currentUrl = window.location.href;
const url = new URL(currentUrl);

//récupération de l'id de l'URL
let orderNumber = url.searchParams.get("order");
return orderNumber
}

function displayOrderId(orderNumber) {
  const orderId = document.getElementById("orderId")
  orderId.textContent = orderNumber
}

function removeAllCache() {
  const cache = window.localStorage
  cache.clear()
}
