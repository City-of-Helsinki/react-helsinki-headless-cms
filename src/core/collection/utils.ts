import isPast from 'date-fns/isPast';

import { EventType } from '../../common/eventsService/types';
import normalizeKeys from '../../linkedEvents/utils/normalizeKeys';

export function getVenueIds(ids: number[]): string[] {
  return ids.map((id) => `tprek:${id}`);
}

export const isEventClosed = (event: EventType): boolean =>
  !!event?.endTime && isPast(new Date(event.endTime));

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
