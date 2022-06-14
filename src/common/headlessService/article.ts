import makeQueryWithApolloClientFromConfig from "./makeQueryWithApolloClientFromConfig";
import {
  useArticleQuery as useArticleQueryWithoutClient,
  ArticleQuery,
  ArticleQueryVariables,
} from "./__generated__";

export const useArticleQuery = makeQueryWithApolloClientFromConfig<
  ArticleQuery,
  ArticleQueryVariables
>(useArticleQueryWithoutClient);

export {
  ArticleQuery,
  ArticleQueryVariables,
  ArticleDocument,
} from "./__generated__";
