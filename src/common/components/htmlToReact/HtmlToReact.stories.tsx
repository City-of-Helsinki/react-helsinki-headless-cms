/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import kukkuuTestPage from '../../../mocks/responses/page/kukkuu-page-demosivu.json';
import { HtmlToReact, HtmlToReactProps, TABLE_VARIANTS } from './HtmlToReact';

// Real embedded video content  from the Wordpress headless CMS.
const videoMediaIframeContent =
  '\n<p>Demo page for iframes</p>\n\n\n\n<p>Youtube: </p>\n\n\n\n<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\n<iframe loading="lazy" title="Bohemian Rhapsody | Muppet Music Video | The Muppets" width="500" height="281" src="https://www.youtube.com/embed/tgbNymZ7vqY?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n</div><figcaption class="wp-element-caption">Youtube caption</figcaption></figure>\n\n\n\n<p>Vimeo:</p>\n\n\n\n<figure class="wp-block-embed is-type-video is-provider-vimeo wp-block-embed-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\n<iframe loading="lazy" title="The New Vimeo Player (You Know, For Videos)" src="https://player.vimeo.com/video/76979871?h=8272103f6e&amp;dnt=1&amp;app_id=122963" width="500" height="281" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>\n</div><figcaption class="wp-element-caption">Vimeo caption</figcaption></figure>\n';

type TableFigureStyle = 'is-style-regular' | 'is-style-stripes';

function tableContent(tableFigureStyle: TableFigureStyle) {
  return (
    `<figure class="wp-block-table ${tableFigureStyle}">` +
    '  <table>' +
    '    <thead>' +
    '      <tr>' +
    '        <th>Name</th>' +
    '        <th>Species</th>' +
    '        <th>Cover</th>' +
    '        <th>Feet</th>' +
    '      </tr>' +
    '    </thead>' +
    '    <tbody>' +
    '      <tr>' +
    '        <td>Ransu</td>' +
    '        <td>Dog</td>' +
    '        <td>Fur</td>' +
    '        <td>4</td>' +
    '      </tr>' +
    '      <tr>' +
    '        <td>Peto</td>' +
    '        <td>Cat</td>' +
    '        <td>Fur</td>' +
    '        <td>4</td>' +
    '      </tr>' +
    '      <tr>' +
    '        <td>Alex</td>' +
    '        <td>Parrot</td>' +
    '        <td>Feather</td>' +
    '        <td>2</td>' +
    '      </tr>' +
    '    </tbody>' +
    '  </table>' +
    '</figure>'
  );
}

export default {
  title: 'Common components/HtmlToReact',
  component: HtmlToReact,
  argTypes: {
    // Give some test content alternatives
    children: {
      control: 'select',
      options: ['Iframes', 'KukkuuTestPage', 'RegularTable', 'StripesTable'],
      mapping: {
        Iframes: videoMediaIframeContent,
        KukkuuTestPage: kukkuuTestPage.page.content,
        RegularTable: tableContent('is-style-regular'),
        StripesTable: tableContent('is-style-stripes'),
      },
    },
    tableVariants: {
      control: 'inline-check',
      options: TABLE_VARIANTS,
    },
  },
} as Meta<typeof HtmlToReact>;

const Template: StoryFn<typeof HtmlToReact> = ({
  children,
  components,
  allowedUnsafeTags,
  trustedOrigins,
  tableVariants,
}: HtmlToReactProps & {
  tableVariants: HtmlToReactProps['components']['tableVariants'];
}) => (
  <div>
    <HtmlToReact
      components={{ ...components, tableVariants }}
      allowedUnsafeTags={allowedUnsafeTags}
      trustedOrigins={trustedOrigins}
    >
      {children}
    </HtmlToReact>
  </div>
);

export const HtmlToReactMedia = {
  render: Template,

  args: {
    children: 'Iframes', // A default HTML content to be tested
    allowedUnsafeTags: ['iframe'],
    trustedOrigins: ['https://www.youtube.com', 'https://player.vimeo.com'],
  },
};
