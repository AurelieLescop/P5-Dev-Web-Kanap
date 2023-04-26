
let productsLoadedInLocalStorage = JSON.parse(localStorage.getItem("cartProduct"));
console.log(productsLoadedInLocalStorage);

console.log("Hello")
console.log(JSON.parse(localStorage.getItem("cartProduct")))
console.log(productsLoadedInLocalStorage[0].quantity)

/*for (let product of productsLoadedInLocalStorage) {


}*/
