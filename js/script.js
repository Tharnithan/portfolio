// ========================================
// PRELOADER
// ========================================

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000);
});

// ========================================
// WAIT FOR DOM TO BE READY
// ========================================

document.addEventListener('DOMContentLoaded', () => {

// ========================================
// NAVIGATION
// ========================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling & Active Link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Get target section
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Scroll to section
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu
        navMenu.classList.remove('active');
    });
});

// Update active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// TYPING ANIMATION
// ========================================

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = [
    'Mobile App Developer',
    'Software Engineer',
    'Digital Marketer',
    'Flutter Developer'
];

const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

// Start typing animation
if (typedTextSpan) {
    setTimeout(type, newTextDelay + 250);
}

// ========================================
// SKILLS PROGRESS ANIMATION
// ========================================

const skillsSection = document.getElementById('skills');
let skillsAnimated = false;

function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

// Trigger animation when skills section is in view
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !skillsAnimated) {
            animateSkills();
            skillsAnimated = true;
        }
    });
}, observerOptions);

if (skillsSection) {
    observer.observe(skillsSection);
}

// ========================================
// PORTFOLIO FILTER
// ========================================

const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                item.classList.remove('hidden');
                setTimeout(() => {
                    item.style.display = 'block';
                }, 10);
            } else {
                const category = item.getAttribute('data-category');
                if (category === filterValue) {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.display = 'block';
                    }, 10);
                } else {
                    item.classList.add('hidden');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 10);
                }
            }
        });
    });
});

// ========================================
// CONTACT FORM
// ========================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const API_URL = 'http://localhost:3000/api/contact'; // Change this to your deployed backend URL

if (!contactForm) {
    console.error('Contact form not found!');
} else {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.btn-primary');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // Send to backend
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, subject, message })
            });
            
            const data = await response.json();
            
            if (response.ok && data.success) {
                showMessage(data.message || 'Thank you! Your message has been sent successfully.', 'success');
                contactForm.reset();
            } else {
                showMessage(data.message || 'Failed to send message. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            showMessage('Failed to send message. Please try again later or contact me directly at tharni375@email.com', 'error');
        } finally {
            // Restore button state
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// ========================================
// BACK TO TOP BUTTON
// ========================================

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// AOS (Animate On Scroll) INITIALIZATION
// ========================================

AOS.init({
    duration: 1000,
    offset: 100,
    once: true,
    easing: 'ease-in-out'
});

// ========================================
// CURSOR EFFECT (Optional - Desktop only)
// ========================================

if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        .custom-cursor {
            width: 20px;
            height: 20px;
            border: 2px solid #667eea;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            transform: translate(-50%, -50%);
        }
        
        .custom-cursor.active {
            transform: translate(-50%, -50%) scale(1.5);
            background: rgba(102, 126, 234, 0.2);
        }
    `;
    document.head.appendChild(cursorStyle);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', () => {
        cursor.classList.add('active');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('active');
    });
}

// ========================================
// LAZY LOADING IMAGES
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy functions
const optimizedScroll = debounce(() => {
    // Your scroll-intensive code here
});

window.addEventListener('scroll', optimizedScroll);

// ========================================
// INTERACTIVE BACKGROUND ON MOUSE MOVE
// ========================================

if (window.innerWidth > 768) {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;
        
        // Move particles based on mouse position
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// ========================================
// PARALLAX SCROLL EFFECT
// ========================================

window.addEventListener('scroll', debounce(() => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before, .about::before');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 10));

}); // End of DOMContentLoaded

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c👋 Welcome to my portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cDesigned & Developed by Tharnithan Tharmakulasingam', 'color: #764ba2; font-size: 14px;');
console.log('%cInterested in working together? Get in touch: tharni375@email.com', 'color: #f093fb; font-size: 12px;');
