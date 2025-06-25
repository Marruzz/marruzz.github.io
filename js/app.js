/**
 * Main Application Entry Point
 * Single JavaScript file that manages all imports and initialization
 * Modern ES6 modules approach
 */

// Import all necessary modules
import { StaticComponentLoader } from './static-loader.js';
import { EnhancedInteractions } from './enhanced-interactions.js';
import { CSSOptimizer } from './css-optimizer.js';

// Import all components
import '../components/navigation-component.js';
import '../components/hero-component.js';
import '../components/about-component.js';
import '../components/skills-component.js';
import '../components/certifications-component.js';
import '../components/projects-component.js';
import '../components/contact-component.js';
import '../components/cv-component.js';
import '../components/pcto-component.js';
import '../components/project-card-component.js';
import '../components/preferences-modal.js';

/**
 * Main Portfolio Application Class
 */
class PortfolioApp {
  constructor() {
    this.componentLoader = new StaticComponentLoader();
    this.interactions = new EnhancedInteractions();
    this.cssOptimizer = new CSSOptimizer();
    this.isInitialized = false;
    this.darkMode = this.initializeDarkMode();
  }

  /**
   * Initialize dark mode from localStorage or system preference
   */
  initializeDarkMode() {
    const saved = localStorage.getItem('portfolioDarkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /**
   * Main initialization method
   */
  async init() {
    if (this.isInitialized) return;

    try {
      console.log('🚀 Initializing Portfolio App...');
      
      // Apply initial dark mode
      this.applyDarkMode();
      
      // Initialize CSS optimizer first for better performance
      if (this.cssOptimizer && typeof this.cssOptimizer.init === 'function') {
        this.cssOptimizer.init();
      }

      // Load all components
      await this.componentLoader.loadAllComponents();

      // Initialize enhanced interactions
      if (this.interactions && typeof this.interactions.init === 'function') {
        this.interactions.init();
      }

      // Setup application-level functionality
      this.setupGlobalEventListeners();
      this.setupAccessibility();
      this.setupPerformanceOptimizations();

      // Update theme color for mobile browsers
      this.updateMetaThemeColor();

      this.isInitialized = true;
      console.log('✅ Portfolio App initialized successfully');
      
      // Announce to screen readers
      this.announceToScreenReader('Applicazione caricata con successo');
      
    } catch (error) {
      console.error('❌ Failed to initialize Portfolio App:', error);
      this.showErrorMessage(error.message);
    }
  }

  /**
   * Setup global event listeners
   */
  setupGlobalEventListeners() {
    // Handle page visibility changes for performance
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        document.body.classList.add('page-hidden');
      } else {
        document.body.classList.remove('page-hidden');
      }
    });

    // Handle system dark mode changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('portfolioDarkMode')) {
        this.darkMode = e.matches;
        this.applyDarkMode();
        this.updateMetaThemeColor();
      }
    });

    // Handle keyboard navigation for accessibility
    document.addEventListener('keydown', (e) => {
      // Escape key behavior
      if (e.key === 'Escape') {
        // Close any open modals or menus
        const openModal = document.querySelector('[aria-modal="true"]:not(.hidden)');
        if (openModal) {
          const closeButton = openModal.querySelector('[aria-label*="Chiudi"], [data-close]');
          if (closeButton) closeButton.click();
        }

        // Close mobile menu
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          const mobileMenuButton = document.getElementById('mobile-menu-button');
          if (mobileMenuButton) {
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            mobileMenuButton.focus();
          }
        }
      }
    });

    // Handle resize events for responsive behavior
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.handleResize();
      }, 150);
    });
  }

  /**
   * Setup accessibility features
   */
  setupAccessibility() {
    // Add skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(skipLink.getAttribute('href'));
        if (target) {
          target.focus();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Enhanced focus management
    document.addEventListener('keydown', (e) => {
      // Tab navigation enhancement
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    // Announce dynamic content changes
    this.setupLiveRegionAnnouncements();
  }

  /**
   * Setup live region announcements for screen readers
   */
  setupLiveRegionAnnouncements() {
    // Create live region for announcements
    if (!document.getElementById('live-region')) {
      const liveRegion = document.createElement('div');
      liveRegion.id = 'live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
    }
  }

  /**
   * Setup performance optimizations
   */
  setupPerformanceOptimizations() {
    // Lazy load images with IntersectionObserver
    const images = document.querySelectorAll('img[data-src]');
    if (images.length > 0) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px'
      });

      images.forEach(img => imageObserver.observe(img));
    }

    // Preload critical resources
    this.preloadCriticalResources();

    // Setup resource hints
    this.setupResourceHints();
  }

  /**
   * Preload critical resources
   */
  preloadCriticalResources() {
    const criticalResources = [
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap', as: 'style' },
      { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', as: 'style' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  /**
   * Setup resource hints for better performance
   */
  setupResourceHints() {
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdnjs.cloudflare.com'
    ];

    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }

  /**
   * Handle window resize events
   */
  handleResize() {
    // Update any layout-dependent calculations
    const viewportHeight = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${viewportHeight * 0.01}px`);

    // Announce resize to components that might need it
    window.dispatchEvent(new CustomEvent('app:resize', {
      detail: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }));
  }

  /**
   * Apply dark mode styling
   */
  applyDarkMode() {
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  /**
   * Update meta theme color for mobile browsers
   */
  updateMetaThemeColor() {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', this.darkMode ? '#1e293b' : '#ffffff');
    }
  }

  /**
   * Show error message to user
   */
  showErrorMessage(message) {
    const existingError = document.querySelector('.app-error-message');
    if (existingError) existingError.remove();

    const errorDiv = document.createElement('div');
    errorDiv.className = 'app-error-message fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow-lg z-50';
    errorDiv.setAttribute('role', 'alert');
    errorDiv.innerHTML = `
      <div class="flex items-center">
        <i class="fas fa-exclamation-triangle mr-2"></i>
        <span>Errore nell'inizializzazione: ${message}</span>
        <button class="ml-4 text-red-500 hover:text-red-700" onclick="this.parentElement.parentElement.remove()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;
    
    document.body.appendChild(errorDiv);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
      if (errorDiv.parentNode) {
        errorDiv.remove();
      }
    }, 10000);
  }

  /**
   * Announce message to screen readers
   */
  announceToScreenReader(message) {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      
      // Clear after announcement
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  /**
   * Get app status for debugging
   */
  getStatus() {
    return {
      initialized: this.isInitialized,
      darkMode: this.darkMode,
      componentsLoaded: this.componentLoader ? this.componentLoader.loadedComponents.size : 0,
      timestamp: new Date().toISOString()
    };
  }
}

// Initialize app when DOM is ready or immediately if already loaded
function initializeApp() {
  const app = new PortfolioApp();
  app.init();
  
  // Make app globally available for debugging
  window.PortfolioApp = app;
  
  return app;
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Export for potential module usage
export default PortfolioApp;
