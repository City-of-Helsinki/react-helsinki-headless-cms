// eslint-disable-next-line import/no-extraneous-dependencies
import { camelCase, startCase } from 'lodash-es';

export const getColor = (color: string): string =>
  startCase(camelCase(color)).replace(/\s/g, '');

export const getIconName = (name: string): string =>
  startCase(camelCase(`icon-${name}`)).replace(/\s/g, '');

export const getTextFromHtml = (html: string): string => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};
