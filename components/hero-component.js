
class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `      <section id="home" class="pt-16 min-h-screen flex items-center relative overflow-hidden">
        
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-300">
          <div class="particle w-2 h-2 top-20 left-20" style="animation-delay: 0s"></div>
          <div class="particle w-1 h-1 top-40 right-32" style="animation-delay: 1s"></div>
          <div class="particle w-3 h-3 bottom-40 left-40" style="animation-delay: 2s"></div>
          <div class="particle w-1 h-1 top-60 right-20" style="animation-delay: 3s"></div>
          <div class="particle w-2 h-2 bottom-60 right-60" style="animation-delay: 4s"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div class="grid lg:grid-cols-2 gap-12 items-center">            
            <div class="text-center lg:text-left animate-fade-in">
              <div class="mb-6 animate-slide-down">
                <span class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 pulse-animation">
                  👋 Benvenuto nel mio portfolio
                </span>
              </div>              <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300 animate-slide-up">
                Ciao, sono
                <span class="gradient-text typing-cursor">Luca Marroni</span>
              </h1>
              <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium transition-colors duration-300 animate-slide-up animate-stagger-1">
                Developer Full-Stack & Studente
              </p>
              <p class="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl lg:max-w-none leading-relaxed transition-colors duration-300 animate-fade-in animate-stagger-2">
                17 anni, studente dell'ITIS E.Majorana di Grugliasco con la
                passione per lo sviluppo web, le tecnologie moderne e
                l'innovazione digitale. Certificato CISCO IT Essentials.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-up animate-stagger-3">
                <a href="#projects" class="group bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:shadow-xl transform hover:-translate-y-1">
                  <i class="fas fa-rocket mr-2 group-hover:animate-bounce"></i>
                  Scopri i miei progetti
                </a>
                <a href="#contact" class="group border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <i class="fas fa-envelope mr-2"></i>
                  Contattami
                </a>
              </div>              
              <div class="flex justify-center lg:justify-start space-x-6">
                <a href="https://github.com/Marruzz/" target="_blank" class="text-gray-400 dark:text-gray-500 hover:text-primary transition-all duration-300 transform hover:scale-110">
                  <i class="fab fa-github text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/lucamarroni" target="_blank" class="text-gray-400 dark:text-gray-500 hover:text-primary transition-all duration-300 transform hover:scale-110">
                  <i class="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="https://www.instagram.com/luca.marroni._/" target="_blank" class="text-gray-400 dark:text-gray-500 hover:text-primary transition-all duration-300 transform hover:scale-110">
                  <i class="fab fa-instagram text-2xl"></i>
                </a>
                <a href="mailto:luca.marroni@hotmail.com" class="text-gray-400 dark:text-gray-500 hover:text-primary transition-all duration-300 transform hover:scale-110">
                  <i class="fas fa-envelope text-2xl"></i>
                </a>
              </div>
            </div>

            
            <div class="text-center animate-slide-left">
              <div class="relative inline-block">
                <div class="w-80 h-80 mx-auto mb-8 relative">
                  
                  <div class="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full animate-pulse-slow opacity-20"></div>
                  
                  <img src="https://placehold.co/400x400/png?text=Luca+Marroni" alt="Luca Marroni" class="w-full h-full rounded-full object-cover border-8 border-white shadow-2xl relative z-10 animate-float" />
                  
                  <div class="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg animate-bounce">
                    <i class="fas fa-code text-lg"></i>
                  </div>
                  <div class="absolute -bottom-4 -left-4 bg-accent text-white p-3 rounded-full shadow-lg animate-bounce-slow">
                    <i class="fas fa-graduation-cap text-lg"></i>
                  </div>
                </div>
              </div>
              
              <div class="grid grid-cols-3 gap-4 max-w-md mx-auto">                <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                  <div class="text-2xl font-bold text-primary">17</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Anni</div>
                </div>
                <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                  <div class="text-2xl font-bold text-primary">8+</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Linguaggi</div>
                </div>
                <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                  <div class="text-2xl font-bold text-primary">15+</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Progetti</div>
                </div>
              </div>
            </div>
          </div>
        </div>        
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" class="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors">
            <i class="fas fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </section>
    `;
  }
}


customElements.define('app-hero', HeroComponent);
