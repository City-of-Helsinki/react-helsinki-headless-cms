import React from 'react';

import { findAllElementsOfType } from '../findAllElementsOfType';

describe('findAllElementsOfType', () => {
  const flattenedListItems = (
    <ul>
      <li>Should be included 1/2</li>
      <li>Should be included 2/2</li>
    </ul>
  );

  const nestedListItems = (
    <div>
      <ul>
        <li>Should be included 1/3</li>
      </ul>
      <ol>
        <li>Should be included 2/3</li>
        <li>Should be included 3/3</li>
      </ol>
    </div>
  );

  it.each([
    [flattenedListItems, ['li'], 2], // 2 x <li>
    [nestedListItems, ['li'], 3], // 3 x <li>
    [nestedListItems, ['ul', 'ol', 'li'], 5], // <ul>, <ol>, 3 x <li>
    [
      <div>
        <div>{nestedListItems}</div>
      </div>,
      ['li'],
      3, // 3 x <li>
    ],
    [
      <div>
        <div>{nestedListItems}</div>
        <div>
          <span>
            <img alt="should be included 1/2" src="#" />
          </span>
        </div>
        <img alt="should be included 2/2" src="#" />
        <div>
          <p>Not included</p>
        </div>
      </div>,
      ['img'],
      2, // 2 x <img>
    ],
  ])(
    'finds the elements of searched types #',
    (component, types, foundCount) => {
      const { children } = component.props;
      const result = findAllElementsOfType(children, types);
      expect(result).toHaveLength(foundCount);
      expect(result).toMatchSnapshot();
    },
  );
});
