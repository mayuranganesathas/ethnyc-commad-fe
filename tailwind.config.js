/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AE48CB",
        secondary: "#9B51E026",
        contrast: "#9B51E080",
        textandcta: "#9B51E0",
      },
    },
  },
  plugins: [],
};
