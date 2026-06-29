/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#050816",
        navy: "#0b1224",
        glass: "rgba(15, 23, 42, 0.68)",
        line: "rgba(148, 163, 184, 0.18)",
        cyan: "#38bdf8",
        violet: "#8b5cf6",
        silver: "#cbd5e1",
      },
      boxShadow: {
        glow: "0 0 45px rgba(56, 189, 248, 0.18)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
