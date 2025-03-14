import React from 'react';

import { useLanguagesQuery } from '../../common/headlessService/languages';
import { useMenuQuery } from '../../common/headlessService/menu';
import type { NavigationProps as NavigationPropsWithoutData } from '../../core/navigation/Navigation';
import { Navigation as NavigationWithoutData } from '../../core/navigation/Navigation';
import type { LanguageFragment } from '../../common/headlessService/__generated__';

export type NavigationProps = Omit<
  NavigationPropsWithoutData,
  'menu' | 'languages' | 'getPathnameForLanguage'
> & {
  /**
   * The name of the menu in Wordpress headless CMS.
   */
  menuName: string;
  /**
   * Gets language specific path for navigation item.
   */
  getPathnameForLanguage: NavigationPropsWithoutData['getPathnameForLanguage'];
};

export function Navigation({
  menuName,
  getPathnameForLanguage,
  ...delegatedProps
}: NavigationProps) {
  const languagesQuery = useLanguagesQuery();
  const menuQuery = useMenuQuery({
    variables: {
      id: menuName,
    },
  });
  const languages =
    (languagesQuery.data?.languages?.filter(
      (l) => !!l,
    ) as LanguageFragment[]) ?? undefined;
  return (
    <NavigationWithoutData
      {...delegatedProps}
      languages={languages}
      menu={menuQuery.data?.menu}
      getPathnameForLanguage={getPathnameForLanguage}
    />
  );
}
