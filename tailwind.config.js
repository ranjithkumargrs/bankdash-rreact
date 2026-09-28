/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D60FF',
          light: '#5B7FFF',
          dark: '#1E3FCC',
        },
        navy: '#1B2559',
        muted: '#A3AED0',
        bg: '#F4F7FE',
        card: '#FFFFFF',
        danger: '#FF5B5B',
        success: '#05CD99',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(112, 144, 176, 0.1)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
