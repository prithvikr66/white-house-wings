/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        skyBackgroundImage: "url('./src/assets/images/sky.png')",
      },
    },
    fontFamily: {
      darumadrop: ["darumadrop", "sans-serif"],
    },
  },
  plugins: [],
};
