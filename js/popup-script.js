const openBtn = document.querySelector(".location-feedback-button");
const feedbackPopup = document.querySelector(".feedback-popup");
const closeBtn = feedbackPopup.querySelector(".feedback-close-button");
const feedbackForm = feedbackPopup.querySelector(".feedback-popup-form");
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
        window.requestAnimationFrame( () => {
            feedbackPopup.classList.add("popup-error");
        });
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
