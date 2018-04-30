var path = require('path')

module.exports = {
  entry: './src/bulmahead.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bulmahead.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
