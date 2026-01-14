function login() {
    // Get input values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Dummy credentials
    const correctEmail = "admin@gmail.com";
    const correctPassword = "12345";

    // Validation
    if (email === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }

    if (email === correctEmail && password === correctPassword) {
        alert("Login successful!");
        window.location.href = "landingPage.html";
    } else {
        alert("Invalid email or password");
    }
}
