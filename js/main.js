// ===================================
// Navigation Menu Toggle
// ===================================
const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close menu when clicking on nav links
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// ===================================
// Active Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__link[href*=' + sectionId + ']')?.classList.add('active-link');
        } else {
            document.querySelector('.nav__link[href*=' + sectionId + ']')?.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ===================================
// About Tabs
// ===================================
const tabButtons = document.querySelectorAll('.tab__button');
const tabContents = document.querySelectorAll('.tab__content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('tab__button--active'));
        tabContents.forEach(content => content.classList.remove('tab__content--active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('tab__button--active');
        document.getElementById(targetTab).classList.add('tab__content--active');
    });
});

// ===================================
// Contact Form Submission (Email)
// ===================================
const form = document.getElementById('contactForm');
const msg = document.getElementById('msg');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        // Get form values
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;
        
        // Create email body
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
        
        // Open email client
        window.location.href = `mailto:Muhammedbilal367@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        
        // Show success message
        msg.innerHTML = "Opening your email client...";
        msg.style.color = '#10b981';
        msg.style.display = 'block';
        
        setTimeout(function () {
            msg.innerHTML = "";
            msg.style.display = 'none';
            form.reset();
        }, 3000);
    });
}

// ===================================
// Scroll Reveal Animation
// ===================================
function reveal() {
    const reveals = document.querySelectorAll('.project__card, .experience__card, .contact__container');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('fade-in-up');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Call once on load

// ===================================
// Header Background on Scroll
// ===================================
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// ===================================
// Smooth Scroll for Safari
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// Add CSS for scroll header
// ===================================
const style = document.createElement('style');
style.textContent = `
    .scroll-header {
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.3);
    }
    
    .active-link {
        color: var(--color-primary) !important;
    }
    
    .active-link::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

console.log('Portfolio loaded successfully! 🚀');
