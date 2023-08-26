// eslint-disable-next-line import/no-extraneous-dependencies
import camelCase from 'lodash/camelCase';
// eslint-disable-next-line import/no-extraneous-dependencies
import startCase from 'lodash/startCase';

export const getColor = (color: string): string =>
  startCase(camelCase(color)).replace(/\s/g, '');

export const getIconName = (name: string): string =>
  startCase(camelCase(`icon-${name}`)).replace(/\s/g, '');
