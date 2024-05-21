/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*"],
  theme: {
    fontFamily: {
      roboCondensed: ["Roboto Condensed", 'sans-serif'],
    },
    extend: {
      colors: {
        //indigo thame
        customindigo: {
          light: '#EBF5FB',
          dark: '#D6EAF8',
        },
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
        '26': 'repeat(26, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-14': 'span 14 / span 14',
        'span-17': 'span 17 / span 17',
        'span-19': 'span 19 / span 19',
      },
      gridTemplateRows: {
        '14': 'repeat(14, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '22': 'repeat(22, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridRow: {
        'span-13': 'span 13 / span 13',
        'span-15': 'span 15 / span 15',

      },
    },
  },
  plugins: [],
}
