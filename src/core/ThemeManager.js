// Theme Manager - Handles dark/light mode and theme switching
export class ThemeManager {
  constructor() {
    this.currentTheme = 'light';
    this.storageKey = 'portfolio-theme';
  }

  init() {
    // Load saved theme or detect system preference
    this.loadTheme();
    this.setupEventListeners();
    this.updateThemeUI();
  }

  loadTheme() {
    const savedTheme = localStorage.getItem(this.storageKey);
    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else {
      // Detect system preference
      this.currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    this.applyTheme();
  }

  applyTheme() {
    if (this.currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    this.saveTheme();
    this.updateThemeUI();
  }

  saveTheme() {
    localStorage.setItem(this.storageKey, this.currentTheme);
  }

  updateThemeUI() {
    const themeToggle = document.querySelector('#theme-toggle');
    if (themeToggle) {
      const icon = themeToggle.querySelector('i');
      if (icon) {
        if (this.currentTheme === 'dark') {
          icon.className = 'fas fa-sun';
        } else {
          icon.className = 'fas fa-moon';
        }
      }
    }
  }

  setupEventListeners() {
    // Listen for theme toggle clicks
    document.addEventListener('click', (e) => {
      if (e.target.closest('#theme-toggle')) {
        e.preventDefault();
        this.toggleTheme();
      }
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(this.storageKey)) {
        this.currentTheme = e.matches ? 'dark' : 'light';
        this.applyTheme();
        this.updateThemeUI();
      }
    });
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
}
