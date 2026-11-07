/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        fb: {
          blue: 'var(--color-primary)',
          'blue-hover': 'var(--color-primary-hover)',
          'blue-light': 'var(--color-primary-light)',
          bg: 'var(--color-bg)',
          'bg-sec': 'var(--color-bg-secondary)',
          card: 'var(--color-card)',
          'card-hover': 'var(--color-card-hover)',
          text: 'var(--color-text)',
          'text-sec': 'var(--color-text-secondary)',
          'text-ter': 'var(--color-text-tertiary)',
          border: 'var(--color-border)',
          'border-light': 'var(--color-border-light)',
          divider: 'var(--color-divider)',
          navbar: 'var(--color-navbar)',
          success: 'var(--color-success)',
          error: 'var(--color-error)',
          like: 'var(--color-like)',
          'like-bg': 'var(--color-like-bg)',
          comment: 'var(--color-comment)',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        fb: 'var(--radius-md)',
      },
      boxShadow: {
        'fb': 'var(--shadow-card)',
        'fb-hover': 'var(--shadow-card-hover)',
        'fb-lg': 'var(--shadow-lg)',
      },
    },
  },
  plugins: [],
};
