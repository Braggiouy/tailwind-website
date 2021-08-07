module.exports = {
  purge : [
    './public/**/*.html',
  ],
  darkMode : false, // or "media" or "class"
  theme : {
    extend : {
      backgroundImage: theme => ({
        'wave-pattern': 'url(../img/wave-white.png)',
        'pattern-white-dots': 'url(../img/pattern-white-dots.png)'
      })
    }
  },
  variants : {
    extend : {}
  },
  plugins : [],
}