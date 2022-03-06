const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js'),
    library: 'wr_p5_js',
    libraryTarget: 'commonjs'
  }
}