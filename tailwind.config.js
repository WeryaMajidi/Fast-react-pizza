/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pizza: "Roboto mono, monospace",
    },
    extend: {
      colors: { blah: "#f8f9" },
    },
  },
  plugins: [],
};
