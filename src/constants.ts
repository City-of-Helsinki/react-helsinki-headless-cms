export const CMS_GRAPHQL_ENDPOINT =
  process.env.CMS_GRAPHQL_ENDPOINT ??
  'https://app-staging.hkih.hion.dev/graphql';
export const EVENTS_PROXY_ENDPOINT =
  process.env.EVENTS_GRAPHQL_ENDPOINT ??
  'https://tapahtumat-proxy.test.kuva.hel.ninja/proxy/graphql';
export const LINKED_EVENTS_ENDPOINT =
  process.env.LINKED_EVENTS_ENDPOINT ??
  'https://api.hel.fi/linkedevents/v1/event/';
export const DEFAULT_LOCALE = 'fi';

export const RANDOM_CONTENT = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industrys standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only five centuries, but
also the leap into electronic typesetting, remaining essentially
unchanged. It was popularised in the 1960s with the release of Letraset
sheets containing Lorem Ipsum passages, and more recently with desktop
publishing software like Aldus PageMaker including versions of Lorem
Ipsum.`;
