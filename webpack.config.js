const path = require('path')

const entries = {
  'background': './src/background.js',
  'content': './src/content.js',
}

module.exports = {
  entry: entries,
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      // Build React and JavaScript code.
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
}