module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    divideColor: theme => ({
      ...theme('borderColors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
     }),
    extend: {  
      transitionProperty: {
      'width': 'width',
      'spacing': 'margin, padding',
     }},
  },
  variants: {
    width: ["responsive", "hover", "focus" ],
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {},
  },
  plugins: [],
}
