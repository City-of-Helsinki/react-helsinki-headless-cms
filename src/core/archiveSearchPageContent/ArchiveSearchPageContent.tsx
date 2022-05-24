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
import { Articles } from "../../common/headlessService/types";
import HtmlToReact from "../../common/components/htmlToReact/HtmlToReact";
import { formatDateTimeFromString } from "../../common/utils/dates";

export interface SearchPageContentProps {
  articles?: Articles;
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
  articles,
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
  const { articlesSearch } = useConfig();

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
                  placeholder={articlesSearch?.searchTextPlaceholder || ""}
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
                  {articlesSearch?.searchButtonLabelText || ""}
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
              <h1>{articlesSearch.noResultsText || ""}</h1>
            ) : (
              <>
                {articles && (
                  <>
                    <LargeCard
                      id={articles.edges[0].node?.id}
                      ariaLabel={articles.edges[0].node?.title || ""}
                      title={articles.edges[0].node?.title || ""}
                      subTitle={formatDateTimeFromString(
                        articles.edges[0].node?.date || ""
                      )}
                      customContent={
                        <HtmlToReact>
                          {articles.edges[0].node?.lead || ""}
                        </HtmlToReact>
                      }
                      url={articles.edges[0].node?.slug || ""}
                      imageUrl={
                        articles.edges[0].node?.featuredImage?.node
                          .mediaItemUrl || ""
                      }
                      clampText={cardsClampText}
                      hasLink={cardsHasLink}
                      target={cardsTarget}
                    />
                    <Grid>
                      {articles?.edges.map((article, i) => {
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
                        {articlesSearch?.loadMoreButtonLabelText || ""}
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
