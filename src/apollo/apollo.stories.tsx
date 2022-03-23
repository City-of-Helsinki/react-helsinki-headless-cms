/* eslint-disable react/function-component-definition */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { LanguageCodeEnum } from "../common/headlessService/types";
import ConfigProvider, {
  defaultConfig,
} from "../configProvider/ConfigProvider";
import pageMock from "../pageContent/__mocks__/page.mock";
import PageContent from "../pageContent/PageContent";
import Navigation from "./navigation/Navigation";
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
  <ApolloProvider client={client}>
    <ConfigProvider
      config={{
        ...defaultConfig,
        siteName: "RHHC Example",
      }}
    >
      <Page {...args} />
    </ConfigProvider>
  </ApolloProvider>
);

export const ApolloExample = Template.bind({});
ApolloExample.args = {
  navigation: (
    <Navigation
      menuName="Palvelutarjotin-UI Header"
      currentLanguageCode={LanguageCodeEnum.En}
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
