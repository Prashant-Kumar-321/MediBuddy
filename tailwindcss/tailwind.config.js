/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../index.html'],
  theme: {
    extend: {
      colors:{
        "primary": "#28bf96", 
        "light-primary": "#209677",
        "secondary": "#defcf4",
        "light-gray": "#7e7684"
      },
      fontFamily:{
        "poppins": ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

