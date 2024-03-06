/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#333",
        "primary-foreground": "#eee",
        "nextflow-green": "#24B064",
        "error-red": "#FF6347",
        "warning-yellow": "#B0893A",
        "info-blue": "#4D90B0",
      },
      fontFamily: {
        title: ["Maven Pro", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
