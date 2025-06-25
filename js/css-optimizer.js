/**
 * Static CSS Optimizer
 * Minifies and optimizes CSS without Node.js
 */

export class CSSOptimizer {
  constructor() {
    this.cssRules = [];
    this.unusedSelectors = new Set();
  }

  /**
   * Basic CSS minification
   */
  static minifyCSS(css) {
    return css
      // Remove comments
      .replace(/\/\*[\s\S]*?\*\//g, '')
      // Remove unnecessary whitespace
      .replace(/\s+/g, ' ')
      // Remove whitespace around special characters
      .replace(/\s*([{}:;,>+~])\s*/g, '$1')
      // Remove trailing semicolons
      .replace(/;}/g, '}')
      // Remove empty rules
      .replace(/[^{}]+{\s*}/g, '')
      // Trim
      .trim();
  }

  /**
   * Extract critical CSS for above-the-fold content
   */
  static extractCriticalCSS() {
    const criticalSelectors = [
      // Navigation
      'nav', '.nav', '[class*="nav"]',
      // Hero section
      '.hero', '[class*="hero"]', 'h1', 'h2',
      // Layout
      'body', 'html', '.container', '.flex', '.grid',
      // Utilities
      '.hidden', '.block', '.inline-block',
      // Animations
      '.animate-', '@keyframes'
    ];

    const allStylesheets = Array.from(document.styleSheets);
    let criticalCSS = '';

    allStylesheets.forEach(stylesheet => {
      try {
        const rules = Array.from(stylesheet.cssRules || []);
        rules.forEach(rule => {
          if (rule.type === CSSRule.STYLE_RULE) {
            const selector = rule.selectorText;
            if (criticalSelectors.some(critical => 
              selector.includes(critical) || selector.startsWith(critical)
            )) {
              criticalCSS += rule.cssText + '\n';
            }
          }
        });
      } catch (e) {
        // Handle CORS issues with external stylesheets
        console.warn('Cannot access stylesheet:', stylesheet.href);
      }
    });

    return this.minifyCSS(criticalCSS);
  }

  /**
   * Generate optimized CSS variables
   */
  static generateOptimizedVariables() {
    return `
      :root {
        /* Colors - Optimized palette */
        --primary: #3b82f6;
        --primary-dark: #1d4ed8;
        --secondary: #64748b;
        --accent: #06b6d4;
        --success: #10b981;
        --warning: #f59e0b;
        --error: #ef4444;
        
        /* Grays - Reduced set */
        --gray-50: #f8fafc;
        --gray-100: #f1f5f9;
        --gray-200: #e2e8f0;
        --gray-300: #cbd5e1;
        --gray-600: #475569;
        --gray-700: #334155;
        --gray-800: #1e293b;
        --gray-900: #0f172a;
        
        /* Typography - Essential only */
        --font-sans: 'Inter', system-ui, sans-serif;
        --text-xs: 0.75rem;
        --text-sm: 0.875rem;
        --text-base: 1rem;
        --text-lg: 1.125rem;
        --text-xl: 1.25rem;
        --text-2xl: 1.5rem;
        --text-3xl: 1.875rem;
        --text-4xl: 2.25rem;
        
        /* Spacing - Common values */
        --space-1: 0.25rem;
        --space-2: 0.5rem;
        --space-3: 0.75rem;
        --space-4: 1rem;
        --space-6: 1.5rem;
        --space-8: 2rem;
        --space-12: 3rem;
        --space-16: 4rem;
        
        /* Effects */
        --radius: 0.5rem;
        --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        --transition: 0.3s ease;
      }
    `;
  }

  /**
   * Create performance-optimized CSS
   */
  static createPerformanceCSS() {
    return `
      /* Performance optimizations */
      * {
        box-sizing: border-box;
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      body {
        font-family: var(--font-sans);
        font-size: var(--text-base);
        line-height: 1.6;
        color: var(--gray-800);
        background: var(--gray-50);
        margin: 0;
        padding: 0;
      }
      
      /* Critical animations */
      .animate-fade-in {
        animation: fadeIn 0.6s ease-out forwards;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      /* Layout utilities */
      .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
      .flex { display: flex; }
      .items-center { align-items: center; }
      .justify-between { justify-content: space-between; }
      .hidden { display: none; }
      .block { display: block; }
      
      /* Component base */
      .btn {
        display: inline-flex;
        align-items: center;
        padding: var(--space-3) var(--space-6);
        border-radius: var(--radius);
        font-weight: 500;
        text-decoration: none;
        transition: all var(--transition);
        cursor: pointer;
        border: none;
      }
      
      .btn-primary {
        background: var(--primary);
        color: white;
      }
      
      .btn-primary:hover {
        background: var(--primary-dark);
        transform: translateY(-1px);
      }
      
      .card {
        background: white;
        border-radius: var(--radius);
        box-shadow: var(--shadow);
        transition: all var(--transition);
        overflow: hidden;
      }
      
      .card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      }
      
      /* Responsive */
      @media (max-width: 768px) {
        .container { padding: 0 0.5rem; }
        .text-4xl { font-size: var(--text-2xl); }
        .text-3xl { font-size: var(--text-xl); }
      }
      
      /* Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
        html { scroll-behavior: auto; }
      }
      
      /* Dark mode support */
      @media (prefers-color-scheme: dark) {
        :root {
          --gray-50: #0f172a;
          --gray-800: #f1f5f9;
        }
      }
    `;
  }
}

// Auto-initialization removed - will be handled by main app
// Make available globally for debugging
window.CSSOptimizer = CSSOptimizer;
