/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
          sm:"320px",
          vsm:"375px",
          lsm:"425px",
          lmd:"768px",
          md:"1024px",
          lg:"1440px",
          mxl:"2560px"
      }
    },
  },
  plugins: [],
} 

