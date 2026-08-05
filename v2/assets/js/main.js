// =========================
// Gamermaid v2
// main.js
// =========================

// Mobile Menu Toggle
const mobileToggle = document.querySelector(".mobile-toggle");
const desktopNav = document.querySelector(".desktop-nav");

if (mobileToggle && desktopNav) {

    mobileToggle.addEventListener("click", () => {

        desktopNav.classList.toggle("mobile-open");

        mobileToggle.classList.toggle("active");

    });

}

// Sticky Navbar Shadow
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// Search

const search = document.querySelector(".search-box");

if (search) {

    search.addEventListener("keydown", function (e) {

        if (e.key !== "Enter") return;

        const value = this.value.trim().toLowerCase();

        if (!value) return;

        const pages = {

            "image": "image-studio/",

            "upscaler": "image-studio/upscaler.html",

            "converter": "image-studio/converter.html",

            "resizer": "image-studio/resizer.html",

            "compressor": "image-studio/compressor.html",

            "cropper": "image-studio/cropper.html",

            "caption": "social-media/",

            "hashtag": "social-media/",

            "youtube": "social-media/",

            "earn": "earn/",

            "news": "news/",

            "about": "about/"

        };

        for (const key in pages) {

            if (value.includes(key)) {

                window.location.href = pages[key];

                return;

            }

        }

        alert("No matching tool found.");

    });

}

// Reveal Animation

const revealItems = document.querySelectorAll(".card,.features div,.news-card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

revealItems.forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);

});

// Firebase Placeholder

const loginButton = document.querySelector(".login-btn");

if (loginButton) {

    loginButton.addEventListener("click", () => {

        alert("Firebase Google Login will be connected here.");

    });

}

console.log("✅ Gamermaid v2 Loaded");
