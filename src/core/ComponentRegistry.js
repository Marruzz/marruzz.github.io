// Component Registry - Manages all custom components
export class ComponentRegistry {
  constructor() {
    this.components = new Map();
    this.initialized = false;
  }

  async init() {
    if (this.initialized) return;
    
    // Wait for all components to be defined
    await this.waitForComponents();
    this.initialized = true;
  }

  async waitForComponents() {
    const componentSelectors = [
      'app-hero',
      'app-about', 
      'app-skills',
      'app-projects',
      'app-contact',
      'app-navigation',
      'app-pcto',
      'app-cv',
      'app-certifications',
      'project-card'
    ];

    const promises = componentSelectors.map(selector => 
      customElements.whenDefined(selector)
    );

    await Promise.all(promises);
  }

  register(name, component) {
    this.components.set(name, component);
  }

  get(name) {
    return this.components.get(name);
  }

  has(name) {
    return this.components.has(name);
  }
}
