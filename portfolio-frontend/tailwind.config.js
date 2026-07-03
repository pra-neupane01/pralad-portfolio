/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#0a0e27',
        'space-dark': '#0f1229',
        'neon-pink': '#ff006e',
        'neon-cyan': '#00f5ff',
        'neon-purple': '#b537f2',
        'neon-green': '#39ff14',
        'neon-orange': '#ff6600',
        'text-light': '#e0e0ff',
        'text-muted': '#a0a0cc',
        'accent-pink': '#ff006e',
        'accent-cyan': '#00f5ff',
      },
      fontFamily: {
        'display': ['Space Mono', 'monospace'],
        'body': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon-pink': '0 0 30px rgba(255, 0, 110, 0.6), inset 0 0 20px rgba(255, 0, 110, 0.1)',
        'neon-cyan': '0 0 30px rgba(0, 245, 255, 0.6), inset 0 0 20px rgba(0, 245, 255, 0.1)',
        'neon-purple': '0 0 30px rgba(181, 55, 242, 0.6), inset 0 0 20px rgba(181, 55, 242, 0.1)',
        'glow-pink': '0 0 60px rgba(255, 0, 110, 0.4)',
        'glow-cyan': '0 0 60px rgba(0, 245, 255, 0.4)',
        'glow-purple': '0 0 60px rgba(181, 55, 242, 0.4)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-fast': 'float 5s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'orbit-slow': 'orbit 30s linear infinite',
        'orbit-fast': 'orbit 15s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'pulse-glow-slow': 'pulseGlow 3s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'shimmer-neon': 'shimmerNeon 4s ease-in-out infinite',
        'flicker': 'flicker 0.3s ease-in-out infinite',
        'bounce-weightless': 'bounceWeightless 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'rotateSlow 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-30px) translateX(15px)' },
          '50%': { transform: 'translateY(-50px) translateX(0px)' },
          '75%': { transform: 'translateY(-30px) translateX(-15px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 20px rgba(255, 0, 110, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 50px rgba(255, 0, 110, 0.6)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmerNeon: {
          '0%, 100%': { textShadow: '0 0 10px rgba(255, 0, 110, 0.5)' },
          '50%': { textShadow: '0 0 30px rgba(255, 0, 110, 1), 0 0 60px rgba(0, 245, 255, 0.5)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        bounceWeightless: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-40px)' },
          '50%': { transform: 'translateY(-80px)' },
          '75%': { transform: 'translateY(-40px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
