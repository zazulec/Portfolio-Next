module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
