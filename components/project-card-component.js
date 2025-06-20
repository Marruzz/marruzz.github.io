
class ProjectCardComponent extends HTMLElement {
  connectedCallback() {

    const title = this.getAttribute('title') || '';
    const description = this.getAttribute('description') || '';
    const githubUrl = this.getAttribute('github-url') || '';
    const liveUrl = this.getAttribute('live-url') || '';
    const icon = this.getAttribute('icon') || 'fas fa-code';
    const bgGradient = this.getAttribute('bg-gradient') || 'from-blue-500 to-indigo-600';
    const techStack = this.getAttribute('tech-stack') || '';
    const status = this.getAttribute('status') || '';
    const license = this.getAttribute('license') || '';
    const featured = this.hasAttribute('featured');
    const playable = this.hasAttribute('playable');
    

    const technologies = techStack ? techStack.split(',').map(tech => tech.trim()) : [];
    

    const techBadges = technologies.map(tech => {
      const colorMap = {
        'JavaScript': 'bg-yellow-100 text-yellow-800',
        'Angular': 'bg-red-100 text-red-800',
        'TypeScript': 'bg-blue-100 text-blue-800',
        '.NET MAUI': 'bg-purple-100 text-purple-800',
        'C#': 'bg-blue-100 text-blue-800',
        'Chess Engine': 'bg-amber-100 text-amber-800',
        'WebApp': 'bg-green-100 text-green-800',
        'Charts': 'bg-green-100 text-green-800',
        'Corporate': 'bg-gray-100 text-gray-800',
        'Hotel': 'bg-cyan-100 text-cyan-800',
        'Mobile': 'bg-green-100 text-green-800',
        'Game': 'bg-pink-100 text-pink-800'
      };
      
      const colorClass = colorMap[tech] || 'bg-gray-100 text-gray-800';
      return `<span class="${colorClass} text-xs px-2 py-1 rounded-full font-semibold">${tech}</span>`;
    }).join('');
    

    let statusBadge = '';
    if (status) {
      const statusMap = {
        'MIT License': { bg: 'bg-green-500/20', text: 'text-white', icon: 'fas fa-play', color: 'text-green-600' },
        'Angular': { bg: 'bg-blue-500/20', text: 'text-white', icon: 'fas fa-globe', color: 'text-blue-600' },
        'Private': { bg: 'bg-gray-500/20', text: 'text-white', icon: 'fas fa-lock', color: 'text-gray-600' },
        'MAUI': { bg: 'bg-purple-500/20', text: 'text-white', icon: 'fas fa-mobile-alt', color: 'text-purple-600' },
        'Starred': { bg: 'bg-yellow-500/20', text: 'text-white', icon: 'fas fa-star', color: 'text-yellow-600' }
      };
      
      const statusInfo = statusMap[status] || { bg: 'bg-blue-500/20', text: 'text-white', icon: 'fas fa-info', color: 'text-blue-600' };
      
      if (playable) {
        statusBadge = `
          <div class="absolute bottom-4 left-4">
            <span class="bg-green-500/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
              <i class="fas fa-play mr-1"></i>Playable
            </span>
          </div>`;
      } else {
        statusBadge = `
          <div class="absolute bottom-4 left-4">
            <span class="${statusInfo.bg} backdrop-blur-sm ${statusInfo.text} text-xs px-2 py-1 rounded-full">
              <i class="${statusInfo.icon} mr-1"></i>${status}
            </span>
          </div>`;
      }
    }
    

    let licenseIndicator = '';
    if (license) {
      const licenseMap = {
        'MIT License': { color: 'text-green-600', dotColor: 'bg-green-500' },
        'Angular': { color: 'text-red-600', dotColor: 'bg-red-500' },
        'Private': { color: 'text-gray-600', dotColor: 'bg-gray-500' },
        'MAUI': { color: 'text-blue-600', dotColor: 'bg-blue-500' }
      };
      
      const licenseInfo = licenseMap[license] || { color: 'text-blue-600', dotColor: 'bg-blue-500' };
      licenseIndicator = `
        <div class="flex space-x-2">
          <span class="w-3 h-3 ${licenseInfo.dotColor} rounded-full"></span>
          <span class="text-sm ${licenseInfo.color} font-semibold">${license}</span>
        </div>`;
    }
    

    let buttons = '';
    if (githubUrl) {
      buttons += `
        <a href="${githubUrl}" target="_blank" class="flex-1 bg-gradient-to-r ${bgGradient} text-white text-center py-2 px-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-300">
          <i class="fab fa-github mr-1"></i>GitHub
        </a>`;
    }
    
    if (liveUrl) {
      buttons += `
        <a href="${liveUrl}" target="_blank" class="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center py-2 px-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-300">
          <i class="fas fa-external-link-alt mr-1"></i>Demo Live
        </a>`;
    }
      this.innerHTML = `
      <div class="project-card bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 group h-full flex flex-col">
        <div class="relative h-48 bg-gradient-to-br ${bgGradient} overflow-hidden flex-shrink-0">
          <div class="absolute inset-0 bg-black/20"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white">
              <i class="${icon} text-5xl mb-3 group-hover:scale-110 transition-transform duration-300"></i>
              <div class="text-lg font-semibold">${title}</div>
            </div>
          </div>
          <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
            <i class="${this.getMainTechIcon(technologies[0] || 'JavaScript')} text-white text-lg"></i>
          </div>
          ${statusBadge}
        </div>
        <div class="p-6 flex-grow flex flex-col">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-bold text-gray-900">${title}</h3>
            ${licenseIndicator}
          </div>
          <p class="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
            ${description}
          </p>
          <div class="flex flex-wrap gap-1 mb-4">
            ${techBadges}
          </div>
          <div class="flex gap-2 mt-auto">
            ${buttons}
          </div>
        </div>
      </div>
    `;
  }
  
  getMainTechIcon(tech) {
    const iconMap = {
      'JavaScript': 'fab fa-js-square',
      'Angular': 'fab fa-angular',
      'TypeScript': 'fab fa-js-square',
      '.NET MAUI': 'fas fa-mobile-alt',
      'C#': 'fas fa-code'
    };
    
    return iconMap[tech] || 'fab fa-js-square';
  }
}


customElements.define('project-card', ProjectCardComponent);
