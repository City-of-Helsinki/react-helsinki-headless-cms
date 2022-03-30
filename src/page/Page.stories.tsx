/* eslint-disable react/function-component-definition */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LanguageCodeEnum } from "../common/headlessService/types";
import ConfigProvider from "../configProvider/ConfigProvider";
import defaultConfig from "../configProvider/defaultConfig";
import pageMock from "../pageContent/__mocks__/page.mock";
import PageContent from "../pageContent/PageContent";
import navigationLanguages from "../navigation/__mocks__/navigationLanguages.mock";
import navigationMenu from "../navigation/__mocks__/navigationMenu.mock";
import Navigation from "../navigation/Navigation";
import Page from "./Page";

export default {
  title: "Example/Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
      siteName: "RHHC Example",
    }}
  >
    <Page {...args} />
  </ConfigProvider>
);

export const PageDefault = Template.bind({});
PageDefault.args = {
  navigation: (
    <Navigation
      languages={navigationLanguages}
      menu={navigationMenu}
      onTitleClick={() => {
        // eslint-disable-next-line no-console
        console.log("I should navigate");
      }}
      getUrlForLanguage={({ slug, code }, currentLanguage) => {
        const baseUrl = "http://localhost:3000";
        const currentRatherComplexUrl = new URL(
          "http://localhost:3000/en/cms-page/page-slug"
        );

        if (code === LanguageCodeEnum.Fi) {
          return new URL(
            currentRatherComplexUrl.pathname.replace(currentLanguage.slug, ""),
            baseUrl
          );
        }

        return new URL(
          currentRatherComplexUrl.pathname.replace(currentLanguage.slug, slug),
          baseUrl
        );
      }}
    />
  ),
  content: (
    <PageContent
      page={pageMock}
      breadcrumbs={[
        { title: "Root", link: "/" },
        { title: "Nested", link: "/nested" },
      ]}
    />
  ),
  footer: <>TODO: Implement footer</>,
};
