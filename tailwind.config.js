/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        allura: ["allura", "sans-serif"],
        PPEditNew: ["PPEditNew", "sans-serif"],
        firaSans: ["firaSans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

