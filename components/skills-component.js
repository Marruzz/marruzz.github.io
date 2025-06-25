class SkillsComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="skills" class="py-20 bg-gray-50 relative overflow-hidden">
        
        <div class="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-accent/10 to-pink-500/10 rounded-full blur-3xl"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div class="text-center mb-16 animate-fade-in">
            <span class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i class="fas fa-code mr-2"></i>Le mie competenze
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stack Tecnologico
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full mb-6"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologie e linguaggi con cui lavoro quotidianamente per creare
              soluzioni innovative
            </p>
          </div>          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-group">
            
            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group animate-slide-up animate-stagger-1">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-orange-400 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-html5 text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">HTML5</h3>
                <p class="text-primary font-semibold text-lg">2+ anni di esperienza</p>
                <div class="text-sm text-gray-500 mt-1">Semantic HTML, Accessibility</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl">
                <p class="text-sm text-gray-700">Sviluppo di strutture semantiche complesse, ottimizzazione per SEO e accessibilità. Usato in tutti i miei progetti web.</p>
              </div>
            </div>            
            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group animate-slide-up animate-stagger-2">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-css3-alt text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">CSS3</h3>
                <p class="text-primary font-semibold text-lg">2+ anni di esperienza</p>
                <div class="text-sm text-gray-500 mt-1">Flexbox, Grid, Animations</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl">
                <p class="text-sm text-gray-700">Creazione di layout responsive complessi, animazioni CSS avanzate e sistemi di design coerenti. Competenza con Tailwind CSS.</p>
              </div>
            </div>

            
            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group animate-slide-up animate-stagger-3">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-yellow-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-js-square text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">JavaScript</h3>
                <p class="text-primary font-semibold text-lg">2+ anni di esperienza</p>
                <div class="text-sm text-gray-500 mt-1">ES6+, DOM, Async/Await</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl">
                <p class="text-sm text-gray-700">Sviluppo di applicazioni web interattive, manipolazione del DOM, API REST e Web Components. Usato in ScacchiJS e progetti portfolio.</p>
              </div>
            </div>

            
            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group animate-slide-up animate-stagger-4">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-node-js text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">Node.js</h3>
                <p class="text-primary font-semibold text-lg">1 anno di esperienza</p>
                <div class="text-sm text-gray-500 mt-1">Express, NPM, REST APIs</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl">
                <p class="text-sm text-gray-700">Sviluppo di API REST, gestione pacchetti NPM e configurazione di server per applicazioni web. Utilizzato per backend di progetti personali.</p>
              </div>
            </div>

            
            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group animate-slide-up animate-stagger-5">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-red-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-angular text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">Angular</h3>
                <p class="text-primary font-semibold text-lg">1+ anno di esperienza</p>
                <div class="text-sm text-gray-500 mt-1">Components, Services, RxJS</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl">
                <p class="text-sm text-gray-700">Sviluppo di applicazioni SPA complesse con architettura a componenti, gestione stato e servizi. Usato in Investment Calculator e LuxtorAngular.</p>
              </div>
            </div>

            
            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group animate-slide-up animate-stagger-6">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-python text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">Python</h3>
                <p class="text-primary font-semibold text-lg">1 anno di esperienza</p>
                <div class="text-sm text-gray-500 mt-1">OOP, Libraries, Automation</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl">
                <p class="text-sm text-gray-700">Programmazione orientata agli oggetti, utilizzo di librerie per data analysis e automazione di task ripetitivi. Usato per progetti scolastici.</p>
              </div>
            </div>

            
            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-purple-600 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-microsoft text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">C#</h3>
                <p class="text-primary font-semibold text-lg">2+ anni di esperienza</p>
                <div class="text-sm text-gray-500 mt-1">OOP, LINQ, Async/Await</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl">
                <p class="text-sm text-gray-700">Sviluppo di applicazioni desktop e mobile con .NET ecosystem. Competenza in programmazione asincrona e pattern MVVM. Linguaggio principale per progetti scolastici.</p>
              </div>
            </div>

            
            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-indigo-600 to-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-desktop text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">WPF</h3>
                <p class="text-primary font-semibold text-lg">1 anno di esperienza</p>
                <div class="text-sm text-gray-500 mt-1">XAML, MVVM, Data Binding</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl">
                <p class="text-sm text-gray-700">Sviluppo di applicazioni desktop Windows con interfacce moderne. Competenza in pattern MVVM e data binding per UI responsive.</p>
              </div>
            </div>

              <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-pink-600 to-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-mobile-alt text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">.NET MAUI</h3>
                <p class="text-primary font-semibold text-lg">2+ anni di esperienza</p>
                <div class="text-sm text-gray-500 mt-1">Cross-platform, Mobile Apps</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl">
                <p class="text-sm text-gray-700">Sviluppo di applicazioni mobile cross-platform per Android e iOS. Competenza avanzata dimostrata nel progetto MajoContinentalMAUI per la gestione alberghiera.</p>
              </div>
            </div>

            <!-- PHP Skill Card -->
            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-php text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">PHP</h3>
                <p class="text-primary font-semibold text-lg">6 mesi di esperienza</p>
                <div class="text-sm text-gray-500 mt-1">OOP, Laravel, MySQL</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl">
                <p class="text-sm text-gray-700">Sviluppo di applicazioni web server-side con PHP moderno, gestione database MySQL e prime esperienze con framework Laravel.</p>
              </div>
            </div>
          </div>

          
          <div class="mt-16">
            <h3 class="text-2xl font-bold text-center text-gray-900 mb-8">
              Altri Strumenti & Tecnologie
            </h3>            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              <div class="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group">
                <i class="fab fa-github text-gray-800 text-3xl mb-2 group-hover:scale-110 transition-transform"></i>
                <div class="text-sm font-semibold text-gray-700">GitHub</div>
              </div>
              <div class="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group">
                <i class="fas fa-database text-blue-600 text-3xl mb-2 group-hover:scale-110 transition-transform"></i>
                <div class="text-sm font-semibold text-gray-700">MySQL</div>
              </div>
              <div class="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group">
                <i class="fas fa-code text-blue-500 text-3xl mb-2 group-hover:scale-110 transition-transform"></i>
                <div class="text-sm font-semibold text-gray-700">VS Code</div>
              </div>
              <div class="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group">
                <i class="fas fa-wind text-cyan-500 text-3xl mb-2 group-hover:scale-110 transition-transform"></i>
                <div class="text-sm font-semibold text-gray-700">Tailwind CSS</div>
              </div>
              <div class="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group">
                <i class="fab fa-microsoft text-blue-600 text-3xl mb-2 group-hover:scale-110 transition-transform"></i>
                <div class="text-sm font-semibold text-gray-700">Visual Studio</div>
              </div>              <div class="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group">
                <i class="fas fa-server text-green-600 text-3xl mb-2 group-hover:scale-110 transition-transform"></i>
                <div class="text-sm font-semibold text-gray-700">SQL Server</div>
              </div>
              <div class="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group">
                <i class="fas fa-laptop-code text-purple-600 text-3xl mb-2 group-hover:scale-110 transition-transform"></i>
                <div class="text-sm font-semibold text-gray-700">JetBrains Rider</div>
              </div>
              <div class="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group">
                <i class="fas fa-code text-orange-600 text-3xl mb-2 group-hover:scale-110 transition-transform"></i>
                <div class="text-sm font-semibold text-gray-700">PhpStorm</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    
    
    // Non più necessario gestire le animazioni delle progress bar
    console.log('Skills component loaded successfully');
  }
}


customElements.define('app-skills', SkillsComponent);
