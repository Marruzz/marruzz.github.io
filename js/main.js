/**
 * Main Application Entry Point
 * Modern approach to component loading and initialization
 */

import ComponentLoader from './component-loader.js';

class PortfolioApp {
  constructor() {
    this.componentLoader = new ComponentLoader();
    this.isInitialized = false;
  }

  /**
   * Initialize the application
   */
  async init() {
    if (this.isInitialized) return;

    try {
      // Show loading state
      this.showLoadingState();

      // Define components to load
      const components = [
        { name: 'navigation', path: '../components/navigation-component.js', element: 'app-navigation' },
        { name: 'hero', path: '../components/hero-component.js', element: 'app-hero' },
        { name: 'about', path: '../components/about-component.js', element: 'app-about' },
        { name: 'skills', path: '../components/skills-component.js', element: 'app-skills' },
        { name: 'certifications', path: '../components/certifications-component.js', element: 'app-certifications' },
        { name: 'projects', path: '../components/projects-component.js', element: 'app-projects' },
        { name: 'contact', path: '../components/contact-component.js', element: 'app-contact' },
        { name: 'cv', path: '../components/cv-component.js', element: 'app-cv' },
        { name: 'pcto', path: '../components/pcto-component.js', element: 'app-pcto' },
        { name: 'project-card', path: '../components/project-card-component.js', element: 'app-project-card' }
      ];

      // Load all components
      await this.componentLoader.loadComponents(components);

      // Setup global event listeners
      this.setupGlobalEventListeners();

      // Hide loading state
      this.hideLoadingState();

      this.isInitialized = true;
      console.log('Portfolio app initialized successfully');
    } catch (error) {
      console.error('Failed to initialize portfolio app:', error);
      this.showErrorState();
    }
  }

  /**
   * Show loading state
   */
  showLoadingState() {
    const loader = document.createElement('div');
    loader.id = 'app-loader';
    loader.className = 'fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50';
    loader.innerHTML = `
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600">Loading portfolio...</p>
      </div>
    `;
    document.body.appendChild(loader);
  }

  /**
   * Hide loading state
   */
  hideLoadingState() {
    const loader = document.getElementById('app-loader');
    if (loader) {
      loader.remove();
    }
  }

  /**
   * Show error state
   */
  showErrorState() {
    this.hideLoadingState();
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fixed inset-0 bg-red-50 flex items-center justify-center z-50';
    errorDiv.innerHTML = `
      <div class="text-center p-8">
        <h2 class="text-2xl font-bold text-red-600 mb-4">Application Error</h2>
        <p class="text-red-700 mb-4">Sorry, there was an error loading the portfolio.</p>
        <button onclick="location.reload()" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Reload Page
        </button>
      </div>
    `;
    document.body.appendChild(errorDiv);
  }

  /**
   * Setup global event listeners
   */
  setupGlobalEventListeners() {
    // Listen for component loaded events
    document.addEventListener('componentsLoaded', (event) => {
      console.log('Components loaded:', event.detail.loadedComponents);
    });

    // Setup smooth scrolling for navigation
    document.addEventListener('click', (event) => {
      if (event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });

    // Handle intersection observer for animations
    this.setupIntersectionObserver();
  }

  /**
   * Setup intersection observer for scroll animations
   */
  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections when they're available
    setTimeout(() => {
      const sections = document.querySelectorAll('section, .component-section');
      sections.forEach(section => observer.observe(section));
    }, 1000);
  }
}

// Initialize the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const app = new PortfolioApp();
    app.init();
  });
} else {
  const app = new PortfolioApp();
  app.init();
}

// Export for global access
window.PortfolioApp = PortfolioApp;
