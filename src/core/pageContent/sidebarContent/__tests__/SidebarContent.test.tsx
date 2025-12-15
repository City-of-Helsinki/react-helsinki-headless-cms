import React from 'react';

import SidebarContentLinkList from '../SidebarContentLinkList';
import { customRender as render } from '../../../../common/utils/customRender';

describe('SidebarContent containing link lists', () => {
  const baseLinkItem = {
    title: 'title',
    url: '#',
  };

  const nullishValues = [undefined, null, ''];

  it('renders a link list when a valid item is included in the links', () => {
    const links = [
      { url: '#', title: 'link1' },
      { url: 'https://www.hel.fi', title: 'link2' },
    ];
    const { container } = render(
      <SidebarContentLinkList
        title="Renders links into a link list"
        links={links}
      />,
    );
    expect(
      container
        .getElementsByClassName('listContainer')[0]
        .getElementsByTagName('ul')[0].children,
    ).toHaveLength(links.length);
    expect(container).toMatchSnapshot();
  });

  it.each(['url', 'title'])(
    'skips the link items that does not have %s which is a mandatory field',
    (mandatoryField) => {
      nullishValues.forEach((nullishValue) => {
        const linkItem = {
          ...baseLinkItem,
          [mandatoryField]: nullishValue,
        };
        const { container } = render(
          <SidebarContentLinkList links={[linkItem]} />,
        );
        expect(
          container
            .getElementsByClassName('listContainer')[0]
            .getElementsByTagName('ul')[0].children,
        ).toHaveLength(0);
      });
    },
  );
});
