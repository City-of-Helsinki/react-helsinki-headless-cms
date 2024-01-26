import React from 'react';

/**
 * Recursively loops through the children of a ReactNode
 * and runs the given function from arguments to the every child.
 *
 * If the child is a ReactElement and it has children,
 * the children will be recursively called with the given function.
 *
 * If the child is not a valid ReactElement,
 * which would mean that it is for example a string content of an HTML-element,
 * it is directly returned.
 *
 * See the unit tests for some examples.
 */
export const recursiveMap = (
  children: React.ReactNode,
  fn: (children: React.ReactNode) => React.ReactNode,
) =>
  React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      // Strings inside HTML elements, etc.
      return child;
    }

    if (child.props.children) {
      // Make a recursive call to find the last node
      return fn(
        React.cloneElement(child as React.ReactElement, {
          children: recursiveMap(child.props.children, fn),
        }),
      );
    }
    // Should never(?) come here
    return fn(child);
  })?.flat();
