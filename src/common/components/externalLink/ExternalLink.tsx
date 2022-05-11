import * as React from "react";

import useConfig from "../../../core/configProvider/useConfig";

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
  children: JSX.Element | string;
  iconLeft?: JSX.Element;
  ariaLabel?: string;
};

export default function ExternalLink({
  children: label,
  iconLeft,
  ariaLabel,
  ...props
}: Props) {
  const {
    components: { A },
    copy: { openInNewTabAriaLabel },
  } = useConfig();

  return (
    <A
      {...props}
      target="_blank"
      rel="noreferrer"
      aria-label={`${
        ariaLabel || (typeof label === "string" ? label : "")
      } ${openInNewTabAriaLabel}`}
    >
      {iconLeft && iconLeft}
      {label}
    </A>
  );
}
