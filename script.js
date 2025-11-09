// script.js - shared helper for page navigation and mobile toggle

document.addEventListener('DOMContentLoaded', function () {
    // Highlight active nav link based on current file
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const allLinks = document.querySelectorAll('.nav-link, .dropdown-content a');
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        const linkFile = href.split('/').pop();
        // treat index.html and empty path as home
        if (linkFile === path || (linkFile === '' && (path === '' || path === 'index.html'))) {
            link.classList.add('active');
        }
    });

    // Mobile menu toggle (safe-guarded)
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function () {
            const isFlex = getComputedStyle(navMenu).display === 'flex';
            navMenu.style.display = isFlex ? 'none' : 'flex';
        });
    }
});
