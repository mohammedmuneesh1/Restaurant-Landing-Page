/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        '128': '32rem',
        'f15':'3rem',
        'w290':"290px"
      },
      minHeight: {
        '85': '350px',
      }
    },
  },
  plugins: [],
}