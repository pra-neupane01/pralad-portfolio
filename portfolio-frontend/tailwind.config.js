/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#030a06",
        navy: "#06130d",
        glass: "rgba(15, 23, 42, 0.68)",
        line: "rgba(148, 163, 184, 0.18)",
        cyan: "#34d399",
        violet: "#a3e635",
        silver: "#cbd5e1",
      },
      boxShadow: {
        glow: "0 0 45px rgba(52, 211, 153, 0.18)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
