/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#0b1841ff',
        darkTheme: '#050812ff',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Prata: ["Prata", "serif"]
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white':'4px 4px 0 #fff'
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}
