/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["barlow", "serif"],
        Fraunces: ["fraunces", "serif"],
      },
      colors: {
        primary: {
          softRed: 'hsl(7, 99%, 70%)',
          yellow: 'hsl(51, 100%, 49%)',
          darkDesaturatedCyan: 'hsl(167, 40%, 24%)', 
          darkBlue: 'hsl(198, 62%, 26%)',          
          darkModerateCyan: 'hsl(168, 34%, 41%)',   
        },
        neutral: {
          veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
          veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
          darkGrayishBlue: 'hsl(232, 10%, 55%)',
          grayishBlue: 'hsl(210, 4%, 67%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
      fontSize: {
        base: '18px',
      },
      fontWeight: {
        Barlow: {
          regular: 600,
        },
        Fraunces: {
          regular: 700,
          bold: 900,
        },
      }
    },
  },
  plugins: [],
}

