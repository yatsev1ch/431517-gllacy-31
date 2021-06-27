const products = document.querySelectorAll('.product-item');  
Array.prototype.forEach.call(products, product => {  
    let down, up, link = product.querySelector('h3 a');
    product.style.cursor = 'pointer';
    product.onmousedown = () => down = +new Date();
    product.onmouseup = () => {
        up = +new Date();
        if ((up - down) < 200) {
            link.click();
        }
    }
});

const feedbackPopup = document.getElementsByClassName("feedback-popup")[0];
const openBtn = document.getElementsByClassName("location-feedback-button")[0];
const closeBtn = document.getElementsByClassName("feedback-close-button")[0];

openBtn.onclick = function() {
    feedbackPopup.style.display = "block";
}
  
closeBtn.onclick = function() {
    feedbackPopup.style.display = "none";
}


