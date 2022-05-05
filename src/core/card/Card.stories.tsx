/* eslint-disable react/function-component-definition */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import card from "./__mocks__/card.mock";
import Card from "./Card";

export default {
  title: "Example/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div style={{ maxWidth: 420, margin: 24 }}>
    <Card {...args} />
  </div>
);

export const CardDefault = Template.bind({});
CardDefault.args = { ...card };
