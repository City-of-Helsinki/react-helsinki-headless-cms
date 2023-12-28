import React from 'react';

import { Tag } from '../Tag';

describe('Tag', () => {
  it('should have an unique generated id if the id-attribute is unset', () => {
    const listOfTags = Array.from('abcdefghijklmnopqrstuvwxyz').map((c) =>
      React.createElement(Tag, undefined, c),
    );
    // Tag id is defined every time
    expect(listOfTags.every((tag) => !!tag)).toBe(true);
    // Every id is unique
    expect([...new Set(listOfTags)]).toHaveLength(listOfTags.length);
  });

  it('should have settable id-property', () => {
    const ids = Array.from('abcdefghijklmnopqrstuvwxyz');
    const listOfTags = ids.map((c) =>
      // eslint-disable-next-line react/no-children-prop
      React.createElement(Tag, { id: c, children: c }),
    );
    // Tag id is defined every time
    expect(
      listOfTags.every(
        (tag) =>
          tag.props.id === tag.props.children && ids.includes(tag.props.id),
      ),
    ).toBe(true);
  });
});
