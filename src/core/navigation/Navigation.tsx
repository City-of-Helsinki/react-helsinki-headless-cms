import React from 'react';
import { Navigation as HDSNavigation } from 'hds-react';

import {
  Menu,
  Language,
  LanguageCodeEnum,
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
  variant?: 'default' | 'inline';
};

export function Navigation({
  menu,
  languages,
  className,
  userNavigation,
  onTitleClick,
  getPathnameForLanguage,
  getIsItemActive,
  variant,
}: NavigationProps) {
  const {
    siteName,
    currentLanguageCode,
    copy: { menuToggleAriaLabel, skipToContentLabel },
    components: { A },
    utils: { getRoutedInternalHref },
  } = useConfig();

  const currentLanguage = languages?.find(
    (language) =>
      language.code?.toLowerCase() === currentLanguageCode?.toLowerCase(),
  );

  // Error out if language props are inconsistent
  if (languages && !currentLanguage) {
    throw Error(
      'Could not find a language from languages with currentLanguageCode',
    );
  }

  return (
    <HDSNavigation
      title={siteName}
      menuToggleAriaLabel={menuToggleAriaLabel}
      skipTo={`#${MAIN_CONTENT_ID}`}
      skipToContentLabel={skipToContentLabel}
      onTitleClick={onTitleClick}
      logoLanguage={currentLanguageCode === LanguageCodeEnum.Sv ? 'sv' : 'fi'}
      className={className}
    >
      <HDSNavigation.Row variant={variant}>
        {menu?.menuItems?.nodes?.map((navigationItem) => (
          <HDSNavigation.Item
            key={navigationItem.id}
            as={A}
            label={navigationItem.label}
            title={navigationItem.title}
            href={getRoutedInternalHref(navigationItem.path)}
            active={getIsItemActive?.(navigationItem) ?? false}
          />
        ))}
      </HDSNavigation.Row>
      <HDSNavigation.Actions>
        {userNavigation && userNavigation}
        <HDSNavigation.LanguageSelector label={currentLanguage?.name}>
          {languages?.map((language) => (
            <HDSNavigation.Item
              key={language.id}
              as={A}
              label={language.name}
              lang={language.slug}
              href={getRoutedInternalHref(
                getPathnameForLanguage(language, currentLanguage, languages),
              )}
            />
          ))}
        </HDSNavigation.LanguageSelector>
      </HDSNavigation.Actions>
    </HDSNavigation>
  );
}
