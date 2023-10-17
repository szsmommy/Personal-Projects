document.addEventListener("DOMContentLoaded", function() {
    const form = document.forms["myForm"];
    const fnameInput = form["fname"];
    const phnumInput = form["phnum"];
    const emailInput = form["email"];
    const submitBtn = form.querySelector('input[type="submit"]');
    const successMessage = document.getElementById("successMessage");

    function validateForm(event) {
        let isValid = true;

        if (fnameInput.value.trim() === "") {
            fnameInput.style.borderColor = "red";
            isValid = false;
        } else {
            fnameInput.style.borderColor = "";
        }

        if (!phnumInput.checkValidity()) {
            phnumInput.style.borderColor = "red";
            isValid = false;
        } else {
            phnumInput.style.borderColor = "";
        }

        if (!isEmailValid(emailInput.value)) {
            emailInput.style.borderColor = "red";
            isValid = false;
        } else {
            emailInput.style.borderColor = "";
        }

        if (isValid) {
            successMessage.style.display = "block";
        } else {
            successMessage.style.display = "none";
        }

        return isValid;
    }

    function handleFormSubmit(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    }

    function isEmailValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener("submit", handleFormSubmit);

    form.addEventListener("input", function() {
        if (validateForm()) {
            submitBtn.removeAttribute("disabled");
        } else {
            submitBtn.setAttribute("disabled", "disabled");
        }
    });
});
