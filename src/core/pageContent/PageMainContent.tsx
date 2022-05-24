import React from 'react'

import HtmlToReact from '../../common/components/htmlToReact/HtmlToReact'
import Text from '../../common/components/text/Text'
import useConfig from '../configProvider/useConfig'
import styles from './pageMainContent.module.scss'

type PageMainContentProps = {
  title: string
  content: string
}

export default function PageMainContent({
  title,
  content,
}: PageMainContentProps) {
  const {
    components: { Link },
  } = useConfig()

  return (
    <article className={styles.mainContent}>
      <header>
        <Text as="h1" variant="h2">
          {title}
        </Text>
      </header>
      <HtmlToReact
        components={{
          a: Link,
        }}
      >
        {content}
      </HtmlToReact>
    </article>
  )
}
