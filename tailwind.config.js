/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      // backgroundSize: {
      //   'custom-bg-size': '100% 100vh',
      // },
      colors: {
        // font colors
        'sea-green': '#2EC57C',
        'sage': '#6E9A8E',
        'tiffany': '#95D1C1',
        'slate-grey': 'C7C9C9',
        'sage-transparent': 'rgba(214, 226, 223, 0.651)',
        
      },
    },
  },
  plugins: [],
}