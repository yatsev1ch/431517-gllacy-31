const products = document.querySelectorAll(".product-item");  
Array.prototype.forEach.call(products, product => {  
    let down, up, link = product.querySelector("h3 a");
    product.onmousedown = () => down = +new Date();
    product.onmouseup = () => {
        up = +new Date();
        if ((up - down) < 200) {
            link.click();
        }
    }
});

const feedbackPopup = document.querySelector(".feedback-popup");
const openBtn = document.querySelector(".location-feedback-button");
const closeBtn = document.querySelector(".feedback-close-button");

openBtn.addEventListener("click", (event) => {
    event.preventDefault();
    feedbackPopup.classList.add("popup-showed");
});


closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    feedbackPopup.classList.remove("popup-showed");
});
  



