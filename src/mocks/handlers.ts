import { queryPage } from './queries/cms/page';
import { queryEventList } from './queries/linkedEvents/eventList';
import { queryEventsByIds } from './queries/linkedEvents/eventsByIds';

export const handlers = [queryEventList(), queryEventsByIds(), queryPage()];
