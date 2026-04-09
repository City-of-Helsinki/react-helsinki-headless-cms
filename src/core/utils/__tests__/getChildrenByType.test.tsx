import React from 'react';

import { getChildrenByType } from '../getChildrenByType';

describe('getChildrenByType', () => {
  it.each([
    [
      ['img', 'p'],
      <React.Fragment key="1">
        <p>should contain 1/3</p>
        <img alt="should contain 2/3" src="#" />
        <span>should not contain</span>
        <p>should contain 3/3</p>
      </React.Fragment>,
      3,
    ],
    [
      ['ul'],
      <React.Fragment key="2">
        <ol>
          <li>Should not contain</li>
        </ol>
        <ul>
          <li>Should contain 1/2</li>
        </ul>
        <p>Should not contain</p>
        <hr />
        <ul>
          <li>Should contain 2/2</li>
        </ul>
      </React.Fragment>,
      2,
    ],
  ])(
    'filters childrens by defined list of types',
    (types, component, filteredCount) => {
      const { children } = component.props;
      const result = getChildrenByType(children, types);
      expect(result).toHaveLength(filteredCount);
      expect(result).toMatchSnapshot();
    },
  );
});
