module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color: {
      primary: "#5f0580",
    },
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  daisyui: {
    styled: false,
    themes: false,
    base: true,
    utils: true,
  },
};
