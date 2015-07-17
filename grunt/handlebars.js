module.exports = {
  default: {
    options: {
      namespace: 'SH.templates',
      processName: function(filePath) {
          return filePath.replace(/src\/app\/templates\//, '').replace(/\.hbs$/, '');
      }
    },

    files: {
      'build/tmp/templates.js' : [ 'src/app/templates/*.hbs']
    }
  }
}