/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'WhiteColor': '#ffffff',
        'ButtonColor': '#f97316',
        'ButtonHover': '#ea580c',
        'TextColor': '#2e1065'
      },
    },
  },
  plugins: [],
};
