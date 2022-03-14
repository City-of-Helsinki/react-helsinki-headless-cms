/* eslint-disable @typescript-eslint/no-var-requires */
const { checkIsServerReady } = require("./signalReadyUtil");

function setupDevOps(app) {
  app.get("/healthz", (request, response) => {
    checkIsServerReady(response);
  });

  app.get("/readiness", (request, response) => {
    checkIsServerReady(response);
  });
}

module.exports = setupDevOps;
