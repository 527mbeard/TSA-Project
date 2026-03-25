const navbar = document.getElementById("navbar");
const showPoint = 700; // how far user must scroll

window.addEventListener("scroll", () => {
    if (window.scrollY > showPoint) {
        navbar.classList.add("show");
    } else {
        navbar.classList.remove("show");
    }
});

const form = document.getElementById("resourceForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        link: document.getElementById("link").value,
        description: document.getElementById("description").value,
        resourceContact: document.getElementById("resourceContact").value,
        submitterContact: document.getElementById("submitterContact").value
    };

    console.log("Submitted Data:", data);

    successMessage.textContent = "Resource submitted successfully!";
    form.reset();
});