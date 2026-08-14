/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-hover": "var(--surface-hover)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          "on-accent": "var(--text-on-accent)",
        },
        border: "var(--border)",
      }
    },
  },
  plugins: [],
}