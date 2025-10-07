import { logoFi, logoSv } from 'hds-react';

import type { LanguageCodeEnum } from '../../apollo';

type TranslationDictionary = Record<LanguageCodeEnum, string>;

export const FALLBACK_TRANSLATION_KEYS = [
  'headerActionBarLogoAlt',
  'headerActionBarLogoAriaLabel',
  'headerActionBarLogoSrc',
  'headerUniversalBarPrimaryLinkHref',
  'headerUniversalBarPrimaryLinkText',
  'carouselRegionLabelText',
  'carouselSliderRegionLabelText',
  'carouselSliderDotNavLabelText',
] as const;

export const CITY_OF_HELSINKI_TRANSLATIONS: TranslationDictionary = {
  EN: 'City of Helsinki',
  FI: 'Helsingin kaupunki',
  SV: 'Helsingfors stad',
};

export const HELSINKI_TRANSLATIONS: TranslationDictionary = {
  EN: 'Helsinki',
  FI: 'Helsinki',
  SV: 'Helsingfors',
};

export const LOCALIZED_HELSINKI_LOGO_SVG_CONTENTS: TranslationDictionary = {
  EN: logoFi,
  FI: logoFi,
  SV: logoSv,
};

export const LOCALIZED_HELSINKI_WEBSITE_URL: TranslationDictionary = {
  EN: 'https://www.hel.fi/en',
  FI: 'https://www.hel.fi/fi',
  SV: 'https://www.hel.fi/sv',
};

export const CAROUSEL_REGION_LABEL_TEXT: TranslationDictionary = {
  EN: 'Carousel {title}.',
  FI: 'Karusellikomponentti {title}.',
  SV: 'Karusell {title}.',
};

export const CAROUSEL_SLIDER_REGION_LABEL_TEXT: TranslationDictionary = {
  EN: 'In carousel slide {currentSlide}. Listing 1 - {itemsPerSlide} items per slide out of {numberOfItems} items.',
  FI: 'Karusellin sivulla {currentSlide}. Listataan 1 - {itemsPerSlide} korttia kaikkiaan {numberOfItems} kortista.',
  SV: 'I karusellsidan {currentSlide}. Listar 1 - {itemsPerSlide} objekt per sidan av {numberOfItems} objekt.',
};

export const CAROUSEL_SLIDER_DOT_NAV_LABEL_TEXT: TranslationDictionary = {
  EN: 'Jump to slide {slideNumber}.',
  FI: 'Siirry sivulle {slideNumber}.',
  SV: 'Gå till sida {slideNumber}.',
};

export const FALLBACK_TRANSLATIONS: Record<
  (typeof FALLBACK_TRANSLATION_KEYS)[number],
  TranslationDictionary
> = {
  headerActionBarLogoAlt: HELSINKI_TRANSLATIONS,
  headerActionBarLogoAriaLabel: CITY_OF_HELSINKI_TRANSLATIONS,
  headerActionBarLogoSrc: LOCALIZED_HELSINKI_LOGO_SVG_CONTENTS,
  headerUniversalBarPrimaryLinkHref: LOCALIZED_HELSINKI_WEBSITE_URL,
  headerUniversalBarPrimaryLinkText: CITY_OF_HELSINKI_TRANSLATIONS,
  carouselRegionLabelText: CAROUSEL_REGION_LABEL_TEXT,
  carouselSliderRegionLabelText: CAROUSEL_SLIDER_REGION_LABEL_TEXT,
  carouselSliderDotNavLabelText: CAROUSEL_SLIDER_DOT_NAV_LABEL_TEXT,
};
