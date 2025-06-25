tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom Brand Identity Colors
        primary: "#6366F1",
        secondary: "#4F46E5", 
        accent: "#EC4899",
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
        
        // Extended Primary Palette
        "primary-50": "#EEF2FF",
        "primary-100": "#E0E7FF",
        "primary-200": "#C7D2FE",
        "primary-300": "#A5B4FC",
        "primary-400": "#818CF8",
        "primary-500": "#6366F1",
        "primary-600": "#4F46E5",
        "primary-700": "#4338CA",
        "primary-800": "#3730A3",
        "primary-900": "#312E81",
        
        // Custom Gradients as Colors
        "gradient-start": "#6366F1",
        "gradient-mid": "#8B5CF6", 
        "gradient-end": "#EC4899",
        
        // Enhanced Gray Scale
        "gray-25": "#FCFCFD",
        "gray-950": "#030712",
        
        // Semantic Colors
        "info": "#0EA5E9",
        "dark": "#0F172A",
        "light": "#F8FAFC"
      },
      
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        'full': '9999px',
      },
      
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'DEFAULT': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
        
        // Custom Brand Shadows
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-sm': '0 0 10px rgba(99, 102, 241, 0.2)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.4)',
        'elegant': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'lifted': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
      
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        'gradient-accent': 'linear-gradient(135deg, #EC4899 0%, #F97316 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
        'gradient-mesh': 'radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(ellipse at top right, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(ellipse at bottom left, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
      },
      
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
        '200%': '200% 200%',
        '300%': '300% 300%',
      },
      
      transitionProperty: {
        'width': 'width',
        'height': 'height', 
        'spacing': 'margin, padding',
        'transform-opacity': 'transform, opacity',
        'colors-shadow': 'color, background-color, border-color, box-shadow',
        'all-smooth': 'all',
      },
      
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'snappy': 'cubic-bezier(0.2, 0, 0, 1)',
      },
      
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      
      animation: {
        // Enhanced Fade Animations
        "fade-in": "fadeIn 0.8s ease-in-out",
        "fade-in-slow": "fadeIn 1.2s ease-in-out",
        "fade-in-fast": "fadeIn 0.4s ease-in-out",
        
        // Slide Animations
        "slide-up": "slideUp 0.8s ease-out",
        "slide-down": "slideDown 0.8s ease-out",
        "slide-left": "slideLeft 0.8s ease-out",
        "slide-right": "slideRight 0.8s ease-out",
        
        // Zoom Animations
        "zoom-in": "zoomIn 0.6s ease-out",
        "zoom-out": "zoomOut 0.6s ease-out",
        
        // Bounce Animations
        "bounce-slow": "bounceSlow 3s infinite",
        "bounce-gentle": "bounceGentle 2s infinite",
        
        // Float Animations
        "float": "float 3s ease-in-out infinite",
        "float-gentle": "floatGentle 6s ease-in-out infinite",
        "float-reverse": "floatReverse 4s ease-in-out infinite",
        
        // Pulse Animations
        "pulse-slow": "pulseSlow 4s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite alternate",
        
        // Gradient Animations
        "gradient-shift": "gradientShift 4s ease-in-out infinite",
        "gradient-wave": "gradientWave 6s ease-in-out infinite",
        
        // Rotation Animations
        "rotate-slow": "rotate 8s linear infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
        
        // Text Animations
        "typing": "typing 3.5s steps(40, end)",
        "blink": "blink 1s infinite",
        
        // Loading Animations
        "loading": "loading 1.5s infinite",
        "skeleton": "skeleton 2s ease-in-out infinite",
        
        // Interactive Animations
        "tilt": "tilt 0.3s ease-out",
        "magnetic": "magnetic 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      
      keyframes: {
        // Fade Keyframes
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        
        // Slide Keyframes
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        
        // Zoom Keyframes
        zoomIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        zoomOut: {
          "0%": { transform: "scale(1.2)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        
        // Float Keyframes
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatGentle: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(1deg)" },
          "66%": { transform: "translateY(-5px) rotate(-1deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0px)" },
        },
        
        // Bounce Keyframes
        bounceSlow: {
          "0%, 20%, 53%, 80%, 100%": { transform: "translateY(0px)" },
          "40%, 43%": { transform: "translateY(-15px)" },
          "70%": { transform: "translateY(-8px)" },
          "90%": { transform: "translateY(-3px)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-5%)" },
        },
        
        // Pulse Keyframes
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)" },
        },
        
        // Gradient Keyframes
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        gradientWave: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
        
        // Interactive Keyframes
        tilt: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        magnetic: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(var(--x, 0), var(--y, 0))" },
        },
        
        // Utility Keyframes
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        loading: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        skeleton: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      
      // Animation Stagger Classes
      animationDelay: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
    },
  },
  
  plugins: [
    function({ addUtilities, addComponents, theme }) {
      // Animation Stagger Utilities
      const staggerUtilities = {};
      for (let i = 1; i <= 10; i++) {
        staggerUtilities[`.animate-stagger-${i}`] = {
          'animation-delay': `${i * 100}ms`,
        };
      }
      addUtilities(staggerUtilities);
      
      // Glass Morphism Components
      addComponents({
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-strong': {
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        },
        '.glass-card': {
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: theme('boxShadow.elegant'),
        },
      });
      
      // Gradient Text Utilities
      addUtilities({
        '.text-gradient-primary': {
          background: theme('backgroundImage.gradient-primary'),
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-secondary': {
          background: theme('backgroundImage.gradient-secondary'),
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      });
    }
  ],
};