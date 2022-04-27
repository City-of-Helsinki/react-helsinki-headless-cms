import * as React from "react";

import useConfig from "../../../core/configProvider/useConfig";

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
  children: string;
  iconLeft?: JSX.Element;
};

export default function ExternalLink({
  children: label,
  iconLeft,
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
      aria-label={`${label} ${openInNewTabAriaLabel}`}
    >
      {iconLeft && iconLeft}
      {label}
    </A>
  );
}
