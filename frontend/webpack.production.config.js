var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  entry: path.join(__dirname, 'app/app'),

  output: {
    path: path.join(__dirname, '../app/assets/javascripts/'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('../stylesheets/bundle.css')
  ],

  module: {
    loaders: [
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') },
      { test: /\.js$|\.jsx$/, loader: 'babel?stage=0' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
