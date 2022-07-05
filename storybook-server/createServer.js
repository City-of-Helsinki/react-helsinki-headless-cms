/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');

const express = require('express');

const setupDevOpsMiddleware = require('./setupDevopsMiddleware');
const setupProdMiddleware = require('./setupProdMiddleware');
const { setSignalReady } = require('./signalReadyUtil');

function createServer({ host, port }) {
  const app = express();

  setupDevOpsMiddleware(app);
  setupProdMiddleware(app, {
    outputPath: resolve(process.cwd(), 'storybook-static'),
    publicPath: '/',
  });

  // use the gzipped bundle
  app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz'; // eslint-disable-line
    res.set('Content-Encoding', 'gzip');
    next();
  });

  // Start your app.
  app.listen(port, host, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      return console.error(err.message);
    }

    setSignalReady();

    // eslint-disable-next-line no-console
    console.log(`App started: ${host}:${port}`);
  });
}

module.exports = createServer;
