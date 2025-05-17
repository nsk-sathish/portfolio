/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1.5rem'
      },  
    },

    extend: {
      colors: {
        'primary': '#403776',
        'siteBlack': '#141414',
        'siteWhite': '#f5f5f5',
      },
      fontFamily: {
        Montserrat: ['Montserrat'],
        MontserratSemiBold: ['MontserratSemiBold'],
        MontserratBold: ['MontserratBold'],
        MontserratExtraBold: ['MontserratExtraBold']
      },
      screens: {
        "xs": '480px',
        "tab": "992px"
      }
    },
  },
  plugins: [],
}

