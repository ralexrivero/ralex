/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'background': '#0E0E0F',
        'dark-panel': '#1A1A1B',
        'lime-neon': '#C7FF6B',
        'ralex-blue': '#87CEFA',
        'ralex-orange': '#FFA500',
        'text-primary': '#FFFFFF',
        'text-secondary': '#BFBFBF',
        'border-gray': '#262626',
      },
      fontFamily: {
        'gilroy': ['Gilroy', 'Inter', 'Arial', 'sans-serif'],
        'standerd': ['Standerd', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['6rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['4.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['3.2rem', { lineHeight: '1.2' }],
        'h3': ['2rem', { lineHeight: '1.3' }],
        'body-l': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.04em' }],
      },
      spacing: {
        '72': '18rem',
        '96': '24rem',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}