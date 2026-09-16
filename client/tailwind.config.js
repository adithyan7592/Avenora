/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#003333",
          deep: "#002727",
          mid: "#0a4444",
          soft: "#e8f0f0",
        },
        gold: {
          DEFAULT: "#c5a059",
          bright: "#d4af6a",
          muted: "#b8924a",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['Montserrat', "Inter", "system-ui", "sans-serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(0, 51, 51, 0.08)",
      },
    },
  },
  plugins: [],
};
