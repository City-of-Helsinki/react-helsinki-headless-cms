import React from "react";

import HtmlToReact from "../../common/components/htmlToReact/HtmlToReact";
import Text from "../../common/components/text/Text";
import useConfig from "../configProvider/useConfig";
import styles from "./pageMainContent.module.scss";

type Props = {
  title: string;
  content: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function PageMainContent({
  title,
  content,
  imageSrc,
  imageAlt = "",
}: Props) {
  const {
    components: { Img, Link },
  } = useConfig();

  return (
    <article className={styles.mainContent}>
      <header>
        <Text as="h1" variant="h2">
          {title}
        </Text>
        {imageSrc && (
          <figure className={styles.imageContainer}>
            <Img src={imageSrc} alt={imageAlt} />
          </figure>
        )}
      </header>
      <HtmlToReact
        components={{
          a: Link,
        }}
      >
        {content}
      </HtmlToReact>
    </article>
  );
}
