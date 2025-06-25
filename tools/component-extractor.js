class HTMLComponentExtractor {
  constructor(htmlContent) {
    this.htmlContent = htmlContent;
    this.parser = new DOMParser();
    this.doc = this.parser.parseFromString(htmlContent, 'text/html');
  }

  extractSection(sectionId) {
    const section = this.doc.querySelector(`#${sectionId}`);
    return section ? section.outerHTML : null;
  }

  extractNavigation() {
    const nav = this.doc.querySelector('nav');
    return nav ? nav.outerHTML : null;
  }

  createWebComponent(componentName, html, className) {
    return `

class ${className} extends HTMLElement {
  connectedCallback() {
    this.innerHTML = \`${html.replace(/`/g, '\\`')}\`;
    this.setupEventListeners();
  }
}


customElements.define('${componentName.toLowerCase()}', ${className});
`;
  }

  generateComponents() {
    const components = {};
    

    const nav = this.extractNavigation();
    if (nav) {
      components.navigation = this.createWebComponent('app-navigation', nav, 'NavigationComponent');
    }
    

    const sections = ['home', 'about', 'skills', 'certifications', 'projects', 'contact'];
    sections.forEach(sectionId => {
      const sectionHTML = this.extractSection(sectionId);
      if (sectionHTML) {
        const className = sectionId.charAt(0).toUpperCase() + sectionId.slice(1) + 'Component';
        const componentName = `app-${sectionId}`;
        components[sectionId] = this.createWebComponent(componentName, sectionHTML, className);
      }
    });
    
    return components;
  }
}


async function convertToComponents() {
  try {
    const response = await fetch('index.html');
    const htmlContent = await response.text();
    
    const extractor = new HTMLComponentExtractor(htmlContent);
    const components = extractor.generateComponents();
    

    Object.keys(components).forEach(key => {
      console.log(`=== ${key.toUpperCase()} COMPONENT ===`);
      console.log(components[key]);
      console.log('\n');
    });
    
    return components;
  } catch (error) {
    console.error('Errore nella conversione:', error);
  }
}


function downloadComponent(componentName, content) {
  const blob = new Blob([content], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${componentName}-component.js`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HTMLComponentExtractor, convertToComponents };
}
