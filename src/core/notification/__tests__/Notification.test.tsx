import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { customRender as render } from '../../../common/utils/customRender';
import { Notification } from '../Notification';
import notificationMock from '../__mocks__/notification.mock';

const extractContentStringFromContent = (rawContent: string) =>
  rawContent.replace('<p>', '').replace('</p>', '');

test('should render notification with expected content', () => {
  render(<Notification notification={notificationMock} />);

  expect(
    screen.getByRole('heading', { level: 2, name: notificationMock.title }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(extractContentStringFromContent(notificationMock.content)),
  ).toBeInTheDocument();

  const link = screen.getByRole('link', {
    name: `Check out here. Opens in a new tab. Opens a different website.`,
  });

  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', notificationMock.linkUrl);
});

test('should not render notification when it has expired', () => {
  const dateInThePast = new Date();
  dateInThePast.setDate(dateInThePast.getDate() - 1);

  render(
    <Notification
      notification={{
        ...notificationMock,
        endDate: dateInThePast.toJSON(),
      }}
    />,
  );

  expect(
    screen.queryByRole('heading', { level: 2, name: notificationMock.title }),
  ).toEqual(null);
});

test('should not render notification when it has been dismissed', async () => {
  render(<Notification notification={notificationMock} />);

  expect(
    screen.getByRole('heading', { level: 2, name: notificationMock.title }),
  ).toBeInTheDocument();

  await waitFor(() =>
    userEvent.click(
      screen.getByRole('button', {
        name: 'close',
      }),
    ),
  );

  await waitFor(() =>
    expect(
      screen.queryByRole('heading', { level: 2, name: notificationMock.title }),
    ).toEqual(null),
  );
});
