/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kulen': 'Koulen, Arial, Helvetica, sans-serif',
        'bayon': 'Bayon, sans-serif',
        'hanuman': 'Hanuman, serif'
      },
      colors: {
        'pri-custom-red': '#fa1939',
        'secon-custom-red': '#D90C16',
        'cus-black': '#161616',
        'F6F6F6': '#F6F6F6',
        '636b6f': '#636b6f',
        'black-opt-50': '#00000080'
      },
      backgroundImage: {
        'preview-image': 'url(http://localhost:1339/uploads/we_love_pizza_9d0ae16840.jpg)'
      },
      width: {
        '1170px': '1170px',
        '970px': '970px',
        '750px': '750px'
      },
      minWidth: {
        '160px': '160px',
        '768px': '768px',
        '400px': '400px',
        '450px': '450px',
        '350px': '350px',
        '300px': '300px',
        '320px': '320px',
        '1170px': '1170px',
        '200px': '200px',
        '250px': '250px',
        '180px': '180px',
        '160px': '160px',
      },
      maxWidth: {
        '400px': '400px',
        '450px': '450px',
        '350px': '350px',
        '300px': '300px',
        '320px': '320px',
        '1170px': '1170px'
      },
      minHeight: {
        '250px': '250px',
      },
      maxHeight: {
        '250px': '250px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
