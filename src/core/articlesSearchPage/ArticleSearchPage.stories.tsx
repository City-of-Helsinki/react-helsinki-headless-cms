/* eslint-disable react/function-component-definition */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { LanguageCodeEnum } from '../../common/headlessService/types'
import ConfigProvider from '../configProvider/ConfigProvider'
import defaultConfig from '../configProvider/defaultConfig'
import ArticlesSearchPageContent from '../articlesSearchPageContent/ArticlesSearchPageContent'
import navigationLanguages from '../navigation/__mocks__/navigationLanguages.mock'
import navigationMenu from '../navigation/__mocks__/navigationMenu.mock'
import Navigation from '../navigation/Navigation'
import ArticlesSearchPage from './ArticlesSearchPage'
import articles from '../articlesSearchPageContent/__mocks__/articles.mock'

export default {
  title: 'Example/ArticlesSearchPage',
  component: ArticlesSearchPage,
} as ComponentMeta<typeof ArticlesSearchPage>

const Template: ComponentStory<typeof ArticlesSearchPage> = (args) => (
  <HelmetProvider>
    <ConfigProvider
      config={{
        ...defaultConfig,
        siteName: 'RHHC Example',
        components: {
          ...defaultConfig.components,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Head: Helmet,
        },
      }}
    >
      <ArticlesSearchPage {...args} />
    </ConfigProvider>
  </HelmetProvider>
)

export const ArticlesSearchPageDefault = Template.bind({})
ArticlesSearchPageDefault.args = {
  navigation: (
    <Navigation
      languages={navigationLanguages}
      menu={navigationMenu}
      onTitleClick={() => {
        // eslint-disable-next-line no-console
        console.log('I should navigate')
      }}
      getPathnameForLanguage={({ slug, code }, currentLanguage) => {
        const baseUrl = 'http://localhost:3000'
        const currentRatherComplexUrl = new URL(
          'http://localhost:3000/en/cms-page/page-slug'
        )

        if (code === LanguageCodeEnum.Fi) {
          return new URL(
            currentRatherComplexUrl.pathname.replace(currentLanguage.slug, ''),
            baseUrl
          ).pathname
        }

        return new URL(
          currentRatherComplexUrl.pathname.replace(currentLanguage.slug, slug),
          baseUrl
        ).pathname
      }}
    />
  ),
  content: (
    <ArticlesSearchPageContent
      articles={articles}
      tags={['label1', 'label2', 'label3']}
      onSearch={(freeSearch, tags) => {
        // eslint-disable-next-line no-console
        console.log('search params:', freeSearch, tags)
      }}
      onLoadMore={() => {
        // eslint-disable-next-line no-console
        console.log('load more items')
      }}
      isLoading
      hasMore
    />
  ),
  footer: <>TODO: Implement footer</>,
}
