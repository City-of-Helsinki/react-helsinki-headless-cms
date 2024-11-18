import { format, parseISO } from 'date-fns';

/**
 * @param {dateTime} dateTime - the date to format to 'd.M.yyyy, HH:mm'.
 * @return {string} - Formatted date.
 */
export const formatDateTime = (dateTime: Date): string =>
  format(dateTime, 'd.M.yyyy, HH:mm');

/**
 * @param {dateTime} dateTime -the date to format to 'd.M.yyyy'.
 * @return {string} - Formatted date.
 */
export const formatDate = (dateTime: Date): string =>
  format(dateTime, 'd.M.yyyy');

/**
 * @param {dateTime} dateTime - date as string to format to 'd.M.yyyy'.
 * @return {string} - Formatted date.
 */
export const formatDateFromString = (dateTime: string): string =>
  format(parseISO(dateTime), 'd.M.yyyy');

/**
 * @param {dateTime} dateTime - date as string to format to 'd.M.yyyy, HH:mm'.
 * @return {string} - Formatted date.
 */
export const formatDateTimeFromString = (dateTime: string): string =>
  format(parseISO(dateTime), 'd.M.yyyy, HH:mm');
