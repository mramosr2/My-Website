/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#bb86fc',
        surface: '#111111',
        card: '#1a1a1a',
        'card-border': '#252525',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'accent-glow': '0 0 20px rgba(187, 134, 252, 0.25)',
        'accent-glow-lg': '0 0 40px rgba(187, 134, 252, 0.35)',
      },
    },
  },
  plugins: [],
}
