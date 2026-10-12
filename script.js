// ========================================================
// Kaboom's Kitchen - script.js
// WEEK 4: Client-Side Registration Validation using JavaScript
// ========================================================

// Function to validate the registration form
function validateRegistrationForm() {
    // 1. Fetch values from form input fields
    var fullName = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;

    // 2. Validate Full Name (must not be empty)
    if (fullName === "") {
        alert("Error: Please enter your full name.");
        document.getElementById("fullname").focus();
        return false;
    }

    // 3. Validate Email (must contain '@' and '.')
    var atIndex = email.indexOf("@");
    var dotIndex = email.lastIndexOf(".");
    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
        alert("Error: Please enter a valid email address (e.g., student@example.com).");
        document.getElementById("email").focus();
        return false;
    }

    // 4. Validate Phone Number (must be exactly 10 digits and only numbers)
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Error: Phone number must be exactly 10 numeric digits.");
        document.getElementById("phone").focus();
        return false;
    }

    // 5. Validate Password Length (minimum 6 characters)
    if (password.length < 6) {
        alert("Error: Password must be at least 6 characters long.");
        document.getElementById("password").focus();
        return false;
    }

    // 6. Validate Confirm Password (must match password)
    if (password !== confirmPassword) {
        alert("Error: Password and Confirm Password do not match.");
        document.getElementById("confirmpassword").focus();
        return false;
    }

    // If all checks pass
    alert("Registration Successful! Welcome to Kaboom's Kitchen, " + fullName + "!");
    return true;
}
