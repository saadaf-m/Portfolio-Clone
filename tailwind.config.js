/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      'xs': '360px',  // => @media (min-width: 360px) {...}
      's': '480px',   // => @media (min-width: 480px) {...}
      'md': '768px',  // => @media (min-width: 768px) {...}
      'lg': '1024px', // => @media (min-width: 1024px) {...}
      'lg2': '1262px',// => @media (min-width: 1262px) {...}
      'xl': '1280px', // => @media (min-width: 1280px) {...}
      '2xl': '1440px' // => @media (min-width: 1440px) {...}
    },
    extend: {
      colors: {
        // container colors
        'container-shade-1': 'rgba(55, 78, 72, 0.23)',
        'container-shade-2': 'rgba(127, 180, 166, 0.43)',
        'container-border-1': '#006A4E',
        'container-border-2': '#00D099',

        'container-project-gradient-1': 'rgba(127, 180, 166, 0.29)',
        'container-project-gradient-2': 'rgba(55, 78, 72, 0.12)',
        // other features
        'dark-tempered-glass': '#052E23',
        'blood': '#6A0000',
        // font colors
        'sea-green': '#2EC57C',
        'sea-green-transparent': 'rgba(46, 197, 124, 0.651)',
        'sage': '#6E9A8E',
        'tiffany': '#95D1C1',
        'slate-grey': '#C7C9C9',
        'sage-transparent': 'rgba(214, 226, 223, 0.651)',
        'nav-link-hover-color': 'rgba(239, 243, 237, 0.952)', 
        // unused colors
        'seafoam-green': '#93E9BE',
        'clay-green': '#739A78',
        'stone-green': '#2E4339',
        'dark-tempered-glass-alt': '#042f24',
        'seaweed': '#121614',
        'tomato': '#9D0000'
      },
      fontFamily: {
        consola: ['CONSOLA', 'monospace'],
        Consolas: ['Consolas', 'monospace'],
        'droid-sans': ['"Droid Sans"', 'monospace'],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
        'roboto-flex': ['"Roboto Flex"', 'sans-serif'],
        monospace: ['Monospace', 'monospace'],
      }
    },
  },
  plugins: [],
}