/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#C5C5C5",
        lightGrey: "#F9F9F9",
        darkGrey: "#5C5F62",
        bluePurple: "#6F47EB",
        danger: "#e11d48",
        success: "#16a34a",
      },
    },
  },
  plugins: [],
};
