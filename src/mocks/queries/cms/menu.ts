import { graphql, HttpResponse } from 'msw';

import data from '../../responses/cms/menus/hobbies-menu-fi.json';
import {
  MenuDocument,
  type MenuQuery,
  type MenuQueryVariables,
} from '../../../apollo';

export const queryMenu = () =>
  graphql.query<MenuQuery, MenuQueryVariables>(
    MenuDocument,
    ({ variables }) => {
      if (variables.id === data.menu.name) {
        return HttpResponse.json({
          data: {
            ...data,
            menu: {
              ...data.menu,
              menuItems: {
                ...data.menu.menuItems,
                nodes: data.menu.menuItems.nodes.map((item) => ({
                  ...item,
                  __typename: 'MenuItem',
                })),
              },
            },
          },
        });
      }
      return HttpResponse.json({ data: { menu: null } });
    },
  );
