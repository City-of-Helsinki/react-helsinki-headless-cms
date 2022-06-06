import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from "classnames";
import {
  Button,
  IconSearch,
  Koros,
  LoadingSpinner,
  TextInput,
} from "hds-react";

import styles from "./archiveSearchPageContent.module.scss";
import Tag from "../../common/components/tag/Tag";
import { Card } from "../card/Card";
import Grid from "../../common/components/grid/Grid";
import { LargeCard } from "../card/LargeCard";
import useConfig from "../configProvider/useConfig";
import { Config } from "../configProvider/configContext";
import { CollectionItemType } from "../collection/types";

export function SearchForm({
  archiveSearch,
  handleSearch,
  handleChange,
  searchText,
}: {
  archiveSearch: Config["copy"]["archiveSearch"];
  handleSearch: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
}) {
  return (
    <form role="search" className={styles.searchForm} onSubmit={handleSearch}>
      <TextInput
        className={classNames(
          styles.inputWithIcon,
          styles.hdsTextInputOverrides
        )}
        name="q"
        id="q"
        placeholder={archiveSearch?.searchTextPlaceholder || ""}
        onChange={handleChange}
        value={searchText}
      >
        <IconSearch aria-hidden="true" />
      </TextInput>
      <Button
        theme="coat"
        type="submit"
        iconLeft={<IconSearch aria-hidden="true" />}
        className={styles.hdsButtonOverrides}
      >
        {archiveSearch?.searchButtonLabelText || ""}
      </Button>
    </form>
  );
}

export function SearchTags({
  tags,
  handleTagClick,
}: {
  tags: string[];
  handleTagClick: (tag: string) => void;
}) {
  return (
    <div>
      {tags.map((tag) => (
        <Tag key={`tag-${tag}`} variant="search" onClick={handleTagClick}>
          {tag}
        </Tag>
      ))}
    </div>
  );
}

export interface SearchPageContentProps {
  customContent?: string | JSX.Element;
  items?: CollectionItemType[];
  isLoading?: boolean;
  hasMore?: boolean;
  noResults?: boolean;
  className?: string;
  tags?: string[];
  largeFirstItem?: boolean;
  onSearch?: (freeSearch: string, tags: string[]) => void;
  onLoadMore?: () => void;
  createLargeCard?: (
    item: CollectionItemType
  ) => React.ReactElement<typeof LargeCard>;
  createCard?: (item: CollectionItemType) => React.ReactElement<typeof Card>;
}

export const defaultLargeCard = (item: CollectionItemType) => (
  <LargeCard {...item} />
);
export const defaultCreateCard = (item: CollectionItemType) => (
  <Card {...item} />
);

export function ArchiveCollection({
  items,
  createLargeCard = defaultLargeCard,
  createCard = defaultCreateCard,
  largeFirstItem = true,
}: Partial<SearchPageContentProps>) {
  if (!items?.length) {
    return null;
  }

  const firstItem = items[0];
  const gridItems = largeFirstItem ? items.slice(1) : items;

  return (
    <>
      {largeFirstItem && createLargeCard(firstItem)}
      <Grid>{gridItems.map((item) => createCard(item))}</Grid>
    </>
  );
}

export function SearchPageContent(props: SearchPageContentProps) {
  const {
    customContent,
    className,
    hasMore,
    isLoading,
    noResults,
    tags,
    onSearch,
    onLoadMore,
  } = props;
  const {
    copy: { archiveSearch },
  } = useConfig();

  const [searchText, setSearchText] = useState<string>("");
  const [searchTags, setSearchTags] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    onSearch(searchText, searchTags);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleTagClick = (tag: string): void => {
    let currentTags = [...searchTags];
    if (currentTags.includes(tag)) {
      currentTags = currentTags.filter((selectedTag) => selectedTag !== tag);
    } else {
      currentTags = [...currentTags, tag];
    }

    setSearchTags([...currentTags]);
    onSearch(searchText, currentTags);
  };

  return (
    <div className={classNames(styles.contentLayout, className)}>
      <div className={styles.mainLayout}>
        <div className={styles.searchFormContainer}>
          <div className={styles.searchFormContainerInner}>
            <div>
              <SearchForm
                archiveSearch={archiveSearch}
                handleSearch={handleSearch}
                handleChange={handleChange}
                searchText={searchText}
              />
            </div>
            {tags && <SearchTags tags={tags} handleTagClick={handleTagClick} />}
          </div>
          <Koros className={styles.koros} flipHorizontal />
        </div>

        <div className={styles.customContentContainer}>
          <div className={styles.customContentContainerInner}>
            {customContent}
          </div>
        </div>

        <div className={styles.searchResultsContainer}>
          <div className={styles.searchResultsContainerInner}>
            {noResults ? (
              <h1>{archiveSearch.noResultsText || ""}</h1>
            ) : (
              <ArchiveCollection {...props} />
            )}
            <div className={styles.bottomActions}>
              {isLoading && (
                <div className={styles.loadingSpinner}>
                  <LoadingSpinner />
                </div>
              )}
              {hasMore && (
                <div className={styles.loadMoreButton}>
                  <Button
                    theme="coat"
                    variant="secondary"
                    type="button"
                    className={styles.hdsButtonOverrides}
                    onClick={onLoadMore}
                  >
                    {archiveSearch?.loadMoreButtonLabelText || ""}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
