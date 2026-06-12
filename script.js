
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("theme-toggle");
const scrollTopButton = document.getElementById("scroll-top-btn");
const contactForm = document.getElementById("contact-form");
const quoteButton = document.getElementById("quote-button");
const quoteText = document.getElementById("quote");
const typingText = document.getElementById("typing-text");


function toggleMenu() {
    navLinks.classList.toggle("show");
}


function setupMenu() {
    if (menuButton) {
        menuButton.addEventListener("click", toggleMenu);
    }
}


function smoothScroll(event) {

    const href = event.target.getAttribute("href");

    if (!href.startsWith("#")) {
        return;
    }

    event.preventDefault();

    const targetSection = document.querySelector(href);

    if (targetSection) {

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

    }

    navLinks.classList.remove("show");
}


function setupSmoothScrolling() {

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {

        link.addEventListener(
            "click",
            smoothScroll
        );

    });

}


function highlightNavigation() {

    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".nav-links a");

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        if (
            window.scrollY >= sectionTop - 200
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    links.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
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


function saveTheme(theme) {

    localStorage.setItem(
        "portfolio-theme",
        theme
    );

}


function enableDarkMode() {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

    saveTheme("dark");

}


function enableLightMode() {

    document.body.classList.remove("dark-mode");

    themeToggle.textContent = "🌙";

    saveTheme("light");

}


function toggleTheme() {

    if (
        document.body.classList.contains("dark-mode")
    ) {

        enableLightMode();

    } else {

        enableDarkMode();

    }

}


function loadTheme() {

    const savedTheme =
        localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {

        enableDarkMode();

    } else {

        enableLightMode();

    }

}


function setupTheme() {

    themeToggle.addEventListener(
        "click",
        toggleTheme
    );

}

const message =
    "Turning curiosity into code. Building my path to becoming a Full Stack Developer.";

let index = 0;


function typeText() {

    if (index < message.length) {

        typingText.textContent +=
            message.charAt(index);

        index++;

        setTimeout(typeText, 50);

    }

}

const quotes = [

    "Every expert was once a beginner.",
    "Small progress each day becomes big results.",
    "The best way to learn programming is to build.",
    "Errors are proof that you are trying.",
    "Great developers never stop learning."

];


function generateQuote() {

    const randomIndex =
        Math.floor(
            Math.random() * quotes.length
        );

    quoteText.textContent =
        quotes[randomIndex];

}


function setupQuotes() {

    quoteButton.addEventListener(
        "click",
        generateQuote
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
        document.getElementById("name")
        .value.trim();


    const email =
        document.getElementById("email")
        .value.trim();


    const message =
        document.getElementById("message")
        .value.trim();


    const formMessage =
        document.getElementById("form-message");


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
            "Please enter a valid email address.";

        formMessage.style.color =
            "red";

        return;

    }


    formMessage.textContent =
        "Message sent successfully! 🚀";

    formMessage.style.color =
        "green";


    contactForm.reset();

}


function showScrollButton() {

    if (window.scrollY > 300) {

        scrollTopButton.style.display =
            "block";

    } else {

        scrollTopButton.style.display =
            "none";

    }

}

function setupFormValidation() {

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            validateForm
        );

    }

}

function scrollToTop() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}


function setupScrollButton() {

    window.addEventListener(
        "scroll",
        showScrollButton
    );


    scrollTopButton.addEventListener(
        "click",
        scrollToTop
    );

}


function revealSections() {

    const sections =
        document.querySelectorAll(".reveal");


    sections.forEach(function (section) {

        const position =
            section.getBoundingClientRect().top;


        if (
            position <
            window.innerHeight - 100
        ) {

            section.classList.add("active");

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


function updateFooterYear() {

    const footer =
        document.querySelector(".footer p");


    footer.innerHTML =
    `&copy; ${new Date().getFullYear()} Siyamthanda Gwamanda. All Rights Reserved.`;
}


function initializePortfolio() {

    setupMenu();

    setupSmoothScrolling();

    setupActiveNavigation();

    setupTheme();

    loadTheme();

    setupQuotes();

    setupRevealAnimation();

    setupScrollButton();

    setupFormValidation;

    typeText();

    updateFooterYear();

}


initializePortfolio();