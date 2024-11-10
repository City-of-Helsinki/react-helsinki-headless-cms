import isPast from 'date-fns/isPast';

import type { EventType } from '../../common/eventsService/types';
import normalizeKeys from '../../linkedEvents/utils/normalizeKeys';
import { LINKEDEVENTS_DATE_NOW } from './constants';

/**
 * @param {ids} ids - the venue ids in number format.
 * @return {Array} - Returns array of tprek formatted string ids.
 */
export function getVenueIds(ids: number[]): string[] {
  return ids.map((id) => `tprek:${id}`);
}

/**
 * @param {event} - event.
 * @return {boolean} - Returns true if events' end time in past.
 */
export const isEventEndTimeInPast = (event: EventType): boolean =>
  !!event?.endTime && isPast(new Date(event.endTime));

/**
 * @param {event} - event.
 * @return {boolean} - Returns true if events' end time in null and start time in past.
 */
export const isEventEndTimeNullAndStartTimeInPast = (
  event: EventType,
): boolean =>
  !!event?.startTime &&
  event?.endTime === null &&
  isPast(new Date(event.startTime));

/**
 * @param {event} - event.
 * @return {boolean} - Returns true if event is closed.
 */
export const isEventClosed = (event: EventType): boolean =>
  isEventEndTimeInPast(event) || isEventEndTimeNullAndStartTimeInPast(event);

/**
 * @param {params} - Get params.
 * @return {object} - Returns normalized values.
 */
export const normalizeParamsValues = (params: Record<string, string>) => {
  const normalizedParams = { ...normalizeKeys(params) };

  // Fix for course event type lower case
  if (normalizedParams.eventType) {
    normalizedParams.eventType =
      normalizedParams.eventType.charAt(0).toUpperCase() +
      normalizedParams.eventType.slice(1);
  }

  // Fix boolean types
  Object.keys(normalizedParams).forEach((param) => {
    if (normalizedParams[param] === 'true') {
      normalizedParams[param] = true;
    } else if (normalizedParams[param] === 'false') {
      normalizedParams[param] = false;
    }
  });

  return normalizedParams;
};

/**
 * @param {dateString} - Get date string.
 * @return {boolean} - Returns true if the date is valid
 */
export function isValidDate(dateString: string) {
  return !Number.isNaN(Date.parse(dateString));
}

/**
 * @param {start} start - Get start date.
 * @return {boolean} - Returns current date as string if the initial was in past.
 */
export const convertDateStringInPastToNow = (start: string): string => {
  const startDate = new Date(start);
  const now = new Date();

  if (isValidDate(start) && startDate <= now) {
    return LINKEDEVENTS_DATE_NOW;
  }
  return start;
};
