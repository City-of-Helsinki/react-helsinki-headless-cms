import React from 'react';
import { groupBy } from 'lodash-es';
import { Header, LanguageOption, Logo, LogoProps } from 'hds-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { Config } from '../configProvider/configContext';
import styles from './Navigation.module.scss';
import { Language, Menu } from '../../common/headlessService/types';
import { useConfig } from '../configProvider/useConfig';
import {
  CITY_OF_HELSINKI_WEBSITE_URL,
  MAIN_CONTENT_ID,
  TOP_LEVEL_MENU_ITEM_PARENT_ID,
} from '../../common/constants';

type MenuItem = Omit<Menu['menuItems']['nodes'][0], '__typename'>;

export type NavigationProps = {
  menu?: Menu;
  universalBarMenu?: Menu;
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
};

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

interface MenuItemChildren {
  [menuItemId: string]: MenuItem[];
}

type MenuLinkProps = {
  menuItemChildren?: MenuItemChildren;
  navigationItem: MenuItem;
  getRoutedInternalHref: Config['utils']['getRoutedInternalHref'];
  getIsItemActive: NavigationProps['getIsItemActive'];
  A: Config['components']['A'];
};

/**
 * Create a menu link element
 * @param {MenuLinkProps} props - Properties, if menuItemChildren is undefined then the
 *                                created element will not have dropdown links
 * @return {React.JSX.Element} Header.Link element
 */
function createMenuLinkElement(props: MenuLinkProps) {
  const {
    menuItemChildren,
    navigationItem,
    getRoutedInternalHref,
    getIsItemActive,
    A,
  } = props;
  return (
    <Header.Link
      as={A}
      id={navigationItem.id}
      key={navigationItem.id}
      title={navigationItem.title ?? undefined}
      label={navigationItem.label ?? ''}
      href={getRoutedInternalHref(navigationItem.path)}
      active={getIsItemActive?.(navigationItem) ?? false}
      dropdownLinks={
        (menuItemChildren?.[navigationItem.id]?.length &&
          menuItemChildren[navigationItem.id]?.map((childNavigationItem) =>
            createMenuLinkElement({
              ...props,
              navigationItem: childNavigationItem,
            }),
          )) ||
        undefined
      }
    />
  );
}

export function Navigation({
  menu,
  universalBarMenu,
  languages,
  className,
  userNavigation,
  onTitleClick,
  getPathnameForLanguage,
  getIsItemActive,
}: NavigationProps) {
  const {
    siteName,
    currentLanguageCode,
    fallbackTranslations,
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
    src: fallbackTranslations.helsinkiLogo[currentLanguageCode],
    alt: fallbackTranslations.helsinki[currentLanguageCode],
  };

  const localizedCityOfHelsinki =
    fallbackTranslations.cityOfHelsinki[currentLanguageCode];

  const menuItemChildren: MenuItemChildren = groupBy(
    menu?.menuItems?.nodes ?? [],
    (menuItem) => menuItem.parentId ?? TOP_LEVEL_MENU_ITEM_PARENT_ID,
  );

  const sharedMenuLinkProps: Omit<
    MenuLinkProps,
    'navigationItem' | 'menuItemChildren'
  > = {
    getRoutedInternalHref,
    getIsItemActive,
    A,
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
      {universalBarMenu && (
        <Header.UniversalBar
          primaryLinkText={localizedCityOfHelsinki}
          primaryLinkHref={CITY_OF_HELSINKI_WEBSITE_URL}
        >
          {universalBarMenu?.menuItems?.nodes?.map((navigationItem) =>
            createMenuLinkElement({ ...sharedMenuLinkProps, navigationItem }),
          )}
        </Header.UniversalBar>
      )}
      <Header.ActionBar
        titleHref="#"
        logoHref="#"
        menuButtonAriaLabel={menuToggleAriaLabel}
        title={siteName}
        onTitleClick={onTitleClick}
        onLogoClick={onTitleClick}
        frontPageLabel={siteName}
        logo={<Logo {...logoProps} />}
        logoAriaLabel={localizedCityOfHelsinki}
      >
        <Header.LanguageSelector />
        {userNavigation && userNavigation}
      </Header.ActionBar>
      <Header.NavigationMenu>
        {menuItemChildren[TOP_LEVEL_MENU_ITEM_PARENT_ID]?.map(
          (navigationItem) =>
            createMenuLinkElement({
              ...sharedMenuLinkProps,
              menuItemChildren,
              navigationItem,
            }),
        )}
      </Header.NavigationMenu>
    </Header>
  );
}
