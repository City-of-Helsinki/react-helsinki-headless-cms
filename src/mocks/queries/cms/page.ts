// eslint-disable-next-line import/no-extraneous-dependencies
import { graphql } from 'msw';

import kukkuuPageDemosivu from '../../responses/cms/page/kukkuu-page-demosivu.json';

export const queryPage = () =>
  graphql.query('Page', (req, res, ctx) => {
    if (req.variables.id === kukkuuPageDemosivu.page.id) {
      return res(ctx.data(kukkuuPageDemosivu));
    }
    return null;
  });
