
class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="home" class="pt-16 min-h-screen flex items-center relative overflow-hidden" role="banner" aria-label="Sezione Hero - Presentazione">
        
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-300">
          <!-- Enhanced Particle System -->
          <div class="particle particle-large particle-primary w-4 h-4 top-20 left-20" style="animation-delay: 0s" aria-hidden="true"></div>
          <div class="particle particle-medium particle-secondary w-2 h-2 top-40 right-32" style="animation-delay: 1s" aria-hidden="true"></div>
          <div class="particle particle-large particle-accent w-3 h-3 bottom-40 left-40" style="animation-delay: 2s" aria-hidden="true"></div>
          <div class="particle particle-small particle-primary w-1 h-1 top-60 right-20" style="animation-delay: 3s" aria-hidden="true"></div>
          <div class="particle particle-medium particle-secondary w-2 h-2 bottom-60 right-60" style="animation-delay: 4s" aria-hidden="true"></div>
          <div class="particle particle-small particle-accent w-1 h-1 top-32 left-60" style="animation-delay: 5s" aria-hidden="true"></div>
          <div class="particle particle-large particle-primary w-3 h-3 bottom-20 right-40" style="animation-delay: 6s" aria-hidden="true"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div class="grid lg:grid-cols-2 gap-12 items-center">            
            <div class="text-center lg:text-left animate-fade-in">
              <div class="mb-6 animate-slide-down">
                <span class="inline-block glass-card bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-4 pulse-animation"
                      role="presentation"
                      aria-label="Messaggio di benvenuto">
                  <i class="fas fa-hand-wave mr-2" aria-hidden="true"></i>
                  Benvenuto nel mio portfolio
                </span>
              </div>
              
              <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300 animate-slide-up">
                Ciao, sono
                <span class="gradient-text typing-cursor block mt-2">Luca Marroni</span>
              </h1>
              
              <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium transition-colors duration-300 animate-slide-up animate-stagger-1">
                <i class="fas fa-code mr-2 text-primary" aria-hidden="true"></i>
                Developer Full-Stack & Studente
              </p>
              
              <p class="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl lg:max-w-none leading-relaxed transition-colors duration-300 animate-fade-in animate-stagger-2">
                <strong>17 anni</strong>, studente dell'<em>ITIS E.Majorana di Grugliasco</em> con la
                passione per lo sviluppo web, le tecnologie moderne e
                l'innovazione digitale. <span class="text-primary font-semibold">Certificato CISCO IT Essentials</span>.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-up animate-stagger-3">
                <a href="#projects" 
                   class="group tilt-card glass-card bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:shadow-xl transform focus:ring-4 focus:ring-primary/50"
                   aria-label="Scopri i miei progetti - Vai alla sezione progetti">
                  <i class="fas fa-rocket mr-2 group-hover:animate-bounce" aria-hidden="true"></i>
                  Scopri i miei progetti
                </a>
                <a href="#contact" 
                   class="group tilt-card glass-border border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform focus:ring-4 focus:ring-primary/50"
                   aria-label="Contattami - Vai alla sezione contatti">
                  <i class="fas fa-envelope mr-2" aria-hidden="true"></i>
                  Contattami
                </a>
              </div>              
              
              <div class="flex justify-center lg:justify-start space-x-6" role="list" aria-label="Link ai social media">
                <a href="https://github.com/Marruzz/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="text-gray-400 dark:text-gray-500 hover:text-primary transition-all duration-300 transform hover:scale-110 focus:ring-4 focus:ring-primary/50 rounded-lg p-2"
                   aria-label="Profilo GitHub di Luca Marroni - Si apre in una nuova finestra"
                   role="listitem">
                  <i class="fab fa-github text-2xl" aria-hidden="true"></i>
                  <span class="sr-only">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/lucamarroni" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="text-gray-400 dark:text-gray-500 hover:text-primary transition-all duration-300 transform hover:scale-110 focus:ring-4 focus:ring-primary/50 rounded-lg p-2"
                   aria-label="Profilo LinkedIn di Luca Marroni - Si apre in una nuova finestra"
                   role="listitem">
                  <i class="fab fa-linkedin text-2xl" aria-hidden="true"></i>
                  <span class="sr-only">LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/luca.marroni._/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="text-gray-400 dark:text-gray-500 hover:text-primary transition-all duration-300 transform hover:scale-110 focus:ring-4 focus:ring-primary/50 rounded-lg p-2"
                   aria-label="Profilo Instagram di Luca Marroni - Si apre in una nuova finestra"
                   role="listitem">
                  <i class="fab fa-instagram text-2xl" aria-hidden="true"></i>
                  <span class="sr-only">Instagram</span>
                </a>
                <a href="mailto:luca.marroni@hotmail.com" 
                   class="text-gray-400 dark:text-gray-500 hover:text-primary transition-all duration-300 transform hover:scale-110 focus:ring-4 focus:ring-primary/50 rounded-lg p-2"
                   aria-label="Invia email a Luca Marroni"
                   role="listitem">
                  <i class="fas fa-envelope text-2xl" aria-hidden="true"></i>
                  <span class="sr-only">Email</span>
                </a>
              </div>
            </div>
            
            <!-- Enhanced Profile Image Section -->
            <div class="text-center animate-slide-left">
              <div class="relative inline-block">
                <div class="w-80 h-80 mx-auto mb-8 relative">
                  <div class="gradient-border rounded-full p-1 animate-pulse-slow">
                    <div class="glass-card rounded-full overflow-hidden">
                      <img src="./assets/images/luca-marroni.png" 
                           alt="Foto profilo di Luca Marroni - Studente e Developer Full-Stack di 17 anni" 
                           class="w-full h-full object-cover tilt-card transition-all duration-500"
                           loading="eager"
                           width="320"
                           height="320">
                    </div>
                  </div>
                  
                  <!-- Floating Status Indicators -->
                  <div class="absolute -top-4 -right-4 glass-card bg-primary text-white p-3 rounded-full shadow-lg animate-bounce"
                       role="status"
                       aria-label="Indicatore: Developer Full-Stack">
                    <i class="fas fa-code text-lg" aria-hidden="true"></i>
                  </div>
                  <div class="absolute -bottom-4 -left-4 glass-card bg-accent text-white p-3 rounded-full shadow-lg animate-bounce-slow"
                       role="status"
                       aria-label="Indicatore: Studente">
                    <i class="fas fa-graduation-cap text-lg" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              
              <!-- Enhanced Stats Cards -->
              <div class="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div class="glass-card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                     role="img"
                     aria-label="Statistica: 17 anni">
                  <div class="text-2xl font-bold text-primary">17</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Anni</div>
                </div>
                <div class="glass-card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                     role="img"
                     aria-label="Statistica: 8+ linguaggi di programmazione">
                  <div class="text-2xl font-bold text-primary">8+</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Linguaggi</div>
                </div>
                <div class="glass-card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                     role="img"
                     aria-label="Statistica: 15+ progetti completati">
                  <div class="text-2xl font-bold text-primary">15+</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Progetti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" 
             class="block text-gray-400 hover:text-primary transition-colors duration-300 focus:ring-4 focus:ring-primary/50 rounded-lg p-2"
             aria-label="Scorri per vedere di più - Vai alla sezione Chi Sono">
            <i class="fas fa-chevron-down text-2xl" aria-hidden="true"></i>
            <span class="sr-only">Scorri verso il basso</span>
          </a>
        </div>
      </section>
    `;
  }
}


customElements.define('app-hero', HeroComponent);
