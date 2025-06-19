// Componente Skills come Web Component
class SkillsComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="skills" class="py-20 bg-gray-50 relative overflow-hidden">
        <!-- Background decorations -->
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
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Frontend Skills -->
            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-orange-400 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-html5 text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">HTML5</h3>
                <p class="text-primary font-semibold text-lg">Livello Avanzato</p>
                <div class="text-sm text-gray-500 mt-1">Semantic HTML, Accessibility</div>
              </div>
              <div class="relative">
                <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div class="bg-gradient-to-r from-orange-400 to-red-500 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 92%"></div>
                </div>
                <span class="absolute right-0 top-4 text-sm font-semibold text-gray-600">92%</span>
              </div>
            </div>

            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-css3-alt text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">CSS3</h3>
                <p class="text-primary font-semibold text-lg">Livello Avanzato</p>
                <div class="text-sm text-gray-500 mt-1">Flexbox, Grid, Animations</div>
              </div>
              <div class="relative">
                <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div class="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 90%"></div>
                </div>
                <span class="absolute right-0 top-4 text-sm font-semibold text-gray-600">90%</span>
              </div>
            </div>

            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-yellow-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-js-square text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">JavaScript</h3>
                <p class="text-primary font-semibold text-lg">Livello Avanzato</p>
                <div class="text-sm text-gray-500 mt-1">ES6+, DOM, Async/Await</div>
              </div>
              <div class="relative">
                <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div class="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 88%"></div>
                </div>
                <span class="absolute right-0 top-4 text-sm font-semibold text-gray-600">88%</span>
              </div>
            </div>

            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-red-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-angular text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">Angular</h3>
                <p class="text-primary font-semibold text-lg">Livello Intermedio</p>
                <div class="text-sm text-gray-500 mt-1">Components, Services, RxJS</div>
              </div>
              <div class="relative">
                <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div class="bg-gradient-to-r from-red-500 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 75%"></div>
                </div>
                <span class="absolute right-0 top-4 text-sm font-semibold text-gray-600">75%</span>
              </div>
            </div>

            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-node-js text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">Node.js</h3>
                <p class="text-primary font-semibold text-lg">Livello Base</p>
                <div class="text-sm text-gray-500 mt-1">Express, NPM, REST APIs</div>
              </div>
              <div class="relative">
                <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div class="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 60%"></div>
                </div>
                <span class="absolute right-0 top-4 text-sm font-semibold text-gray-600">60%</span>
              </div>
            </div>

            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-python text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">Python</h3>
                <p class="text-primary font-semibold text-lg">Livello Intermedio</p>
                <div class="text-sm text-gray-500 mt-1">OOP, Libraries, Automation</div>
              </div>
              <div class="relative">
                <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div class="bg-gradient-to-r from-blue-600 to-indigo-700 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 70%"></div>
                </div>
                <span class="absolute right-0 top-4 text-sm font-semibold text-gray-600">70%</span>
              </div>
            </div>

            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-purple-600 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-microsoft text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">C#</h3>
                <p class="text-primary font-semibold text-lg">Livello Intermedio</p>
                <div class="text-sm text-gray-500 mt-1">OOP, LINQ, Async/Await</div>
              </div>
              <div class="relative">
                <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div class="bg-gradient-to-r from-purple-600 to-blue-700 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 72%"></div>
                </div>
                <span class="absolute right-0 top-4 text-sm font-semibold text-gray-600">72%</span>
              </div>
            </div>

            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-indigo-600 to-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-desktop text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">WPF</h3>
                <p class="text-primary font-semibold text-lg">Livello Intermedio</p>
                <div class="text-sm text-gray-500 mt-1">XAML, MVVM, Data Binding</div>
              </div>
              <div class="relative">
                <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div class="bg-gradient-to-r from-indigo-600 to-purple-700 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 68%"></div>
                </div>
                <span class="absolute right-0 top-4 text-sm font-semibold text-gray-600">68%</span>
              </div>
            </div>

            <div class="skill-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div class="text-center mb-6">
                <div class="bg-gradient-to-br from-pink-600 to-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-mobile-alt text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">.NET MAUI</h3>
                <p class="text-primary font-semibold text-lg">Livello Intermedio</p>
                <div class="text-sm text-gray-500 mt-1">Cross-platform, Mobile Apps</div>
              </div>
              <div class="relative">
                <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div class="bg-gradient-to-r from-pink-600 to-purple-700 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 65%"></div>
                </div>
                <span class="absolute right-0 top-4 text-sm font-semibold text-gray-600">65%</span>
              </div>
            </div>
          </div>

          <!-- Additional Skills -->
          <div class="mt-16">
            <h3 class="text-2xl font-bold text-center text-gray-900 mb-8">
              Altri Strumenti & Tecnologie
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              <div class="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group">
                <i class="fab fa-git-alt text-orange-500 text-3xl mb-2 group-hover:scale-110 transition-transform"></i>
                <div class="text-sm font-semibold text-gray-700">Git</div>
              </div>
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
                <i class="fab fa-bootstrap text-purple-600 text-3xl mb-2 group-hover:scale-110 transition-transform"></i>
                <div class="text-sm font-semibold text-gray-700">Bootstrap</div>
              </div>
              <div class="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group">
                <i class="fab fa-microsoft text-blue-600 text-3xl mb-2 group-hover:scale-110 transition-transform"></i>
                <div class="text-sm font-semibold text-gray-700">Visual Studio</div>
              </div>
              <div class="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group">
                <i class="fas fa-server text-green-600 text-3xl mb-2 group-hover:scale-110 transition-transform"></i>
                <div class="text-sm font-semibold text-gray-700">SQL Server</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    // Anima le barre di progresso quando il componente entra nella viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = this.querySelectorAll('.skill-card .bg-gradient-to-r');
          progressBars.forEach(bar => {
            bar.style.animation = 'none';
            bar.offsetHeight; // trigger reflow
            bar.style.animation = null;
          });
        }
      });
    });
    
    observer.observe(this);
    console.log('Skills component loaded');
  }
}

// Registra il componente
customElements.define('app-skills', SkillsComponent);
