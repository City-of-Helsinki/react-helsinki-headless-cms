// Enable hds-design-tokens in storybook
import 'hds-design-tokens/lib/all.min.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { initialize as mswInitialize, mswDecorator } from 'msw-storybook-addon';

// Enable HelsinkiGrotesk font in storybook
import './helsinkiGrotesk.css';
import './storybookOverrides.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    defaultViewport: 'extraSmall',
    viewports: INITIAL_VIEWPORTS,
  },
};

// Initialize MSW
mswInitialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];
export const tags = ['autodocs', 'autodocs'];
