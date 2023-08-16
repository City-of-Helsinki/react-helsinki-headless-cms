// eslint-disable-next-line import/no-extraneous-dependencies
import { graphql } from 'msw';

/** The eventIds used as the query variables */
export const eventIds = [
  'helsinki:agb5kr3nra',
  'harrastushaku:14523_2023010215001630',
  'harrastushaku:14503_2023010215001700',
  'harrastushaku:14524_2023010315001700',
  'harrastushaku:16143',
  'harrastushaku:14526_2023010515001630',
];

const yesterday = new Date(new Date().getTime() - 86400000);
const tomorrow = new Date(new Date().getTime() + 86400000);

export const futureEvents = [
  {
    id: 'harrastushaku:14524_2023010315001700',
    internalId:
      'https://api.hel.fi/linkedevents/v1/event/harrastushaku:14524_2023010315001700/',
    audienceMinAge: '9',
    audienceMaxAge: '11',
    eventStatus: 'EventRescheduled',
    externalLinks: [
      {
        name: 'registration',
        link: 'https://harrastushaku.fi/register/14524',
        __typename: 'ExternalLink',
      },
    ],
    images: [
      {
        id: '81529',
        name: '',
        url: 'https://www.harrastushaku.fi/images/activityimages/8898_dscn7427.jpg',
        photographerName: null,
        __typename: 'EventImage',
      },
    ],
    subEvents: [],
    typeId: 'Course',
    superEvent: {
      internalId:
        'https://api.hel.fi/linkedevents/v1/event/harrastushaku:14524/',
      __typename: 'InternalIdObject',
    },
    inLanguage: [],
    keywords: [
      {
        id: 'yso:p11617',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p11617/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'young people',
          fi: 'nuoret',
          sv: 'ungdomar',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
      {
        id: 'yso:p16485',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p16485/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'pupils',
          fi: 'koululaiset',
          sv: 'skolelever',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
      {
        id: 'yso:p2851',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p2851/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'art',
          fi: 'taide',
          sv: 'konst',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
    ],
    location: {
      id: 'tprek:20037',
      divisions: [
        {
          type: 'muni',
          name: {
            en: null,
            fi: 'Espoo',
            sv: 'Esbo',
            __typename: 'LocalizedObject',
          },
          __typename: 'Division',
        },
      ],
      hasUpcomingEvents: true,
      internalId: 'https://api.hel.fi/linkedevents/v1/place/tprek:20037/',
      email: 'grasa.nuoriso@espoo.fi',
      infoUrl: {
        en: 'https://www.espoo.fi/fi/nuoret/grasa-taitojen-talo',
        fi: 'https://www.espoo.fi/fi/nuoret/grasa-taitojen-talo',
        sv: 'https://www.espoo.fi/fi/nuoret/grasa-taitojen-talo',
        __typename: 'LocalizedObject',
      },
      name: {
        en: 'Gräsan taitojen talo',
        fi: 'Gräsa taitojen talo',
        sv: 'Gräsan taitojen talo',
        __typename: 'LocalizedObject',
      },
      addressLocality: {
        en: 'Espoo',
        fi: 'Espoo',
        sv: 'Esbo',
        __typename: 'LocalizedObject',
      },
      streetAddress: {
        en: 'Luomanportti 2',
        fi: 'Luomanportti 2',
        sv: 'Bäckporten 2',
        __typename: 'LocalizedObject',
      },
      postalCode: '02200',
      position: {
        coordinates: [24.758753, 60.173878],
        __typename: 'PlacePosition',
      },
      telephone: null,
      __typename: 'Place',
    },
    offers: [
      {
        isFree: true,
        price: null,
        description: {
          en: null,
          fi: 'Maksuton',
          sv: null,
          __typename: 'LocalizedObject',
        },
        infoUrl: null,
        __typename: 'Offer',
      },
    ],
    name: {
      en: null,
      fi: 'Craft´s world (9-11 -vuotaat)',
      sv: null,
      __typename: 'LocalizedObject',
    },
    description: {
      en: null,
      fi: '<p> Kerhossa tutustutaan tekstiilien värikkääseen maailmaan. Esimerkiksi huovutusta, ompelua, kankaan kuviointia, sekä lankatöitä. </p>',
      sv: null,
      __typename: 'LocalizedObject',
    },
    shortDescription: null,
    endTime: null,
    startTime: tomorrow.toISOString(),
    publisher: 'ahjo:u48040030',
    provider: {
      en: null,
      fi: 'Nuorisopalvelut, Espoon kaupunki',
      sv: null,
      __typename: 'LocalizedObject',
    },
    infoUrl: null,
    audience: [
      {
        id: 'yso:p11617',
        name: {
          en: 'young people',
          fi: 'nuoret',
          sv: 'ungdomar',
          __typename: 'LocalizedObject',
        },
        __typename: 'Audience',
      },
      {
        id: 'yso:p16485',
        name: {
          en: 'pupils',
          fi: 'koululaiset',
          sv: 'skolelever',
          __typename: 'LocalizedObject',
        },
        __typename: 'Audience',
      },
    ],
    locationExtraInfo: null,
    enrolmentStartTime: '2022-08-15T08:00:00+03:00',
    enrolmentEndTime: '2023-01-01T22:00:00+02:00',
    remainingAttendeeCapacity: 1,
    __typename: 'EventDetails',
  },
];

export const ongoingEvents = [
  {
    id: 'harrastushaku:14526_2023010515001630',
    internalId:
      'https://api.hel.fi/linkedevents/v1/event/harrastushaku:14526_2023010515001630/',
    audienceMinAge: '9',
    audienceMaxAge: '11',
    eventStatus: 'EventRescheduled',
    externalLinks: [
      {
        name: 'registration',
        link: 'https://harrastushaku.fi/register/14526',
        __typename: 'ExternalLink',
      },
    ],
    images: [
      {
        id: '71194',
        name: '',
        url: 'https://www.harrastushaku.fi/images/activityimages/8453_HARRASTUSHAKUUN.jpg',
        photographerName: null,
        __typename: 'EventImage',
      },
    ],
    subEvents: [],
    typeId: 'Course',
    superEvent: {
      internalId:
        'https://api.hel.fi/linkedevents/v1/event/harrastushaku:14526/',
      __typename: 'InternalIdObject',
    },
    inLanguage: [],
    keywords: [
      {
        id: 'yso:p11617',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p11617/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'young people',
          fi: 'nuoret',
          sv: 'ungdomar',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
      {
        id: 'yso:p16485',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p16485/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'pupils',
          fi: 'koululaiset',
          sv: 'skolelever',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
      {
        id: 'yso:p2851',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p2851/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'art',
          fi: 'taide',
          sv: 'konst',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
    ],
    location: {
      id: 'tprek:20037',
      divisions: [
        {
          type: 'muni',
          name: {
            en: null,
            fi: 'Espoo',
            sv: 'Esbo',
            __typename: 'LocalizedObject',
          },
          __typename: 'Division',
        },
      ],
      hasUpcomingEvents: true,
      internalId: 'https://api.hel.fi/linkedevents/v1/place/tprek:20037/',
      email: 'grasa.nuoriso@espoo.fi',
      infoUrl: {
        en: 'https://www.espoo.fi/fi/nuoret/grasa-taitojen-talo',
        fi: 'https://www.espoo.fi/fi/nuoret/grasa-taitojen-talo',
        sv: 'https://www.espoo.fi/fi/nuoret/grasa-taitojen-talo',
        __typename: 'LocalizedObject',
      },
      name: {
        en: 'Gräsan taitojen talo',
        fi: 'Gräsa taitojen talo',
        sv: 'Gräsan taitojen talo',
        __typename: 'LocalizedObject',
      },
      addressLocality: {
        en: 'Espoo',
        fi: 'Espoo',
        sv: 'Esbo',
        __typename: 'LocalizedObject',
      },
      streetAddress: {
        en: 'Luomanportti 2',
        fi: 'Luomanportti 2',
        sv: 'Bäckporten 2',
        __typename: 'LocalizedObject',
      },
      postalCode: '02200',
      position: {
        coordinates: [24.758753, 60.173878],
        __typename: 'PlacePosition',
      },
      telephone: null,
      __typename: 'Place',
    },
    offers: [
      {
        isFree: true,
        price: null,
        description: {
          en: null,
          fi: 'Maksuton',
          sv: null,
          __typename: 'LocalizedObject',
        },
        infoUrl: null,
        __typename: 'Offer',
      },
    ],
    name: {
      en: null,
      fi: 'Ompelukerho (9-11 -vuotiaat)',
      sv: null,
      __typename: 'LocalizedObject',
    },
    description: {
      en: null,
      fi: '<p> Ompelukerhossa tutustutaan ompelun maailmaan ja tehdään erilaisia ompelutöitä ja tutustutaan myös erilaisiin ompelun tekniikoihin ja opetellaan käyttämään ompelukonetta monipuolisesti. </p>',
      sv: null,
      __typename: 'LocalizedObject',
    },
    shortDescription: null,
    endTime: tomorrow.toISOString(),
    startTime: yesterday.toISOString(),
    publisher: 'ahjo:u48040030',
    provider: {
      en: null,
      fi: 'Nuorisopalvelut, Espoon kaupunki',
      sv: null,
      __typename: 'LocalizedObject',
    },
    infoUrl: null,
    audience: [
      {
        id: 'yso:p11617',
        name: {
          en: 'young people',
          fi: 'nuoret',
          sv: 'ungdomar',
          __typename: 'LocalizedObject',
        },
        __typename: 'Audience',
      },
      {
        id: 'yso:p16485',
        name: {
          en: 'pupils',
          fi: 'koululaiset',
          sv: 'skolelever',
          __typename: 'LocalizedObject',
        },
        __typename: 'Audience',
      },
    ],
    locationExtraInfo: null,
    enrolmentStartTime: '2022-08-15T08:00:00+03:00',
    enrolmentEndTime: '2022-08-28T22:00:00+03:00',
    remainingAttendeeCapacity: 1,
    __typename: 'EventDetails',
  },
];

/** The ongoing events and the events in the future. */
export const activeEvents = [...ongoingEvents, ...futureEvents];

export const pastEventsWithoutEndingTime = [
  {
    id: 'harrastushaku:14523_2023010215001630',
    internalId:
      'https://api.hel.fi/linkedevents/v1/event/harrastushaku:14523_2023010215001630/',
    audienceMinAge: '9',
    audienceMaxAge: '11',
    eventStatus: 'EventRescheduled',
    externalLinks: [
      {
        name: 'registration',
        link: 'https://harrastushaku.fi/register/14523',
        __typename: 'ExternalLink',
      },
    ],
    images: [
      {
        id: '81528',
        name: '',
        url: 'https://www.harrastushaku.fi/images/activityimages/9725_1.jpg',
        photographerName: null,
        __typename: 'EventImage',
      },
    ],
    subEvents: [],
    typeId: 'Course',
    superEvent: {
      internalId:
        'https://api.hel.fi/linkedevents/v1/event/harrastushaku:14523/',
      __typename: 'InternalIdObject',
    },
    inLanguage: [],
    keywords: [
      {
        id: 'yso:p11617',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p11617/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'young people',
          fi: 'nuoret',
          sv: 'ungdomar',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
      {
        id: 'yso:p16485',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p16485/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'pupils',
          fi: 'koululaiset',
          sv: 'skolelever',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
      {
        id: 'yso:p2851',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p2851/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'art',
          fi: 'taide',
          sv: 'konst',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
    ],
    location: {
      id: 'tprek:20037',
      divisions: [
        {
          type: 'muni',
          name: {
            en: null,
            fi: 'Espoo',
            sv: 'Esbo',
            __typename: 'LocalizedObject',
          },
          __typename: 'Division',
        },
      ],
      hasUpcomingEvents: true,
      internalId: 'https://api.hel.fi/linkedevents/v1/place/tprek:20037/',
      email: 'grasa.nuoriso@espoo.fi',
      infoUrl: {
        en: 'https://www.espoo.fi/fi/nuoret/grasa-taitojen-talo',
        fi: 'https://www.espoo.fi/fi/nuoret/grasa-taitojen-talo',
        sv: 'https://www.espoo.fi/fi/nuoret/grasa-taitojen-talo',
        __typename: 'LocalizedObject',
      },
      name: {
        en: 'Gräsan taitojen talo',
        fi: 'Gräsa taitojen talo',
        sv: 'Gräsan taitojen talo',
        __typename: 'LocalizedObject',
      },
      addressLocality: {
        en: 'Espoo',
        fi: 'Espoo',
        sv: 'Esbo',
        __typename: 'LocalizedObject',
      },
      streetAddress: {
        en: 'Luomanportti 2',
        fi: 'Luomanportti 2',
        sv: 'Bäckporten 2',
        __typename: 'LocalizedObject',
      },
      postalCode: '02200',
      position: {
        coordinates: [24.758753, 60.173878],
        __typename: 'PlacePosition',
      },
      telephone: null,
      __typename: 'Place',
    },
    offers: [
      {
        isFree: true,
        price: null,
        description: {
          en: null,
          fi: 'Maksuton',
          sv: null,
          __typename: 'LocalizedObject',
        },
        infoUrl: null,
        __typename: 'Offer',
      },
    ],
    name: {
      en: null,
      fi: 'Art&Crafts ( 9-11 -vuotiaat)',
      sv: null,
      __typename: 'LocalizedObject',
    },
    description: {
      en: null,
      fi: '<p> <span style="background-color: initial;">Tule tekemään aarteita askartelemalla. Heittäydytään luovuuden syövereihin samalla tutustuen eri tekniikoihin ja materiaaleihin. Luomme kierrätysmateriaaleille askartelemalla uuden elämän.</span> </p>',
      sv: null,
      __typename: 'LocalizedObject',
    },
    shortDescription: null,
    endTime: null,
    startTime: '2023-01-02T13:00:00Z',
    publisher: 'ahjo:u48040030',
    provider: {
      en: null,
      fi: 'Nuorisopalvelut, Espoon kaupunki',
      sv: null,
      __typename: 'LocalizedObject',
    },
    infoUrl: null,
    audience: [
      {
        id: 'yso:p11617',
        name: {
          en: 'young people',
          fi: 'nuoret',
          sv: 'ungdomar',
          __typename: 'LocalizedObject',
        },
        __typename: 'Audience',
      },
      {
        id: 'yso:p16485',
        name: {
          en: 'pupils',
          fi: 'koululaiset',
          sv: 'skolelever',
          __typename: 'LocalizedObject',
        },
        __typename: 'Audience',
      },
    ],
    locationExtraInfo: null,
    enrolmentStartTime: '2022-08-15T08:00:00+03:00',
    enrolmentEndTime: '2023-01-31T22:00:00+02:00',
    remainingAttendeeCapacity: 1,
    __typename: 'EventDetails',
  },
];

/** All the events in the past, with or withiout the ending time. */
export const pastEvents = [
  ...pastEventsWithoutEndingTime,
  {
    id: 'harrastushaku:14503_2023010215001700',
    internalId:
      'https://api.hel.fi/linkedevents/v1/event/harrastushaku:14503_2023010215001700/',
    audienceMinAge: '10',
    audienceMaxAge: '12',
    eventStatus: 'EventRescheduled',
    externalLinks: [
      {
        name: 'registration',
        link: 'https://harrastushaku.fi/register/14503',
        __typename: 'ExternalLink',
      },
    ],
    images: [
      {
        id: '71188',
        name: '',
        url: 'https://www.harrastushaku.fi/images/activityimages/8444_Ruukuntekij.jpg',
        photographerName: null,
        __typename: 'EventImage',
      },
    ],
    subEvents: [],
    typeId: 'Course',
    superEvent: {
      internalId:
        'https://api.hel.fi/linkedevents/v1/event/harrastushaku:14503/',
      __typename: 'InternalIdObject',
    },
    inLanguage: [],
    keywords: [
      {
        id: 'yso:p11617',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p11617/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'young people',
          fi: 'nuoret',
          sv: 'ungdomar',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
      {
        id: 'yso:p16485',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p16485/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'pupils',
          fi: 'koululaiset',
          sv: 'skolelever',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
      {
        id: 'yso:p2851',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p2851/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'art',
          fi: 'taide',
          sv: 'konst',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
    ],
    location: {
      id: 'tprek:20037',
      divisions: [
        {
          type: 'muni',
          name: {
            en: null,
            fi: 'Espoo',
            sv: 'Esbo',
            __typename: 'LocalizedObject',
          },
          __typename: 'Division',
        },
      ],
      hasUpcomingEvents: true,
      internalId: 'https://api.hel.fi/linkedevents/v1/place/tprek:20037/',
      email: 'grasa.nuoriso@espoo.fi',
      infoUrl: {
        en: 'https://www.espoo.fi/fi/nuoret/grasa-taitojen-talo',
        fi: 'https://www.espoo.fi/fi/nuoret/grasa-taitojen-talo',
        sv: 'https://www.espoo.fi/fi/nuoret/grasa-taitojen-talo',
        __typename: 'LocalizedObject',
      },
      name: {
        en: 'Gräsan taitojen talo',
        fi: 'Gräsa taitojen talo',
        sv: 'Gräsan taitojen talo',
        __typename: 'LocalizedObject',
      },
      addressLocality: {
        en: 'Espoo',
        fi: 'Espoo',
        sv: 'Esbo',
        __typename: 'LocalizedObject',
      },
      streetAddress: {
        en: 'Luomanportti 2',
        fi: 'Luomanportti 2',
        sv: 'Bäckporten 2',
        __typename: 'LocalizedObject',
      },
      postalCode: '02200',
      position: {
        coordinates: [24.758753, 60.173878],
        __typename: 'PlacePosition',
      },
      telephone: null,
      __typename: 'Place',
    },
    offers: [
      {
        isFree: true,
        price: null,
        description: {
          en: null,
          fi: 'maksuton',
          sv: null,
          __typename: 'LocalizedObject',
        },
        infoUrl: null,
        __typename: 'Offer',
      },
    ],
    name: {
      en: null,
      fi: 'Keramiikka (10-12 -vuotiaille)',
      sv: null,
      __typename: 'LocalizedObject',
    },
    description: {
      en: null,
      fi: '<p> <span style="background-color: initial;">Keramiikkakerhoissa muotoilemme savesta astioita ja sisustusesineitä eri tekniikoita käyttäen. Samalla tutuksi tulevat myös keramiikan valmistuksen muut vaiheet kuten koristelu ja lasittaminen.</span> </p>',
      sv: null,
      __typename: 'LocalizedObject',
    },
    shortDescription: null,
    endTime: '2023-01-02T15:00:00Z',
    startTime: '2023-01-02T13:00:00Z',
    publisher: 'ahjo:u48040030',
    provider: {
      en: null,
      fi: 'Nuorisopalvelut, Espoon kaupunki',
      sv: null,
      __typename: 'LocalizedObject',
    },
    infoUrl: null,
    audience: [
      {
        id: 'yso:p11617',
        name: {
          en: 'young people',
          fi: 'nuoret',
          sv: 'ungdomar',
          __typename: 'LocalizedObject',
        },
        __typename: 'Audience',
      },
      {
        id: 'yso:p16485',
        name: {
          en: 'pupils',
          fi: 'koululaiset',
          sv: 'skolelever',
          __typename: 'LocalizedObject',
        },
        __typename: 'Audience',
      },
    ],
    locationExtraInfo: null,
    enrolmentStartTime: '2022-08-15T08:00:00+03:00',
    enrolmentEndTime: '2022-08-28T22:00:00+03:00',
    remainingAttendeeCapacity: 1,
    __typename: 'EventDetails',
  },
  {
    id: 'helsinki:agb5kr3nra',
    internalId: 'https://api.hel.fi/linkedevents/v1/event/helsinki:agb5kr3nra/',
    audienceMinAge: null,
    audienceMaxAge: null,
    eventStatus: 'EventScheduled',
    externalLinks: [],
    images: [
      {
        id: '85018',
        name: 'äly ja väläys.jpg',
        url: 'https://api.hel.fi/linkedevents/media/images/%C3%A4ly_ja_v%C3%A4l%C3%A4ys.jpg',
        photographerName: '',
        __typename: 'EventImage',
      },
    ],
    subEvents: [],
    typeId: 'Course',
    superEvent: {
      internalId:
        'https://api.hel.fi/linkedevents/v1/event/helsinki:agb5kr34du/',
      __typename: 'InternalIdObject',
    },
    inLanguage: [
      {
        name: {
          en: null,
          fi: 'suomi',
          sv: null,
          __typename: 'LocalizedObject',
        },
        __typename: 'InLanguage',
      },
    ],
    keywords: [
      {
        id: 'yso:p10590',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p10590/',
        dataSource: 'yso',
        hasUpcomingEvents: false,
        name: {
          en: 'social interaction',
          fi: 'sosiaalinen vuorovaikutus',
          sv: 'social interaktion',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
      {
        id: 'yso:p1947',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p1947/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'well-being',
          fi: 'hyvinvointi',
          sv: 'välfärd',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
      {
        id: 'yso:p2433',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p2433/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'older people',
          fi: 'ikääntyneet',
          sv: 'äldre',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
      {
        id: 'yso:p6062',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p6062/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'games',
          fi: 'pelit',
          sv: 'spel',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
      {
        id: 'yso:p7642',
        internalId: 'https://api.hel.fi/linkedevents/v1/keyword/yso:p7642/',
        dataSource: 'yso',
        hasUpcomingEvents: true,
        name: {
          en: 'clubs (recreational)',
          fi: 'kerhot',
          sv: 'klubbar (fritidsverksamhet)',
          __typename: 'LocalizedObject',
        },
        __typename: 'Keyword',
      },
    ],
    location: {
      id: 'tprek:8841',
      divisions: [
        {
          type: 'sub_district',
          name: {
            en: null,
            fi: 'Roihuvuori',
            sv: 'Kasberget',
            __typename: 'LocalizedObject',
          },
          __typename: 'Division',
        },
        {
          type: 'muni',
          name: {
            en: null,
            fi: 'Helsinki',
            sv: 'Helsingfors',
            __typename: 'LocalizedObject',
          },
          __typename: 'Division',
        },
        {
          type: 'district',
          name: {
            en: null,
            fi: 'Herttoniemi',
            sv: 'Hertonäs',
            __typename: 'LocalizedObject',
          },
          __typename: 'Division',
        },
        {
          type: 'neighborhood',
          name: {
            en: null,
            fi: 'Herttoniemi',
            sv: 'Hertonäs',
            __typename: 'LocalizedObject',
          },
          __typename: 'Division',
        },
      ],
      hasUpcomingEvents: true,
      internalId: 'https://api.hel.fi/linkedevents/v1/place/tprek:8841/',
      email: 'roihuvuoren.palvelukeskus@hel.fi',
      infoUrl: null,
      name: {
        en: 'Roihuvuori senior centre',
        fi: 'Roihuvuoren seniorikeskus',
        sv: 'Kasbergets seniorcenter',
        __typename: 'LocalizedObject',
      },
      addressLocality: {
        en: 'Helsinki',
        fi: 'Helsinki',
        sv: 'Helsingfors',
        __typename: 'LocalizedObject',
      },
      streetAddress: {
        en: 'Punahilkantie 16',
        fi: 'Punahilkantie 16',
        sv: 'Rödluvans väg 16',
        __typename: 'LocalizedObject',
      },
      postalCode: '00820',
      position: {
        coordinates: [25.063326, 60.203407],
        __typename: 'PlacePosition',
      },
      telephone: {
        en: null,
        fi: '+358 9 310 60790',
        sv: null,
        __typename: 'LocalizedObject',
      },
      __typename: 'Place',
    },
    offers: [
      {
        isFree: true,
        price: null,
        description: null,
        infoUrl: null,
        __typename: 'Offer',
      },
    ],
    name: {
      en: null,
      fi: 'Äly ja väläys',
      sv: null,
      __typename: 'LocalizedObject',
    },
    description: {
      en: null,
      fi: '<p>Tapahtuma on tarkoitettu vain eläkeläisille ja työttömille, joilla on palvelukeskuskortti.</p><p>Ryhmä, jossa tuetaan muistia ja virkistetään aivoja. Lisätietoja sosiaaliohjaaja Birgitta Tirkkonen p. 09 310 46925.</p>',
      sv: null,
      __typename: 'LocalizedObject',
    },
    shortDescription: {
      en: null,
      fi: 'Ryhmä, jossa tuetaan muistia ja virkistetään aivoja.',
      sv: null,
      __typename: 'LocalizedObject',
    },
    endTime: '2023-01-02T09:00:00Z',
    startTime: '2023-01-02T08:00:00Z',
    publisher: 'ahjo:u320200303050',
    provider: {
      en: null,
      fi: '',
      sv: null,
      __typename: 'LocalizedObject',
    },
    infoUrl: {
      en: null,
      fi: '',
      sv: null,
      __typename: 'LocalizedObject',
    },
    audience: [
      {
        id: 'helsinki:aflfbat76e',
        name: {
          en: null,
          fi: 'palvelukeskuskortti',
          sv: null,
          __typename: 'LocalizedObject',
        },
        __typename: 'Audience',
      },
      {
        id: 'yso:p2433',
        name: {
          en: 'older people',
          fi: 'ikääntyneet',
          sv: 'äldre',
          __typename: 'LocalizedObject',
        },
        __typename: 'Audience',
      },
    ],
    locationExtraInfo: {
      en: null,
      fi: '',
      sv: null,
      __typename: 'LocalizedObject',
    },
    enrolmentStartTime: null,
    enrolmentEndTime: null,
    remainingAttendeeCapacity: null,
    __typename: 'EventDetails',
  },
];

/**
    Query to fetch event selection module in the Carousel-component.

    Example query taken from the real response of Hobbies staging CMS: https://hobbies-graphql-proxy.test.hel.ninja/proxy/graphql.
    The response is modified so that there are 2 ongoing events and the rest of them are in the past.

    query:
    ```
    query EventsByIds($ids: [ID!]!, $eventType: [EventTypeId], $include: [String], $sort: String, $pageSize: Int, $page: Int, $start: String, $end: String) {
        eventsByIds(
            ids: $ids
            eventType: $eventType
            include: $include
            sort: $sort
            pageSize: $pageSize
            page: $page
            start: $start
            end: $end
        ) {
            data {
                ...eventCmsEventFields
                __typename
                }
                meta {
                count
                next
                previous
                __typename
                }
                __typename
            }
        }

        fragment eventCmsEventFields on EventDetails {
            id
            internalId
            audienceMinAge
            audienceMaxAge
            eventStatus
            externalLinks {
                name
                link
                __typename
            }
            images {
                id
                name
                url
                photographerName
                __typename
            }
            subEvents {
                internalId
                __typename
            }
            typeId
            superEvent {
                internalId
                __typename
            }
            inLanguage {
                name {
                ...localizedCmsEventFields
                __typename
                }
                __typename
            }
            keywords {
                ...keywordCmsEventFields
                __typename
            }
            location {
                ...placeCmsEventFields
                __typename
            }
            offers {
                ...offerCmsEventFields
                __typename
            }
            name {
                ...localizedCmsEventFields
                __typename
            }
            description {
                ...localizedCmsEventFields
                __typename
            }
            shortDescription {
                ...localizedCmsEventFields
                __typename
            }
            endTime
            startTime
            publisher
            provider {
                ...localizedCmsEventFields
                __typename
            }
            infoUrl {
                ...localizedCmsEventFields
                __typename
            }
            audience {
                id
                name {
                ...localizedCmsEventFields
                __typename
                }
                __typename
            }
            locationExtraInfo {
                ...localizedCmsEventFields
                __typename
            }
            enrolmentStartTime
            enrolmentEndTime
            remainingAttendeeCapacity
            __typename
        }

        fragment localizedCmsEventFields on LocalizedObject {
            en
            fi
            sv
            __typename
        }

        fragment keywordCmsEventFields on Keyword {
            id
            internalId
            dataSource
            hasUpcomingEvents
            name {
                ...localizedCmsEventFields
                __typename
            }
            __typename
        }

        fragment placeCmsEventFields on Place {
            id
            divisions {
                type
                name {
                ...localizedCmsEventFields
                __typename
                }
                __typename
            }
            hasUpcomingEvents
            internalId
            email
            infoUrl {
                ...localizedCmsEventFields
                __typename
            }
            name {
                ...localizedCmsEventFields
                __typename
            }
            addressLocality {
                ...localizedCmsEventFields
                __typename
            }
            streetAddress {
                ...localizedCmsEventFields
                __typename
            }
            postalCode
            position {
                coordinates
                __typename
            }
            telephone {
                ...localizedCmsEventFields
                __typename
            }
            __typename
        }

        fragment offerCmsEventFields on Offer {
            isFree
            price {
                ...localizedCmsEventFields
                __typename
            }
            description {
                ...localizedCmsEventFields
                __typename
            }
            infoUrl {
                ...localizedCmsEventFields
                __typename
            }
            __typename
        }
    }
    ```

    vars:
    ```
    {
        "ids": [
            "helsinki:agb5kr3nra",
            "harrastushaku:14523_2023010215001630",
            "harrastushaku:14503_2023010215001700",
            "harrastushaku:14524_2023010315001700",
            "harrastushaku:16143",
            "harrastushaku:14526_2023010515001630"
        ],
        "pageSize": 6,
        "include": [
            "in_language",
            "keywords",
            "location",
            "audience"
        ],
        "eventType": [
            "General",
            "Course"
        ]
    }
    ```
*/
export const queryPageEventSelectioModule = () =>
  graphql.query('EventsByIds', (req, res, ctx) =>
    res(
      ctx.data({
        eventsByIds: {
          data: [...activeEvents, ...pastEvents],
          meta: {
            count: 5,
            next: null,
            previous: null,
            __typename: 'Meta',
          },
          __typename: 'EventListResponse',
        },
      }),
    ),
  );
