// Componente Certifications come Web Component
class CertificationsComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="certifications" class="py-20 bg-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 animate-fade-in">
            <span class="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i class="fas fa-certificate mr-2"></i>Riconoscimenti
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certificazioni & Attestati
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-accent to-orange-500 mx-auto rounded-full mb-6"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Certificazioni ufficiali che validano le mie competenze tecniche
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- CISCO IT Essentials -->
            <div class="group bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div class="relative z-10">
                <div class="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i class="fas fa-network-wired text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3 text-center">CISCO IT Essentials</h3>
                <p class="text-blue-700 font-semibold text-center mb-4">Certificazione Ufficiale</p>
                <div class="bg-white/80 backdrop-blur-sm p-4 rounded-xl mb-4">
                  <ul class="text-sm text-gray-700 space-y-2">
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Hardware del computer</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Sistemi operativi</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Networking basics</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Sicurezza informatica</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Troubleshooting</li>
                  </ul>
                </div>
                <div class="text-center">
                  <span class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Anno: 2024</span>
                </div>
              </div>
            </div>

            <!-- ECDL/ICDL -->
            <div class="group bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-200 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div class="relative z-10">
                <div class="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i class="fas fa-desktop text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3 text-center">ECDL/ICDL Base</h3>
                <p class="text-green-700 font-semibold text-center mb-4">Competenze Digitali</p>
                <div class="bg-white/80 backdrop-blur-sm p-4 rounded-xl mb-4">
                  <ul class="text-sm text-gray-700 space-y-2">
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Computer Essentials</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Online Essentials</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Word Processing</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Spreadsheets</li>
                  </ul>
                </div>
                <div class="text-center">
                  <span class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Anno: 2023</span>
                </div>
              </div>
            </div>

            <!-- Cambridge English C1 -->
            <div class="group bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-200 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div class="relative z-10">
                <div class="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i class="fas fa-globe text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3 text-center">Cambridge CAE Advanced</h3>
                <p class="text-purple-700 font-semibold text-center mb-4">Inglese Livello C1</p>
                <div class="bg-white/80 backdrop-blur-sm p-4 rounded-xl mb-4">
                  <ul class="text-sm text-gray-700 space-y-2">
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Reading & Use of English</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Writing</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Listening</li>
                    <li><i class="fas fa-check text-green-500 mr-2"></i>Speaking</li>
                  </ul>
                </div>
                <div class="text-center">
                  <span class="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">In corso</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Future Goals -->
          <div class="mt-16 text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-8">Prossimi Obiettivi</h3>
            <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div class="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-300 hover:border-primary transition-colors">
                <i class="fab fa-aws text-orange-500 text-4xl mb-4"></i>
                <h4 class="font-bold text-gray-900 mb-2">AWS Cloud Practitioner</h4>
                <p class="text-sm text-gray-600">Certificazione cloud computing</p>
              </div>
              <div class="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-300 hover:border-primary transition-colors">
                <i class="fab fa-google text-blue-500 text-4xl mb-4"></i>
                <h4 class="font-bold text-gray-900 mb-2">Google IT Support</h4>
                <p class="text-sm text-gray-600">Supporto tecnico professionale</p>
              </div>
              <div class="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-300 hover:border-primary transition-colors">
                <i class="fab fa-microsoft text-blue-600 text-4xl mb-4"></i>
                <h4 class="font-bold text-gray-900 mb-2">Microsoft Azure Fundamentals</h4>
                <p class="text-sm text-gray-600">Cloud platform Microsoft</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    console.log('Certifications component loaded');
  }
}

// Registra il componente
customElements.define('app-certifications', CertificationsComponent);
