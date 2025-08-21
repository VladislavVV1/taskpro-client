/* @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode based on `class="dark"` (not media query)
  plugins: [
    require('tailwind-scrollbar'),
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: '#7C3AED',          // Main violet color
          background: '#1E1B4B',       // Dark violet background
          text: '#EDE9FE',             // Light text
        },
        custom: {
          background: 'var(--bg)',
          text: 'var(--text)',
        },
      },
    },
  },
}