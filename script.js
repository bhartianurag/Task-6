document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error message containers
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    // Reset previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Message is required.";
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Form submitted successfully!";
        // Optionally reset form
        document.getElementById("contactForm").reset();
    }
});
