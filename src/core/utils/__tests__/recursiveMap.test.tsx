import React from 'react';

import { recursiveMap } from '../recursiveMap';
import { typeOfComponent } from '../getChildrenByType';

describe('recursiveMap', () => {
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
    [flattenedListItems, jest.fn(), 2], // 2 x <li>
    [nestedListItems, jest.fn(), 1 + 1 + 3], // <ul>, <ol> and 3 x <li>
    [
      <div>
        <div>{nestedListItems}</div>
      </div>,
      jest.fn(),
      1 + 1 + 1 + 1 + 3, // <div>, sub <div>, <ul>, <ol> and 3 x <li>
    ],
  ])('recursively calls the defined function', (component, fn, callCount) => {
    const { children } = component.props;
    recursiveMap(children, fn);
    expect(fn).toHaveBeenCalledTimes(callCount);
  });

  it('can be used with void functions e.g. to count elements', () => {
    const { children } = nestedListItems.props;
    const elementCounts = {
      li: 3,
      ul: 1,
      ol: 1,
    };
    const elementCounter: Record<keyof typeof elementCounts, number> = {
      li: 0,
      ul: 0,
      ol: 0,
    };
    const fn = (child: React.ReactNode) => {
      if (React.isValidElement(child)) {
        switch (typeOfComponent(child)) {
          case 'li':
            elementCounter.li += 1;
            break;
          case 'ul':
            elementCounter.ul += 1;
            break;
          case 'ol':
            elementCounter.ol += 1;
            break;
          default:
            break;
        }
      }
      return child;
    };
    recursiveMap(children, fn);
    expect(elementCounter).toStrictEqual(elementCounts);
  });

  it.each([
    [nestedListItems, 'li', 3],
    [
      <div>
        <p>1/3</p>
        <div>
          <p>2/3</p>
        </div>
        <div>
          <div>
            <p>3/3</p>
          </div>
        </div>
      </div>,
      'p',
      3,
    ],
  ])(
    'can be used with return values to collect content #',
    (component, type, elementCount) => {
      const { children } = component.props;
      const result: React.ReactElement[] = [];
      const fn = (child: React.ReactNode) => {
        if (React.isValidElement(child) && typeOfComponent(child) === type) {
          result.push(child);
        }
        return child;
      };
      recursiveMap(children, fn);
      expect(result).toHaveLength(elementCount);
      expect(result).toMatchSnapshot();
    },
  );

  it('can be used to modify each children of a React node', () => {
    const {
      props: { children },
    } = (
      <>
        <div>A</div>
        <div>
          <div>B</div>
        </div>
        <div>
          <div>
            <div>C</div>
          </div>
        </div>
      </>
    );
    const fn = (child: React.ReactNode) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          className: 'newTestClassInEveryElement',
        });
      }
      return child;
    };
    const result = recursiveMap(children, fn);
    expect(result).toMatchSnapshot();
  });
});
