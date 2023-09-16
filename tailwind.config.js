/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ComicSans: ["Comic Sans MS", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
