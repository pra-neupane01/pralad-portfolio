/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'glass-dark': 'rgba(15, 23, 42, 0.8)',
        'glass-light': 'rgba(255, 255, 255, 0.08)',
        'glass-border': 'rgba(255, 255, 255, 0.15)',
        accent: '#06d6ff',
        'accent-dark': '#0ea5e9',
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'bg-primary': '#0f172a',
        'bg-secondary': '#1e293b',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backdropFilter: {
        blur: 'blur(16px)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 8px 32px 0 rgba(31, 38, 135, 0.6)',
        glow: '0 0 20px rgba(6, 214, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(6, 214, 255, 0.5)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '1000px 0' },
          '100%': { backgroundPosition: '-1000px 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 20px rgba(6, 214, 255, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(6, 214, 255, 0.6)' },
        },
      },
      opacity: {
        8: '0.08',
        15: '0.15',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
