class ContactComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `      
    <section id="contact" class="py-20 bg-white dark:bg-gray-800 relative overflow-hidden transition-colors duration-300">

    <div
        class="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/10 to-purple-600/10 dark:from-primary/20 dark:to-purple-600/20 rounded-full blur-3xl">
    </div>
    <div
        class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-accent/10 to-pink-500/10 dark:from-accent/20 dark:to-pink-500/20 rounded-full blur-3xl">
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16 animate-fade-in">
            <span class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <i class="fas fa-envelope mr-2"></i>Parliamo insieme
            </span>
            <h2
                class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Contattami
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full mb-6"></div>
            <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
                Hai un progetto in mente? Vuoi collaborare? Sono sempre interessato
                a nuove opportunità e sfide creative. Non esitare a scrivermi!
            </p>
        </div>
        <div class="grid lg:grid-cols-2 gap-16 items-start">

            <div class="animate-slide-right h-full flex flex-col">
                <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">
                    Informazioni di Contatto
                </h3>
                <div class="space-y-6 flex-grow">

                    <div
                        class="group flex items-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300 h-28">
                        <div
                            class="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <i class="fas fa-envelope text-2xl"></i>
                        </div>
                        <div class="flex-grow">
                            <h4 class="font-bold text-gray-900 text-lg">Email</h4>
                            <p class="text-gray-600">luca.marroni@hotmail.com</p>
                            <p class="text-sm text-blue-600 font-medium">Risposta entro 24h</p>
                        </div>
                    </div>


                    <div
                        class="group flex items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300 h-28">
                        <div
                            class="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <i class="fas fa-map-marker-alt text-2xl"></i>
                        </div>
                        <div class="flex-grow">
                            <h4 class="font-bold text-gray-900 text-lg">Località</h4>
                            <p class="text-gray-600">Torino, Piemonte</p>
                            <p class="text-sm text-green-600 font-medium">Disponibile per incontri locali</p>
                        </div>
                    </div>


                    <div
                        class="group flex items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300 h-28">
                        <div
                            class="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <i class="fas fa-phone text-2xl"></i>
                        </div>
                        <div class="flex-grow">
                            <h4 class="font-bold text-gray-900 text-lg">Telefono</h4>
                            <p class="text-gray-600">+39 3XX XXX XXXX</p>
                            <p class="text-sm text-purple-600 font-medium">WhatsApp disponibile</p>
                        </div>
                    </div>


                    <div
                        class="group flex items-center p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300 h-28">
                        <div
                            class="bg-gradient-to-br from-orange-500 to-yellow-500 text-white p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <i class="fas fa-clock text-2xl"></i>
                        </div>
                        <div class="flex-grow">
                            <h4 class="font-bold text-gray-900 text-lg">Disponibilità</h4>
                            <p class="text-gray-600">Lun-Ven: 09:00 - 18:00 </p>
                            <p class="text-sm text-orange-600 font-medium">Weekend su appuntamento</p>
                        </div>
                    </div>
                </div>

                <div class="mt-12">
                    <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                        Seguimi sui social</h4>
                    <div class="flex space-x-4">
                        <a href="https://github.com/Marruzz/" target="_blank"
                            class="group bg-gray-900 text-white p-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-110">
                            <i class="fab fa-github text-2xl group-hover:animate-pulse"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/lucamarroni" target="_blank"
                            class="group bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                            <i class="fab fa-linkedin text-2xl group-hover:animate-pulse"></i>
                        </a>
                        <a href="https://www.instagram.com/luca.marroni._/" target="_blank"
                            class="group bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110">
                            <i class="fab fa-instagram text-2xl group-hover:animate-pulse"></i>
                        </a>
                        <a href="mailto:luca.marroni@hotmail.com" target="_blank"
                            class="group bg-red-500 text-white p-4 rounded-2xl hover:bg-red-600 transition-all duration-300 hover:scale-110">
                            <i class="fas fa-envelope text-2xl group-hover:animate-pulse"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="animate-slide-left h-full">
                <div
                    class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-600 h-full flex flex-col transition-colors duration-300">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                        Invia un messaggio</h3>
                    <form class="space-y-4 flex-grow flex flex-col" id="contact-form"
                        action="https://formspree.io/f/mnnvovdk" method="POST">
                        <div class="grid md:grid-cols-2 gap-4">
                            <div>
                                <label for="name"
                                    class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">Nome</label>
                                <input type="text" id="name" name="name" required
                                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                            </div>
                            <div>
                                <label for="email"
                                    class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">Email</label>
                                <input type="email" id="email" name="email" required
                                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                            </div>
                        </div>
                        <div>
                            <label for="subject"
                                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">Oggetto</label>
                            <input type="text" id="subject" name="subject" required
                                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                        </div>
                        <div class="flex-grow flex flex-col">
                            <label for="message"
                                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">Messaggio</label>
                            <textarea id="message" name="message" required
                                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none flex-grow min-h-32"></textarea>
                        </div>
                        <div class="mt-auto pt-4">
                            <button type="submit" id="submit-btn"
                                class="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-primary-dark hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                                <i class="fas fa-paper-plane mr-2"></i>
                                <span class="button-text">Invia Messaggio</span>
                            </button>

                            <!-- Status message -->
                            <div id="form-status" class="mt-4 p-3 rounded-xl hidden">
                                <div class="flex items-center">
                                    <i class="status-icon mr-3"></i>
                                    <div>
                                        <h4 class="status-title font-semibold text-sm"></h4>
                                        <p class="status-message text-xs"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
    `;

    this.setupEventListeners();
  }

  setupEventListeners() {
    const form = this.querySelector('#contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        this.handleFormSubmit(e);
      });
    }

    console.log('✅ Contact component loaded');
  }

  async handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = this.querySelector('#submit-btn');
    const buttonText = submitBtn.querySelector('.button-text');
    const statusDiv = this.querySelector('#form-status');
    const statusIcon = statusDiv.querySelector('.status-icon');
    const statusTitle = statusDiv.querySelector('.status-title');
    const statusMessage = statusDiv.querySelector('.status-message');

    // Disable button and show loading
    submitBtn.disabled = true;
    buttonText.textContent = 'Invio in corso...';
    statusDiv.classList.add('hidden');

    try {
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success
        form.reset();
        statusDiv.className = 'mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl';
        statusIcon.className = 'fas fa-check-circle text-green-500 mr-3';
        statusTitle.className = 'text-green-800 dark:text-green-200 font-semibold text-sm';
        statusTitle.textContent = 'Messaggio inviato!';
        statusMessage.className = 'text-green-600 dark:text-green-300 text-xs';
        statusMessage.textContent = 'Ti risponderò il prima possibile. Grazie per avermi contattato!';
        buttonText.textContent = 'Messaggio Inviato';

        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.disabled = false;
          buttonText.textContent = 'Invia Messaggio';
        }, 3000);

      } else {
        throw new Error('Errore nell\'invio del messaggio');
      }

    } catch (error) {
      // Error
      console.error('Error:', error);
      statusDiv.className = 'mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl';
      statusIcon.className = 'fas fa-exclamation-triangle text-red-500 mr-3';
      statusTitle.className = 'text-red-800 dark:text-red-200 font-semibold text-sm';
      statusTitle.textContent = 'Errore nell\'invio';
      statusMessage.className = 'text-red-600 dark:text-red-300 text-xs';
      statusMessage.textContent = 'Si è verificato un errore. Riprova o contattami direttamente via email.';

      submitBtn.disabled = false;
      buttonText.textContent = 'Riprova';
    }

    statusDiv.classList.remove('hidden');
  }
}


customElements.define('app-contact', ContactComponent);
