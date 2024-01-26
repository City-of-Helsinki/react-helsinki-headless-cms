import { getChildrenByType } from './getChildrenByType';
import { recursiveMap } from './recursiveMap';

/**
 * Find all elements of defined types recursively from a ReactNode.
 * @returns a list of elements of specified types that could be found from inside the ReactNode.
 */
export const findAllElementsOfType = (
  children: React.ReactNode,
  types: string[],
) => {
  const elementsOfType = [];
  recursiveMap(children, (child) => {
    elementsOfType.push(getChildrenByType(child, types));
    return child;
  });
  return elementsOfType.flat();
};
