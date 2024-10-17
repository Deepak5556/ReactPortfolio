/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'], // Adding Rubik font family
      },
      fontWeight: {
        594: '594', // Custom font weight
      },
      colors: {
        primary: '#6724d4', // Primary color
        backcolor:'#fafafa', //bgcolor
      },
    },
  },
  plugins: [],
};
