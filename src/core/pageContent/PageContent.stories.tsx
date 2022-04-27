/* eslint-disable react/function-component-definition */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ConfigProvider from "../configProvider/ConfigProvider";
import defaultConfig from "../configProvider/defaultConfig";
import pageMock from "./__mocks__/page.mock";
import pageWithDiverseContent from "./__mocks__/pageWithDiverseContent.mock";
import PageContent from "./PageContent";

export default {
  title: "Example/PageContent",
  component: PageContent,
} as ComponentMeta<typeof PageContent>;

const Template: ComponentStory<typeof PageContent> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
    }}
  >
    <PageContent {...args} />
  </ConfigProvider>
);

export const PageContentDefault = Template.bind({});
PageContentDefault.args = {
  page: pageMock,
};

export const PageContentWithSupportedContentTypes = Template.bind({});
PageContentWithSupportedContentTypes.args = {
  page: pageWithDiverseContent,
};
