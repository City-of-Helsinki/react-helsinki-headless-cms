import { queryPage } from './queries/cms/page';
import { queryEventList } from './queries/linkedEvents/eventList';
import { queryEventsByIds } from './queries/linkedEvents/eventsByIds';
import { queryLanguages } from './queries/cms/languages';
import { queryMenu } from './queries/cms/menu';
import { queryNotification } from './queries/cms/notification';

export const handlers = [
  queryEventList(),
  queryEventsByIds(),
  queryPage(),
  queryLanguages(),
  queryMenu(),
  queryNotification(),
];
