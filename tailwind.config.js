/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'text-primary': 'hsl(var(--text-primary))',
        'text-secondary': 'hsl(var(--text-secondary))',
        'dark-panel': 'hsl(var(--dark-panel))',
        'border-gray': 'hsl(var(--border-gray))',
        'lime-neon': 'hsl(var(--lime-neon))',
        'ralex-blue': '#87CEFA',
        'ralex-orange': '#FFA500',
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'standerd': ['DM Sans', 'system-ui', 'sans-serif'],
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