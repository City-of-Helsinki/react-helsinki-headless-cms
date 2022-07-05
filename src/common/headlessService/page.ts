import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import {
  usePageQuery as usePageQueryWithoutClient,
  PageQuery,
  PageQueryVariables,
} from './__generated__';

export const usePageQuery = makeQueryWithApolloClientFromConfig<
  PageQuery,
  PageQueryVariables
>(usePageQueryWithoutClient);

export { PageQuery, PageQueryVariables, PageDocument } from './__generated__';
