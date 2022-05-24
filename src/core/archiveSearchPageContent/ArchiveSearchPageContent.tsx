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
}

export default function SearchPageContent({
  className,
  items,
  hasMore,
  cardsClampText,
  cardsWithBorder,
  cardsWithShadow,
  cardsHasLink,
  cardsTarget,
  isLoading,
  noResults,
  tags,
  onSearch,
  onLoadMore,
}: SearchPageContentProps) {
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
              <form
                role="search"
                className={styles.searchForm}
                onSubmit={handleSearch}
              >
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
            </div>
            {tags && (
              <div>
                {tags.map((tag) => (
                  <Tag variant="search" onClick={handleTagClick}>
                    {tag}
                  </Tag>
                ))}
              </div>
            )}
          </div>
          <Koros className={styles.koros} flipHorizontal />
        </div>

        <div className={styles.searchResultsContainer}>
          <div className={styles.searchResultsContainerInner}>
            {noResults ? (
              <h1>{archiveSearch.noResultsText || ""}</h1>
            ) : (
              <>
                {items && (
                  <>
                    <LargeCard
                      id={items.edges[0].node?.id}
                      ariaLabel={items.edges[0].node?.title || ""}
                      title={items.edges[0].node?.title || ""}
                      subTitle={formatDateTimeFromString(
                        items.edges[0].node?.date || ""
                      )}
                      customContent={
                        <HtmlToReact>
                          {items.edges[0].node?.lead || ""}
                        </HtmlToReact>
                      }
                      url={items.edges[0].node?.slug || ""}
                      imageUrl={
                        items.edges[0].node?.featuredImage?.node.mediaItemUrl ||
                        ""
                      }
                      clampText={cardsClampText}
                      hasLink={cardsHasLink}
                      target={cardsTarget}
                    />
                    <Grid>
                      {items?.edges.map((article, i) => {
                        if (i > 0) {
                          return (
                            <Card
                              id={article.node?.id}
                              ariaLabel={article.node?.title || ""}
                              title={article.node?.title || ""}
                              subTitle={formatDateTimeFromString(
                                article.node?.date || ""
                              )}
                              customContent={
                                <HtmlToReact>
                                  {article.node?.lead || ""}
                                </HtmlToReact>
                              }
                              url={article.node?.slug || ""}
                              imageUrl={
                                article.node?.featuredImage?.node
                                  .mediaItemUrl || ""
                              }
                              clampText={cardsClampText}
                              withBorder={cardsWithBorder}
                              withShadow={cardsWithShadow}
                              hasLink={cardsHasLink}
                              target={cardsTarget}
                            />
                          );
                        }
                        return null;
                      })}
                    </Grid>
                  </>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
