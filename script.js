/* =========================================================
   MD. REJOAN HASAN - PORTFOLIO JAVASCRIPT
========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* ================= PRELOADER ================= */

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

        }, 500);

    });


    /* ================= HEADER ================= */

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /* ================= MOBILE MENU ================= */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (navbar.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("open");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


    /* ================= THEME ================= */

    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {

        document.body.classList.add("light");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }


    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");

        localStorage.setItem(
            "portfolio-theme",
            isLight ? "light" : "dark"
        );

        themeToggle.innerHTML = isLight
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';

    });


    /* ================= LIVE DATE & TIME ================= */

    function updateDateTime() {

        const now = new Date();

        const dateOptions = {

            weekday: "short",

            year: "numeric",

            month: "short",

            day: "numeric",

            timeZone: "Asia/Dhaka"

        };

        const timeOptions = {

            hour: "2-digit",

            minute: "2-digit",

            second: "2-digit",

            hour12: true,

            timeZone: "Asia/Dhaka"

        };

        const dateElement =
            document.getElementById("liveDate");

        const timeElement =
            document.getElementById("liveTime");

        if (dateElement) {

            dateElement.textContent =
                new Intl.DateTimeFormat(
                    "en-US",
                    dateOptions
                ).format(now);

        }

        if (timeElement) {

            timeElement.textContent =
                new Intl.DateTimeFormat(
                    "en-US",
                    timeOptions
                ).format(now);

        }

    }

    updateDateTime();

    setInterval(updateDateTime, 1000);


    /* ================= CURRENT YEAR ================= */

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* ================= ACTIVE NAV ================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 160;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });


    /* ================= COUNTERS ================= */

    const counters =
        document.querySelectorAll("[data-count]");

    let counterStarted = false;

    function startCounters() {

        if (counterStarted) return;

        const statsSection =
            document.querySelector(".stats-section");

        const rect =
            statsSection.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {

            counterStarted = true;

            counters.forEach(counter => {

                const target =
                    Number(counter.dataset.count);

                let current = 0;

                const increment =
                    Math.max(1, Math.ceil(target / 50));

                const timer =
                    setInterval(() => {

                        current += increment;

                        if (current >= target) {

                            current = target;

                            clearInterval(timer);

                        }

                        counter.textContent =
                            current + "+";

                    }, 25);

            });

        }

    }

    window.addEventListener(
        "scroll",
        startCounters
    );

    startCounters();


    /* ================= PROJECT FILTER ================= */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectCards =
        document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const filter =
                button.dataset.filter;

            projectCards.forEach(card => {

                const category =
                    card.dataset.category;

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.classList.remove("hidden");

                } else {

                    card.classList.add("hidden");

                }

            });

        });

    });


    /* ================= SCROLL REVEAL ================= */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".about-grid, " +
            ".timeline-item, " +
            ".service-card, " +
            ".project-card, " +
            ".skill-column, " +
            ".why-card, " +
            ".certificate-card, " +
            ".education-card, " +
            ".contact-grid"
        );


    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: .12
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* ================= BACK TO TOP ================= */

    const backTop =
        document.getElementById("backTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });


    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    /* ================= CONTACT FORM ================= */

    const contactForm =
        document.getElementById("contactForm");

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const subject =
            document.getElementById("subject").value;

        const message =
            document.getElementById("message").value;


        const emailAddress =
            "your-email@example.com";


        const mailSubject =
            encodeURIComponent(
                subject + " - Portfolio Contact"
            );


        const mailBody =
            encodeURIComponent(

                `Name: ${name}\n` +

                `Email: ${email}\n\n` +

                `Message:\n${message}`

            );


        window.location.href =
            `mailto:${emailAddress}` +
            `?subject=${mailSubject}` +
            `&body=${mailBody}`;

    });


    /* ================= IMAGE FALLBACK ================= */

    document.querySelectorAll("img").forEach(image => {

        image.addEventListener("error", () => {

            image.style.background =
                "linear-gradient(135deg,#6c63ff,#00d4ff)";

            image.style.objectFit = "cover";

        });

    });


});