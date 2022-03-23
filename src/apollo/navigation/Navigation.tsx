import React from "react";

import { useLanguagesQuery } from "../../common/headlessService/languages";
import { useMenuQuery } from "../../common/headlessService/menu";
import NavigationWithoutData, {
  NavigationProps as NavigationPropsWithoutData,
} from "../../navigation/Navigation";

export type NavigationProps = Omit<
  NavigationPropsWithoutData,
  "menu" | "languages"
> & {
  menuName: string;
};

export default function Navigation({
  menuName,
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
    />
  );
}
