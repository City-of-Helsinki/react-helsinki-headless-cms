/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ImageGalleryModule } from './ImageGalleryModule';
import { ConfigProvider } from '../../configProvider/ConfigProvider';
import { defaultConfig } from '../../configProvider/defaultConfig';

export default {
  title: 'Core components/Image gallery module',
  component: ImageGalleryModule,
  args: {
    images: [
      {
        title: 'Image title 1',
        photographer: 'Jussi Salo',
        url: 'https://rastilacamping.hel.fi/wp-content/uploads/2023/04/Rastilan_leirintaalue_2015_kuva_Lauri_Rotko_36-1181x800.jpg',
      },
      {
        title: 'Image title 2',
        photographer: 'Jussi Salo',
        url: 'https://rastilacamping.hel.fi/wp-content/uploads/2023/04/Rastila_Camping_2019_kuva_Karl_Henrik_Edlund_3.jpg',
      },
      {
        title: 'Image title 3',
        photographer: 'Jussi Salo',
        url: 'https://rastilacamping.hel.fi/wp-content/uploads/2023/04/Rastilan_leirintaalue_2018_kuva_Jonna_Pennanen_29-1-1200x792.jpg',
      },
    ],
    withBorder: true,
    withLightbox: true,
    columns: 3,
    lightboxUid: 1,
  },
  argTypes: {},
} as Meta<typeof ImageGalleryModule>;

const Template: StoryFn<typeof ImageGalleryModule> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
    }}
  >
    <div style={{ margin: 24 }}>
      <ImageGalleryModule {...args} />
    </div>
  </ConfigProvider>
);

export const ImageGalleryModuleDefault = {
  render: Template,
};
