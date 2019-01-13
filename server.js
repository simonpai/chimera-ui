const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
config.mode = 'development';

const compiler = webpack(config);

const app = express();

app.use('/css', express.static(__dirname + '/out/css'));
app.get('/', (req,res) => res.sendFile(__dirname + '/src/index.html'));

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.listen(9999, function () {
  console.log('Listening on port 9999.\n');
});
