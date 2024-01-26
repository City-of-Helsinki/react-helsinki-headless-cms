import React from 'react';

/**
 * Gets the string type of the component or core html (JSX) element.
 * React Fragments will return type 'react.fragment'.
 * Priority will be given to the prop '__TYPE'.
 */
export const typeOfComponent = (component: React.ReactElement): string =>
  // eslint-disable-next-line no-underscore-dangle
  component?.props?.__TYPE ||
  component?.type
    ?.toString()
    .replace('Symbol(react.fragment)', 'react.fragment') ||
  undefined;

/**
 * Gets all children by specified type.
 * This function will check the prop '__TYPE' first
 * and then the 'type' string to match core html elements.
 * To find a React Fragment, search for type 'react.fragment'.
 *
 * @example
 * // Finds all occurrences of ToDo (custom component), div, and React Fragment
 * getChildrenByType(children, ['ToDo', 'div', 'react.fragment']);
 */
export const getChildrenByType = (
  children: React.ReactNode,
  types: string[],
): React.ReactNode[] =>
  React.Children.toArray(children).filter(
    (child) =>
      React.isValidElement(child) &&
      types.indexOf(typeOfComponent(child)) !== -1,
  );
