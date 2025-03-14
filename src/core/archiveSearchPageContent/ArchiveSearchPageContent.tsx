import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import {
  Button,
  IconCrossCircleFill,
  IconSearch,
  LoadingSpinner,
  TextInput,
} from 'hds-react';

import styles from './archiveSearchPageContent.module.scss';
import { Tag } from '../../common/components/tag/Tag';
import { Card } from '../card/Card';
import Grid from '../../common/components/grid/Grid';
import { LargeCard } from '../card/LargeCard';
import { useConfig } from '../configProvider/useConfig';
import type { Config } from '../configProvider/configContext';
import type { CollectionItemType } from '../collection/types';
import { PageSection } from '../pageSection/PageSection';
import type {
  ArticleType,
  PageType,
  SearchTag,
} from '../../common/headlessService/types';
import { PageMeta } from '../pageContent/meta/PageMeta';
import { MAIN_CONTENT_ID } from '../../common/constants';
import type { BreadcrumbUnionType } from '../pageContent/types';
import { PageContentBreadcrumb } from '../pageContent/PageContentBreadcrumb';

export function SearchForm({
  archiveSearch,
  handleSearch,
  handleChange,
  searchText,
}: {
  archiveSearch: Config['copy']['archiveSearch'];
  handleSearch: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
}) {
  return (
    <form role="search" className={styles.searchForm} onSubmit={handleSearch}>
      <TextInput
        className={classNames(
          styles.inputWithIcon,
          styles.hdsTextInputOverrides,
        )}
        name="q"
        id="q"
        placeholder={archiveSearch?.searchTextPlaceholder || ''}
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
        {archiveSearch?.searchButtonLabelText || ''}
      </Button>
    </form>
  );
}

export function SearchTags({
  tags,
  currentTags,
  hasClearSearch,
  handleTagClick,
  handleClearSearch,
  clearAllText,
}: {
  tags: SearchTag[];
  currentTags: SearchTag[];
  hasClearSearch: boolean;
  handleTagClick: (tag: SearchTag) => () => void;
  handleClearSearch: () => void;
  clearAllText: string;
}) {
  return (
    <div>
      <div className={styles.tagsContainer}>
        <div>
          {tags.map((tag) => (
            <Tag
              whiteOnly
              key={`tag-${tag.slug}`}
              selected={currentTags.includes(tag)}
              onClick={handleTagClick(tag)}
            >
              {tag.name}
            </Tag>
          ))}
        </div>
        <div>
          {hasClearSearch && (
            <button
              className={styles.clearButton}
              onClick={handleClearSearch}
              type="button"
            >
              {clearAllText}
              <IconCrossCircleFill aria-hidden />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export interface SearchPageContentProps {
  /**
   * Page object from wordpress headless cms.
   */
  page?: PageType | ArticleType;
  /**
   * Breadcrumbs object from wordpress headless cms.
   */
  breadcrumbs?:
    | BreadcrumbUnionType
    | ((page?: PageType | ArticleType) => BreadcrumbUnionType);
  /**
   * Custom content react components to be dispayed on the page.
   */
  customContent?: string | JSX.Element;
  /**
   * Archive collection items..
   */
  items?: CollectionItemType[];
  /**
   *  Boolean indicating whether the page is loading.
   */
  isLoading?: boolean;
  /**
   *  Boolean indicating whether the collection has more items.
   */
  hasMore?: boolean;
  /**
   *  Boolean indicating whether no results found for the collection items.
   */
  noResults?: boolean;
  /**
   * Additional classname for the SearchPageContent.
   */
  className?: string;
  /**
   * All tags collection for the page content.
   */
  tags?: SearchTag[];
  /**
   * Applied search  tags collection for the page content.
   */
  currentTags?: SearchTag[];
  /**
   *  Boolean indicating whether the tag should update on change.
   */
  withQuery?: boolean;
  /**
   * If true then current search text is updated on change.
   */
  currentText?: string;
  /**
   *  Boolean indicating whether the first search item should be rendered as a large card.
   */
  largeFirstItem?: boolean;
  /**
   * Search button click handler.
   */
  onSearch?: (freeSearch: string, tags: SearchTag[]) => void;
  /**
   * Load more button click handler.
   */
  onLoadMore?: () => void;
  /**
   * Custom renderer for the large card.
   */
  createLargeCard?: (
    item: CollectionItemType,
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
      <div className={styles.largeCardContainer}>
        {largeFirstItem && createLargeCard(firstItem)}
      </div>
      <Grid className={styles.grid}>
        {gridItems.map((item) => createCard(item))}
      </Grid>
    </>
  );
}

export function SearchPageContent(props: SearchPageContentProps) {
  const {
    breadcrumbs,
    customContent,
    className,
    hasMore,
    isLoading,
    noResults,
    tags,
    currentTags,
    currentText,
    withQuery,
    onSearch,
    onLoadMore,
    page,
  } = props;
  const {
    components: { Head },
    copy: { archiveSearch },
    customCopy,
    mainContentId,
  } = useConfig();

  const [searchText, setSearchText] = useState<string>('');
  const [searchTags, setSearchTags] = useState<SearchTag[]>([]);

  useEffect(() => {
    if (withQuery) {
      if (currentTags?.length > 0) {
        setSearchTags(currentTags);
      }
      setSearchText(currentText);
    }
  }, [currentTags, currentText, withQuery]);

  const handleSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    onSearch(searchText, searchTags);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleTagClick = (tag: SearchTag) => (): void => {
    if (!isLoading) {
      let selectedTags = [...searchTags];
      if (selectedTags.includes(tag)) {
        selectedTags = selectedTags.filter(
          (selectedTag) => selectedTag !== tag,
        );
      } else {
        selectedTags = [...selectedTags, tag];
      }

      setSearchTags([...selectedTags]);
      onSearch(searchText, selectedTags);
    }
  };

  const clearTags = (): void => {
    setSearchTags([]);
    setSearchText('');
    onSearch('', []);
  };

  return (
    <main
      id={mainContentId ?? MAIN_CONTENT_ID}
      className={classNames(styles.contentLayout, className)}
    >
      {Head && <PageMeta headComponent={Head} page={page} />}
      <div className={styles.mainLayout}>
        {breadcrumbs && (
          <div className={styles.breadcrumbs}>
            {typeof breadcrumbs === 'function' ? (
              <PageContentBreadcrumb breadcrumbs={breadcrumbs(page)} />
            ) : (
              <PageContentBreadcrumb breadcrumbs={breadcrumbs} />
            )}
          </div>
        )}
        <PageSection
          korosBottom
          className={styles.searchFormContainer}
          korosBottomClassName={styles.koros}
        >
          <div className={styles.searchFormContainerInner}>
            <h1>{page?.title || archiveSearch.title || ''}</h1>
            <div>
              <SearchForm
                archiveSearch={archiveSearch}
                handleSearch={handleSearch}
                handleChange={handleChange}
                searchText={searchText}
              />
            </div>
            {tags && (
              <SearchTags
                tags={tags}
                hasClearSearch={Boolean(searchText) || currentTags?.length > 0}
                clearAllText={archiveSearch?.clearAll}
                currentTags={searchTags}
                handleTagClick={handleTagClick}
                handleClearSearch={clearTags}
              />
            )}
          </div>
        </PageSection>

        {customContent && (
          <PageSection className={styles.customContentContainer}>
            <div className={styles.customContentContainerInner}>
              {customContent}
            </div>
          </PageSection>
        )}

        <PageSection className={styles.searchResultsContainer}>
          <div>
            <div className={styles.searchResultsContainerInner}>
              <div>
                {noResults ? (
                  <div className={styles.noResultsContainer}>
                    <IconSearch />
                    <h1>{archiveSearch.noResultsTitle || ''}</h1>
                    <p>{archiveSearch.noResultsText || ''}</p>
                  </div>
                ) : (
                  <ArchiveCollection {...props} />
                )}
                <div className={styles.bottomActions}>
                  {isLoading && (
                    <div className={styles.loadingSpinner}>
                      <LoadingSpinner multicolor />
                    </div>
                  )}
                  {!isLoading && hasMore && (
                    <div className={styles.loadMoreButton}>
                      <Button
                        variant={
                          customCopy?.loadMoreButtonVariant || 'secondary'
                        }
                        theme={customCopy?.loadMoreButtonTheme || 'black'}
                        type="button"
                        onClick={onLoadMore}
                      >
                        {archiveSearch?.loadMoreButtonLabelText || ''}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </PageSection>
      </div>
    </main>
  );
}
