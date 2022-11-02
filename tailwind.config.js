/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html, js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '667px',
      lg: '847px',
      xl: '1119px'
    },
    extend: {
      colors: {
        green: '#20421b',
        griht: '#438a38',
        orange: '#E45017',
        origt: '#f2946e',
        colbtn: '#CEB177',
        light: '#f2f4fb'
      }
    },
  },
  plugins: [],
}
