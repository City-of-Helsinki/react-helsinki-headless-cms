import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import {
  usePostsQuery as usePostsQueryWithoutClient,
  PostsQuery,
  PostsQueryVariables,
} from './__generated__';

export const usePostsQuery = makeQueryWithApolloClientFromConfig<
  PostsQuery,
  PostsQueryVariables
>(usePostsQueryWithoutClient);

export {
  PostsQuery,
  PostsQueryVariables,
  PostsDocument,
} from './__generated__';
