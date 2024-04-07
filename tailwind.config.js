// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    fontFamily : {
      'sans' : ["Raleway"]
    },
    extend: {
      container:{
        center: true,
        padding: {
          sx: '1240px',
          sm: '1440px',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      }
    },
  },
  plugins: [],
}

