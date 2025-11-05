import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import type { TagsQuery, TagsQueryVariables } from './__generated__';
import { useTagsQuery as useTagsQueryWithoutClient } from './__generated__';

export const useTagsQuery = makeQueryWithApolloClientFromConfig<
  TagsQuery,
  TagsQueryVariables
>(useTagsQueryWithoutClient);

export {
  type TagsQuery,
  type TagsQueryVariables,
  TagsDocument,
} from './__generated__';
