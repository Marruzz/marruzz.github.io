document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }
    
    // Navigation Scroll Effect
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.style.padding = '15px 50px';
            nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.padding = '20px 50px';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
        
        // Optional: Animate sections when they come into view
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('visible');
            }
        });
    });
    
    // Smooth Scrolling for Anchor Links
    const navLinksAll = document.querySelectorAll('.nav-links a, .footer-links a, .cta-button');
    
    navLinksAll.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is pointing to an anchor on the same page
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Get offset for fixed header
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    // Smooth scroll
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL without page reload
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
    
    // Hide navigation when clicking outside on mobile
    document.addEventListener('click', function(e) {
        const nav = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        
        if (nav && nav.classList.contains('active') && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.hamburger')) {
            nav.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        }
    });
    
    // Quote Slider
    let currentQuote = 0;
    const quotes = document.querySelectorAll('.quote');
    const totalQuotes = quotes.length;
    
    if (quotes.length > 1) {
        // Hide all quotes except the first one
        for (let i = 1; i < totalQuotes; i++) {
            quotes[i].style.display = 'none';
        }
        
        // Auto-slide quotes
        setInterval(function() {
            quotes[currentQuote].style.opacity = '0';
            
            setTimeout(function() {
                quotes[currentQuote].style.display = 'none';
                currentQuote = (currentQuote + 1) % totalQuotes;
                quotes[currentQuote].style.display = 'block';
                
                setTimeout(function() {
                    quotes[currentQuote].style.opacity = '1';
                }, 100);
            }, 500);
        }, 5000);
    }
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Simple validation
            if (nameInput.value.trim() === '' || 
                emailInput.value.trim() === '' || 
                messageInput.value.trim() === '') {
                alert('Please fill in all fields');
                return;
            }
            
            // Display success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            
            // Replace form with success message
            contactForm.innerHTML = '';
            contactForm.appendChild(successMessage);
        });
    }
    
    // Newsletter Subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                // In a real application, you would send the email to a server
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter your email address.');
            }
        });
    }
    
    // Animation for Timeline Items
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
    
    // Animation for Cards
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .timeline-item, .card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .timeline-item.animate, .card.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .quote {
            transition: opacity 0.5s ease;
        }
        
        .hamburger.toggle .line1 {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.toggle .line2 {
            opacity: 0;
        }
        
        .hamburger.toggle .line3 {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    `;
    document.head.appendChild(style);
});