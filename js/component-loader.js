/**
 * Modern Component Loader
 * Replaces the old fetch-based component loading with a more efficient system
 */

class ComponentLoader {
  constructor() {
    this.loadedComponents = new Set();
    this.componentQueue = [];
    this.isLoading = false;
  }

  /**
   * Register and load components efficiently
   * @param {Array} components - Array of component objects {name, path, element}
   */
  async loadComponents(components) {
    if (this.isLoading) return;
    
    this.isLoading = true;
    
    try {
      // Load all components in parallel
      const loadPromises = components.map(component => this.loadComponent(component));
      await Promise.all(loadPromises);
      
      // Initialize components after all are loaded
      this.initializeComponents();
    } catch (error) {
      console.error('Error loading components:', error);
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Load a single component
   * @param {Object} component - Component configuration
   */
  async loadComponent({ name, path, element }) {
    if (this.loadedComponents.has(name)) return;

    try {
      // Dynamic import for better performance and code splitting
      const module = await import(path);
      
      if (module.default) {
        // If component exports a default class
        customElements.define(element, module.default);
      }
      
      this.loadedComponents.add(name);
    } catch (error) {
      console.error(`Failed to load component ${name}:`, error);
    }
  }

  /**
   * Initialize all loaded components
   */
  initializeComponents() {
    // Trigger custom event for component initialization
    document.dispatchEvent(new CustomEvent('componentsLoaded', {
      detail: { loadedComponents: Array.from(this.loadedComponents) }
    }));
  }

  /**
   * Check if all components are loaded
   */
  areAllComponentsLoaded() {
    return !this.isLoading && this.componentQueue.length === 0;
  }
}

// Global component loader instance
window.ComponentLoader = new ComponentLoader();

// Export for module usage
export default ComponentLoader;
