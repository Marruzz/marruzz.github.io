// Componente Navigazione come Web Component
class NavigationComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="bg-white/90 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex-shrink-0">
              <h1 class="text-2xl font-bold gradient-text">Luca Marroni</h1>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a href="#home" class="text-gray-600 hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10">Home</a>
                <a href="#about" class="text-gray-600 hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10">Chi Sono</a>
                <a href="#skills" class="text-gray-600 hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10">Competenze</a>
                <a href="#certifications" class="text-gray-600 hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10">Certificazioni</a>
                <a href="#projects" class="text-gray-600 hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10">Progetti</a>
                <a href="#contact" class="text-gray-600 hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10">Contatti</a>
              </div>
            </div>
            <div class="md:hidden">
              <button id="mobile-menu-button" class="text-gray-600 hover:text-primary p-2 rounded-lg transition-colors">
                <i class="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Mobile menu -->
        <div id="mobile-menu" class="md:hidden hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" class="block text-gray-600 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg text-base font-medium transition-all">Home</a>
            <a href="#about" class="block text-gray-600 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg text-base font-medium transition-all">Chi Sono</a>
            <a href="#skills" class="block text-gray-600 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg text-base font-medium transition-all">Competenze</a>
            <a href="#certifications" class="block text-gray-600 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg text-base font-medium transition-all">Certificazioni</a>
            <a href="#projects" class="block text-gray-600 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg text-base font-medium transition-all">Progetti</a>
            <a href="#contact" class="block text-gray-600 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg text-base font-medium transition-all">Contatti</a>
          </div>
        </div>
      </nav>
    `;
    
    // Aggiungi gli event listener
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    const mobileButton = this.querySelector('#mobile-menu-button');
    const mobileMenu = this.querySelector('#mobile-menu');
    
    if (mobileButton && mobileMenu) {
      mobileButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }
}

// Registra il componente
customElements.define('app-navigation', NavigationComponent);
