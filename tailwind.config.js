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
                  DEFAULT: '#6bbff1', // companyBlue-500
                  100: '#f1f7fc', // for bg & button
                  150: '#e9f0f4', // for button hover
                  500: '#6bbff1', // for icons
                  600: '#09a2ff', // for headers
                  700: '#3b99e0',
                  800: '#0d6efd', // old text button                    
              },
              'errorRed': {
                  100: '#fff4f0', // for bg
                  200: '#df0000', // for text & border 
              },
              'bottomBlack': {
                  DEFAULT: '#2b2f31', // bg bottom
                  100: '#212529', // bg the bottest
              },
          },
          spacing: {
              '15': '3.75rem'
          }
      },
  },
  plugins: [],
}


