export enum CmsEndpoint {
  kultus = 'https://kultus.app-staging.hkih.hion.dev/graphql',
  kukkuu = 'https://kukkuu.app-staging.hkih.hion.dev/graphql',
  events = 'https://tapahtumat.app-staging.hkih.hion.dev/graphql',
  hobbies = 'https://harrastus.app-staging.hkih.hion.dev/graphql',
  sports = 'https://liikunta.app-staging.hkih.hion.dev/graphql',
}

export const cmsTestPage: Record<keyof typeof CmsEndpoint, string> = {
  kultus: '/testisivu/',
  kukkuu: '/kummitoimijat/',
  events: '/',
  hobbies: '/',
  sports: '/',
};

export const cmsMenuName: Record<keyof typeof CmsEndpoint, string> = {
  kultus: 'Palvelutarjotin-UI Header',
  kukkuu: 'Main Navigation FI',
  events: 'Events Helsinki Header FI',
  hobbies: 'Hobbies Helsinki Header FI',
  sports: 'Sports Helsinki Header FI',
};
