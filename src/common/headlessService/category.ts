import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import {
  useCategoryQuery as useCategoryQueryWithoutClient,
  CategoryQuery,
  CategoryQueryVariables,
} from './__generated__';

export const useCategoryQuery = makeQueryWithApolloClientFromConfig<
  CategoryQuery,
  CategoryQueryVariables
>(useCategoryQueryWithoutClient);

export {
  CategoryQuery,
  CategoryQueryVariables,
  CategoryDocument,
} from './__generated__';
