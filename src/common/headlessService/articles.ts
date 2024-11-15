import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import type { PostsQuery, PostsQueryVariables } from './__generated__';
import { usePostsQuery as usePostsQueryWithoutClient } from './__generated__';

export const usePostsQuery = makeQueryWithApolloClientFromConfig<
  PostsQuery,
  PostsQueryVariables
>(usePostsQueryWithoutClient);

export {
  PostsQuery,
  PostsQueryVariables,
  PostsDocument,
} from './__generated__';
