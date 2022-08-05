/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Big Shoulders Display'],
        body: ['Lexend Deca']
      },
      colors: {
        'b-orange': 'hsl(31, 77%, 52%)',
        'd-cyan': 'hsl(184, 100%, 22%)',
        'v-d-cyan': 'hsl(179, 100%, 13%)',
        'trans-white': 'hsla(0, 0%, 100%, 0.75)',
        'v-l-grey': 'hsl(0, 0%, 95%)'
      }
    },
  },
  plugins: [],
}