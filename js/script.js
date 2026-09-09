// ==========================
// MOBILE MENU TOGGLE
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navbar.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}

// ==========================
// CLOSE MENU AFTER CLICK
// ==========================

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

// ==========================
// STICKY HEADER EFFECT
// ==========================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.background = "#08110d";

    } else {

        header.style.background = "rgba(15,23,42,.90)";

    }

});

// ==========================
// ACTIVE MENU LINK
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// PREVENT CONSOLE ERRORS
// ==========================

console.log("Portfolio Loaded Successfully");