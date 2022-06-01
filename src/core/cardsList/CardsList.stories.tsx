/* eslint-disable react/function-component-definition */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardsList from "./CardsList";
import { Card } from "../card/Card";
import card from "../card/__mocks__/card.mock";

export default {
  title: "Example/CardsList",
  component: CardsList,
} as ComponentMeta<typeof CardsList>;

const Template: ComponentStory<typeof CardsList> = (args) => (
  <div style={{ margin: 24, overflow: "hidden" }}>
    <CardsList {...args} />
  </div>
);

export const CardListDefault = Template.bind({});
CardListDefault.args = {
  children: (
    <>
      <Card {...card} hasLink />
      <Card {...card} hasLink />
      <Card {...card} hasLink />
      <Card {...card} hasLink />
      <Card {...card} hasLink />
      <Card {...card} hasLink />
      <Card {...card} hasLink />
    </>
  ),
};
