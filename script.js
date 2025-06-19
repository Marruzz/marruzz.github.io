// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      mobileMenu.classList.add("hidden");
    }
  });
});

// Enhanced Form submission with validation
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const privacy = formData.get("privacy");

    // Basic validation
    if (!name || !email || !subject || !message || !privacy) {
      showNotification("Per favore, compila tutti i campi richiesti.", "error");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotification(
        "Per favore, inserisci un indirizzo email valido.",
        "error"
      );
      return;
    }

    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin mr-2"></i>Invio in corso...';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
      showNotification(
        "Messaggio inviato con successo! Ti risponderò presto.",
        "success"
      );
      this.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => notification.remove());

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full`;

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-blue-500";
  notification.classList.add(bgColor, "text-white");

  notification.innerHTML = `
                <div class="flex items-center">
                    <i class="fas ${
                      type === "success"
                        ? "fa-check-circle"
                        : type === "error"
                        ? "fa-exclamation-circle"
                        : "fa-info-circle"
                    } mr-2"></i>
                    <span>${message}</span>
                    <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.classList.remove("translate-x-full");
  }, 100);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.add("translate-x-full");
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Enhanced scroll effects
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Add/remove shadow based on scroll position
  if (scrollTop > 100) {
    nav.classList.add("shadow-xl", "bg-white/95");
    nav.classList.remove("bg-white/90");
  } else {
    nav.classList.remove("shadow-xl", "bg-white/95");
    nav.classList.add("bg-white/90");
  }

  // Hide/show navbar on scroll
  if (scrollTop > lastScrollTop && scrollTop > 200) {
    nav.style.transform = "translateY(-100%)";
  } else {
    nav.style.transform = "translateY(0)";
  }
  lastScrollTop = scrollTop;
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typing animation when page loads
window.addEventListener("load", () => {
  const typingElement = document.querySelector(".typing-cursor");
  if (typingElement) {
    setTimeout(() => {
      typeWriter(typingElement, "Luca Marroni", 150);
    }, 1000);
  }
});

// Advanced intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

      // Animate skill bars
      if (entry.target.classList.contains("skill-card")) {
        const progressBar = entry.target.querySelector('[style*="width"]');
        if (progressBar) {
          const width = progressBar.style.width;
          progressBar.style.width = "0%";
          setTimeout(() => {
            progressBar.style.transition = "width 1.5s ease-out";
            progressBar.style.width = width;
          }, 200);
        }
      }

      // Counter animation
      if (entry.target.classList.contains("counter")) {
        animateCounter(entry.target);
      }
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(
    ".animate-slide-up, .animate-slide-left, .animate-slide-right, .skill-card"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });

// Counter animation function
function animateCounter(element) {
  const target = parseInt(element.textContent);
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 16);
}

// Add particle animation
function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = Math.random() * 100 + "%";
  particle.style.width = Math.random() * 3 + 1 + "px";
  particle.style.height = particle.style.width;
  particle.style.animationDuration = Math.random() * 3 + 2 + "s";
  particle.style.animationDelay = Math.random() * 2 + "s";

  const hero = document.querySelector("#home");
  if (hero) {
    hero.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 5000);
  }
}

// Generate particles periodically
setInterval(createParticle, 3000);

// Newsletter subscription
document.querySelector("footer button").addEventListener("click", function (e) {
  e.preventDefault();
  const emailInput = this.previousElementSibling;
  const email = emailInput.value;

  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showNotification("Grazie per esserti iscritto alla newsletter!", "success");
    emailInput.value = "";
  } else {
    showNotification(
      "Per favore, inserisci un indirizzo email valido.",
      "error"
    );
  }
});

// Parallax effect for background elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".particle");

  parallaxElements.forEach((element) => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Add loading animation
window.addEventListener("load", () => {
  const loader = document.createElement("div");
  loader.className =
    "fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500";
  loader.innerHTML = `
                <div class="text-center">
                    <div class="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p class="text-gray-600 font-semibold">Caricamento...</p>
                </div>
            `;
  document.body.appendChild(loader);

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      if (loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    }, 500);
  }, 1500);
});
