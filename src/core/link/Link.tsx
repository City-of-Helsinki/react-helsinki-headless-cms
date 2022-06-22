import React from "react";
import { Link as HDSLink } from "hds-react";

import { useConfig } from "../configProvider/useConfig";

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Link({ href, target, children, ...delegatedProps }: LinkProps) {
  const {
    copy: { openInExternalDomainAriaLabel, openInNewTabAriaLabel },
    utils: { getIsHrefExternal },
  } = useConfig();

  const isOpenInNewTab = target === "_blank";

  return (
    <HDSLink
      {...delegatedProps}
      href={href}
      openInNewTab={isOpenInNewTab}
      openInExternalDomainAriaLabel={openInExternalDomainAriaLabel}
      openInNewTabAriaLabel={openInNewTabAriaLabel}
      external={getIsHrefExternal(href)}
      size="M"
    >
      {children as string}
    </HDSLink>
  );
}
