
class PortfolioManager {  constructor() {
    this.isLoading = true;
    this.darkMode = this.initializeDarkMode();
    this.init();
    this.updateMetaThemeColor(); // Imposta subito il colore corretto
  }

  init() {

    document.addEventListener('DOMContentLoaded', () => {
      this.setupMobileMenu();
      this.setupSmoothScrolling();
      this.setupFormHandling();
      this.setupScrollEffects();
      this.setupIntersectionObserver();
      this.setupParticleSystem();
      this.setupPerformanceOptimizations();
      this.setupDarkModeToggle();
      
      console.log('✅ Portfolio inizializzato con successo!');
      this.hideLoader();
    });
  }

  // Setup del toggle dark mode migliorato
  setupDarkModeToggle() {
    setTimeout(() => {
      const darkModeToggle = document.getElementById('dark-mode-toggle');
      if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
          this.toggleDarkMode();
          
          // Animazione di feedback
          darkModeToggle.style.transform = 'scale(0.95)';
          setTimeout(() => {
            darkModeToggle.style.transform = 'scale(1)';
          }, 150);
        });
      }
    }, 100);
  }


  setupMobileMenu() {

    setTimeout(() => {
      const mobileMenuButton = document.getElementById("mobile-menu-button");
      const mobileMenu = document.getElementById("mobile-menu");

      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });
      }
    }, 100);
  }


  setupSmoothScrolling() {
    // The smooth scrolling is now handled by the global utility
    // This method is kept for compatibility but functionality is delegated
    setTimeout(() => {
      if (window.reinitializeSmoothScroll) {
        window.reinitializeSmoothScroll();
      }
    }, 100);
  }

  setupFormHandling() {
    setTimeout(() => {
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.addEventListener("submit", (e) => this.handleFormSubmission(e));
      }
      

      const newsletterBtn = document.querySelector("footer button");
      if (newsletterBtn) {
        newsletterBtn.addEventListener("click", (e) => this.handleNewsletterSignup(e));
      }
    }, 100);
  }

  async handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      privacy: formData.get("privacy")
    };


    const validation = this.validateFormData(data);
    if (!validation.isValid) {
      this.showNotification(validation.message, "error");
      return;
    }


    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Invio in corso...';
    submitBtn.disabled = true;

    try {

      await this.simulateFormSubmission(data);
      this.showNotification("🎉 Messaggio inviato con successo! Ti risponderò presto.", "success");
      e.target.reset();
    } catch (error) {
      this.showNotification("❌ Errore nell'invio. Riprova più tardi.", "error");
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  }

  validateFormData(data) {
    if (!data.name?.trim()) return { isValid: false, message: "Il nome è obbligatorio" };
    if (!data.email?.trim()) return { isValid: false, message: "L'email è obbligatoria" };
    if (!data.subject?.trim()) return { isValid: false, message: "L'oggetto è obbligatorio" };
    if (!data.message?.trim()) return { isValid: false, message: "Il messaggio è obbligatorio" };
    if (!data.privacy) return { isValid: false, message: "Devi accettare la privacy policy" };
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { isValid: false, message: "Formato email non valido" };
    }
    
    if (data.message.length < 10) {
      return { isValid: false, message: "Il messaggio deve essere di almeno 10 caratteri" };
    }
    
    return { isValid: true };
  }

  async simulateFormSubmission(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('📧 Form data:', data);
        resolve();
      }, 2000);
    });
  }

  handleNewsletterSignup(e) {
    e.preventDefault();
    const emailInput = e.target.previousElementSibling;
    const email = emailInput?.value?.trim();

    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.showNotification("📬 Grazie per esserti iscritto alla newsletter!", "success");
      emailInput.value = "";
    } else {
      this.showNotification("📧 Per favore, inserisci un indirizzo email valido.", "error");
    }
  }


  showNotification(message, type = "info", duration = 5000) {

    document.querySelectorAll(".notification").forEach(n => n.remove());

    const notification = document.createElement("div");
    notification.className = `notification fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl transform transition-all duration-500 translate-x-full max-w-md`;

    const styles = {
      success: "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
      error: "bg-gradient-to-r from-red-500 to-pink-600 text-white",
      info: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
    };

    const icons = {
      success: "fa-check-circle",
      error: "fa-exclamation-triangle",
      info: "fa-info-circle"
    };

    notification.className += ` ${styles[type]}`;
    notification.innerHTML = `
      <div class="flex items-start">
        <i class="fas ${icons[type]} mr-3 mt-1 text-lg"></i>
        <div class="flex-1">
          <p class="font-semibold text-sm">${message}</p>
        </div>
        <button onclick="this.closest('.notification').remove()" class="ml-3 hover:opacity-70 transition-opacity">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;

    document.body.appendChild(notification);


    requestAnimationFrame(() => {
      notification.classList.remove("translate-x-full");
    });


    setTimeout(() => {
      notification.classList.add("translate-x-full");
      setTimeout(() => notification.remove(), 500);
    }, duration);
  }


  setupScrollEffects() {
    let lastScrollTop = 0;
    let ticking = false;

    const updateNavbar = () => {
      const nav = document.querySelector("nav");
      if (!nav) return;
      
      const scrollTop = window.pageYOffset;


      if (scrollTop > 100) {
        nav.classList.add("shadow-2xl", "bg-white/95", "backdrop-blur-lg");
        nav.classList.remove("bg-white/90");
      } else {
        nav.classList.remove("shadow-2xl", "bg-white/95", "backdrop-blur-lg");
        nav.classList.add("bg-white/90");
      }


      if (scrollTop > lastScrollTop && scrollTop > 200) {
        nav.style.transform = "translateY(-100%)";
      } else {
        nav.style.transform = "translateY(0)";
      }
      
      lastScrollTop = scrollTop;
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    });
  }


  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          

          this.animateSkillBars(entry.target);
          

          this.animateCounters(entry.target);
          

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);


    setTimeout(() => {
      document.querySelectorAll(
        ".animate-slide-up, .animate-slide-left, .animate-slide-right, .skill-card, .project-card"
      ).forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        observer.observe(el);
      });
    }, 500);
  }

  animateSkillBars(element) {
    if (element.classList.contains("skill-card")) {
      const progressBar = element.querySelector('[style*="width"]');
      if (progressBar) {
        const targetWidth = progressBar.style.width;
        progressBar.style.width = "0%";
        setTimeout(() => {
          progressBar.style.transition = "width 2s cubic-bezier(0.4, 0, 0.2, 1)";
          progressBar.style.width = targetWidth;
        }, 300);
      }
    }
  }

  animateCounters(element) {
    const counters = element.querySelectorAll('[data-count]');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      const duration = 2500;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = Math.floor(current);
      }, 16);
    });
  }


  setupParticleSystem() {
    let particleCount = 0;
    const maxParticles = 8;

    const createParticle = () => {
      if (particleCount >= maxParticles) return;

      const particle = document.createElement("div");
      particle.className = "particle absolute pointer-events-none";
      particle.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: linear-gradient(45deg, #6366f1, #8b5cf6);
        border-radius: 50%;
        opacity: 0.6;
        animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
        animation-delay: ${Math.random() * 2}s;
      `;

      const hero = document.querySelector("#home");
      if (hero) {
        hero.appendChild(particle);
        particleCount++;

        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            particleCount--;
          }
        }, 8000);
      }
    };


    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInterval(createParticle, 4000);
          createParticle(); // Prima particella immediata
        }
      });
    });

    setTimeout(() => {
      const hero = document.querySelector("#home");
      if (hero) heroObserver.observe(hero);
    }, 1000);
  }


  setupPerformanceOptimizations() {

    if ('loading' in HTMLImageElement.prototype) {
      document.querySelectorAll('img[data-src]').forEach(img => {
        img.src = img.dataset.src;
      });
    }


    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://cdnjs.cloudflare.com',
      'https://cdn.tailwindcss.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });
  }


  hideLoader() {
    setTimeout(() => {
      const loader = document.querySelector('.portfolio-loader');
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
      }
      this.isLoading = false;
    }, 1200);
  }


  initializeDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
      return true;
    } else {
      document.documentElement.classList.remove('dark');
      return false;
    }
  }
  toggleDarkMode() {
    // Aggiungi classe per animazione smooth
    document.documentElement.classList.add('theme-transition');
    
    this.darkMode = !this.darkMode;
    
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    // Aggiorna il colore del tema meta
    this.updateMetaThemeColor();
    
    // Aggiorna tutti i componenti che hanno stato interno
    this.updateComponentsTheme();
    
    // Emit evento personalizzato per i componenti
    document.dispatchEvent(new CustomEvent('themeChanged', { 
      detail: { darkMode: this.darkMode } 
    }));
    
    // Rimuovi classe animazione dopo il cambio
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 400);
  }

  updateComponentsTheme() {
    // Forza il re-render dei componenti che potrebbero avere cache
    const components = document.querySelectorAll('app-navigation, app-hero, app-about, app-skills, app-certifications, app-projects, app-pcto, app-cv, app-contact');
    components.forEach(component => {
      if (component.updateTheme && typeof component.updateTheme === 'function') {
        component.updateTheme(this.darkMode);
      }
    });
  }


  updateMetaThemeColor() {
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.name = "theme-color";
      document.head.appendChild(metaThemeColor);
    }
    
    metaThemeColor.content = this.darkMode ? "#1f2937" : "#ffffff";
  }
}


const dynamicStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-20px) rotate(90deg); }
    50% { transform: translateY(-40px) rotate(180deg); }
    75% { transform: translateY(-20px) rotate(270deg); }
  }
  
  .portfolio-loader {
    position: fixed;
    inset: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s ease;
  }
  
  .loader-content {
    text-align: center;
    color: white;
  }
  
  .loader-spinner {
    width: 60px;
    height: 60px;
    border: 4px solid rgba(255,255,255,0.3);
    border-top: 4px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;


const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);


document.body.insertAdjacentHTML('afterbegin', `
  <div class="portfolio-loader">
    <div class="loader-content">
      <div class="loader-spinner"></div>
      <p class="text-lg font-semibold">Caricamento Portfolio...</p>
      <p class="text-sm opacity-75">Preparando l'esperienza ottimale</p>
    </div>
  </div>
`);


const portfolioManager = new PortfolioManager();


window.portfolioManager = portfolioManager;


document.getElementById('dark-mode-toggle')?.addEventListener('click', () => {
  portfolioManager.toggleDarkMode();
});
