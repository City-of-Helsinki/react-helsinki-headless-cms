import React from "react";
import { Navigation as HDSNavigation } from "hds-react";

import {
  Menu,
  Language,
  LanguageCodeEnum,
} from "../common/headlessService/types";
import useConfig from "../configProvider/useConfig";
import { MAIN_CONTENT_ID } from "../constants";

type Props = {
  menu: Menu;
  languages: Language[];
  currentLanguageCode: LanguageCodeEnum;
  className?: string;
  onTitleClick: () => void;
  getUrlForLanguage: (
    language: Language,
    currentLanguage: Language,
    allLanguages: Language[]
  ) => URL;
};

export default function Navigation({
  menu,
  languages,
  currentLanguageCode,
  className,
  onTitleClick,
  getUrlForLanguage,
}: Props) {
  const {
    siteName,
    copy: { menuToggleAriaLabel, skipToContentLabel },
    components: { A },
  } = useConfig();

  const currentLanguage = languages.find(
    (language) => language.code === currentLanguageCode
  );

  // Error out if language props are inconsistent
  if (!currentLanguage) {
    throw Error(
      "Could not find a language from languages with currentLanguageCode"
    );
  }

  return (
    <HDSNavigation
      title={siteName}
      menuToggleAriaLabel={menuToggleAriaLabel}
      skipTo={`#${MAIN_CONTENT_ID}`}
      skipToContentLabel={skipToContentLabel}
      onTitleClick={onTitleClick}
      logoLanguage={currentLanguageCode === LanguageCodeEnum.Sv ? "sv" : "fi"}
      className={className}
    >
      <HDSNavigation.Row variant="inline">
        {menu?.menuItems?.nodes?.map((navigationItem) => (
          <HDSNavigation.Item
            key={navigationItem.id}
            as={A}
            label={navigationItem.label}
            title={navigationItem.title}
            href={navigationItem.url}
          />
        ))}
      </HDSNavigation.Row>
      <HDSNavigation.Actions>
        <HDSNavigation.LanguageSelector label={currentLanguage.name}>
          {languages.map((language) => (
            <HDSNavigation.Item
              key={language.id}
              as={A}
              label={language.name}
              lang={language.slug}
              href={
                getUrlForLanguage(language, currentLanguage, languages).pathname
              }
            />
          ))}
        </HDSNavigation.LanguageSelector>
      </HDSNavigation.Actions>
    </HDSNavigation>
  );
}
