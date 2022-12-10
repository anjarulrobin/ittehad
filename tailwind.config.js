/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hind-shiliguri': ['"Hind Siliguri"'],
        'kalpurush': ['"Kalpurush"']
      },
      fontWeight: {
        title: "600",
        profileName: "400"
      }
    },
  },
  plugins: [],
}