import { LANGUAGE_CODE_ORDINAL_NUMBER } from './constants';
import type { NonEmptyLanguage } from './types';

/** Sorting function for NonEmptyLanguage elements. */
const languageSorter = (left: NonEmptyLanguage, right: NonEmptyLanguage) =>
  Math.sign(
    LANGUAGE_CODE_ORDINAL_NUMBER[
      left.code as keyof typeof LANGUAGE_CODE_ORDINAL_NUMBER
    ] -
      LANGUAGE_CODE_ORDINAL_NUMBER[
        right.code as keyof typeof LANGUAGE_CODE_ORDINAL_NUMBER
      ],
  );

export default languageSorter;
