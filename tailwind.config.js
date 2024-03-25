/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    //colors:{
      //'beige': '#ECECEC'
    //},
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }
    }
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}