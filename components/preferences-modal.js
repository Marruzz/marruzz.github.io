class PreferencesModal extends HTMLElement {
  constructor() {
    super();
    this.preferences = this.loadPreferences();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="preferences-modal" 
           class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] hidden items-center justify-center p-4"
           role="dialog"
           aria-modal="true"
           aria-labelledby="preferences-title"
           aria-hidden="true">

        <div class="glass-card bg-white dark:bg-gray-800 shadow-2xl max-w-lg w-full overflow-hidden border border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 id="preferences-title" class="text-2xl font-bold text-gray-900 dark:text-white">
              <i class="fas fa-cog mr-2 text-primary" aria-hidden="true"></i>
              Preferenze
            </h2>
            <button id="close-preferences" aria-label="Chiudi preferenze" class="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all">
              <i class="fas fa-times text-xl" aria-hidden="true"></i>
            </button>
          </div>

          <div class="p-6">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Tema
              </h3>

              <div class="flex items-center justify-between">
                <div>
                  <label for="modal-dark-mode-toggle" class="text-sm font-medium text-gray-900 dark:text-white">Modalità Scura</label>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Attiva il tema scuro</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input id="modal-dark-mode-toggle" type="checkbox" class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700">
            <button id="reset-preferences" class="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Ripristina</button>
            <div class="flex space-x-3">
              <button id="cancel-preferences" class="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Annulla</button>
              <button id="save-preferences" class="px-4 py-2 text-sm text-white bg-primary rounded">Salva</button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.initializeEventListeners();
    this.loadCurrentPreferences();
    this.applyPreferences();
  }
  loadPreferences() {
    const defaultPreferences = { darkMode: false };

    try {
      const saved = localStorage.getItem('userPreferences');
      return saved ? { ...defaultPreferences, ...JSON.parse(saved) } : defaultPreferences;
    } catch (error) {
      console.warn('Errore nel caricamento delle preferenze:', error);
      return defaultPreferences;
    }
  }
  savePreferences(preferences) {
    try {
      localStorage.setItem('userPreferences', JSON.stringify(preferences));
      this.preferences = preferences;
      this.applyPreferences();
    } catch (error) {
      console.error('Errore nel salvataggio delle preferenze:', error);
    }
  }
  applyPreferences() {
    const { darkMode } = this.preferences;
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
    this.updateNavbarIcon(darkMode);
  }
  updateNavbarIcon(isDark) {
  }
  updateDynamicStyles() {
    const styleId = 'dynamic-preferences-styles';
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
  }
  loadCurrentPreferences() {
    const modal = this.querySelector('#preferences-modal');
    if (!modal) return;
    const darkToggle = modal.querySelector('#modal-dark-mode-toggle');
    if (darkToggle) darkToggle.checked = !!this.preferences.darkMode;
  }
  initializeEventListeners() {
    const modal = this.querySelector('#preferences-modal');
    if (!modal) return;
    const saveBtn = modal.querySelector('#save-preferences');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        this.collectAndSavePreferences();
        this.closeModal();
      });
    }
    const cancelBtn = modal.querySelector('#cancel-preferences');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        this.loadCurrentPreferences();
        this.closeModal();
      });
    }
    const resetBtn = modal.querySelector('#reset-preferences');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Sei sicuro di voler ripristinare le impostazioni predefinite?')) {
          this.resetToDefaults();
        }
      });
    }
    const closeBtn = modal.querySelector('#close-preferences');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());
    modal.addEventListener('click', (e) => { if (e.target === modal) this.closeModal(); });
    modal.addEventListener('keydown', (e) => { if (e.key === 'Escape') this.closeModal(); });
  }
  collectAndSavePreferences() {
    const modal = this.querySelector('#preferences-modal');
    const newPreferences = { darkMode: !!modal.querySelector('#modal-dark-mode-toggle').checked };
    this.savePreferences(newPreferences);
    this.showNotification('Preferenze salvate con successo!', 'success');
  }
  resetToDefaults() {
    const defaultPreferences = { darkMode: false };
    this.savePreferences(defaultPreferences);
    this.loadCurrentPreferences();
    this.showNotification('Preferenze ripristinate ai valori predefiniti', 'info');
  }
  openModal() {
    const modal = this.querySelector('#preferences-modal');
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.setAttribute('aria-hidden', 'false');
    
    const firstInput = modal.querySelector('input, button');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
    document.body.style.overflow = 'hidden';
  }
  closeModal() {
    const modal = this.querySelector('#preferences-modal');
    
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.setAttribute('aria-hidden', 'true');
    
    document.body.style.overflow = '';

    const preferencesButton = document.querySelector('#preferences-toggle');
    if (preferencesButton) {
      preferencesButton.focus();
    }
  }
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

    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
      notification.style.transform = 'translateX(full)';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
  announceChanges() {
  }
}

// Definisci il custom element
customElements.define('preferences-modal', PreferencesModal);

// Funzione globale per aprire il modal delle preferenze
window.openPreferencesModal = function() {
  const preferencesModal = document.querySelector('preferences-modal');
  if (preferencesModal) {
    preferencesModal.openModal();
  }
};

// Inizializza le preferenze quando il DOM è caricato
document.addEventListener('DOMContentLoaded', function() {
  const preferencesModal = document.querySelector('preferences-modal');
  if (preferencesModal && preferencesModal.preferences) {
    preferencesModal.applyPreferences();
  }
});
