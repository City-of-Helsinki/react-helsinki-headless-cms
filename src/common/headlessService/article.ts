import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import type { ArticleQuery, ArticleQueryVariables } from './__generated__';
import { useArticleQuery as useArticleQueryWithoutClient } from './__generated__';

export const useArticleQuery = makeQueryWithApolloClientFromConfig<
  ArticleQuery,
  ArticleQueryVariables
>(useArticleQueryWithoutClient);

export {
  type ArticleQuery,
  type ArticleQueryVariables,
  ArticleDocument,
} from './__generated__';
