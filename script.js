// ================= THEME BUTTON =================

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeBtn.textContent = "☀";
    } else {
        themeBtn.textContent = "☾";
    }
});


// ================= BOOKING FORM =================

const bookingForm = document.getElementById("bookingForm");

const formMessage = document.getElementById("formMessage");


bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your table enquiry has been received.";

    bookingForm.reset();

});