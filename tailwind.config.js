module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      // picture:
      //   "0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3,0 0 120px #2196f3",
    },
    animation: {
      "move-left": "moveLeft 5s ease-in-out infinite alternate",
      "move-right": "moveRight 5s ease-in-out infinite alternate",
    },
    keyframes: {
      moveLeft: {
        "100%": { transform: "translateX(20px)" },
      },
      moveRight: {
        "100%": { transform: "translateX(-20px)" },
      },
    },
    extend: {},
  },
  plugins: [],
};
