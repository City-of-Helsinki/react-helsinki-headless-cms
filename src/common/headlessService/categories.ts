import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import type {
  CategoriesQuery,
  CategoriesQueryVariables,
} from './__generated__';
import { useCategoriesQuery as useCategoriesQueryWithoutClient } from './__generated__';

export const useCategoriesQuery = makeQueryWithApolloClientFromConfig<
  CategoriesQuery,
  CategoriesQueryVariables
>(useCategoriesQueryWithoutClient);

export {
  CategoriesQuery,
  CategoriesQueryVariables,
  CategoriesDocument,
} from './__generated__';
