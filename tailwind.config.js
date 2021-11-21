module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'black-200': '#222',
      'black-100': '#333',
      'white': 'white',
      'green': '#1EAE98'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}