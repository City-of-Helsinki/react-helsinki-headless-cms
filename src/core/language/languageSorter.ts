import { LANGUAGE_CODE_ORDINAL_NUMBER } from './constants';
import { NonEmptyLanguage } from './types';

/** Sorting function for NonEmptyLanguage elements. */
const languageSorter = (left: NonEmptyLanguage, right: NonEmptyLanguage) =>
  Math.sign(
    LANGUAGE_CODE_ORDINAL_NUMBER[left.code] -
      LANGUAGE_CODE_ORDINAL_NUMBER[right.code],
  );

export default languageSorter;
