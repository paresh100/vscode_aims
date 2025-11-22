/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        muted: "#5b6578",
        accent: "#ff7d5a",
        "accent-2": "#5dd6c0",
        bg: "#f5f7fb"
      },
      fontFamily: {
        display: ["'Space Grotesk'", "'Manrope'", "ui-sans-serif", "system-ui"],
        body: ["'Manrope'", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        card: "0 20px 60px rgba(15, 23, 42, 0.08)",
        deep: "0 30px 90px rgba(0,0,0,0.25)"
      },
      borderRadius: {
        xl2: "18px"
      }
    }
  },
  plugins: []
};
