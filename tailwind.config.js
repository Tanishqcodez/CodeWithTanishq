/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-home': "url('/src/image/bg-home.png')",
      }
    },
  },
  plugins: [],
}
