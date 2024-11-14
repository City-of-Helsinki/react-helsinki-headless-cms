import type { NonEmptyLanguage } from '..';
import { languageSorter } from '..';
import { LanguageCodeEnum } from '../../../common/headlessService/__generated__';

type TestLanguage = 'fi' | 'sv' | 'en';

const TEST_LANGUAGES = {
  fi: { id: 'fi', code: LanguageCodeEnum.Fi, name: 'Suomi' },
  sv: { id: 'sv', code: LanguageCodeEnum.Sv, name: 'Svenska' },
  en: { id: 'en', code: LanguageCodeEnum.En, name: 'English' },
} as const satisfies Record<TestLanguage, NonEmptyLanguage>;

const getNonEmptyLanguage = (language: TestLanguage): NonEmptyLanguage =>
  TEST_LANGUAGES[language];

describe('languageSorter function', () => {
  it.each<Array<Array<TestLanguage>>>([
    [['fi', 'en', 'sv']],
    [['fi', 'sv', 'en']],
    [['en', 'fi', 'sv']],
    [['en', 'sv', 'fi']],
    [['sv', 'fi', 'en']],
    [['sv', 'en', 'fi']],
  ])(
    'sorts languages %p to Finnish, Swedish & English',
    async (testLanguages: TestLanguage[]) => {
      expect(
        testLanguages.map(getNonEmptyLanguage).sort(languageSorter),
      ).toEqual([TEST_LANGUAGES.fi, TEST_LANGUAGES.sv, TEST_LANGUAGES.en]);
    },
  );
});
