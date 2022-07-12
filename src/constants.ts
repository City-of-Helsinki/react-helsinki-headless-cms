export const CMS_GRAPHQL_ENDPOINT =
  process.env.CMS_GRAPHQL_ENDPOINT ?? 'https://hkih.stage.geniem.io/graphql';
export const EVENTS_PROXY_ENDPOINT =
  process.env.EVENTS_GRAPHQL_ENDPOINT ??
  'https://tapahtumat-proxy.test.kuva.hel.ninja/proxy/graphql';
export const LINKED_EVENTS_ENDPOINT =
  process.env.LINKED_EVENTS_ENDPOINT ??
  'https://api.hel.fi/linkedevents/v1/event/';
