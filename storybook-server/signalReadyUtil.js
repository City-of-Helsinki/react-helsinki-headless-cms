const OK = "OK";
const SERVER_IS_NOT_READY = "SERVER_IS_NOT_READY";

let serverIsReady = false;

const setSignalReady = () => {
  serverIsReady = true;
};

const checkIsServerReady = (response) => {
  if (serverIsReady) {
    response.send(OK);
  } else {
    response.status(500).send(SERVER_IS_NOT_READY);
  }
};

module.exports = {
  setSignalReady,
  checkIsServerReady,
};
