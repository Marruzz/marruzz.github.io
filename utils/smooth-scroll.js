/**
 * Global smooth scroll utility with custom ease-in-out animation
 * Duration: 1.5 seconds
 */
class SmoothScrollUtility {
  constructor() {
    this.duration = 1500; // 1.5 seconds
    this.isScrolling = false;
  }

  /**
   * Ease-in-out cubic function for smooth animation
   */
  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  /**
   * Smooth scroll to target element with custom animation
   */
  scrollTo(targetElement, offset = 80) {
    if (this.isScrolling || !targetElement) return;
    
    this.isScrolling = true;
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / this.duration, 1);
      const easedProgress = this.easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * easedProgress);
      
      if (timeElapsed < this.duration) {
        requestAnimationFrame(animateScroll);
      } else {
        this.isScrolling = false;
      }
    };

    requestAnimationFrame(animateScroll);
  }

  /**
   * Initialize smooth scroll for all anchor links in a container
   */
  initializeForContainer(container = document) {
    const internalLinks = container.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          this.scrollTo(targetElement);
          
          // Close mobile menu if open
          const mobileMenu = document.getElementById('mobile-menu');
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
        }
      });
    });
  }

  /**
   * Create smooth scroll button with custom onclick
   */
  createScrollButton(targetId, offset = 80) {
    return `onclick="window.smoothScrollUtil.scrollTo(document.getElementById('${targetId}'), ${offset})"`;
  }
}

// Create global instance
window.smoothScrollUtil = new SmoothScrollUtility();

// Initialize for document when loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.smoothScrollUtil.initializeForContainer();
  });
} else {
  window.smoothScrollUtil.initializeForContainer();
}
