import { handleInternalHrefs } from "../../common/headlessService/utils";
import useConfig from "./useConfig";

export default function useHeadlessCmsLink(link: string) {
  const {
    internalHrefOrigins,
    utils: { getIsHrefExternal },
  } = useConfig();

  return handleInternalHrefs(link, internalHrefOrigins, getIsHrefExternal);
}
