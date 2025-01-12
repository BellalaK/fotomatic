/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        damion: ['"Damion"', "cursive"],
      },
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
      },
      fontFamily: {
        rubik: ['"Rubik"', "sans-serif"],
      },
      fontFamily: {
        palatino: ['"Palatino"', "serif"],
      },
    },
  },
  plugins: [],
};
