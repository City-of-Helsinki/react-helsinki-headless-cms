import { PagesQuery } from '../../../common/headlessService/pages';

const mockPages: PagesQuery['pages'] = {
  edges: [
    {
      node: {
        id: 'aG9zdDo5Mg==',
        title: 'Page - test 1',
        lead: '<p>Some ingress text for the page</p>\n',
        slug: 'test-1',
        uri: '/en/uncategorized-en/test-3/',
        featuredImage: {
          node: {
            altText: 'some alt text',
            mediaItemUrl:
              'https://api.hel.fi/linkedevents-test/media/images/a-sip_netin_tapahtumakuva.1080x648_T3brYn4.jpg',
          },
        },
      },
    },
    {
      node: {
        id: 'bG9zdDo5Mg2==',
        title: 'Page - test 2',
        lead: '<p>Some ingress text for the page</p>\n',
        slug: 'test-2',
        uri: '/en/uncategorized-en/test-2/',
        featuredImage: {
          node: {
            altText: 'some alt text',
            mediaItemUrl:
              'https://api.hel.fi/linkedevents-test/media/images/a-sip_netin_tapahtumakuva.1080x648_T3brYn4.jpg',
          },
        },
      },
    },
    {
      node: {
        id: 'cG9zdDo5Mg3==',
        title: 'Page - test 3',
        lead: '<p>Some ingress text for the page</p>\n',
        slug: 'test-3',
        uri: '/en/uncategorized-en/test-3/',
        featuredImage: {
          node: {
            altText: 'some alt text',
            mediaItemUrl:
              'https://api.hel.fi/linkedevents-test/media/images/a-sip_netin_tapahtumakuva.1080x648_T3brYn4.jpg',
          },
        },
      },
    },
    {
      node: {
        id: 'dG9zdDo5Mg4==',
        title: 'Page - test 4',
        lead: '<p>Some ingress text for the page</p>\n',
        slug: 'test-3',
        uri: '/en/uncategorized-en/test-4/',
        featuredImage: {
          node: {
            altText: 'some alt text',
            mediaItemUrl:
              'https://api.hel.fi/linkedevents-test/media/images/a-sip_netin_tapahtumakuva.1080x648_T3brYn4.jpg',
          },
        },
      },
    },
    {
      node: {
        id: 'eG9zdDo5Mg5==',
        title: 'Page - test 5',
        lead: '<p>Some ingress text for the page</p>\n',
        slug: 'test-3',
        uri: '/en/uncategorized-en/test-5/',
        featuredImage: {
          node: {
            altText: 'some alt text',
            mediaItemUrl:
              'https://api.hel.fi/linkedevents-test/media/images/a-sip_netin_tapahtumakuva.1080x648_T3brYn4.jpg',
          },
        },
      },
    },
  ],
};

export default mockPages;
