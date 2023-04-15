/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'brand-gray': '#F8F8F8',
        'brand-green': '#038740'
      },
      textColor: {
        'brand-gray': '#F8F8F8',
        'brand-green': '#038740'
      },
    },
  },
  plugins: [],
}
