import { graphql, HttpResponse } from 'msw';

import kukkuuPageDemosivu from '../../responses/cms/page/kukkuu-page-demosivu.json';
import type {
  PageQuery,
  PageQueryVariables,
  LanguageCodeEnum,
} from '../../../apollo';

export const queryPage = () =>
  graphql.query<PageQuery, PageQueryVariables>('Page', ({ variables }) => {
    if (
      variables.id === kukkuuPageDemosivu.page?.id &&
      kukkuuPageDemosivu.page
    ) {
      return HttpResponse.json({
        data: {
          page: {
            ...kukkuuPageDemosivu.page,
            seo: {
              ...kukkuuPageDemosivu.page.seo,
              __typename: 'SEO',
            },
            language: {
              ...kukkuuPageDemosivu.page.language,
              __typename: 'Language',
              code: kukkuuPageDemosivu.page.language?.code as LanguageCodeEnum,
            },
            // The typename needs to be explicitly defined as 'Page'
            // because the mock data has it as 'page' (lowercase).
            __typename: 'Page',
          },
        },
      });
    }
    return HttpResponse.json({ data: { page: null } });
  });
