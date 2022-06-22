/* eslint-disable react/function-component-definition */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { LanguageCodeEnum } from "../../common/headlessService/types";
import { ConfigProvider } from "../configProvider/ConfigProvider";
import { defaultConfig } from "../configProvider/defaultConfig";
import pageMock from "../pageContent/__mocks__/page.mock";
import { PageContent } from "../pageContent/PageContent";
import navigationLanguages from "../navigation/__mocks__/navigationLanguages.mock";
import navigationMenu from "../navigation/__mocks__/navigationMenu.mock";
import { Navigation } from "../navigation/Navigation";
import { Notification } from "../notification/Notification";
import notificationMock from "../notification/__mocks__/notification.mock";
import { Page } from "./Page";
import { Collection } from "../collection/Collection";
import { getCollectionCards, getCollections } from "../pageContent/utils";
import { Card } from "../card/Card";

export default {
  title: "Example/Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
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
      <Page {...args} />
    </ConfigProvider>
  </HelmetProvider>
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
  notification: <Notification notification={notificationMock} />,
  content: (
    <PageContent
      page={pageMock}
      backUrl="/"
      breadcrumbs={[
        { title: "Root", link: "/" },
        { title: "Nested", link: "/nested" },
      ]}
      collections={getCollections(pageMock.modules)?.map((collection) => (
        <Collection
          key={`collection-${Math.random()}`}
          title={collection.title}
          collectionContainerProps={{ withDots: false }}
          type="grid"
          cards={getCollectionCards(collection).map((cardProps) => (
            <Card
              key={cardProps.id}
              {...cardProps}
              imageUrl={
                cardProps.imageUrl || pageMock.featuredImage?.node?.mediaItemUrl
              }
              direction="fixed-vertical"
              clampText
            />
          ))}
        />
      ))}
    />
  ),
  footer: <>TODO: Implement footer</>,
};
