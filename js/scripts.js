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

