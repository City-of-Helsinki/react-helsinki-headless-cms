import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import type { MenuQuery, MenuQueryVariables } from './__generated__';
import { useMenuQuery as useMenuQueryWithoutClient } from './__generated__';

export const useMenuQuery = makeQueryWithApolloClientFromConfig<
  MenuQuery,
  MenuQueryVariables
>(useMenuQueryWithoutClient);

export { MenuQuery, MenuQueryVariables, MenuDocument } from './__generated__';
