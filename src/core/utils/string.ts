/* eslint-disable import/no-extraneous-dependencies */
import { camelCase, startCase } from 'lodash-es';
import { decode } from 'html-entities';

export const SELECT_COLORS_LIGHT = ['coat-of-arms', 'brick', 'bus', 'tram'];

export const getColor = (color: string): string =>
  startCase(camelCase(color)).replace(/\s/g, '');

export const getIconName = (name: string): string =>
  startCase(camelCase(`icon-${name}`)).replace(/\s/g, '');

export const getTextFromHtml = (html: string): string =>
  decode(html.toString().replace(/(<([^>]+)>)/gi, ''));

export const isWhiteText = (color: string): boolean =>
  SELECT_COLORS_LIGHT.includes(color);
