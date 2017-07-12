const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  plugins: [new HtmlWebpackPlugin()]
};
