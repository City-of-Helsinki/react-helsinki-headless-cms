import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import type { MenuQuery, MenuQueryVariables } from './__generated__';
import { useMenuQuery as useMenuQueryWithoutClient } from './__generated__';

export const useMenuQuery = makeQueryWithApolloClientFromConfig<
  MenuQuery,
  MenuQueryVariables
>(useMenuQueryWithoutClient);

export type { MenuQuery, MenuQueryVariables } from './__generated__';
export { MenuDocument } from './__generated__';
