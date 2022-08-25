import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import {
  useTagsQuery as useTagsQueryWithoutClient,
  TagsQuery,
  TagsQueryVariables,
} from './__generated__';

export const useTagsQuery = makeQueryWithApolloClientFromConfig<
  TagsQuery,
  TagsQueryVariables
>(useTagsQueryWithoutClient);

export { TagsQuery, TagsQueryVariables, TagsDocument } from './__generated__';
