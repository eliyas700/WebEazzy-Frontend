/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#4E4B66",
          secondary: "#ECECEC",
          accent: "#2c3e50",
          neutral: "#F3F4F6",
          "base-100": "#ffffff",
          info: "#716f6f",
          success: "#2fbccc",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
