/**
 * Preferences Modal Component
 * Gestisce le preferenze utente salvate in localStorage
 */

class PreferencesModal e                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="magnetic-hover-toggle" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 dark:peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary dark:peer-checked:bg-primary"></div>
                  </label>s HTMLElement {
  constructor() {
    super();
    this.preferences = this.loadPreferences();
  }

  connectedCallback() {
    this.innerHTML = `
      <!-- Preferences Modal -->
      <div id="preferences-modal" 
           class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] hidden flex items-center justify-center p-4"
           role="dialog"
           aria-modal="true"
           aria-labelledby="preferences-title"
           aria-hidden="true"
           style="display: none;">
        
        <div class="glass-card bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-gray-200 dark:border-gray-700">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 id="preferences-title" class="text-2xl font-bold text-gray-900 dark:text-white">
              <i class="fas fa-cog mr-2 text-primary" aria-hidden="true"></i>
              Preferenze
            </h2>
            <button id="close-preferences" 
                    class="magnetic-hover p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                    aria-label="Chiudi preferenze">
              <i class="fas fa-times text-xl" aria-hidden="true"></i>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="max-h-[70vh] overflow-y-auto p-6 space-y-8">
            
            <!-- Tema Section -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <i class="fas fa-palette mr-2 text-primary" aria-hidden="true"></i>
                Tema e Aspetto
              </h3>
              
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label class="preference-option cursor-pointer">
                  <input type="radio" name="theme" value="light" class="sr-only">
                  <div class="glass-card p-4 rounded-xl border-2 border-transparent hover:border-primary/30 transition-all bg-white dark:bg-gray-700">
                    <div class="flex flex-col items-center space-y-2">
                      <i class="fas fa-sun text-2xl text-yellow-500" aria-hidden="true"></i>
                      <span class="text-sm font-medium text-gray-900 dark:text-white">Chiaro</span>
                    </div>
                  </div>
                </label>
                
                <label class="preference-option cursor-pointer">
                  <input type="radio" name="theme" value="dark" class="sr-only">
                  <div class="glass-card p-4 rounded-xl border-2 border-transparent hover:border-primary/30 transition-all bg-white dark:bg-gray-700">
                    <div class="flex flex-col items-center space-y-2">
                      <i class="fas fa-moon text-2xl text-blue-500" aria-hidden="true"></i>
                      <span class="text-sm font-medium text-gray-900 dark:text-white">Scuro</span>
                    </div>
                  </div>
                </label>
                
                <label class="preference-option cursor-pointer">
                  <input type="radio" name="theme" value="auto" class="sr-only">
                  <div class="glass-card p-4 rounded-xl border-2 border-transparent hover:border-primary/30 transition-all bg-white dark:bg-gray-700">
                    <div class="flex flex-col items-center space-y-2">
                      <i class="fas fa-adjust text-2xl text-gray-500 dark:text-gray-400" aria-hidden="true"></i>
                      <span class="text-sm font-medium text-gray-900 dark:text-white">Auto</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <!-- Animazioni Section -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <i class="fas fa-magic mr-2 text-primary" aria-hidden="true"></i>
                Animazioni ed Effetti
              </h3>
              
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <label for="animations-toggle" class="text-sm font-medium text-gray-900 dark:text-white">
                      Animazioni Avanzate
                    </label>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      Effetti di transizione e micro-interazioni
                    </p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="animations-toggle" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 dark:peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary dark:peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div class="flex items-center justify-between">
                  <div>
                    <label for="particles-toggle" class="text-sm font-medium text-gray-900 dark:text-white">
                      Particelle Animate
                    </label>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      Particelle fluttuanti nello sfondo
                    </p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="particles-toggle" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 dark:peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary dark:peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div class="flex items-center justify-between">
                  <div>
                    <label for="magnetic-hover-toggle" class="text-sm font-medium text-gray-900 dark:text-white">
                      Effetti Magnetici
                    </label>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      Elementi che seguono il cursore al hover
                    </p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="magnetic-hover-toggle" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 dark:peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            <!-- Accessibilità Section -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <i class="fas fa-universal-access mr-2 text-primary" aria-hidden="true"></i>
                Accessibilità
              </h3>
              
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <label for="high-contrast-toggle" class="text-sm font-medium text-gray-900 dark:text-white">
                      Alto Contrasto
                    </label>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      Migliora la leggibilità con contrasti elevati
                    </p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="high-contrast-toggle" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 dark:peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div class="flex items-center justify-between">
                  <div>
                    <label for="screen-reader-toggle" class="text-sm font-medium text-gray-900 dark:text-white">
                      Modalità Screen Reader
                    </label>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      Ottimizzazioni per lettori di schermo
                    </p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="screen-reader-toggle" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 dark:peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div class="space-y-2">
                  <label for="font-size-slider" class="text-sm font-medium text-gray-900 dark:text-white">
                    Dimensione Testo: <span id="font-size-value">100%</span>
                  </label>
                  <input id="font-size-slider" 
                         type="range" 
                         min="80" 
                         max="150" 
                         value="100" 
                         step="10"
                         class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider">
                </div>
              </div>
            </div>

            <!-- Performance Section -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <i class="fas fa-tachometer-alt mr-2 text-primary" aria-hidden="true"></i>
                Performance
              </h3>
              
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <label for="gpu-acceleration-toggle" class="text-sm font-medium text-gray-900 dark:text-white">
                      Accelerazione GPU
                    </label>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      Utilizza la GPU per animazioni più fluide
                    </p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="gpu-acceleration-toggle" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 dark:peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div class="flex items-center justify-between">
                  <div>
                    <label for="preload-images-toggle" class="text-sm font-medium text-gray-900 dark:text-white">
                      Precarica Immagini
                    </label>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      Carica le immagini in anticipo per navigazione più veloce
                    </p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="preload-images-toggle" type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 dark:peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-700">
            <button id="reset-preferences" 
                    class="magnetic-hover px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all">
              <i class="fas fa-undo mr-2" aria-hidden="true"></i>
              Ripristina Default
            </button>
            
            <div class="flex space-x-3">
              <button id="cancel-preferences" 
                      class="magnetic-hover px-6 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all">
                Annulla
              </button>
              <button id="save-preferences" 
                      class="magnetic-hover px-6 py-2 text-sm font-medium text-white bg-primary hover:bg-secondary rounded-lg transition-all shadow-lg hover:shadow-primary/25">
                <i class="fas fa-save mr-2" aria-hidden="true"></i>
                Salva Preferenze
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.initializeEventListeners();
    this.loadCurrentPreferences();
  }

  // Carica le preferenze da localStorage
  loadPreferences() {
    const defaultPreferences = {
      theme: 'auto',
      animations: true,
      particles: true,
      magneticHover: true,
      highContrast: false,
      screenReader: false,
      fontSize: 100,
      gpuAcceleration: true,
      preloadImages: true
    };

    try {
      const saved = localStorage.getItem('userPreferences');
      return saved ? { ...defaultPreferences, ...JSON.parse(saved) } : defaultPreferences;
    } catch (error) {
      console.warn('Errore nel caricamento delle preferenze:', error);
      return defaultPreferences;
    }
  }

  // Salva le preferenze in localStorage
  savePreferences(preferences) {
    try {
      localStorage.setItem('userPreferences', JSON.stringify(preferences));
      this.preferences = preferences;
      this.applyPreferences();
      console.log('Preferenze salvate:', preferences);
    } catch (error) {
      console.error('Errore nel salvataggio delle preferenze:', error);
    }
  }

  // Applica le preferenze all'interfaccia
  applyPreferences() {
    const { theme, animations, particles, magneticHover, highContrast, fontSize, gpuAcceleration } = this.preferences;

    // Applica tema
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // Auto: segue le preferenze di sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    }

    // Applica dimensione font
    document.documentElement.style.fontSize = `${fontSize}%`;

    // Gestisci animazioni
    document.body.classList.toggle('no-animations', !animations);
    document.body.classList.toggle('no-particles', !particles);
    document.body.classList.toggle('no-magnetic', !magneticHover);
    document.body.classList.toggle('high-contrast', highContrast);
    document.body.classList.toggle('gpu-accelerated', gpuAcceleration);

    // Applica stili CSS dinamici
    this.updateDynamicStyles();

    // Annuncia i cambiamenti agli screen reader
    this.announceChanges();
  }

  // Aggiorna gli stili CSS dinamici
  updateDynamicStyles() {
    let styleId = 'dynamic-preferences-styles';
    let existingStyle = document.getElementById(styleId);
    
    if (existingStyle) {
      existingStyle.remove();
    }

    const style = document.createElement('style');
    style.id = styleId;
    
    let css = '';

    // Stili per animazioni disabilitate
    if (!this.preferences.animations) {
      css += `
        .no-animations *, .no-animations *::before, .no-animations *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
    }

    // Stili per particelle disabilitate
    if (!this.preferences.particles) {
      css += `
        .no-particles .particle {
          display: none !important;
        }
      `;
    }

    // Stili per effetti magnetici disabilitati
    if (!this.preferences.magneticHover) {
      css += `
        .no-magnetic .magnetic-hover:hover {
          transform: none !important;
        }
      `;
    }

    // Stili per alto contrasto
    if (this.preferences.highContrast) {
      css += `
        .high-contrast {
          filter: contrast(1.5) !important;
        }
        .high-contrast a, .high-contrast button {
          font-weight: bold !important;
        }
      `;
    }

    // Stili per accelerazione GPU
    if (this.preferences.gpuAcceleration) {
      css += `
        .gpu-accelerated .magnetic-hover,
        .gpu-accelerated .project-card,
        .gpu-accelerated .skill-card,
        .gpu-accelerated .particle {
          will-change: transform;
          transform: translateZ(0);
        }
      `;
    }

    style.textContent = css;
    document.head.appendChild(style);
  }

  // Carica le preferenze correnti nell'interfaccia
  loadCurrentPreferences() {
    const modal = this.querySelector('#preferences-modal');
    if (!modal) return;

    // Theme
    const themeRadio = modal.querySelector(`input[name="theme"][value="${this.preferences.theme}"]`);
    if (themeRadio) {
      themeRadio.checked = true;
      themeRadio.closest('.preference-option').classList.add('selected');
    }

    // Toggles
    modal.querySelector('#animations-toggle').checked = this.preferences.animations;
    modal.querySelector('#particles-toggle').checked = this.preferences.particles;
    modal.querySelector('#magnetic-hover-toggle').checked = this.preferences.magneticHover;
    modal.querySelector('#high-contrast-toggle').checked = this.preferences.highContrast;
    modal.querySelector('#screen-reader-toggle').checked = this.preferences.screenReader;
    modal.querySelector('#gpu-acceleration-toggle').checked = this.preferences.gpuAcceleration;
    modal.querySelector('#preload-images-toggle').checked = this.preferences.preloadImages;

    // Font size
    const fontSlider = modal.querySelector('#font-size-slider');
    const fontValue = modal.querySelector('#font-size-value');
    fontSlider.value = this.preferences.fontSize;
    fontValue.textContent = `${this.preferences.fontSize}%`;
  }

  // Inizializza gli event listeners
  initializeEventListeners() {
    const modal = this.querySelector('#preferences-modal');
    
    // Add event listener for preferences toggle button
    setTimeout(() => {
      const preferencesToggle = document.querySelector('#preferences-toggle');
      if (preferencesToggle && !preferencesToggle.hasAttribute('data-listener-added')) {
        preferencesToggle.addEventListener('click', (e) => {
          e.preventDefault();
          this.openModal();
        });
        preferencesToggle.setAttribute('data-listener-added', 'true');
      }
    }, 100);
    
    // Theme selection
    modal.querySelectorAll('input[name="theme"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        modal.querySelectorAll('.preference-option').forEach(opt => opt.classList.remove('selected'));
        e.target.closest('.preference-option').classList.add('selected');
      });
    });

    // Font size slider
    const fontSlider = modal.querySelector('#font-size-slider');
    const fontValue = modal.querySelector('#font-size-value');
    fontSlider.addEventListener('input', (e) => {
      fontValue.textContent = `${e.target.value}%`;
    });

    // Save preferences
    modal.querySelector('#save-preferences').addEventListener('click', () => {
      this.collectAndSavePreferences();
      this.closeModal();
    });

    // Cancel
    modal.querySelector('#cancel-preferences').addEventListener('click', () => {
      this.loadCurrentPreferences(); // Reset to current values
      this.closeModal();
    });

    // Reset to defaults
    modal.querySelector('#reset-preferences').addEventListener('click', () => {
      if (confirm('Sei sicuro di voler ripristinare le impostazioni predefinite?')) {
        this.resetToDefaults();
      }
    });

    // Close modal
    modal.querySelector('#close-preferences').addEventListener('click', () => {
      this.closeModal();
    });

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeModal();
      }
    });

    // Keyboard navigation
    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });
  }

  // Raccoglie e salva le preferenze dal form
  collectAndSavePreferences() {
    const modal = this.querySelector('#preferences-modal');
    
    const newPreferences = {
      theme: modal.querySelector('input[name="theme"]:checked').value,
      animations: modal.querySelector('#animations-toggle').checked,
      particles: modal.querySelector('#particles-toggle').checked,
      magneticHover: modal.querySelector('#magnetic-hover-toggle').checked,
      highContrast: modal.querySelector('#high-contrast-toggle').checked,
      screenReader: modal.querySelector('#screen-reader-toggle').checked,
      fontSize: parseInt(modal.querySelector('#font-size-slider').value),
      gpuAcceleration: modal.querySelector('#gpu-acceleration-toggle').checked,
      preloadImages: modal.querySelector('#preload-images-toggle').checked
    };

    this.savePreferences(newPreferences);
    
    // Mostra notifica di successo
    this.showNotification('Preferenze salvate con successo!', 'success');
  }

  // Ripristina le impostazioni predefinite
  resetToDefaults() {
    const defaultPreferences = {
      theme: 'auto',
      animations: true,
      particles: true,
      magneticHover: true,
      highContrast: false,
      screenReader: false,
      fontSize: 100,
      gpuAcceleration: true,
      preloadImages: true
    };

    this.savePreferences(defaultPreferences);
    this.loadCurrentPreferences();
    this.showNotification('Preferenze ripristinate ai valori predefiniti', 'info');
  }

  // Apre il modal
  openModal() {
    const modal = this.querySelector('#preferences-modal');
    
    // Force reset positioning
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.zIndex = '9999';
    
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    
    // Focus sul primo elemento interattivo
    const firstInput = modal.querySelector('input, button');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }

    // Previeni scroll del body
    document.body.style.overflow = 'hidden';
  }

  // Chiude il modal
  closeModal() {
    const modal = this.querySelector('#preferences-modal');
    modal.classList.add('hidden');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    
    // Ripristina scroll del body
    document.body.style.overflow = '';

    // Restituisci focus al pulsante che ha aperto il modal
    const preferencesButton = document.querySelector('#preferences-toggle');
    if (preferencesButton) {
      preferencesButton.focus();
    }
  }

  // Mostra notifica
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-[110] p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
      type === 'success' ? 'bg-green-500 text-white' :
      type === 'error' ? 'bg-red-500 text-white' :
      'bg-blue-500 text-white'
    }`;
    notification.innerHTML = `
      <div class="flex items-center space-x-2">
        <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation-triangle' : 'info-circle'}" aria-hidden="true"></i>
        <span>${message}</span>
      </div>
    `;

    document.body.appendChild(notification);

    // Animazione di entrata
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Rimuovi dopo 3 secondi
    setTimeout(() => {
      notification.style.transform = 'translateX(full)';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Annuncia i cambiamenti agli screen reader
  announceChanges() {
    if (this.preferences.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.className = 'sr-only';
      announcement.textContent = 'Preferenze applicate con successo';
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }
}

// Definisci il custom element
customElements.define('preferences-modal', PreferencesModal);

// Global preferences modal initialization
document.addEventListener('DOMContentLoaded', () => {
  // Ensure preferences modal opens when button is clicked
  document.addEventListener('click', (e) => {
    if (e.target.closest('#preferences-toggle')) {
      e.preventDefault();
      const preferencesModal = document.querySelector('app-preferences-modal');
      if (preferencesModal && preferencesModal.openModal) {
        preferencesModal.openModal();
      }
    }
  });
});
