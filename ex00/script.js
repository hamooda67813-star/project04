
const themeButton = document.getElementById("theme-button");
const body = document.body;

themeButton.addEventListener("click", function () {
    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {
        themeButton.textContent = "Dark Theme";
    } else {
        themeButton.textContent = "Light Theme";
    }
});

// Update the footer year
const footer = document.querySelector("footer p");
footer.textContent = `© ${new Date().getFullYear()} Mohammed Haitham`;

// Contact form validation
const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        event.preventDefault();
        alert("Please fill in all fields.");
    } else {
        alert("Your message is being submitted!");
    }
});
