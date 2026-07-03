/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Minimal brutalist palette
        'dark-bg': '#0f0f0f',           // Near-black background
        'dark-secondary': '#1a1a1a',    // Slightly lighter dark
        'light-bg': '#ffffff',          // Pure white
        'light-secondary': '#f5f5f5',   // Off-white
        'text-dark': '#1a1a1a',         // Near-black text
        'text-light': '#ffffff',        // White text
        'text-muted': '#666666',        // Muted gray
        'text-accent': '#999999',       // Light gray accent
        'accent-primary': '#2d9b7f',    // Deep teal/green (primary accent)
        'accent-light': '#4fb3a3',      // Lighter teal (hover)
        'accent-dark': '#1d6f5e',       // Darker teal (pressed)
        'border-color': '#e0e0e0',      // Light border
        'border-dark': '#2a2a2a',       // Dark border
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],           // Elegant serif for headings
        'body': ['Inter', 'sans-serif'],                     // Clean sans for body
        'mono': ['Courier Prime', 'monospace'],              // Monospace for code/accent
      },
      fontSize: {
        'display-xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-md': ['36px', { lineHeight: '1.3' }],
      },
      spacing: {
        'section': '80px',
        'subsection': '40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'blob-morph': 'blobMorph 15s ease-in-out infinite',
        'gentle-drift': 'gentleDrift 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        blobMorph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        gentleDrift: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-40px) translateX(0px)' },
          '75%': { transform: 'translateY(-20px) translateX(-10px)' },
        },
      },
      borderRadius: {
        'xl-custom': '24px',
        'lg-custom': '16px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
