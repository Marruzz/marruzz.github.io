tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        secondary: "#4F46E5",
        accent: "#F59E0B",
        dark: "#0F172A",
        "primary-light": "#A5B4FC",
        "gray-950": "#030712",
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
        "slide-left": "slideLeft 0.8s ease-out",
        "slide-right": "slideRight 0.8s ease-out",
        "bounce-slow": "bounceSlow 3s infinite",
        "pulse-slow": "pulseSlow 4s infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "float-gentle": "floatGentle 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 4s ease-in-out infinite",        "loading": "loading 1.5s infinite",
        "blink": "blink 1s infinite",
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
        slideLeft: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatGentle: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(1deg)" },
          "66%": { transform: "translateY(5px) rotate(-1deg)" },
        },
        bounceSlow: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        loading: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },        glow: {
          "0%": {
            boxShadow: "0 0 5px #6366F1, 0 0 10px #6366F1, 0 0 15px #6366F1",
          },
          "100%": {
            boxShadow: "0 0 10px #6366F1, 0 0 20px #6366F1, 0 0 30px #6366F1",
          },
        },
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
};
