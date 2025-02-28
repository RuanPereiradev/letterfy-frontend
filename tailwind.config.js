/** @type {import('tailwindcss').Config} */ 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fundoGold: '#F8D092',
        fundoVerde: '#38A48C',
        fundoCiano: '#159097',
        fundoAzul: '#1A5678',
        fundoRoxo: '#25245E',
        fundoDeepRoxo: '#571C56',
      },
    },
  },
  plugins: [],
}