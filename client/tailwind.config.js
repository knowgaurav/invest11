/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "640px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
