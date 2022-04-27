import React from "react";

import defaultConfig from "./defaultConfig";
import configContext, { Config } from "./configContext";

type Props = {
  config: Config;
  children: React.ReactNode;
};

export default function ConfigProvider({
  config: userConfig,
  children,
}: Props) {
  const config = React.useMemo(
    () => ({
      ...defaultConfig,
      ...userConfig,
    }),
    [userConfig]
  );

  return (
    <configContext.Provider value={config}>{children}</configContext.Provider>
  );
}
