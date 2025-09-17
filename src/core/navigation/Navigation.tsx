import React from 'react';
import { groupBy } from 'lodash-es';
import type { LanguageOption } from 'hds-react';
import { Header, Logo, LogoSize } from 'hds-react';

import type { Config } from '../configProvider/configContext';
import type { Language, Menu } from '../../common/headlessService/types';
import { useConfig } from '../configProvider/useConfig';
import {
  MAIN_CONTENT_ID,
  TOP_LEVEL_MENU_ITEM_PARENT_ID,
} from '../../common/constants';
import {
  findLanguage,
  isNonEmptyLanguage,
  languageSorter,
  toPrimaryLanguageOption,
} from '../language';
import { useTranslationWithFallback } from '../translation/useTranslationWithFallback';

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
  const {
    siteName,
    currentLanguageCode,
    copy: { menuButtonLabel, menuToggleAriaLabel, skipToContentLabel },
    components: { A },
    mainContentId,
    utils: { getRoutedInternalHref },
  } = useConfig();

  const languagesData = languages || [];

  const currentLanguage = findLanguage(languagesData, currentLanguageCode);
  const { t } = useTranslationWithFallback();

  const languageOptions: LanguageOption[] = languagesData
    .filter(isNonEmptyLanguage)
    .sort(languageSorter)
    .map(toPrimaryLanguageOption);

  const onDidChangeLanguage = (newLanguageCode: string) => {
    const newLanguage = findLanguage(languagesData, newLanguageCode);
    const url =
      newLanguage && currentLanguage
        ? getPathnameForLanguage(newLanguage, currentLanguage, languagesData)
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

  /** adding key property allows to update the Header context with dynamic data (rerender the component) so the languages appear when data loaded
   * The fix is usggested by HDS team, they have a ticket about that issue
   * https://helsinkisolutionoffice.atlassian.net/browse/HDS-2174
   */
  return (
    <Header
      key={currentLanguage?.code}
      onDidChangeLanguage={onDidChangeLanguage}
      defaultLanguage={currentLanguage?.code?.toLowerCase()}
      languages={languageOptions}
      className={className}
      style={
        /* HDS v3.4–v3.7 has broken theme support with next.js SSR & hydration.
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
        menuButtonLabel={menuButtonLabel}
        menuButtonAriaLabel={menuToggleAriaLabel}
        title={siteName}
        onTitleClick={onTitleClick}
        onLogoClick={onTitleClick}
        frontPageLabel={siteName}
        logo={
          <Logo
            size={LogoSize.Large}
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
