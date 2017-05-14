import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/:var(about|contact|collections|spring-summer|films)?', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.get('/api/collections', function(req, res) {
  res.type('application/json');
  res.sendFile(path.join( __dirname, '../src/data/collections.json'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});