import React from "react";

import { render, screen, within } from "../../common/utils/testingLibrary";
import pageMock, { linkList } from "../__mocks__/page.mock";
import Page from "../PageContent";

test("renders page with expected content", () => {
  render(<Page page={pageMock} />);

  // Title of page is presented correctly
  expect(
    screen.getByRole("heading", { name: pageMock.translation.title, level: 1 })
  ).toBeInTheDocument();
  // Featured image is included on the page
  expect(
    screen.getByRole("img", {
      name: pageMock.translation.featuredImage.node.altText,
    })
  ).toBeInTheDocument();
  // Check content
  expect(screen.getByRole("article")).toMatchSnapshot();

  // Sidebar contains expected links
  expect(
    screen.getByRole("heading", { name: linkList.title, level: 2 })
  ).toBeInTheDocument();
  expect(screen.getByText(linkList.description)).toBeInTheDocument();
  expect(document.getElementById(linkList.anchor)).toBeInTheDocument();
  linkList.links.forEach((link) => {
    const linkElement = screen.getByRole("link", {
      name: new RegExp(link.title),
      // exact: false,
    });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", link.url);

    if (link.target === "_blank") {
      expect(linkElement).toHaveAttribute("target", "_blank");
      expect(linkElement).toHaveAttribute("rel", "noreferrer");
      within(linkElement).getByText("opens in a new window");
    }
  });
});
