import { FALLBACK_TRANSLATION_KEYS, FALLBACK_TRANSLATIONS } from '../constants';
import { getTranslationWithFallback } from '../getTranslationWithFallback';
import { defaultConfig } from '../../configProvider/defaultConfig';
import { LanguageCodeEnum } from '../../../common/headlessService/__generated__';
import type { Config } from '../../configProvider/configContext';

describe('getTranslationWithFallback', () => {
  it.each(FALLBACK_TRANSLATION_KEYS)(
    'if translation for field "%s" is given, its fallback translation is not used',
    async (field) => {
      const config: Config = {
        ...defaultConfig,
        copy: { ...defaultConfig.copy, [field]: 'test' },
      };
      Object.values(LanguageCodeEnum).forEach((languageCode) => {
        expect(getTranslationWithFallback(config, field, languageCode)).toBe(
          'test',
        );
      });
    },
  );

  it.each(FALLBACK_TRANSLATION_KEYS)(
    'if translation for field "%s" is not given, its fallback translation is used',
    async (field) => {
      const config: Config = { ...defaultConfig };
      delete config.copy[field];
      expect(config.copy[field]).toBeUndefined();
      Object.values(LanguageCodeEnum).forEach((languageCode) => {
        expect(getTranslationWithFallback(config, field, languageCode)).toBe(
          FALLBACK_TRANSLATIONS[field][languageCode],
        );
      });
    },
  );
});
