function togglePassword(button) {
    button.classList.toggle("showing");
    const input = button.previousElementSibling;
    input.type = input.type === "password" ? "text" : "password";
}

function redirectToHome() {
    window.location.href = "home.html";
}

document.getElementById("reset-form").addEventListener("submit", function (e) {
    e.preventDefault();
    redirectToHome();
});

document.getElementById("log-login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    redirectToHome();
});

document.getElementById("changepass-form").addEventListener("submit", function (e) {
    e.preventDefault();
    redirectToHome();
});
