/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.html'],
  theme: {
    fontFamily: {
      cursive: ['CursiveFontName', 'cursive', 'sans-serif'],
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'serif'],

    },
    extend: {
      borderWidth: {
        '3': '3px',
      },
      borderColor: {
        'gradient': 'linear-gradient(to right, #3B82F6, #8B5CF6)',
      },
      colors: {
        'neon-300': '#00FFFF', 
      },
    },
  },
  plugins: [],
};