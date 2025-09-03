/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#0f172a',
          primary: '#7c3aed',
          secondary: '#14b8a6',
          accent: '#facc15',
          text: '#f1f5f9',
          muted: '#94a3b8'
        }
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.4)'
      },
      borderRadius: {
        card: '1rem'
      },
      maxWidth: {
        content: '80rem'
      }
    }
  },
  plugins: []
}