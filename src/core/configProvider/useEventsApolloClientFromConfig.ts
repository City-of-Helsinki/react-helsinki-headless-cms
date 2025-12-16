import { useConfig } from './useConfig';

export default function useQueryWithEventsApolloClientFromConfig() {
  const { eventsApolloClient } = useConfig();

  if (!eventsApolloClient) {
    throw Error(
      'Error: useQueryWithEventsApolloClientFromConfig - When using components from the apollo sub module, you must include a compatible events (LinkedEvents) apollo client in the eventsApolloClient field of the config object you provide with ConfigProvider',
    );
  }

  return eventsApolloClient;
}
