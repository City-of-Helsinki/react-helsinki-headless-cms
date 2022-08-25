import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import {
  useCategoriesQuery as useCategoriesQueryWithoutClient,
  CategoriesQuery,
  CategoriesQueryVariables,
} from './__generated__';

export const useCategoriesQuery = makeQueryWithApolloClientFromConfig<
  CategoriesQuery,
  CategoriesQueryVariables
>(useCategoriesQueryWithoutClient);

export {
  CategoriesQuery,
  CategoriesQueryVariables,
  CategoriesDocument,
} from './__generated__';
