import { logoFi, logoSv } from 'hds-react';

export const FALLBACK_TRANSLATION_KEYS = [
  'headerActionBarLogoAlt',
  'headerActionBarLogoAriaLabel',
  'headerActionBarLogoSrc',
  'headerUniversalBarPrimaryLinkHref',
  'headerUniversalBarPrimaryLinkText',
] as const;

export const CITY_OF_HELSINKI_TRANSLATIONS = {
  EN: 'City of Helsinki',
  FI: 'Helsingin kaupunki',
  SV: 'Helsingfors stad',
};

export const HELSINKI_TRANSLATIONS = {
  EN: 'Helsinki',
  FI: 'Helsinki',
  SV: 'Helsingfors',
};

export const LOCALIZED_HELSINKI_LOGO_SVG_CONTENTS = {
  EN: logoFi,
  FI: logoFi,
  SV: logoSv,
};

export const LOCALIZED_HELSINKI_WEBSITE_URL = {
  EN: 'https://www.hel.fi/en',
  FI: 'https://www.hel.fi/fi',
  SV: 'https://www.hel.fi/sv',
};

export const FALLBACK_TRANSLATIONS = {
  headerActionBarLogoAlt: HELSINKI_TRANSLATIONS,
  headerActionBarLogoAriaLabel: CITY_OF_HELSINKI_TRANSLATIONS,
  headerActionBarLogoSrc: LOCALIZED_HELSINKI_LOGO_SVG_CONTENTS,
  headerUniversalBarPrimaryLinkHref: LOCALIZED_HELSINKI_WEBSITE_URL,
  headerUniversalBarPrimaryLinkText: CITY_OF_HELSINKI_TRANSLATIONS,
};
