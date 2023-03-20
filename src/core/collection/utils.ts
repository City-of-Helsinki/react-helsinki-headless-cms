import isPast from 'date-fns/isPast';

import { EventType } from '../../common/eventsService/types';
import normalizeKeys from '../../linkedEvents/utils/normalizeKeys';

export function getVenueIds(ids: number[]): string[] {
  return ids.map((id) => `tprek:${id}`);
}

export const isEventEndTimeInPast = (event: EventType): boolean =>
  !!event?.endTime && isPast(new Date(event.endTime));

export const isEventEndTimeNullAndStartTimeInPast = (
  event: EventType,
): boolean =>
  !!event?.startTime &&
  event?.endTime === null &&
  isPast(new Date(event.startTime));

export const isEventClosed = (event: EventType): boolean =>
  isEventEndTimeInPast(event) || isEventEndTimeNullAndStartTimeInPast(event);

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
