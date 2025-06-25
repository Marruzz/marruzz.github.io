tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        secondary: "#4F46E5",
        accent: "#EC4899",
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
        dark: "#0F172A",
        "primary-light": "#A5B4FC",
        "gray-950": "#030712",
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-sm': '0 0 10px rgba(99, 102, 241, 0.2)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.4)',
        'elegant': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'lifted': '0 20px 60px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)',
        'gradient-mesh': 'radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(ellipse at top right, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
        'colors-shadow': 'color, background-color, border-color, box-shadow',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-down": "slideDown 0.8s ease-out",
        "slide-left": "slideLeft 0.8s ease-out",
        "slide-right": "slideRight 0.8s ease-out",
        "zoom-in": "zoomIn 0.6s ease-out",
        "bounce-slow": "bounceSlow 3s infinite",
        "pulse-slow": "pulseSlow 4s infinite",
        "float": "float 3s ease-in-out infinite",
        "float-gentle": "floatGentle 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 4s ease-in-out infinite",
        "loading": "loading 1.5s infinite",
        "blink": "blink 1s infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "magnetic": "magnetic 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
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
        zoomIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatGentle: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(1deg)" },
          "66%": { transform: "translateY(-5px) rotate(-1deg)" },
        },
        bounceSlow: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0px)" },
          "40%": { transform: "translateY(-15px)" },
          "60%": { transform: "translateY(-8px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)" },
        },
        magnetic: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(var(--x, 0), var(--y, 0))" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        loading: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const staggerUtilities = {};
      for (let i = 1; i <= 5; i++) {
        staggerUtilities[`.animate-stagger-${i}`] = {
          'animation-delay': `${i * 100}ms`,
        };
      }
      addUtilities(staggerUtilities);
    }
  ],
};
