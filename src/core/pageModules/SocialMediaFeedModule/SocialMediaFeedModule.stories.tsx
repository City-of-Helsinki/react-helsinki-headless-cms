/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { SocialMediaFeedModule } from './SocialMediaFeedModule';
import { ConfigProvider } from '../../configProvider/ConfigProvider';
import { defaultConfig } from '../../configProvider/defaultConfig';

export default {
  title: 'Core components/Social Media Feed module',
  component: SocialMediaFeedModule,
  args: {
    anchor: 'feed',
    title: 'Social Media Feed',
    script:
      '<div id="flockler-embed-17988bb2c6a09d6903ef26ee6c09d20e"></div><script src="https://plugins.flockler.com/embed/17868a952430b6b61f91b78bde8668ac/17988bb2c6a09d6903ef26ee6c09d20e" async></script>',
  },
  argTypes: {},
} as Meta<typeof SocialMediaFeedModule>;

const Template: StoryFn<typeof SocialMediaFeedModule> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
      htmlSanitizer: {
        allowedUnsafeTags: [],
        trustedOrigins: [],
        allowUnsafeSocialMediaScript: true,
      },
    }}
  >
    <div style={{ margin: 24 }}>
      <SocialMediaFeedModule {...args} />
    </div>
  </ConfigProvider>
);

export const ImageGalleryModuleDefault = {
  render: Template,
};
