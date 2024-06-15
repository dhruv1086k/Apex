/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors:{
        skin: {
          base1: 'var(--base1)'
        }
      },
      fontSize: {
        
      },
      height: {
        '15v' : '15vh',
        '85v' : '85vh',
        '200' : '200px'
      },
      width: {
        '5p' : '5%',
        '30p' : '30%',
        '70p' : '70%'
      },
      letterSpacing: {
        'extra' : '0.5em',
        'superextra' : '0.8em',
      },
      borderRadius: {
        'circle' : '50%'
      }
    },
  },
  plugins: [],
}

