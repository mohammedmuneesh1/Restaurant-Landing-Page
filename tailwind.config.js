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
      },
      maxWidth: {
        '128': '32rem',
        '600p':'700px',
        '900p':"900px"
      },
      colors: {
        'regal-blue': '#243c5a',
        'shide-yellow':"#fe9e0d"
      },
    },
  },
  plugins: [],
}