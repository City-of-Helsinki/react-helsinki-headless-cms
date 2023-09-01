import React from 'react';

import { EventSelectionCollectionType } from '../types';
import { render, screen, waitFor } from '../../../common/utils/testingLibrary';
import { server } from '../../../mocks/server';
import { EventSelectionCollection } from '../Collection';
import {
  eventIds,
  activeEvents,
  pastEventsWithoutEndingTime,
} from '../../../mocks/queries/pageEventSelectionModule';
import { CmsEndpoint } from '../../../storybook-common/constants';
import { getApolloConfig } from '../../../tests/apolloConfig';

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
  expect(activeEvents.length).toBe(2);
});

describe('event selection module', () => {
  it('excludes the events that have already ended', async () => {
    const collection = { events: eventIds } as EventSelectionCollectionType;

    render(
      <EventSelectionCollection collection={collection} type="carousel" />,
      null,
      { ...getApolloConfig(CmsEndpoint.events) },
    );

    await waitFor(() => {
      expect(screen.queryByText(/Page is loading/)).not.toBeInTheDocument();
    });

    // All the ongoing events should be shown
    activeEvents.forEach(async (event) => {
      expect(
        await screen.findByRole('link', { name: event.name.fi }),
      ).toBeInTheDocument();
    });

    // Events without the ending time but a start time in the future are also included
    expect(activeEvents.filter((event) => event.endTime === null).length).toBe(
      1,
    );

    // The events withoiut the ending time in the past are not
    pastEventsWithoutEndingTime.forEach((event) => {
      expect(
        screen.queryByRole('link', { name: event.name.fi }),
      ).not.toBeInTheDocument();
    });

    // No other cards than the ongoing events should be shown.
    // There is a linkbox that wraps the whole card and another link that wraps the arrow-icon
    // so the amount could be double the events.
    // However, the another link is with aria-hidden,
    // so the amount of the links should be the amounts of events.
    expect(screen.getAllByRole('link').length).toBe(activeEvents.length);
  });
});
