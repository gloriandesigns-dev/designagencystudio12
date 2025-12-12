/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'light-gray': '#efefef',
        'accent-yellow': '#FFD24A',
      },
      maxWidth: {
        'content': '1200px',
      },
      letterSpacing: {
        'nav': '0.08em',
        'label': '0.14em',
      }
    }
  },
  plugins: [],
};
