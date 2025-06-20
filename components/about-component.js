
class AboutComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="about" class="py-20 bg-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 animate-fade-in">
            <span class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i class="fas fa-user mr-2"></i>La mia storia
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Chi Sono
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div class="grid lg:grid-cols-2 gap-16 items-center">
            
            <div class="animate-slide-right">
              <h3 class="text-3xl font-bold text-gray-900 mb-6 gradient-text">
                Studente, Developer & Innovatore
              </h3>
              <p class="text-gray-600 mb-6 leading-relaxed text-lg">
                Sono <strong>Luca Marroni</strong>, ho 17 anni e sono nato nel
                2007. Studio all'<strong>ITIS E.Majorana di Grugliasco</strong>,
                dove sto approfondendo le mie conoscenze nel campo
                dell'informatica, delle telecomunicazioni e dell'elettronica.
              </p>
              <p class="text-gray-600 mb-6 leading-relaxed text-lg">
                La mia passione per la programmazione è iniziata alle scuole medie
                e da allora non ho mai smesso di esplorare nuove tecnologie. Sono
                certificato <strong>CISCO IT Essentials</strong> e lavoro
                costantemente su progetti personali per migliorare le mie
                competenze.
              </p>
              <p class="text-gray-600 mb-8 leading-relaxed text-lg">
                Mi piace creare soluzioni innovative che possano risolvere
                problemi reali, collaborare in team e condividere le mie
                conoscenze con altri giovani sviluppatori.
              </p>

              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div class="flex items-center bg-gradient-to-r from-primary/10 to-purple-600/10 p-4 rounded-xl border border-primary/20">
                  <div class="bg-primary text-white p-3 rounded-full mr-4">
                    <i class="fas fa-graduation-cap"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Formazione</h4>
                    <p class="text-sm text-gray-600">ITIS E.Majorana, Grugliasco</p>
                  </div>
                </div>
                <div class="flex items-center bg-gradient-to-r from-accent/10 to-orange-500/10 p-4 rounded-xl border border-accent/20">
                  <div class="bg-accent text-white p-3 rounded-full mr-4">
                    <i class="fas fa-certificate"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Certificazione</h4>
                    <p class="text-sm text-gray-600">CISCO IT Essentials</p>
                  </div>
                </div>
                <div class="flex items-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-xl border border-green-500/20">
                  <div class="bg-green-500 text-white p-3 rounded-full mr-4">
                    <i class="fas fa-birthday-cake"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Età</h4>
                    <p class="text-sm text-gray-600">17 anni (nato nel 2007)</p>
                  </div>
                </div>
                <div class="flex items-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 rounded-xl border border-blue-500/20">
                  <div class="bg-blue-500 text-white p-3 rounded-full mr-4">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Località</h4>
                    <p class="text-sm text-gray-600">Grugliasco, Piemonte</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div class="animate-slide-left">
              
              <div class="bg-gradient-to-br from-primary/5 to-purple-600/5 p-8 rounded-3xl border border-primary/10 shadow-xl mb-8">
                <div class="text-center mb-6">
                  <div class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-globe text-primary text-2xl"></i>
                  </div>
                  <h4 class="text-2xl font-bold text-gray-900 mb-2">Lingue Parlate</h4>
                  <p class="text-gray-600">Comunicazione globale</p>
                </div>
                <div class="space-y-6">
                  <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <div class="flex items-center">
                      <img src="https://flagcdn.com/w40/it.png" alt="Italiano" class="w-8 h-6 rounded mr-3" />
                      <span class="font-semibold text-gray-900">Italiano</span>
                    </div>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Madrelingua</span>
                  </div>
                  <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <div class="flex items-center">
                      <img src="https://flagcdn.com/w40/gb.png" alt="Inglese" class="w-8 h-6 rounded mr-3" />
                      <span class="font-semibold text-gray-900">Inglese</span>
                    </div>
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">C1</span>
                  </div>
                  <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <div class="flex items-center">
                      <img src="https://flagcdn.com/w40/fr.png" alt="Francese" class="w-8 h-6 rounded mr-3" />
                      <span class="font-semibold text-gray-900">Francese</span>
                    </div>
                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">A2</span>
                  </div>
                </div>
              </div>

              
              <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <i class="fas fa-heart text-red-500 mr-2"></i>
                  I miei interessi
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">💻 Coding</span>
                  <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">🎮 Gaming</span>
                  <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">🤖 AI/ML</span>
                  <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">🌐 Web3</span>
                  <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">📱 Mobile</span>
                  <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">🎵 Musica</span>
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
    console.log('About component loaded');
  }
}


customElements.define('app-about', AboutComponent);
