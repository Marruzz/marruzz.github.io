// Main Application Module
// Entry point per l'applicazione portfolio

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
  }

  async init() {
    try {
      // Initialize core systems
      await this.componentRegistry.init();
      this.themeManager.init();
      this.navigationManager.init();

      // Setup global event listeners
      this.setupGlobalEventListeners();

      // Initialize animations and effects
      this.initializeEffects();

      console.log('Portfolio App initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Portfolio App:', error);
    }
  }

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
