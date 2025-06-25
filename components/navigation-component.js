
class NavigationComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300" 
           role="navigation" 
           aria-label="Navigazione principale">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex-shrink-0">
              <h1 class="text-2xl font-bold gradient-text" role="banner">Luca Marroni</h1>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4" role="menubar">
                <a href="#home" 
                   class="text-gray-600 dark:text-gray-300 hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10"
                   role="menuitem"
                   aria-label="Vai alla sezione Home">
                   <i class="fas fa-home mr-1" aria-hidden="true"></i>Home
                </a>
                <a href="#about" 
                   class="text-gray-600 dark:text-gray-300 hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10"
                   role="menuitem"
                   aria-label="Vai alla sezione Chi Sono">
                   <i class="fas fa-user mr-1" aria-hidden="true"></i>Chi Sono
                </a>
                <a href="#skills" 
                   class="text-gray-600 dark:text-gray-300 hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10"
                   role="menuitem"
                   aria-label="Vai alla sezione Competenze">
                   <i class="fas fa-code mr-1" aria-hidden="true"></i>Competenze
                </a>
                <a href="#certifications" 
                   class="text-gray-600 dark:text-gray-300 hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10"
                   role="menuitem"
                   aria-label="Vai alla sezione Certificazioni">
                   <i class="fas fa-certificate mr-1" aria-hidden="true"></i>Certificazioni
                </a>
                <a href="#projects" 
                   class="text-gray-600 dark:text-gray-300 hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10"
                   role="menuitem"
                   aria-label="Vai alla sezione Progetti">
                   <i class="fas fa-folder-open mr-1" aria-hidden="true"></i>Progetti
                </a>
                <a href="#pcto" 
                   class="text-gray-600 dark:text-gray-300 hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10"
                   role="menuitem"
                   aria-label="Vai alla sezione PCTO">
                   <i class="fas fa-briefcase mr-1" aria-hidden="true"></i>PCTO
                </a>
                <a href="#cv" 
                   class="text-gray-600 dark:text-gray-300 hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10"
                   role="menuitem"
                   aria-label="Vai alla sezione CV">
                   <i class="fas fa-file-alt mr-1" aria-hidden="true"></i>CV
                </a>
                <a href="#contact" 
                   class="text-gray-600 dark:text-gray-300 hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10"
                   role="menuitem"
                   aria-label="Vai alla sezione Contatti">
                   <i class="fas fa-envelope mr-1" aria-hidden="true"></i>Contatti
                </a>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <button id="preferences-toggle" 
                      class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                      aria-label="Apri preferenze"
                      title="Preferenze">
                <i class="fas fa-cog text-lg" aria-hidden="true"></i>
              </button>
              <button id="dark-mode-toggle" 
                      class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                      aria-label="Attiva/Disattiva modalità scura"
                      title="Cambia tema">
                <i class="fas fa-moon dark:hidden text-lg" aria-hidden="true"></i>
                <i class="fas fa-sun hidden dark:block text-lg" aria-hidden="true"></i>
              </button>
              <div class="md:hidden">
                <button id="mobile-menu-button" 
                        class="text-gray-600 dark:text-gray-300 hover:text-primary p-2 rounded-lg transition-colors"
                        aria-label="Apri menu mobile"
                        aria-expanded="false"
                        aria-controls="mobile-menu">
                  <i class="fas fa-bars text-xl" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div id="mobile-menu" 
             class="md:hidden hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 transition-colors duration-300"
             role="menu"
             aria-labelledby="mobile-menu-button">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" 
               class="block text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg text-base font-medium transition-all"
               role="menuitem"
               aria-label="Vai alla sezione Home">
               <i class="fas fa-home mr-2" aria-hidden="true"></i>Home
            </a>
            <a href="#about" 
               class="block text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg text-base font-medium transition-all"
               role="menuitem"
               aria-label="Vai alla sezione Chi Sono">
               <i class="fas fa-user mr-2" aria-hidden="true"></i>Chi Sono
            </a>
            <a href="#skills" 
               class="block text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg text-base font-medium transition-all"
               role="menuitem"
               aria-label="Vai alla sezione Competenze">
               <i class="fas fa-code mr-2" aria-hidden="true"></i>Competenze
            </a>
            <a href="#certifications" 
               class="block text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg text-base font-medium transition-all"
               role="menuitem"
               aria-label="Vai alla sezione Certificazioni">
               <i class="fas fa-certificate mr-2" aria-hidden="true"></i>Certificazioni
            </a>
            <a href="#projects" 
               class="block text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg text-base font-medium transition-all"
               role="menuitem"
               aria-label="Vai alla sezione Progetti">
               <i class="fas fa-folder-open mr-2" aria-hidden="true"></i>Progetti
            </a>
            <a href="#pcto" 
               class="block text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg text-base font-medium transition-all"
               role="menuitem"
               aria-label="Vai alla sezione PCTO">
               <i class="fas fa-briefcase mr-2" aria-hidden="true"></i>PCTO
            </a>
            <a href="#cv" 
               class="block text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg text-base font-medium transition-all"
               role="menuitem"
               aria-label="Vai alla sezione CV">
               <i class="fas fa-file-alt mr-2" aria-hidden="true"></i>CV
            </a>
            <a href="#contact" 
               class="block text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg text-base font-medium transition-all"
               role="menuitem"
               aria-label="Vai alla sezione Contatti">
               <i class="fas fa-envelope mr-2" aria-hidden="true"></i>Contatti
            </a>
          </div>
        </div>
      </nav>
    `;


    this.setupEventListeners();
  }

  setupEventListeners() {
    const mobileButton = this.querySelector('#mobile-menu-button');
    const mobileMenu = this.querySelector('#mobile-menu');
    const darkModeToggle = this.querySelector('#dark-mode-toggle');

    // Mobile menu toggle
    if (mobileButton && mobileMenu) {
      mobileButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Dark mode toggle
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => {
        if (window.portfolioManager) {
          window.portfolioManager.toggleDarkMode();
        }
      });
    }

    // Custom smooth scroll with 1 second duration
    const smoothScrollLinks = this.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const startPosition = window.pageYOffset;
          const targetPosition = targetElement.offsetTop; // No offset
          const distance = targetPosition - startPosition;
          const duration = 1000; // 1 second
          let start = null;

          function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          }

          function easeInOutQuad(t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
          }

          requestAnimationFrame(animation);
          
          // Close mobile menu if open
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
        }
      });
    });
  }
}


customElements.define('app-navigation', NavigationComponent);
