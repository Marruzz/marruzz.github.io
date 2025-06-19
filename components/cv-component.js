// Componente CV come Web Component
class CVComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="cv" class="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
        <!-- Background decorations -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/5 to-pink-500/5 rounded-full blur-3xl"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div class="text-center mb-16 animate-fade-in">
            <span class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i class="fas fa-file-alt mr-2"></i>Curriculum Vitae
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Il Mio CV
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>            <p class="text-xl text-gray-600 dark:text-gray-100 mt-6 max-w-3xl mx-auto transition-colors duration-300">
              Scarica o visualizza il mio curriculum vitae completo per conoscere 
              nel dettaglio la mia formazione, competenze ed esperienze.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">            <!-- CV Italiano -->
            <div class="animate-slide-right">
              <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div class="bg-gradient-to-r from-green-500 to-red-500 p-6">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <img src="https://flagcdn.com/w40/it.png" alt="Italiano" class="w-10 h-7 rounded mr-4" />
                      <div>
                        <h3 class="text-2xl font-bold text-white">CV Italiano</h3>
                        <p class="text-white/90">Curriculum Vitae Completo</p>
                      </div>
                    </div>
                    <div class="bg-white/20 p-3 rounded-full">
                      <i class="fas fa-file-pdf text-white text-2xl"></i>
                    </div>
                  </div>
                </div>
                
                <div class="p-8">                  <div class="space-y-4 mb-8">
                    <div class="flex items-center text-gray-600 dark:text-gray-100">
                      <i class="fas fa-language text-primary mr-3"></i>
                      <span class="dark:text-gray-100"><strong class="dark:text-white">Lingua:</strong> Italiano</span>
                    </div>
                    <div class="flex items-center text-gray-600 dark:text-gray-100">
                      <i class="fas fa-file-alt text-primary mr-3"></i>
                      <span class="dark:text-gray-100"><strong class="dark:text-white">Formato:</strong> PDF</span>
                    </div>
                    <div class="flex items-center text-gray-600 dark:text-gray-100">
                      <i class="fas fa-calendar text-primary mr-3"></i>
                      <span class="dark:text-gray-100"><strong class="dark:text-white">Ultimo aggiornamento:</strong> Dicembre 2024</span>
                    </div>
                  </div>
                  
                  <div class="space-y-4">                    <a href="CV/Luca Marroni - CV Ita.pdf" 
                       target="_blank" 
                       class="cv-download-btn cv-view-btn w-full text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                      <i class="fas fa-eye mr-2 group-hover:animate-pulse"></i>
                      Visualizza CV
                    </a>
                    
                    <a href="CV/Luca Marroni - CV Ita.pdf" 
                       download="Luca_Marroni_CV_Italiano.pdf"
                       class="cv-download-btn cv-download-outline w-full border-primary text-primary py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group">
                      <i class="fas fa-download mr-2 group-hover:animate-bounce"></i>
                      Scarica PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>            <!-- CV Inglese -->
            <div class="animate-slide-left">
              <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div class="bg-gradient-to-r from-blue-600 to-red-600 p-6">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <img src="https://flagcdn.com/w40/gb.png" alt="English" class="w-10 h-7 rounded mr-4" />
                      <div>
                        <h3 class="text-2xl font-bold text-white">English CV</h3>
                        <p class="text-white/90">Complete Curriculum Vitae</p>
                      </div>
                    </div>
                    <div class="bg-white/20 p-3 rounded-full">
                      <i class="fas fa-file-pdf text-white text-2xl"></i>
                    </div>
                  </div>
                </div>
                
                <div class="p-8">                  <div class="space-y-4 mb-8">
                    <div class="flex items-center text-gray-600 dark:text-gray-100">
                      <i class="fas fa-language text-primary mr-3"></i>
                      <span class="dark:text-gray-100"><strong class="dark:text-white">Language:</strong> English</span>
                    </div>
                    <div class="flex items-center text-gray-600 dark:text-gray-100">
                      <i class="fas fa-file-alt text-primary mr-3"></i>
                      <span class="dark:text-gray-100"><strong class="dark:text-white">Format:</strong> PDF</span>
                    </div>
                    <div class="flex items-center text-gray-600 dark:text-gray-100">
                      <i class="fas fa-calendar text-primary mr-3"></i>
                      <span class="dark:text-gray-100"><strong class="dark:text-white">Last updated:</strong> December 2024</span>
                    </div>
                  </div>
                  
                  <div class="space-y-4">                    <a href="CV/LucaMarroni_CV_Eng.pdf" 
                       target="_blank" 
                       class="cv-download-btn w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 flex items-center justify-center group">
                      <i class="fas fa-eye mr-2 group-hover:animate-pulse"></i>
                      View CV
                    </a>
                    
                    <a href="CV/LucaMarroni_CV_Eng.pdf" 
                       download="Luca_Marroni_CV_English.pdf"
                       class="cv-download-btn w-full border-2 border-blue-600 text-blue-600 py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white flex items-center justify-center group">
                      <i class="fas fa-download mr-2 group-hover:animate-bounce"></i>
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>          <!-- Summary Section -->
          <div class="mt-20 animate-fade-in">
            <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 lg:p-12 transition-colors duration-300">              <div class="text-center mb-12">
                <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  <i class="fas fa-star text-yellow-500 mr-2"></i>
                  Punti Salienti del CV
                </h3>                <p class="text-gray-600 dark:text-gray-100 text-lg transition-colors duration-300">
                  I miei principali risultati e competenze in sintesi
                </p>
              </div>

              <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center group">
                  <div class="bg-gradient-to-br from-primary/10 to-purple-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i class="fas fa-graduation-cap text-primary text-2xl"></i>
                  </div>                  <h4 class="font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Formazione</h4>
                  <p class="text-gray-600 dark:text-gray-100 text-sm transition-colors duration-300">ITIS E.Majorana<br>Informatica & Telecomunicazioni</p>
                </div>

                <div class="text-center group">
                  <div class="bg-gradient-to-br from-accent/10 to-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i class="fas fa-certificate text-accent text-2xl"></i>
                  </div>                  <h4 class="font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Certificazioni</h4>
                  <p class="text-gray-600 dark:text-gray-100 text-sm transition-colors duration-300">CISCO IT Essentials<br>Competenze Tecniche</p>
                </div>

                <div class="text-center group">
                  <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i class="fas fa-code text-green-500 text-2xl"></i>
                  </div>                  <h4 class="font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Competenze</h4>
                  <p class="text-gray-600 dark:text-gray-100 text-sm transition-colors duration-300">JavaScript, Angular<br>.NET MAUI, Python</p>
                </div>

                <div class="text-center group">
                  <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i class="fas fa-project-diagram text-blue-500 text-2xl"></i>
                  </div>                  <h4 class="font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Progetti</h4>
                  <p class="text-gray-600 dark:text-gray-100 text-sm transition-colors duration-300">Portfolio Diversificato<br>Soluzioni Innovative</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Call to Action -->
          <div class="mt-16 text-center animate-fade-in">
            <div class="bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-8 text-white">              <h3 class="text-2xl font-bold mb-4 text-white">
                <i class="fas fa-handshake mr-2"></i>
                Interessato a collaborare?
              </h3>
              <p class="text-xl mb-6 opacity-90 text-white">
                Scarica il mio CV e non esitare a contattarmi per opportunità di lavoro o collaborazioni!
              </p>
              <a href="#contact" 
                 class="inline-block bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
                <i class="fas fa-envelope mr-2"></i>
                Contattami Ora
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
    
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    // Aggiungi event listeners per tracking dei download
    const downloadLinks = this.querySelectorAll('a[download]');
    downloadLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const fileName = e.target.closest('a').getAttribute('download');
        console.log(`CV Download: ${fileName}`);
        
        // Qui potresti aggiungere analytics se necessario
        // gtag('event', 'download', {
        //   event_category: 'CV',
        //   event_label: fileName
        // });
      });
    });

    // Smooth scroll per i link interni
    const internalLinks = this.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    console.log('CV component loaded');
  }
}

// Registra il componente
customElements.define('app-cv', CVComponent);
