import {
  CategoriesQuery,
  LanguageCodeEnum,
} from '../../../common/headlessService/__generated__';

const mockCategories: CategoriesQuery['categories'] = {
  nodes: [
    {
      id: 'dGVybTox',
      databaseId: 1,
      name: 'General',
      slug: 'general',
      uri: '/en/category/general/',
      translations: [
        {
          name: 'Allmän',
          slug: 'allman',
          uri: '/sv/category/allman/',
          language: {
            id: 'TGFuZ3VhZ2U6c3Y=',
            code: LanguageCodeEnum.Sv,
            slug: 'sv',
            locale: 'sv_SE',
          },
        },
        {
          name: 'Yleinen',
          slug: 'yleinen',
          uri: '/category/yleinen/',
          language: {
            id: 'TGFuZ3VhZ2U6Zmk=',
            code: LanguageCodeEnum.Fi,
            slug: 'fi',
            locale: 'fi',
          },
        },
      ],
      __typename: 'Category',
    },
    {
      id: 'dGVybTo3Mg==',
      databaseId: 70,
      name: 'News',
      slug: 'news',
      uri: '/en/category/news/',
      translations: [
        {
          name: 'Uutiset',
          slug: 'uutiset',
          uri: '/category/uutiset/',
          language: {
            id: 'TGFuZ3VhZ2U6Zmk=',
            code: LanguageCodeEnum.Fi,
            slug: 'fi',
            locale: 'fi',
          },
        },
        {
          name: 'Nyheter',
          slug: 'nyheter',
          uri: '/sv/category/nyheter/',
          language: {
            id: 'TGFuZ3VhZ2U6c3Y=',
            code: LanguageCodeEnum.Sv,
            slug: 'sv',
            locale: 'sv_SE',
          },
        },
      ],
      __typename: 'Category',
    },
  ],
};

export default mockCategories;
