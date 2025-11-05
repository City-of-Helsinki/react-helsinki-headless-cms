import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import type { TagQuery, TagQueryVariables } from './__generated__';
import { useTagQuery as useTagQueryWithoutClient } from './__generated__';

export const useTagQuery = makeQueryWithApolloClientFromConfig<
  TagQuery,
  TagQueryVariables
>(useTagQueryWithoutClient);

export {
  type TagQuery,
  type TagQueryVariables,
  TagDocument,
} from './__generated__';
