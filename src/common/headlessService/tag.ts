import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import {
  useTagQuery as useTagQueryWithoutClient,
  TagQuery,
  TagQueryVariables,
} from './__generated__';

export const useTagQuery = makeQueryWithApolloClientFromConfig<
  TagQuery,
  TagQueryVariables
>(useTagQueryWithoutClient);

export { TagQuery, TagQueryVariables, TagDocument } from './__generated__';
