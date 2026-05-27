class SmoothScrollUtility {
  constructor() {
    this.duration = 1500;
    this.isScrolling = false;
  }

  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

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

  initializeForContainer(container = document) {
    const internalLinks = container.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          this.scrollTo(targetElement);
          const mobileMenu = document.getElementById('mobile-menu');
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
        }
      });
    });
  }

  createScrollButton(targetId, offset = 80) {
    return `onclick="window.smoothScrollUtil.scrollTo(document.getElementById('${targetId}'), ${offset})"`;
  }
}

window.smoothScrollUtil = new SmoothScrollUtility();

function initializeSmoothScroll() {
  if (window.smoothScrollUtil) {
    window.smoothScrollUtil.initializeForContainer();
    console.log('Global smooth scroll utility initialized');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeSmoothScroll, 100);
  });
} else {
  setTimeout(initializeSmoothScroll, 100);
}

function reinitializeSmoothScroll() {
  if (window.smoothScrollUtil) {
    window.smoothScrollUtil.initializeForContainer();
  }
}

window.reinitializeSmoothScroll = reinitializeSmoothScroll;
