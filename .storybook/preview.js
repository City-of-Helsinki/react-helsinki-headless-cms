// Enable hds-design-tokens in storybook
import 'hds-design-tokens/lib/all.min.css'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

// Enable HelsinkiGrotesk font in storybook
import './helsinkiGrotesk.css'
import './storybookOverrides.css'

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
}
