class ContactComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="contact" class="py-20 bg-white relative overflow-hidden">
        <!-- Background decorations -->
        <div class="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-accent/10 to-pink-500/10 rounded-full blur-3xl"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div class="text-center mb-16 animate-fade-in">
            <span class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i class="fas fa-envelope mr-2"></i>Parliamo insieme
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contattami
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full mb-6"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Hai un progetto in mente? Vuoi collaborare? Sono sempre interessato
              a nuove opportunità e sfide creative. Non esitare a scrivermi!
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-16">
            <!-- Contact Information -->
            <div class="animate-slide-right">
              <h3 class="text-3xl font-bold text-gray-900 mb-8">
                Informazioni di Contatto
              </h3>
              <div class="space-y-6">
                <!-- Email -->
                <div class="group flex items-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div class="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-envelope text-2xl"></i>
                  </div>
                  <div>                    <h4 class="font-bold text-gray-900 text-lg">Email</h4>
                    <p class="text-gray-600">luca.marroni@hotmail.com</p>
                    <p class="text-sm text-blue-600 font-medium">Risposta entro 24h</p>
                  </div>
                </div>

                <!-- Location -->
                <div class="group flex items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300">
                  <div class="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-map-marker-alt text-2xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-lg">Località</h4>
                    <p class="text-gray-600">Torino, Piemonte</p>
                    <p class="text-sm text-green-600 font-medium">Disponibile per incontri locali</p>
                  </div>
                </div>

                <!-- Phone -->
                <div class="group flex items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                  <div class="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-phone text-2xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-lg">Telefono</h4>
                    <p class="text-gray-600">+39 3XX XXX XXXX</p>
                    <p class="text-sm text-purple-600 font-medium">WhatsApp disponibile</p>
                  </div>
                </div>

                <!-- Schedule -->
                <div class="group flex items-center p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                  <div class="bg-gradient-to-br from-orange-500 to-yellow-500 text-white p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-clock text-2xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-lg">Disponibilità</h4>
                    <p class="text-gray-600">Lun-Ven: 09:00 - 18:00 </p>
                    <p class="text-sm text-orange-600 font-medium">Weekend su appuntamento</p>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="mt-12">
                <h4 class="text-xl font-bold text-gray-900 mb-6">Seguimi sui social</h4>
                <div class="flex space-x-4">
                  <a href="https://github.com/Marruzz/" target="_blank"  class="group bg-gray-900 text-white p-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-110">
                    <i class="fab fa-github text-2xl group-hover:animate-pulse"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/lucamarroni" target="_blank"  class="group bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                    <i class="fab fa-linkedin text-2xl group-hover:animate-pulse"></i>
                  </a>
                  <a href="https://www.instagram.com/luca.marroni._/" target="_blank"  class="group bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110">
                    <i class="fab fa-instagram text-2xl group-hover:animate-pulse"></i>
                  </a>
                  <a href="mailto:luca.marroni@hotmail.com" target="_blank" class="group bg-red-500 text-white p-4 rounded-2xl hover:bg-red-600 transition-all duration-300 hover:scale-110">
                    <i class="fas fa-envelope text-2xl group-hover:animate-pulse"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="animate-slide-left">
              <div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Invia un messaggio</h3>
                <form class="space-y-6" id="contact-form">
                  <div class="grid md:grid-cols-2 gap-6">
                    <div>
                      <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Nome</label>
                      <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                    </div>
                  </div>
                  <div>
                    <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">Oggetto</label>
                    <input type="text" id="subject" name="subject" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                  </div>
                  <div>
                    <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">Messaggio</label>
                    <textarea id="message" name="message" rows="6" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"></textarea>
                  </div>                  <button type="submit" id="submit-btn" class="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-primary-dark hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                    <span class="submit-text">
                      <i class="fas fa-paper-plane mr-2"></i>
                      Invia Messaggio
                    </span>
                    <span class="loading-text hidden">
                      <i class="fas fa-spinner fa-spin mr-2"></i>
                      Invio in corso...
                    </span>
                  </button>
                </form>
                
                <!-- Success Message -->
                <div id="success-message" class="hidden mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-3"></i>
                    <div>
                      <h4 class="text-green-800 font-semibold">Messaggio inviato con successo!</h4>
                      <p class="text-green-600 text-sm">Ti risponderò il prima possibile.</p>
                    </div>
                  </div>
                </div>
                
                <!-- Error Message -->
                <div id="error-message" class="hidden mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div class="flex items-center">
                    <i class="fas fa-exclamation-circle text-red-500 mr-3"></i>
                    <div>
                      <h4 class="text-red-800 font-semibold">Errore nell'invio</h4>
                      <p class="text-red-600 text-sm">Si è verificato un errore. Riprova o contattami direttamente.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      </section>
    `;
    
    this.initEmailJS();
    this.setupEventListeners();
  }
    initEmailJS() {
    // Initialize EmailJS with your public key
    if (typeof emailjs !== 'undefined') {
      emailjs.init('83-f-lP8RuaKUIK_T'); // Sostituisci con la tua public key di EmailJS
    }
  }
    setupEventListeners() {
    const form = this.querySelector('#contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmit(e);
      });
    }
    
    console.log('Contact component loaded');
  }
  
  showLoading(show) {
    const submitBtn = this.querySelector('#submit-btn');
    const submitText = this.querySelector('.submit-text');
    const loadingText = this.querySelector('.loading-text');
    
    if (show) {
      submitBtn.disabled = true;
      submitText.classList.add('hidden');
      loadingText.classList.remove('hidden');
    } else {
      submitBtn.disabled = false;
      submitText.classList.remove('hidden');
      loadingText.classList.add('hidden');
    }
  }
  
  showMessage(type, show = true) {
    const successMessage = this.querySelector('#success-message');
    const errorMessage = this.querySelector('#error-message');
    
    if (type === 'success') {
      successMessage.classList.toggle('hidden', !show);
      errorMessage.classList.add('hidden');
    } else if (type === 'error') {
      errorMessage.classList.toggle('hidden', !show);
      successMessage.classList.add('hidden');
    }
  }
    async handleFormSubmit(e) {
    const formData = new FormData(e.target);
    const data = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      to_email: 'stmp@marroniautoriparazioni.com'
    };
    
    // Hide any previous messages
    this.showMessage('success', false);
    this.showMessage('error', false);
    
    // Show loading state
    this.showLoading(true);
    
    try {
      // Check if EmailJS is available
      if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS not loaded');
      }
      
      // Send email using EmailJS
      const result = await emailjs.send(
        'stmp_portfolio',    // Sostituisci con il tuo Service ID
        'template_appkpbh',   // Sostituisci con il tuo Template ID
        data
      );
      
      console.log('Email sent successfully:', result);
      
      // Show success message
      this.showMessage('success');
      
      // Reset form
      e.target.reset();
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show error message
      this.showMessage('error');
    } finally {
      // Hide loading state
      this.showLoading(false);
    }
  }
}

// Registra il componente
customElements.define('app-contact', ContactComponent);
