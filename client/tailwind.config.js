/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
=======
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
>>>>>>> 5020242b7dc781589a62ccde9da3e52ab4419ef7
  theme: {
    extend: {
      colors: {
        'custom-light-blue': '#EBEFF8', // Custom color for the light blue background
      },
    },
  },
  plugins: [],
};