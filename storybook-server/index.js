/* eslint-disable @typescript-eslint/no-var-requires */
const createServer = require('./createServer');

// get the intended host and port number, use localhost and port 3000 if not provided
const host = process.env.HOST || '0.0.0.0'; // Let http.Server use its default IPv6/4 host
const port = process.env.PORT || 3000;

createServer({
  host,
  port,
});
