/* eslint-disable react/function-component-definition */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ConfigProvider from "../configProvider/ConfigProvider";
import defaultConfig from "../configProvider/defaultConfig";
import card from "./__mocks__/card.mock";
import LargeCard from "./LargeCard";

export default {
  title: "Example/LargeCard",
  component: LargeCard,
} as ComponentMeta<typeof LargeCard>;

const Template: ComponentStory<typeof LargeCard> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
      siteName: "RHHC Example",
      components: {
        ...defaultConfig.components,
      },
    }}
  >
    <div style={{ maxWidth: 1470, margin: 24 }}>
      <LargeCard {...args} />
      <LargeCard {...args} imagePosition="left" />
    </div>
  </ConfigProvider>
);

export const LargeCardDefault = Template.bind({});
LargeCardDefault.args = { ...card };
