import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import type { PagesQuery, PagesQueryVariables } from './__generated__';
import { usePagesQuery as usePagesQueryWithoutClient } from './__generated__';

export const usePagesQuery = makeQueryWithApolloClientFromConfig<
  PagesQuery,
  PagesQueryVariables
>(usePagesQueryWithoutClient);

export {
  PagesQuery,
  PagesQueryVariables,
  PagesDocument,
} from './__generated__';
