// =========================================================
//  scripts.js — Extracted from code.html
//  Academic Institution Website
// =========================================================

// ---------------------------------------------------------
// 1. Reveal-on-Scroll
//    Adds the class "active" to any .reveal element when it
//    enters the viewport (threshold 10 %).
// ---------------------------------------------------------
const reveals = document.querySelectorAll('.reveal');
const observerOptions = { threshold: 0.1 };

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

reveals.forEach(reveal => revealObserver.observe(reveal));


// ---------------------------------------------------------
// 2. Animated Counter
//    Counts from 0 up to data-target over 2 000 ms when the
//    element enters the viewport.  Appends "+" for values
//    greater than 1 000.
// ---------------------------------------------------------
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter  = entry.target;
            const target   = +counter.getAttribute('data-target');
            const duration = 2000;                        // ms
            const startTime = performance.now();

            const updateCounter = (currentTime) => {
                const elapsed      = currentTime - startTime;
                const progress     = Math.min(elapsed / duration, 1);
                const currentCount = Math.floor(progress * target);

                counter.textContent = currentCount + (target > 1000 ? '+' : '');

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            };

            requestAnimationFrame(updateCounter);
            counterObserver.unobserve(counter);   // run once per element
        }
    });
}, observerOptions);

counters.forEach(counter => counterObserver.observe(counter));
