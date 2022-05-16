/* eslint-disable react/function-component-definition */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Collection from "./Collection";
import page from "../pageContent/__mocks__/page.mock";
import { getCollections, getCollectionCards } from "../pageContent/utils";
import defaultConfig from "../configProvider/defaultConfig";
import ConfigProvider from "../configProvider/ConfigProvider";
import Card from "../card/Card";
import cardMock from "../card/__mocks__/card.mock";

export default {
  title: "Example/Collection",
  component: Collection,
} as ComponentMeta<typeof Collection>;

const Template: ComponentStory<typeof Collection> = (args) => (
  <div style={{ margin: 24, overflow: "hidden" }}>
    <ConfigProvider
      config={{
        ...defaultConfig,
      }}
    >
      <Collection {...args} />
    </ConfigProvider>
  </div>
);

export const CollectionDefault = Template.bind({});
const collection = getCollections([page?.modules[0]])[0];
const cards = getCollectionCards(collection).map((cardProps) => (
  <Card
    key={cardProps.id}
    {...cardProps}
    imageUrl={cardProps.imageUrl || cardMock.imageUrl}
  />
));
CollectionDefault.args = {
  cards,
  title: "Collection Heading",
  colsCount: 4,
};
