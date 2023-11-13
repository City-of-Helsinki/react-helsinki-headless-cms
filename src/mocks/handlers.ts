import { queryPage } from './queries/cms/page';
import { queryEventsByIds } from './queries/linkedEvents/eventsByIds';

export const handlers = [queryEventsByIds(), queryPage()];
