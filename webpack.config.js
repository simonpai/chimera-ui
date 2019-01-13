const pathAPI = require('path');
const webpack = require('webpack');
const DefinePlugin = webpack.DefinePlugin;

const GLOBALS = {};

module.exports = {
  context: __dirname + '/src',
  entry: ['./polyfill.js', './index.js'],

  target: 'web',
  output: {
    path: pathAPI.join(__dirname, 'out/js'),
    filename: 'index.js',
    publicPath: '/js/'
  },
  plugins: [
    new DefinePlugin(GLOBALS),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /\/node_modules\//
      }
    ]
  }
};
