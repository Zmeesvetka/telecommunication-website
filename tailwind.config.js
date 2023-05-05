/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './public/**/*.html',
      './src/**/*.{js,jsx}'
  ],
  theme: {
      extend: {
          container: {
              center: true,
              padding: {
                  DEFAULT: '1rem',
                  'lg': '2rem',
                  'xl': '3rem',
                  '2xl': '6rem'
              }
          },
          colors: {
              'companyLightGray': '#f6f6f6', //old bg
              'companyBlue': {
                  DEFAULT: '#0b1d5c',
                  100: '#36c9', // for bg & button
                  150: '#36cc', // for button hover
                  500: '#0b1d5c', // for icons
                  600: '#0c0f2e', // for headers
                  700: '#3b99e0',
                  800: '#0d6efd', // old text button                    
              },
              'errorRed': {
                  100: '#fff4f0', // for bg
                  200: '#df0000', // for text & border 
              },
              'bottomBlack': {
                  DEFAULT: '#020919', // bg bottom
                  100: '#00020b', // bg the bottest
              },
          },
          spacing: {
              '15': '3.75rem'
          }
      },
  },
  plugins: [],
}


