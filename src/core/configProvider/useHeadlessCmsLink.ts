import { ModuleItemTypeEnum } from "../../common/headlessService/constants";
import { getUri } from "../../common/headlessService/utils";
import useConfig from "./useConfig";

export default function useHeadlessCmsLink(
  link: string,
  type: ModuleItemTypeEnum = ModuleItemTypeEnum.Link
) {
  const {
    internalHrefOrigins,
    utils: { getIsHrefExternal, getRoutedInternalHref },
  } = useConfig();

  const uri = getUri(link, internalHrefOrigins, getIsHrefExternal);
  return getRoutedInternalHref(uri, type);
}
