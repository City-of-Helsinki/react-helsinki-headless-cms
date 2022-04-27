import { useContext } from "react";

import configContext from "./configContext";

export default function useConfig() {
  return useContext(configContext);
}
