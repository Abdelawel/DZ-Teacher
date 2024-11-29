/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-light-blue': '#EBEFF8', // Custom color for the light blue background
      },
    },
  },
  plugins: [],
};