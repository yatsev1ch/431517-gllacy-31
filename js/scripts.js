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

const feedbackPopup = document.querySelector(".feedback-popup");
const openBtn = document.querySelector(".location-feedback-button");
const closeBtn = feedbackPopup.querySelector(".feedback-close-button");
const feedbackForm = feedbackPopup.querySelector(".feedback-popup-form")
const nameField = feedbackForm.querySelector(".feedback-popup-name-input");
const emailField = feedbackForm.querySelector(".feedback-popup-email-input");

const setFeedbackFormFocus = function() {
    if (!nameField.value) {
        nameField.focus();
    } else if (!emailField.value) {
        emailField.focus();
    }
}

openBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    feedbackPopup.classList.add("popup-showed");
    setFeedbackFormFocus();
});

feedbackForm.addEventListener("submit", (evt) => {
    if (!nameField.value || !emailField.value) {
        evt.preventDefault();
        feedbackPopup.classList.remove("popup-error");
        void feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("popup-error");
        setFeedbackFormFocus();
    }
});


closeBtn.addEventListener("click", () => {
    feedbackPopup.classList.remove("popup-showed");
    feedbackPopup.classList.remove("popup-error");
});

document.addEventListener("keydown", (evt) => {
    if (evt.key === "esc" || evt.key === "Escape") {
        feedbackPopup.classList.remove("popup-showed");
        feedbackPopup.classList.remove("popup-error");
    }
});




  



