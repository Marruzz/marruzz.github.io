
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
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto stagger-group">            <project-card
              title="ScacchiJS"
              description="Gioco di scacchi online funzionante. Si può giocare contro un altro giocatore."
              purpose="Fare un gioco di scacchi che funzioni davvero online, con tutte le regole corrette e un timer."
              challenges="Far funzionare tutte le regole speciali degli scacchi (arrocco, en passant) e capire quando è scacco matto."
              solutions="Ho creato una classe per ogni pezzo e funzioni che controllano se le mosse sono valide."
              icon="fas fa-chess"
              bg-gradient="from-amber-600 to-yellow-700"
              tech-stack="JavaScript, Chess Engine, WebApp"
              github-url="https://github.com/Marruzz/ScacchiJS"
              live-url="https://marruzz.github.io/ScacchiJS/scacchi.html"
              license="MIT License"
              status="MIT License"
              playable
              class="animate-zoom-in animate-stagger-1">
            </project-card>            <project-card
              title="Investment Calculator"
              description="Calcolatrice per investimenti con grafici. Calcola quanto guadagni nel tempo."
              purpose="Aiutare le persone a capire quanto crescono i loro soldi investiti con il tempo."
              challenges="Far funzionare i calcoli finanziari in tempo reale e creare grafici che si aggiornano subito."
              solutions="Ho usato RxJS per aggiornare tutto automaticamente e Chart.js per fare i grafici."
              icon="fas fa-calculator"
              bg-gradient="from-red-500 to-pink-600"
              tech-stack="Angular, TypeScript, Charts"
              github-url="https://github.com/Marruzz/AngularInvestmentCalculatorApp"
              license="Angular"
              status="Angular"
              class="animate-zoom-in animate-stagger-2">
            </project-card>            <project-card
              title="LuxtorAngular"
              description="Sito web aziendale con area admin per gestire i contenuti."
              purpose="Fare un sito web per l'azienda Luxtor che possano aggiornare da soli."
              challenges="Creare un sistema per modificare i contenuti e mantenere il sito veloce."
              solutions="Ho fatto un pannello admin con Angular e un sistema di login sicuro con JWT."
              icon="fas fa-building"
              bg-gradient="from-gray-700 to-gray-900"
              tech-stack="Angular, TypeScript, Corporate"
              github-url="https://github.com/Marruzz/LuxtorAngular"
              license="Private"
              status="Private">
            </project-card>            <project-card
              title="Marroni Autoriparazioni"
              description="Sito web per officina meccanica con prenotazioni online e gestione clienti."
              purpose="Creare un sito web per l'officina che permetta ai clienti di prenotare online e gestire gli appuntamenti."
              challenges="Integrare un sistema di prenotazioni che funzioni bene e sia facile da usare per i clienti."
              solutions="Ho creato un calendario interattivo e un sistema di notifiche email per confermare le prenotazioni."
              icon="fas fa-car"
              bg-gradient="from-orange-600 to-red-700"
              tech-stack="JavaScript, PHP, MySQL"
              github-url="https://github.com/Marruzz/marroniautoriparazioni"
              live-url="https://marroniautoriparazioni.com"
              license="MIT License"
              status="MIT License">
            </project-card><project-card
              title="Connect Four"
              description="Il gioco Forza 4 online. Puoi giocare contro il computer o un amico."
              purpose="Rifare il gioco Forza 4 che sia divertente e funzioni bene online."
              challenges="Creare un computer intelligente che giochi bene e far cadere i pezzi in modo fluido."
              solutions="Ho usato l'algoritmo minimax per il computer intelligente e animazioni CSS per i pezzi che cadono."
              icon="fas fa-gamepad"
              bg-gradient="from-blue-500 to-cyan-600"
              tech-stack="JavaScript, Game, WebApp"
              github-url="https://github.com/Marruzz/ForzaQuattroJS"
              live-url="https://marruzz.github.io/ForzaQuattroJS/index.html"
              license="MIT License"
              status="MIT License"
              playable>
            </project-card>            <project-card
              title="Portfolio Website"
              description="Questo sito web portfolio fatto con componenti moderni."
              purpose="Creare un portfolio che mostri le mie competenze usando tecnologie moderne."
              challenges="Fare un sito veloce senza usare framework pesanti e con belle animazioni."
              solutions="Ho usato Web Components nativi e Tailwind CSS per mantenere tutto leggero e veloce."
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
