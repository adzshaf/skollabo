// tailwind.config.js
module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ["Ubuntu", "sans-serif"],
      body: ["Ubuntu", "sans-serif"],
    },
    colors: {
      blue: {
        default: "#4856DF",
        bright: "#3EC1F3",
        cornflower: "#66B0F0",
      },
      mustard: {
        default: "#FFBE21",
        bright: "#FFCF2D",
      },
      pink: {
        default: "#FFB7D5",
        dark: "#E57281",
        purple: "#73325A",
      },
      red: {
        soft: "#A0505A",
        orange: "#FE5244",
        default: "#FE5244",
      },
      green: {
        blueish: "#3FB1B5",
        default: "#D0F0E4",
      },
      brick: "#A15842",
      cream: "#F5EBDD",
      white: "#FFFFFF",
    },
    extend: {
      padding: {
        96: "24rem",
        128: "32rem",
      },
      height: {
        96: "24rem",
        128: "32rem",
      },
      width: {
        96: "24rem",
        128: "32rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
