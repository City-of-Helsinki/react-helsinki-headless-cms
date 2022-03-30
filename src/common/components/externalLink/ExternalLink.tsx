import * as React from "react";

import useConfig from "../../../configProvider/useConfig";
import styles from "./externalLink.module.scss";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ExternalLink({ children, ...props }: Props) {
  const {
    components: { A },
    copy: { externalLink },
  } = useConfig();

  return (
    <A {...props} target="_blank" rel="noreferrer">
      {children}
      <span className={styles.srOnly}>{externalLink}</span>
    </A>
  );
}
