/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx","./app/**/*.{js,jsx,ts,tsx}","./app/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#fcb67e",
        secondary: "#fff1a8",
        white: "#fdfcf7",
        red:"#fe6d79",
        green:"#a7df96",
        accentBlue:"077aab",
        grey:{
          100:"#eef2f2",
          200:"#e6eAeA",
          300:"#dbdfdf",
        }
    },
  },
  plugins: [],
}
};