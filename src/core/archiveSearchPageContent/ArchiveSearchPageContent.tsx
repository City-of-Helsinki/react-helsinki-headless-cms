import React, { useState } from 'react';
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
import { Config } from '../configProvider/configContext';
import { CollectionItemType } from '../collection/types';
import { PageSection } from '../pageSection/PageSection';
import { SearchTag } from '../../common/headlessService/types';
import BasicMeta from '../archiveSearchPage/ArchivePageMeta';

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
  title?: string;
  description?: string;
  customContent?: string | JSX.Element;
  items?: CollectionItemType[];
  isLoading?: boolean;
  hasMore?: boolean;
  noResults?: boolean;
  className?: string;
  tags?: SearchTag[];
  largeFirstItem?: boolean;
  onSearch?: (freeSearch: string, tags: SearchTag[]) => void;
  onLoadMore?: () => void;
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
    customContent,
    className,
    hasMore,
    isLoading,
    noResults,
    tags,
    onSearch,
    onLoadMore,
    title,
    description,
  } = props;
  const {
    copy: { archiveSearch },
    mainContentId,
  } = useConfig();

  const [searchText, setSearchText] = useState<string>('');
  const [searchTags, setSearchTags] = useState<SearchTag[]>([]);

  const handleSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    onSearch(searchText, searchTags);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleTagClick = (tag: SearchTag) => (): void => {
    let currentTags = [...searchTags];
    if (currentTags.includes(tag)) {
      currentTags = currentTags.filter((selectedTag) => selectedTag !== tag);
    } else {
      currentTags = [...currentTags, tag];
    }

    setSearchTags([...currentTags]);
    onSearch(searchText, currentTags);
  };

  const clearTags = (): void => {
    setSearchTags([]);
    setSearchText('');
    onSearch('', []);
  };

  return (
    <main
      id={mainContentId || 'main-content'}
      className={classNames(styles.contentLayout, className)}
    >
      <BasicMeta title={title} description={description} />
      <div className={styles.mainLayout}>
        <PageSection
          korosBottom
          className={styles.searchFormContainer}
          korosBottomClassName={styles.koros}
        >
          <div className={styles.searchFormContainerInner}>
            <h1>{archiveSearch.title || ''}</h1>
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
                hasClearSearch={Boolean(searchText) && tags.length > 0}
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
                  {hasMore && (
                    <div className={styles.loadMoreButton}>
                      <Button
                        theme="coat"
                        variant="secondary"
                        type="button"
                        className={styles.hdsButtonOverrides}
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
