import React from 'react';

import { render, screen, waitFor } from '../../../common/utils/testingLibrary';
import { server } from '../../../mocks/server';
import { CmsEndpoint } from '../../../storybook-common/constants';
import { getApolloConfig } from '../../../tests/apolloConfig';
import { Notification } from '../Notification';

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('apollo Notification component', () => {
  it('renders notification with gql data', async () => {
    render(<Notification />, undefined, {
      ...getApolloConfig(CmsEndpoint.hobbies),
    });

    // wait data to load
    await waitFor(() => {
      expect(screen.queryByText('Test notification')).toBeInTheDocument();
    });

    // there should be title, content and link text in the notification
    expect(screen.getByText('Test notification')).toBeInTheDocument();
    expect(
      screen.getByText('This is a test notification content'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: 'Read more. Opens in a new tab. Opens a different website.',
      }),
    ).toHaveAttribute('href', 'https://hel.fi');
  });
});
