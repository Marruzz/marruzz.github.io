
class AnimationManager {
  constructor() {
    this.observers = new Map();
    this.animatedElements = new Set();
    this.isInitialized = false;
    this.config = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      staggerDelay: 100,
      particleCount: 20
    };
    
    this.init();
  }

  init() {
    if (this.isInitialized) return;
    
    console.log('🎬 Inizializzazione sistema animazioni...');
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    try {
      this.setupScrollAnimations();
      this.setupHoverEffects();
      this.setupParticleSystem();
      this.setupTypewriterEffect();
      this.setupStaggeredAnimations();
      this.setupFloatingElements();
      
      this.isInitialized = true;
      console.log('✅ Sistema animazioni inizializzato con successo');
      setTimeout(() => this.triggerInitialAnimations(), 500);
      
    } catch (error) {
      console.error('❌ Errore inizializzazione animazioni:', error);
    }
  }
  setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
          this.animateElement(entry.target);
          this.animatedElements.add(entry.target);
        }
      });
    }, {
      threshold: this.config.threshold,
      rootMargin: this.config.rootMargin
    });
    const selectors = [
      '.animate-fade-in',
      '.animate-slide-up',
      '.animate-slide-down', 
      '.animate-slide-left',
      '.animate-slide-right',
      '.animate-zoom-in',
      '.animate-zoom-out',
      '.skill-card',
      '.project-card',
      '.contact-card'
    ];

    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        observer.observe(el);
      });
    });

    this.observers.set('scroll', observer);
  }

  animateElement(element) {
    const classes = element.classList;
    
    if (classes.contains('animate-fade-in')) {
      element.style.animation = 'fadeIn 1s ease-out forwards';
    } else if (classes.contains('animate-slide-up')) {
      element.style.animation = 'slideUp 0.8s ease-out forwards';
    } else if (classes.contains('animate-slide-down')) {
      element.style.animation = 'slideDown 0.8s ease-out forwards';
    } else if (classes.contains('animate-slide-left')) {
      element.style.animation = 'slideLeft 0.8s ease-out forwards';
    } else if (classes.contains('animate-slide-right')) {
      element.style.animation = 'slideRight 0.8s ease-out forwards';
    } else if (classes.contains('animate-zoom-in')) {
      element.style.animation = 'zoomIn 0.6s ease-out forwards';
    } else if (classes.contains('animate-zoom-out')) {
      element.style.animation = 'zoomOut 0.6s ease-out forwards';
    } else if (classes.contains('skill-card') || classes.contains('project-card')) {
      element.style.animation = 'slideUp 0.8s ease-out forwards';
      element.classList.add('hover-lift');
    }
    this.activateSpecialEffects(element);
  }
  setupHoverEffects() {
    document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('hover-lift', 'glow-animation');
      });
      
      card.addEventListener('mouseleave', () => {
        card.classList.remove('glow-animation');
      });
    });
    document.querySelectorAll('button, .btn, a[href]').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.classList.add('hover-grow');
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.classList.remove('hover-grow');
      });
    });
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.classList.add('hover-glow');
      });
      
      link.addEventListener('mouseleave', () => {
        link.classList.remove('hover-glow');
      });
    });
  }
  setupParticleSystem() {
    const hero = document.querySelector('#hero') || document.querySelector('.hero');
    if (!hero) return;

    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
    `;

    hero.style.position = 'relative';
    hero.appendChild(particlesContainer);
    for (let i = 0; i < this.config.particleCount; i++) {
      this.createParticle(particlesContainer, i);
    }
  }

  createParticle(container, index) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 6 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 6;
    
    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      background: linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899);
      opacity: ${Math.random() * 0.6 + 0.2};
      animation-delay: ${delay}s;
    `;
    
    container.appendChild(particle);
  }
  setupTypewriterEffect() {
    const typewriterElements = document.querySelectorAll('.typewriter, .typing-cursor');
    
    typewriterElements.forEach(element => {
      const text = element.textContent;
      const speed = 100;
      
      element.textContent = '';
      element.classList.add('typing-cursor');
      
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, speed);
    });
  }
  setupStaggeredAnimations() {
    const staggerGroups = document.querySelectorAll('.stagger-group');
    
    staggerGroups.forEach(group => {
      const children = group.children;
      
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        child.style.animationDelay = `${i * this.config.staggerDelay}ms`;
        child.classList.add('animate-fade-in');
      }
    });
  }
  setupFloatingElements() {
    const floatingElements = document.querySelectorAll('.float, .floating');
    
    floatingElements.forEach((element, index) => {
      element.classList.add('float-animation');
      element.style.animationDelay = `${index * 0.5}s`;
    });
  }
  activateSpecialEffects(element) {
    const gradientTexts = element.querySelectorAll('.gradient-text');
    gradientTexts.forEach(text => {
      text.classList.add('gradient-text');
    });
    const skillBars = element.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      const percentage = bar.dataset.percentage || '0';
      const fill = bar.querySelector('.skill-fill');
      if (fill) {
        setTimeout(() => {
          fill.style.width = percentage + '%';
        }, 300);
      }
    });
    const counters = element.querySelectorAll('.counter');
    counters.forEach(counter => {
      this.animateCounter(counter);
    });
  }
  animateCounter(element) {
    const target = parseInt(element.dataset.target) || 0;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };
    
    updateCounter();
  }
  triggerInitialAnimations() {
    const logo = document.querySelector('.logo, .brand');
    if (logo) {
      logo.classList.add('animate-zoom-in');
    }
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
      mainTitle.classList.add('animate-fade-in');
    }
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate-slide-down');
      }, index * 100);
    });
  }
  addAnimation(element, animationClass, delay = 0) {
    setTimeout(() => {
      element.classList.add(animationClass);
    }, delay);
  }

  removeAnimation(element, animationClass) {
    element.classList.remove(animationClass);
  }

  toggleAnimation(element, animationClass) {
    element.classList.toggle(animationClass);
  }
  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    this.animatedElements.clear();
    this.isInitialized = false;
  }
}
class AnimationUtils {
  static createRipple(element, event) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      background-color: rgba(255, 255, 255, 0.7);
      left: ${x - 10}px;
      top: ${y - 10}px;
      width: 20px;
      height: 20px;
    `;
    
    element.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  static createSparkle(element) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: #ffd700;
      border-radius: 50%;
      animation: sparkle 1s ease-out forwards;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
    `;
    
    element.appendChild(sparkle);
    
    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  }
}
const additionalStyles = `
  .ripple {
    pointer-events: none;
    z-index: 1000;
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes sparkle {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: scale(1) rotate(180deg);
      opacity: 0;
    }
  }
  
  .particles-container {
    z-index: 0;
  }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
let animationManager;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    animationManager = new AnimationManager();
  });
} else {
  animationManager = new AnimationManager();
}
window.AnimationManager = AnimationManager;
window.AnimationUtils = AnimationUtils;
window.animationManager = animationManager;

console.log('🎬 Sistema animazioni caricato!');
