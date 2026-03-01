/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.10)",
        card: "0 10px 22px rgba(2, 6, 23, 0.12)",
      },
    },
  },
  plugins: [],
};