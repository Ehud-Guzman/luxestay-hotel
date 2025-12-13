// tailwind.config.js
export default {
  darkMode: "class", // enable dark mode with class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      colors: {
        brand: {
          navy: "#0B1C2C",     // Deep navy — luxury primary
          gold: "#D4AF37",     // Champagne/gold accent
          ivory: "#F8F5F0",    // Clean ivory background
          charcoal: "#1C1C1C", // Elegant dark text
          smoke: "#8E8E93",    // Muted gray for secondary
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],  // Headlines
        sans: ["'Inter'", "sans-serif"],        // Body text
      },
      boxShadow: {
        premium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        gold: "0 4px 15px rgba(212, 175, 55, 0.3)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #0B1C2C, #1C1C1C)",
        "gold-gradient": "linear-gradient(135deg, #D4AF37, #F5E6B3)",
      },
    },
  },
  plugins: [],
};
