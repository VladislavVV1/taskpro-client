/* @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [require('tailwind-scrollbar')],
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: '#7C3AED',
          background: '#1E1B4B',
          text: '#EDE9FE',
        },
        custom: {
          background: 'var(--bg)',
          text: 'var(--text)',
        },
      },
    },
  },
}
