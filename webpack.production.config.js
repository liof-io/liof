var path = require('path');
var webpack = require('webpack');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  entry: "./app/assets/javascripts/main",

  output: {
    path: path.join(__dirname, "app/assets/javascripts/"),
    filename: "bundle.js"
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ],

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'react-hot!babel-loader' },
      { test: /\.cjsx$/, loader: 'coffee!cjsx' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.cjsx', '.coffee']
  }
}
