import React from 'react';

import { useLanguagesQuery } from '../../common/headlessService/languages';
import { useMenuQuery } from '../../common/headlessService/menu';
import type { NavigationProps as NavigationPropsWithoutData } from '../../core/navigation/Navigation';
import { Navigation as NavigationWithoutData } from '../../core/navigation/Navigation';

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
    languagesQuery.data?.languages?.filter((language) => !!language) ??
    undefined;
  const menu = menuQuery.data?.menu;
  return (
    <NavigationWithoutData
      {...delegatedProps}
      languages={languages}
      menu={menu}
      getPathnameForLanguage={getPathnameForLanguage}
    />
  );
}
