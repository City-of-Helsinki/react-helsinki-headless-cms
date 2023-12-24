// eslint-disable-next-line import/no-extraneous-dependencies
import { graphql } from 'msw';

import data from '../../responses/cms/menus/hobbies-menu-fi.json';
import { MenuDocument } from '../../../apollo';

export const queryMenu = () =>
  graphql.query(MenuDocument, (req, res, ctx) => {
    if (req.variables.id === data.menu.name) {
      return res(ctx.data(data));
    }
    return null;
  });
