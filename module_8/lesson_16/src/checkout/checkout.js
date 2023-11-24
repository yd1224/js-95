import { createMarkup } from "../templates/templateProduct";
const container = document.querySelector(".js-list");
const totalPrice = document.querySelector(".js-total-price");
const clear = document.querySelector(".js-btn");
const PRODUCT_LS_KEY = "checkout";
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];
if (products.length) {
    clear.hidden = false;
    totalPrice = products.reduce((acc, {qty, price})=>acc+=qty*price, 0 )
}

totalPrice.textContent = totalPrice ? `Total price = ${totalPrice}` : "Your basket is empty";
container.insertAdjacentHTML("beforeend", createMarkup(products));
clear.addEventListener("click", handleClick);
function handleClick(event) {
    localStorage.removeItem(PRODUCT_LS_KEY);
    window.location.href = "../index.html";
}