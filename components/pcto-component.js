class PCTOComponent extends HTMLElement {  connectedCallback() {
    const pctoData = {
      totaleOreContate: 445,
      totaleOreRiconosciute: 280,
      attivitaPerAnno: {
        "A.S. 2022-2023 (Classe 3°)": [
          { nome: "Corso Sicurezza", ore: 8, oreRiconosciute: 8, descrizione: "Formazione base sulla sicurezza nei luoghi di lavoro" },
          { nome: "Coding nelle Scuole Primarie", ore: 20, oreRiconosciute: 20, descrizione: "Insegnamento programmazione di base ai bambini" },
          { nome: "Cisco IT Essential", ore: 30, oreRiconosciute: 30, descrizione: "Corso di networking e infrastrutture IT" },
          { nome: "Fondazione TIME2", ore: 1, oreRiconosciute: 1, descrizione: "Partecipazione a evento formativo" },
          { nome: "Olimpiadi CyberSecurity", ore: 20, oreRiconosciute: 20, descrizione: "Competizione nazionale di cybersecurity" },
          { nome: "Debate", ore: 40, oreRiconosciute: 40, descrizione: "Tecniche di argomentazione e dibattito pubblico" },
          { nome: "Studente Tutor", ore: 1, oreRiconosciute: 1, descrizione: "Supporto didattico ai compagni" },
          { nome: "Open Days", ore: 20, oreRiconosciute: 20, descrizione: "Orientamento per futuri studenti" }
        ],
        "A.S. 2023-2024 (Classe 4°)": [
          { nome: "Open Days", ore: 20, oreRiconosciute: 20, descrizione: "Continuazione attività di orientamento" },
          { nome: "Madrid", ore: 60, oreRiconosciute: 60, descrizione: "Progetto educativo internazionale in Spagna" },
          { nome: "C1 Certification", ore: 30, oreRiconosciute: 0, descrizione: "Preparazione certificazione linguistica avanzata" },
          { nome: "Debate", ore: 40, oreRiconosciute: 40, descrizione: "Approfondimento tecniche di dibattito" },
          { nome: "PoliTO", ore: 15, oreRiconosciute: 0, descrizione: "Orientamento Politecnico di Torino" },
          { nome: "Irlanda", ore: 20, oreRiconosciute: 20, descrizione: "Esperienza formativa internazionale" },
          { nome: "MonitoraTo", ore: 120, oreRiconosciute: 0, descrizione: "Sviluppo applicazione per monitoraggio urbano" }        ]
      }
    };
    
    pctoData.percentualeCompletamento = Math.round((pctoData.totaleOreRiconosciute / 150) * 100);
    
    const totaliPerAnno = {};
    Object.keys(pctoData.attivitaPerAnno).forEach(anno => {
      const attivita = pctoData.attivitaPerAnno[anno];
      totaliPerAnno[anno] = {
        oreTotali: attivita.reduce((sum, att) => sum + att.ore, 0),
        oreRiconosciute: attivita.reduce((sum, att) => sum + att.oreRiconosciute, 0),
        numeroAttivita: attivita.length
      };
    });
    const competenze = [
      { nome: "Sicurezza sul Lavoro", icona: "fa-shield-alt", colore: "red" },
      { nome: "Programmazione e Coding", icona: "fa-code", colore: "blue" },
      { nome: "Networking (Cisco)", icona: "fa-network-wired", colore: "green" },
      { nome: "Cybersecurity", icona: "fa-lock", colore: "purple" },
      { nome: "Public Speaking & Debate", icona: "fa-microphone", colore: "indigo" },
      { nome: "Tutoring e Leadership", icona: "fa-users", colore: "orange" },
      { nome: "Orientamento e Comunicazione", icona: "fa-compass", colore: "pink" },
      { nome: "Sviluppo App Mobile", icona: "fa-mobile-alt", colore: "cyan" },
      { nome: "Esperienza Internazionale", icona: "fa-globe", colore: "teal" }
    ];

    this.innerHTML = `
      <section id="pcto" class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden transition-colors duration-300">
        <!-- Background decorations -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div class="text-center mb-16 animate-fade-in">
            <span class="inline-block bg-blue-600/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i class="fas fa-briefcase mr-2"></i>Percorso Formativo
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              PCTO - Competenze Trasversali
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p class="text-xl text-gray-600 dark:text-gray-100 mt-6 max-w-3xl mx-auto transition-colors duration-300">
              Il mio percorso di alternanza scuola-lavoro con esperienze formative, progetti innovativi e competenze acquisite sul campo.
            </p>
          </div>          <!-- Dashboard Statistiche -->
          <div class="grid md:grid-cols-4 gap-6 mb-16 animate-slide-up">
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 text-center group hover:scale-105 transition-all duration-300">
              <div class="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 class="text-3xl font-bold text-blue-600 mb-2">${pctoData.totaleOreContate}</h3>
              <p class="text-gray-600 dark:text-gray-300 font-medium">Ore Totali Svolte</p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 text-center group hover:scale-105 transition-all duration-300">
              <div class="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-check-circle text-white text-2xl"></i>
              </div>
              <h3 class="text-3xl font-bold text-green-600 mb-2">${pctoData.totaleOreRiconosciute}</h3>
              <p class="text-gray-600 dark:text-gray-300 font-medium">Ore Riconosciute</p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 text-center group hover:scale-105 transition-all duration-300">
              <div class="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-project-diagram text-white text-2xl"></i>
              </div>
              <h3 class="text-3xl font-bold text-purple-600 mb-2">${Object.values(pctoData.attivitaPerAnno).reduce((sum, anno) => sum + anno.length, 0)}</h3>
              <p class="text-gray-600 dark:text-gray-300 font-medium">Attività Completate</p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 text-center group hover:scale-105 transition-all duration-300">
              <div class="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-graduation-cap text-white text-2xl"></i>
              </div>
              <h3 class="text-3xl font-bold text-orange-600 mb-2">${Object.keys(pctoData.attivitaPerAnno).length}</h3>
              <p class="text-gray-600 dark:text-gray-300 font-medium">Anni Scolastici</p>
            </div>
          </div>          <!-- Progress Bar Generale -->
          <div class="mb-16 animate-slide-right">
            <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <div class="flex justify-between items-center mb-6">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Progresso PCTO</h3>
                <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-semibold">
                  ${pctoData.totaleOreRiconosciute}/150 ore richieste
                </span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4">
                <div class="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-1000 ease-out animate-pulse" 
                     style="width: ${Math.min(100, pctoData.percentualeCompletamento)}%"></div>
              </div>
              <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                <span class="text-gradient-to-r from-blue-500 to-green-500 font-semibold">Completato al ${pctoData.percentualeCompletamento}%</span>
              </div>
            </div>
          </div>

          <!-- Attività per Anno Scolastico -->
          <div class="grid lg:grid-cols-2 gap-8 mb-16">
            <!-- Anno Scolastico 3° -->
            <div class="animate-slide-left">
              <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <div class="flex items-center mb-6">
                  <div class="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span class="text-white font-bold text-lg">3°</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Terzo Anno</h3>
                    <p class="text-gray-600 dark:text-gray-300">Fondamenti e Prime Esperienze</p>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="pcto-activity-card bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
                    <div class="flex justify-between items-center">
                      <div>
                        <h4 class="font-semibold text-gray-900 dark:text-white">Corso Sicurezza</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-300">Formazione base sulla sicurezza</p>
                      </div>
                      <div class="text-right">
                        <span class="text-2xl font-bold text-red-600">12</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400">ore svolte</p>
                      </div>
                    </div>
                  </div>

                  <div class="pcto-activity-card bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
                    <div class="flex justify-between items-center">
                      <div>
                        <h4 class="font-semibold text-gray-900 dark:text-white">Coding nelle Scuole Primarie</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-300">Insegnamento programmazione base</p>
                      </div>
                      <div class="text-right">
                        <span class="text-2xl font-bold text-purple-600">16</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400">ore svolte</p>
                      </div>
                    </div>
                  </div>

                  <div class="pcto-activity-card bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                    <div class="flex justify-between items-center">
                      <div>
                        <h4 class="font-semibold text-gray-900 dark:text-white">Cisco IT Essential</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-300">Certificazione networking</p>
                      </div>
                      <div class="text-right">
                        <span class="text-2xl font-bold text-blue-600">30</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400">ore svolte</p>
                      </div>
                    </div>
                  </div>

                  <div class="pcto-activity-card bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                    <div class="flex justify-between items-center">
                      <div>
                        <h4 class="font-semibold text-gray-900 dark:text-white">Olimpiadi CyberSecurity</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-300">Competizione sicurezza informatica</p>
                      </div>
                      <div class="text-right">
                        <span class="text-2xl font-bold text-green-600">20</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400">ore svolte</p>
                      </div>
                    </div>
                  </div>

                  <div class="pcto-activity-card bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-yellow-200 dark:border-yellow-800">
                    <div class="flex justify-between items-center">
                      <div>
                        <h4 class="font-semibold text-gray-900 dark:text-white">Debate</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-300">Competenze comunicative</p>
                      </div>
                      <div class="text-right">
                        <span class="text-2xl font-bold text-yellow-600">40</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400">ore svolte</p>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <div class="pcto-activity-card bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-3 rounded-xl border border-indigo-200 dark:border-indigo-800">
                      <h4 class="font-semibold text-gray-900 dark:text-white text-sm">Open Days</h4>
                      <span class="text-xl font-bold text-indigo-600">20</span>
                      <p class="text-xs text-gray-500 dark:text-gray-400">ore</p>
                    </div>
                    <div class="pcto-activity-card bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 p-3 rounded-xl border border-gray-200 dark:border-gray-800">
                      <h4 class="font-semibold text-gray-900 dark:text-white text-sm">Altri Progetti</h4>
                      <span class="text-xl font-bold text-gray-600">2</span>
                      <p class="text-xs text-gray-500 dark:text-gray-400">ore</p>
                    </div>
                  </div>
                </div>

                <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                  <p class="text-sm text-blue-800 dark:text-blue-200 font-medium">
                    <i class="fas fa-info-circle mr-2"></i>
                    Totale 3° Anno: <strong>160 ore</strong>
                  </p>
                </div>
              </div>
            </div>

            <!-- Anno Scolastico 4° -->
            <div class="animate-slide-right">
              <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <div class="flex items-center mb-6">
                  <div class="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span class="text-white font-bold text-lg">4°</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Quarto Anno</h3>
                    <p class="text-gray-600 dark:text-gray-300">Esperienze Avanzate e Internazionali</p>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="pcto-activity-card bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
                    <div class="flex justify-between items-center">
                      <div>
                        <h4 class="font-semibold text-gray-900 dark:text-white">Madrid</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-300">Esperienza internazionale</p>
                      </div>
                      <div class="text-right">
                        <span class="text-2xl font-bold text-red-600">60</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400">ore svolte</p>
                      </div>
                    </div>
                  </div>

                  <div class="pcto-activity-card bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                    <div class="flex justify-between items-center">
                      <div>
                        <h4 class="font-semibold text-gray-900 dark:text-white">MonitoraTo</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-300">Progetto sviluppo software</p>
                      </div>
                      <div class="text-right">
                        <span class="text-2xl font-bold text-blue-600">120</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400">ore svolte</p>
                      </div>
                    </div>
                  </div>

                  <div class="pcto-activity-card bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-yellow-200 dark:border-yellow-800">
                    <div class="flex justify-between items-center">
                      <div>
                        <h4 class="font-semibold text-gray-900 dark:text-white">Debate</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-300">Competenze comunicative avanzate</p>
                      </div>
                      <div class="text-right">
                        <span class="text-2xl font-bold text-yellow-600">40</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400">ore svolte</p>
                      </div>
                    </div>
                  </div>

                  <div class="pcto-activity-card bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
                    <div class="flex justify-between items-center">
                      <div>
                        <h4 class="font-semibold text-gray-900 dark:text-white">C1 Certification</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-300">Certificazione linguistica</p>
                      </div>
                      <div class="text-right">
                        <span class="text-2xl font-bold text-purple-600">30</span>
                        <p class="text-xs text-gray-500 dark:text-gray-400">ore svolte</p>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <div class="pcto-activity-card bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-3 rounded-xl border border-green-200 dark:border-green-800">
                      <h4 class="font-semibold text-gray-900 dark:text-white text-sm">Irlanda</h4>
                      <span class="text-xl font-bold text-green-600">20</span>
                      <p class="text-xs text-gray-500 dark:text-gray-400">ore</p>
                    </div>
                    <div class="pcto-activity-card bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-3 rounded-xl border border-indigo-200 dark:border-indigo-800">
                      <h4 class="font-semibold text-gray-900 dark:text-white text-sm">Open Days</h4>
                      <span class="text-xl font-bold text-indigo-600">20</span>
                      <p class="text-xs text-gray-500 dark:text-gray-400">ore</p>
                    </div>
                  </div>

                  <div class="pcto-activity-card bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-3 rounded-xl border border-orange-200 dark:border-orange-800">
                    <h4 class="font-semibold text-gray-900 dark:text-white text-sm">PoliTo - Corso di "Leadership Digitale"</h4>
                    <span class="text-xl font-bold text-orange-600">15</span>
                    <p class="text-xs text-gray-500 dark:text-gray-400">ore</p>
                  </div>
                </div>

                <div class="mt-6 p-4 bg-green-50 dark:bg-green-900/30 rounded-xl">
                  <p class="text-sm text-green-800 dark:text-green-200 font-medium">
                    <i class="fas fa-info-circle mr-2"></i>
                    Totale 4° Anno: <strong>275 ore</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Competenze Acquisite -->
          <div class="mb-16 animate-fade-in">
            <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                <i class="fas fa-star text-yellow-500 mr-2"></i>
                Competenze Acquisite
              </h3>

              <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="text-center group">
                  <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i class="fas fa-code text-blue-500 text-2xl"></i>
                  </div>
                  <h4 class="font-bold text-gray-900 dark:text-white mb-2">Programmazione</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Coding e sviluppo software</p>
                </div>

                <div class="text-center group">
                  <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i class="fas fa-shield-alt text-green-500 text-2xl"></i>
                  </div>
                  <h4 class="font-bold text-gray-900 dark:text-white mb-2">Cybersecurity</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Sicurezza informatica</p>
                </div>

                <div class="text-center group">
                  <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i class="fas fa-comments text-purple-500 text-2xl"></i>
                  </div>
                  <h4 class="font-bold text-gray-900 dark:text-white mb-2">Comunicazione</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Public speaking e debate</p>
                </div>

                <div class="text-center group">
                  <div class="bg-gradient-to-br from-orange-500/10 to-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i class="fas fa-globe text-orange-500 text-2xl"></i>
                  </div>
                  <h4 class="font-bold text-gray-900 dark:text-white mb-2">Internazionale</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Esperienze all'estero</p>
                </div>
              </div>
            </div>
          </div>          <!-- Call to Action -->
          <div class="text-center animate-fade-in">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
              <h3 class="text-3xl font-bold mb-4">Percorso PCTO Completato con Successo</h3>
              <p class="text-xl mb-6 opacity-90">
                Un'esperienza formativa che ha consolidato competenze tecniche, soft skills e una visione del mondo del lavoro sempre più definita.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button onclick="document.getElementById('cv').scrollIntoView({behavior: 'smooth'})" 
                        class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                  <i class="fas fa-file-pdf mr-2"></i>Visualizza CV Completo
                </button>
                <button onclick="document.getElementById('projects').scrollIntoView({behavior: 'smooth'})" 
                        class="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  <i class="fas fa-code mr-2"></i>Scopri i Progetti
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    this.initializeAnimations();
  }

  initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, { threshold: 0.1 });    // Osserva tutti gli elementi con animazioni
    this.querySelectorAll('[class*="animate-"]').forEach(el => {
      observer.observe(el);
    });
  }

  setupEventListeners() {
    const progressBar = this.querySelector('.bg-gradient-to-r.from-blue-500.to-green-500');
    if (progressBar) {
      setTimeout(() => {
        progressBar.style.width = '100%';
      }, 500);
    }
    const activityCards = this.querySelectorAll('.pcto-activity-card');
    activityCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });
    const internalLinks = this.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 80;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}
customElements.define('app-pcto', PCTOComponent);
