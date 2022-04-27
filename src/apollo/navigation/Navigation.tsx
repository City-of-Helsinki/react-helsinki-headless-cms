import React from "react";

import { usePageQuery } from "../../common/headlessService/page";
import { useLanguagesQuery } from "../../common/headlessService/languages";
import { useMenuQuery } from "../../common/headlessService/menu";
import NavigationWithoutData, {
  NavigationProps as NavigationPropsWithoutData,
} from "../../core/navigation/Navigation";
import useApolloPageContext from "../page/useApolloPageContext";

export type NavigationProps = Omit<
  NavigationPropsWithoutData,
  "menu" | "languages" | "getPathnameForLanguage"
> & {
  menuName: string;
  getPathnameForLanguage?: NavigationPropsWithoutData["getPathnameForLanguage"];
};

export default function Navigation({
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
  const pageQuery = usePageQuery({
    variables: {
      id: useApolloPageContext().uri,
    },
  });

  return (
    <NavigationWithoutData
      {...delegatedProps}
      languages={languagesQuery.data?.languages}
      menu={menuQuery.data?.menu}
      getPathnameForLanguage={(...args) => {
        const [language, currentLanguage] = args;

        const isCmsPage = Boolean(pageQuery?.data?.page?.uri);

        // If page is a CMS page, find other language version from the CMS
        if (isCmsPage) {
          if (language.code === currentLanguage.code) {
            return pageQuery?.data?.page?.uri;
          }

          return pageQuery?.data?.page?.translations?.find(
            (translation) => translation?.language?.code === language.code
          )?.uri;
        }

        // Otherwise use userland implementation
        return getPathnameForLanguage?.(...args);
      }}
    />
  );
}
