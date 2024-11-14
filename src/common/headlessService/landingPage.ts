import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import type {
  LandingPageQuery,
  LandingPageQueryVariables,
} from './__generated__';
import { useLandingPageQuery as useLandingPageQueryWithoutClient } from './__generated__';

export const useLandingPageQuery = makeQueryWithApolloClientFromConfig<
  LandingPageQuery,
  LandingPageQueryVariables
>(useLandingPageQueryWithoutClient);

export {
  LandingPageQuery,
  LandingPageQueryVariables,
  LandingPageDocument,
} from './__generated__';
