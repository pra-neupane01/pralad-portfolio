/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#060911',
          900: '#090d16',
          850: '#0e1422',
          800: '#121a2d',
          700: '#1a243b',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(16, 185, 129, 0.3)',
        },
        emerald: {
          accent: '#10b981',
          glow: 'rgba(16, 185, 129, 0.15)',
        },
        cyan: {
          accent: '#06b6d4',
        },
        terminal: {
          bg: '#090d16',
          surface: '#0e1422',
          surfaceLight: '#121a2d',
          border: 'rgba(255, 255, 255, 0.08)',
          borderLight: 'rgba(255, 255, 255, 0.12)',
          green: '#10b981',
          greenDim: '#059669',
          greenDark: '#047857',
          greenGlow: 'rgba(16, 185, 129, 0.15)',
          text: '#f3f4f6',
          textMuted: '#9ca3af',
          textDim: '#6b7280',
        },
        light: {
          bg: '#f8fafc',
          surface: '#ffffff',
          surfaceAlt: '#f1f5f9',
          border: '#e2e8f0',
          text: '#0f172a',
          textMuted: '#475569',
        }
      },
      fontFamily: {
        'display': ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        'sans': ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'emerald-glow': '0 0 25px -5px rgba(16, 185, 129, 0.25)',
        'cyan-glow': '0 0 25px -5px rgba(6, 182, 212, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'blink': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(16, 185, 129, 0.15)' },
          '50%': { boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

