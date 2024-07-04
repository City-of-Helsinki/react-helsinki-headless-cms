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
        url: 'https://liikunta.app-staging.hkih.hion.dev/app/uploads/2023/01/2ee4b4ed-kuntosali_liikuntamylly_2022_kuva_maarit_hohteri_24.jpg-muokattu-768x580.jpg',
        previewUrl:
          'https://liikunta.app-staging.hkih.hion.dev/app/uploads/2023/01/2ee4b4ed-kuntosali_liikuntamylly_2022_kuva_maarit_hohteri_24.jpg-muokattu-300x227.jpg',
      },
      {
        title: 'Image title 2',
        photographer: 'Jussi Salo',
        url: 'https://liikunta.app-staging.hkih.hion.dev/app/uploads/2023/01/7318f461-vesiliikunta_pirkkolan_uimahalli_2022_kuva_maarit_hohteri_09.jpg-muokattu-768x512.jpg',
        previewUrl:
          'https://liikunta.app-staging.hkih.hion.dev/app/uploads/2023/01/7318f461-vesiliikunta_pirkkolan_uimahalli_2022_kuva_maarit_hohteri_09.jpg-muokattu-300x200.jpg',
      },
      {
        title: 'Image title 3',
        photographer: 'Jussi Salo',
        url: 'https://liikunta.app-staging.hkih.hion.dev/app/uploads/2023/01/168d6a62-aki_rask_005-senioriliikuntaa-kamppi-8.11.2016-1.jpg-muokattu-768x511.jpg',
        previewUrl:
          'https://liikunta.app-staging.hkih.hion.dev/app/uploads/2023/01/168d6a62-aki_rask_005-senioriliikuntaa-kamppi-8.11.2016-1.jpg-muokattu-300x200.jpg',
      },
    ],
    withBorder: false,
    withLightbox: true,
    columns: 3,
    lightboxUid: '1',
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
