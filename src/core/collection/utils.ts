import isPast from 'date-fns/isPast';

import { EventType } from '../../common/eventsService/types';

export function getVenueIds(ids: number[]): string[] {
  return ids.map((id) => `tprek:${id}`);
}

export const isEventClosed = (event: EventType): boolean =>
  !!event?.endTime && isPast(new Date(event.endTime));
