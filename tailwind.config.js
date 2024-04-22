/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'pills-background': "url(./assets/pills-background.png)"
      },
      colors: {
        'overlay-color': 'rgb(34,83,71)',
        darkgreen: '#005248',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
  }

