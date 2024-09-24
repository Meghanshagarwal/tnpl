/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'custom-gradient': 'linear-gradient(-90deg, #381F73 .22%, #6A3AD9 50.04%)',
    },
  },
  plugins: [],
}