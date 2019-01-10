const webpack = require('webpack');

const GLOBALS = {};

module.exports = {
  context: __dirname + '/src',
  entry: ['./polyfill.js', './index.js'],

  target: 'web',
  output: {
    path: __dirname + '/out',
    filename: 'index.js',
    publicPath: '/js'
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /\/node_modules\//
      }
    ]
  },
  devServer: {
    stats: 'minimal',
    host: '0.0.0.0',
    port: 9999,
    disableHostCheck: true
  }
};
