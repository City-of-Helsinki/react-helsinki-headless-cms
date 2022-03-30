import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

import ConfigProvider from "../../configProvider/ConfigProvider";
import defaultConfig from "../../configProvider/defaultConfig";

function AllTheProviders({ children }) {
  return <ConfigProvider config={defaultConfig}>{children}</ConfigProvider>;
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
export { default as userEvent } from "@testing-library/user-event";
