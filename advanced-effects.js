// Cursore personalizzato migliorato
class CustomCursor {
  constructor() {
    this.cursor = null;
    this.trail = null;
    this.isVisible = false;
    this.init();
  }

  init() {
    // Controlla se il dispositivo supporta hover (non touch)
    if (window.matchMedia("(hover: none)").matches) {
      console.log('Device touch rilevato - cursore personalizzato disabilitato');
      return; // Skip su dispositivi touch
    }

    // Crea elementi cursore
    this.cursor = document.createElement('div');
    this.cursor.className = 'custom-cursor';
    this.trail = document.createElement('div');
    this.trail.className = 'custom-cursor-trail';
    
    document.body.appendChild(this.cursor);
    document.body.appendChild(this.trail);
    
    // Nascondi inizialmente
    this.cursor.style.opacity = '0';
    this.trail.style.opacity = '0';
    
    // Event listeners
    document.addEventListener('mousemove', this.updateCursor.bind(this));
    document.addEventListener('mouseenter', this.showCursor.bind(this));
    document.addEventListener('mouseleave', this.hideCursor.bind(this));
    document.addEventListener('mousedown', this.onMouseDown.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
    
    // Aspetta che il DOM sia completamente caricato per aggiungere listeners agli elementi interattivi
    setTimeout(() => {
      this.addInteractiveListeners();
    }, 1000);
    
    console.log('✨ Cursore personalizzato inizializzato con successo');
  }

  addInteractiveListeners() {
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .btn, input, textarea, select, .skill-card, .project-card, .contact-card');
    console.log(`Trovati ${interactiveElements.length} elementi interattivi`);
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', this.onHoverEnter.bind(this));
      el.addEventListener('mouseleave', this.onHoverLeave.bind(this));
    });
  }

  updateCursor(e) {
    if (!this.cursor || !this.trail) return;
    
    const x = e.clientX;
    const y = e.clientY;
    
    // Mostra cursore se non visibile
    if (!this.isVisible) {
      this.showCursor();
    }
    
    // Aggiorna posizione cursore principale
    this.cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
    
    // Trail con ritardo
    setTimeout(() => {
      if (this.trail) {
        this.trail.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
      }
    }, 50);
  }

  showCursor() {
    if (!this.cursor || !this.trail) return;
    
    this.isVisible = true;
    this.cursor.style.opacity = '1';
    this.trail.style.opacity = '0.7';
  }

  hideCursor() {
    if (!this.cursor || !this.trail) return;
    
    this.isVisible = false;
    this.cursor.style.opacity = '0';
    this.trail.style.opacity = '0';
  }

  onMouseDown() {
    if (!this.cursor) return;
    this.cursor.classList.add('click');
  }

  onMouseUp() {
    if (!this.cursor) return;
    this.cursor.classList.remove('click');
  }

  onHoverEnter() {
    if (!this.cursor) return;
    this.cursor.classList.add('hover');
  }

  onHoverLeave() {
    if (!this.cursor) return;
    this.cursor.classList.remove('hover');
  }
}

// Effetti base per scroll reveal
class ScrollReveal {
  constructor() {
    this.elements = [];
    this.init();
  }

  init() {
    this.elements = document.querySelectorAll('.scroll-reveal, .animate-fade-in, .animate-slide-up, .animate-slide-left, .animate-slide-right');
    
    if (this.elements.length > 0) {
      this.reveal();
      window.addEventListener('scroll', this.reveal.bind(this));
    }
  }

  reveal() {
    const windowHeight = window.innerHeight;
    
    this.elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100;
      
      if (elementTop < windowHeight - revealPoint) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) translateX(0)';
      }
    });
  }
}

// Cursore semplice di backup
class SimpleCursor {
  constructor() {
    this.cursor = null;
    this.init();
  }

  init() {
    console.log('🎯 Inizializzo cursore semplice di backup...');
    
    // Crea cursore semplice
    this.cursor = document.createElement('div');
    this.cursor.className = 'simple-cursor';
    document.body.appendChild(this.cursor);
    
    // Event listeners
    document.addEventListener('mousemove', this.updateCursor.bind(this));
    document.addEventListener('mousedown', this.onMouseDown.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
    
    console.log('✅ Cursore semplice inizializzato');
  }

  updateCursor(e) {
    if (!this.cursor) return;
    
    const x = e.clientX;
    const y = e.clientY;
    
    this.cursor.style.left = `${x - 8}px`;
    this.cursor.style.top = `${y - 8}px`;
  }

  onMouseDown() {
    if (!this.cursor) return;
    this.cursor.classList.add('active');
  }

  onMouseUp() {
    if (!this.cursor) return;
    this.cursor.classList.remove('active');
  }
}

// Inizializzazione quando il DOM è pronto
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Inizializzazione effetti avanzati...');
  
  // Controlla se siamo su desktop
  const isDesktop = window.innerWidth > 768 && 
    !(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  
  // Inizializza sempre scroll reveal
  new ScrollReveal();
  
  // Prova prima il cursore avanzato, poi quello semplice
  if (isDesktop) {
    setTimeout(() => {
      try {
        new CustomCursor();
        console.log('✨ Cursore avanzato caricato');
      } catch (error) {
        console.log('⚠️ Errore cursore avanzato, uso quello semplice:', error);
        new SimpleCursor();
      }
    }, 500);
  } else {
    console.log('📱 Dispositivo mobile - cursore normale');
    // Su mobile usa il cursore normale
    document.body.classList.add('fallback-cursor');
    document.querySelectorAll('*').forEach(el => {
      el.style.cursor = 'auto';
    });
  }
  
  console.log('✅ Effetti avanzati caricati');
});

// Gestione tema scuro
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) {
  document.documentElement.classList.add('dark');
}
