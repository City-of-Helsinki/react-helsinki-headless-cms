/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const express = require("express");
const compression = require("compression");

module.exports = function prodMiddleware(app, options) {
  const publicPath = options.publicPath || "/";
  const outputPath = options.outputPath || path.resolve(process.cwd(), "build");

  app.use(compression());
  app.use(publicPath, express.static(outputPath));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(outputPath, "index.html"))
  );
};
