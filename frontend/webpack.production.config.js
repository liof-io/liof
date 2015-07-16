var path = require('path');
var webpack = require('webpack');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  entry: path.join(__dirname, "app/app"),

  output: {
    path: path.join(__dirname, "../app/assets/javascripts/"),
    filename: "bundle.js"
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ],

  module: {
    loaders: [
      { test: /\.js$|\.jsx$/, loader: 'react-hot!babel-loader' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
