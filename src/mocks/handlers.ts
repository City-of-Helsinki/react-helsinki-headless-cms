import { queryPage } from './queries/page';
import { queryPageEventSelectioModule } from './queries/pageEventSelectionModule';

export const handlers = [queryPageEventSelectioModule(), queryPage()];
