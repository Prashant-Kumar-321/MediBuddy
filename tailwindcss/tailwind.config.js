/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../index.html'],
  theme: {
    extend: {
      colors:{
        "primary": "#28bf96", 
        "light-primary": "#209677",
        "secondary": "#defcf4",
        "light-gray": "#7e7684",
        "extralight-primary": "#43ff6433",
      },
      fontFamily:{
        "poppins": ['Poppins', 'sans-serif'],
      }, 
      translate:{
        'topleft': 'translate(calc(-50% - 12rem)), calc(-50% - 8rem)',
      }
    },
  },
  plugins: [
    function({addUtilities}){
      addUtilities({
        '.translate-topleft':{
          transform: 'translate(calc(-50% - 12rem), calc(-50% - 8rem))',
        }
      }); 
    }
  ],
}

