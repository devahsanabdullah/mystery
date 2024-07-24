/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        TK: {
          background: '#131921',
          default: '#131921',
        },
        h1: {
          colors: '#ffffff',
        },
      },
     
      fontFamily: {
        montserrat: 'montserrat',
        montserratMedium: 'montserrat-medium',
        montserratBold: 'montserrat-bold',
        montserratExtrabold: 'montserrat-extrabold',
      },
      container: {
        // you can configure the container to be centered
        center: true,

        // or have default horizontal padding
        padding: '1rem',

        // default breakpoints but with 40px removed
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px',
          '1320': '1320px',
        },
      },
    },
  },
  plugins: [],
};
