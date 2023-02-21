export enum CmsEndpoint {
  kultus = 'https://kultus.hkih.stage.geniem.io/graphql',
  kukkuu = 'https://kukkuu.hkih.stage.geniem.io/graphql',
  events = 'https://tapahtumat.hkih.stage.geniem.io/graphql',
  hobbies = 'https://harrastus.hkih.stage.geniem.io/graphql',
  sports = 'https://liikunta.hkih.stage.geniem.io/graphql',
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
