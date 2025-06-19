// Componente Projects come Web Component
class ProjectsComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="projects" class="py-20 bg-gray-50 relative overflow-hidden">
        <div class="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div class="text-center mb-16 animate-fade-in">
            <span class="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i class="fas fa-rocket mr-2"></i>I miei lavori
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Progetti in Evidenza
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Una selezione dei miei progetti più significativi che dimostrano le
              mie competenze tecniche e creative
            </p>
          </div>          
          <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div class="project-card bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 group">
              <div class="relative h-64 bg-gradient-to-br from-red-500 to-orange-600 overflow-hidden">
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center text-white">
                    <i class="fas fa-car text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                    <div class="text-lg font-semibold">Officina Autoriparazioni</div>
                  </div>
                </div>
                <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <i class="fab fa-html5 text-white text-lg"></i>
                </div>
              </div>
              <div class="p-8">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-2xl font-bold text-gray-900">Marroni Autoriparazioni</h3>
                  <div class="flex space-x-2">
                    <span class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span class="text-sm text-green-600 font-semibold">Live</span>
                  </div>
                </div>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  Sito web professionale per officina meccanica specializzata in autoriparazioni. 
                  Include servizi, contatti, galleria fotografica e sistema di prenotazioni online 
                  con integrazione WhatsApp per assistenza clienti.
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-semibold">HTML5</span>
                  <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">CSS3</span>
                  <span class="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold">JavaScript</span>
                  <span class="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">Responsive</span>
                  <span class="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-semibold">Bootstrap</span>
                </div>
                <div class="flex gap-3">
                  <a href="https://marroniautoriparazioni.com" target="_blank" class="flex-1 bg-gradient-to-r from-red-500 to-orange-600 text-white text-center py-3 px-4 rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 group">
                    <i class="fas fa-external-link-alt mr-2 group-hover:animate-pulse"></i>
                    Visita Sito
                  </a>
                  <a href="#" class="flex-1 border-2 border-red-500 text-red-500 text-center py-3 px-4 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition-all duration-300">
                    <i class="fab fa-github mr-2"></i>Codice
                  </a>
                </div>
              </div>
            </div>

            <div class="project-card bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 group">
              <div class="relative h-64 bg-gradient-to-br from-indigo-600 to-purple-700 overflow-hidden">
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center text-white">
                    <i class="fas fa-dumbbell text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                    <div class="text-lg font-semibold">Gestionale Palestra</div>
                  </div>
                </div>
                <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <i class="fab fa-angular text-white text-lg"></i>
                </div>
                <div class="absolute bottom-4 left-4 flex gap-2">
                  <span class="bg-green-500/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    <i class="fas fa-users mr-1"></i>Multi-user
                  </span>
                  <span class="bg-blue-500/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    <i class="fas fa-mobile-alt mr-1"></i>Mobile
                  </span>
                </div>
              </div>
              <div class="p-8">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-2xl font-bold text-gray-900">FitManager Pro</h3>
                  <div class="flex space-x-2">
                    <span class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                    <span class="text-sm text-blue-600 font-semibold">In Sviluppo</span>
                  </div>
                </div>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  Sistema completo per gestione palestre con controllo accessi, gestione utenti, 
                  corsi e abbonamenti. Include dashboard analytics, notifiche push e app mobile 
                  per clienti e staff.
                </p>
                
                <div class="mb-6">
                  <h4 class="text-sm font-semibold text-gray-900 mb-3">Funzionalità Principali:</h4>
                  <div class="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div><i class="fas fa-check text-green-500 mr-1"></i>Controllo accessi</div>
                    <div><i class="fas fa-check text-green-500 mr-1"></i>Gestione abbonamenti</div>
                    <div><i class="fas fa-check text-green-500 mr-1"></i>Calendario corsi</div>
                    <div><i class="fas fa-check text-green-500 mr-1"></i>Dashboard analytics</div>
                    <div><i class="fas fa-check text-green-500 mr-1"></i>App mobile</div>
                    <div><i class="fas fa-check text-green-500 mr-1"></i>Pagamenti online</div>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-semibold">Angular</span>
                  <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">TypeScript</span>
                  <span class="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">Node.js</span>
                  <span class="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-semibold">SQL Server</span>
                  <span class="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-semibold">REST API</span>
                </div>
                <div class="flex gap-3">
                  <a href="https://github.com/Marruzz/palestra-angular" target="_blank" class="flex-1 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center py-3 px-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-800 transition-all duration-300 group">
                    <i class="fab fa-github mr-2 group-hover:animate-pulse"></i>Codice
                  </a>
                  <a href="#" class="flex-1 border-2 border-indigo-600 text-indigo-600 text-center py-3 px-4 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300">
                    <i class="fas fa-play mr-2"></i>Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-16 text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-8">Prossimi Progetti</h3>
            <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border-2 border-dashed border-gray-300 hover:border-primary transition-colors group">
                <i class="fas fa-shopping-cart text-blue-500 text-4xl mb-4 group-hover:scale-110 transition-transform"></i>
                <h4 class="font-bold text-gray-900 mb-2">E-Commerce Platform</h4>
                <p class="text-sm text-gray-600">Sistema completo di vendita online con gestione inventario</p>
                <div class="mt-3 flex flex-wrap gap-1 justify-center">
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">React</span>
                  <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Node.js</span>
                </div>
              </div>
              <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border-2 border-dashed border-gray-300 hover:border-primary transition-colors group">
                <i class="fas fa-brain text-purple-500 text-4xl mb-4 group-hover:scale-110 transition-transform"></i>
                <h4 class="font-bold text-gray-900 mb-2">AI Learning Assistant</h4>
                <p class="text-sm text-gray-600">Assistente intelligente per supporto allo studio</p>
                <div class="mt-3 flex flex-wrap gap-1 justify-center">
                  <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Python</span>
                  <span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">TensorFlow</span>
                </div>
              </div>
              <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border-2 border-dashed border-gray-300 hover:border-primary transition-colors group">
                <i class="fas fa-mobile-alt text-green-500 text-4xl mb-4 group-hover:scale-110 transition-transform"></i>
                <h4 class="font-bold text-gray-900 mb-2">Task Manager Mobile</h4>
                <p class="text-sm text-gray-600">App mobile per gestione produttività e task</p>
                <div class="mt-3 flex flex-wrap gap-1 justify-center">
                  <span class="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">.NET MAUI</span>
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">C#</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    this.setupEventListeners();
  }

  setupEventListeners() {
    console.log("Projects component loaded");
  }
}

// Registra il componente
customElements.define("app-projects", ProjectsComponent);
