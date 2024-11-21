// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Lightbox for Image Galleries
document.querySelectorAll('.gallery a').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const imgSrc = this.getAttribute("href");
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${imgSrc}" alt="${this.querySelector("img").alt}">
                <span class="close">&times;</span>
            </div>
        `;
        document.body.appendChild(lightbox);

        lightbox.querySelector(".close").addEventListener("click", () => {
            document.body.removeChild(lightbox);
        });
    });
});

// Image Hover Effects for Showcasing Details (handled in CSS)
// Skill Progress Bars Animation
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        let progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
});

// Scroll-Triggered Animations for Section Headings
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
});

sections.forEach((section) => observer.observe(section));

// Sticky Navigation Shrink on Scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

$(document).ready(function() {
    $("#toggleButton").click(function() {
      $("#content").slideToggle();
    });
  });