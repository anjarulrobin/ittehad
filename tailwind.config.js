/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ittehad-hind-shiliguri': ['"Hind Siliguri"'],
        'ittehad-kalpurush': ['"Kalpurush"']
      },
      fontWeight: {
        'ittehad-title': "600",
        'ittehad-subtitle': "400"
      }
    },
  },
  plugins: [],
}