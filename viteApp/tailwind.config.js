/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}', 'index.html'],
  theme: {
    extend: {
      colors: {
        endeavour: {
          50: '#f1f7fe',
          100: '#e2edfc',
          200: '#bfdaf8',
          300: '#86bdf3',
          400: '#469bea',
          500: '#1e7ed9',
          600: '#1061b9',
          700: '#0f509a', // 0F509A
          800: '#10437c',
          900: '#133967',
          950: '#0d2444'
        },
        lochmara: {
          50: '#f0f9ff',
          100: '#e0f1fe',
          200: '#bae4fd',
          300: '#7cd0fd',
          400: '#37b8f9',
          500: '#0da0ea',
          600: '#0186d2', // 0186d2
          700: '#0265a2',
          800: '#065686',
          900: '#0b486f',
          950: '#082d49'
        }

      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
