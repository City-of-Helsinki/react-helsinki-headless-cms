import { format, parseISO } from 'date-fns';

export const formatDateTime = (dateTime: Date): string =>
  format(dateTime, 'd.M.yyyy, HH:mm');

export const formatDate = (dateTime: Date): string =>
  format(dateTime, 'd.M.yyyy');

export const formatDateFromString = (dateTime: string): string =>
  format(parseISO(dateTime), 'd.M.yyyy');

export const formatDateTimeFromString = (dateTime: string): string =>
  format(parseISO(dateTime), 'd.M.yyyy, HH:mm');
