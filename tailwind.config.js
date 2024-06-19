/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        skyBackgroundImage: "url('./src/assets/images/sky.png')",
        lightSkyBackgroundImage :"url('./src/assets/images/another-sky.png')"
      },
    },
    fontFamily: {
      darumadrop: ["darumadrop", "sans-serif"],
      dangrek: ["Dangrek", "sans-serif"],
    },
  },
  plugins: [],
};
