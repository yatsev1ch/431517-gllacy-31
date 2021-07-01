const products = document.querySelectorAll(".product-item");  
Array.prototype.forEach.call(products, product => {  
    let link = product.querySelector("h3 a");
    let productButton = product.querySelector(".product-item-button");
    product.addEventListener("mouseup", (evt) => {
        if (evt.target === productButton) {
            productButton.click();
        } else {
            link.click();
            evt.target.blur();
            product.blur();
        }
    });
});








  



