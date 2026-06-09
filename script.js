const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("theme-toggle");
const scrollTopButton = document.getElementById("scroll-top-btn");
const contactForm = document.getElementById("contact-form");

function toggleMenu() {
navLinks.classList.toggle("show");
}

function setupMenuButton() {
if (menuButton) {
menuButton.addEventListener("click", toggleMenu);
}
}

function smoothScroll(event) {


const href =
    event.target.getAttribute("href");

if (!href.startsWith("#")) {
    return;
}

event.preventDefault();

const target =
    document.querySelector(href);

if (target) {

    target.scrollIntoView({
        behavior: "smooth"
    });

}

navLinks.classList.remove("show");


}

function setupSmoothScrolling() {

const links =
    document.querySelectorAll(
        ".nav-links a"
    );

links.forEach(function(link) {

    link.addEventListener(
        "click",
        smoothScroll
    );

});


}

function highlightNavigation() {

const sections =
    document.querySelectorAll("section");

const links =
    document.querySelectorAll(
        ".nav-links a"
    );

let current = "";

sections.forEach(function(section) {

    const sectionTop =
        section.offsetTop;

    if (
        window.scrollY >=
        sectionTop - 200
    ) {

        current =
            section.getAttribute("id");

    }

});

links.forEach(function(link) {

    link.classList.remove("active");

    if (
        link.getAttribute("href")
        === "#" + current
    ) {

        link.classList.add("active");

    }

});


}

function setupActiveNavigation() {


window.addEventListener(
    "scroll",
    highlightNavigation
);


}

function validateEmail(email) {


const pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

return pattern.test(email);


}

function validateForm(event) {


event.preventDefault();

const name =
    document
        .getElementById("name")
        .value
        .trim();

const email =
    document
        .getElementById("email")
        .value
        .trim();

const message =
    document
        .getElementById("message")
        .value
        .trim();

const formMessage =
    document.getElementById(
        "form-message"
    );

if (
    name === "" ||
    email === "" ||
    message === ""
) {

    formMessage.textContent =
        "Please complete all fields.";

    formMessage.style.color =
        "red";

    return;
}

if (!validateEmail(email)) {

    formMessage.textContent =
        "Enter a valid email.";

    formMessage.style.color =
        "red";

    return;
}

formMessage.textContent =
    "Message sent successfully!";

formMessage.style.color =
    "green";

contactForm.reset();


}

function setupFormValidation() {


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        validateForm
    );

}


}

function showBackToTopButton() {


if (window.scrollY > 300) {

    scrollTopButton.style.display =
        "block";

} else {

    scrollTopButton.style.display =
        "none";

}


}

function scrollToTop() {


window.scrollTo({
    top: 0,
    behavior: "smooth"
});


}

function setupScrollTopButton() {


window.addEventListener(
    "scroll",
    showBackToTopButton
);

if (scrollTopButton) {

    scrollTopButton.addEventListener(
        "click",
        scrollToTop
    );

}


}

function revealSections() {


const sections =
    document.querySelectorAll(
        ".reveal"
    );

sections.forEach(function(section) {

    const top =
        section.getBoundingClientRect()
        .top;

    const screenHeight =
        window.innerHeight;

    if (top < screenHeight - 100) {

        section.classList.add(
            "active"
        );

    }

});


}

function setupRevealAnimation() {


window.addEventListener(
    "scroll",
    revealSections
);

revealSections();


}

function saveTheme(theme) {


localStorage.setItem(
    "portfolio-theme",
    theme
);


}

function enableDarkMode() {


document.body.classList.add(
    "dark-mode"
);

if (themeToggle) {
    themeToggle.textContent = "☀️";
}

saveTheme("dark");


}

function enableLightMode() {

document.body.classList.remove(
    "dark-mode"
);

if (themeToggle) {
    themeToggle.textContent = "🌙";
}

saveTheme("light");


}

function toggleTheme() {


if (
    document.body.classList.contains(
        "dark-mode"
    )
) {

    enableLightMode();

} else {

    enableDarkMode();

}


}

function loadSavedTheme() {


const savedTheme =
    localStorage.getItem(
        "portfolio-theme"
    );

if (savedTheme === "dark") {

    enableDarkMode();

} else {

    enableLightMode();

}


}

function setupThemeToggle() {


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        toggleTheme
    );

}


}

function updateFooterYear() {


const footerText =
    document.querySelector(
        ".footer p"
    );

if (footerText) {

    footerText.innerHTML =
        "&copy; " +
        new Date().getFullYear() +
        " Siyamthanda Gwamanda. All Rights Reserved.";

}


}

function initializePortfolio() {


setupMenuButton();

setupSmoothScrolling();

setupActiveNavigation();

setupFormValidation();

setupScrollTopButton();

setupRevealAnimation();

setupThemeToggle();

loadSavedTheme();

updateFooterYear();


}

initializePortfolio();
