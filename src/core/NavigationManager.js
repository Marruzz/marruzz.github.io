// Navigation Manager - Handles smooth scrolling and navigation state
export class NavigationManager {
  constructor() {
    this.activeSection = 'home';
    this.sections = ['home', 'about', 'skills', 'projects', 'pcto', 'certifications', 'cv', 'contact'];
    this.scrollOffset = 80; // Offset for fixed header
  }

  init() {
    this.setupEventListeners();
    this.setupScrollSpy();
  }

  setupEventListeners() {
    // Handle navigation clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[href^="#"]');
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        this.scrollToSection(targetId);
      }
    });
  }

  scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - this.scrollOffset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Update active state immediately
      this.setActiveSection(sectionId);
    }
  }

  setupScrollSpy() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${this.scrollOffset}px 0px -50% 0px`,
        threshold: 0.1
      }
    );

    // Observe all sections
    this.sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });
  }

  setActiveSection(sectionId) {
    if (this.activeSection === sectionId) return;
    
    this.activeSection = sectionId;
    
    // Update navigation UI
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      }
    });

    // Dispatch custom event
    document.dispatchEvent(new CustomEvent('sectionChange', {
      detail: { activeSection: sectionId }
    }));
  }

  getCurrentSection() {
    return this.activeSection;
  }
}
