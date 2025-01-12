import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      geistMono: ['var(--font-geist-sans)'],
      geistSans: ['var(--font-geist-mono)']
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addBase, addComponents, addUtilities, config, theme }) {
      addUtilities({
        '.b': {
          border: '1px solid red'
        },

        // set max screen width
        '.setWidth': {
          width: '90%',
          margin: '0 auto',
          '@media (min-width: 640px)': {
            width: '95%'
          }
        },

        // remove scrollbar
        '.no-scrollbar': {
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },

        // style scrollbar
        '.set-scrollbar': {
          '&::-webkit-scrollbar': {
            width: '4px'
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#a8a4ff'
          }
        },

        // hide spin btn from input type number
        '.no-spin-btn': {
          '&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            '-moz-appearance': 'none',
            appearance: 'none',
            margin: '0px'
          },
          '&::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            '-moz-appearance': 'none',
            appearance: 'none',
            margin: '0px'
          },
          '&[type="number"]': {
            '-moz-appearance': 'textfield'
          }
        }
      });
    })
  ]
};

export default config;
