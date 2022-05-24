/* eslint-disable react/function-component-definition */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { LanguageCodeEnum } from "../../common/headlessService/types";
import ConfigProvider from "../configProvider/ConfigProvider";
import defaultConfig from "../configProvider/defaultConfig";
import ArchiveSearchPageContent from "../archiveSearchPageContent/ArchiveSearchPageContent";
import navigationLanguages from "../navigation/__mocks__/navigationLanguages.mock";
import navigationMenu from "../navigation/__mocks__/navigationMenu.mock";
import Navigation from "../navigation/Navigation";
import ArchiveSearchPage from "./ArchiveSearchPage";
import articles from "../archiveSearchPageContent/__mocks__/articles.mock";

export default {
  title: "Example/ArchiveSearchPage",
  component: ArchiveSearchPage,
} as ComponentMeta<typeof ArchiveSearchPage>;

const Template: ComponentStory<typeof ArchiveSearchPage> = (args) => (
  <HelmetProvider>
    <ConfigProvider
      config={{
        ...defaultConfig,
        siteName: "RHHC Example",
        components: {
          ...defaultConfig.components,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Head: Helmet,
        },
      }}
    >
      <ArchiveSearchPage {...args} />
    </ConfigProvider>
  </HelmetProvider>
);

export const ArchiveSearchPageDefault = Template.bind({});
ArchiveSearchPageDefault.args = {
  navigation: (
    <Navigation
      languages={navigationLanguages}
      menu={navigationMenu}
      onTitleClick={() => {
        // eslint-disable-next-line no-console
        console.log("I should navigate");
      }}
      getPathnameForLanguage={({ slug, code }, currentLanguage) => {
        const baseUrl = "http://localhost:3000";
        const currentRatherComplexUrl = new URL(
          "http://localhost:3000/en/cms-page/page-slug"
        );

        if (code === LanguageCodeEnum.Fi) {
          return new URL(
            currentRatherComplexUrl.pathname.replace(currentLanguage.slug, ""),
            baseUrl
          ).pathname;
        }

        return new URL(
          currentRatherComplexUrl.pathname.replace(currentLanguage.slug, slug),
          baseUrl
        ).pathname;
      }}
    />
  ),
  content: (
    <ArchiveSearchPageContent
      articles={articles}
      tags={["label1", "label2", "label3"]}
      onSearch={(freeSearch, tags) => {
        // eslint-disable-next-line no-console
        console.log("search params:", freeSearch, tags);
      }}
      onLoadMore={() => {
        // eslint-disable-next-line no-console
        console.log("load more items");
      }}
    />
  ),
  footer: <>TODO: Implement footer</>,
};
