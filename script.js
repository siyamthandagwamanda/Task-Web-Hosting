const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");
const scrollTopButton = document.getElementById("scroll-top-btn");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

function toggleMenu() {
navLinks.classList.toggle("show");
}

function setupMenuButton() {
menuButton.addEventListener("click", toggleMenu);
}

function smoothScrollToSection(event) {


const link = event.target.closest("a");

if (!link) {
    return;
}

const href = link.getAttribute("href");

if (!href.startsWith("#")) {
    return;
}

event.preventDefault();

const targetSection =
    document.querySelector(href);

if (targetSection) {

    targetSection.scrollIntoView({
        behavior: "smooth"
    });

}

if (window.innerWidth <= 768) {
    navLinks.classList.remove("show");
}


}

function setupSmoothScrolling() {


const navigationLinks =
    document.querySelectorAll(
        '.nav-links a'
    );

navigationLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        smoothScrollToSection
    );

});


}

function highlightActiveLink() {


const sections =
    document.querySelectorAll("section");

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

let currentSection = "";

sections.forEach(function(section) {

    const sectionTop =
        section.offsetTop;

    const sectionHeight =
        section.clientHeight;

    if (
        pageYOffset >=
        sectionTop - 200
    ) {
        currentSection =
            section.getAttribute("id");
    }

});

navigationLinks.forEach(function(link) {

    link.classList.remove("active");

    const href =
        link.getAttribute("href");

    if (
        href ===
        "#" + currentSection
    ) {

        link.classList.add("active");

    }

});

}

function setupActiveNavigation() {


window.addEventListener(
    "scroll",
    highlightActiveLink
);


}

function validateEmail(email) {


const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

return emailPattern.test(email);


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
        "Please enter a valid email.";

    formMessage.style.color =
        "red";

    return;
}

if (message.length < 10) {

    formMessage.textContent =
        "Message must contain at least 10 characters.";

    formMessage.style.color =
        "red";

    return;
}

formMessage.textContent =
    "Message submitted successfully!";

formMessage.style.color =
    "green";

contactForm.reset();

}

function setupContactForm() {


contactForm.addEventListener(
    "submit",
    validateForm
);


}

function showScrollTopButton() {

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
    showScrollTopButton
);

scrollTopButton.addEventListener(
    "click",
    scrollToTop
);


}

function revealSections() {


const revealElements =
    document.querySelectorAll(
        ".section"
    );

revealElements.forEach(function(element) {

    const windowHeight =
        window.innerHeight;

    const elementTop =
        element.getBoundingClientRect().top;

    const revealPoint = 100;

    if (
        elementTop <
        windowHeight - revealPoint
    ) {

        element.classList.add("active");
        element.classList.add("reveal");

    }

});


}

function setupRevealAnimation() {

const sections =
    document.querySelectorAll(
        ".section"
    );

sections.forEach(function(section) {

    section.classList.add(
        "reveal"
    );

});

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();


}

function setupButtonHoverEffects() {


const buttons =
    document.querySelectorAll(
        ".btn"
    );

buttons.forEach(function(button) {

    button.addEventListener(
        "mouseenter",
        function() {

            button.style.transform =
                "translateY(-4px)";

        }
    );

    button.addEventListener(
        "mouseleave",
        function() {

            button.style.transform =
                "translateY(0)";

        }
    );

});


}

function displayCurrentYear() {

const footer =
    document.querySelector(
        ".footer p"
    );

const currentYear =
    new Date().getFullYear();

footer.innerHTML =
    "&copy; " +
    currentYear +
    " Siyamthanda Gwamanda. All Rights Reserved.";


}

function initializePortfolio() {


setupMenuButton();

setupSmoothScrolling();

setupActiveNavigation();

setupContactForm();

setupScrollTopButton();

setupRevealAnimation();

setupButtonHoverEffects();

displayCurrentYear();


}

initializePortfolio();
