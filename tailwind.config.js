/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        accent: '#E6FF00',
        accent2: '#1900FF',
        shade: '#444638',
        neutral: '#CAC4B7',
        canvas: '#F3F1EE',
        // pearl: '#F8F6F4',
        pearl: '#FBFBFB',
        stroke: '#11190C',
      },
      backgroundImage: {
        mac: "url('/images/monterey.jpeg')"
      }
    },  
  },
  plugins: [],
};
