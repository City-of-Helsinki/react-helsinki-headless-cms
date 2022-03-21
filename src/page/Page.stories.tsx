/* eslint-disable react/function-component-definition */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ConfigProvider, {
  defaultConfig,
} from "../configProvider/ConfigProvider";
import pageMock from "../pageContent/__mocks__/page.mock";
import PageContent from "../pageContent/PageContent";
import Page from "./Page";

export default {
  title: "Example/Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
    }}
  >
    <Page {...args} />
  </ConfigProvider>
);

export const PageDefault = Template.bind({});
PageDefault.args = {
  navigation: <>TODO: Implement navigation</>,
  content: (
    <PageContent
      page={pageMock}
      breadcrumbs={[
        { title: "Root", uri: "/" },
        { title: "Nested", uri: "/nested" },
      ]}
    />
  ),
  footer: <>TODO: Implement footer</>,
};
