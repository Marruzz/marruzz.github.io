
class ProjectsComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `      <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
        <div class="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-full blur-3xl"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div class="text-center mb-16 animate-fade-in">
            <span class="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i class="fas fa-rocket mr-2"></i>I miei lavori
            </span>            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Progetti in Evidenza
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
            <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
              Una selezione dei miei progetti più significativi che dimostrano le
              mie competenze tecniche e creative
            </p>
          </div>          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto stagger-group">
              <project-card
              title="ScacchiJS"
              description="Engine scacchistico completo sviluppato in JavaScript vanilla. Implementa validazione avanzata delle mosse (castling, en passant, promozione), algoritmo minimax per l'AI, sistema di notazione algebrica e timer personalizzabile. Gestione completa dello stato di gioco con pattern observer."
              icon="fas fa-chess"
              bg-gradient="from-amber-600 to-yellow-700"
              tech-stack="JavaScript ES6+, Canvas API, Game Logic, AI Algorithms"
              github-url="https://github.com/Marruzz/ScacchiJS"
              live-url="https://marruzz.github.io/ScacchiJS/scacchi.html"
              license="MIT License"
              status="MIT License"
              playable
              class="animate-zoom-in animate-stagger-1">
            </project-card>

            
            <project-card
              title="Investment Calculator"
              description="SPA Angular per analisi finanziarie avanzate. Implementa calcoli composti, simulazioni Monte Carlo, diversi modelli di interesse e visualizzazioni dinamiche con Chart.js. Architettura modulare con servizi dedicati per calcoli matematici e gestione stato reattiva."
              icon="fas fa-calculator"
              bg-gradient="from-red-500 to-pink-600"
              tech-stack="Angular 15+, TypeScript, Chart.js, RxJS, SCSS"
              github-url="https://github.com/Marruzz/AngularInvestmentCalculatorApp"
              license="Angular"
              status="Angular"
              class="animate-zoom-in animate-stagger-2">
            </project-card>

            
            <project-card
              title="LuxtorAngular"
              description="Sito web aziendale per Luxtor sviluppato in Angular. Include presentazione servizi, portfolio clienti, area contatti e dashboard amministrativa."
              icon="fas fa-building"
              bg-gradient="from-gray-700 to-gray-900"
              tech-stack="Angular, TypeScript, Corporate"
              github-url="https://github.com/Marruzz/LuxtorAngular"
              license="Private"
              status="Private">
            </project-card>

            
            <project-card
              title="MajoContinentalMAUI"
              description="App multipiattaforma per gestione alberghiera sviluppata con .NET MAUI. Sistema completo di prenotazioni con database SQLite, autenticazione JWT, sincronizzazione offline-first, push notifications e integrazione API RESTful. Interfaccia nativa per iOS/Android."
              icon="fas fa-hotel"
              bg-gradient="from-blue-600 to-cyan-700"
              tech-stack=".NET MAUI, C#, SQLite, JWT Auth, REST APIs"
              github-url="https://github.com/Marruzz/majoContinentalMAUI"
              license="MAUI"
              status="Starred">
            </project-card>

            
            <project-card
              title="Connect Four"
              description="Implementazione del gioco Forza 4 con AI minimax ottimizzata (depth 7 levels). Sistema di validazione mosse, rilevamento vittorie con pattern matching, animazioni CSS3 fluide e modalità multiplayer locale. Architettura MVC pulita e performance ottimizzate."
              icon="fas fa-gamepad"
              bg-gradient="from-blue-500 to-cyan-600"
              tech-stack="JavaScript ES6+, CSS3 Animations, Minimax AI, MVC"
              github-url="https://github.com/Marruzz/ForzaQuattroJS"
              live-url="https://marruzz.github.io/ForzaQuattroJS/index.html"
              license="MIT License"
              status="MIT License"
              playable>
            </project-card>

            
            <project-card
              title="Portfolio Website"
              description="Questo stesso portfolio sviluppato con Web Components vanilla e Tailwind CSS. Architettura modulare, performance ottimizzate e design responsive moderno."
              icon="fas fa-user-tie"
              bg-gradient="from-purple-600 to-indigo-700"
              tech-stack="JavaScript, Web Components, Tailwind CSS"
              github-url="https://github.com/Marruzz/marruzz.github.io"
              live-url="https://marruzz.github.io/"
              license="MIT License"
              status="MIT License">
            </project-card>
          </div>
        </div>
      </section>
    `;
  }
}


customElements.define('app-projects', ProjectsComponent);
