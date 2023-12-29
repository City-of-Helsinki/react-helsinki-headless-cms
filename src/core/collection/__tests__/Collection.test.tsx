import React from 'react';
import { addDays, addYears, subDays, subYears } from 'date-fns';

import {
  EventSearchCollectionType,
  EventSelectionCollectionType,
} from '../types';
import { render, screen, waitFor } from '../../../common/utils/testingLibrary';
import { server } from '../../../mocks/server';
import { EventSearchCollection, EventSelectionCollection } from '../Collection';
import {
  eventIds,
  activeEvents,
  pastEventsWithoutEndingTime,
} from '../../../mocks/responses/linkedEvents/eventMocks';
import { CmsEndpoint } from '../../../storybook-common/constants';
import { getApolloConfig } from '../../../tests/apolloConfig';
import { frontPageCarouselVariables } from '../../../mocks/queries/linkedEvents/eventList';
import tapahtumatEventListFrontPageCarousel from '../../../mocks/responses/linkedEvents/eventList/tapahtumat-eventlist-frontpage.json';
import * as CollectionUtils from '../utils';

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
  expect(activeEvents.length).toBe(2);
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('event selection module', () => {
  it('excludes the events that have already ended', async () => {
    const collection = { events: eventIds } as EventSelectionCollectionType;

    render(
      <EventSelectionCollection collection={collection} type="carousel" />,
      undefined,
      { ...getApolloConfig(CmsEndpoint.events) },
    );

    await waitFor(() => {
      expect(screen.queryByText(/Page is loading/)).not.toBeInTheDocument();
    });

    // All the ongoing events should be shown
    activeEvents.forEach((event) => {
      expect(screen.getByText(event.name.fi)).toBeInTheDocument();
    });

    // Events without the ending time but a start time in the future are also included
    expect(activeEvents.filter((event) => event.endTime === null).length).toBe(
      1,
    );

    // The events withoiut the ending time in the past are not
    pastEventsWithoutEndingTime.forEach((event) => {
      expect(screen.queryByText(event.name.fi)).not.toBeInTheDocument();
    });

    // No other cards than the ongoing events should be shown.
    // There is a linkbox that wraps the whole card and another link that wraps the arrow-icon
    // so the amount could be double the events.
    // However, the another link is with aria-hidden,
    // so the amount of the links should be the amounts of events.
    expect(screen.getAllByRole('link').length).toBe(activeEvents.length);
  });
});

describe('event search module', () => {
  it.each(
    [
      new Date(),
      subDays(new Date(), 1),
      subDays(new Date(), 10),
      subDays(new Date(), 100),
      subYears(new Date(), 1),
      subYears(new Date(), 10),
      subYears(new Date(), 100),
    ].map((d) => d.toISOString().substring(0, 'YYYY-MM-DD'.length)),
  )(
    'replace the start-parameter past date-string value "%s" with "now"',
    async (dateInPast) => {
      const convertDateStringInPastToNowSpy = jest.spyOn(
        CollectionUtils,
        'convertDateStringInPastToNow',
      );
      const { data } = tapahtumatEventListFrontPageCarousel.eventList;
      const variables = {
        ...Object.fromEntries(frontPageCarouselVariables),
        start: dateInPast,
      };
      const eventSearchUrl = new URLSearchParams(variables).toString();
      const collection = { url: eventSearchUrl } as EventSearchCollectionType;

      render(
        <EventSearchCollection collection={collection} type="carousel" />,
        null,
        { ...getApolloConfig(CmsEndpoint.events) },
      );

      await waitFor(() => {
        expect(screen.queryByText(/Page is loading/)).not.toBeInTheDocument();
      });

      // All the events should be shown
      data.forEach((event) => {
        expect(screen.getByText(event.name.fi)).toBeInTheDocument();
      });

      expect(convertDateStringInPastToNowSpy).toBeCalledWith(dateInPast);
      expect(convertDateStringInPastToNowSpy).toHaveReturnedWith('now');
    },
  );

  it.each(
    [
      addDays(new Date(), 1),
      addDays(new Date(), 10),
      addDays(new Date(), 100),
      addYears(new Date(), 1),
      addYears(new Date(), 10),
      addYears(new Date(), 100),
      'now',
      'today',
    ].map((d) =>
      typeof d === 'string' ? d : d.toISOString().substring(0, 10),
    ),
  )(
    'dont replace the start-parameter future date-string value "%s"',
    async (dateInFuture) => {
      const convertDateStringInPastToNowSpy = jest.spyOn(
        CollectionUtils,
        'convertDateStringInPastToNow',
      );
      const { data } = tapahtumatEventListFrontPageCarousel.eventList;
      const variables = {
        ...Object.fromEntries(frontPageCarouselVariables),
        start: dateInFuture,
      };
      const eventSearchUrl = new URLSearchParams(variables).toString();
      const collection = { url: eventSearchUrl } as EventSearchCollectionType;

      render(
        <EventSearchCollection collection={collection} type="carousel" />,
        undefined,
        { ...getApolloConfig(CmsEndpoint.events) },
      );

      await waitFor(() => {
        expect(screen.queryByText(/Page is loading/)).not.toBeInTheDocument();
      });

      // All the events should be shown
      data.forEach((event) => {
        expect(screen.getByText(event.name.fi)).toBeInTheDocument();
      });

      expect(convertDateStringInPastToNowSpy).toBeCalledWith(dateInFuture);
      expect(convertDateStringInPastToNowSpy).toHaveReturnedWith(dateInFuture);
    },
  );
});
