import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import type { PageQuery, PageQueryVariables } from './__generated__';
import { usePageQuery as usePageQueryWithoutClient } from './__generated__';

export const usePageQuery = makeQueryWithApolloClientFromConfig<
  PageQuery,
  PageQueryVariables
>(usePageQueryWithoutClient);

export { PageQuery, PageQueryVariables, PageDocument } from './__generated__';
