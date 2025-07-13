/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      sm: "340px",
      md: "540px",
      lg: "1024px",
      xl: "1180px",
    },
    container: {
      center:true,
      padding: {
        DEFAULT: "12px",
        md: "32px"
      }
    }
  },
  plugins: [],
}

