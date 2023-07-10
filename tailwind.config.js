/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
      'PTSerif': ['PT Serif', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

