

function togglePassword(button) {
    button.classList.toggle("showing");
    const input = button.previousElementSibling;
    input.type = input.type === "password" ? "text" : "password";
}


// #resetpass.html
function redirectToIndex() {
    const existingPassword = document.getElementById("res-password").value;
    const newPassword = document.getElementById("res-newPassword").value;

    if (!existingPassword || !newPassword) {
        alert("Please fill out all the fields.");
    } else {
        window.location.href = "index.html";
    }
}

// index.html
function redirectToHome() {
    console.log("Function redirectToHome is called.");

    const usernameElement = document.getElementsByName("Username")[0];
    const passwordElement = document.getElementById("password");

    
    const username = usernameElement ? usernameElement.value.trim() : '';
    const password = passwordElement ? passwordElement.value : '';

    if (username === "" || password === "") {
        alert("Please fill out all the fields.");
    } else {
        console.log("Redirecting to home.html");
        window.location.href = "home.html";
    }
}

// redirectToChangePassword.html
function redirectToChangePassword() {
    // alert("Function redirectToChangePassword is called.");
    const existingPassword = document.getElementById("chg-password").value;
    const newPassword = document.getElementById("chg-newPassword").value;
    const confirmPassword = document.getElementById("chg-confirmPassword").value;

    if (!existingPassword || !newPassword || !confirmPassword) {
        alert("Please fill out all the fields.");
    } else {
        console.log("Redirecting to home.html");
        window.location.href = "home.html";
    }
}

// forgotpass.html
function redirectToResetPass() {
    const emailInput = document.querySelector('input[name="email"]');
    const email = emailInput.value.trim();

    if (email === "") {
        alert("Please fill out the email field.");
    } else {
        window.location.href = "reset.html";
    }
}
