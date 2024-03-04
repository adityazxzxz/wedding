/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '50px'
    },
    extend: {
      fontFamily: {
        'custom1': ['custom1', 'sans-serif'],
        'custom2': ['custom2', 'sans-serif'],
        'custom3': ['custom3', 'sans-serif'],
        'saudagar': ['Saudagar', 'sans-serif'],
        'aerotis': ['Aerotis', 'sans-serif']
      },
      colors: {
        gold: {
          300: '#d2ab67',
        },
        moss: {
          300: '#596959'
        }
      }
    },
  },
  plugins: [],
}

