// Componente Projects come Web Component
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
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <!-- ScacchiJS Chess Game -->
            <project-card
              title="ScacchiJS"
              description="Webapp completa per giocare a scacchi online. Include motore di gioco, validazione delle mosse, cronometro, modalità PvP e analisi partite con notazione algebrica."
              icon="fas fa-chess"
              bg-gradient="from-amber-600 to-yellow-700"
              tech-stack="JavaScript, Chess Engine, WebApp"
              github-url="https://github.com/Marruzz/ScacchiJS"
              live-url="https://marruzz.github.io/ScacchiJS/"
              license="MIT License"
              status="MIT License"
              playable>
            </project-card>

            <!-- Angular Investment Calculator -->
            <project-card
              title="Investment Calculator"
              description="Applicazione Angular per calcoli di investimento avanzati. Include grafici interattivi e simulazioni di portafoglio finanziario."
              icon="fas fa-calculator"
              bg-gradient="from-red-500 to-pink-600"
              tech-stack="Angular, TypeScript, Charts"
              github-url="https://github.com/Marruzz/AngularInvestmentCalculatorApp"
              license="Angular"
              status="Angular">
            </project-card>

            <!-- Luxtor Angular -->
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

            <!-- MajoContinental MAUI Hotel App -->
            <project-card
              title="MajoContinentalMAUI"
              description="App mobile per hotel sviluppata in .NET MAUI. Gestione prenotazioni, check-in/out, servizi in camera e comunicazione staff-clienti."
              icon="fas fa-hotel"
              bg-gradient="from-blue-600 to-cyan-700"
              tech-stack=".NET MAUI, C#, Hotel, Mobile"
              github-url="https://github.com/Marruzz/majoContinentalMAUI"
              license="MAUI"
              status="Starred">
            </project-card>

            <!-- Connect Four Game -->
            <project-card
              title="Connect Four"
              description="Implementazione del classico gioco Forza 4 con interfaccia moderna e intelligenza artificiale. Include modalità single-player e multiplayer locale."
              icon="fas fa-gamepad"
              bg-gradient="from-blue-500 to-cyan-600"
              tech-stack="JavaScript, Game, WebApp"
              github-url="https://github.com/Marruzz/ConnectFour"
              live-url="https://marruzz.github.io/ConnectFour/"
              license="MIT License"
              status="MIT License"
              playable>
            </project-card>

            <!-- Progetto Portfolio stesso -->
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

// Registra il componente
customElements.define('app-projects', ProjectsComponent);
