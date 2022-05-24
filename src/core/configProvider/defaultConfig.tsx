import React from "react";

import { LanguageCodeEnum } from "../../common/headlessService/types";
import getIsValidHttpUrl from "../../common/utils/getIsValidHttpUrl";
import Link, { LinkProps } from "../link/Link";
import { Config } from "./configContext";

const defaultConfig: Config = {
  siteName: "Test site",
  currentLanguageCode: LanguageCodeEnum.Fi,
  copy: {
    breadcrumbNavigationLabel: "Breadcrumb navigation",
    breadcrumbListLabel: "breadcrumbs",
    menuToggleAriaLabel: "toggle menu",
    skipToContentLabel: "skip to content",
    openInExternalDomainAriaLabel: "Opens a different website.",
    openInNewTabAriaLabel: "Opens in a new tab.",
    closeButtonLabelText: "close",
  },
  components: {
    A: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a {...props} />
    ),
    Link: (props: LinkProps) => <Link {...props} />,
    Img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img {...props} />
    ),
  },
  utils: {
    getIsHrefExternal: (href: string) => {
      if (!window) {
        throw Error(
          "The default getIsLinkExternal implementation does not support server side rendering. Provide your custom implementation."
        );
      }

      const isUrl = getIsValidHttpUrl(href);

      if (isUrl) {
        return new URL(href).origin !== window.location.origin;
      }

      return false;
    },
  },
  archiveSearch: {
    searchTextPlaceholder: "Search text",
    searchButtonLabelText: "Search",
    loadMoreButtonLabelText: "Load more",
    noResultsText: "No results",
  },
};

export default defaultConfig;
