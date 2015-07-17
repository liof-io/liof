var path = require('path');
var webpack = require('webpack');
var csswring = require('csswring');
var autoprefixer = require('autoprefixer-core');

/**
 * This is the Webpack configuration file for local development.
 */
module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(__dirname, "app/app")
  ],

  output: {
    path: path.join(__dirname, "../app/assets/javascripts/"),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css!postcss' },
      { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: 'react-hot!babel?stage=0' }
    ]
  },

  postcss: {
    defaults: [autoprefixer, csswring]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
