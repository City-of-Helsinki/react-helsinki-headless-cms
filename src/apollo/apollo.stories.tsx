/* eslint-disable react/function-component-definition */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import { LanguageCodeEnum } from "../common/headlessService/types";
import ConfigProvider from "../configProvider/ConfigProvider";
import defaultConfig from "../configProvider/defaultConfig";
import PageContent from "./pageContent/PageContent";
import Navigation from "./navigation/Navigation";
import Notification from "./notification/Notification";
import Page from "../page/Page";

const client = new ApolloClient({
  uri: "https://hkih.stage.geniem.io/graphql",
  cache: new InMemoryCache(),
});

export default {
  title: "Example/Apollo",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
      siteName: "RHHC Example",
      apolloClient: client,
    }}
  >
    <Page {...args} />
  </ConfigProvider>
);

export const ApolloExample = Template.bind({});

const currentPage = "/kulttuurikasvatus/";

ApolloExample.args = {
  navigation: (
    <Navigation
      menuName="Palvelutarjotin-UI Header"
      onTitleClick={() => {
        // eslint-disable-next-line no-console
        console.log("I should navigate");
      }}
      getIsItemActive={({ path }) => path === currentPage}
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
  notification: <Notification />,
  content: (
    <PageContent
      uri={currentPage}
      breadcrumbs={[
        { title: "Root", link: "/" },
        { title: "Nested", link: "/nested" },
      ]}
    />
  ),
  footer: <>TODO: Implement footer</>,
};
