var path = require('path')

module.exports = {
  entry: './src/bulmahead.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bulmahead.bundle.js',
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
}
