const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

// https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement
// https://github.com/Stanko/react-tutorial/blob/master/webpack.config.js
// https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html
// TODO: Learn how webpack works

module.exports = {
  entry: './src/app.js',
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
        'https://code.jquery.com/jquery-3.1.1.slim.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js'
      ],
      append: true,
    })
  ]
};