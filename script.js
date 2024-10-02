var pass = document.getElementById("password");
var msg = document.getElementById("message");
var strength = document.getElementById("strength");
var arrow = document.querySelector("button[type='submit']");

arrow.addEventListener("click", function () {
    if (pass.value.length === 0) {
        alert("Tip💡: Add UPPERCASE, lowercase, numbers, and symbols for a more secure password.");
    } else if (!checkPasswordComplexity(pass.value)) {
        alert("🙅🏻‍♀️Password seems weak. Include UPPERCASE, lowercase, numbers, and special characters.");
    } else if (pass.value.length < 4) {
        alert("🙅🏻‍♀️Password is too weak, try making it more secure.");
    } else if (pass.value.length >= 6 && pass.value.length < 12) {
        alert("📈Password is medium, consider adding more complexity.");
    } else if (pass.value.length >= 12 && checkPasswordComplexity(pass.value)) {
        alert("✅Strong Password updated.");
    }
});

// Function to check password complexity
function checkPasswordComplexity(password) {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
}

pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    // Check password complexity
    const complexity = checkPasswordComplexity(pass.value);

    if (pass.value.length < 4 || !complexity) {
        strength.innerHTML = "Weak";
        pass.style.borderColor = "#f91e16";
        msg.style.color = "#f91e16";
    } else if (pass.value.length >= 6 && pass.value.length < 12 && complexity) {
        strength.innerHTML = "Medium";
        pass.style.borderColor = "#ffa202 ";
        msg.style.color = "#ffa202 ";
    } else if (pass.value.length >= 12 && complexity) {
        strength.innerHTML = "Strong";
        pass.style.borderColor = "#39ff02";
        msg.style.color = "#39ff02";
    } else {
        strength.innerHTML = "Weak";
        pass.style.borderColor = "#f91e16";
        msg.style.color = "#f91e16";
    }
});
