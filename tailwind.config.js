/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      zIndex: {
        '-2': '-2',
      },
    },
  },
  plugins: [],
}