/**
 * Unified Static Component Loader for GitHub Pages  
 * Combines static-loader.js and component-loader.js functionality
 * Modern component system without Node.js dependencies
 */

export class StaticComponentLoader {
  constructor() {
    this.loadedComponents = new Set();
    this.componentPaths = new Map();
    this.isLoading = false;
  }

  /**
   * Register component paths
   */
  registerComponents() {
    this.componentPaths.set('app-about', './components/about-component.js');
    this.componentPaths.set('app-certifications', './components/certifications-component.js');
    this.componentPaths.set('app-contact', './components/contact-component.js');
    this.componentPaths.set('app-cv', './components/cv-component.js');
    this.componentPaths.set('app-hero', './components/hero-component.js');
    this.componentPaths.set('app-navigation', './components/navigation-component.js');
    this.componentPaths.set('app-pcto', './components/pcto-component.js');
    this.componentPaths.set('app-preferences', './components/preferences-modal.js');
    this.componentPaths.set('app-project-card', './components/project-card-component.js');
    this.componentPaths.set('app-projects', './components/projects-component.js');
    this.componentPaths.set('app-skills', './components/skills-component.js');
  }

  /**
   * Load all components dynamically
   */
  async loadAllComponents() {
    if (this.isLoading) return;
    
    this.isLoading = true;
    this.showLoadingIndicator();
    
    try {
      this.registerComponents();
      
      // Load components sequentially to avoid conflicts
      for (const [componentName, path] of this.componentPaths) {
        await this.loadComponent(componentName, path);
        this.updateLoadingCounter();
      }
      
      this.hideLoadingIndicator();
      this.initializeApp();
      
    } catch (error) {
      console.error('Error loading components:', error);
      this.showErrorMessage();
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Load a single component
   */
  async loadComponent(componentName, path) {
    if (this.loadedComponents.has(componentName)) return;

    try {
      // Create script element for component
      const script = document.createElement('script');
      script.src = path;
      script.defer = true;
      
      // Return promise that resolves when script loads
      return new Promise((resolve, reject) => {
        script.onload = () => {
          this.loadedComponents.add(componentName);
          console.log(`✅ Loaded component: ${componentName}`);
          resolve();
        };
        
        script.onerror = () => {
          console.error(`❌ Failed to load component: ${componentName}`);
          reject(new Error(`Failed to load ${componentName}`));
        };
        
        document.head.appendChild(script);
      });
      
    } catch (error) {
      console.error(`Error loading component ${componentName}:`, error);
      throw error;
    }
  }

  /**
   * Update loading counter
   */
  updateLoadingCounter() {
    const counter = document.getElementById('component-counter');
    if (counter) {
      counter.textContent = this.loadedComponents.size;
    }
  }

  /**
   * Show loading indicator
   */
  showLoadingIndicator() {
    const loader = document.createElement('div');
    loader.id = 'static-loader';
    loader.className = 'fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50';
    loader.innerHTML = `
      <div class="text-center p-8">
        <div class="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto mb-6"></div>
        <h2 class="text-xl font-semibold text-gray-800 mb-2">Caricamento Portfolio</h2>
        <p class="text-gray-600">Inizializzazione componenti in corso...</p>
        <div class="mt-4 text-sm text-gray-500">
          Componenti caricati: <span id="component-counter">0</span>/${this.componentPaths.size}
        </div>
      </div>
    `;
    document.body.appendChild(loader);
  }

  /**
   * Hide loading indicator
   */
  hideLoadingIndicator() {
    const loader = document.getElementById('static-loader');
    if (loader) {
      // Smooth fade out
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.5s ease-out';
      setTimeout(() => loader.remove(), 500);
    }
  }

  /**
   * Show error message
   */
  showErrorMessage() {
    this.hideLoadingIndicator();
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fixed inset-0 bg-red-50 flex items-center justify-center z-50';
    errorDiv.innerHTML = `
      <div class="text-center p-8 max-w-md">
        <div class="text-red-600 text-6xl mb-4">⚠️</div>
        <h2 class="text-2xl font-bold text-red-800 mb-4">Errore di Caricamento</h2>
        <p class="text-red-700 mb-6">Si è verificato un errore durante il caricamento del portfolio.</p>
        <button onclick="location.reload()" 
                class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
          🔄 Ricarica Pagina
        </button>
      </div>
    `;
    document.body.appendChild(errorDiv);
  }

  /**
   * Initialize app after all components are loaded
   */
  initializeApp() {
    // Setup global event listeners
    this.setupSmoothScrolling();
    this.setupMobileMenu();
    this.setupIntersectionObserver();
    
    // Dispatch custom event
    document.dispatchEvent(new CustomEvent('portfolioReady', {
      detail: { 
        loadedComponents: Array.from(this.loadedComponents),
        loadTime: Date.now()
      }
    }));
    
    console.log('🚀 Portfolio inizializzato con successo!');
    console.log(`📦 Componenti caricati: ${this.loadedComponents.size}`);
  }

  /**
   * Setup smooth scrolling for navigation
   */
  setupSmoothScrolling() {
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
          
          // Close mobile menu if open
          const mobileMenu = document.getElementById('mobile-menu');
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
        }
      }
    });
  }

  /**
   * Setup mobile menu functionality
   */
  setupMobileMenu() {
    // Wait for navigation component to be available
    setTimeout(() => {
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');

      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }
    }, 1000);
  }

  /**
   * Setup intersection observer for scroll animations
   */
  setupIntersectionObserver() {
    if (!window.IntersectionObserver) return; // Fallback for older browsers
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          // Unobserve after animation to improve performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe sections when they become available
    setTimeout(() => {
      const sections = document.querySelectorAll('section, [class*="component"]');
      sections.forEach(section => {
        section.classList.add('opacity-0', 'translate-y-4');
        observer.observe(section);
      });
    }, 1500);
  }
}

// Auto-initialization removed - will be handled by main app
// Make available globally for debugging
window.StaticComponentLoader = StaticComponentLoader;
