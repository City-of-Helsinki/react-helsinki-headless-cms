/* eslint-disable react/function-component-definition */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Carousel from "./Carousel";
import Card from "../card/Card";
import card from "../card/__mocks__/card.mock";

export default {
  title: "Example/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <div>
    <div style={{ overflow: "hidden", padding: 24 }}>
      <Carousel {...args}>
        <Card {...card} title="1" />
        <Card {...card} title="2" />
        <Card {...card} title="3" />
        <Card {...card} title="4" />
        <Card {...card} title="5" />
        <Card {...card} title="6" />
        <Card {...card} title="7" />
      </Carousel>
    </div>
  </div>
);

export const CarouselDefault = Template.bind({});
