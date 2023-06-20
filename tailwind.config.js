/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        accent: '#E6FF00',
        accent2: '#1900FF',
        shade: '#787664',
        neutral: '#CAC4B7',
        canvas: '#F3F1EE',
        stroke: '#11190C',
      },
    },  
  },
  plugins: [],
};
