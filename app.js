import { ComponentRegistry } from './src/core/ComponentRegistry.js';
import { ThemeManager } from './src/core/ThemeManager.js';
import { NavigationManager } from './src/core/NavigationManager.js';

// Import components
import './src/components/HeroComponent.js';
import './src/components/AboutComponent.js';
import './src/components/SkillsComponent.js';
import './src/components/ProjectsComponent.js';
import './src/components/ContactComponent.js';
import './src/components/NavigationComponent.js';
import './src/components/PCTOComponent.js';
import './src/components/CVComponent.js';
import './src/components/CertificationsComponent.js';
import './src/components/ProjectCardComponent.js';

class PortfolioApp {
  constructor() {
    this.componentRegistry = new ComponentRegistry();
    this.themeManager = new ThemeManager();
    this.navigationManager = new NavigationManager();
    this.isLoading = true;
    this.darkMode = this.initializeDarkMode();
  }

  // Merged functionality from script.js
  initializeDarkMode() {
    const saved = localStorage.getItem('portfolioDarkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  async init() {
    try {
      // Initialize core systems (from app.js)
      await this.componentRegistry.init();
      this.themeManager.init();
      this.navigationManager.init();

      // Setup all functionality (from script.js)
      this.setupMobileMenu();
      this.setupSmoothScrolling();
      this.setupFormHandling();
      this.setupScrollEffects();
      this.setupIntersectionObserver();
      this.setupParticleSystem();
      this.setupPerformanceOptimizations();
      this.setupDarkModeToggle();

      // Setup global event listeners
      this.setupGlobalEventListeners();

      // Initialize animations and effects
      this.initializeEffects();

      this.hideLoader();
      this.updateMetaThemeColor();

      console.log('Portfolio App initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Portfolio App:', error);
    }
  }

  // === Methods from script.js ===
  
  setupDarkModeToggle() {
    setTimeout(() => {
      const darkModeToggle = document.getElementById('dark-mode-toggle');
      if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
          this.toggleDarkMode();
          darkModeToggle.style.transform = 'scale(0.95)';
          setTimeout(() => {
            darkModeToggle.style.transform = 'scale(1)';
          }, 150);
        });
      }
    }, 100);
  }

  setupMobileMenu() {
    setTimeout(() => {
      const mobileMenuButton = document.getElementById("mobile-menu-button");
      const mobileMenu = document.getElementById("mobile-menu");

      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });
      }
    }, 100);
  }

  setupSmoothScrolling() {
    setTimeout(() => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          const target = document.querySelector(anchor.getAttribute("href"));
          if (target) {
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });

            const mobileMenu = document.getElementById("mobile-menu");
            if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
              mobileMenu.classList.add("hidden");
            }

            history.pushState(null, null, anchor.getAttribute("href"));
          }
        });
      });
    }, 100);
  }

  setupFormHandling() {
    setTimeout(() => {
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.addEventListener("submit", (e) => this.handleFormSubmission(e));
      }

      const newsletterBtn = document.querySelector("footer button");
      if (newsletterBtn) {
        newsletterBtn.addEventListener("click", (e) => this.handleNewsletterSignup(e));
      }
    }, 100);
  }

  setupScrollEffects() {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollEffects = () => {
      const scrollY = window.scrollY;
      const navbar = document.querySelector('nav');
      
      if (navbar) {
        if (scrollY > 100) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }

      if (scrollY > lastScrollY && scrollY > 100) {
        document.body.classList.add('scroll-down');
        document.body.classList.remove('scroll-up');
      } else if (scrollY < lastScrollY) {
        document.body.classList.add('scroll-up');
        document.body.classList.remove('scroll-down');
      }

      lastScrollY = scrollY;
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          entry.target.classList.remove('animate-out');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  setupParticleSystem() {
    // Particle system implementation
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle animation logic here...
  }

  setupPerformanceOptimizations() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('portfolioDarkMode', JSON.stringify(this.darkMode));
    this.applyDarkMode();
    this.updateMetaThemeColor();
  }

  applyDarkMode() {
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  updateMetaThemeColor() {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', this.darkMode ? '#1e293b' : '#ffffff');
    }
  }

  hideLoader() {
    setTimeout(() => {
      const loader = document.getElementById('loading-indicator');
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 300);
      }
      this.isLoading = false;
    }, 1000);
  }

  handleFormSubmission(e) {
    e.preventDefault();
    // Form handling logic
    console.log('Form submitted');
  }

  handleNewsletterSignup(e) {
    e.preventDefault();
    // Newsletter signup logic
    console.log('Newsletter signup');
  }

  // === Original app.js methods ===
  
  setupGlobalEventListeners() {
    // Handle page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Pause animations when page is hidden
        document.body.classList.add('page-hidden');
      } else {
        // Resume animations when page is visible
        document.body.classList.remove('page-hidden');
      }
    });

    // Handle scroll events for animations
    window.addEventListener('scroll', this.throttle(() => {
      this.handleScrollAnimations();
    }, 16)); // ~60fps
  }

  handleScrollAnimations() {
    const scrollY = window.scrollY;
    const elements = document.querySelectorAll('[data-scroll]');
    
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible && !element.classList.contains('animated')) {
        element.classList.add('animated');
      }
    });
  }

  initializeEffects() {
    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-left, .animate-slide-right, .animate-zoom-in').forEach(el => {
      observer.observe(el);
    });
  }

  // Utility function for throttling
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const app = new PortfolioApp();
    app.init();
  });
} else {
  const app = new PortfolioApp();
  app.init();
}

// Export for potential external use
window.PortfolioApp = PortfolioApp;
