/**
 * Enhanced User Experience & Micro-Interactions
 * Addresses UI/UX feedback for more dynamic and engaging experiences
 */

class EnhancedInteractions {
  constructor() {
    this.initializeOnLoad();
  }

  initializeOnLoad() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.init());
    } else {
      this.init();
    }
  }

  init() {
    this.setupSmoothScrolling();
    this.setupIntersectionObserver();
    this.setupPageTransitions();
    this.setupMicroInteractions();
    this.setupAccessibilityEnhancements();
    this.setupAdvancedNavigation();
    this.setupParallaxEffects();
    console.log('Enhanced Interactions initialized successfully');
  }

  /**
   * Enhanced Smooth Scrolling with Easing
   */
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        
        if (target) {
          // Enhanced smooth scroll with custom easing
          const targetPosition = target.offsetTop - 80; // Account for fixed header
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1000; // 1 second
          let start = null;

          function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          }

          function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
          }

          requestAnimationFrame(animation);
        }
      });
    });
  }

  /**
   * Advanced Intersection Observer for Animations
   */
  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add staggered animation delays
          const elements = entry.target.querySelectorAll('[class*="animate-"]');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animation-active');
            }, index * 100);
          });
          
          // Add slide-up effect to the section
          entry.target.classList.add('section-visible');
          
          // Trigger count-up animations for numbers
          this.animateNumbers(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }

  /**
   * Animate Numbers Count-Up Effect
   */
  animateNumbers(container) {
    const numbers = container.querySelectorAll('[data-count]');
    numbers.forEach(el => {
      if (el.classList.contains('counted')) return;
      
      const target = parseInt(el.dataset.count || el.textContent);
      const duration = 2000;
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current) + (el.textContent.includes('+') ? '+' : '');
      }, 16);
      
      el.classList.add('counted');
    });
  }

  /**
   * Page Transition Effects
   */
  setupPageTransitions() {
    // Smooth page load animation
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(20px)';
    
    window.addEventListener('load', () => {
      document.body.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      document.body.style.opacity = '1';
      document.body.style.transform = 'translateY(0)';
    });

    // Section transition effects
    const style = document.createElement('style');
    style.textContent = `
      section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }
      
      section.section-visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      .animation-active {
        animation-play-state: running !important;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Advanced Micro-Interactions
   */
  setupMicroInteractions() {
    // Button ripple effect
    document.querySelectorAll('button, .btn, a[class*="bg-"]').forEach(button => {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          background-color: rgba(255, 255, 255, 0.5);
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });

    // Add ripple animation keyframes
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(rippleStyle);

    // Hover sound effects (optional - can be enabled)
    this.setupHoverSounds();
  }

  /**
   * Optional Hover Sound Effects
   */
  setupHoverSounds() {
    // Create audio context for subtle UI sounds
    let audioContext;
    
    const playHoverSound = (frequency = 800, duration = 100) => {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime); // Very subtle
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration / 1000);
    };

    // Apply to interactive elements (disabled by default)
    if (localStorage.getItem('ui-sounds') === 'enabled') {
      document.querySelectorAll('button, a').forEach(el => {
        el.addEventListener('mouseenter', () => playHoverSound(600, 50));
      });
    }
  }

  /**
   * Enhanced Accessibility Features
   */
  setupAccessibilityEnhancements() {
    // Focus trap for mobile menu
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    
    if (mobileMenu && mobileMenuButton) {
      mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        
        if (!isExpanded) {
          // Focus first menu item when opened
          const firstMenuItem = mobileMenu.querySelector('a');
          if (firstMenuItem) {
            setTimeout(() => firstMenuItem.focus(), 100);
          }
        }
      });
    }

    // Keyboard navigation improvements
    document.addEventListener('keydown', (e) => {
      // Escape key closes mobile menu
      if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenuButton.focus();
      }
    });

    // Announce page changes to screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);

    // Announce section changes
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const sectionName = entry.target.querySelector('h1, h2, h3')?.textContent;
          if (sectionName) {
            announcer.textContent = `Sezione: ${sectionName}`;
          }
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('section').forEach(section => {
      sectionObserver.observe(section);
    });
  }

  /**
   * Advanced Navigation Features
   */
  setupAdvancedNavigation() {
    // Active section highlighting
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    // Add active navigation styles
    const navStyle = document.createElement('style');
    navStyle.textContent = `
      nav a.active {
        color: var(--brand-primary) !important;
        background-color: rgba(99, 102, 241, 0.1) !important;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
      }
    `;
    document.head.appendChild(navStyle);
  }

  /**
   * Subtle Parallax Effects
   */
  setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.particle, [class*="float"]');
    
    let ticking = false;
    
    function updateParallax() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      parallaxElements.forEach((el, index) => {
        const speed = (index + 1) * 0.1;
        el.style.transform = `translate3d(0, ${rate * speed}px, 0)`;
      });
      
      ticking = false;
    }
    
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
  }
}

// Initialize Enhanced Interactions
const enhancedInteractions = new EnhancedInteractions();

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EnhancedInteractions;
}
