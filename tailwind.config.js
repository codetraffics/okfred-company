/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#02A783",
        "primary-bg": "#fff",
        "secondary-bg": "#f8f8f8",
        "tertiary-bg": "#27272c",
        "primary-text": "#949494",
        "secondary-text": "#013025",
      },
      backgroundImage: {
        "banner-image":
          "url('https://i.ibb.co/5kgX4tF/erik-mclean-Vt-HK0-R6s-ARg-unsplash.jpg')",
        "count-image":
          "url('https://i.ibb.co/Fznvznr/billy-freeman-nkx-B5-Ab-ONY-unsplash.jpg')",
      },
    },
  },
  plugins: [],
};
