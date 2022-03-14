import React from "react";

import { render, screen } from "../../common/utils/testingLibrary";
import HelloWorld from "../HelloWorld";

test("renders hello world", () => {
  render(<HelloWorld />);

  expect(
    screen.getByRole("heading", { name: "Hello world!" })
  ).toBeInTheDocument();
});
