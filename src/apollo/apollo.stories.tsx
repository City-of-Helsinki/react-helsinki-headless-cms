/* eslint-disable react/function-component-definition */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Helmet, HelmetProvider } from "react-helmet-async";

import ConfigProvider from "../core/configProvider/ConfigProvider";
import defaultConfig from "../core/configProvider/defaultConfig";
import PageContent from "./pageContent/PageContent";
import Navigation from "./navigation/Navigation";
import Notification from "./notification/Notification";
import Page from "./page/Page";

const client = new ApolloClient({
  uri: "https://hkih.stage.geniem.io/graphql",
  cache: new InMemoryCache(),
});

export default {
  title: "Example/Apollo",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <HelmetProvider>
    <ConfigProvider
      config={{
        ...defaultConfig,
        siteName: "RHHC Example",
        apolloClient: client,
        components: {
          ...defaultConfig.components,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Head: Helmet,
        },
      }}
    >
      <Page {...args} />
    </ConfigProvider>
  </HelmetProvider>
);

export const ApolloExample = Template.bind({});

const currentPage = "/kulttuurikasvatus/";

ApolloExample.args = {
  uri: currentPage,
  navigation: (
    <Navigation
      menuName="Palvelutarjotin-UI Header"
      onTitleClick={() => {
        // eslint-disable-next-line no-console
        console.log("I should navigate");
      }}
      getIsItemActive={({ path }) => path === currentPage}
      getPathnameForLanguage={() => currentPage}
    />
  ),
  notification: <Notification />,
  content: (
    <PageContent
      breadcrumbs={[
        { title: "Root", link: "/" },
        { title: "Nested", link: "/nested" },
      ]}
    />
  ),
  footer: <>TODO: Implement footer</>,
};
