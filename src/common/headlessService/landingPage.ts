import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import {
  useLandingPageQuery as useLandingPageQueryWithoutClient,
  LandingPageQuery,
  LandingPageQueryVariables,
} from './__generated__';

export const useLandingPageQuery = makeQueryWithApolloClientFromConfig<
  LandingPageQuery,
  LandingPageQueryVariables
>(useLandingPageQueryWithoutClient);

export {
  LandingPageQuery,
  LandingPageQueryVariables,
  LandingPageDocument,
} from './__generated__';
