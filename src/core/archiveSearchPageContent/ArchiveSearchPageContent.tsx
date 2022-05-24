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
import Card from "../card/Card";
import Grid from "../../common/components/grid/Grid";
import LargeCard from "../card/LargeCard";
import useConfig from "../configProvider/useConfig";
import { Articles, Pages } from "../../common/headlessService/types";
import HtmlToReact from "../../common/components/htmlToReact/HtmlToReact";
import { formatDateTimeFromString } from "../../common/utils/dates";
import { Config } from "../configProvider/configContext";

export function SearchForm({
  archiveSearch,
  handleSearch,
  handleChange,
  searchText,
}: {
  archiveSearch: Config["archiveSearch"];
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
  items?: Articles | Pages;
  isLoading?: boolean;
  hasMore?: boolean;
  cardsClampText?: boolean;
  cardsWithBorder?: boolean;
  cardsWithShadow?: boolean;
  cardsHasLink?: boolean;
  cardsTarget?: "_self" | "_blank";
  noResults?: boolean;
  className?: string;
  tags?: string[];
  onSearch?: (freeSearch: string, tags: string[]) => void;
  onLoadMore?: () => void;
  LargeCardComponent?: typeof LargeCard;
  CardComponent?: typeof Card;
}

export function ArchiveCollection({
  items,
  cardsClampText,
  cardsWithBorder,
  cardsWithShadow,
  cardsHasLink,
  cardsTarget,
  LargeCardComponent = LargeCard,
  CardComponent = Card,
}: Partial<SearchPageContentProps>) {
  if (!items || !items.edges?.length) {
    return null;
  }
  const firstItem = items.edges[0].node;
  return (
    <>
      <LargeCardComponent
        id={firstItem.id}
        ariaLabel={firstItem.title || ""}
        title={firstItem.title || ""}
        subTitle={formatDateTimeFromString(firstItem.date || "")}
        customContent={<HtmlToReact>{firstItem.lead || ""}</HtmlToReact>}
        url={firstItem.slug || ""}
        imageUrl={firstItem.featuredImage?.node.mediaItemUrl || ""}
        clampText={cardsClampText}
        hasLink={cardsHasLink}
        target={cardsTarget}
      />
      <Grid>
        {items.edges.slice(1).map((edge) => {
          const item = edge.node;
          return (
            <CardComponent
              id={item.id}
              ariaLabel={item.title || ""}
              title={item.title || ""}
              subTitle={formatDateTimeFromString(item.date || "")}
              customContent={<HtmlToReact>{item.lead || ""}</HtmlToReact>}
              url={item.slug || ""}
              imageUrl={item.featuredImage?.node.mediaItemUrl || ""}
              clampText={cardsClampText}
              withBorder={cardsWithBorder}
              withShadow={cardsWithShadow}
              hasLink={cardsHasLink}
              target={cardsTarget}
            />
          );
        })}
      </Grid>
    </>
  );
}

export default function SearchPageContent(props: SearchPageContentProps) {
  const {
    className,
    hasMore,
    isLoading,
    noResults,
    tags,
    onSearch,
    onLoadMore,
  } = props;
  const { archiveSearch } = useConfig();

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
