const products=document.querySelectorAll(".product-item");Array.prototype.forEach.call(products,t=>{let e=t.querySelector("h3 a"),r=t.querySelector(".product-item-button");t.addEventListener("mouseup",c=>{c.target===r?r.click():(e.click(),c.target.blur(),t.blur())})});