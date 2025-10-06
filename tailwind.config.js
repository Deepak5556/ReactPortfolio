/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // primary: '#5a1abf',
        primary: '#000000',
        secondary: '#00B5E7',
        dark: '#444444',
        light: '#FAFAFA',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)', borderRadius: '55% 45% 55% 45%' },
          '50%': { transform: 'translateY(10px)', borderRadius: '45% 55% 45% 55%' },
        },
      },
    },
  },
  plugins: [],
};