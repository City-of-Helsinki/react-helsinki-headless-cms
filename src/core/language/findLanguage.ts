import { Language } from '../../common/headlessService/types';

/**
 * Find language from language list by language code.
 * @param {Language[]} languages - List of languages
 * @param {string} languageCode - Language code
 * @returns {Language | undefined} Language from given language list with the given
 *                                 language code or undefined if not found
 */
function findLanguage(
  languages: Language[],
  languageCode: string,
): Language | undefined {
  return languages.find(
    (language) => language.code?.toLowerCase() === languageCode.toLowerCase(),
  );
}

export default findLanguage;
