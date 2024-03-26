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
        "banner-image": "url('https://i.ibb.co/n6khD6m/banner.webp')",
        "count-image": "url('https://i.ibb.co/mvdTPwr/count.webp')",
      },
    },
  },
  plugins: [],
};
