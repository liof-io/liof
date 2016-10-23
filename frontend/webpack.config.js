var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * This is the Webpack configuration file for local development.
 */
module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'app')
  ],

  output: {
    path: path.join(__dirname, '../app/assets/javascripts/'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css')
  ],

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') },
      { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: 'react-hot!babel?stage=0' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
