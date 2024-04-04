import React from 'react';
import { groupBy } from 'lodash-es';
import { Header, LanguageOption, Logo } from 'hds-react';

import { Config } from '../configProvider/configContext';
import { Language, Menu } from '../../common/headlessService/types';
import { useConfig } from '../configProvider/useConfig';
import {
  MAIN_CONTENT_ID,
  TOP_LEVEL_MENU_ITEM_PARENT_ID,
} from '../../common/constants';
import { getTranslationWithFallback } from '../translation/getTranslationWithFallback';
import { FallbackTranslationKey } from '../translation/types';
import {
  findLanguage,
  isNonEmptyLanguage,
  languageSorter,
  toPrimaryLanguageOption,
} from '../language';

type MenuItem = Omit<
  NonNullable<NonNullable<Menu>['menuItems']>['nodes'][0],
  '__typename'
>;

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
  const config = useConfig();
  const {
    siteName,
    currentLanguageCode,
    copy: { menuToggleAriaLabel, skipToContentLabel },
    components: { A },
    mainContentId,
    utils: { getRoutedInternalHref },
  } = config;

  // Language selection is required
  if (!languages || !languages.length) {
    return null;
  }

  const currentLanguage = findLanguage(languages, currentLanguageCode);
  const t = (field: FallbackTranslationKey) =>
    getTranslationWithFallback(config, field, currentLanguageCode);

  // Error out if language props are inconsistent
  if (languages && !currentLanguage) {
    throw Error(
      'Could not find a language from languages with currentLanguageCode',
    );
  }

  const languageOptions: LanguageOption[] = languages
    .filter(isNonEmptyLanguage)
    .sort(languageSorter)
    .map(toPrimaryLanguageOption);

  const onDidChangeLanguage = (newLanguageCode: string) => {
    const newLanguage = findLanguage(languages, newLanguageCode);
    const url =
      newLanguage && currentLanguage
        ? getPathnameForLanguage(newLanguage, currentLanguage, languages)
        : undefined;
    if (url && window) {
      window.location.href = url;
    }
  };

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

  const overrideHeaderMaxWidth = {
    '--header-max-width': 'var(--breakpoint-xl)', // Would be 1440px if not overridden
  };

  return (
    <Header
      onDidChangeLanguage={onDidChangeLanguage}
      defaultLanguage={currentLanguage?.code?.toLowerCase()}
      languages={languageOptions}
      className={className}
      style={
        /* HDS v3.4–v3.6 has broken theme support with next.js SSR & hydration.
         * FIXME: Replace with `theme={overrideHeaderMaxWidth}` when HDS theme support is fixed.
         */
        overrideHeaderMaxWidth as React.CSSProperties
      }
    >
      <Header.SkipLink
        skipTo={`#${mainContentId ?? MAIN_CONTENT_ID}`}
        label={skipToContentLabel}
      />
      {universalBarMenu && (
        <Header.UniversalBar
          primaryLinkText={t('headerUniversalBarPrimaryLinkText')}
          primaryLinkHref={t('headerUniversalBarPrimaryLinkHref')}
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
        logo={
          <Logo
            size="large"
            src={t('headerActionBarLogoSrc')}
            alt={t('headerActionBarLogoAlt')}
          />
        }
        logoAriaLabel={t('headerActionBarLogoAriaLabel')}
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
