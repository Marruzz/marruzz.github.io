# 🚀 Portfolio di Luca Marroni

> Un portfolio personale moderno e modulare sviluppato con tecnologie web avanzate e architettura a componenti.

[![Website](https://img.shields.io/website?url=https%3A//marruzz.github.io&style=for-the-badge)](https://marruzz.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/Version-2.0-green.svg?style=for-the-badge)](#)

## 📋 Sommario

- [✨ Caratteristiche](#-caratteristiche)
- [🏗️ Architettura](#️-architettura)
- [🛠️ Tecnologie](#️-tecnologie)
- [📁 Struttura del Progetto](#-struttura-del-progetto)
- [🚀 Quick Start](#-quick-start)
- [🔧 Personalizzazione](#-personalizzazione)
- [📱 Sezioni](#-sezioni)
- [🎓 Informazioni Personali](#-informazioni-personali)
- [� Contatti](#-contatti)

## ✨ Caratteristiche

### 🎨 **Design & UX**
- ✅ **Design Moderno**: Interfaccia pulita e professionale con Tailwind CSS
- ✅ **Responsive**: Ottimizzato per tutti i dispositivi (desktop, tablet, mobile)
- ✅ **Animazioni Fluide**: Transizioni CSS avanzate e micro-interazioni
- ✅ **Menu Mobile**: Navigazione ottimizzata per dispositivi mobili
- ✅ **Dark/Light Theme Ready**: Preparato per temi multipli

### ⚡ **Performance & Architettura**
- ✅ **Modulare**: Sistema a componenti Web Components nativo
- ✅ **Manutenibile**: Codice organizzato e facile da aggiornare
- ✅ **Scalabile**: Facile aggiunta di nuove sezioni
- ✅ **SEO Friendly**: HTML semantico e accessibile
- ✅ **Fast Loading**: Ottimizzato per performance

## 🏗️ Architettura

Questo portfolio utilizza un'**architettura modulare basata su Web Components** per massimizzare manutenibilità e scalabilità:

```
🏠 index.html (Main Container)
├── 🧭 Navigation Component
├── 🎯 Hero Component  
├── 👤 About Component
├── 💻 Skills Component
├── 🏆 Certifications Component
├── 🚀 Projects Component
└── 📧 Contact Component
```

### 💡 **Vantaggi dell'Architettura**

| Aspetto | Beneficio |
|---------|-----------|
| **🔧 Manutenzione** | Modifica componenti singolarmente |
| **🚀 Scalabilità** | Aggiungi/rimuovi sezioni facilmente |
| **🐛 Debug** | Errori isolati per componente |
| **♻️ Riutilizzo** | Componenti riutilizzabili in altri progetti |
| **👥 Collaborazione** | Team può lavorare su componenti separati |

## 🛠️ Tecnologie

### Frontend Stack
```
HTML5        ████████████████████ 100%
CSS3         ████████████████████ 100%
JavaScript   ████████████████████ 100%
Tailwind CSS █████████████████    85%
Web Components███████████████     75%
```

### Librerie & Framework
- **🎨 Tailwind CSS**: Framework CSS utility-first
- **🔤 Font Awesome**: Libreria di icone professionali
- **🖋️ Google Fonts**: Tipografia moderna (Inter)
- **⚡ Web Components**: API native del browser
- **🎭 CSS Animations**: Animazioni personalizzate

## 📁 Struttura del Progetto

```
marruzz.github.io/
├── 📄 index.html                     # File principale
├── 📄 index-backup.html              # Backup versione monolitica
├── 🎨 style.css                      # Stili personalizzati
├── ⚙️ script.js                      # JavaScript principale
├── 🔧 script-tailwind.js             # Configurazione Tailwind
├── 📁 components/                    # 🆕 Sistema Componenti
│   ├── 🧭 navigation-component.js
│   ├── 🎯 hero-component.js
│   ├── 👤 about-component.js
│   ├── 💻 skills-component.js
│   ├── 🏆 certifications-component.js
│   ├── 🚀 projects-component.js
│   └── 📧 contact-component.js
├── 🔄 migrate-to-components.bat      # Script migrazione
├── 📚 README.md                      # Questa documentazione
└── 📄 LICENSE                       # Licenza MIT
```

## 🚀 Quick Start

### 1. **Clona il Repository**
```bash
git clone https://github.com/marruzz/marruzz.github.io.git
cd marruzz.github.io
```

### 2. **Avvia il Portfolio**
```bash
# Opzione 1: Server locale semplice
python -m http.server 8000

# Opzione 2: Live Server (VS Code)
# Installa l'estensione Live Server e clicca "Go Live"

# Opzione 3: Apri direttamente
# Doppio click su index.html
```

### 3. **Visualizza**
Apri [http://localhost:8000](http://localhost:8000) nel browser

## 🔧 Personalizzazione

### 🎨 **Modificare un Componente**

```javascript
// Esempio: components/about-component.js
class AboutComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="about" class="py-20 bg-white">
        <!-- 🔴 Modifica questo contenuto -->
        <h2>La tua nuova sezione About</h2>
      </section>
    `;
  }
}
```

### ➕ **Aggiungere un Nuovo Componente**

1. **Crea il file**:
```javascript
// components/nuovo-componente.js
class NuovoComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="nuovo" class="py-20">
        <h2>Nuova Sezione</h2>
      </section>
    `;
  }
}
customElements.define('app-nuovo', NuovoComponent);
```

2. **Aggiungi al HTML**:
```html
<!-- index.html -->
<script src="components/nuovo-componente.js"></script>
<app-nuovo></app-nuovo>
```

### 🎨 **Personalizzare i Colori**

```css
/* style.css */
:root {
  --primary: #3B82F6;    /* Blu principale */
  --secondary: #1E40AF;   /* Blu scuro */
  --accent: #F59E0B;      /* Giallo accento */
  --success: #10B981;     /* Verde successo */
  --danger: #EF4444;      /* Rosso errore */
}
```

## 📱 Sezioni

| Sezione | Descrizione | Componente |
|---------|-------------|------------|
| 🏠 **Home** | Presentazione, foto profilo, CTA | `hero-component.js` |
| 👤 **Chi Sono** | Biografia, formazione, lingue | `about-component.js` |
| 💻 **Skills** | Competenze tecniche con progress bar | `skills-component.js` |
| 🏆 **Certificazioni** | Attestati e riconoscimenti | `certifications-component.js` |
| 🚀 **Progetti** | Portfolio lavori e case studies | `projects-component.js` |

### 🏗️ **Progetti in Evidenza**

#### 🚗 **Marroni Autoriparazioni** 
- **Tipo**: Sito Web Aziendale
- **Status**: ✅ Live & Operativo
- **Tech Stack**: HTML5, CSS3, JavaScript, Bootstrap
- **Features**: Prenotazioni online, Galleria servizi, Integrazione WhatsApp
- **Link**: [marroniautoriparazioni.com](https://marroniautoriparazioni.com)

#### 💪 **FitManager Pro**
- **Tipo**: Sistema Gestionale Completo
- **Status**: 🔧 In Sviluppo Attivo
- **Tech Stack**: Angular, TypeScript, Node.js, SQL Server, .NET MAUI
- **Features**: 
  - 🔐 Controllo accessi biometrico/RFID
  - 👥 Gestione membri e abbonamenti
  - 📅 Sistema prenotazione corsi
  - 📊 Dashboard analytics avanzata
  - 📱 App mobile per clienti e staff
  - 💳 Pagamenti online integrati
| � **Contatti** | Form contatti e informazioni | `contact-component.js` |

### 💻 **Stack Tecnologico Evidenziato**

#### Frontend Development
- **HTML5** (Avanzato - 92%)
- **CSS3** (Avanzato - 90%) 
- **JavaScript** (Avanzato - 88%)
- **Angular** (Intermedio - 75%)

#### Backend & Tools
- **Node.js** (Base - 60%)
- **Python** (Intermedio - 70%)
- **C#** (Intermedio - 72%)
- **MySQL** (Intermedio)

#### Strumenti & Metodologie
- Git/GitHub, VS Code, Visual Studio
- Responsive Design, SEO
- Component-Based Architecture

## 🎓 Informazioni Personali

<table>
<tr>
<td>

**👨‍💻 Luca Marroni**
- 🎂 **Età**: 17 anni (nato nel 2007)
- 🏫 **Formazione**: ITIS E.Majorana, Grugliasco
- 🎯 **Ruolo**: Developer Full-Stack & Studente
- � **Località**: Grugliasco, Piemonte, Italia

</td>
<td>

**🌍 Lingue**
- 🇮🇹 **Italiano**: Madrelingua
- 🇬🇧 **Inglese**: C1 (Avanzato)
- 🇫🇷 **Francese**: A2 (Base)

</td>
</tr>
</table>

### 🏆 **Certificazioni**
- 🔧 **CISCO IT Essentials** (2024)
- 💻 **ECDL/ICDL Base** (2023)  
- 🇬🇧 **Cambridge CAE Advanced** (In corso)

## � Migrazione da Sistema Monolitico

Se hai la versione precedente, usa lo script automatico:

```bash
# Windows
migrate-to-components.bat

# Manuale
copy index-components.html index.html
```

**🔙 Rollback**: `copy index-backup.html index.html`

## 🐛 Debugging & Troubleshooting

### ❓ **Problemi Comuni**

| Problema | Soluzione |
|----------|-----------|
| Componenti non si caricano | Verifica ordine script nel HTML |
| Stili non applicati | Controlla Tailwind CDN e style.css |
| JavaScript errors | Apri Developer Tools (F12) |
| Menu mobile non funziona | Verifica event listeners navigation |

### 📊 **Performance Monitoring**

```javascript
// Console log per debug
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Portfolio caricato');
  console.log('📊 Componenti:', document.querySelectorAll('[is*="app-"]').length);
});
```

## 📞 Contatti

<div align="center">

[![Email](https://img.shields.io/badge/Email-luca.marroni%40hotmail.com-red?style=for-the-badge&logo=gmail)](mailto:luca.marroni@hotmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-marruzz-black?style=for-the-badge&logo=github)](https://github.com/marruzz)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-luca--marroni-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/luca-marroni)

**📍 Grugliasco, Torino, Italia**

</div>

## 📄 Licenza

Questo progetto è rilasciato sotto **Licenza MIT**. Vedi il file [LICENSE](LICENSE) per i dettagli.

---

<div align="center">

**🚀 Sviluppato con ❤️ e ☕ da [Luca Marroni](https://github.com/marruzz)**

*Portfolio v2.0 - Architettura Modulare con Web Components*

[![Stars](https://img.shields.io/github/stars/marruzz/marruzz.github.io?style=social)](https://github.com/marruzz/marruzz.github.io/stargazers)
[![Forks](https://img.shields.io/github/forks/marruzz/marruzz.github.io?style=social)](https://github.com/marruzz/marruzz.github.io/network/members)

</div>
