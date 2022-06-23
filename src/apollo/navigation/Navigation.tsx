import React from "react";

import { useLanguagesQuery } from "../../common/headlessService/languages";
import { useMenuQuery } from "../../common/headlessService/menu";
import {
  Navigation as NavigationWithoutData,
  NavigationProps as NavigationPropsWithoutData,
} from "../../core/navigation/Navigation";

export type NavigationProps = Omit<
  NavigationPropsWithoutData,
  "menu" | "languages" | "getPathnameForLanguage"
> & {
  menuName: string;
  getPathnameForLanguage?: NavigationPropsWithoutData["getPathnameForLanguage"];
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
  return (
    <NavigationWithoutData
      {...delegatedProps}
      languages={languagesQuery.data?.languages}
      menu={menuQuery.data?.menu}
      getPathnameForLanguage={getPathnameForLanguage}
    />
  );
}
