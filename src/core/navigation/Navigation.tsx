import React from 'react';
import {
  Header,
  LanguageOption,
  Logo,
  logoFi,
  LogoProps,
  logoSv,
} from 'hds-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import styles from './Navigation.module.scss';
import {
  Language,
  LanguageCodeEnum,
  Menu,
} from '../../common/headlessService/types';
import { useConfig } from '../configProvider/useConfig';
import { MAIN_CONTENT_ID } from '../../common/constants';

type MenuItem = Omit<Menu['menuItems']['nodes'][0], '__typename'>;

export type NavigationProps = {
  menu?: Menu;
  languages?: Language[];
  className?: string;
  userNavigation?: React.ReactNode;
  onTitleClick: () => void;
  getPathnameForLanguage: (
    language: Language,
    currentLanguage: Language,
    allLanguages: Language[],
  ) => string;
  getIsItemActive?: (menuItem: MenuItem) => boolean;
  /** @deprecated Not used anymore i.e. does nothing after HDS 3 was taken into use. */
  variant?: 'default' | 'inline';
};

const LOGO_ARIA_LABELS = {
  EN: 'City of Helsinki',
  FI: 'Helsingin kaupunki',
  SV: 'Helsingfors stad',
} as const satisfies Record<LanguageCodeEnum, string>;

const LOGO_LABELS = {
  EN: 'Helsinki',
  FI: 'Helsinki',
  SV: 'Helsingfors',
} as const satisfies Record<LanguageCodeEnum, string>;

const LOGO_SOURCES = {
  EN: logoFi,
  FI: logoFi,
  SV: logoSv,
} as const satisfies Record<LanguageCodeEnum, string>;

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

export function Navigation({
  menu,
  languages,
  className,
  userNavigation,
  onTitleClick,
  getPathnameForLanguage,
  getIsItemActive,
  variant, // eslint-disable-line @typescript-eslint/no-unused-vars
}: NavigationProps) {
  const {
    siteName,
    currentLanguageCode,
    copy: { menuToggleAriaLabel, skipToContentLabel },
    components: { A },
    utils: { getRoutedInternalHref },
  } = useConfig();

  // Language selection is required
  if (!languages || !languages.length) {
    return null;
  }

  const currentLanguage = findLanguage(languages, currentLanguageCode);

  // Error out if language props are inconsistent
  if (languages && !currentLanguage) {
    throw Error(
      'Could not find a language from languages with currentLanguageCode',
    );
  }

  const languageOptions: LanguageOption[] = languages.map((language) => ({
    label: language.name,
    value: language.code?.toLowerCase(),
    isPrimary: true,
  }));

  const onDidChangeLanguage = (newLanguageCode: string) => {
    const newLanguage = findLanguage(languages, newLanguageCode);
    const url = getPathnameForLanguage(newLanguage, currentLanguage, languages);
    if (url && window) {
      window.location.href = url;
    }
  };

  const logoProps: LogoProps = {
    size: 'large',
    src: LOGO_SOURCES[currentLanguageCode],
    alt: LOGO_LABELS[currentLanguageCode],
  };

  return (
    <Header
      onDidChangeLanguage={onDidChangeLanguage}
      defaultLanguage={currentLanguage.code.toLowerCase()}
      languages={languageOptions}
      className={classNames(className, styles.maxWidthXl)}
    >
      <Header.SkipLink
        skipTo={`#${MAIN_CONTENT_ID}`}
        label={skipToContentLabel}
      />
      <Header.ActionBar
        titleHref="#"
        logoHref="#"
        menuButtonAriaLabel={menuToggleAriaLabel}
        title={siteName}
        onTitleClick={onTitleClick}
        onLogoClick={onTitleClick}
        frontPageLabel={siteName}
        logo={<Logo {...logoProps} />}
        logoAriaLabel={LOGO_ARIA_LABELS[currentLanguageCode]}
      >
        <Header.LanguageSelector />
        {userNavigation && userNavigation}
      </Header.ActionBar>
      <Header.NavigationMenu>
        {menu?.menuItems?.nodes?.map((navigationItem) => (
          <Header.Link
            as={A}
            id={navigationItem.id}
            key={navigationItem.id}
            title={navigationItem.title}
            label={navigationItem.label}
            href={getRoutedInternalHref(navigationItem.path)}
            active={getIsItemActive?.(navigationItem) ?? false}
          />
        ))}
      </Header.NavigationMenu>
    </Header>
  );
}
