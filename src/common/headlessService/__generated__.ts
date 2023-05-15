import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
  __typename?: 'Avatar';
  /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  default?: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  height?: Maybe<Scalars['Int']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  rating?: Maybe<Scalars['String']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<Scalars['String']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<Scalars['Int']>;
  /** URL for the gravatar image source. */
  url?: Maybe<Scalars['String']>;
  /** Width of the avatar image. */
  width?: Maybe<Scalars['Int']>;
};

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
  /** Indicates a G level avatar rating level. */
  G = 'G',
  /** Indicates a PG level avatar rating level. */
  Pg = 'PG',
  /** Indicates an R level avatar rating level. */
  R = 'R',
  /** Indicates an X level avatar rating level. */
  X = 'X',
}

/** Card field */
export type Card = {
  __typename?: 'Card';
  /** Background Color */
  backgroundColor?: Maybe<Scalars['String']>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Icon */
  icon?: Maybe<Scalars['String']>;
  /** Link */
  link?: Maybe<Link>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

/** The category type */
export type Category = DatabaseIdentifier &
  HierarchicalNode &
  HierarchicalTermNode &
  MenuItemLinkable &
  Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'Category';
    /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: Maybe<CategoryToAncestorsCategoryConnection>;
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of databaseId
     */
    categoryId?: Maybe<Scalars['Int']>;
    /** Connection between the category type and its children categories. */
    children?: Maybe<CategoryToCategoryConnection>;
    /** Connection between the Category type and the ContentNode type */
    contentNodes?: Maybe<CategoryToContentNodeConnection>;
    /** The number of objects connected to the object */
    count?: Maybe<Scalars['Int']>;
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int'];
    /** The description of the object */
    description?: Maybe<Scalars['String']>;
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
    /** The unique resource identifier path */
    id: Scalars['ID'];
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean'];
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean'];
    /** List available translations for this post */
    language?: Maybe<Language>;
    /** The link to the term */
    link?: Maybe<Scalars['String']>;
    /** The human friendly name of the object. */
    name?: Maybe<Scalars['String']>;
    /** Connection between the category type and its parent category. */
    parent?: Maybe<CategoryToParentCategoryConnectionEdge>;
    /** Database id of the parent node */
    parentDatabaseId?: Maybe<Scalars['Int']>;
    /** The globally unique identifier of the parent node. */
    parentId?: Maybe<Scalars['ID']>;
    /** Connection between the Category type and the post type */
    posts?: Maybe<CategoryToPostConnection>;
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars['String']>;
    /** Connection between the Category type and the Taxonomy type */
    taxonomy?: Maybe<CategoryToTaxonomyConnectionEdge>;
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: Maybe<Scalars['String']>;
    /** The ID of the term group that this term object belongs to */
    termGroupId?: Maybe<Scalars['Int']>;
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: Maybe<Scalars['Int']>;
    /** Get specific translation version of this object */
    translation?: Maybe<Category>;
    /** List all translated versions of this term */
    translations?: Maybe<Array<Maybe<Category>>>;
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']>;
  };

/** The category type */
export type CategoryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The category type */
export type CategoryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryToCategoryConnectionWhereArgs>;
};

/** The category type */
export type CategoryContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryToContentNodeConnectionWhereArgs>;
};

/** The category type */
export type CategoryEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The category type */
export type CategoryEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The category type */
export type CategoryPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryToPostConnectionWhereArgs>;
};

/** The category type */
export type CategoryTranslationArgs = {
  language: LanguageCodeEnum;
};

/** Connection to category Nodes */
export type CategoryConnection = {
  /** A list of edges (relational context) between RootQuery and connected category Nodes */
  edges: Array<CategoryConnectionEdge>;
  /** A list of connected category Nodes */
  nodes: Array<Category>;
};

/** Edge between a Node and a connected category */
export type CategoryConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected category Node */
  node: Category;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Connection between the Category type and the category type */
export type CategoryToAncestorsCategoryConnection = CategoryConnection &
  Connection & {
    __typename?: 'CategoryToAncestorsCategoryConnection';
    /** Edges for the CategoryToAncestorsCategoryConnection connection */
    edges: Array<CategoryToAncestorsCategoryConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Category>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type CategoryToAncestorsCategoryConnectionEdge = CategoryConnectionEdge &
  Edge & {
    __typename?: 'CategoryToAncestorsCategoryConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Category;
  };

/** Connection between the Category type and the category type */
export type CategoryToCategoryConnection = CategoryConnection &
  Connection & {
    __typename?: 'CategoryToCategoryConnection';
    /** Edges for the CategoryToCategoryConnection connection */
    edges: Array<CategoryToCategoryConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Category>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = CategoryConnectionEdge &
  Edge & {
    __typename?: 'CategoryToCategoryConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Category;
  };

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Category type and the ContentNode type */
export type CategoryToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'CategoryToContentNodeConnection';
    /** Edges for the CategoryToContentNodeConnection connection */
    edges: Array<CategoryToContentNodeConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type CategoryToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'CategoryToContentNodeConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: ContentNode;
  };

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type CategoryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfCategoryEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Category type and the category type */
export type CategoryToParentCategoryConnectionEdge = CategoryConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'CategoryToParentCategoryConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: Category;
  };

/** Connection between the Category type and the post type */
export type CategoryToPostConnection = Connection &
  PostConnection & {
    __typename?: 'CategoryToPostConnection';
    /** Edges for the CategoryToPostConnection connection */
    edges: Array<CategoryToPostConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type CategoryToPostConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'CategoryToPostConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Post;
  };

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Category type and the Taxonomy type */
export type CategoryToTaxonomyConnectionEdge = Edge &
  OneToOneConnection &
  TaxonomyConnectionEdge & {
    __typename?: 'CategoryToTaxonomyConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: Taxonomy;
  };

/** The collection type */
export type Collection = ContentNode &
  DatabaseIdentifier &
  Node &
  NodeWithRevisions &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable & {
    __typename?: 'Collection';
    /** Background Color */
    backgroundColor?: Maybe<Scalars['String']>;
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    collectionId: Scalars['Int'];
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String'];
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int'];
    /** Post publishing date. */
    date?: Maybe<Scalars['String']>;
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']>;
    /** Description */
    description?: Maybe<Scalars['String']>;
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']>;
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']>;
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
    /** Vanhentumisaika */
    expirationTime?: Maybe<Scalars['String']>;
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']>;
    /** The globally unique identifier of the collection-cpt object. */
    id: Scalars['ID'];
    /** Image */
    image?: Maybe<Scalars['String']>;
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean'];
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']>;
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** True if the node is a revision of another node */
    isRevision?: Maybe<Scalars['Boolean']>;
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean'];
    /** Polylang language */
    language?: Maybe<Language>;
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
    /** The permalink of the post */
    link?: Maybe<Scalars['String']>;
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']>;
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']>;
    /** List of modules */
    modules?: Maybe<Array<Maybe<CollectionModulesUnionType>>>;
    /** Connection between the Collection type and the collection type */
    preview?: Maybe<CollectionToPreviewConnectionEdge>;
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']>;
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
    /** Connection between the Collection type and the collection type */
    revisions?: Maybe<CollectionToRevisionConnection>;
    /** The SEO Framework data of the collection */
    seo?: Maybe<Seo>;
    /** Show on front page */
    showOnFrontPage?: Maybe<Scalars['Boolean']>;
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']>;
    /** The current status of the object */
    status?: Maybe<Scalars['String']>;
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>;
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']>;
    /** Get specific translation version of this object */
    translation?: Maybe<Collection>;
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<Collection>>>;
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']>;
  };

/** The collection type */
export type CollectionEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The collection type */
export type CollectionEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The collection type */
export type CollectionRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollectionToRevisionConnectionWhereArgs>;
};

/** The collection type */
export type CollectionTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The collection type */
export type CollectionTranslationArgs = {
  language: LanguageCodeEnum;
};

/** Connection to collection Nodes */
export type CollectionConnection = {
  /** A list of edges (relational context) between RootQuery and connected collection Nodes */
  edges: Array<CollectionConnectionEdge>;
  /** A list of connected collection Nodes */
  nodes: Array<Collection>;
};

/** Edge between a Node and a connected collection */
export type CollectionConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected collection Node */
  node: Collection;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CollectionIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

export type CollectionModulesUnionType =
  | EventSearch
  | EventSearchCarousel
  | EventSelected
  | EventSelectedCarousel
  | LocationsSelected
  | LocationsSelectedCarousel;

/** Connection between the Collection type and the collection type */
export type CollectionToPreviewConnectionEdge = CollectionConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'CollectionToPreviewConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: Collection;
  };

/** Connection between the Collection type and the collection type */
export type CollectionToRevisionConnection = CollectionConnection &
  Connection & {
    __typename?: 'CollectionToRevisionConnection';
    /** Edges for the CollectionToRevisionConnection connection */
    edges: Array<CollectionToRevisionConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Collection>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type CollectionToRevisionConnectionEdge = CollectionConnectionEdge &
  Edge & {
    __typename?: 'CollectionToRevisionConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Collection;
  };

/** Arguments for filtering the CollectionToRevisionConnection connection */
export type CollectionToRevisionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** A Comment object */
export type Comment = DatabaseIdentifier &
  Node & {
    __typename?: 'Comment';
    /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
    agent?: Maybe<Scalars['String']>;
    /**
     * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
     * @deprecated Deprecated in favor of the `status` field
     */
    approved?: Maybe<Scalars['Boolean']>;
    /** The author of the comment */
    author?: Maybe<CommentToCommenterConnectionEdge>;
    /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
    authorIp?: Maybe<Scalars['String']>;
    /**
     * ID for the comment, unique among comments.
     * @deprecated Deprecated in favor of databaseId
     */
    commentId?: Maybe<Scalars['Int']>;
    /** Connection between the Comment type and the ContentNode type */
    commentedOn?: Maybe<CommentToContentNodeConnectionEdge>;
    /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
    content?: Maybe<Scalars['String']>;
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int'];
    /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
    date?: Maybe<Scalars['String']>;
    /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
    dateGmt?: Maybe<Scalars['String']>;
    /** The globally unique identifier for the comment object */
    id: Scalars['ID'];
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
    karma?: Maybe<Scalars['Int']>;
    /** Connection between the Comment type and the Comment type */
    parent?: Maybe<CommentToParentCommentConnectionEdge>;
    /** The database id of the parent comment node or null if it is the root comment */
    parentDatabaseId?: Maybe<Scalars['Int']>;
    /** The globally unique identifier of the parent comment node. */
    parentId?: Maybe<Scalars['ID']>;
    /** Connection between the Comment type and the Comment type */
    replies?: Maybe<CommentToCommentConnection>;
    /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
    status?: Maybe<CommentStatusEnum>;
    /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
    type?: Maybe<Scalars['String']>;
  };

/** A Comment object */
export type CommentContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A Comment object */
export type CommentParentArgs = {
  where?: InputMaybe<CommentToParentCommentConnectionWhereArgs>;
};

/** A Comment object */
export type CommentRepliesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentToCommentConnectionWhereArgs>;
};

/** A Comment Author object */
export type CommentAuthor = Commenter &
  DatabaseIdentifier &
  Node & {
    __typename?: 'CommentAuthor';
    /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
    avatar?: Maybe<Avatar>;
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int'];
    /** The email for the comment author */
    email?: Maybe<Scalars['String']>;
    /** The globally unique identifier for the comment author object */
    id: Scalars['ID'];
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** The name for the comment author. */
    name?: Maybe<Scalars['String']>;
    /** The url the comment author. */
    url?: Maybe<Scalars['String']>;
  };

/** A Comment Author object */
export type CommentAuthorAvatarArgs = {
  forceDefault?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<AvatarRatingEnum>;
  size?: InputMaybe<Scalars['Int']>;
};

/** Connection to Comment Nodes */
export type CommentConnection = {
  /** A list of edges (relational context) between RootQuery and connected Comment Nodes */
  edges: Array<CommentConnectionEdge>;
  /** A list of connected Comment Nodes */
  nodes: Array<Comment>;
};

/** Edge between a Node and a connected Comment */
export type CommentConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Comment Node */
  node: Comment;
};

/** The Type of Identifier used to fetch a single comment node. Default is "ID". To be used along with the "id" field. */
export enum CommentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
}

/** The status of the comment object. */
export enum CommentStatusEnum {
  /** Comments with the Hyväksytty status */
  Approve = 'APPROVE',
  /** Comments with the Hylätyt status */
  Hold = 'HOLD',
  /** Comments with the Roskaviesti status */
  Spam = 'SPAM',
  /** Comments with the Roskakorissa status */
  Trash = 'TRASH',
}

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = CommentConnection &
  Connection & {
    __typename?: 'CommentToCommentConnection';
    /** Edges for the CommentToCommentConnection connection */
    edges: Array<CommentToCommentConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Comment>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type CommentToCommentConnectionEdge = CommentConnectionEdge &
  Edge & {
    __typename?: 'CommentToCommentConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Comment;
  };

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Commenter type */
export type CommentToCommenterConnectionEdge = CommenterConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'CommentToCommenterConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: Commenter;
  };

/** Connection between the Comment type and the ContentNode type */
export type CommentToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'CommentToContentNodeConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: ContentNode;
  };

/** Connection between the Comment type and the Comment type */
export type CommentToParentCommentConnectionEdge = CommentConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'CommentToParentCommentConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: Comment;
  };

/** Arguments for filtering the CommentToParentCommentConnection connection */
export type CommentToParentCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** The author of a comment */
export type Commenter = {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<Avatar>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author. */
  id: Scalars['ID'];
  /** Whether the author information is considered restricted. (not fully public) */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The name of the author of a comment. */
  name?: Maybe<Scalars['String']>;
  /** The url of the author of a comment. */
  url?: Maybe<Scalars['String']>;
};

/** Edge between a Node and a connected Commenter */
export type CommenterConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Commenter Node */
  node: Commenter;
};

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
  /** Order by browser user agent of the commenter. */
  CommentAgent = 'COMMENT_AGENT',
  /** Order by approval status of the comment. */
  CommentApproved = 'COMMENT_APPROVED',
  /** Order by name of the comment author. */
  CommentAuthor = 'COMMENT_AUTHOR',
  /** Order by e-mail of the comment author. */
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  /** Order by IP address of the comment author. */
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  /** Order by URL address of the comment author. */
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  /** Order by the comment contents. */
  CommentContent = 'COMMENT_CONTENT',
  /** Order by date/time timestamp of the comment. */
  CommentDate = 'COMMENT_DATE',
  /** Order by GMT timezone date/time timestamp of the comment. */
  CommentDateGmt = 'COMMENT_DATE_GMT',
  /** Order by the globally unique identifier for the comment object */
  CommentId = 'COMMENT_ID',
  /** Order by the array list of comment IDs listed in the where clause. */
  CommentIn = 'COMMENT_IN',
  /** Order by the comment karma score. */
  CommentKarma = 'COMMENT_KARMA',
  /** Order by the comment parent ID. */
  CommentParent = 'COMMENT_PARENT',
  /** Order by the post object ID. */
  CommentPostId = 'COMMENT_POST_ID',
  /** Order by the the type of comment, such as 'comment', 'pingback', or 'trackback'. */
  CommentType = 'COMMENT_TYPE',
  /** Order by the user ID. */
  UserId = 'USER_ID',
}

/** A plural connection from one Node Type in the Graph to another Node Type, with support for relational data via &quot;edges&quot;. */
export type Connection = {
  /** A list of edges (relational context) between connected nodes */
  edges: Array<Edge>;
  /** A list of connected nodes */
  nodes: Array<Node>;
};

/** The contact type */
export type Contact = ContentNode &
  DatabaseIdentifier &
  Node &
  NodeWithFeaturedImage &
  NodeWithRevisions &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable & {
    __typename?: 'Contact';
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    contactId: Scalars['Int'];
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String'];
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int'];
    /** Post publishing date. */
    date?: Maybe<Scalars['String']>;
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']>;
    /** Description */
    description?: Maybe<Scalars['String']>;
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']>;
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']>;
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']>;
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']>;
    /** First name */
    firstName?: Maybe<Scalars['String']>;
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']>;
    /** The globally unique identifier of the contact-cpt object. */
    id: Scalars['ID'];
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean'];
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']>;
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** True if the node is a revision of another node */
    isRevision?: Maybe<Scalars['Boolean']>;
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean'];
    /** Job Title */
    jobTitle?: Maybe<Scalars['String']>;
    /** Polylang language */
    language?: Maybe<Language>;
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
    /** Last name */
    lastName?: Maybe<Scalars['String']>;
    /** The permalink of the post */
    link?: Maybe<Scalars['String']>;
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']>;
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']>;
    /** Connection between the Contact type and the contact type */
    preview?: Maybe<ContactToPreviewConnectionEdge>;
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']>;
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
    /** Connection between the Contact type and the contact type */
    revisions?: Maybe<ContactToRevisionConnection>;
    /** The SEO Framework data of the contact */
    seo?: Maybe<Seo>;
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']>;
    /** The current status of the object */
    status?: Maybe<Scalars['String']>;
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>;
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']>;
    /** Get specific translation version of this object */
    translation?: Maybe<Contact>;
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<Contact>>>;
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']>;
  };

/** The contact type */
export type ContactEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The contact type */
export type ContactEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The contact type */
export type ContactRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactToRevisionConnectionWhereArgs>;
};

/** The contact type */
export type ContactTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The contact type */
export type ContactTranslationArgs = {
  language: LanguageCodeEnum;
};

/** Connection to contact Nodes */
export type ContactConnection = {
  /** A list of edges (relational context) between RootQuery and connected contact Nodes */
  edges: Array<ContactConnectionEdge>;
  /** A list of connected contact Nodes */
  nodes: Array<Contact>;
};

/** Edge between a Node and a connected contact */
export type ContactConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected contact Node */
  node: Contact;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContactIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the Contact type and the contact type */
export type ContactToPreviewConnectionEdge = ContactConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'ContactToPreviewConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: Contact;
  };

/** Connection between the Contact type and the contact type */
export type ContactToRevisionConnection = Connection &
  ContactConnection & {
    __typename?: 'ContactToRevisionConnection';
    /** Edges for the ContactToRevisionConnection connection */
    edges: Array<ContactToRevisionConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Contact>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type ContactToRevisionConnectionEdge = ContactConnectionEdge &
  Edge & {
    __typename?: 'ContactToRevisionConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Contact;
  };

/** Arguments for filtering the ContactToRevisionConnection connection */
export type ContactToRevisionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Nodes used to manage content */
export type ContentNode = {
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Nodes used to manage content */
export type ContentNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Nodes used to manage content */
export type ContentNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Connection to ContentNode Nodes */
export type ContentNodeConnection = {
  /** A list of edges (relational context) between ContentType and connected ContentNode Nodes */
  edges: Array<ContentNodeConnectionEdge>;
  /** A list of connected ContentNode Nodes */
  nodes: Array<ContentNode>;
};

/** Edge between a Node and a connected ContentNode */
export type ContentNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected ContentNode Node */
  node: ContentNode;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the ContentNode type and the ContentType type */
export type ContentNodeToContentTypeConnectionEdge = ContentTypeConnectionEdge &
  Edge &
  OneToOneConnection & {
    __typename?: 'ContentNodeToContentTypeConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: ContentType;
  };

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLastConnectionEdge = Edge &
  OneToOneConnection &
  UserConnectionEdge & {
    __typename?: 'ContentNodeToEditLastConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: User;
  };

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLockConnectionEdge = Edge &
  OneToOneConnection &
  UserConnectionEdge & {
    __typename?: 'ContentNodeToEditLockConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The timestamp for when the node was last edited */
    lockTimestamp?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: User;
  };

/** Connection between the ContentNode type and the EnqueuedScript type */
export type ContentNodeToEnqueuedScriptConnection = Connection &
  EnqueuedScriptConnection & {
    __typename?: 'ContentNodeToEnqueuedScriptConnection';
    /** Edges for the ContentNodeToEnqueuedScriptConnection connection */
    edges: Array<ContentNodeToEnqueuedScriptConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedScript>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type ContentNodeToEnqueuedScriptConnectionEdge = Edge &
  EnqueuedScriptConnectionEdge & {
    __typename?: 'ContentNodeToEnqueuedScriptConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: EnqueuedScript;
  };

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type ContentNodeToEnqueuedStylesheetConnection = Connection &
  EnqueuedStylesheetConnection & {
    __typename?: 'ContentNodeToEnqueuedStylesheetConnection';
    /** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
    edges: Array<ContentNodeToEnqueuedStylesheetConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedStylesheet>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type ContentNodeToEnqueuedStylesheetConnectionEdge = Edge &
  EnqueuedStylesheetConnectionEdge & {
    __typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: EnqueuedStylesheet;
  };

/** The template assigned to a node of content */
export type ContentTemplate = {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** An Post Type object */
export type ContentType = Node &
  UniformResourceIdentifiable & {
    __typename?: 'ContentType';
    /** Whether this content type should can be exported. */
    canExport?: Maybe<Scalars['Boolean']>;
    /** Connection between the ContentType type and the Taxonomy type */
    connectedTaxonomies?: Maybe<ContentTypeToTaxonomyConnection>;
    /** Connection between the ContentType type and the ContentNode type */
    contentNodes?: Maybe<ContentTypeToContentNodeConnection>;
    /** Whether content of this type should be deleted when the author of it is deleted from the system. */
    deleteWithUser?: Maybe<Scalars['Boolean']>;
    /** Description of the content type. */
    description?: Maybe<Scalars['String']>;
    /** Whether to exclude nodes of this content type from front end search results. */
    excludeFromSearch?: Maybe<Scalars['Boolean']>;
    /** The plural name of the content type within the GraphQL Schema. */
    graphqlPluralName?: Maybe<Scalars['String']>;
    /** The singular name of the content type within the GraphQL Schema. */
    graphqlSingleName?: Maybe<Scalars['String']>;
    /** Whether this content type should have archives. Content archives are generated by type and by date. */
    hasArchive?: Maybe<Scalars['Boolean']>;
    /** Whether the content type is hierarchical, for example pages. */
    hierarchical?: Maybe<Scalars['Boolean']>;
    /** The globally unique identifier of the post-type object. */
    id: Scalars['ID'];
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean'];
    /** Whether this page is set to the static front page. */
    isFrontPage: Scalars['Boolean'];
    /** Whether this page is set to the blog posts page. */
    isPostsPage: Scalars['Boolean'];
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean'];
    /** Display name of the content type. */
    label?: Maybe<Scalars['String']>;
    /** Details about the content type labels. */
    labels?: Maybe<PostTypeLabelDetails>;
    /** The name of the icon file to display as a menu icon. */
    menuIcon?: Maybe<Scalars['String']>;
    /** The position of this post type in the menu. Only applies if show_in_menu is true. */
    menuPosition?: Maybe<Scalars['Int']>;
    /** The internal name of the post type. This should not be used for display purposes. */
    name?: Maybe<Scalars['String']>;
    /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
    public?: Maybe<Scalars['Boolean']>;
    /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
    publiclyQueryable?: Maybe<Scalars['Boolean']>;
    /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
    restBase?: Maybe<Scalars['String']>;
    /** The REST Controller class assigned to handling this content type. */
    restControllerClass?: Maybe<Scalars['String']>;
    /** Makes this content type available via the admin bar. */
    showInAdminBar?: Maybe<Scalars['Boolean']>;
    /** Whether to add the content type to the GraphQL Schema. */
    showInGraphql?: Maybe<Scalars['Boolean']>;
    /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
    showInMenu?: Maybe<Scalars['Boolean']>;
    /** Makes this content type available for selection in navigation menus. */
    showInNavMenus?: Maybe<Scalars['Boolean']>;
    /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
    showInRest?: Maybe<Scalars['Boolean']>;
    /** Whether to generate and allow a UI for managing this content type in the admin. */
    showUi?: Maybe<Scalars['Boolean']>;
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']>;
  };

/** An Post Type object */
export type ContentTypeConnectedTaxonomiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** An Post Type object */
export type ContentTypeContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentTypeToContentNodeConnectionWhereArgs>;
};

/** Connection to ContentType Nodes */
export type ContentTypeConnection = {
  /** A list of edges (relational context) between RootQuery and connected ContentType Nodes */
  edges: Array<ContentTypeConnectionEdge>;
  /** A list of connected ContentType Nodes */
  nodes: Array<ContentType>;
};

/** Edge between a Node and a connected ContentType */
export type ContentTypeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected ContentType Node */
  node: ContentType;
};

/** Allowed Content Types */
export enum ContentTypeEnum {
  /** The Type of Content object */
  Attachment = 'ATTACHMENT',
  /** The Type of Content object */
  CollectionCpt = 'COLLECTION_CPT',
  /** The Type of Content object */
  ContactCpt = 'CONTACT_CPT',
  /** The Type of Content object */
  LandingPageCpt = 'LANDING_PAGE_CPT',
  /** The Type of Content object */
  Page = 'PAGE',
  /** The Type of Content object */
  Post = 'POST',
  /** The Type of Content object */
  ReleaseCpt = 'RELEASE_CPT',
  /** The Type of Content object */
  TranslationCpt = 'TRANSLATION_CPT',
}

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export enum ContentTypeIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the content type. */
  Name = 'NAME',
}

/** Connection between the ContentType type and the ContentNode type */
export type ContentTypeToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'ContentTypeToContentNodeConnection';
    /** Edges for the ContentTypeToContentNodeConnection connection */
    edges: Array<ContentTypeToContentNodeConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type ContentTypeToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'ContentTypeToContentNodeConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: ContentNode;
  };

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type ContentTypeToTaxonomyConnection = Connection &
  TaxonomyConnection & {
    __typename?: 'ContentTypeToTaxonomyConnection';
    /** Edges for the ContentTypeToTaxonomyConnection connection */
    edges: Array<ContentTypeToTaxonomyConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Taxonomy>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type ContentTypeToTaxonomyConnectionEdge = Edge &
  TaxonomyConnectionEdge & {
    __typename?: 'ContentTypeToTaxonomyConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Taxonomy;
  };

/** Allowed Content Types of the Category taxonomy. */
export enum ContentTypesOfCategoryEnum {
  /** The Type of Content object */
  Post = 'POST',
}

/** Allowed Content Types of the PostFormat taxonomy. */
export enum ContentTypesOfPostFormatEnum {
  /** The Type of Content object */
  Post = 'POST',
}

/** Allowed Content Types of the Tag taxonomy. */
export enum ContentTypesOfTagEnum {
  /** The Type of Content object */
  Post = 'POST',
}

/** Input for the createCategory mutation. */
export type CreateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the category object */
  description?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageCodeEnum>;
  /** The name of the category object to mutate */
  name: Scalars['String'];
  /** The ID of the category that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the createCategory mutation. */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  /** The created category */
  category?: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createCollection mutation. */
export type CreateCollectionInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageCodeEnum>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createCollection mutation. */
export type CreateCollectionPayload = {
  __typename?: 'CreateCollectionPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  collection?: Maybe<Collection>;
};

/** Input for the createComment mutation. */
export type CreateCommentInput = {
  /** The approval status of the comment. */
  approved?: InputMaybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: InputMaybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The database ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** Parent comment ID of current comment. */
  parent?: InputMaybe<Scalars['ID']>;
  /** The approval status of the comment */
  status?: InputMaybe<CommentStatusEnum>;
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']>;
};

/** The payload for the createComment mutation. */
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment that was created */
  comment?: Maybe<Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<Scalars['Boolean']>;
};

/** Input for the createContact mutation. */
export type CreateContactInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageCodeEnum>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createContact mutation. */
export type CreateContactPayload = {
  __typename?: 'CreateContactPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  contact?: Maybe<Contact>;
};

/** Input for the createLandingPage mutation. */
export type CreateLandingPageInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageCodeEnum>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createLandingPage mutation. */
export type CreateLandingPagePayload = {
  __typename?: 'CreateLandingPagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  landingPage?: Maybe<LandingPage>;
};

/** Input for the createMediaItem mutation. */
export type CreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: InputMaybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: InputMaybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: InputMaybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: InputMaybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: InputMaybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: InputMaybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: InputMaybe<MimeTypeEnum>;
  language?: InputMaybe<LanguageCodeEnum>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: InputMaybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: InputMaybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createMediaItem mutation. */
export type CreateMediaItemPayload = {
  __typename?: 'CreateMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the createPage mutation. */
export type CreatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageCodeEnum>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createPage mutation. */
export type CreatePagePayload = {
  __typename?: 'CreatePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  page?: Maybe<Page>;
};

/** Input for the createPostFormat mutation. */
export type CreatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_format object */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the post_format object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the createPostFormat mutation. */
export type CreatePostFormatPayload = {
  __typename?: 'CreatePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_format */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the createPost mutation. */
export type CreatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: InputMaybe<PostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageCodeEnum>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** Set connections between the post and postFormats */
  postFormats?: InputMaybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: InputMaybe<PostTagsInput>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createPost mutation. */
export type CreatePostPayload = {
  __typename?: 'CreatePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  post?: Maybe<Post>;
};

/** Input for the createRelease mutation. */
export type CreateReleaseInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageCodeEnum>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createRelease mutation. */
export type CreateReleasePayload = {
  __typename?: 'CreateReleasePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  release?: Maybe<Release>;
};

/** Input for the createTag mutation. */
export type CreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_tag object */
  description?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageCodeEnum>;
  /** The name of the post_tag object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the createTag mutation. */
export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_tag */
  tag?: Maybe<Tag>;
};

/** Input for the createTranslation mutation. */
export type CreateTranslationInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createTranslation mutation. */
export type CreateTranslationPayload = {
  __typename?: 'CreateTranslationPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  translation?: Maybe<Translation>;
};

/** Input for the createUser mutation. */
export type CreateUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A string that contains the user's username for logging in. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']>;
};

/** The payload for the createUser mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** Object that can be identified with a Database ID */
export type DatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
};

/** Date values */
export type DateInput = {
  /** Day of the month (from 1 to 31) */
  day?: InputMaybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: InputMaybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: InputMaybe<Scalars['Int']>;
};

/** Filter the connection based on input */
export type DateQueryInput = {
  /** Nodes should be returned after this date */
  after?: InputMaybe<DateInput>;
  /** Nodes should be returned before this date */
  before?: InputMaybe<DateInput>;
  /** Column to query against */
  column?: InputMaybe<PostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  compare?: InputMaybe<Scalars['String']>;
  /** Day of the month (from 1 to 31) */
  day?: InputMaybe<Scalars['Int']>;
  /** Hour (from 0 to 23) */
  hour?: InputMaybe<Scalars['Int']>;
  /** For after/before, whether exact value should be matched or not */
  inclusive?: InputMaybe<Scalars['Boolean']>;
  /** Minute (from 0 to 59) */
  minute?: InputMaybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: InputMaybe<Scalars['Int']>;
  /** OR or AND, how the sub-arrays should be compared */
  relation?: InputMaybe<RelationEnum>;
  /** Second (0 to 59) */
  second?: InputMaybe<Scalars['Int']>;
  /** Week of the year (from 0 to 53) */
  week?: InputMaybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: InputMaybe<Scalars['Int']>;
};

/** Default images of different post types. Returns url of image of queried post type. Values come from Sivuston Asetukset -&gt; Oletuskuvat. */
export type DefaultImages = {
  __typename?: 'DefaultImages';
  /** Attachment URL for article image */
  article?: Maybe<Scalars['String']>;
  /** Attachment URL for event image */
  event?: Maybe<Scalars['String']>;
  /** Attachment URL for hero image */
  hero?: Maybe<Scalars['String']>;
  /** Attachment URL for page image */
  page?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type DefaultTemplate = ContentTemplate & {
  __typename?: 'DefaultTemplate';
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** Input for the deleteCategory mutation. */
export type DeleteCategoryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the category to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteCategory mutation. */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /** The deteted term object */
  category?: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteCollection mutation. */
export type DeleteCollectionInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the collection to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteCollection mutation. */
export type DeleteCollectionPayload = {
  __typename?: 'DeleteCollectionPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The object before it was deleted */
  collection?: Maybe<Collection>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteComment mutation. */
export type DeleteCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The deleted comment ID */
  id: Scalars['ID'];
};

/** The payload for the deleteComment mutation. */
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The deleted comment object */
  comment?: Maybe<Comment>;
  /** The deleted comment ID */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteContact mutation. */
export type DeleteContactInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the contact to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteContact mutation. */
export type DeleteContactPayload = {
  __typename?: 'DeleteContactPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The object before it was deleted */
  contact?: Maybe<Contact>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteLandingPage mutation. */
export type DeleteLandingPageInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the landingPage to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteLandingPage mutation. */
export type DeleteLandingPagePayload = {
  __typename?: 'DeleteLandingPagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  landingPage?: Maybe<LandingPage>;
};

/** Input for the deleteMediaItem mutation. */
export type DeleteMediaItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the mediaItem to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteMediaItem mutation. */
export type DeleteMediaItemPayload = {
  __typename?: 'DeleteMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted mediaItem */
  deletedId?: Maybe<Scalars['ID']>;
  /** The mediaItem before it was deleted */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the deletePage mutation. */
export type DeletePageInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the page to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePage mutation. */
export type DeletePagePayload = {
  __typename?: 'DeletePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  page?: Maybe<Page>;
};

/** Input for the deletePostFormat mutation. */
export type DeletePostFormatInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the postFormat to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePostFormat mutation. */
export type DeletePostFormatPayload = {
  __typename?: 'DeletePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the deletePost mutation. */
export type DeletePostInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the post to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePost mutation. */
export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  post?: Maybe<Post>;
};

/** Input for the deleteRelease mutation. */
export type DeleteReleaseInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the release to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteRelease mutation. */
export type DeleteReleasePayload = {
  __typename?: 'DeleteReleasePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  release?: Maybe<Release>;
};

/** Input for the deleteTag mutation. */
export type DeleteTagInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the tag to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteTag mutation. */
export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  tag?: Maybe<Tag>;
};

/** Input for the deleteTranslation mutation. */
export type DeleteTranslationInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the translation to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteTranslation mutation. */
export type DeleteTranslationPayload = {
  __typename?: 'DeleteTranslationPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  translation?: Maybe<Translation>;
};

/** Input for the deleteUser mutation. */
export type DeleteUserInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the user you want to delete */
  id: Scalars['ID'];
  /** Reassign posts and links to new User ID. */
  reassignId?: InputMaybe<Scalars['ID']>;
};

/** The payload for the deleteUser mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the user that you just deleted */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deleted user object */
  user?: Maybe<User>;
};

/** The discussion setting type */
export type DiscussionSettings = {
  __typename?: 'DiscussionSettings';
  /** Salli uusien artikkelien kommentointi. */
  defaultCommentStatus?: Maybe<Scalars['String']>;
  /** Salli linkki-ilmoitukset muista blogeista (pingback ja trackback) uusiin artikkeleihin. */
  defaultPingStatus?: Maybe<Scalars['String']>;
};

/** Relational context between connected nodes */
export type Edge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected node */
  node: Node;
};

/** Asset enqueued by the CMS */
export type EnqueuedAsset = {
  /** @todo */
  args?: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Extra information needed for the script */
  extra?: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the enqueued asset */
  id: Scalars['ID'];
  /** The source of the asset */
  src?: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  version?: Maybe<Scalars['String']>;
};

/** Script enqueued by the CMS */
export type EnqueuedScript = EnqueuedAsset &
  Node & {
    __typename?: 'EnqueuedScript';
    /** @todo */
    args?: Maybe<Scalars['Boolean']>;
    /** Dependencies needed to use this asset */
    dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
    /** Extra information needed for the script */
    extra?: Maybe<Scalars['String']>;
    /** The handle of the enqueued asset */
    handle?: Maybe<Scalars['String']>;
    /** The ID of the enqueued asset */
    id: Scalars['ID'];
    /** The source of the asset */
    src?: Maybe<Scalars['String']>;
    /** The version of the enqueued asset */
    version?: Maybe<Scalars['String']>;
  };

/** Connection to EnqueuedScript Nodes */
export type EnqueuedScriptConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedScript Nodes */
  edges: Array<EnqueuedScriptConnectionEdge>;
  /** A list of connected EnqueuedScript Nodes */
  nodes: Array<EnqueuedScript>;
};

/** Edge between a Node and a connected EnqueuedScript */
export type EnqueuedScriptConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected EnqueuedScript Node */
  node: EnqueuedScript;
};

/** Stylesheet enqueued by the CMS */
export type EnqueuedStylesheet = EnqueuedAsset &
  Node & {
    __typename?: 'EnqueuedStylesheet';
    /** @todo */
    args?: Maybe<Scalars['Boolean']>;
    /** Dependencies needed to use this asset */
    dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
    /** Extra information needed for the script */
    extra?: Maybe<Scalars['String']>;
    /** The handle of the enqueued asset */
    handle?: Maybe<Scalars['String']>;
    /** The ID of the enqueued asset */
    id: Scalars['ID'];
    /** The source of the asset */
    src?: Maybe<Scalars['String']>;
    /** The version of the enqueued asset */
    version?: Maybe<Scalars['String']>;
  };

/** Connection to EnqueuedStylesheet Nodes */
export type EnqueuedStylesheetConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedStylesheet Nodes */
  edges: Array<EnqueuedStylesheetConnectionEdge>;
  /** A list of connected EnqueuedStylesheet Nodes */
  nodes: Array<EnqueuedStylesheet>;
};

/** Edge between a Node and a connected EnqueuedStylesheet */
export type EnqueuedStylesheetConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected EnqueuedStylesheet Node */
  node: EnqueuedStylesheet;
};

/** Collection Module: EventSearch */
export type EventSearch = {
  __typename?: 'EventSearch';
  /** Amount of events listed before &quot;show more -button&quot; */
  initAmountOfEvents?: Maybe<Scalars['Int']>;
  /** Module type */
  module?: Maybe<Scalars['String']>;
  /** List of modules */
  modules?: Maybe<Array<Maybe<CollectionModulesUnionType>>>;
  /**
   * Show all -link, final link is combination of Tapahtuma- ja kurssikarusellin
   *                 hakutulosten osoite -link and search params of the module, for example:
   *                 https://client-url.com/search/?sort=end_time&amp;super_event_type=umbrella,none&amp;language=fi&amp;start=2022-10-29
   *
   */
  showAllLink?: Maybe<Scalars['String']>;
  /** Show all -link */
  showAllLinkCustom?: Maybe<Scalars['String']>;
  /** Module title */
  title?: Maybe<Scalars['String']>;
  /** Search query */
  url?: Maybe<Scalars['String']>;
};

/** Collection Module: EventSearchCarousel */
export type EventSearchCarousel = {
  __typename?: 'EventSearchCarousel';
  /** Amount of cards in carousel */
  amountOfCards?: Maybe<Scalars['Int']>;
  /** Events nearby */
  eventsNearby?: Maybe<Scalars['Boolean']>;
  /** Module type */
  module?: Maybe<Scalars['String']>;
  /** List of modules */
  modules?: Maybe<Array<Maybe<CollectionModulesUnionType>>>;
  /** Events order */
  orderNewestFirst?: Maybe<Scalars['Boolean']>;
  /**
   * Show all -link, final link is combination of Tapahtuma- ja kurssikarusellin
   *                                     hakutulosten osoite -link and search params of the module, for example:
   *                                     https://client-url.com/search/?sort=end_time&amp;super_event_type=umbrella,none&amp;language=fi&amp;start=2022-10-29
   *
   */
  showAllLink?: Maybe<Scalars['String']>;
  /** Show all -link */
  showAllLinkCustom?: Maybe<Scalars['String']>;
  /** Module title */
  title?: Maybe<Scalars['String']>;
  /** Search query */
  url?: Maybe<Scalars['String']>;
};

/** Collection Module: EventSelected */
export type EventSelected = {
  __typename?: 'EventSelected';
  /** List of event IDs */
  events?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Amount of events listed before &quot;show more -button&quot; */
  initAmountOfEvents?: Maybe<Scalars['Int']>;
  /** Module type */
  module?: Maybe<Scalars['String']>;
  /** List of modules */
  modules?: Maybe<Array<Maybe<CollectionModulesUnionType>>>;
  /** Show all -link */
  showAllLink?: Maybe<Scalars['String']>;
  /** Module title */
  title?: Maybe<Scalars['String']>;
};

/** Collection Module: EventSelectedCarousel */
export type EventSelectedCarousel = {
  __typename?: 'EventSelectedCarousel';
  /** Amount of cards in carousel */
  amountOfCards?: Maybe<Scalars['Int']>;
  /** Amount of cards per row */
  amountOfCardsPerRow?: Maybe<Scalars['Int']>;
  /** List of event IDs */
  events?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Events nearby */
  eventsNearby?: Maybe<Scalars['Boolean']>;
  /** Module type */
  module?: Maybe<Scalars['String']>;
  /** List of modules */
  modules?: Maybe<Array<Maybe<CollectionModulesUnionType>>>;
  /** Show all -link */
  showAllLink?: Maybe<Scalars['String']>;
  /** Module title */
  title?: Maybe<Scalars['String']>;
};

/** The general setting type */
export type GeneralSettings = {
  __typename?: 'GeneralSettings';
  /** Muoto kaikille päivämäärän merkkijonoille. */
  dateFormat?: Maybe<Scalars['String']>;
  /** Sivuston kuvaus. */
  description?: Maybe<Scalars['String']>;
  /** WordPressin kieli- ja maakoodi. */
  language?: Maybe<Scalars['String']>;
  /** Viikonpäivän numero josta viikko alkaa. */
  startOfWeek?: Maybe<Scalars['Int']>;
  /** Muoto kaikille kellonajan merkkijonoille. */
  timeFormat?: Maybe<Scalars['String']>;
  /** Kaupunki samalla aikavyöhykkeellä kuin sinä. */
  timezone?: Maybe<Scalars['String']>;
  /** Sivuston otsikko. */
  title?: Maybe<Scalars['String']>;
  /** Site URL. */
  url?: Maybe<Scalars['String']>;
};

/** Hero field */
export type Hero = {
  __typename?: 'Hero';
  /** The background color of the hero */
  background_color?: Maybe<Scalars['String']>;
  /** The background color of the hero */
  background_image_url?: Maybe<Scalars['String']>;
  /** The desctiption of the hero */
  description?: Maybe<Scalars['String']>;
  /** The title of the hero link */
  link?: Maybe<Link>;
  /** The title of the hero */
  title?: Maybe<Scalars['String']>;
  /** The wave motif of the hero */
  wave_motif?: Maybe<Scalars['String']>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeAncestorsConnection =
  Connection &
    ContentNodeConnection & {
      __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection';
      /** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
      edges: Array<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>;
      /** The nodes of the connection, without the edges */
      nodes: Array<ContentNode>;
      /** Information about pagination in a connection. */
      pageInfo?: Maybe<WpPageInfo>;
    };

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge =
  ContentNodeConnectionEdge &
    Edge & {
      __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge';
      /** A cursor for use in pagination */
      cursor?: Maybe<Scalars['String']>;
      /** The item at the end of the edge */
      node: ContentNode;
    };

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeChildrenConnection =
  Connection &
    ContentNodeConnection & {
      __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
      /** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
      edges: Array<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>;
      /** The nodes of the connection, without the edges */
      nodes: Array<ContentNode>;
      /** Information about pagination in a connection. */
      pageInfo?: Maybe<WpPageInfo>;
    };

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge =
  ContentNodeConnectionEdge &
    Edge & {
      __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
      /** A cursor for use in pagination */
      cursor?: Maybe<Scalars['String']>;
      /** The item at the end of the edge */
      node: ContentNode;
    };

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToParentContentNodeConnectionEdge =
  ContentNodeConnectionEdge &
    Edge &
    OneToOneConnection & {
      __typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge';
      /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
      cursor?: Maybe<Scalars['String']>;
      /** The node of the connection, without the edges */
      node: ContentNode;
    };

/** Node with hierarchical (parent/child) relationships */
export type HierarchicalNode = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The landingPage type */
export type LandingPage = ContentNode &
  DatabaseIdentifier &
  Node &
  NodeWithRevisions &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable & {
    __typename?: 'LandingPage';
    /** Background Color */
    backgroundColor?: Maybe<Scalars['String']>;
    /** Box Color */
    boxColor?: Maybe<Scalars['String']>;
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String'];
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int'];
    /** Post publishing date. */
    date?: Maybe<Scalars['String']>;
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']>;
    /** Description */
    description?: Maybe<Scalars['String']>;
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']>;
    /** Desktop Image */
    desktopImage?: Maybe<LandingPageToMediaItemConnection>;
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']>;
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
    /** Float Image */
    floatImage?: Maybe<LandingPageToFloatImageConnection>;
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']>;
    /** Link */
    heroLink?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** The globally unique identifier of the landing-page-cpt object. */
    id: Scalars['ID'];
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean'];
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']>;
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** True if the node is a revision of another node */
    isRevision?: Maybe<Scalars['Boolean']>;
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean'];
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    landingPageId: Scalars['Int'];
    /** Polylang language */
    language?: Maybe<Language>;
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
    /** The permalink of the post */
    link?: Maybe<Scalars['String']>;
    /** Mobile Image */
    mobileImage?: Maybe<LandingPageToMobileImageConnection>;
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']>;
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']>;
    /** List of modules */
    modules?: Maybe<Array<Maybe<CollectionModulesUnionType>>>;
    /** Connection between the LandingPage type and the landingPage type */
    preview?: Maybe<LandingPageToPreviewConnectionEdge>;
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']>;
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
    /** Connection between the LandingPage type and the landingPage type */
    revisions?: Maybe<LandingPageToRevisionConnection>;
    /** The SEO Framework data of the landingPage */
    seo?: Maybe<Seo>;
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']>;
    /** The current status of the object */
    status?: Maybe<Scalars['String']>;
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>;
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']>;
    /** Get specific translation version of this object */
    translation?: Maybe<LandingPage>;
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<LandingPage>>>;
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']>;
  };

/** The landingPage type */
export type LandingPageDesktopImageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LandingPageToMediaItemConnectionWhereArgs>;
};

/** The landingPage type */
export type LandingPageEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The landingPage type */
export type LandingPageEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The landingPage type */
export type LandingPageFloatImageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LandingPageToFloatImageConnectionWhereArgs>;
};

/** The landingPage type */
export type LandingPageMobileImageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LandingPageToMobileImageConnectionWhereArgs>;
};

/** The landingPage type */
export type LandingPageRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LandingPageToRevisionConnectionWhereArgs>;
};

/** The landingPage type */
export type LandingPageTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The landingPage type */
export type LandingPageTranslationArgs = {
  language: LanguageCodeEnum;
};

/** Connection to landingPage Nodes */
export type LandingPageConnection = {
  /** A list of edges (relational context) between RootQuery and connected landingPage Nodes */
  edges: Array<LandingPageConnectionEdge>;
  /** A list of connected landingPage Nodes */
  nodes: Array<LandingPage>;
};

/** Edge between a Node and a connected landingPage */
export type LandingPageConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected landingPage Node */
  node: LandingPage;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum LandingPageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the landingPage type and the MediaItem type */
export type LandingPageToFloatImageConnection = Connection &
  MediaItemConnection & {
    __typename?: 'LandingPageToFloatImageConnection';
    /** Edges for the LandingPageToFloatImageConnection connection */
    edges: Array<LandingPageToFloatImageConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<MediaItem>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type LandingPageToFloatImageConnectionEdge = Edge &
  MediaItemConnectionEdge & {
    __typename?: 'LandingPageToFloatImageConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: MediaItem;
  };

/** Arguments for filtering the LandingPageToFloatImageConnection connection */
export type LandingPageToFloatImageConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the landingPage type and the MediaItem type */
export type LandingPageToMediaItemConnection = Connection &
  MediaItemConnection & {
    __typename?: 'LandingPageToMediaItemConnection';
    /** Edges for the LandingPageToMediaItemConnection connection */
    edges: Array<LandingPageToMediaItemConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<MediaItem>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type LandingPageToMediaItemConnectionEdge = Edge &
  MediaItemConnectionEdge & {
    __typename?: 'LandingPageToMediaItemConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: MediaItem;
  };

/** Arguments for filtering the LandingPageToMediaItemConnection connection */
export type LandingPageToMediaItemConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the landingPage type and the MediaItem type */
export type LandingPageToMobileImageConnection = Connection &
  MediaItemConnection & {
    __typename?: 'LandingPageToMobileImageConnection';
    /** Edges for the LandingPageToMobileImageConnection connection */
    edges: Array<LandingPageToMobileImageConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<MediaItem>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type LandingPageToMobileImageConnectionEdge = Edge &
  MediaItemConnectionEdge & {
    __typename?: 'LandingPageToMobileImageConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: MediaItem;
  };

/** Arguments for filtering the LandingPageToMobileImageConnection connection */
export type LandingPageToMobileImageConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the LandingPage type and the landingPage type */
export type LandingPageToPreviewConnectionEdge = Edge &
  LandingPageConnectionEdge &
  OneToOneConnection & {
    __typename?: 'LandingPageToPreviewConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: LandingPage;
  };

/** Connection between the LandingPage type and the landingPage type */
export type LandingPageToRevisionConnection = Connection &
  LandingPageConnection & {
    __typename?: 'LandingPageToRevisionConnection';
    /** Edges for the LandingPageToRevisionConnection connection */
    edges: Array<LandingPageToRevisionConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<LandingPage>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type LandingPageToRevisionConnectionEdge = Edge &
  LandingPageConnectionEdge & {
    __typename?: 'LandingPageToRevisionConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: LandingPage;
  };

/** Arguments for filtering the LandingPageToRevisionConnection connection */
export type LandingPageToRevisionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Language (Polylang) */
export type Language = {
  __typename?: 'Language';
  /** Language code (Polylang) */
  code?: Maybe<LanguageCodeEnum>;
  /** Language term front page URL */
  homeUrl?: Maybe<Scalars['String']>;
  /** Language ID (Polylang) */
  id: Scalars['ID'];
  /** Language locale (Polylang) */
  locale?: Maybe<Scalars['String']>;
  /** Human readable language name (Polylang) */
  name?: Maybe<Scalars['String']>;
  /** Language term slug. Prefer the &quot;code&quot; field if possible (Polylang) */
  slug?: Maybe<Scalars['String']>;
};

/** Enum of all available language codes */
export enum LanguageCodeEnum {
  En = 'EN',
  Fi = 'FI',
  Sv = 'SV',
}

/** Filter item by specific language, default language or list all languages */
export enum LanguageCodeFilterEnum {
  All = 'ALL',
  Default = 'DEFAULT',
  En = 'EN',
  Fi = 'FI',
  Sv = 'SV',
}

/** Layout: LayoutArticleHighlights */
export type LayoutArticleHighlights = {
  __typename?: 'LayoutArticleHighlights';
  /** Anchor */
  anchor?: Maybe<Scalars['String']>;
  /** Articles */
  articles?: Maybe<Array<Maybe<Post>>>;
  /** Background Color */
  backgroundColor?: Maybe<Scalars['String']>;
  /** Category */
  category?: Maybe<Scalars['Int']>;
  /** Amount of articles to list */
  limit?: Maybe<Scalars['Int']>;
  /** Show more link */
  showMore?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Tag */
  tag?: Maybe<Scalars['Int']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

/** Layout: LayoutArticles */
export type LayoutArticles = {
  __typename?: 'LayoutArticles';
  /** Anchor */
  anchor?: Maybe<Scalars['String']>;
  /** Articles */
  articles?: Maybe<Array<Maybe<Post>>>;
  /** Background Color */
  backgroundColor?: Maybe<Scalars['String']>;
  /** Category */
  category?: Maybe<Scalars['Int']>;
  /** Tag */
  limit?: Maybe<Scalars['Int']>;
  /** Show all -link */
  showAllLink?: Maybe<Scalars['String']>;
  /** Tag */
  tag?: Maybe<Scalars['Int']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

/** Layout: LayoutArticlesCarousel */
export type LayoutArticlesCarousel = {
  __typename?: 'LayoutArticlesCarousel';
  /** Anchor */
  anchor?: Maybe<Scalars['String']>;
  /** Articles */
  articles?: Maybe<Array<Maybe<Post>>>;
  /** Background Color */
  backgroundColor?: Maybe<Scalars['String']>;
  /** Category */
  category?: Maybe<Scalars['Int']>;
  /** Amount of articles to list */
  limit?: Maybe<Scalars['Int']>;
  /** Show all -link */
  showAllLink?: Maybe<Scalars['String']>;
  /** Show more link */
  showMore?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Tag */
  tag?: Maybe<Scalars['Int']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

/** Layout: LayoutCards */
export type LayoutCards = {
  __typename?: 'LayoutCards';
  /** Cards */
  cards?: Maybe<Array<Maybe<Card>>>;
};

/** Layout: LayoutCollection */
export type LayoutCollection = {
  __typename?: 'LayoutCollection';
  /** Collection */
  collection?: Maybe<Collection>;
};

/** Layout: LayoutContact */
export type LayoutContact = {
  __typename?: 'LayoutContact';
  /** Contacts */
  contacts?: Maybe<Array<Maybe<Contact>>>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

/** Layout: LayoutContent */
export type LayoutContent = {
  __typename?: 'LayoutContent';
  /** Background Color */
  backgroundColor?: Maybe<Scalars['String']>;
  /** Title */
  content?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

/** Layout: LayoutLinkList */
export type LayoutLinkList = {
  __typename?: 'LayoutLinkList';
  /** Anchor */
  anchor?: Maybe<Scalars['String']>;
  /** Background Color */
  backgroundColor?: Maybe<Scalars['String']>;
  /** Title */
  description?: Maybe<Scalars['String']>;
  /** Links */
  links?: Maybe<Array<Maybe<Link>>>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

/** Layout: LayoutPages */
export type LayoutPages = {
  __typename?: 'LayoutPages';
  /** Anchor */
  anchor?: Maybe<Scalars['String']>;
  /** Background Color */
  backgroundColor?: Maybe<Scalars['String']>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Pages */
  pages?: Maybe<Array<Maybe<Page>>>;
  /** Show all -link */
  showAllLink?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

/** Layout: LayoutPagesCarousel */
export type LayoutPagesCarousel = {
  __typename?: 'LayoutPagesCarousel';
  /** Anchor */
  anchor?: Maybe<Scalars['String']>;
  /** Background Color */
  backgroundColor?: Maybe<Scalars['String']>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Pages */
  pages?: Maybe<Array<Maybe<Page>>>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

/** Link field */
export type Link = {
  __typename?: 'Link';
  /** The target of the link */
  target?: Maybe<Scalars['String']>;
  /** The title of the link */
  title?: Maybe<Scalars['String']>;
  /** The url of the link */
  url?: Maybe<Scalars['String']>;
};

/** Collection Module: LocationsSelected */
export type LocationsSelected = {
  __typename?: 'LocationsSelected';
  /** List of location IDs */
  locations?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Module type */
  module?: Maybe<Scalars['String']>;
  /** List of modules */
  modules?: Maybe<Array<Maybe<CollectionModulesUnionType>>>;
  /** Module title */
  title?: Maybe<Scalars['String']>;
};

/** Collection Module: LocationsSelectedCarousel */
export type LocationsSelectedCarousel = {
  __typename?: 'LocationsSelectedCarousel';
  /** List of location IDs */
  locations?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Module type */
  module?: Maybe<Scalars['String']>;
  /** List of modules */
  modules?: Maybe<Array<Maybe<CollectionModulesUnionType>>>;
  /** Module title */
  title?: Maybe<Scalars['String']>;
};

/** File details for a Media Item */
export type MediaDetails = {
  __typename?: 'MediaDetails';
  /** The filename of the mediaItem */
  file?: Maybe<Scalars['String']>;
  /** The height of the mediaItem */
  height?: Maybe<Scalars['Int']>;
  /** Meta information associated with the mediaItem */
  meta?: Maybe<MediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes?: Maybe<Array<Maybe<MediaSize>>>;
  /** The width of the mediaItem */
  width?: Maybe<Scalars['Int']>;
};

/** File details for a Media Item */
export type MediaDetailsSizesArgs = {
  exclude?: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>;
  include?: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>;
};

/** The mediaItem type */
export type MediaItem = ContentNode &
  DatabaseIdentifier &
  HierarchicalContentNode &
  HierarchicalNode &
  Node &
  NodeWithAuthor &
  NodeWithTemplate &
  NodeWithTitle &
  UniformResourceIdentifiable & {
    __typename?: 'MediaItem';
    /** Alternative text to display when resource is not displayed */
    altText?: Maybe<Scalars['String']>;
    /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
    /** Connection between the NodeWithAuthor type and the User type */
    author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
    /** The database identifier of the author of the node */
    authorDatabaseId?: Maybe<Scalars['Int']>;
    /** The globally unique identifier of the author of the node */
    authorId?: Maybe<Scalars['ID']>;
    /** The caption for the resource */
    caption?: Maybe<Scalars['String']>;
    /** Connection between the HierarchicalContentNode type and the ContentNode type */
    children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String'];
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int'];
    /** Post publishing date. */
    date?: Maybe<Scalars['String']>;
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']>;
    /** Description of the image (stored as post_content) */
    description?: Maybe<Scalars['String']>;
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']>;
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']>;
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
    /** The filesize in bytes of the resource */
    fileSize?: Maybe<Scalars['Int']>;
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']>;
    /** The globally unique identifier of the attachment object. */
    id: Scalars['ID'];
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean'];
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']>;
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean'];
    /** Polylang language */
    language?: Maybe<Language>;
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
    /** The permalink of the post */
    link?: Maybe<Scalars['String']>;
    /** Details about the mediaItem */
    mediaDetails?: Maybe<MediaDetails>;
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    mediaItemId: Scalars['Int'];
    /** Url of the mediaItem */
    mediaItemUrl?: Maybe<Scalars['String']>;
    /** Type of resource */
    mediaType?: Maybe<Scalars['String']>;
    /** The mime type of the mediaItem */
    mimeType?: Maybe<Scalars['String']>;
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']>;
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']>;
    /** The parent of the node. The parent object can be of various types */
    parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
    /** Database id of the parent node */
    parentDatabaseId?: Maybe<Scalars['Int']>;
    /** The globally unique identifier of the parent node. */
    parentId?: Maybe<Scalars['ID']>;
    /** Valokuvaajan tiedot */
    photographerName?: Maybe<Scalars['String']>;
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']>;
    /** The SEO Framework data of the mediaItem */
    seo?: Maybe<Seo>;
    /** The sizes attribute value for an image. */
    sizes?: Maybe<Scalars['String']>;
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']>;
    /** Url of the mediaItem */
    sourceUrl?: Maybe<Scalars['String']>;
    /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
    srcSet?: Maybe<Scalars['String']>;
    /** The current status of the object */
    status?: Maybe<Scalars['String']>;
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>;
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']>;
    /** Get specific translation version of this object */
    translation?: Maybe<MediaItem>;
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<MediaItem>>>;
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']>;
  };

/** The mediaItem type */
export type MediaItemAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};

/** The mediaItem type */
export type MediaItemCaptionArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type MediaItemChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

/** The mediaItem type */
export type MediaItemDescriptionArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type MediaItemEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The mediaItem type */
export type MediaItemEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The mediaItem type */
export type MediaItemFileSizeArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemSizesArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemSourceUrlArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemSrcSetArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type MediaItemTranslationArgs = {
  language: LanguageCodeEnum;
};

/** Connection to mediaItem Nodes */
export type MediaItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected mediaItem Nodes */
  edges: Array<MediaItemConnectionEdge>;
  /** A list of connected mediaItem Nodes */
  nodes: Array<MediaItem>;
};

/** Edge between a Node and a connected mediaItem */
export type MediaItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected mediaItem Node */
  node: MediaItem;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MediaItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a media item by its source url */
  SourceUrl = 'SOURCE_URL',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
  __typename?: 'MediaItemMeta';
  /** Aperture measurement of the media item. */
  aperture?: Maybe<Scalars['Float']>;
  /** Information about the camera used to create the media item. */
  camera?: Maybe<Scalars['String']>;
  /** The text string description associated with the media item. */
  caption?: Maybe<Scalars['String']>;
  /** Copyright information associated with the media item. */
  copyright?: Maybe<Scalars['String']>;
  /** The date/time when the media was created. */
  createdTimestamp?: Maybe<Scalars['Int']>;
  /** The original creator of the media item. */
  credit?: Maybe<Scalars['String']>;
  /** The focal length value of the media item. */
  focalLength?: Maybe<Scalars['Float']>;
  /** The ISO (International Organization for Standardization) value of the media item. */
  iso?: Maybe<Scalars['Int']>;
  /** List of keywords used to describe or identfy the media item. */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The vertical or horizontal aspect of the media item. */
  orientation?: Maybe<Scalars['String']>;
  /** The shutter speed information of the media item. */
  shutterSpeed?: Maybe<Scalars['Float']>;
  /** A useful title for the media item. */
  title?: Maybe<Scalars['String']>;
};

/** The size of the media item object. */
export enum MediaItemSizeEnum {
  /** MediaItem with the large size */
  Large = 'LARGE',
  /** MediaItem with the medium size */
  Medium = 'MEDIUM',
  /** MediaItem with the medium_large size */
  MediumLarge = 'MEDIUM_LARGE',
  /** MediaItem with the thumbnail size */
  Thumbnail = 'THUMBNAIL',
  /** MediaItem with the 1536x1536 size */
  '1536X1536' = '_1536X1536',
  /** MediaItem with the 2048x2048 size */
  '2048X2048' = '_2048X2048',
}

/** The status of the media item object. */
export enum MediaItemStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the trash status */
  Trash = 'TRASH',
}

/** Details of an available size for a media item */
export type MediaSize = {
  __typename?: 'MediaSize';
  /** The filename of the referenced size */
  file?: Maybe<Scalars['String']>;
  /** The filesize of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /** The height of the referenced size */
  height?: Maybe<Scalars['String']>;
  /** The mime type of the referenced size */
  mimeType?: Maybe<Scalars['String']>;
  /** The referenced size name */
  name?: Maybe<Scalars['String']>;
  /** The url of the referenced size */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The width of the referenced size */
  width?: Maybe<Scalars['String']>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type Menu = DatabaseIdentifier &
  Node & {
    __typename?: 'Menu';
    /** The number of items in the menu */
    count?: Maybe<Scalars['Int']>;
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int'];
    /** The globally unique identifier of the nav menu object. */
    id: Scalars['ID'];
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** The locations a menu is assigned to */
    locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
    /**
     * WP ID of the nav menu.
     * @deprecated Deprecated in favor of the databaseId field
     */
    menuId?: Maybe<Scalars['Int']>;
    /** Connection between the Menu type and the MenuItem type */
    menuItems?: Maybe<MenuToMenuItemConnection>;
    /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
    name?: Maybe<Scalars['String']>;
    /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
    slug?: Maybe<Scalars['String']>;
  };

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type MenuMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuToMenuItemConnectionWhereArgs>;
};

/** Connection to Menu Nodes */
export type MenuConnection = {
  /** A list of edges (relational context) between RootQuery and connected Menu Nodes */
  edges: Array<MenuConnectionEdge>;
  /** A list of connected Menu Nodes */
  nodes: Array<Menu>;
};

/** Edge between a Node and a connected Menu */
export type MenuConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Menu Node */
  node: Menu;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = DatabaseIdentifier &
  Node & {
    __typename?: 'MenuItem';
    /** Connection between the MenuItem type and the MenuItem type */
    childItems?: Maybe<MenuItemToMenuItemConnection>;
    /** Connection from MenuItem to it&#039;s connected node */
    connectedNode?: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
    /**
     * The object connected to this menu item.
     * @deprecated Deprecated in favor of the connectedNode field
     */
    connectedObject?: Maybe<MenuItemObjectUnion>;
    /** Class attribute for the menu item link */
    cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int'];
    /** Description of the menu item. */
    description?: Maybe<Scalars['String']>;
    /** The globally unique identifier of the nav menu item object. */
    id: Scalars['ID'];
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** Label or title of the menu item. */
    label?: Maybe<Scalars['String']>;
    /** Link relationship (XFN) of the menu item. */
    linkRelationship?: Maybe<Scalars['String']>;
    /** The locations the menu item&#039;s Menu is assigned to */
    locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
    /** The Menu a MenuItem is part of */
    menu?: Maybe<MenuItemToMenuConnectionEdge>;
    /**
     * WP ID of the menu item.
     * @deprecated Deprecated in favor of the databaseId field
     */
    menuItemId?: Maybe<Scalars['Int']>;
    /** Menu item order */
    order?: Maybe<Scalars['Int']>;
    /** The database id of the parent menu item or null if it is the root */
    parentDatabaseId?: Maybe<Scalars['Int']>;
    /** The globally unique identifier of the parent nav menu item object. */
    parentId?: Maybe<Scalars['ID']>;
    /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
    path?: Maybe<Scalars['String']>;
    /** Target attribute for the menu item link. */
    target?: Maybe<Scalars['String']>;
    /** Title attribute for the menu item link */
    title?: Maybe<Scalars['String']>;
    /** The uri of the resource the menu item links to */
    uri?: Maybe<Scalars['String']>;
    /** URL or destination of the menu item. */
    url?: Maybe<Scalars['String']>;
  };

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuItemToMenuItemConnectionWhereArgs>;
};

/** Connection to MenuItem Nodes */
export type MenuItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected MenuItem Nodes */
  edges: Array<MenuItemConnectionEdge>;
  /** A list of connected MenuItem Nodes */
  nodes: Array<MenuItem>;
};

/** Edge between a Node and a connected MenuItem */
export type MenuItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected MenuItem Node */
  node: MenuItem;
};

/** Nodes that can be linked to as Menu Items */
export type MenuItemLinkable = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Edge between a Node and a connected MenuItemLinkable */
export type MenuItemLinkableConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected MenuItemLinkable Node */
  node: MenuItemLinkable;
};

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuItemNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
}

/** Deprecated in favor of MenuItemLinkeable Interface */
export type MenuItemObjectUnion = Category | Page | Post | Tag;

/** Connection between the MenuItem type and the Menu type */
export type MenuItemToMenuConnectionEdge = Edge &
  MenuConnectionEdge &
  OneToOneConnection & {
    __typename?: 'MenuItemToMenuConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: Menu;
  };

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = Connection &
  MenuItemConnection & {
    __typename?: 'MenuItemToMenuItemConnection';
    /** Edges for the MenuItemToMenuItemConnection connection */
    edges: Array<MenuItemToMenuItemConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<MenuItem>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = Edge &
  MenuItemConnectionEdge & {
    __typename?: 'MenuItemToMenuItemConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: MenuItem;
  };

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type MenuItemToMenuItemLinkableConnectionEdge = Edge &
  MenuItemLinkableConnectionEdge &
  OneToOneConnection & {
    __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: MenuItemLinkable;
  };

/** Registered menu locations */
export enum MenuLocationEnum {
  /** Put the menu in the primary location */
  Primary = 'PRIMARY',
  /** Put the menu in the primary___en location */
  PrimaryEn = 'PRIMARY___EN',
  /** Put the menu in the primary___sv location */
  PrimarySv = 'PRIMARY___SV',
  /** Put the menu in the secondary location */
  Secondary = 'SECONDARY',
  /** Put the menu in the secondary___en location */
  SecondaryEn = 'SECONDARY___EN',
  /** Put the menu in the secondary___sv location */
  SecondarySv = 'SECONDARY___SV',
  /** Put the menu in the tertiary location */
  Tertiary = 'TERTIARY',
  /** Put the menu in the tertiary___en location */
  TertiaryEn = 'TERTIARY___EN',
  /** Put the menu in the tertiary___sv location */
  TertiarySv = 'TERTIARY___SV',
}

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuNodeIdTypeEnum {
  /** Identify a menu node by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a menu node by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a menu node by the slug of menu location to which it is assigned */
  Location = 'LOCATION',
  /** Identify a menu node by its name */
  Name = 'NAME',
  /** Identify a menu node by its slug */
  Slug = 'SLUG',
}

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = Connection &
  MenuItemConnection & {
    __typename?: 'MenuToMenuItemConnection';
    /** Edges for the MenuToMenuItemConnection connection */
    edges: Array<MenuToMenuItemConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<MenuItem>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = Edge &
  MenuItemConnectionEdge & {
    __typename?: 'MenuToMenuItemConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: MenuItem;
  };

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']>;
};

/** The MimeType of the object */
export enum MimeTypeEnum {
  /** MimeType application/msword */
  ApplicationMsword = 'APPLICATION_MSWORD',
  /** MimeType application/pdf */
  ApplicationPdf = 'APPLICATION_PDF',
  /** MimeType application/vnd.apple.keynote */
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  /** MimeType application/vnd.ms-excel */
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  /** MimeType application/vnd.ms-excel.sheet.binary.macroEnabled.12 */
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  /** MimeType application/vnd.ms-excel.sheet.macroEnabled.12 */
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint */
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  /** MimeType application/vnd.ms-powerpoint.presentation.macroEnabled.12 */
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.slideshow.macroEnabled.12 */
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  /** MimeType application/vnd.ms-word.document.macroEnabled.12 */
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  /** MimeType application/vnd.oasis.opendocument.text */
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.presentation */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.slideshow */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  /** MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  /** MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.document */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  /** MimeType audio/flac */
  AudioFlac = 'AUDIO_FLAC',
  /** MimeType audio/midi */
  AudioMidi = 'AUDIO_MIDI',
  /** MimeType audio/mpeg */
  AudioMpeg = 'AUDIO_MPEG',
  /** MimeType audio/ogg */
  AudioOgg = 'AUDIO_OGG',
  /** MimeType audio/wav */
  AudioWav = 'AUDIO_WAV',
  /** MimeType image/gif */
  ImageGif = 'IMAGE_GIF',
  /** MimeType image/jpeg */
  ImageJpeg = 'IMAGE_JPEG',
  /** MimeType image/png */
  ImagePng = 'IMAGE_PNG',
  /** MimeType video/3gpp */
  Video_3Gpp = 'VIDEO_3GPP',
  /** MimeType video/3gpp2 */
  Video_3Gpp2 = 'VIDEO_3GPP2',
  /** MimeType video/avi */
  VideoAvi = 'VIDEO_AVI',
  /** MimeType video/mp4 */
  VideoMp4 = 'VIDEO_MP4',
  /** MimeType video/mpeg */
  VideoMpeg = 'VIDEO_MPEG',
  /** MimeType video/ogg */
  VideoOgg = 'VIDEO_OGG',
  /** MimeType video/quicktime */
  VideoQuicktime = 'VIDEO_QUICKTIME',
  /** MimeType video/webm */
  VideoWebm = 'VIDEO_WEBM',
  /** MimeType video/x-flv */
  VideoXFlv = 'VIDEO_X_FLV',
}

/** An object with an ID */
export type Node = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** A node that can have an author assigned to it */
export type NodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** Connection between the NodeWithAuthor type and the User type */
export type NodeWithAuthorToUserConnectionEdge = Edge &
  OneToOneConnection &
  UserConnectionEdge & {
    __typename?: 'NodeWithAuthorToUserConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: User;
  };

/** A node that supports the content editor */
export type NodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** A node that supports the content editor */
export type NodeWithContentEditorContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A node that can have a featured image set */
export type NodeWithFeaturedImage = {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type NodeWithFeaturedImageToMediaItemConnectionEdge = Edge &
  MediaItemConnectionEdge &
  OneToOneConnection & {
    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: MediaItem;
  };

/** A node that can have page attributes */
export type NodeWithPageAttributes = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
};

/** A node that can have revisions */
export type NodeWithRevisions = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type NodeWithRevisionsToContentNodeConnectionEdge =
  ContentNodeConnectionEdge &
    Edge &
    OneToOneConnection & {
      __typename?: 'NodeWithRevisionsToContentNodeConnectionEdge';
      /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
      cursor?: Maybe<Scalars['String']>;
      /** The node of the connection, without the edges */
      node: ContentNode;
    };

/** A node that can have a template associated with it */
export type NodeWithTemplate = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
};

/** A node that NodeWith a title */
export type NodeWithTitle = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
};

/** A node that NodeWith a title */
export type NodeWithTitleTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Describe what a CustomType is */
export type Notification = {
  __typename?: 'Notification';
  /** Notification content */
  content?: Maybe<Scalars['String']>;
  /** Notification end date */
  endDate?: Maybe<Scalars['String']>;
  /** Notification level */
  level?: Maybe<Scalars['String']>;
  /** Notification link text */
  linkText?: Maybe<Scalars['String']>;
  /** Notification link url */
  linkUrl?: Maybe<Scalars['String']>;
  /** Notification start date */
  startDate?: Maybe<Scalars['String']>;
  /** Notification title */
  title?: Maybe<Scalars['String']>;
};

/** A singular connection from one Node to another, with support for relational data on the &quot;edge&quot; of the connection. */
export type OneToOneConnection = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected node */
  node: Node;
};

/** The cardinality of the connection order */
export enum OrderEnum {
  /** Sort the query result set in an ascending order */
  Asc = 'ASC',
  /** Sort the query result set in a descending order */
  Desc = 'DESC',
}

/** The page type */
export type Page = ContentNode &
  DatabaseIdentifier &
  HierarchicalContentNode &
  HierarchicalNode &
  MenuItemLinkable &
  Node &
  NodeWithAuthor &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithPageAttributes &
  NodeWithRevisions &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable & {
    __typename?: 'Page';
    /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
    /** Connection between the NodeWithAuthor type and the User type */
    author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
    /** The database identifier of the author of the node */
    authorDatabaseId?: Maybe<Scalars['Int']>;
    /** The globally unique identifier of the author of the node */
    authorId?: Maybe<Scalars['ID']>;
    /** Connection between the HierarchicalContentNode type and the ContentNode type */
    children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
    /** The content of the post. */
    content?: Maybe<Scalars['String']>;
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String'];
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int'];
    /** Post publishing date. */
    date?: Maybe<Scalars['String']>;
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']>;
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']>;
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']>;
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
    /** Vanhentumisaika */
    expirationTime?: Maybe<Scalars['String']>;
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']>;
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']>;
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']>;
    /** Hero fields */
    hero?: Maybe<Hero>;
    /** The globally unique identifier of the page object. */
    id: Scalars['ID'];
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean'];
    /** Whether this page is set to the static front page. */
    isFrontPage: Scalars['Boolean'];
    /** Whether this page is set to the blog posts page. */
    isPostsPage: Scalars['Boolean'];
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']>;
    /** Whether this page is set to the privacy page. */
    isPrivacyPage: Scalars['Boolean'];
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** True if the node is a revision of another node */
    isRevision?: Maybe<Scalars['Boolean']>;
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean'];
    /** Polylang language */
    language?: Maybe<Language>;
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
    /** Ingressi */
    lead?: Maybe<Scalars['String']>;
    /** The permalink of the post */
    link?: Maybe<Scalars['String']>;
    /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
    menuOrder?: Maybe<Scalars['Int']>;
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']>;
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']>;
    /** List of modules */
    modules?: Maybe<Array<Maybe<PageModulesUnionType>>>;
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    pageId: Scalars['Int'];
    /** The parent of the node. The parent object can be of various types */
    parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
    /** Database id of the parent node */
    parentDatabaseId?: Maybe<Scalars['Int']>;
    /** The globally unique identifier of the parent node. */
    parentId?: Maybe<Scalars['ID']>;
    /** Connection between the Page type and the page type */
    preview?: Maybe<PageToPreviewConnectionEdge>;
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']>;
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
    /** Connection between the Page type and the page type */
    revisions?: Maybe<PageToRevisionConnection>;
    /** The SEO Framework data of the page */
    seo?: Maybe<Seo>;
    /** Näytä alisivut */
    showChildPages?: Maybe<Scalars['Boolean']>;
    /** List of modules */
    sidebar?: Maybe<Array<Maybe<PageSidebarUnionType>>>;
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']>;
    /** The current status of the object */
    status?: Maybe<Scalars['String']>;
    /** The template assigned to a node of content */
    template?: Maybe<ContentTemplate>;
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']>;
    /** Get specific translation version of this object */
    translation?: Maybe<Page>;
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<Page>>>;
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']>;
  };

/** The page type */
export type PageAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};

/** The page type */
export type PageChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

/** The page type */
export type PageContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The page type */
export type PageEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The page type */
export type PageEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The page type */
export type PageRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageToRevisionConnectionWhereArgs>;
};

/** The page type */
export type PageTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The page type */
export type PageTranslationArgs = {
  language: LanguageCodeEnum;
};

/** Connection to page Nodes */
export type PageConnection = {
  /** A list of edges (relational context) between RootQuery and connected page Nodes */
  edges: Array<PageConnectionEdge>;
  /** A list of connected page Nodes */
  nodes: Array<Page>;
};

/** Edge between a Node and a connected page */
export type PageConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected page Node */
  node: Page;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

export type PageModulesUnionType =
  | EventSearch
  | EventSearchCarousel
  | EventSelected
  | EventSelectedCarousel
  | LayoutArticleHighlights
  | LayoutArticles
  | LayoutArticlesCarousel
  | LayoutCards
  | LayoutCollection
  | LayoutContact
  | LayoutContent
  | LayoutPages
  | LayoutPagesCarousel
  | LocationsSelected
  | LocationsSelectedCarousel;

export type PageSidebarUnionType =
  | LayoutArticles
  | LayoutCards
  | LayoutLinkList
  | LayoutPages;

/** Connection between the Page type and the page type */
export type PageToPreviewConnectionEdge = Edge &
  OneToOneConnection &
  PageConnectionEdge & {
    __typename?: 'PageToPreviewConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: Page;
  };

/** Connection between the Page type and the page type */
export type PageToRevisionConnection = Connection &
  PageConnection & {
    __typename?: 'PageToRevisionConnection';
    /** Edges for the PageToRevisionConnection connection */
    edges: Array<PageToRevisionConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Page>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type PageToRevisionConnectionEdge = Edge &
  PageConnectionEdge & {
    __typename?: 'PageToRevisionConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Page;
  };

/** Arguments for filtering the PageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** An plugin object */
export type Plugin = Node & {
  __typename?: 'Plugin';
  /** Name of the plugin author(s), may also be a company name. */
  author?: Maybe<Scalars['String']>;
  /** URI for the related author(s)/company website. */
  authorUri?: Maybe<Scalars['String']>;
  /** Description of the plugin. */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the plugin object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the plugin. */
  name?: Maybe<Scalars['String']>;
  /** Plugin path. */
  path?: Maybe<Scalars['String']>;
  /** URI for the plugin website. This is useful for directing users for support requests etc. */
  pluginUri?: Maybe<Scalars['String']>;
  /** Current version of the plugin. */
  version?: Maybe<Scalars['String']>;
};

/** Connection to Plugin Nodes */
export type PluginConnection = {
  /** A list of edges (relational context) between RootQuery and connected Plugin Nodes */
  edges: Array<PluginConnectionEdge>;
  /** A list of connected Plugin Nodes */
  nodes: Array<Plugin>;
};

/** Edge between a Node and a connected Plugin */
export type PluginConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Plugin Node */
  node: Plugin;
};

/** The status of the WordPress plugin. */
export enum PluginStatusEnum {
  /** The plugin is currently active. */
  Active = 'ACTIVE',
  /** The plugin is a drop-in plugin. */
  DropIn = 'DROP_IN',
  /** The plugin is currently inactive. */
  Inactive = 'INACTIVE',
  /** The plugin is a must-use plugin. */
  MustUse = 'MUST_USE',
  /** The plugin is activated on the multisite network. */
  NetworkActivated = 'NETWORK_ACTIVATED',
  /** The plugin is installed on the multisite network, but is currently inactive. */
  NetworkInactive = 'NETWORK_INACTIVE',
  /** The plugin is technically active but was paused while loading. */
  Paused = 'PAUSED',
  /** The plugin was active recently. */
  RecentlyActive = 'RECENTLY_ACTIVE',
  /** The plugin has an upgrade available. */
  Upgrade = 'UPGRADE',
}

/** The post type */
export type Post = ContentNode &
  DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  NodeWithAuthor &
  NodeWithContentEditor &
  NodeWithFeaturedImage &
  NodeWithRevisions &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable & {
    __typename?: 'Post';
    /** Connection between the NodeWithAuthor type and the User type */
    author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
    /** The database identifier of the author of the node */
    authorDatabaseId?: Maybe<Scalars['Int']>;
    /** The globally unique identifier of the author of the node */
    authorId?: Maybe<Scalars['ID']>;
    /** Connection between the Post type and the category type */
    categories?: Maybe<PostToCategoryConnection>;
    /** The content of the post. */
    content?: Maybe<Scalars['String']>;
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String'];
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int'];
    /** Post publishing date. */
    date?: Maybe<Scalars['String']>;
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']>;
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']>;
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']>;
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
    /** Vanhentumisaika */
    expirationTime?: Maybe<Scalars['String']>;
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: Maybe<Scalars['Int']>;
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: Maybe<Scalars['ID']>;
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']>;
    /** Hide Published Date */
    hidePublishedDate?: Maybe<Scalars['Boolean']>;
    /** The globally unique identifier of the post object. */
    id: Scalars['ID'];
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean'];
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']>;
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** True if the node is a revision of another node */
    isRevision?: Maybe<Scalars['Boolean']>;
    /** Whether this page is sticky */
    isSticky: Scalars['Boolean'];
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean'];
    /** Polylang language */
    language?: Maybe<Language>;
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
    /** Ingressi */
    lead?: Maybe<Scalars['String']>;
    /** The permalink of the post */
    link?: Maybe<Scalars['String']>;
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']>;
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']>;
    /** List of modules */
    modules?: Maybe<Array<Maybe<PostModulesUnionType>>>;
    /** Connection between the Post type and the postFormat type */
    postFormats?: Maybe<PostToPostFormatConnection>;
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    postId: Scalars['Int'];
    /** Connection between the Post type and the post type */
    preview?: Maybe<PostToPreviewConnectionEdge>;
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']>;
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
    /** Connection between the Post type and the post type */
    revisions?: Maybe<PostToRevisionConnection>;
    /** The SEO Framework data of the post */
    seo?: Maybe<Seo>;
    /** List of modules */
    sidebar?: Maybe<Array<Maybe<PostSidebarUnionType>>>;
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']>;
    /** The current status of the object */
    status?: Maybe<Scalars['String']>;
    /** Connection between the Post type and the tag type */
    tags?: Maybe<PostToTagConnection>;
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>;
    /** Connection between the Post type and the TermNode type */
    terms?: Maybe<PostToTermNodeConnection>;
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']>;
    /** Get specific translation version of this object */
    translation?: Maybe<Post>;
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<Post>>>;
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']>;
  };

/** The post type */
export type PostCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToCategoryConnectionWhereArgs>;
};

/** The post type */
export type PostContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The post type */
export type PostEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The post type */
export type PostEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The post type */
export type PostPostFormatsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToPostFormatConnectionWhereArgs>;
};

/** The post type */
export type PostRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToRevisionConnectionWhereArgs>;
};

/** The post type */
export type PostTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToTagConnectionWhereArgs>;
};

/** The post type */
export type PostTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToTermNodeConnectionWhereArgs>;
};

/** The post type */
export type PostTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The post type */
export type PostTranslationArgs = {
  language: LanguageCodeEnum;
};

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']>;
};

/** Connection to post Nodes */
export type PostConnection = {
  /** A list of edges (relational context) between RootQuery and connected post Nodes */
  edges: Array<PostConnectionEdge>;
  /** A list of connected post Nodes */
  nodes: Array<Post>;
};

/** Edge between a Node and a connected post */
export type PostConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected post Node */
  node: Post;
};

/** The postFormat type */
export type PostFormat = DatabaseIdentifier &
  Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'PostFormat';
    /** Connection between the PostFormat type and the ContentNode type */
    contentNodes?: Maybe<PostFormatToContentNodeConnection>;
    /** The number of objects connected to the object */
    count?: Maybe<Scalars['Int']>;
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int'];
    /** The description of the object */
    description?: Maybe<Scalars['String']>;
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
    /** The unique resource identifier path */
    id: Scalars['ID'];
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean'];
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean'];
    /** The link to the term */
    link?: Maybe<Scalars['String']>;
    /** The human friendly name of the object. */
    name?: Maybe<Scalars['String']>;
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of databaseId
     */
    postFormatId?: Maybe<Scalars['Int']>;
    /** Connection between the PostFormat type and the post type */
    posts?: Maybe<PostFormatToPostConnection>;
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars['String']>;
    /** Connection between the PostFormat type and the Taxonomy type */
    taxonomy?: Maybe<PostFormatToTaxonomyConnectionEdge>;
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: Maybe<Scalars['String']>;
    /** The ID of the term group that this term object belongs to */
    termGroupId?: Maybe<Scalars['Int']>;
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: Maybe<Scalars['Int']>;
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']>;
  };

/** The postFormat type */
export type PostFormatContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostFormatToContentNodeConnectionWhereArgs>;
};

/** The postFormat type */
export type PostFormatEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The postFormat type */
export type PostFormatEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The postFormat type */
export type PostFormatPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostFormatToPostConnectionWhereArgs>;
};

/** Connection to postFormat Nodes */
export type PostFormatConnection = {
  /** A list of edges (relational context) between RootQuery and connected postFormat Nodes */
  edges: Array<PostFormatConnectionEdge>;
  /** A list of connected postFormat Nodes */
  nodes: Array<PostFormat>;
};

/** Edge between a Node and a connected postFormat */
export type PostFormatConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected postFormat Node */
  node: PostFormat;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostFormatIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Connection between the PostFormat type and the ContentNode type */
export type PostFormatToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'PostFormatToContentNodeConnection';
    /** Edges for the PostFormatToContentNodeConnection connection */
    edges: Array<PostFormatToContentNodeConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type PostFormatToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'PostFormatToContentNodeConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: ContentNode;
  };

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type PostFormatToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfPostFormatEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the PostFormat type and the post type */
export type PostFormatToPostConnection = Connection &
  PostConnection & {
    __typename?: 'PostFormatToPostConnection';
    /** Edges for the PostFormatToPostConnection connection */
    edges: Array<PostFormatToPostConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'PostFormatToPostConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Post;
  };

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the PostFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnectionEdge = Edge &
  OneToOneConnection &
  TaxonomyConnectionEdge & {
    __typename?: 'PostFormatToTaxonomyConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: Taxonomy;
  };

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

export type PostModulesUnionType =
  | EventSearch
  | EventSearchCarousel
  | EventSelected
  | EventSelectedCarousel
  | LayoutArticleHighlights
  | LayoutArticles
  | LayoutArticlesCarousel
  | LayoutCards
  | LayoutCollection
  | LayoutContact
  | LayoutContent
  | LayoutPages
  | LayoutPagesCarousel
  | LocationsSelected
  | LocationsSelectedCarousel;

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
  /** Provide the field value directly from database. Null on unauthenticated requests. */
  Raw = 'RAW',
  /** Provide the field value as rendered by WordPress. Default. */
  Rendered = 'RENDERED',
}

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
  /** The date the comment was created in local time. */
  Date = 'DATE',
  /** The most recent modification date of the comment. */
  Modified = 'MODIFIED',
}

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = 'AUTHOR',
  /** Order by the number of comments it has acquired */
  CommentCount = 'COMMENT_COUNT',
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by title */
  Title = 'TITLE',
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
  /** The field to order the connection by */
  field: PostObjectsConnectionOrderbyEnum;
  /** Possible directions in which to order a list of items */
  order: OrderEnum;
};

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']>;
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']>;
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']>;
};

export type PostSidebarUnionType =
  | LayoutArticles
  | LayoutCards
  | LayoutLinkList
  | LayoutPages;

/** The status of the object. */
export enum PostStatusEnum {
  /** Objects with the acf-disabled status */
  AcfDisabled = 'ACF_DISABLED',
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the dp-rewrite-republish status */
  DpRewriteRepublish = 'DP_REWRITE_REPUBLISH',
  /** Objects with the draft status */
  Draft = 'DRAFT',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the pending status */
  Pending = 'PENDING',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the publish status */
  Publish = 'PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Objects with the trash status */
  Trash = 'TRASH',
  /** Objects with the wp_stream_disabled status */
  WpStreamDisabled = 'WP_STREAM_DISABLED',
  /** Objects with the wp_stream_enabled status */
  WpStreamEnabled = 'WP_STREAM_ENABLED',
}

/** Set relationships between the post to tags */
export type PostTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostTagsNodeInput>>>;
};

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']>;
};

/** Connection between the Post type and the category type */
export type PostToCategoryConnection = CategoryConnection &
  Connection & {
    __typename?: 'PostToCategoryConnection';
    /** Edges for the PostToCategoryConnection connection */
    edges: Array<PostToCategoryConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Category>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type PostToCategoryConnectionEdge = CategoryConnectionEdge &
  Edge & {
    __typename?: 'PostToCategoryConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Category;
  };

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Post type and the postFormat type */
export type PostToPostFormatConnection = Connection &
  PostFormatConnection & {
    __typename?: 'PostToPostFormatConnection';
    /** Edges for the PostToPostFormatConnection connection */
    edges: Array<PostToPostFormatConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<PostFormat>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = Edge &
  PostFormatConnectionEdge & {
    __typename?: 'PostToPostFormatConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: PostFormat;
  };

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Post type and the post type */
export type PostToPreviewConnectionEdge = Edge &
  OneToOneConnection &
  PostConnectionEdge & {
    __typename?: 'PostToPreviewConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: Post;
  };

/** Connection between the Post type and the post type */
export type PostToRevisionConnection = Connection &
  PostConnection & {
    __typename?: 'PostToRevisionConnection';
    /** Edges for the PostToRevisionConnection connection */
    edges: Array<PostToRevisionConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type PostToRevisionConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'PostToRevisionConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Post;
  };

/** Arguments for filtering the PostToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Post type and the tag type */
export type PostToTagConnection = Connection &
  TagConnection & {
    __typename?: 'PostToTagConnection';
    /** Edges for the PostToTagConnection connection */
    edges: Array<PostToTagConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Tag>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type PostToTagConnectionEdge = Edge &
  TagConnectionEdge & {
    __typename?: 'PostToTagConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Tag;
  };

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Post type and the TermNode type */
export type PostToTermNodeConnection = Connection &
  TermNodeConnection & {
    __typename?: 'PostToTermNodeConnection';
    /** Edges for the PostToTermNodeConnection connection */
    edges: Array<PostToTermNodeConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<TermNode>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type PostToTermNodeConnectionEdge = Edge &
  TermNodeConnectionEdge & {
    __typename?: 'PostToTermNodeConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: TermNode;
  };

/** Arguments for filtering the PostToTermNodeConnection connection */
export type PostToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
  __typename?: 'PostTypeLabelDetails';
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<Scalars['String']>;
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<Scalars['String']>;
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<Scalars['String']>;
  /** Label for archives in nav menus */
  archives?: Maybe<Scalars['String']>;
  /** Label for the attributes meta box. */
  attributes?: Maybe<Scalars['String']>;
  /** Label for editing a singular item. */
  editItem?: Maybe<Scalars['String']>;
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<Scalars['String']>;
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<Scalars['String']>;
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<Scalars['String']>;
  /** Label for the table hidden heading. */
  itemsList?: Maybe<Scalars['String']>;
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<Scalars['String']>;
  /** Label for the menu name. */
  menuName?: Maybe<Scalars['String']>;
  /** General name for the post type, usually plural. */
  name?: Maybe<Scalars['String']>;
  /** Label for the new item page title. */
  newItem?: Maybe<Scalars['String']>;
  /** Label used when no items are found. */
  notFound?: Maybe<Scalars['String']>;
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<Scalars['String']>;
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<Scalars['String']>;
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for searching plural items. */
  searchItems?: Maybe<Scalars['String']>;
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<Scalars['String']>;
  /** Name for one object of this post type. */
  singularName?: Maybe<Scalars['String']>;
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<Scalars['String']>;
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for viewing a singular item. */
  viewItem?: Maybe<Scalars['String']>;
  /** Label for viewing post type archives. */
  viewItems?: Maybe<Scalars['String']>;
};

/** Nodes that can be seen in a preview (unpublished) state. */
export type Previewable = {
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
};

/** The reading setting type */
export type ReadingSettings = {
  __typename?: 'ReadingSettings';
  /** Tunniste sivusta, joka näyttää uusimmat artikkelit */
  pageForPosts?: Maybe<Scalars['Int']>;
  /** Tunniste sivusta, joka näytetään etusivulla */
  pageOnFront?: Maybe<Scalars['Int']>;
  /** Näytä enintään */
  postsPerPage?: Maybe<Scalars['Int']>;
  /** Mitä näytetään etusivulla */
  showOnFront?: Maybe<Scalars['String']>;
};

/** Input for the registerUser mutation. */
export type RegisterUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']>;
  /** A string that contains the user's username. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']>;
};

/** The payload for the registerUser mutation. */
export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
  /** The logical AND condition returns true if both operands are true, otherwise, it returns false. */
  And = 'AND',
  /** The logical OR condition returns false if both operands are false, otherwise, it returns true. */
  Or = 'OR',
}

/** The release type */
export type Release = ContentNode &
  DatabaseIdentifier &
  Node &
  NodeWithContentEditor &
  NodeWithRevisions &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable & {
    __typename?: 'Release';
    /** The content of the post. */
    content?: Maybe<Scalars['String']>;
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String'];
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int'];
    /** Post publishing date. */
    date?: Maybe<Scalars['String']>;
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']>;
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']>;
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']>;
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
    /** Vanhentumisaika */
    expirationTime?: Maybe<Scalars['String']>;
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']>;
    /** The globally unique identifier of the release-cpt object. */
    id: Scalars['ID'];
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean'];
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']>;
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** True if the node is a revision of another node */
    isRevision?: Maybe<Scalars['Boolean']>;
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean'];
    /** Polylang language */
    language?: Maybe<Language>;
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
    /** The permalink of the post */
    link?: Maybe<Scalars['String']>;
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']>;
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']>;
    /** Connection between the Release type and the release type */
    preview?: Maybe<ReleaseToPreviewConnectionEdge>;
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']>;
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    releaseId: Scalars['Int'];
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
    /** Connection between the Release type and the release type */
    revisions?: Maybe<ReleaseToRevisionConnection>;
    /** The SEO Framework data of the release */
    seo?: Maybe<Seo>;
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']>;
    /** The current status of the object */
    status?: Maybe<Scalars['String']>;
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>;
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']>;
    /** Get specific translation version of this object */
    translation?: Maybe<Release>;
    /** List all translated versions of this post */
    translations?: Maybe<Array<Maybe<Release>>>;
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']>;
  };

/** The release type */
export type ReleaseContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The release type */
export type ReleaseEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The release type */
export type ReleaseEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The release type */
export type ReleaseRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReleaseToRevisionConnectionWhereArgs>;
};

/** The release type */
export type ReleaseTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The release type */
export type ReleaseTranslationArgs = {
  language: LanguageCodeEnum;
};

/** Connection to release Nodes */
export type ReleaseConnection = {
  /** A list of edges (relational context) between RootQuery and connected release Nodes */
  edges: Array<ReleaseConnectionEdge>;
  /** A list of connected release Nodes */
  nodes: Array<Release>;
};

/** Edge between a Node and a connected release */
export type ReleaseConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected release Node */
  node: Release;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ReleaseIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Connection between the Release type and the release type */
export type ReleaseToPreviewConnectionEdge = Edge &
  OneToOneConnection &
  ReleaseConnectionEdge & {
    __typename?: 'ReleaseToPreviewConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: Release;
  };

/** Connection between the Release type and the release type */
export type ReleaseToRevisionConnection = Connection &
  ReleaseConnection & {
    __typename?: 'ReleaseToRevisionConnection';
    /** Edges for the ReleaseToRevisionConnection connection */
    edges: Array<ReleaseToRevisionConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Release>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type ReleaseToRevisionConnectionEdge = Edge &
  ReleaseConnectionEdge & {
    __typename?: 'ReleaseToRevisionConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Release;
  };

/** Arguments for filtering the ReleaseToRevisionConnection connection */
export type ReleaseToRevisionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Input for the resetUserPassword mutation. */
export type ResetUserPasswordInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Password reset key */
  key?: InputMaybe<Scalars['String']>;
  /** The user's login (username). */
  login?: InputMaybe<Scalars['String']>;
  /** The new password. */
  password?: InputMaybe<Scalars['String']>;
};

/** The payload for the resetUserPassword mutation. */
export type ResetUserPasswordPayload = {
  __typename?: 'ResetUserPasswordPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** Input for the restoreComment mutation. */
export type RestoreCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the comment to be restored */
  id: Scalars['ID'];
};

/** The payload for the restoreComment mutation. */
export type RestoreCommentPayload = {
  __typename?: 'RestoreCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The restored comment object */
  comment?: Maybe<Comment>;
  /** The ID of the restored comment */
  restoredId?: Maybe<Scalars['ID']>;
};

/** The root mutation */
export type RootMutation = {
  __typename?: 'RootMutation';
  /** The createCategory mutation */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** The createCollection mutation */
  createCollection?: Maybe<CreateCollectionPayload>;
  /** The createComment mutation */
  createComment?: Maybe<CreateCommentPayload>;
  /** The createContact mutation */
  createContact?: Maybe<CreateContactPayload>;
  /** The createLandingPage mutation */
  createLandingPage?: Maybe<CreateLandingPagePayload>;
  /** The createMediaItem mutation */
  createMediaItem?: Maybe<CreateMediaItemPayload>;
  /** The createPage mutation */
  createPage?: Maybe<CreatePagePayload>;
  /** The createPost mutation */
  createPost?: Maybe<CreatePostPayload>;
  /** The createPostFormat mutation */
  createPostFormat?: Maybe<CreatePostFormatPayload>;
  /** The createRelease mutation */
  createRelease?: Maybe<CreateReleasePayload>;
  /** The createTag mutation */
  createTag?: Maybe<CreateTagPayload>;
  /** The createTranslation mutation */
  createTranslation?: Maybe<CreateTranslationPayload>;
  /** The createUser mutation */
  createUser?: Maybe<CreateUserPayload>;
  /** The deleteCategory mutation */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** The deleteCollection mutation */
  deleteCollection?: Maybe<DeleteCollectionPayload>;
  /** The deleteComment mutation */
  deleteComment?: Maybe<DeleteCommentPayload>;
  /** The deleteContact mutation */
  deleteContact?: Maybe<DeleteContactPayload>;
  /** The deleteLandingPage mutation */
  deleteLandingPage?: Maybe<DeleteLandingPagePayload>;
  /** The deleteMediaItem mutation */
  deleteMediaItem?: Maybe<DeleteMediaItemPayload>;
  /** The deletePage mutation */
  deletePage?: Maybe<DeletePagePayload>;
  /** The deletePost mutation */
  deletePost?: Maybe<DeletePostPayload>;
  /** The deletePostFormat mutation */
  deletePostFormat?: Maybe<DeletePostFormatPayload>;
  /** The deleteRelease mutation */
  deleteRelease?: Maybe<DeleteReleasePayload>;
  /** The deleteTag mutation */
  deleteTag?: Maybe<DeleteTagPayload>;
  /** The deleteTranslation mutation */
  deleteTranslation?: Maybe<DeleteTranslationPayload>;
  /** The deleteUser mutation */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Increase the count. */
  increaseCount?: Maybe<Scalars['Int']>;
  /** The registerUser mutation */
  registerUser?: Maybe<RegisterUserPayload>;
  /** The resetUserPassword mutation */
  resetUserPassword?: Maybe<ResetUserPasswordPayload>;
  /** The restoreComment mutation */
  restoreComment?: Maybe<RestoreCommentPayload>;
  /** Send password reset email to user */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
  /** The updateCategory mutation */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** The updateCollection mutation */
  updateCollection?: Maybe<UpdateCollectionPayload>;
  /** The updateComment mutation */
  updateComment?: Maybe<UpdateCommentPayload>;
  /** The updateContact mutation */
  updateContact?: Maybe<UpdateContactPayload>;
  /** The updateLandingPage mutation */
  updateLandingPage?: Maybe<UpdateLandingPagePayload>;
  /** The updateMediaItem mutation */
  updateMediaItem?: Maybe<UpdateMediaItemPayload>;
  /** The updatePage mutation */
  updatePage?: Maybe<UpdatePagePayload>;
  /** The updatePost mutation */
  updatePost?: Maybe<UpdatePostPayload>;
  /** The updatePostFormat mutation */
  updatePostFormat?: Maybe<UpdatePostFormatPayload>;
  /** The updateRelease mutation */
  updateRelease?: Maybe<UpdateReleasePayload>;
  /** The updateSettings mutation */
  updateSettings?: Maybe<UpdateSettingsPayload>;
  /** The updateTag mutation */
  updateTag?: Maybe<UpdateTagPayload>;
  /** The updateTranslation mutation */
  updateTranslation?: Maybe<UpdateTranslationPayload>;
  /** The updateUser mutation */
  updateUser?: Maybe<UpdateUserPayload>;
};

/** The root mutation */
export type RootMutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};

/** The root mutation */
export type RootMutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};

/** The root mutation */
export type RootMutationCreateCommentArgs = {
  input: CreateCommentInput;
};

/** The root mutation */
export type RootMutationCreateContactArgs = {
  input: CreateContactInput;
};

/** The root mutation */
export type RootMutationCreateLandingPageArgs = {
  input: CreateLandingPageInput;
};

/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
  input: CreateMediaItemInput;
};

/** The root mutation */
export type RootMutationCreatePageArgs = {
  input: CreatePageInput;
};

/** The root mutation */
export type RootMutationCreatePostArgs = {
  input: CreatePostInput;
};

/** The root mutation */
export type RootMutationCreatePostFormatArgs = {
  input: CreatePostFormatInput;
};

/** The root mutation */
export type RootMutationCreateReleaseArgs = {
  input: CreateReleaseInput;
};

/** The root mutation */
export type RootMutationCreateTagArgs = {
  input: CreateTagInput;
};

/** The root mutation */
export type RootMutationCreateTranslationArgs = {
  input: CreateTranslationInput;
};

/** The root mutation */
export type RootMutationCreateUserArgs = {
  input: CreateUserInput;
};

/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};

/** The root mutation */
export type RootMutationDeleteCollectionArgs = {
  input: DeleteCollectionInput;
};

/** The root mutation */
export type RootMutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};

/** The root mutation */
export type RootMutationDeleteContactArgs = {
  input: DeleteContactInput;
};

/** The root mutation */
export type RootMutationDeleteLandingPageArgs = {
  input: DeleteLandingPageInput;
};

/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
  input: DeleteMediaItemInput;
};

/** The root mutation */
export type RootMutationDeletePageArgs = {
  input: DeletePageInput;
};

/** The root mutation */
export type RootMutationDeletePostArgs = {
  input: DeletePostInput;
};

/** The root mutation */
export type RootMutationDeletePostFormatArgs = {
  input: DeletePostFormatInput;
};

/** The root mutation */
export type RootMutationDeleteReleaseArgs = {
  input: DeleteReleaseInput;
};

/** The root mutation */
export type RootMutationDeleteTagArgs = {
  input: DeleteTagInput;
};

/** The root mutation */
export type RootMutationDeleteTranslationArgs = {
  input: DeleteTranslationInput;
};

/** The root mutation */
export type RootMutationDeleteUserArgs = {
  input: DeleteUserInput;
};

/** The root mutation */
export type RootMutationIncreaseCountArgs = {
  count?: InputMaybe<Scalars['Int']>;
};

/** The root mutation */
export type RootMutationRegisterUserArgs = {
  input: RegisterUserInput;
};

/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput;
};

/** The root mutation */
export type RootMutationRestoreCommentArgs = {
  input: RestoreCommentInput;
};

/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput;
};

/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};

/** The root mutation */
export type RootMutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
};

/** The root mutation */
export type RootMutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};

/** The root mutation */
export type RootMutationUpdateContactArgs = {
  input: UpdateContactInput;
};

/** The root mutation */
export type RootMutationUpdateLandingPageArgs = {
  input: UpdateLandingPageInput;
};

/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
  input: UpdateMediaItemInput;
};

/** The root mutation */
export type RootMutationUpdatePageArgs = {
  input: UpdatePageInput;
};

/** The root mutation */
export type RootMutationUpdatePostArgs = {
  input: UpdatePostInput;
};

/** The root mutation */
export type RootMutationUpdatePostFormatArgs = {
  input: UpdatePostFormatInput;
};

/** The root mutation */
export type RootMutationUpdateReleaseArgs = {
  input: UpdateReleaseInput;
};

/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
  input: UpdateSettingsInput;
};

/** The root mutation */
export type RootMutationUpdateTagArgs = {
  input: UpdateTagInput;
};

/** The root mutation */
export type RootMutationUpdateTranslationArgs = {
  input: UpdateTranslationInput;
};

/** The root mutation */
export type RootMutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** The root entry point into the Graph */
export type RootQuery = {
  __typename?: 'RootQuery';
  /** Entry point to get all settings for the site */
  allSettings?: Maybe<Settings>;
  /** Connection between the RootQuery type and the category type */
  categories?: Maybe<RootQueryToCategoryConnection>;
  /** A 0bject */
  category?: Maybe<Category>;
  /** An object of the collection Type. Collections */
  collection?: Maybe<Collection>;
  /**
   * A collection object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  collectionBy?: Maybe<Collection>;
  /** Connection between the RootQuery type and the collection type */
  collections?: Maybe<RootQueryToCollectionConnection>;
  /** Returns a Comment */
  comment?: Maybe<Comment>;
  /** Connection between the RootQuery type and the Comment type */
  comments?: Maybe<RootQueryToCommentConnection>;
  /** An object of the contact Type. Contacts */
  contact?: Maybe<Contact>;
  /**
   * A contact object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  contactBy?: Maybe<Contact>;
  /** Connection between the RootQuery type and the contact type */
  contacts?: Maybe<RootQueryToContactConnection>;
  /** A node used to manage content */
  contentNode?: Maybe<ContentNode>;
  /** Connection between the RootQuery type and the ContentNode type */
  contentNodes?: Maybe<RootQueryToContentNodeConnection>;
  /** Fetch a Content Type node by unique Identifier */
  contentType?: Maybe<ContentType>;
  /** Connection between the RootQuery type and the ContentType type */
  contentTypes?: Maybe<RootQueryToContentTypeConnection>;
  /** Default Images */
  defaultImages?: Maybe<DefaultImages>;
  /** Get language list */
  defaultLanguage?: Maybe<Language>;
  /** Fields of the &#039;DiscussionSettings&#039; settings group */
  discussionSettings?: Maybe<DiscussionSettings>;
  /** Fields of the &#039;GeneralSettings&#039; settings group */
  generalSettings?: Maybe<GeneralSettings>;
  /** An object of the landingPage Type. Landing Pages */
  landingPage?: Maybe<LandingPage>;
  /**
   * A landingPage object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  landingPageBy?: Maybe<LandingPage>;
  /** Connection between the RootQuery type and the landingPage type */
  landingPages?: Maybe<RootQueryToLandingPageConnection>;
  /** List available languages */
  languages?: Maybe<Array<Maybe<Language>>>;
  /** An object of the mediaItem Type.  */
  mediaItem?: Maybe<MediaItem>;
  /**
   * A mediaItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  mediaItemBy?: Maybe<MediaItem>;
  /** Connection between the RootQuery type and the mediaItem type */
  mediaItems?: Maybe<RootQueryToMediaItemConnection>;
  /** A WordPress navigation menu */
  menu?: Maybe<Menu>;
  /** A WordPress navigation menu item */
  menuItem?: Maybe<MenuItem>;
  /** Connection between the RootQuery type and the MenuItem type */
  menuItems?: Maybe<RootQueryToMenuItemConnection>;
  /** Connection between the RootQuery type and the Menu type */
  menus?: Maybe<RootQueryToMenuConnection>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Fetches an object given its Unique Resource Identifier */
  nodeByUri?: Maybe<UniformResourceIdentifiable>;
  notification?: Maybe<Notification>;
  /** An object of the page Type.  */
  page?: Maybe<Page>;
  /**
   * A page object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  pageBy?: Maybe<Page>;
  /** Returns ID of page that uses the given template */
  pageByTemplate?: Maybe<Page>;
  /** Connection between the RootQuery type and the page type */
  pages?: Maybe<RootQueryToPageConnection>;
  /** A WordPress plugin */
  plugin?: Maybe<Plugin>;
  /** Connection between the RootQuery type and the Plugin type */
  plugins?: Maybe<RootQueryToPluginConnection>;
  /** An object of the post Type.  */
  post?: Maybe<Post>;
  /**
   * A post object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  postBy?: Maybe<Post>;
  /** A 0bject */
  postFormat?: Maybe<PostFormat>;
  /** Connection between the RootQuery type and the postFormat type */
  postFormats?: Maybe<RootQueryToPostFormatConnection>;
  /** Connection between the RootQuery type and the post type */
  posts?: Maybe<RootQueryToPostConnection>;
  /** Fields of the &#039;ReadingSettings&#039; settings group */
  readingSettings?: Maybe<ReadingSettings>;
  /** Connection between the RootQuery type and the EnqueuedScript type */
  registeredScripts?: Maybe<RootQueryToEnqueuedScriptConnection>;
  /** Connection between the RootQuery type and the EnqueuedStylesheet type */
  registeredStylesheets?: Maybe<RootQueryToEnqueuedStylesheetConnection>;
  /** An object of the release Type. Releases */
  release?: Maybe<Release>;
  /**
   * A release object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  releaseBy?: Maybe<Release>;
  /** Connection between the RootQuery type and the release type */
  releases?: Maybe<RootQueryToReleaseConnection>;
  /** Connection between the RootQuery type and the ContentNode type */
  revisions?: Maybe<RootQueryToRevisionsConnection>;
  /** The SEO Framework settings */
  seoSettings?: Maybe<SeoSettings>;
  /** Site Settings */
  siteSettings?: Maybe<SiteSettings>;
  /** A 0bject */
  tag?: Maybe<Tag>;
  /** Connection between the RootQuery type and the tag type */
  tags?: Maybe<RootQueryToTagConnection>;
  /** Connection between the RootQuery type and the Taxonomy type */
  taxonomies?: Maybe<RootQueryToTaxonomyConnection>;
  /** Fetch a Taxonomy node by unique Identifier */
  taxonomy?: Maybe<Taxonomy>;
  /** A node in a taxonomy used to group and relate content nodes */
  termNode?: Maybe<TermNode>;
  /** Connection between the RootQuery type and the TermNode type */
  terms?: Maybe<RootQueryToTermNodeConnection>;
  /** A Theme object */
  theme?: Maybe<Theme>;
  /** Connection between the RootQuery type and the Theme type */
  themes?: Maybe<RootQueryToThemeConnection>;
  /** Translate string using pll_translate_string() (Polylang) */
  translateString?: Maybe<Scalars['String']>;
  /** An object of the translation Type. Translations */
  translation?: Maybe<Translation>;
  /**
   * A translation object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  translationBy?: Maybe<Translation>;
  /** Connection between the RootQuery type and the translation type */
  translations?: Maybe<RootQueryToTranslationConnection>;
  /** Returns a user */
  user?: Maybe<User>;
  /** Returns a user role */
  userRole?: Maybe<UserRole>;
  /** Connection between the RootQuery type and the UserRole type */
  userRoles?: Maybe<RootQueryToUserRoleConnection>;
  /** Connection between the RootQuery type and the User type */
  users?: Maybe<RootQueryToUserConnection>;
  /** Returns the current user */
  viewer?: Maybe<User>;
  /** Fields of the &#039;WritingSettings&#039; settings group */
  writingSettings?: Maybe<WritingSettings>;
};

/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToCategoryConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<CategoryIdType>;
};

/** The root entry point into the Graph */
export type RootQueryCollectionArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<CollectionIdType>;
};

/** The root entry point into the Graph */
export type RootQueryCollectionByArgs = {
  collectionId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToCollectionConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<CommentNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToCommentConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryContactArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<ContactIdType>;
};

/** The root entry point into the Graph */
export type RootQueryContactByArgs = {
  contactId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryContactsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToContactConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryContentNodeArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  contentType?: InputMaybe<ContentTypeEnum>;
  id: Scalars['ID'];
  idType?: InputMaybe<ContentNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToContentNodeConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryContentTypeArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<ContentTypeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryContentTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The root entry point into the Graph */
export type RootQueryDefaultImagesArgs = {
  language: Scalars['String'];
};

/** The root entry point into the Graph */
export type RootQueryLandingPageArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<LandingPageIdType>;
};

/** The root entry point into the Graph */
export type RootQueryLandingPageByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  landingPageId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryLandingPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToLandingPageConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<MediaItemIdType>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  mediaItemId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToMediaItemConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<MenuNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<MenuItemNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToMenuItemConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToMenuConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

/** The root entry point into the Graph */
export type RootQueryNodeByUriArgs = {
  uri: Scalars['String'];
};

/** The root entry point into the Graph */
export type RootQueryNotificationArgs = {
  language: Scalars['String'];
};

/** The root entry point into the Graph */
export type RootQueryPageArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<PageIdType>;
};

/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  pageId?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryPageByTemplateArgs = {
  language?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<TemplateEnum>;
};

/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPageConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
  id: Scalars['ID'];
};

/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPluginConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPostArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<PostIdType>;
};

/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  postId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryPostFormatArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<PostFormatIdType>;
};

/** The root entry point into the Graph */
export type RootQueryPostFormatsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPostFormatConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPostConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryRegisteredScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The root entry point into the Graph */
export type RootQueryRegisteredStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The root entry point into the Graph */
export type RootQueryReleaseArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<ReleaseIdType>;
};

/** The root entry point into the Graph */
export type RootQueryReleaseByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  releaseId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToReleaseConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToRevisionsConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQuerySiteSettingsArgs = {
  language: Scalars['String'];
};

/** The root entry point into the Graph */
export type RootQueryTagArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<TagIdType>;
};

/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToTagConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryTaxonomiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The root entry point into the Graph */
export type RootQueryTaxonomyArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<TaxonomyIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryTermNodeArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<TermNodeIdTypeEnum>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
};

/** The root entry point into the Graph */
export type RootQueryTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToTermNodeConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
  id: Scalars['ID'];
};

/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The root entry point into the Graph */
export type RootQueryTranslateStringArgs = {
  language: LanguageCodeEnum;
  string: Scalars['String'];
};

/** The root entry point into the Graph */
export type RootQueryTranslationArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<TranslationIdType>;
};

/** The root entry point into the Graph */
export type RootQueryTranslationByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  translationId?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryTranslationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToTranslationConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryUserArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<UserNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
  id: Scalars['ID'];
};

/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToUserConnectionWhereArgs>;
};

/** Connection between the RootQuery type and the category type */
export type RootQueryToCategoryConnection = CategoryConnection &
  Connection & {
    __typename?: 'RootQueryToCategoryConnection';
    /** Edges for the RootQueryToCategoryConnection connection */
    edges: Array<RootQueryToCategoryConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Category>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = CategoryConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToCategoryConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Category;
  };

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter by Categorys by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>;
  /** Filter Categorys by one or more languages (Polylang) */
  languages?: InputMaybe<Array<LanguageCodeEnum>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the collection type */
export type RootQueryToCollectionConnection = CollectionConnection &
  Connection & {
    __typename?: 'RootQueryToCollectionConnection';
    /** Edges for the RootQueryToCollectionConnection connection */
    edges: Array<RootQueryToCollectionConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Collection>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToCollectionConnectionEdge = CollectionConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToCollectionConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Collection;
  };

/** Arguments for filtering the RootQueryToCollectionConnection connection */
export type RootQueryToCollectionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter by Collections by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>;
  /** Filter Collections by one or more languages (Polylang) */
  languages?: InputMaybe<Array<LanguageCodeEnum>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = CommentConnection &
  Connection & {
    __typename?: 'RootQueryToCommentConnection';
    /** Edges for the RootQueryToCommentConnection connection */
    edges: Array<RootQueryToCommentConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Comment>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = CommentConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToCommentConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Comment;
  };

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the contact type */
export type RootQueryToContactConnection = Connection &
  ContactConnection & {
    __typename?: 'RootQueryToContactConnection';
    /** Edges for the RootQueryToContactConnection connection */
    edges: Array<RootQueryToContactConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Contact>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToContactConnectionEdge = ContactConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToContactConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Contact;
  };

/** Arguments for filtering the RootQueryToContactConnection connection */
export type RootQueryToContactConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter by Contacts by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>;
  /** Filter Contacts by one or more languages (Polylang) */
  languages?: InputMaybe<Array<LanguageCodeEnum>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'RootQueryToContentNodeConnection';
    /** Edges for the RootQueryToContentNodeConnection connection */
    edges: Array<RootQueryToContentNodeConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToContentNodeConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: ContentNode;
  };

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter content nodes by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>;
  /** Filter content nodes by one or more languages (Polylang) */
  languages?: InputMaybe<Array<LanguageCodeEnum>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentType type */
export type RootQueryToContentTypeConnection = Connection &
  ContentTypeConnection & {
    __typename?: 'RootQueryToContentTypeConnection';
    /** Edges for the RootQueryToContentTypeConnection connection */
    edges: Array<RootQueryToContentTypeConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentType>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = ContentTypeConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToContentTypeConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: ContentType;
  };

/** Connection between the RootQuery type and the EnqueuedScript type */
export type RootQueryToEnqueuedScriptConnection = Connection &
  EnqueuedScriptConnection & {
    __typename?: 'RootQueryToEnqueuedScriptConnection';
    /** Edges for the RootQueryToEnqueuedScriptConnection connection */
    edges: Array<RootQueryToEnqueuedScriptConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedScript>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToEnqueuedScriptConnectionEdge = Edge &
  EnqueuedScriptConnectionEdge & {
    __typename?: 'RootQueryToEnqueuedScriptConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: EnqueuedScript;
  };

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type RootQueryToEnqueuedStylesheetConnection = Connection &
  EnqueuedStylesheetConnection & {
    __typename?: 'RootQueryToEnqueuedStylesheetConnection';
    /** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
    edges: Array<RootQueryToEnqueuedStylesheetConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedStylesheet>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToEnqueuedStylesheetConnectionEdge = Edge &
  EnqueuedStylesheetConnectionEdge & {
    __typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: EnqueuedStylesheet;
  };

/** Connection between the RootQuery type and the landingPage type */
export type RootQueryToLandingPageConnection = Connection &
  LandingPageConnection & {
    __typename?: 'RootQueryToLandingPageConnection';
    /** Edges for the RootQueryToLandingPageConnection connection */
    edges: Array<RootQueryToLandingPageConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<LandingPage>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToLandingPageConnectionEdge = Edge &
  LandingPageConnectionEdge & {
    __typename?: 'RootQueryToLandingPageConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: LandingPage;
  };

/** Arguments for filtering the RootQueryToLandingPageConnection connection */
export type RootQueryToLandingPageConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter by LandingPages by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>;
  /** Filter LandingPages by one or more languages (Polylang) */
  languages?: InputMaybe<Array<LanguageCodeEnum>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the mediaItem type */
export type RootQueryToMediaItemConnection = Connection &
  MediaItemConnection & {
    __typename?: 'RootQueryToMediaItemConnection';
    /** Edges for the RootQueryToMediaItemConnection connection */
    edges: Array<RootQueryToMediaItemConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<MediaItem>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = Edge &
  MediaItemConnectionEdge & {
    __typename?: 'RootQueryToMediaItemConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: MediaItem;
  };

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter by MediaItems by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>;
  /** Filter MediaItems by one or more languages (Polylang) */
  languages?: InputMaybe<Array<LanguageCodeEnum>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Menu type */
export type RootQueryToMenuConnection = Connection &
  MenuConnection & {
    __typename?: 'RootQueryToMenuConnection';
    /** Edges for the RootQueryToMenuConnection connection */
    edges: Array<RootQueryToMenuConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Menu>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = Edge &
  MenuConnectionEdge & {
    __typename?: 'RootQueryToMenuConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Menu;
  };

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The slug of the menu to query items for */
  slug?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = Connection &
  MenuItemConnection & {
    __typename?: 'RootQueryToMenuItemConnection';
    /** Edges for the RootQueryToMenuItemConnection connection */
    edges: Array<RootQueryToMenuItemConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<MenuItem>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = Edge &
  MenuItemConnectionEdge & {
    __typename?: 'RootQueryToMenuItemConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: MenuItem;
  };

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<LanguageCodeFilterEnum>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the page type */
export type RootQueryToPageConnection = Connection &
  PageConnection & {
    __typename?: 'RootQueryToPageConnection';
    /** Edges for the RootQueryToPageConnection connection */
    edges: Array<RootQueryToPageConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Page>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = Edge &
  PageConnectionEdge & {
    __typename?: 'RootQueryToPageConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Page;
  };

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter by Pages by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>;
  /** Filter Pages by one or more languages (Polylang) */
  languages?: InputMaybe<Array<LanguageCodeEnum>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Plugin type */
export type RootQueryToPluginConnection = Connection &
  PluginConnection & {
    __typename?: 'RootQueryToPluginConnection';
    /** Edges for the RootQueryToPluginConnection connection */
    edges: Array<RootQueryToPluginConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Plugin>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = Edge &
  PluginConnectionEdge & {
    __typename?: 'RootQueryToPluginConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Plugin;
  };

/** Arguments for filtering the RootQueryToPluginConnection connection */
export type RootQueryToPluginConnectionWhereArgs = {
  /** Show plugin based on a keyword search. */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve plugins where plugin status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PluginStatusEnum>>>;
  /** Show plugins with a specific status. */
  status?: InputMaybe<PluginStatusEnum>;
};

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = Connection &
  PostConnection & {
    __typename?: 'RootQueryToPostConnection';
    /** Edges for the RootQueryToPostConnection connection */
    edges: Array<RootQueryToPostConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'RootQueryToPostConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Post;
  };

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter by Posts by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>;
  /** Filter Posts by one or more languages (Polylang) */
  languages?: InputMaybe<Array<LanguageCodeEnum>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = Connection &
  PostFormatConnection & {
    __typename?: 'RootQueryToPostFormatConnection';
    /** Edges for the RootQueryToPostFormatConnection connection */
    edges: Array<RootQueryToPostFormatConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<PostFormat>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = Edge &
  PostFormatConnectionEdge & {
    __typename?: 'RootQueryToPostFormatConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: PostFormat;
  };

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type RootQueryToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the release type */
export type RootQueryToReleaseConnection = Connection &
  ReleaseConnection & {
    __typename?: 'RootQueryToReleaseConnection';
    /** Edges for the RootQueryToReleaseConnection connection */
    edges: Array<RootQueryToReleaseConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Release>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToReleaseConnectionEdge = Edge &
  ReleaseConnectionEdge & {
    __typename?: 'RootQueryToReleaseConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Release;
  };

/** Arguments for filtering the RootQueryToReleaseConnection connection */
export type RootQueryToReleaseConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter by Releases by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>;
  /** Filter Releases by one or more languages (Polylang) */
  languages?: InputMaybe<Array<LanguageCodeEnum>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToRevisionsConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'RootQueryToRevisionsConnection';
    /** Edges for the RootQueryToRevisionsConnection connection */
    edges: Array<RootQueryToRevisionsConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToRevisionsConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'RootQueryToRevisionsConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: ContentNode;
  };

/** Arguments for filtering the RootQueryToRevisionsConnection connection */
export type RootQueryToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the tag type */
export type RootQueryToTagConnection = Connection &
  TagConnection & {
    __typename?: 'RootQueryToTagConnection';
    /** Edges for the RootQueryToTagConnection connection */
    edges: Array<RootQueryToTagConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Tag>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = Edge &
  TagConnectionEdge & {
    __typename?: 'RootQueryToTagConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Tag;
  };

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter by Tags by language code (Polylang) */
  language?: InputMaybe<LanguageCodeFilterEnum>;
  /** Filter Tags by one or more languages (Polylang) */
  languages?: InputMaybe<Array<LanguageCodeEnum>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = Connection &
  TaxonomyConnection & {
    __typename?: 'RootQueryToTaxonomyConnection';
    /** Edges for the RootQueryToTaxonomyConnection connection */
    edges: Array<RootQueryToTaxonomyConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Taxonomy>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = Edge &
  TaxonomyConnectionEdge & {
    __typename?: 'RootQueryToTaxonomyConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Taxonomy;
  };

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = Connection &
  TermNodeConnection & {
    __typename?: 'RootQueryToTermNodeConnection';
    /** Edges for the RootQueryToTermNodeConnection connection */
    edges: Array<RootQueryToTermNodeConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<TermNode>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = Edge &
  TermNodeConnectionEdge & {
    __typename?: 'RootQueryToTermNodeConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: TermNode;
  };

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type RootQueryToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = Connection &
  ThemeConnection & {
    __typename?: 'RootQueryToThemeConnection';
    /** Edges for the RootQueryToThemeConnection connection */
    edges: Array<RootQueryToThemeConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Theme>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = Edge &
  ThemeConnectionEdge & {
    __typename?: 'RootQueryToThemeConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Theme;
  };

/** Connection between the RootQuery type and the translation type */
export type RootQueryToTranslationConnection = Connection &
  TranslationConnection & {
    __typename?: 'RootQueryToTranslationConnection';
    /** Edges for the RootQueryToTranslationConnection connection */
    edges: Array<RootQueryToTranslationConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Translation>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToTranslationConnectionEdge = Edge &
  TranslationConnectionEdge & {
    __typename?: 'RootQueryToTranslationConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Translation;
  };

/** Arguments for filtering the RootQueryToTranslationConnection connection */
export type RootQueryToTranslationConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the User type */
export type RootQueryToUserConnection = Connection &
  UserConnection & {
    __typename?: 'RootQueryToUserConnection';
    /** Edges for the RootQueryToUserConnection connection */
    edges: Array<RootQueryToUserConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<User>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = Edge &
  UserConnectionEdge & {
    __typename?: 'RootQueryToUserConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: User;
  };

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
  /** Array of userIds to exclude. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of userIds to include. */
  include?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The user login. */
  login?: InputMaybe<Scalars['String']>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The user nicename. */
  nicename?: InputMaybe<Scalars['String']>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<UsersConnectionOrderbyInput>>>;
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  role?: InputMaybe<UserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: InputMaybe<
    Array<InputMaybe<UsersConnectionSearchColumnEnum>>
  >;
};

/** Connection between the RootQuery type and the UserRole type */
export type RootQueryToUserRoleConnection = Connection &
  UserRoleConnection & {
    __typename?: 'RootQueryToUserRoleConnection';
    /** Edges for the RootQueryToUserRoleConnection connection */
    edges: Array<RootQueryToUserRoleConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<UserRole>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = Edge &
  UserRoleConnectionEdge & {
    __typename?: 'RootQueryToUserRoleConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: UserRole;
  };

export type Seo = {
  __typename?: 'SEO';
  /** Canonical URL */
  canonicalUrl?: Maybe<Scalars['String']>;
  /** SEO Description */
  description?: Maybe<Scalars['String']>;
  /** Whether this page should be excluded from all archive queries */
  excludeFromArchive?: Maybe<Scalars['Boolean']>;
  /** Whether this page should be excluded from all search queries */
  excludeLocalSearch?: Maybe<Scalars['Boolean']>;
  /** Whether search engines should show cached links of this page */
  noArchive?: Maybe<Scalars['Boolean']>;
  /** Whether search engines should follow the links of this page */
  noFollow?: Maybe<Scalars['Boolean']>;
  /** Whether search engines should index this page */
  noIndex?: Maybe<Scalars['Boolean']>;
  /** Open Graph description */
  openGraphDescription?: Maybe<Scalars['String']>;
  /** Open Graph title */
  openGraphTitle?: Maybe<Scalars['String']>;
  /** Open Graph type (&#039;website&#039;, &#039;article&#039;, ...) */
  openGraphType?: Maybe<Scalars['String']>;
  /** 301 redirect URL to force visitors to another page */
  redirectUrl?: Maybe<Scalars['String']>;
  /** If true, site title is/should not be added to the end of the SEO title */
  removeSiteTitle?: Maybe<Scalars['Boolean']>;
  socialImage?: Maybe<MediaItem>;
  /** SEO Title */
  title?: Maybe<Scalars['String']>;
  /** Twitter description */
  twitterDescription?: Maybe<Scalars['String']>;
  /** Twitter title */
  twitterTitle?: Maybe<Scalars['String']>;
};

/** Input for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string that contains the user's username or email address. */
  username: Scalars['String'];
};

/** The payload for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the mutation completed successfully. This does NOT necessarily mean that an email was sent. */
  success?: Maybe<Scalars['Boolean']>;
  /**
   * The user that the password reset email was sent to
   * @deprecated This field will be removed in a future version of WPGraphQL
   */
  user?: Maybe<User>;
};

export type SeoSettings = {
  __typename?: 'SeoSettings';
  /** Title separator setting for seo titles */
  separator?: Maybe<Scalars['String']>;
};

/** All of the registered settings */
export type Settings = {
  __typename?: 'Settings';
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPageForPosts?: Maybe<Scalars['Int']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPageOnFront?: Maybe<Scalars['Int']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  readingSettingsShowOnFront?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** Settings of the the boolean Settings Group */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

export type SiteSettings = {
  __typename?: 'SiteSettings';
  /** Attachment ID for logo */
  logo?: Maybe<Scalars['String']>;
  /** Identifying name */
  siteName?: Maybe<Scalars['String']>;
};

/** The tag type */
export type Tag = DatabaseIdentifier &
  MenuItemLinkable &
  Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'Tag';
    /** Connection between the Tag type and the ContentNode type */
    contentNodes?: Maybe<TagToContentNodeConnection>;
    /** The number of objects connected to the object */
    count?: Maybe<Scalars['Int']>;
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int'];
    /** The description of the object */
    description?: Maybe<Scalars['String']>;
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
    /** The unique resource identifier path */
    id: Scalars['ID'];
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean'];
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean'];
    /** List available translations for this post */
    language?: Maybe<Language>;
    /** The link to the term */
    link?: Maybe<Scalars['String']>;
    /** The human friendly name of the object. */
    name?: Maybe<Scalars['String']>;
    /** Connection between the Tag type and the post type */
    posts?: Maybe<TagToPostConnection>;
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars['String']>;
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of databaseId
     */
    tagId?: Maybe<Scalars['Int']>;
    /** Connection between the Tag type and the Taxonomy type */
    taxonomy?: Maybe<TagToTaxonomyConnectionEdge>;
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: Maybe<Scalars['String']>;
    /** The ID of the term group that this term object belongs to */
    termGroupId?: Maybe<Scalars['Int']>;
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: Maybe<Scalars['Int']>;
    /** Get specific translation version of this object */
    translation?: Maybe<Tag>;
    /** List all translated versions of this term */
    translations?: Maybe<Array<Maybe<Tag>>>;
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']>;
  };

/** The tag type */
export type TagContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagToContentNodeConnectionWhereArgs>;
};

/** The tag type */
export type TagEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The tag type */
export type TagEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The tag type */
export type TagPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagToPostConnectionWhereArgs>;
};

/** The tag type */
export type TagTranslationArgs = {
  language: LanguageCodeEnum;
};

/** Connection to tag Nodes */
export type TagConnection = {
  /** A list of edges (relational context) between RootQuery and connected tag Nodes */
  edges: Array<TagConnectionEdge>;
  /** A list of connected tag Nodes */
  nodes: Array<Tag>;
};

/** Edge between a Node and a connected tag */
export type TagConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected tag Node */
  node: Tag;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Connection between the Tag type and the ContentNode type */
export type TagToContentNodeConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'TagToContentNodeConnection';
    /** Edges for the TagToContentNodeConnection connection */
    edges: Array<TagToContentNodeConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type TagToContentNodeConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'TagToContentNodeConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: ContentNode;
  };

/** Arguments for filtering the TagToContentNodeConnection connection */
export type TagToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfTagEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Tag type and the post type */
export type TagToPostConnection = Connection &
  PostConnection & {
    __typename?: 'TagToPostConnection';
    /** Edges for the TagToPostConnection connection */
    edges: Array<TagToPostConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type TagToPostConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'TagToPostConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Post;
  };

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Tag type and the Taxonomy type */
export type TagToTaxonomyConnectionEdge = Edge &
  OneToOneConnection &
  TaxonomyConnectionEdge & {
    __typename?: 'TagToTaxonomyConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: Taxonomy;
  };

/** A taxonomy object */
export type Taxonomy = Node & {
  __typename?: 'Taxonomy';
  /** List of Content Types associated with the Taxonomy */
  connectedContentTypes?: Maybe<TaxonomyToContentTypeConnection>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description?: Maybe<Scalars['String']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the taxonomy object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<Scalars['String']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<Scalars['Boolean']>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud?: Maybe<Scalars['Boolean']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<Scalars['Boolean']>;
};

/** A taxonomy object */
export type TaxonomyConnectedContentTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Connection to Taxonomy Nodes */
export type TaxonomyConnection = {
  /** A list of edges (relational context) between RootQuery and connected Taxonomy Nodes */
  edges: Array<TaxonomyConnectionEdge>;
  /** A list of connected Taxonomy Nodes */
  nodes: Array<Taxonomy>;
};

/** Edge between a Node and a connected Taxonomy */
export type TaxonomyConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Taxonomy Node */
  node: Taxonomy;
};

/** Allowed taxonomies */
export enum TaxonomyEnum {
  /** Taxonomy enum category */
  Category = 'CATEGORY',
  /** Taxonomy enum post_format */
  Postformat = 'POSTFORMAT',
  /** Taxonomy enum post_tag */
  Tag = 'TAG',
}

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export enum TaxonomyIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the taxonomy */
  Name = 'NAME',
}

/** Connection between the Taxonomy type and the ContentType type */
export type TaxonomyToContentTypeConnection = Connection &
  ContentTypeConnection & {
    __typename?: 'TaxonomyToContentTypeConnection';
    /** Edges for the TaxonomyToContentTypeConnection connection */
    edges: Array<TaxonomyToContentTypeConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentType>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type TaxonomyToContentTypeConnectionEdge = ContentTypeConnectionEdge &
  Edge & {
    __typename?: 'TaxonomyToContentTypeConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: ContentType;
  };

/** Get page object by template */
export enum TemplateEnum {
  FrontPage = 'frontPage',
  PostsPage = 'postsPage',
}

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNode = {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Connection to TermNode Nodes */
export type TermNodeConnection = {
  /** A list of edges (relational context) between RootQuery and connected TermNode Nodes */
  edges: Array<TermNodeConnectionEdge>;
  /** A list of connected TermNode Nodes */
  nodes: Array<TermNode>;
};

/** Edge between a Node and a connected TermNode */
export type TermNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected TermNode Node */
  node: TermNode;
};

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum TermNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Connection between the TermNode type and the EnqueuedScript type */
export type TermNodeToEnqueuedScriptConnection = Connection &
  EnqueuedScriptConnection & {
    __typename?: 'TermNodeToEnqueuedScriptConnection';
    /** Edges for the TermNodeToEnqueuedScriptConnection connection */
    edges: Array<TermNodeToEnqueuedScriptConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedScript>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type TermNodeToEnqueuedScriptConnectionEdge = Edge &
  EnqueuedScriptConnectionEdge & {
    __typename?: 'TermNodeToEnqueuedScriptConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: EnqueuedScript;
  };

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type TermNodeToEnqueuedStylesheetConnection = Connection &
  EnqueuedStylesheetConnection & {
    __typename?: 'TermNodeToEnqueuedStylesheetConnection';
    /** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
    edges: Array<TermNodeToEnqueuedStylesheetConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedStylesheet>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type TermNodeToEnqueuedStylesheetConnectionEdge = Edge &
  EnqueuedStylesheetConnectionEdge & {
    __typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: EnqueuedStylesheet;
  };

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
  /** Order the connection by item count. */
  Count = 'COUNT',
  /** Order the connection by description. */
  Description = 'DESCRIPTION',
  /** Order the connection by name. */
  Name = 'NAME',
  /** Order the connection by slug. */
  Slug = 'SLUG',
  /** Order the connection by term group. */
  TermGroup = 'TERM_GROUP',
  /** Order the connection by term id. */
  TermId = 'TERM_ID',
  /** Order the connection by term order. */
  TermOrder = 'TERM_ORDER',
}

/** A theme object */
export type Theme = Node & {
  __typename?: 'Theme';
  /** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
  author?: Maybe<Scalars['String']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
  authorUri?: Maybe<Scalars['String']>;
  /** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the theme object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
  name?: Maybe<Scalars['String']>;
  /** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
  screenshot?: Maybe<Scalars['String']>;
  /** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
  slug?: Maybe<Scalars['String']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
  themeUri?: Maybe<Scalars['String']>;
  /** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
  version?: Maybe<Scalars['String']>;
};

/** Connection to Theme Nodes */
export type ThemeConnection = {
  /** A list of edges (relational context) between RootQuery and connected Theme Nodes */
  edges: Array<ThemeConnectionEdge>;
  /** A list of connected Theme Nodes */
  nodes: Array<Theme>;
};

/** Edge between a Node and a connected Theme */
export type ThemeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Theme Node */
  node: Theme;
};

/** The translation type */
export type Translation = ContentNode &
  DatabaseIdentifier &
  Node &
  NodeWithRevisions &
  NodeWithTemplate &
  NodeWithTitle &
  Previewable &
  UniformResourceIdentifiable & {
    __typename?: 'Translation';
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String'];
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int'];
    /** Post publishing date. */
    date?: Maybe<Scalars['String']>;
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars['String']>;
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars['String']>;
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars['String']>;
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: Maybe<Scalars['String']>;
    /** The globally unique identifier of the translation-cpt object. */
    id: Scalars['ID'];
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean'];
    /** Whether the object is a node in the preview state */
    isPreview?: Maybe<Scalars['Boolean']>;
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** True if the node is a revision of another node */
    isRevision?: Maybe<Scalars['Boolean']>;
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean'];
    /** The user that most recently edited the node */
    lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
    /** The permalink of the post */
    link?: Maybe<Scalars['String']>;
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: Maybe<Scalars['String']>;
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: Maybe<Scalars['String']>;
    /** Connection between the Translation type and the translation type */
    preview?: Maybe<TranslationToPreviewConnectionEdge>;
    /** The database id of the preview node */
    previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
    /** Whether the object is a node in the preview state */
    previewRevisionId?: Maybe<Scalars['ID']>;
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
    /** Connection between the Translation type and the translation type */
    revisions?: Maybe<TranslationToRevisionConnection>;
    /** The SEO Framework data of the translation */
    seo?: Maybe<Seo>;
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: Maybe<Scalars['String']>;
    /** The current status of the object */
    status?: Maybe<Scalars['String']>;
    /** The template assigned to the node */
    template?: Maybe<ContentTemplate>;
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars['String']>;
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    translationId: Scalars['Int'];
    /** Translations */
    translations?: Maybe<Array<Maybe<TranslationResponse>>>;
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']>;
  };

/** The translation type */
export type TranslationEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The translation type */
export type TranslationEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The translation type */
export type TranslationRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TranslationToRevisionConnectionWhereArgs>;
};

/** The translation type */
export type TranslationTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to translation Nodes */
export type TranslationConnection = {
  /** A list of edges (relational context) between RootQuery and connected translation Nodes */
  edges: Array<TranslationConnectionEdge>;
  /** A list of connected translation Nodes */
  nodes: Array<Translation>;
};

/** Edge between a Node and a connected translation */
export type TranslationConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected translation Node */
  node: Translation;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TranslationIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Translation with language/value pairs */
export type TranslationItems = {
  __typename?: 'TranslationItems';
  /** Translation string */
  en?: Maybe<Scalars['String']>;
  /** Translation string */
  fi?: Maybe<Scalars['String']>;
  /** Translation string */
  sv?: Maybe<Scalars['String']>;
};

/** Translation response contains translation key and translations */
export type TranslationResponse = {
  __typename?: 'TranslationResponse';
  /** Translation key for frontend */
  key?: Maybe<Scalars['String']>;
  /** Translations for frontend */
  translations?: Maybe<TranslationItems>;
};

/** Connection between the Translation type and the translation type */
export type TranslationToPreviewConnectionEdge = Edge &
  OneToOneConnection &
  TranslationConnectionEdge & {
    __typename?: 'TranslationToPreviewConnectionEdge';
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: Maybe<Scalars['String']>;
    /** The node of the connection, without the edges */
    node: Translation;
  };

/** Connection between the Translation type and the translation type */
export type TranslationToRevisionConnection = Connection &
  TranslationConnection & {
    __typename?: 'TranslationToRevisionConnection';
    /** Edges for the TranslationToRevisionConnection connection */
    edges: Array<TranslationToRevisionConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Translation>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type TranslationToRevisionConnectionEdge = Edge &
  TranslationConnectionEdge & {
    __typename?: 'TranslationToRevisionConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Translation;
  };

/** Arguments for filtering the TranslationToRevisionConnection connection */
export type TranslationToRevisionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Any node that has a URI */
export type UniformResourceIdentifiable = {
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Input for the updateCategory mutation. */
export type UpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the category object */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the category object to update */
  id: Scalars['ID'];
  language?: InputMaybe<LanguageCodeEnum>;
  /** The name of the category object to mutate */
  name?: InputMaybe<Scalars['String']>;
  /** The ID of the category that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateCategory mutation. */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  /** The created category */
  category?: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the updateCollection mutation. */
export type UpdateCollectionInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the collection object */
  id: Scalars['ID'];
  language?: InputMaybe<LanguageCodeEnum>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateCollection mutation. */
export type UpdateCollectionPayload = {
  __typename?: 'UpdateCollectionPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  collection?: Maybe<Collection>;
};

/** Input for the updateComment mutation. */
export type UpdateCommentInput = {
  /** The approval status of the comment. */
  approved?: InputMaybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: InputMaybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The database ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the comment being updated. */
  id: Scalars['ID'];
  /** Parent comment ID of current comment. */
  parent?: InputMaybe<Scalars['ID']>;
  /** The approval status of the comment */
  status?: InputMaybe<CommentStatusEnum>;
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateComment mutation. */
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment that was created */
  comment?: Maybe<Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<Scalars['Boolean']>;
};

/** Input for the updateContact mutation. */
export type UpdateContactInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the contact object */
  id: Scalars['ID'];
  language?: InputMaybe<LanguageCodeEnum>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateContact mutation. */
export type UpdateContactPayload = {
  __typename?: 'UpdateContactPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  contact?: Maybe<Contact>;
};

/** Input for the updateLandingPage mutation. */
export type UpdateLandingPageInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the landingPage object */
  id: Scalars['ID'];
  language?: InputMaybe<LanguageCodeEnum>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateLandingPage mutation. */
export type UpdateLandingPagePayload = {
  __typename?: 'UpdateLandingPagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  landingPage?: Maybe<LandingPage>;
};

/** Input for the updateMediaItem mutation. */
export type UpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: InputMaybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: InputMaybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: InputMaybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: InputMaybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: InputMaybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: InputMaybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: InputMaybe<MimeTypeEnum>;
  /** The ID of the mediaItem object */
  id: Scalars['ID'];
  language?: InputMaybe<LanguageCodeEnum>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: InputMaybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: InputMaybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateMediaItem mutation. */
export type UpdateMediaItemPayload = {
  __typename?: 'UpdateMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the updatePage mutation. */
export type UpdatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the page object */
  id: Scalars['ID'];
  language?: InputMaybe<LanguageCodeEnum>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updatePage mutation. */
export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  page?: Maybe<Page>;
};

/** Input for the updatePostFormat mutation. */
export type UpdatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_format object */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the postFormat object to update */
  id: Scalars['ID'];
  /** The name of the post_format object to mutate */
  name?: InputMaybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the updatePostFormat mutation. */
export type UpdatePostFormatPayload = {
  __typename?: 'UpdatePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_format */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the updatePost mutation. */
export type UpdatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: InputMaybe<PostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the post object */
  id: Scalars['ID'];
  language?: InputMaybe<LanguageCodeEnum>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** Set connections between the post and postFormats */
  postFormats?: InputMaybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: InputMaybe<PostTagsInput>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updatePost mutation. */
export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  post?: Maybe<Post>;
};

/** Input for the updateRelease mutation. */
export type UpdateReleaseInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the release object */
  id: Scalars['ID'];
  language?: InputMaybe<LanguageCodeEnum>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateRelease mutation. */
export type UpdateReleasePayload = {
  __typename?: 'UpdateReleasePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  release?: Maybe<Release>;
};

/** Input for the updateSettings mutation. */
export type UpdateSettingsInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Salli uusien artikkelien kommentointi. */
  discussionSettingsDefaultCommentStatus?: InputMaybe<Scalars['String']>;
  /** Salli linkki-ilmoitukset muista blogeista (pingback ja trackback) uusiin artikkeleihin. */
  discussionSettingsDefaultPingStatus?: InputMaybe<Scalars['String']>;
  /** Muoto kaikille päivämäärän merkkijonoille. */
  generalSettingsDateFormat?: InputMaybe<Scalars['String']>;
  /** Sivuston kuvaus. */
  generalSettingsDescription?: InputMaybe<Scalars['String']>;
  /** WordPressin kieli- ja maakoodi. */
  generalSettingsLanguage?: InputMaybe<Scalars['String']>;
  /** Viikonpäivän numero josta viikko alkaa. */
  generalSettingsStartOfWeek?: InputMaybe<Scalars['Int']>;
  /** Muoto kaikille kellonajan merkkijonoille. */
  generalSettingsTimeFormat?: InputMaybe<Scalars['String']>;
  /** Kaupunki samalla aikavyöhykkeellä kuin sinä. */
  generalSettingsTimezone?: InputMaybe<Scalars['String']>;
  /** Sivuston otsikko. */
  generalSettingsTitle?: InputMaybe<Scalars['String']>;
  /** Tunniste sivusta, joka näyttää uusimmat artikkelit */
  readingSettingsPageForPosts?: InputMaybe<Scalars['Int']>;
  /** Tunniste sivusta, joka näytetään etusivulla */
  readingSettingsPageOnFront?: InputMaybe<Scalars['Int']>;
  /** Näytä enintään */
  readingSettingsPostsPerPage?: InputMaybe<Scalars['Int']>;
  /** Mitä näytetään etusivulla */
  readingSettingsShowOnFront?: InputMaybe<Scalars['String']>;
  /** Oletuskategoria artikkeleille. */
  writingSettingsDefaultCategory?: InputMaybe<Scalars['Int']>;
  /** Artikkelisivujen oletusmuoto. */
  writingSettingsDefaultPostFormat?: InputMaybe<Scalars['String']>;
  /** Muunna hymiöt kuviksi. */
  writingSettingsUseSmilies?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the updateSettings mutation. */
export type UpdateSettingsPayload = {
  __typename?: 'UpdateSettingsPayload';
  /** Update all settings. */
  allSettings?: Maybe<Settings>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Update the DiscussionSettings setting. */
  discussionSettings?: Maybe<DiscussionSettings>;
  /** Update the GeneralSettings setting. */
  generalSettings?: Maybe<GeneralSettings>;
  /** Update the ReadingSettings setting. */
  readingSettings?: Maybe<ReadingSettings>;
  /** Update the WritingSettings setting. */
  writingSettings?: Maybe<WritingSettings>;
};

/** Input for the updateTag mutation. */
export type UpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_tag object */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the tag object to update */
  id: Scalars['ID'];
  language?: InputMaybe<LanguageCodeEnum>;
  /** The name of the post_tag object to mutate */
  name?: InputMaybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateTag mutation. */
export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_tag */
  tag?: Maybe<Tag>;
};

/** Input for the updateTranslation mutation. */
export type UpdateTranslationInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the translation object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateTranslation mutation. */
export type UpdateTranslationPayload = {
  __typename?: 'UpdateTranslationPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  translation?: Maybe<Translation>;
};

/** Input for the updateUser mutation. */
export type UpdateUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The ID of the user */
  id: Scalars['ID'];
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateUser mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** A User object */
export type User = Commenter &
  DatabaseIdentifier &
  Node &
  UniformResourceIdentifiable & {
    __typename?: 'User';
    /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
    avatar?: Maybe<Avatar>;
    /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
    capKey?: Maybe<Scalars['String']>;
    /** A list of capabilities (permissions) granted to the user */
    capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** Connection between the User type and the Comment type */
    comments?: Maybe<UserToCommentConnection>;
    /** Identifies the primary key from the database. */
    databaseId: Scalars['Int'];
    /** Description of the user. */
    description?: Maybe<Scalars['String']>;
    /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
    email?: Maybe<Scalars['String']>;
    /** Connection between the User type and the EnqueuedScript type */
    enqueuedScripts?: Maybe<UserToEnqueuedScriptConnection>;
    /** Connection between the User type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: Maybe<UserToEnqueuedStylesheetConnection>;
    /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
    extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
    firstName?: Maybe<Scalars['String']>;
    /** The globally unique identifier for the user object. */
    id: Scalars['ID'];
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean'];
    /** Whether the object is restricted from the current viewer */
    isRestricted?: Maybe<Scalars['Boolean']>;
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean'];
    /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
    lastName?: Maybe<Scalars['String']>;
    /** The preferred language locale set for the user. Value derived from get_user_locale(). */
    locale?: Maybe<Scalars['String']>;
    /** Connection between the User type and the mediaItem type */
    mediaItems?: Maybe<UserToMediaItemConnection>;
    /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
    name?: Maybe<Scalars['String']>;
    /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
    nicename?: Maybe<Scalars['String']>;
    /** Nickname of the user. */
    nickname?: Maybe<Scalars['String']>;
    /** Connection between the User type and the page type */
    pages?: Maybe<UserToPageConnection>;
    /** Connection between the User type and the post type */
    posts?: Maybe<UserToPostConnection>;
    /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
    registeredDate?: Maybe<Scalars['String']>;
    /** Connection between the User and Revisions authored by the user */
    revisions?: Maybe<UserToRevisionsConnection>;
    /** Connection between the User type and the UserRole type */
    roles?: Maybe<UserToUserRoleConnection>;
    /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
    slug?: Maybe<Scalars['String']>;
    /** The unique resource identifier path */
    uri?: Maybe<Scalars['String']>;
    /** A website url that is associated with the user. */
    url?: Maybe<Scalars['String']>;
    /**
     * The Id of the user. Equivalent to WP_User-&gt;ID
     * @deprecated Deprecated in favor of the databaseId field
     */
    userId?: Maybe<Scalars['Int']>;
    /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
    username?: Maybe<Scalars['String']>;
  };

/** A User object */
export type UserAvatarArgs = {
  forceDefault?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<AvatarRatingEnum>;
  size?: InputMaybe<Scalars['Int']>;
};

/** A User object */
export type UserCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToCommentConnectionWhereArgs>;
};

/** A User object */
export type UserEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A User object */
export type UserEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A User object */
export type UserMediaItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToMediaItemConnectionWhereArgs>;
};

/** A User object */
export type UserPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToPageConnectionWhereArgs>;
};

/** A User object */
export type UserPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToPostConnectionWhereArgs>;
};

/** A User object */
export type UserRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToRevisionsConnectionWhereArgs>;
};

/** A User object */
export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Connection to User Nodes */
export type UserConnection = {
  /** A list of edges (relational context) between RootQuery and connected User Nodes */
  edges: Array<UserConnectionEdge>;
  /** A list of connected User Nodes */
  nodes: Array<User>;
};

/** Edge between a Node and a connected User */
export type UserConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected User Node */
  node: User;
};

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export enum UserNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The Email of the User */
  Email = 'EMAIL',
  /** The hashed Global ID */
  Id = 'ID',
  /** The slug of the User */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
  /** The username the User uses to login with */
  Username = 'USERNAME',
}

/** A user role object */
export type UserRole = Node & {
  __typename?: 'UserRole';
  /** The capabilities that belong to this role */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The display name of the role */
  displayName?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the user role object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The registered name of the role */
  name?: Maybe<Scalars['String']>;
};

/** Connection to UserRole Nodes */
export type UserRoleConnection = {
  /** A list of edges (relational context) between RootQuery and connected UserRole Nodes */
  edges: Array<UserRoleConnectionEdge>;
  /** A list of connected UserRole Nodes */
  nodes: Array<UserRole>;
};

/** Edge between a Node and a connected UserRole */
export type UserRoleConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected UserRole Node */
  node: UserRole;
};

/** Names of available user roles */
export enum UserRoleEnum {
  /** User role with specific capabilities */
  Administrator = 'ADMINISTRATOR',
  /** User role with specific capabilities */
  Author = 'AUTHOR',
  /** User role with specific capabilities */
  Contributor = 'CONTRIBUTOR',
  /** User role with specific capabilities */
  Editor = 'EDITOR',
  /** User role with specific capabilities */
  HeadlessCmsAdmin = 'HEADLESS_CMS_ADMIN',
  /** User role with specific capabilities */
  HeadlessCmsContributor = 'HEADLESS_CMS_CONTRIBUTOR',
  /** User role with specific capabilities */
  HeadlessCmsEditor = 'HEADLESS_CMS_EDITOR',
  /** User role with specific capabilities */
  HeadlessCmsViewer = 'HEADLESS_CMS_VIEWER',
  /** User role with specific capabilities */
  Subscriber = 'SUBSCRIBER',
}

/** Connection between the User type and the Comment type */
export type UserToCommentConnection = CommentConnection &
  Connection & {
    __typename?: 'UserToCommentConnection';
    /** Edges for the UserToCommentConnection connection */
    edges: Array<UserToCommentConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Comment>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type UserToCommentConnectionEdge = CommentConnectionEdge &
  Edge & {
    __typename?: 'UserToCommentConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Comment;
  };

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the User type and the EnqueuedScript type */
export type UserToEnqueuedScriptConnection = Connection &
  EnqueuedScriptConnection & {
    __typename?: 'UserToEnqueuedScriptConnection';
    /** Edges for the UserToEnqueuedScriptConnection connection */
    edges: Array<UserToEnqueuedScriptConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedScript>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type UserToEnqueuedScriptConnectionEdge = Edge &
  EnqueuedScriptConnectionEdge & {
    __typename?: 'UserToEnqueuedScriptConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: EnqueuedScript;
  };

/** Connection between the User type and the EnqueuedStylesheet type */
export type UserToEnqueuedStylesheetConnection = Connection &
  EnqueuedStylesheetConnection & {
    __typename?: 'UserToEnqueuedStylesheetConnection';
    /** Edges for the UserToEnqueuedStylesheetConnection connection */
    edges: Array<UserToEnqueuedStylesheetConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<EnqueuedStylesheet>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type UserToEnqueuedStylesheetConnectionEdge = Edge &
  EnqueuedStylesheetConnectionEdge & {
    __typename?: 'UserToEnqueuedStylesheetConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: EnqueuedStylesheet;
  };

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = Connection &
  MediaItemConnection & {
    __typename?: 'UserToMediaItemConnection';
    /** Edges for the UserToMediaItemConnection connection */
    edges: Array<UserToMediaItemConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<MediaItem>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = Edge &
  MediaItemConnectionEdge & {
    __typename?: 'UserToMediaItemConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: MediaItem;
  };

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the page type */
export type UserToPageConnection = Connection &
  PageConnection & {
    __typename?: 'UserToPageConnection';
    /** Edges for the UserToPageConnection connection */
    edges: Array<UserToPageConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Page>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type UserToPageConnectionEdge = Edge &
  PageConnectionEdge & {
    __typename?: 'UserToPageConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Page;
  };

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the post type */
export type UserToPostConnection = Connection &
  PostConnection & {
    __typename?: 'UserToPostConnection';
    /** Edges for the UserToPostConnection connection */
    edges: Array<UserToPostConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<Post>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type UserToPostConnectionEdge = Edge &
  PostConnectionEdge & {
    __typename?: 'UserToPostConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: Post;
  };

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the ContentNode type */
export type UserToRevisionsConnection = Connection &
  ContentNodeConnection & {
    __typename?: 'UserToRevisionsConnection';
    /** Edges for the UserToRevisionsConnection connection */
    edges: Array<UserToRevisionsConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<ContentNode>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type UserToRevisionsConnectionEdge = ContentNodeConnectionEdge &
  Edge & {
    __typename?: 'UserToRevisionsConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: ContentNode;
  };

/** Arguments for filtering the UserToRevisionsConnection connection */
export type UserToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the UserRole type */
export type UserToUserRoleConnection = Connection &
  UserRoleConnection & {
    __typename?: 'UserToUserRoleConnection';
    /** Edges for the UserToUserRoleConnection connection */
    edges: Array<UserToUserRoleConnectionEdge>;
    /** The nodes of the connection, without the edges */
    nodes: Array<UserRole>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
  };

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = Edge &
  UserRoleConnectionEdge & {
    __typename?: 'UserToUserRoleConnectionEdge';
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars['String']>;
    /** The item at the end of the edge */
    node: UserRole;
  };

/** Field to order the connection by */
export enum UsersConnectionOrderbyEnum {
  /** Order by display name */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email address */
  Email = 'EMAIL',
  /** Order by login */
  Login = 'LOGIN',
  /** Preserve the login order given in the LOGIN_IN array */
  LoginIn = 'LOGIN_IN',
  /** Order by nice name */
  NiceName = 'NICE_NAME',
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  NiceNameIn = 'NICE_NAME_IN',
  /** Order by registration date */
  Registered = 'REGISTERED',
  /** Order by URL */
  Url = 'URL',
}

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
  /** The field name used to sort the results. */
  field: UsersConnectionOrderbyEnum;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
};

/** Column used for searching for users. */
export enum UsersConnectionSearchColumnEnum {
  /** The user's email address. */
  Email = 'EMAIL',
  /** The globally unique ID. */
  Id = 'ID',
  /** The username the User uses to login with. */
  Login = 'LOGIN',
  /** A URL-friendly name for the user. The default is the user's username. */
  Nicename = 'NICENAME',
  /** The URL of the user\s website. */
  Url = 'URL',
}

/** Information about pagination in a connection. */
export type WpPageInfo = {
  __typename?: 'WPPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The writing setting type */
export type WritingSettings = {
  __typename?: 'WritingSettings';
  /** Oletuskategoria artikkeleille. */
  defaultCategory?: Maybe<Scalars['Int']>;
  /** Artikkelisivujen oletusmuoto. */
  defaultPostFormat?: Maybe<Scalars['String']>;
  /** Muunna hymiöt kuviksi. */
  useSmilies?: Maybe<Scalars['Boolean']>;
};

export type CategoriesFragment = {
  __typename?: 'PostToCategoryConnection';
  edges: Array<{
    __typename?: 'PostToCategoryConnectionEdge';
    node: { __typename?: 'Category'; id: string; name?: string | null };
  }>;
};

export type PostFragment = {
  __typename?: 'Post';
  id: string;
  date?: string | null;
  content?: string | null;
  slug?: string | null;
  title?: string | null;
  uri?: string | null;
  link?: string | null;
  lead?: string | null;
  categories?: {
    __typename?: 'PostToCategoryConnection';
    edges: Array<{
      __typename?: 'PostToCategoryConnectionEdge';
      node: { __typename?: 'Category'; id: string; name?: string | null };
    }>;
  } | null;
  seo?: {
    __typename?: 'SEO';
    title?: string | null;
    description?: string | null;
    openGraphTitle?: string | null;
    openGraphDescription?: string | null;
    openGraphType?: string | null;
    twitterTitle?: string | null;
    twitterDescription?: string | null;
    canonicalUrl?: string | null;
    socialImage?: {
      __typename?: 'MediaItem';
      mediaItemUrl?: string | null;
    } | null;
  } | null;
  language?: {
    __typename?: 'Language';
    code?: LanguageCodeEnum | null;
    id: string;
    locale?: string | null;
    name?: string | null;
    slug?: string | null;
  } | null;
  translations?: Array<{
    __typename?: 'Post';
    uri?: string | null;
    slug?: string | null;
    language?: {
      __typename?: 'Language';
      code?: LanguageCodeEnum | null;
      id: string;
      locale?: string | null;
      name?: string | null;
      slug?: string | null;
    } | null;
    seo?: {
      __typename?: 'SEO';
      title?: string | null;
      description?: string | null;
      openGraphTitle?: string | null;
      openGraphDescription?: string | null;
      openGraphType?: string | null;
      twitterTitle?: string | null;
      twitterDescription?: string | null;
      canonicalUrl?: string | null;
      socialImage?: {
        __typename?: 'MediaItem';
        mediaItemUrl?: string | null;
      } | null;
    } | null;
  } | null> | null;
  featuredImage?: {
    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
    node: {
      __typename?: 'MediaItem';
      mediaItemUrl?: string | null;
      link?: string | null;
      altText?: string | null;
      mimeType?: string | null;
      title?: string | null;
      uri?: string | null;
    };
  } | null;
  sidebar?: Array<
    | {
        __typename: 'LayoutArticles';
        title?: string | null;
        showAllLink?: string | null;
        articles?: Array<{
          __typename?: 'Post';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
          categories?: {
            __typename?: 'PostToCategoryConnection';
            nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
          } | null;
        } | null> | null;
      }
    | { __typename?: 'LayoutCards' }
    | {
        __typename: 'LayoutLinkList';
        anchor?: string | null;
        title?: string | null;
        description?: string | null;
        links?: Array<{
          __typename?: 'Link';
          target?: string | null;
          title?: string | null;
          url?: string | null;
        } | null> | null;
      }
    | {
        __typename: 'LayoutPages';
        title?: string | null;
        description?: string | null;
        pages?: Array<{
          __typename?: 'Page';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
        } | null> | null;
      }
    | null
  > | null;
  modules?: Array<
    | {
        __typename: 'EventSearch';
        title?: string | null;
        url?: string | null;
        module?: string | null;
        showAllLink?: string | null;
      }
    | {
        __typename: 'EventSearchCarousel';
        title?: string | null;
        url?: string | null;
        orderNewestFirst?: boolean | null;
        eventsNearby?: boolean | null;
        amountOfCards?: number | null;
        showAllLink?: string | null;
      }
    | {
        __typename: 'EventSelected';
        title?: string | null;
        events?: Array<string | null> | null;
        module?: string | null;
      }
    | {
        __typename: 'EventSelectedCarousel';
        title?: string | null;
        module?: string | null;
        eventsNearby?: boolean | null;
        events?: Array<string | null> | null;
        amountOfCardsPerRow?: number | null;
        amountOfCards?: number | null;
      }
    | { __typename?: 'LayoutArticleHighlights' }
    | {
        __typename: 'LayoutArticles';
        title?: string | null;
        showAllLink?: string | null;
        articles?: Array<{
          __typename?: 'Post';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
          categories?: {
            __typename?: 'PostToCategoryConnection';
            nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
          } | null;
        } | null> | null;
      }
    | {
        __typename: 'LayoutArticlesCarousel';
        title?: string | null;
        showMore?: Array<string | null> | null;
        showAllLink?: string | null;
        articles?: Array<{
          __typename?: 'Post';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
          categories?: {
            __typename?: 'PostToCategoryConnection';
            nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
          } | null;
        } | null> | null;
      }
    | { __typename?: 'LayoutCards' }
    | {
        __typename: 'LayoutCollection';
        collection?: {
          __typename?: 'Collection';
          title?: string | null;
        } | null;
      }
    | { __typename?: 'LayoutContact' }
    | { __typename?: 'LayoutContent' }
    | {
        __typename: 'LayoutPages';
        title?: string | null;
        description?: string | null;
        pages?: Array<{
          __typename?: 'Page';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
        } | null> | null;
      }
    | {
        __typename: 'LayoutPagesCarousel';
        title?: string | null;
        description?: string | null;
        pages?: Array<{
          __typename?: 'Page';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
        } | null> | null;
      }
    | {
        __typename: 'LocationsSelected';
        title?: string | null;
        locations?: Array<number | null> | null;
        module?: string | null;
      }
    | {
        __typename: 'LocationsSelectedCarousel';
        title?: string | null;
        locations?: Array<number | null> | null;
        module?: string | null;
      }
    | null
  > | null;
};

export type ArticleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type ArticleQuery = {
  __typename?: 'RootQuery';
  post?: {
    __typename?: 'Post';
    id: string;
    date?: string | null;
    content?: string | null;
    slug?: string | null;
    title?: string | null;
    uri?: string | null;
    link?: string | null;
    lead?: string | null;
    categories?: {
      __typename?: 'PostToCategoryConnection';
      edges: Array<{
        __typename?: 'PostToCategoryConnectionEdge';
        node: { __typename?: 'Category'; id: string; name?: string | null };
      }>;
    } | null;
    seo?: {
      __typename?: 'SEO';
      title?: string | null;
      description?: string | null;
      openGraphTitle?: string | null;
      openGraphDescription?: string | null;
      openGraphType?: string | null;
      twitterTitle?: string | null;
      twitterDescription?: string | null;
      canonicalUrl?: string | null;
      socialImage?: {
        __typename?: 'MediaItem';
        mediaItemUrl?: string | null;
      } | null;
    } | null;
    language?: {
      __typename?: 'Language';
      code?: LanguageCodeEnum | null;
      id: string;
      locale?: string | null;
      name?: string | null;
      slug?: string | null;
    } | null;
    translations?: Array<{
      __typename?: 'Post';
      uri?: string | null;
      slug?: string | null;
      language?: {
        __typename?: 'Language';
        code?: LanguageCodeEnum | null;
        id: string;
        locale?: string | null;
        name?: string | null;
        slug?: string | null;
      } | null;
      seo?: {
        __typename?: 'SEO';
        title?: string | null;
        description?: string | null;
        openGraphTitle?: string | null;
        openGraphDescription?: string | null;
        openGraphType?: string | null;
        twitterTitle?: string | null;
        twitterDescription?: string | null;
        canonicalUrl?: string | null;
        socialImage?: {
          __typename?: 'MediaItem';
          mediaItemUrl?: string | null;
        } | null;
      } | null;
    } | null> | null;
    featuredImage?: {
      __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
      node: {
        __typename?: 'MediaItem';
        mediaItemUrl?: string | null;
        link?: string | null;
        altText?: string | null;
        mimeType?: string | null;
        title?: string | null;
        uri?: string | null;
      };
    } | null;
    sidebar?: Array<
      | {
          __typename: 'LayoutArticles';
          title?: string | null;
          showAllLink?: string | null;
          articles?: Array<{
            __typename?: 'Post';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
            categories?: {
              __typename?: 'PostToCategoryConnection';
              nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
            } | null;
          } | null> | null;
        }
      | { __typename?: 'LayoutCards' }
      | {
          __typename: 'LayoutLinkList';
          anchor?: string | null;
          title?: string | null;
          description?: string | null;
          links?: Array<{
            __typename?: 'Link';
            target?: string | null;
            title?: string | null;
            url?: string | null;
          } | null> | null;
        }
      | {
          __typename: 'LayoutPages';
          title?: string | null;
          description?: string | null;
          pages?: Array<{
            __typename?: 'Page';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
          } | null> | null;
        }
      | null
    > | null;
    modules?: Array<
      | {
          __typename: 'EventSearch';
          title?: string | null;
          url?: string | null;
          module?: string | null;
          showAllLink?: string | null;
        }
      | {
          __typename: 'EventSearchCarousel';
          title?: string | null;
          url?: string | null;
          orderNewestFirst?: boolean | null;
          eventsNearby?: boolean | null;
          amountOfCards?: number | null;
          showAllLink?: string | null;
        }
      | {
          __typename: 'EventSelected';
          title?: string | null;
          events?: Array<string | null> | null;
          module?: string | null;
        }
      | {
          __typename: 'EventSelectedCarousel';
          title?: string | null;
          module?: string | null;
          eventsNearby?: boolean | null;
          events?: Array<string | null> | null;
          amountOfCardsPerRow?: number | null;
          amountOfCards?: number | null;
        }
      | { __typename?: 'LayoutArticleHighlights' }
      | {
          __typename: 'LayoutArticles';
          title?: string | null;
          showAllLink?: string | null;
          articles?: Array<{
            __typename?: 'Post';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
            categories?: {
              __typename?: 'PostToCategoryConnection';
              nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
            } | null;
          } | null> | null;
        }
      | {
          __typename: 'LayoutArticlesCarousel';
          title?: string | null;
          showMore?: Array<string | null> | null;
          showAllLink?: string | null;
          articles?: Array<{
            __typename?: 'Post';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
            categories?: {
              __typename?: 'PostToCategoryConnection';
              nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
            } | null;
          } | null> | null;
        }
      | { __typename?: 'LayoutCards' }
      | {
          __typename: 'LayoutCollection';
          collection?: {
            __typename?: 'Collection';
            title?: string | null;
          } | null;
        }
      | { __typename?: 'LayoutContact' }
      | { __typename?: 'LayoutContent' }
      | {
          __typename: 'LayoutPages';
          title?: string | null;
          description?: string | null;
          pages?: Array<{
            __typename?: 'Page';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
          } | null> | null;
        }
      | {
          __typename: 'LayoutPagesCarousel';
          title?: string | null;
          description?: string | null;
          pages?: Array<{
            __typename?: 'Page';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
          } | null> | null;
        }
      | {
          __typename: 'LocationsSelected';
          title?: string | null;
          locations?: Array<number | null> | null;
          module?: string | null;
        }
      | {
          __typename: 'LocationsSelectedCarousel';
          title?: string | null;
          locations?: Array<number | null> | null;
          module?: string | null;
        }
      | null
    > | null;
  } | null;
};

export type PostsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageCodeFilterEnum>;
  categories?: InputMaybe<
    Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>
  >;
  tags?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
}>;

export type PostsQuery = {
  __typename?: 'RootQuery';
  posts?: {
    __typename?: 'RootQueryToPostConnection';
    pageInfo?: {
      __typename?: 'WPPageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor?: string | null;
    } | null;
    edges: Array<{
      __typename?: 'RootQueryToPostConnectionEdge';
      cursor?: string | null;
      node: {
        __typename?: 'Post';
        id: string;
        date?: string | null;
        content?: string | null;
        slug?: string | null;
        title?: string | null;
        uri?: string | null;
        link?: string | null;
        lead?: string | null;
        categories?: {
          __typename?: 'PostToCategoryConnection';
          edges: Array<{
            __typename?: 'PostToCategoryConnectionEdge';
            node: { __typename?: 'Category'; id: string; name?: string | null };
          }>;
        } | null;
        seo?: {
          __typename?: 'SEO';
          title?: string | null;
          description?: string | null;
          openGraphTitle?: string | null;
          openGraphDescription?: string | null;
          openGraphType?: string | null;
          twitterTitle?: string | null;
          twitterDescription?: string | null;
          canonicalUrl?: string | null;
          socialImage?: {
            __typename?: 'MediaItem';
            mediaItemUrl?: string | null;
          } | null;
        } | null;
        language?: {
          __typename?: 'Language';
          code?: LanguageCodeEnum | null;
          id: string;
          locale?: string | null;
          name?: string | null;
          slug?: string | null;
        } | null;
        translations?: Array<{
          __typename?: 'Post';
          uri?: string | null;
          slug?: string | null;
          language?: {
            __typename?: 'Language';
            code?: LanguageCodeEnum | null;
            id: string;
            locale?: string | null;
            name?: string | null;
            slug?: string | null;
          } | null;
          seo?: {
            __typename?: 'SEO';
            title?: string | null;
            description?: string | null;
            openGraphTitle?: string | null;
            openGraphDescription?: string | null;
            openGraphType?: string | null;
            twitterTitle?: string | null;
            twitterDescription?: string | null;
            canonicalUrl?: string | null;
            socialImage?: {
              __typename?: 'MediaItem';
              mediaItemUrl?: string | null;
            } | null;
          } | null;
        } | null> | null;
        featuredImage?: {
          __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
          node: {
            __typename?: 'MediaItem';
            mediaItemUrl?: string | null;
            link?: string | null;
            altText?: string | null;
            mimeType?: string | null;
            title?: string | null;
            uri?: string | null;
          };
        } | null;
        sidebar?: Array<
          | {
              __typename: 'LayoutArticles';
              title?: string | null;
              showAllLink?: string | null;
              articles?: Array<{
                __typename?: 'Post';
                id: string;
                uri?: string | null;
                slug?: string | null;
                link?: string | null;
                date?: string | null;
                title?: string | null;
                lead?: string | null;
                featuredImage?: {
                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                  node: {
                    __typename?: 'MediaItem';
                    altText?: string | null;
                    mediaItemUrl?: string | null;
                  };
                } | null;
                categories?: {
                  __typename?: 'PostToCategoryConnection';
                  nodes: Array<{
                    __typename?: 'Category';
                    name?: string | null;
                  }>;
                } | null;
              } | null> | null;
            }
          | { __typename?: 'LayoutCards' }
          | {
              __typename: 'LayoutLinkList';
              anchor?: string | null;
              title?: string | null;
              description?: string | null;
              links?: Array<{
                __typename?: 'Link';
                target?: string | null;
                title?: string | null;
                url?: string | null;
              } | null> | null;
            }
          | {
              __typename: 'LayoutPages';
              title?: string | null;
              description?: string | null;
              pages?: Array<{
                __typename?: 'Page';
                id: string;
                uri?: string | null;
                slug?: string | null;
                link?: string | null;
                date?: string | null;
                title?: string | null;
                lead?: string | null;
                featuredImage?: {
                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                  node: {
                    __typename?: 'MediaItem';
                    altText?: string | null;
                    mediaItemUrl?: string | null;
                  };
                } | null;
              } | null> | null;
            }
          | null
        > | null;
        modules?: Array<
          | {
              __typename: 'EventSearch';
              title?: string | null;
              url?: string | null;
              module?: string | null;
              showAllLink?: string | null;
            }
          | {
              __typename: 'EventSearchCarousel';
              title?: string | null;
              url?: string | null;
              orderNewestFirst?: boolean | null;
              eventsNearby?: boolean | null;
              amountOfCards?: number | null;
              showAllLink?: string | null;
            }
          | {
              __typename: 'EventSelected';
              title?: string | null;
              events?: Array<string | null> | null;
              module?: string | null;
            }
          | {
              __typename: 'EventSelectedCarousel';
              title?: string | null;
              module?: string | null;
              eventsNearby?: boolean | null;
              events?: Array<string | null> | null;
              amountOfCardsPerRow?: number | null;
              amountOfCards?: number | null;
            }
          | { __typename?: 'LayoutArticleHighlights' }
          | {
              __typename: 'LayoutArticles';
              title?: string | null;
              showAllLink?: string | null;
              articles?: Array<{
                __typename?: 'Post';
                id: string;
                uri?: string | null;
                slug?: string | null;
                link?: string | null;
                date?: string | null;
                title?: string | null;
                lead?: string | null;
                featuredImage?: {
                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                  node: {
                    __typename?: 'MediaItem';
                    altText?: string | null;
                    mediaItemUrl?: string | null;
                  };
                } | null;
                categories?: {
                  __typename?: 'PostToCategoryConnection';
                  nodes: Array<{
                    __typename?: 'Category';
                    name?: string | null;
                  }>;
                } | null;
              } | null> | null;
            }
          | {
              __typename: 'LayoutArticlesCarousel';
              title?: string | null;
              showMore?: Array<string | null> | null;
              showAllLink?: string | null;
              articles?: Array<{
                __typename?: 'Post';
                id: string;
                uri?: string | null;
                slug?: string | null;
                link?: string | null;
                date?: string | null;
                title?: string | null;
                lead?: string | null;
                featuredImage?: {
                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                  node: {
                    __typename?: 'MediaItem';
                    altText?: string | null;
                    mediaItemUrl?: string | null;
                  };
                } | null;
                categories?: {
                  __typename?: 'PostToCategoryConnection';
                  nodes: Array<{
                    __typename?: 'Category';
                    name?: string | null;
                  }>;
                } | null;
              } | null> | null;
            }
          | { __typename?: 'LayoutCards' }
          | {
              __typename: 'LayoutCollection';
              collection?: {
                __typename?: 'Collection';
                title?: string | null;
              } | null;
            }
          | { __typename?: 'LayoutContact' }
          | { __typename?: 'LayoutContent' }
          | {
              __typename: 'LayoutPages';
              title?: string | null;
              description?: string | null;
              pages?: Array<{
                __typename?: 'Page';
                id: string;
                uri?: string | null;
                slug?: string | null;
                link?: string | null;
                date?: string | null;
                title?: string | null;
                lead?: string | null;
                featuredImage?: {
                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                  node: {
                    __typename?: 'MediaItem';
                    altText?: string | null;
                    mediaItemUrl?: string | null;
                  };
                } | null;
              } | null> | null;
            }
          | {
              __typename: 'LayoutPagesCarousel';
              title?: string | null;
              description?: string | null;
              pages?: Array<{
                __typename?: 'Page';
                id: string;
                uri?: string | null;
                slug?: string | null;
                link?: string | null;
                date?: string | null;
                title?: string | null;
                lead?: string | null;
                featuredImage?: {
                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                  node: {
                    __typename?: 'MediaItem';
                    altText?: string | null;
                    mediaItemUrl?: string | null;
                  };
                } | null;
              } | null> | null;
            }
          | {
              __typename: 'LocationsSelected';
              title?: string | null;
              locations?: Array<number | null> | null;
              module?: string | null;
            }
          | {
              __typename: 'LocationsSelectedCarousel';
              title?: string | null;
              locations?: Array<number | null> | null;
              module?: string | null;
            }
          | null
        > | null;
      };
    }>;
  } | null;
};

export type CategoriesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageCodeFilterEnum>;
}>;

export type CategoriesQuery = {
  __typename?: 'RootQuery';
  categories?: {
    __typename?: 'RootQueryToCategoryConnection';
    nodes: Array<{
      __typename: 'Category';
      id: string;
      databaseId: number;
      name?: string | null;
      slug?: string | null;
      uri?: string | null;
      translations?: Array<{
        __typename?: 'Category';
        name?: string | null;
        slug?: string | null;
        uri?: string | null;
        language?: {
          __typename?: 'Language';
          code?: LanguageCodeEnum | null;
          id: string;
          locale?: string | null;
          name?: string | null;
          slug?: string | null;
        } | null;
      } | null> | null;
    }>;
  } | null;
};

export type CategoryQueryVariables = Exact<{
  id: Scalars['ID'];
  language: LanguageCodeEnum;
}>;

export type CategoryQuery = {
  __typename?: 'RootQuery';
  category?: {
    __typename: 'Category';
    id: string;
    databaseId: number;
    name?: string | null;
    slug?: string | null;
    translation?: {
      __typename?: 'Category';
      name?: string | null;
      slug?: string | null;
      language?: {
        __typename?: 'Language';
        code?: LanguageCodeEnum | null;
        id: string;
        locale?: string | null;
        name?: string | null;
        slug?: string | null;
      } | null;
    } | null;
  } | null;
};

export type LandingPageQueryVariables = Exact<{
  id: Scalars['ID'];
  languageCode: LanguageCodeEnum;
}>;

export type LandingPageQuery = {
  __typename?: 'RootQuery';
  landingPage?: {
    __typename?: 'LandingPage';
    id: string;
    desktopImage?: {
      __typename?: 'LandingPageToMediaItemConnection';
      edges: Array<{
        __typename?: 'LandingPageToMediaItemConnectionEdge';
        node: { __typename?: 'MediaItem'; mediaItemUrl?: string | null };
      }>;
    } | null;
    translation?: {
      __typename?: 'LandingPage';
      title?: string | null;
      description?: string | null;
      heroLink?: Array<string | null> | null;
    } | null;
  } | null;
};

export type LanguageFragment = {
  __typename?: 'Language';
  code?: LanguageCodeEnum | null;
  id: string;
  locale?: string | null;
  name?: string | null;
  slug?: string | null;
};

export type LanguagesQueryVariables = Exact<{ [key: string]: never }>;

export type LanguagesQuery = {
  __typename?: 'RootQuery';
  languages?: Array<{
    __typename?: 'Language';
    code?: LanguageCodeEnum | null;
    id: string;
    locale?: string | null;
    name?: string | null;
    slug?: string | null;
  } | null> | null;
};

export type MenuItemFragment = {
  __typename?: 'MenuItem';
  id: string;
  order?: number | null;
  target?: string | null;
  title?: string | null;
  path?: string | null;
  label?: string | null;
  connectedNode?: {
    __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
    node:
      | { __typename?: 'Category' }
      | {
          __typename?: 'Page';
          id: string;
          content?: string | null;
          slug?: string | null;
          title?: string | null;
          uri?: string | null;
          link?: string | null;
          lead?: string | null;
          children?: {
            __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
            nodes: Array<
              | { __typename?: 'Collection' }
              | { __typename?: 'Contact' }
              | { __typename?: 'LandingPage' }
              | { __typename?: 'MediaItem' }
              | {
                  __typename?: 'Page';
                  id: string;
                  content?: string | null;
                  slug?: string | null;
                  title?: string | null;
                  uri?: string | null;
                  link?: string | null;
                  lead?: string | null;
                  translations?: Array<{
                    __typename?: 'Page';
                    uri?: string | null;
                    slug?: string | null;
                    id: string;
                    content?: string | null;
                    title?: string | null;
                    link?: string | null;
                    lead?: string | null;
                    language?: {
                      __typename?: 'Language';
                      code?: LanguageCodeEnum | null;
                      id: string;
                      locale?: string | null;
                      name?: string | null;
                      slug?: string | null;
                    } | null;
                    seo?: {
                      __typename?: 'SEO';
                      title?: string | null;
                      description?: string | null;
                      openGraphTitle?: string | null;
                      openGraphDescription?: string | null;
                      openGraphType?: string | null;
                      twitterTitle?: string | null;
                      twitterDescription?: string | null;
                      canonicalUrl?: string | null;
                      socialImage?: {
                        __typename?: 'MediaItem';
                        mediaItemUrl?: string | null;
                      } | null;
                    } | null;
                    translations?: Array<{
                      __typename?: 'Page';
                      uri?: string | null;
                      slug?: string | null;
                      language?: {
                        __typename?: 'Language';
                        code?: LanguageCodeEnum | null;
                        id: string;
                        locale?: string | null;
                        name?: string | null;
                        slug?: string | null;
                      } | null;
                      seo?: {
                        __typename?: 'SEO';
                        title?: string | null;
                        description?: string | null;
                        openGraphTitle?: string | null;
                        openGraphDescription?: string | null;
                        openGraphType?: string | null;
                        twitterTitle?: string | null;
                        twitterDescription?: string | null;
                        canonicalUrl?: string | null;
                        socialImage?: {
                          __typename?: 'MediaItem';
                          mediaItemUrl?: string | null;
                        } | null;
                      } | null;
                    } | null> | null;
                    featuredImage?: {
                      __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                      node: {
                        __typename?: 'MediaItem';
                        mediaItemUrl?: string | null;
                        link?: string | null;
                        altText?: string | null;
                        mimeType?: string | null;
                        title?: string | null;
                        uri?: string | null;
                      };
                    } | null;
                    sidebar?: Array<
                      | {
                          __typename: 'LayoutArticles';
                          title?: string | null;
                          showAllLink?: string | null;
                          articles?: Array<{
                            __typename?: 'Post';
                            id: string;
                            uri?: string | null;
                            slug?: string | null;
                            link?: string | null;
                            date?: string | null;
                            title?: string | null;
                            lead?: string | null;
                            featuredImage?: {
                              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                              node: {
                                __typename?: 'MediaItem';
                                altText?: string | null;
                                mediaItemUrl?: string | null;
                              };
                            } | null;
                            categories?: {
                              __typename?: 'PostToCategoryConnection';
                              nodes: Array<{
                                __typename?: 'Category';
                                name?: string | null;
                              }>;
                            } | null;
                          } | null> | null;
                        }
                      | { __typename?: 'LayoutCards' }
                      | {
                          __typename: 'LayoutLinkList';
                          anchor?: string | null;
                          title?: string | null;
                          description?: string | null;
                          links?: Array<{
                            __typename?: 'Link';
                            target?: string | null;
                            title?: string | null;
                            url?: string | null;
                          } | null> | null;
                        }
                      | {
                          __typename: 'LayoutPages';
                          title?: string | null;
                          description?: string | null;
                          pages?: Array<{
                            __typename?: 'Page';
                            id: string;
                            uri?: string | null;
                            slug?: string | null;
                            link?: string | null;
                            date?: string | null;
                            title?: string | null;
                            lead?: string | null;
                            featuredImage?: {
                              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                              node: {
                                __typename?: 'MediaItem';
                                altText?: string | null;
                                mediaItemUrl?: string | null;
                              };
                            } | null;
                          } | null> | null;
                        }
                      | null
                    > | null;
                    modules?: Array<
                      | {
                          __typename: 'EventSearch';
                          title?: string | null;
                          url?: string | null;
                          module?: string | null;
                          showAllLink?: string | null;
                        }
                      | {
                          __typename: 'EventSearchCarousel';
                          title?: string | null;
                          url?: string | null;
                          orderNewestFirst?: boolean | null;
                          eventsNearby?: boolean | null;
                          amountOfCards?: number | null;
                          showAllLink?: string | null;
                        }
                      | {
                          __typename: 'EventSelected';
                          title?: string | null;
                          events?: Array<string | null> | null;
                          module?: string | null;
                        }
                      | {
                          __typename: 'EventSelectedCarousel';
                          title?: string | null;
                          module?: string | null;
                          eventsNearby?: boolean | null;
                          events?: Array<string | null> | null;
                          amountOfCardsPerRow?: number | null;
                          amountOfCards?: number | null;
                        }
                      | { __typename?: 'LayoutArticleHighlights' }
                      | {
                          __typename: 'LayoutArticles';
                          title?: string | null;
                          showAllLink?: string | null;
                          articles?: Array<{
                            __typename?: 'Post';
                            id: string;
                            uri?: string | null;
                            slug?: string | null;
                            link?: string | null;
                            date?: string | null;
                            title?: string | null;
                            lead?: string | null;
                            featuredImage?: {
                              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                              node: {
                                __typename?: 'MediaItem';
                                altText?: string | null;
                                mediaItemUrl?: string | null;
                              };
                            } | null;
                            categories?: {
                              __typename?: 'PostToCategoryConnection';
                              nodes: Array<{
                                __typename?: 'Category';
                                name?: string | null;
                              }>;
                            } | null;
                          } | null> | null;
                        }
                      | {
                          __typename: 'LayoutArticlesCarousel';
                          title?: string | null;
                          showMore?: Array<string | null> | null;
                          showAllLink?: string | null;
                          articles?: Array<{
                            __typename?: 'Post';
                            id: string;
                            uri?: string | null;
                            slug?: string | null;
                            link?: string | null;
                            date?: string | null;
                            title?: string | null;
                            lead?: string | null;
                            featuredImage?: {
                              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                              node: {
                                __typename?: 'MediaItem';
                                altText?: string | null;
                                mediaItemUrl?: string | null;
                              };
                            } | null;
                            categories?: {
                              __typename?: 'PostToCategoryConnection';
                              nodes: Array<{
                                __typename?: 'Category';
                                name?: string | null;
                              }>;
                            } | null;
                          } | null> | null;
                        }
                      | { __typename?: 'LayoutCards' }
                      | {
                          __typename: 'LayoutCollection';
                          collection?: {
                            __typename?: 'Collection';
                            title?: string | null;
                          } | null;
                        }
                      | { __typename?: 'LayoutContact' }
                      | { __typename?: 'LayoutContent' }
                      | {
                          __typename: 'LayoutPages';
                          title?: string | null;
                          description?: string | null;
                          pages?: Array<{
                            __typename?: 'Page';
                            id: string;
                            uri?: string | null;
                            slug?: string | null;
                            link?: string | null;
                            date?: string | null;
                            title?: string | null;
                            lead?: string | null;
                            featuredImage?: {
                              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                              node: {
                                __typename?: 'MediaItem';
                                altText?: string | null;
                                mediaItemUrl?: string | null;
                              };
                            } | null;
                          } | null> | null;
                        }
                      | {
                          __typename: 'LayoutPagesCarousel';
                          title?: string | null;
                          description?: string | null;
                          pages?: Array<{
                            __typename?: 'Page';
                            id: string;
                            uri?: string | null;
                            slug?: string | null;
                            link?: string | null;
                            date?: string | null;
                            title?: string | null;
                            lead?: string | null;
                            featuredImage?: {
                              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                              node: {
                                __typename?: 'MediaItem';
                                altText?: string | null;
                                mediaItemUrl?: string | null;
                              };
                            } | null;
                          } | null> | null;
                        }
                      | {
                          __typename: 'LocationsSelected';
                          title?: string | null;
                          locations?: Array<number | null> | null;
                          module?: string | null;
                        }
                      | {
                          __typename: 'LocationsSelectedCarousel';
                          title?: string | null;
                          locations?: Array<number | null> | null;
                          module?: string | null;
                        }
                      | null
                    > | null;
                  } | null> | null;
                  seo?: {
                    __typename?: 'SEO';
                    title?: string | null;
                    description?: string | null;
                    openGraphTitle?: string | null;
                    openGraphDescription?: string | null;
                    openGraphType?: string | null;
                    twitterTitle?: string | null;
                    twitterDescription?: string | null;
                    canonicalUrl?: string | null;
                    socialImage?: {
                      __typename?: 'MediaItem';
                      mediaItemUrl?: string | null;
                    } | null;
                  } | null;
                  language?: {
                    __typename?: 'Language';
                    code?: LanguageCodeEnum | null;
                    id: string;
                    locale?: string | null;
                    name?: string | null;
                    slug?: string | null;
                  } | null;
                  featuredImage?: {
                    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                    node: {
                      __typename?: 'MediaItem';
                      mediaItemUrl?: string | null;
                      link?: string | null;
                      altText?: string | null;
                      mimeType?: string | null;
                      title?: string | null;
                      uri?: string | null;
                    };
                  } | null;
                  sidebar?: Array<
                    | {
                        __typename: 'LayoutArticles';
                        title?: string | null;
                        showAllLink?: string | null;
                        articles?: Array<{
                          __typename?: 'Post';
                          id: string;
                          uri?: string | null;
                          slug?: string | null;
                          link?: string | null;
                          date?: string | null;
                          title?: string | null;
                          lead?: string | null;
                          featuredImage?: {
                            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                            node: {
                              __typename?: 'MediaItem';
                              altText?: string | null;
                              mediaItemUrl?: string | null;
                            };
                          } | null;
                          categories?: {
                            __typename?: 'PostToCategoryConnection';
                            nodes: Array<{
                              __typename?: 'Category';
                              name?: string | null;
                            }>;
                          } | null;
                        } | null> | null;
                      }
                    | { __typename?: 'LayoutCards' }
                    | {
                        __typename: 'LayoutLinkList';
                        anchor?: string | null;
                        title?: string | null;
                        description?: string | null;
                        links?: Array<{
                          __typename?: 'Link';
                          target?: string | null;
                          title?: string | null;
                          url?: string | null;
                        } | null> | null;
                      }
                    | {
                        __typename: 'LayoutPages';
                        title?: string | null;
                        description?: string | null;
                        pages?: Array<{
                          __typename?: 'Page';
                          id: string;
                          uri?: string | null;
                          slug?: string | null;
                          link?: string | null;
                          date?: string | null;
                          title?: string | null;
                          lead?: string | null;
                          featuredImage?: {
                            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                            node: {
                              __typename?: 'MediaItem';
                              altText?: string | null;
                              mediaItemUrl?: string | null;
                            };
                          } | null;
                        } | null> | null;
                      }
                    | null
                  > | null;
                  modules?: Array<
                    | {
                        __typename: 'EventSearch';
                        title?: string | null;
                        url?: string | null;
                        module?: string | null;
                        showAllLink?: string | null;
                      }
                    | {
                        __typename: 'EventSearchCarousel';
                        title?: string | null;
                        url?: string | null;
                        orderNewestFirst?: boolean | null;
                        eventsNearby?: boolean | null;
                        amountOfCards?: number | null;
                        showAllLink?: string | null;
                      }
                    | {
                        __typename: 'EventSelected';
                        title?: string | null;
                        events?: Array<string | null> | null;
                        module?: string | null;
                      }
                    | {
                        __typename: 'EventSelectedCarousel';
                        title?: string | null;
                        module?: string | null;
                        eventsNearby?: boolean | null;
                        events?: Array<string | null> | null;
                        amountOfCardsPerRow?: number | null;
                        amountOfCards?: number | null;
                      }
                    | { __typename?: 'LayoutArticleHighlights' }
                    | {
                        __typename: 'LayoutArticles';
                        title?: string | null;
                        showAllLink?: string | null;
                        articles?: Array<{
                          __typename?: 'Post';
                          id: string;
                          uri?: string | null;
                          slug?: string | null;
                          link?: string | null;
                          date?: string | null;
                          title?: string | null;
                          lead?: string | null;
                          featuredImage?: {
                            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                            node: {
                              __typename?: 'MediaItem';
                              altText?: string | null;
                              mediaItemUrl?: string | null;
                            };
                          } | null;
                          categories?: {
                            __typename?: 'PostToCategoryConnection';
                            nodes: Array<{
                              __typename?: 'Category';
                              name?: string | null;
                            }>;
                          } | null;
                        } | null> | null;
                      }
                    | {
                        __typename: 'LayoutArticlesCarousel';
                        title?: string | null;
                        showMore?: Array<string | null> | null;
                        showAllLink?: string | null;
                        articles?: Array<{
                          __typename?: 'Post';
                          id: string;
                          uri?: string | null;
                          slug?: string | null;
                          link?: string | null;
                          date?: string | null;
                          title?: string | null;
                          lead?: string | null;
                          featuredImage?: {
                            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                            node: {
                              __typename?: 'MediaItem';
                              altText?: string | null;
                              mediaItemUrl?: string | null;
                            };
                          } | null;
                          categories?: {
                            __typename?: 'PostToCategoryConnection';
                            nodes: Array<{
                              __typename?: 'Category';
                              name?: string | null;
                            }>;
                          } | null;
                        } | null> | null;
                      }
                    | { __typename?: 'LayoutCards' }
                    | {
                        __typename: 'LayoutCollection';
                        collection?: {
                          __typename?: 'Collection';
                          title?: string | null;
                        } | null;
                      }
                    | { __typename?: 'LayoutContact' }
                    | { __typename?: 'LayoutContent' }
                    | {
                        __typename: 'LayoutPages';
                        title?: string | null;
                        description?: string | null;
                        pages?: Array<{
                          __typename?: 'Page';
                          id: string;
                          uri?: string | null;
                          slug?: string | null;
                          link?: string | null;
                          date?: string | null;
                          title?: string | null;
                          lead?: string | null;
                          featuredImage?: {
                            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                            node: {
                              __typename?: 'MediaItem';
                              altText?: string | null;
                              mediaItemUrl?: string | null;
                            };
                          } | null;
                        } | null> | null;
                      }
                    | {
                        __typename: 'LayoutPagesCarousel';
                        title?: string | null;
                        description?: string | null;
                        pages?: Array<{
                          __typename?: 'Page';
                          id: string;
                          uri?: string | null;
                          slug?: string | null;
                          link?: string | null;
                          date?: string | null;
                          title?: string | null;
                          lead?: string | null;
                          featuredImage?: {
                            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                            node: {
                              __typename?: 'MediaItem';
                              altText?: string | null;
                              mediaItemUrl?: string | null;
                            };
                          } | null;
                        } | null> | null;
                      }
                    | {
                        __typename: 'LocationsSelected';
                        title?: string | null;
                        locations?: Array<number | null> | null;
                        module?: string | null;
                      }
                    | {
                        __typename: 'LocationsSelectedCarousel';
                        title?: string | null;
                        locations?: Array<number | null> | null;
                        module?: string | null;
                      }
                    | null
                  > | null;
                }
              | { __typename?: 'Post' }
              | { __typename?: 'Release' }
              | { __typename?: 'Translation' }
            >;
          } | null;
          translations?: Array<{
            __typename?: 'Page';
            uri?: string | null;
            slug?: string | null;
            id: string;
            content?: string | null;
            title?: string | null;
            link?: string | null;
            lead?: string | null;
            language?: {
              __typename?: 'Language';
              code?: LanguageCodeEnum | null;
              id: string;
              locale?: string | null;
              name?: string | null;
              slug?: string | null;
            } | null;
            seo?: {
              __typename?: 'SEO';
              title?: string | null;
              description?: string | null;
              openGraphTitle?: string | null;
              openGraphDescription?: string | null;
              openGraphType?: string | null;
              twitterTitle?: string | null;
              twitterDescription?: string | null;
              canonicalUrl?: string | null;
              socialImage?: {
                __typename?: 'MediaItem';
                mediaItemUrl?: string | null;
              } | null;
            } | null;
            translations?: Array<{
              __typename?: 'Page';
              uri?: string | null;
              slug?: string | null;
              language?: {
                __typename?: 'Language';
                code?: LanguageCodeEnum | null;
                id: string;
                locale?: string | null;
                name?: string | null;
                slug?: string | null;
              } | null;
              seo?: {
                __typename?: 'SEO';
                title?: string | null;
                description?: string | null;
                openGraphTitle?: string | null;
                openGraphDescription?: string | null;
                openGraphType?: string | null;
                twitterTitle?: string | null;
                twitterDescription?: string | null;
                canonicalUrl?: string | null;
                socialImage?: {
                  __typename?: 'MediaItem';
                  mediaItemUrl?: string | null;
                } | null;
              } | null;
            } | null> | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                mediaItemUrl?: string | null;
                link?: string | null;
                altText?: string | null;
                mimeType?: string | null;
                title?: string | null;
                uri?: string | null;
              };
            } | null;
            sidebar?: Array<
              | {
                  __typename: 'LayoutArticles';
                  title?: string | null;
                  showAllLink?: string | null;
                  articles?: Array<{
                    __typename?: 'Post';
                    id: string;
                    uri?: string | null;
                    slug?: string | null;
                    link?: string | null;
                    date?: string | null;
                    title?: string | null;
                    lead?: string | null;
                    featuredImage?: {
                      __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                      node: {
                        __typename?: 'MediaItem';
                        altText?: string | null;
                        mediaItemUrl?: string | null;
                      };
                    } | null;
                    categories?: {
                      __typename?: 'PostToCategoryConnection';
                      nodes: Array<{
                        __typename?: 'Category';
                        name?: string | null;
                      }>;
                    } | null;
                  } | null> | null;
                }
              | { __typename?: 'LayoutCards' }
              | {
                  __typename: 'LayoutLinkList';
                  anchor?: string | null;
                  title?: string | null;
                  description?: string | null;
                  links?: Array<{
                    __typename?: 'Link';
                    target?: string | null;
                    title?: string | null;
                    url?: string | null;
                  } | null> | null;
                }
              | {
                  __typename: 'LayoutPages';
                  title?: string | null;
                  description?: string | null;
                  pages?: Array<{
                    __typename?: 'Page';
                    id: string;
                    uri?: string | null;
                    slug?: string | null;
                    link?: string | null;
                    date?: string | null;
                    title?: string | null;
                    lead?: string | null;
                    featuredImage?: {
                      __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                      node: {
                        __typename?: 'MediaItem';
                        altText?: string | null;
                        mediaItemUrl?: string | null;
                      };
                    } | null;
                  } | null> | null;
                }
              | null
            > | null;
            modules?: Array<
              | {
                  __typename: 'EventSearch';
                  title?: string | null;
                  url?: string | null;
                  module?: string | null;
                  showAllLink?: string | null;
                }
              | {
                  __typename: 'EventSearchCarousel';
                  title?: string | null;
                  url?: string | null;
                  orderNewestFirst?: boolean | null;
                  eventsNearby?: boolean | null;
                  amountOfCards?: number | null;
                  showAllLink?: string | null;
                }
              | {
                  __typename: 'EventSelected';
                  title?: string | null;
                  events?: Array<string | null> | null;
                  module?: string | null;
                }
              | {
                  __typename: 'EventSelectedCarousel';
                  title?: string | null;
                  module?: string | null;
                  eventsNearby?: boolean | null;
                  events?: Array<string | null> | null;
                  amountOfCardsPerRow?: number | null;
                  amountOfCards?: number | null;
                }
              | { __typename?: 'LayoutArticleHighlights' }
              | {
                  __typename: 'LayoutArticles';
                  title?: string | null;
                  showAllLink?: string | null;
                  articles?: Array<{
                    __typename?: 'Post';
                    id: string;
                    uri?: string | null;
                    slug?: string | null;
                    link?: string | null;
                    date?: string | null;
                    title?: string | null;
                    lead?: string | null;
                    featuredImage?: {
                      __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                      node: {
                        __typename?: 'MediaItem';
                        altText?: string | null;
                        mediaItemUrl?: string | null;
                      };
                    } | null;
                    categories?: {
                      __typename?: 'PostToCategoryConnection';
                      nodes: Array<{
                        __typename?: 'Category';
                        name?: string | null;
                      }>;
                    } | null;
                  } | null> | null;
                }
              | {
                  __typename: 'LayoutArticlesCarousel';
                  title?: string | null;
                  showMore?: Array<string | null> | null;
                  showAllLink?: string | null;
                  articles?: Array<{
                    __typename?: 'Post';
                    id: string;
                    uri?: string | null;
                    slug?: string | null;
                    link?: string | null;
                    date?: string | null;
                    title?: string | null;
                    lead?: string | null;
                    featuredImage?: {
                      __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                      node: {
                        __typename?: 'MediaItem';
                        altText?: string | null;
                        mediaItemUrl?: string | null;
                      };
                    } | null;
                    categories?: {
                      __typename?: 'PostToCategoryConnection';
                      nodes: Array<{
                        __typename?: 'Category';
                        name?: string | null;
                      }>;
                    } | null;
                  } | null> | null;
                }
              | { __typename?: 'LayoutCards' }
              | {
                  __typename: 'LayoutCollection';
                  collection?: {
                    __typename?: 'Collection';
                    title?: string | null;
                  } | null;
                }
              | { __typename?: 'LayoutContact' }
              | { __typename?: 'LayoutContent' }
              | {
                  __typename: 'LayoutPages';
                  title?: string | null;
                  description?: string | null;
                  pages?: Array<{
                    __typename?: 'Page';
                    id: string;
                    uri?: string | null;
                    slug?: string | null;
                    link?: string | null;
                    date?: string | null;
                    title?: string | null;
                    lead?: string | null;
                    featuredImage?: {
                      __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                      node: {
                        __typename?: 'MediaItem';
                        altText?: string | null;
                        mediaItemUrl?: string | null;
                      };
                    } | null;
                  } | null> | null;
                }
              | {
                  __typename: 'LayoutPagesCarousel';
                  title?: string | null;
                  description?: string | null;
                  pages?: Array<{
                    __typename?: 'Page';
                    id: string;
                    uri?: string | null;
                    slug?: string | null;
                    link?: string | null;
                    date?: string | null;
                    title?: string | null;
                    lead?: string | null;
                    featuredImage?: {
                      __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                      node: {
                        __typename?: 'MediaItem';
                        altText?: string | null;
                        mediaItemUrl?: string | null;
                      };
                    } | null;
                  } | null> | null;
                }
              | {
                  __typename: 'LocationsSelected';
                  title?: string | null;
                  locations?: Array<number | null> | null;
                  module?: string | null;
                }
              | {
                  __typename: 'LocationsSelectedCarousel';
                  title?: string | null;
                  locations?: Array<number | null> | null;
                  module?: string | null;
                }
              | null
            > | null;
          } | null> | null;
          seo?: {
            __typename?: 'SEO';
            title?: string | null;
            description?: string | null;
            openGraphTitle?: string | null;
            openGraphDescription?: string | null;
            openGraphType?: string | null;
            twitterTitle?: string | null;
            twitterDescription?: string | null;
            canonicalUrl?: string | null;
            socialImage?: {
              __typename?: 'MediaItem';
              mediaItemUrl?: string | null;
            } | null;
          } | null;
          language?: {
            __typename?: 'Language';
            code?: LanguageCodeEnum | null;
            id: string;
            locale?: string | null;
            name?: string | null;
            slug?: string | null;
          } | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              mediaItemUrl?: string | null;
              link?: string | null;
              altText?: string | null;
              mimeType?: string | null;
              title?: string | null;
              uri?: string | null;
            };
          } | null;
          sidebar?: Array<
            | {
                __typename: 'LayoutArticles';
                title?: string | null;
                showAllLink?: string | null;
                articles?: Array<{
                  __typename?: 'Post';
                  id: string;
                  uri?: string | null;
                  slug?: string | null;
                  link?: string | null;
                  date?: string | null;
                  title?: string | null;
                  lead?: string | null;
                  featuredImage?: {
                    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                    node: {
                      __typename?: 'MediaItem';
                      altText?: string | null;
                      mediaItemUrl?: string | null;
                    };
                  } | null;
                  categories?: {
                    __typename?: 'PostToCategoryConnection';
                    nodes: Array<{
                      __typename?: 'Category';
                      name?: string | null;
                    }>;
                  } | null;
                } | null> | null;
              }
            | { __typename?: 'LayoutCards' }
            | {
                __typename: 'LayoutLinkList';
                anchor?: string | null;
                title?: string | null;
                description?: string | null;
                links?: Array<{
                  __typename?: 'Link';
                  target?: string | null;
                  title?: string | null;
                  url?: string | null;
                } | null> | null;
              }
            | {
                __typename: 'LayoutPages';
                title?: string | null;
                description?: string | null;
                pages?: Array<{
                  __typename?: 'Page';
                  id: string;
                  uri?: string | null;
                  slug?: string | null;
                  link?: string | null;
                  date?: string | null;
                  title?: string | null;
                  lead?: string | null;
                  featuredImage?: {
                    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                    node: {
                      __typename?: 'MediaItem';
                      altText?: string | null;
                      mediaItemUrl?: string | null;
                    };
                  } | null;
                } | null> | null;
              }
            | null
          > | null;
          modules?: Array<
            | {
                __typename: 'EventSearch';
                title?: string | null;
                url?: string | null;
                module?: string | null;
                showAllLink?: string | null;
              }
            | {
                __typename: 'EventSearchCarousel';
                title?: string | null;
                url?: string | null;
                orderNewestFirst?: boolean | null;
                eventsNearby?: boolean | null;
                amountOfCards?: number | null;
                showAllLink?: string | null;
              }
            | {
                __typename: 'EventSelected';
                title?: string | null;
                events?: Array<string | null> | null;
                module?: string | null;
              }
            | {
                __typename: 'EventSelectedCarousel';
                title?: string | null;
                module?: string | null;
                eventsNearby?: boolean | null;
                events?: Array<string | null> | null;
                amountOfCardsPerRow?: number | null;
                amountOfCards?: number | null;
              }
            | { __typename?: 'LayoutArticleHighlights' }
            | {
                __typename: 'LayoutArticles';
                title?: string | null;
                showAllLink?: string | null;
                articles?: Array<{
                  __typename?: 'Post';
                  id: string;
                  uri?: string | null;
                  slug?: string | null;
                  link?: string | null;
                  date?: string | null;
                  title?: string | null;
                  lead?: string | null;
                  featuredImage?: {
                    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                    node: {
                      __typename?: 'MediaItem';
                      altText?: string | null;
                      mediaItemUrl?: string | null;
                    };
                  } | null;
                  categories?: {
                    __typename?: 'PostToCategoryConnection';
                    nodes: Array<{
                      __typename?: 'Category';
                      name?: string | null;
                    }>;
                  } | null;
                } | null> | null;
              }
            | {
                __typename: 'LayoutArticlesCarousel';
                title?: string | null;
                showMore?: Array<string | null> | null;
                showAllLink?: string | null;
                articles?: Array<{
                  __typename?: 'Post';
                  id: string;
                  uri?: string | null;
                  slug?: string | null;
                  link?: string | null;
                  date?: string | null;
                  title?: string | null;
                  lead?: string | null;
                  featuredImage?: {
                    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                    node: {
                      __typename?: 'MediaItem';
                      altText?: string | null;
                      mediaItemUrl?: string | null;
                    };
                  } | null;
                  categories?: {
                    __typename?: 'PostToCategoryConnection';
                    nodes: Array<{
                      __typename?: 'Category';
                      name?: string | null;
                    }>;
                  } | null;
                } | null> | null;
              }
            | { __typename?: 'LayoutCards' }
            | {
                __typename: 'LayoutCollection';
                collection?: {
                  __typename?: 'Collection';
                  title?: string | null;
                } | null;
              }
            | { __typename?: 'LayoutContact' }
            | { __typename?: 'LayoutContent' }
            | {
                __typename: 'LayoutPages';
                title?: string | null;
                description?: string | null;
                pages?: Array<{
                  __typename?: 'Page';
                  id: string;
                  uri?: string | null;
                  slug?: string | null;
                  link?: string | null;
                  date?: string | null;
                  title?: string | null;
                  lead?: string | null;
                  featuredImage?: {
                    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                    node: {
                      __typename?: 'MediaItem';
                      altText?: string | null;
                      mediaItemUrl?: string | null;
                    };
                  } | null;
                } | null> | null;
              }
            | {
                __typename: 'LayoutPagesCarousel';
                title?: string | null;
                description?: string | null;
                pages?: Array<{
                  __typename?: 'Page';
                  id: string;
                  uri?: string | null;
                  slug?: string | null;
                  link?: string | null;
                  date?: string | null;
                  title?: string | null;
                  lead?: string | null;
                  featuredImage?: {
                    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                    node: {
                      __typename?: 'MediaItem';
                      altText?: string | null;
                      mediaItemUrl?: string | null;
                    };
                  } | null;
                } | null> | null;
              }
            | {
                __typename: 'LocationsSelected';
                title?: string | null;
                locations?: Array<number | null> | null;
                module?: string | null;
              }
            | {
                __typename: 'LocationsSelectedCarousel';
                title?: string | null;
                locations?: Array<number | null> | null;
                module?: string | null;
              }
            | null
          > | null;
        }
      | { __typename?: 'Post' }
      | { __typename?: 'Tag' };
  } | null;
};

export type MenuPageFieldsFragment = {
  __typename?: 'Page';
  id: string;
  content?: string | null;
  slug?: string | null;
  title?: string | null;
  uri?: string | null;
  link?: string | null;
  lead?: string | null;
  translations?: Array<{
    __typename?: 'Page';
    uri?: string | null;
    slug?: string | null;
    id: string;
    content?: string | null;
    title?: string | null;
    link?: string | null;
    lead?: string | null;
    language?: {
      __typename?: 'Language';
      code?: LanguageCodeEnum | null;
      id: string;
      locale?: string | null;
      name?: string | null;
      slug?: string | null;
    } | null;
    seo?: {
      __typename?: 'SEO';
      title?: string | null;
      description?: string | null;
      openGraphTitle?: string | null;
      openGraphDescription?: string | null;
      openGraphType?: string | null;
      twitterTitle?: string | null;
      twitterDescription?: string | null;
      canonicalUrl?: string | null;
      socialImage?: {
        __typename?: 'MediaItem';
        mediaItemUrl?: string | null;
      } | null;
    } | null;
    translations?: Array<{
      __typename?: 'Page';
      uri?: string | null;
      slug?: string | null;
      language?: {
        __typename?: 'Language';
        code?: LanguageCodeEnum | null;
        id: string;
        locale?: string | null;
        name?: string | null;
        slug?: string | null;
      } | null;
      seo?: {
        __typename?: 'SEO';
        title?: string | null;
        description?: string | null;
        openGraphTitle?: string | null;
        openGraphDescription?: string | null;
        openGraphType?: string | null;
        twitterTitle?: string | null;
        twitterDescription?: string | null;
        canonicalUrl?: string | null;
        socialImage?: {
          __typename?: 'MediaItem';
          mediaItemUrl?: string | null;
        } | null;
      } | null;
    } | null> | null;
    featuredImage?: {
      __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
      node: {
        __typename?: 'MediaItem';
        mediaItemUrl?: string | null;
        link?: string | null;
        altText?: string | null;
        mimeType?: string | null;
        title?: string | null;
        uri?: string | null;
      };
    } | null;
    sidebar?: Array<
      | {
          __typename: 'LayoutArticles';
          title?: string | null;
          showAllLink?: string | null;
          articles?: Array<{
            __typename?: 'Post';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
            categories?: {
              __typename?: 'PostToCategoryConnection';
              nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
            } | null;
          } | null> | null;
        }
      | { __typename?: 'LayoutCards' }
      | {
          __typename: 'LayoutLinkList';
          anchor?: string | null;
          title?: string | null;
          description?: string | null;
          links?: Array<{
            __typename?: 'Link';
            target?: string | null;
            title?: string | null;
            url?: string | null;
          } | null> | null;
        }
      | {
          __typename: 'LayoutPages';
          title?: string | null;
          description?: string | null;
          pages?: Array<{
            __typename?: 'Page';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
          } | null> | null;
        }
      | null
    > | null;
    modules?: Array<
      | {
          __typename: 'EventSearch';
          title?: string | null;
          url?: string | null;
          module?: string | null;
          showAllLink?: string | null;
        }
      | {
          __typename: 'EventSearchCarousel';
          title?: string | null;
          url?: string | null;
          orderNewestFirst?: boolean | null;
          eventsNearby?: boolean | null;
          amountOfCards?: number | null;
          showAllLink?: string | null;
        }
      | {
          __typename: 'EventSelected';
          title?: string | null;
          events?: Array<string | null> | null;
          module?: string | null;
        }
      | {
          __typename: 'EventSelectedCarousel';
          title?: string | null;
          module?: string | null;
          eventsNearby?: boolean | null;
          events?: Array<string | null> | null;
          amountOfCardsPerRow?: number | null;
          amountOfCards?: number | null;
        }
      | { __typename?: 'LayoutArticleHighlights' }
      | {
          __typename: 'LayoutArticles';
          title?: string | null;
          showAllLink?: string | null;
          articles?: Array<{
            __typename?: 'Post';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
            categories?: {
              __typename?: 'PostToCategoryConnection';
              nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
            } | null;
          } | null> | null;
        }
      | {
          __typename: 'LayoutArticlesCarousel';
          title?: string | null;
          showMore?: Array<string | null> | null;
          showAllLink?: string | null;
          articles?: Array<{
            __typename?: 'Post';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
            categories?: {
              __typename?: 'PostToCategoryConnection';
              nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
            } | null;
          } | null> | null;
        }
      | { __typename?: 'LayoutCards' }
      | {
          __typename: 'LayoutCollection';
          collection?: {
            __typename?: 'Collection';
            title?: string | null;
          } | null;
        }
      | { __typename?: 'LayoutContact' }
      | { __typename?: 'LayoutContent' }
      | {
          __typename: 'LayoutPages';
          title?: string | null;
          description?: string | null;
          pages?: Array<{
            __typename?: 'Page';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
          } | null> | null;
        }
      | {
          __typename: 'LayoutPagesCarousel';
          title?: string | null;
          description?: string | null;
          pages?: Array<{
            __typename?: 'Page';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
          } | null> | null;
        }
      | {
          __typename: 'LocationsSelected';
          title?: string | null;
          locations?: Array<number | null> | null;
          module?: string | null;
        }
      | {
          __typename: 'LocationsSelectedCarousel';
          title?: string | null;
          locations?: Array<number | null> | null;
          module?: string | null;
        }
      | null
    > | null;
  } | null> | null;
  seo?: {
    __typename?: 'SEO';
    title?: string | null;
    description?: string | null;
    openGraphTitle?: string | null;
    openGraphDescription?: string | null;
    openGraphType?: string | null;
    twitterTitle?: string | null;
    twitterDescription?: string | null;
    canonicalUrl?: string | null;
    socialImage?: {
      __typename?: 'MediaItem';
      mediaItemUrl?: string | null;
    } | null;
  } | null;
  language?: {
    __typename?: 'Language';
    code?: LanguageCodeEnum | null;
    id: string;
    locale?: string | null;
    name?: string | null;
    slug?: string | null;
  } | null;
  featuredImage?: {
    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
    node: {
      __typename?: 'MediaItem';
      mediaItemUrl?: string | null;
      link?: string | null;
      altText?: string | null;
      mimeType?: string | null;
      title?: string | null;
      uri?: string | null;
    };
  } | null;
  sidebar?: Array<
    | {
        __typename: 'LayoutArticles';
        title?: string | null;
        showAllLink?: string | null;
        articles?: Array<{
          __typename?: 'Post';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
          categories?: {
            __typename?: 'PostToCategoryConnection';
            nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
          } | null;
        } | null> | null;
      }
    | { __typename?: 'LayoutCards' }
    | {
        __typename: 'LayoutLinkList';
        anchor?: string | null;
        title?: string | null;
        description?: string | null;
        links?: Array<{
          __typename?: 'Link';
          target?: string | null;
          title?: string | null;
          url?: string | null;
        } | null> | null;
      }
    | {
        __typename: 'LayoutPages';
        title?: string | null;
        description?: string | null;
        pages?: Array<{
          __typename?: 'Page';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
        } | null> | null;
      }
    | null
  > | null;
  modules?: Array<
    | {
        __typename: 'EventSearch';
        title?: string | null;
        url?: string | null;
        module?: string | null;
        showAllLink?: string | null;
      }
    | {
        __typename: 'EventSearchCarousel';
        title?: string | null;
        url?: string | null;
        orderNewestFirst?: boolean | null;
        eventsNearby?: boolean | null;
        amountOfCards?: number | null;
        showAllLink?: string | null;
      }
    | {
        __typename: 'EventSelected';
        title?: string | null;
        events?: Array<string | null> | null;
        module?: string | null;
      }
    | {
        __typename: 'EventSelectedCarousel';
        title?: string | null;
        module?: string | null;
        eventsNearby?: boolean | null;
        events?: Array<string | null> | null;
        amountOfCardsPerRow?: number | null;
        amountOfCards?: number | null;
      }
    | { __typename?: 'LayoutArticleHighlights' }
    | {
        __typename: 'LayoutArticles';
        title?: string | null;
        showAllLink?: string | null;
        articles?: Array<{
          __typename?: 'Post';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
          categories?: {
            __typename?: 'PostToCategoryConnection';
            nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
          } | null;
        } | null> | null;
      }
    | {
        __typename: 'LayoutArticlesCarousel';
        title?: string | null;
        showMore?: Array<string | null> | null;
        showAllLink?: string | null;
        articles?: Array<{
          __typename?: 'Post';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
          categories?: {
            __typename?: 'PostToCategoryConnection';
            nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
          } | null;
        } | null> | null;
      }
    | { __typename?: 'LayoutCards' }
    | {
        __typename: 'LayoutCollection';
        collection?: {
          __typename?: 'Collection';
          title?: string | null;
        } | null;
      }
    | { __typename?: 'LayoutContact' }
    | { __typename?: 'LayoutContent' }
    | {
        __typename: 'LayoutPages';
        title?: string | null;
        description?: string | null;
        pages?: Array<{
          __typename?: 'Page';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
        } | null> | null;
      }
    | {
        __typename: 'LayoutPagesCarousel';
        title?: string | null;
        description?: string | null;
        pages?: Array<{
          __typename?: 'Page';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
        } | null> | null;
      }
    | {
        __typename: 'LocationsSelected';
        title?: string | null;
        locations?: Array<number | null> | null;
        module?: string | null;
      }
    | {
        __typename: 'LocationsSelectedCarousel';
        title?: string | null;
        locations?: Array<number | null> | null;
        module?: string | null;
      }
    | null
  > | null;
};

export type MenuQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type MenuQuery = {
  __typename?: 'RootQuery';
  menu?: {
    __typename?: 'Menu';
    id: string;
    menuItems?: {
      __typename?: 'MenuToMenuItemConnection';
      nodes: Array<{
        __typename?: 'MenuItem';
        id: string;
        order?: number | null;
        target?: string | null;
        title?: string | null;
        path?: string | null;
        label?: string | null;
        connectedNode?: {
          __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
          node:
            | { __typename?: 'Category' }
            | {
                __typename?: 'Page';
                id: string;
                content?: string | null;
                slug?: string | null;
                title?: string | null;
                uri?: string | null;
                link?: string | null;
                lead?: string | null;
                children?: {
                  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
                  nodes: Array<
                    | { __typename?: 'Collection' }
                    | { __typename?: 'Contact' }
                    | { __typename?: 'LandingPage' }
                    | { __typename?: 'MediaItem' }
                    | {
                        __typename?: 'Page';
                        id: string;
                        content?: string | null;
                        slug?: string | null;
                        title?: string | null;
                        uri?: string | null;
                        link?: string | null;
                        lead?: string | null;
                        translations?: Array<{
                          __typename?: 'Page';
                          uri?: string | null;
                          slug?: string | null;
                          id: string;
                          content?: string | null;
                          title?: string | null;
                          link?: string | null;
                          lead?: string | null;
                          language?: {
                            __typename?: 'Language';
                            code?: LanguageCodeEnum | null;
                            id: string;
                            locale?: string | null;
                            name?: string | null;
                            slug?: string | null;
                          } | null;
                          seo?: {
                            __typename?: 'SEO';
                            title?: string | null;
                            description?: string | null;
                            openGraphTitle?: string | null;
                            openGraphDescription?: string | null;
                            openGraphType?: string | null;
                            twitterTitle?: string | null;
                            twitterDescription?: string | null;
                            canonicalUrl?: string | null;
                            socialImage?: {
                              __typename?: 'MediaItem';
                              mediaItemUrl?: string | null;
                            } | null;
                          } | null;
                          translations?: Array<{
                            __typename?: 'Page';
                            uri?: string | null;
                            slug?: string | null;
                            language?: {
                              __typename?: 'Language';
                              code?: LanguageCodeEnum | null;
                              id: string;
                              locale?: string | null;
                              name?: string | null;
                              slug?: string | null;
                            } | null;
                            seo?: {
                              __typename?: 'SEO';
                              title?: string | null;
                              description?: string | null;
                              openGraphTitle?: string | null;
                              openGraphDescription?: string | null;
                              openGraphType?: string | null;
                              twitterTitle?: string | null;
                              twitterDescription?: string | null;
                              canonicalUrl?: string | null;
                              socialImage?: {
                                __typename?: 'MediaItem';
                                mediaItemUrl?: string | null;
                              } | null;
                            } | null;
                          } | null> | null;
                          featuredImage?: {
                            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                            node: {
                              __typename?: 'MediaItem';
                              mediaItemUrl?: string | null;
                              link?: string | null;
                              altText?: string | null;
                              mimeType?: string | null;
                              title?: string | null;
                              uri?: string | null;
                            };
                          } | null;
                          sidebar?: Array<
                            | {
                                __typename: 'LayoutArticles';
                                title?: string | null;
                                showAllLink?: string | null;
                                articles?: Array<{
                                  __typename?: 'Post';
                                  id: string;
                                  uri?: string | null;
                                  slug?: string | null;
                                  link?: string | null;
                                  date?: string | null;
                                  title?: string | null;
                                  lead?: string | null;
                                  featuredImage?: {
                                    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                                    node: {
                                      __typename?: 'MediaItem';
                                      altText?: string | null;
                                      mediaItemUrl?: string | null;
                                    };
                                  } | null;
                                  categories?: {
                                    __typename?: 'PostToCategoryConnection';
                                    nodes: Array<{
                                      __typename?: 'Category';
                                      name?: string | null;
                                    }>;
                                  } | null;
                                } | null> | null;
                              }
                            | { __typename?: 'LayoutCards' }
                            | {
                                __typename: 'LayoutLinkList';
                                anchor?: string | null;
                                title?: string | null;
                                description?: string | null;
                                links?: Array<{
                                  __typename?: 'Link';
                                  target?: string | null;
                                  title?: string | null;
                                  url?: string | null;
                                } | null> | null;
                              }
                            | {
                                __typename: 'LayoutPages';
                                title?: string | null;
                                description?: string | null;
                                pages?: Array<{
                                  __typename?: 'Page';
                                  id: string;
                                  uri?: string | null;
                                  slug?: string | null;
                                  link?: string | null;
                                  date?: string | null;
                                  title?: string | null;
                                  lead?: string | null;
                                  featuredImage?: {
                                    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                                    node: {
                                      __typename?: 'MediaItem';
                                      altText?: string | null;
                                      mediaItemUrl?: string | null;
                                    };
                                  } | null;
                                } | null> | null;
                              }
                            | null
                          > | null;
                          modules?: Array<
                            | {
                                __typename: 'EventSearch';
                                title?: string | null;
                                url?: string | null;
                                module?: string | null;
                                showAllLink?: string | null;
                              }
                            | {
                                __typename: 'EventSearchCarousel';
                                title?: string | null;
                                url?: string | null;
                                orderNewestFirst?: boolean | null;
                                eventsNearby?: boolean | null;
                                amountOfCards?: number | null;
                                showAllLink?: string | null;
                              }
                            | {
                                __typename: 'EventSelected';
                                title?: string | null;
                                events?: Array<string | null> | null;
                                module?: string | null;
                              }
                            | {
                                __typename: 'EventSelectedCarousel';
                                title?: string | null;
                                module?: string | null;
                                eventsNearby?: boolean | null;
                                events?: Array<string | null> | null;
                                amountOfCardsPerRow?: number | null;
                                amountOfCards?: number | null;
                              }
                            | { __typename?: 'LayoutArticleHighlights' }
                            | {
                                __typename: 'LayoutArticles';
                                title?: string | null;
                                showAllLink?: string | null;
                                articles?: Array<{
                                  __typename?: 'Post';
                                  id: string;
                                  uri?: string | null;
                                  slug?: string | null;
                                  link?: string | null;
                                  date?: string | null;
                                  title?: string | null;
                                  lead?: string | null;
                                  featuredImage?: {
                                    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                                    node: {
                                      __typename?: 'MediaItem';
                                      altText?: string | null;
                                      mediaItemUrl?: string | null;
                                    };
                                  } | null;
                                  categories?: {
                                    __typename?: 'PostToCategoryConnection';
                                    nodes: Array<{
                                      __typename?: 'Category';
                                      name?: string | null;
                                    }>;
                                  } | null;
                                } | null> | null;
                              }
                            | {
                                __typename: 'LayoutArticlesCarousel';
                                title?: string | null;
                                showMore?: Array<string | null> | null;
                                showAllLink?: string | null;
                                articles?: Array<{
                                  __typename?: 'Post';
                                  id: string;
                                  uri?: string | null;
                                  slug?: string | null;
                                  link?: string | null;
                                  date?: string | null;
                                  title?: string | null;
                                  lead?: string | null;
                                  featuredImage?: {
                                    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                                    node: {
                                      __typename?: 'MediaItem';
                                      altText?: string | null;
                                      mediaItemUrl?: string | null;
                                    };
                                  } | null;
                                  categories?: {
                                    __typename?: 'PostToCategoryConnection';
                                    nodes: Array<{
                                      __typename?: 'Category';
                                      name?: string | null;
                                    }>;
                                  } | null;
                                } | null> | null;
                              }
                            | { __typename?: 'LayoutCards' }
                            | {
                                __typename: 'LayoutCollection';
                                collection?: {
                                  __typename?: 'Collection';
                                  title?: string | null;
                                } | null;
                              }
                            | { __typename?: 'LayoutContact' }
                            | { __typename?: 'LayoutContent' }
                            | {
                                __typename: 'LayoutPages';
                                title?: string | null;
                                description?: string | null;
                                pages?: Array<{
                                  __typename?: 'Page';
                                  id: string;
                                  uri?: string | null;
                                  slug?: string | null;
                                  link?: string | null;
                                  date?: string | null;
                                  title?: string | null;
                                  lead?: string | null;
                                  featuredImage?: {
                                    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                                    node: {
                                      __typename?: 'MediaItem';
                                      altText?: string | null;
                                      mediaItemUrl?: string | null;
                                    };
                                  } | null;
                                } | null> | null;
                              }
                            | {
                                __typename: 'LayoutPagesCarousel';
                                title?: string | null;
                                description?: string | null;
                                pages?: Array<{
                                  __typename?: 'Page';
                                  id: string;
                                  uri?: string | null;
                                  slug?: string | null;
                                  link?: string | null;
                                  date?: string | null;
                                  title?: string | null;
                                  lead?: string | null;
                                  featuredImage?: {
                                    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                                    node: {
                                      __typename?: 'MediaItem';
                                      altText?: string | null;
                                      mediaItemUrl?: string | null;
                                    };
                                  } | null;
                                } | null> | null;
                              }
                            | {
                                __typename: 'LocationsSelected';
                                title?: string | null;
                                locations?: Array<number | null> | null;
                                module?: string | null;
                              }
                            | {
                                __typename: 'LocationsSelectedCarousel';
                                title?: string | null;
                                locations?: Array<number | null> | null;
                                module?: string | null;
                              }
                            | null
                          > | null;
                        } | null> | null;
                        seo?: {
                          __typename?: 'SEO';
                          title?: string | null;
                          description?: string | null;
                          openGraphTitle?: string | null;
                          openGraphDescription?: string | null;
                          openGraphType?: string | null;
                          twitterTitle?: string | null;
                          twitterDescription?: string | null;
                          canonicalUrl?: string | null;
                          socialImage?: {
                            __typename?: 'MediaItem';
                            mediaItemUrl?: string | null;
                          } | null;
                        } | null;
                        language?: {
                          __typename?: 'Language';
                          code?: LanguageCodeEnum | null;
                          id: string;
                          locale?: string | null;
                          name?: string | null;
                          slug?: string | null;
                        } | null;
                        featuredImage?: {
                          __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                          node: {
                            __typename?: 'MediaItem';
                            mediaItemUrl?: string | null;
                            link?: string | null;
                            altText?: string | null;
                            mimeType?: string | null;
                            title?: string | null;
                            uri?: string | null;
                          };
                        } | null;
                        sidebar?: Array<
                          | {
                              __typename: 'LayoutArticles';
                              title?: string | null;
                              showAllLink?: string | null;
                              articles?: Array<{
                                __typename?: 'Post';
                                id: string;
                                uri?: string | null;
                                slug?: string | null;
                                link?: string | null;
                                date?: string | null;
                                title?: string | null;
                                lead?: string | null;
                                featuredImage?: {
                                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                                  node: {
                                    __typename?: 'MediaItem';
                                    altText?: string | null;
                                    mediaItemUrl?: string | null;
                                  };
                                } | null;
                                categories?: {
                                  __typename?: 'PostToCategoryConnection';
                                  nodes: Array<{
                                    __typename?: 'Category';
                                    name?: string | null;
                                  }>;
                                } | null;
                              } | null> | null;
                            }
                          | { __typename?: 'LayoutCards' }
                          | {
                              __typename: 'LayoutLinkList';
                              anchor?: string | null;
                              title?: string | null;
                              description?: string | null;
                              links?: Array<{
                                __typename?: 'Link';
                                target?: string | null;
                                title?: string | null;
                                url?: string | null;
                              } | null> | null;
                            }
                          | {
                              __typename: 'LayoutPages';
                              title?: string | null;
                              description?: string | null;
                              pages?: Array<{
                                __typename?: 'Page';
                                id: string;
                                uri?: string | null;
                                slug?: string | null;
                                link?: string | null;
                                date?: string | null;
                                title?: string | null;
                                lead?: string | null;
                                featuredImage?: {
                                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                                  node: {
                                    __typename?: 'MediaItem';
                                    altText?: string | null;
                                    mediaItemUrl?: string | null;
                                  };
                                } | null;
                              } | null> | null;
                            }
                          | null
                        > | null;
                        modules?: Array<
                          | {
                              __typename: 'EventSearch';
                              title?: string | null;
                              url?: string | null;
                              module?: string | null;
                              showAllLink?: string | null;
                            }
                          | {
                              __typename: 'EventSearchCarousel';
                              title?: string | null;
                              url?: string | null;
                              orderNewestFirst?: boolean | null;
                              eventsNearby?: boolean | null;
                              amountOfCards?: number | null;
                              showAllLink?: string | null;
                            }
                          | {
                              __typename: 'EventSelected';
                              title?: string | null;
                              events?: Array<string | null> | null;
                              module?: string | null;
                            }
                          | {
                              __typename: 'EventSelectedCarousel';
                              title?: string | null;
                              module?: string | null;
                              eventsNearby?: boolean | null;
                              events?: Array<string | null> | null;
                              amountOfCardsPerRow?: number | null;
                              amountOfCards?: number | null;
                            }
                          | { __typename?: 'LayoutArticleHighlights' }
                          | {
                              __typename: 'LayoutArticles';
                              title?: string | null;
                              showAllLink?: string | null;
                              articles?: Array<{
                                __typename?: 'Post';
                                id: string;
                                uri?: string | null;
                                slug?: string | null;
                                link?: string | null;
                                date?: string | null;
                                title?: string | null;
                                lead?: string | null;
                                featuredImage?: {
                                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                                  node: {
                                    __typename?: 'MediaItem';
                                    altText?: string | null;
                                    mediaItemUrl?: string | null;
                                  };
                                } | null;
                                categories?: {
                                  __typename?: 'PostToCategoryConnection';
                                  nodes: Array<{
                                    __typename?: 'Category';
                                    name?: string | null;
                                  }>;
                                } | null;
                              } | null> | null;
                            }
                          | {
                              __typename: 'LayoutArticlesCarousel';
                              title?: string | null;
                              showMore?: Array<string | null> | null;
                              showAllLink?: string | null;
                              articles?: Array<{
                                __typename?: 'Post';
                                id: string;
                                uri?: string | null;
                                slug?: string | null;
                                link?: string | null;
                                date?: string | null;
                                title?: string | null;
                                lead?: string | null;
                                featuredImage?: {
                                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                                  node: {
                                    __typename?: 'MediaItem';
                                    altText?: string | null;
                                    mediaItemUrl?: string | null;
                                  };
                                } | null;
                                categories?: {
                                  __typename?: 'PostToCategoryConnection';
                                  nodes: Array<{
                                    __typename?: 'Category';
                                    name?: string | null;
                                  }>;
                                } | null;
                              } | null> | null;
                            }
                          | { __typename?: 'LayoutCards' }
                          | {
                              __typename: 'LayoutCollection';
                              collection?: {
                                __typename?: 'Collection';
                                title?: string | null;
                              } | null;
                            }
                          | { __typename?: 'LayoutContact' }
                          | { __typename?: 'LayoutContent' }
                          | {
                              __typename: 'LayoutPages';
                              title?: string | null;
                              description?: string | null;
                              pages?: Array<{
                                __typename?: 'Page';
                                id: string;
                                uri?: string | null;
                                slug?: string | null;
                                link?: string | null;
                                date?: string | null;
                                title?: string | null;
                                lead?: string | null;
                                featuredImage?: {
                                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                                  node: {
                                    __typename?: 'MediaItem';
                                    altText?: string | null;
                                    mediaItemUrl?: string | null;
                                  };
                                } | null;
                              } | null> | null;
                            }
                          | {
                              __typename: 'LayoutPagesCarousel';
                              title?: string | null;
                              description?: string | null;
                              pages?: Array<{
                                __typename?: 'Page';
                                id: string;
                                uri?: string | null;
                                slug?: string | null;
                                link?: string | null;
                                date?: string | null;
                                title?: string | null;
                                lead?: string | null;
                                featuredImage?: {
                                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                                  node: {
                                    __typename?: 'MediaItem';
                                    altText?: string | null;
                                    mediaItemUrl?: string | null;
                                  };
                                } | null;
                              } | null> | null;
                            }
                          | {
                              __typename: 'LocationsSelected';
                              title?: string | null;
                              locations?: Array<number | null> | null;
                              module?: string | null;
                            }
                          | {
                              __typename: 'LocationsSelectedCarousel';
                              title?: string | null;
                              locations?: Array<number | null> | null;
                              module?: string | null;
                            }
                          | null
                        > | null;
                      }
                    | { __typename?: 'Post' }
                    | { __typename?: 'Release' }
                    | { __typename?: 'Translation' }
                  >;
                } | null;
                translations?: Array<{
                  __typename?: 'Page';
                  uri?: string | null;
                  slug?: string | null;
                  id: string;
                  content?: string | null;
                  title?: string | null;
                  link?: string | null;
                  lead?: string | null;
                  language?: {
                    __typename?: 'Language';
                    code?: LanguageCodeEnum | null;
                    id: string;
                    locale?: string | null;
                    name?: string | null;
                    slug?: string | null;
                  } | null;
                  seo?: {
                    __typename?: 'SEO';
                    title?: string | null;
                    description?: string | null;
                    openGraphTitle?: string | null;
                    openGraphDescription?: string | null;
                    openGraphType?: string | null;
                    twitterTitle?: string | null;
                    twitterDescription?: string | null;
                    canonicalUrl?: string | null;
                    socialImage?: {
                      __typename?: 'MediaItem';
                      mediaItemUrl?: string | null;
                    } | null;
                  } | null;
                  translations?: Array<{
                    __typename?: 'Page';
                    uri?: string | null;
                    slug?: string | null;
                    language?: {
                      __typename?: 'Language';
                      code?: LanguageCodeEnum | null;
                      id: string;
                      locale?: string | null;
                      name?: string | null;
                      slug?: string | null;
                    } | null;
                    seo?: {
                      __typename?: 'SEO';
                      title?: string | null;
                      description?: string | null;
                      openGraphTitle?: string | null;
                      openGraphDescription?: string | null;
                      openGraphType?: string | null;
                      twitterTitle?: string | null;
                      twitterDescription?: string | null;
                      canonicalUrl?: string | null;
                      socialImage?: {
                        __typename?: 'MediaItem';
                        mediaItemUrl?: string | null;
                      } | null;
                    } | null;
                  } | null> | null;
                  featuredImage?: {
                    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                    node: {
                      __typename?: 'MediaItem';
                      mediaItemUrl?: string | null;
                      link?: string | null;
                      altText?: string | null;
                      mimeType?: string | null;
                      title?: string | null;
                      uri?: string | null;
                    };
                  } | null;
                  sidebar?: Array<
                    | {
                        __typename: 'LayoutArticles';
                        title?: string | null;
                        showAllLink?: string | null;
                        articles?: Array<{
                          __typename?: 'Post';
                          id: string;
                          uri?: string | null;
                          slug?: string | null;
                          link?: string | null;
                          date?: string | null;
                          title?: string | null;
                          lead?: string | null;
                          featuredImage?: {
                            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                            node: {
                              __typename?: 'MediaItem';
                              altText?: string | null;
                              mediaItemUrl?: string | null;
                            };
                          } | null;
                          categories?: {
                            __typename?: 'PostToCategoryConnection';
                            nodes: Array<{
                              __typename?: 'Category';
                              name?: string | null;
                            }>;
                          } | null;
                        } | null> | null;
                      }
                    | { __typename?: 'LayoutCards' }
                    | {
                        __typename: 'LayoutLinkList';
                        anchor?: string | null;
                        title?: string | null;
                        description?: string | null;
                        links?: Array<{
                          __typename?: 'Link';
                          target?: string | null;
                          title?: string | null;
                          url?: string | null;
                        } | null> | null;
                      }
                    | {
                        __typename: 'LayoutPages';
                        title?: string | null;
                        description?: string | null;
                        pages?: Array<{
                          __typename?: 'Page';
                          id: string;
                          uri?: string | null;
                          slug?: string | null;
                          link?: string | null;
                          date?: string | null;
                          title?: string | null;
                          lead?: string | null;
                          featuredImage?: {
                            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                            node: {
                              __typename?: 'MediaItem';
                              altText?: string | null;
                              mediaItemUrl?: string | null;
                            };
                          } | null;
                        } | null> | null;
                      }
                    | null
                  > | null;
                  modules?: Array<
                    | {
                        __typename: 'EventSearch';
                        title?: string | null;
                        url?: string | null;
                        module?: string | null;
                        showAllLink?: string | null;
                      }
                    | {
                        __typename: 'EventSearchCarousel';
                        title?: string | null;
                        url?: string | null;
                        orderNewestFirst?: boolean | null;
                        eventsNearby?: boolean | null;
                        amountOfCards?: number | null;
                        showAllLink?: string | null;
                      }
                    | {
                        __typename: 'EventSelected';
                        title?: string | null;
                        events?: Array<string | null> | null;
                        module?: string | null;
                      }
                    | {
                        __typename: 'EventSelectedCarousel';
                        title?: string | null;
                        module?: string | null;
                        eventsNearby?: boolean | null;
                        events?: Array<string | null> | null;
                        amountOfCardsPerRow?: number | null;
                        amountOfCards?: number | null;
                      }
                    | { __typename?: 'LayoutArticleHighlights' }
                    | {
                        __typename: 'LayoutArticles';
                        title?: string | null;
                        showAllLink?: string | null;
                        articles?: Array<{
                          __typename?: 'Post';
                          id: string;
                          uri?: string | null;
                          slug?: string | null;
                          link?: string | null;
                          date?: string | null;
                          title?: string | null;
                          lead?: string | null;
                          featuredImage?: {
                            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                            node: {
                              __typename?: 'MediaItem';
                              altText?: string | null;
                              mediaItemUrl?: string | null;
                            };
                          } | null;
                          categories?: {
                            __typename?: 'PostToCategoryConnection';
                            nodes: Array<{
                              __typename?: 'Category';
                              name?: string | null;
                            }>;
                          } | null;
                        } | null> | null;
                      }
                    | {
                        __typename: 'LayoutArticlesCarousel';
                        title?: string | null;
                        showMore?: Array<string | null> | null;
                        showAllLink?: string | null;
                        articles?: Array<{
                          __typename?: 'Post';
                          id: string;
                          uri?: string | null;
                          slug?: string | null;
                          link?: string | null;
                          date?: string | null;
                          title?: string | null;
                          lead?: string | null;
                          featuredImage?: {
                            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                            node: {
                              __typename?: 'MediaItem';
                              altText?: string | null;
                              mediaItemUrl?: string | null;
                            };
                          } | null;
                          categories?: {
                            __typename?: 'PostToCategoryConnection';
                            nodes: Array<{
                              __typename?: 'Category';
                              name?: string | null;
                            }>;
                          } | null;
                        } | null> | null;
                      }
                    | { __typename?: 'LayoutCards' }
                    | {
                        __typename: 'LayoutCollection';
                        collection?: {
                          __typename?: 'Collection';
                          title?: string | null;
                        } | null;
                      }
                    | { __typename?: 'LayoutContact' }
                    | { __typename?: 'LayoutContent' }
                    | {
                        __typename: 'LayoutPages';
                        title?: string | null;
                        description?: string | null;
                        pages?: Array<{
                          __typename?: 'Page';
                          id: string;
                          uri?: string | null;
                          slug?: string | null;
                          link?: string | null;
                          date?: string | null;
                          title?: string | null;
                          lead?: string | null;
                          featuredImage?: {
                            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                            node: {
                              __typename?: 'MediaItem';
                              altText?: string | null;
                              mediaItemUrl?: string | null;
                            };
                          } | null;
                        } | null> | null;
                      }
                    | {
                        __typename: 'LayoutPagesCarousel';
                        title?: string | null;
                        description?: string | null;
                        pages?: Array<{
                          __typename?: 'Page';
                          id: string;
                          uri?: string | null;
                          slug?: string | null;
                          link?: string | null;
                          date?: string | null;
                          title?: string | null;
                          lead?: string | null;
                          featuredImage?: {
                            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                            node: {
                              __typename?: 'MediaItem';
                              altText?: string | null;
                              mediaItemUrl?: string | null;
                            };
                          } | null;
                        } | null> | null;
                      }
                    | {
                        __typename: 'LocationsSelected';
                        title?: string | null;
                        locations?: Array<number | null> | null;
                        module?: string | null;
                      }
                    | {
                        __typename: 'LocationsSelectedCarousel';
                        title?: string | null;
                        locations?: Array<number | null> | null;
                        module?: string | null;
                      }
                    | null
                  > | null;
                } | null> | null;
                seo?: {
                  __typename?: 'SEO';
                  title?: string | null;
                  description?: string | null;
                  openGraphTitle?: string | null;
                  openGraphDescription?: string | null;
                  openGraphType?: string | null;
                  twitterTitle?: string | null;
                  twitterDescription?: string | null;
                  canonicalUrl?: string | null;
                  socialImage?: {
                    __typename?: 'MediaItem';
                    mediaItemUrl?: string | null;
                  } | null;
                } | null;
                language?: {
                  __typename?: 'Language';
                  code?: LanguageCodeEnum | null;
                  id: string;
                  locale?: string | null;
                  name?: string | null;
                  slug?: string | null;
                } | null;
                featuredImage?: {
                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                  node: {
                    __typename?: 'MediaItem';
                    mediaItemUrl?: string | null;
                    link?: string | null;
                    altText?: string | null;
                    mimeType?: string | null;
                    title?: string | null;
                    uri?: string | null;
                  };
                } | null;
                sidebar?: Array<
                  | {
                      __typename: 'LayoutArticles';
                      title?: string | null;
                      showAllLink?: string | null;
                      articles?: Array<{
                        __typename?: 'Post';
                        id: string;
                        uri?: string | null;
                        slug?: string | null;
                        link?: string | null;
                        date?: string | null;
                        title?: string | null;
                        lead?: string | null;
                        featuredImage?: {
                          __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                          node: {
                            __typename?: 'MediaItem';
                            altText?: string | null;
                            mediaItemUrl?: string | null;
                          };
                        } | null;
                        categories?: {
                          __typename?: 'PostToCategoryConnection';
                          nodes: Array<{
                            __typename?: 'Category';
                            name?: string | null;
                          }>;
                        } | null;
                      } | null> | null;
                    }
                  | { __typename?: 'LayoutCards' }
                  | {
                      __typename: 'LayoutLinkList';
                      anchor?: string | null;
                      title?: string | null;
                      description?: string | null;
                      links?: Array<{
                        __typename?: 'Link';
                        target?: string | null;
                        title?: string | null;
                        url?: string | null;
                      } | null> | null;
                    }
                  | {
                      __typename: 'LayoutPages';
                      title?: string | null;
                      description?: string | null;
                      pages?: Array<{
                        __typename?: 'Page';
                        id: string;
                        uri?: string | null;
                        slug?: string | null;
                        link?: string | null;
                        date?: string | null;
                        title?: string | null;
                        lead?: string | null;
                        featuredImage?: {
                          __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                          node: {
                            __typename?: 'MediaItem';
                            altText?: string | null;
                            mediaItemUrl?: string | null;
                          };
                        } | null;
                      } | null> | null;
                    }
                  | null
                > | null;
                modules?: Array<
                  | {
                      __typename: 'EventSearch';
                      title?: string | null;
                      url?: string | null;
                      module?: string | null;
                      showAllLink?: string | null;
                    }
                  | {
                      __typename: 'EventSearchCarousel';
                      title?: string | null;
                      url?: string | null;
                      orderNewestFirst?: boolean | null;
                      eventsNearby?: boolean | null;
                      amountOfCards?: number | null;
                      showAllLink?: string | null;
                    }
                  | {
                      __typename: 'EventSelected';
                      title?: string | null;
                      events?: Array<string | null> | null;
                      module?: string | null;
                    }
                  | {
                      __typename: 'EventSelectedCarousel';
                      title?: string | null;
                      module?: string | null;
                      eventsNearby?: boolean | null;
                      events?: Array<string | null> | null;
                      amountOfCardsPerRow?: number | null;
                      amountOfCards?: number | null;
                    }
                  | { __typename?: 'LayoutArticleHighlights' }
                  | {
                      __typename: 'LayoutArticles';
                      title?: string | null;
                      showAllLink?: string | null;
                      articles?: Array<{
                        __typename?: 'Post';
                        id: string;
                        uri?: string | null;
                        slug?: string | null;
                        link?: string | null;
                        date?: string | null;
                        title?: string | null;
                        lead?: string | null;
                        featuredImage?: {
                          __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                          node: {
                            __typename?: 'MediaItem';
                            altText?: string | null;
                            mediaItemUrl?: string | null;
                          };
                        } | null;
                        categories?: {
                          __typename?: 'PostToCategoryConnection';
                          nodes: Array<{
                            __typename?: 'Category';
                            name?: string | null;
                          }>;
                        } | null;
                      } | null> | null;
                    }
                  | {
                      __typename: 'LayoutArticlesCarousel';
                      title?: string | null;
                      showMore?: Array<string | null> | null;
                      showAllLink?: string | null;
                      articles?: Array<{
                        __typename?: 'Post';
                        id: string;
                        uri?: string | null;
                        slug?: string | null;
                        link?: string | null;
                        date?: string | null;
                        title?: string | null;
                        lead?: string | null;
                        featuredImage?: {
                          __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                          node: {
                            __typename?: 'MediaItem';
                            altText?: string | null;
                            mediaItemUrl?: string | null;
                          };
                        } | null;
                        categories?: {
                          __typename?: 'PostToCategoryConnection';
                          nodes: Array<{
                            __typename?: 'Category';
                            name?: string | null;
                          }>;
                        } | null;
                      } | null> | null;
                    }
                  | { __typename?: 'LayoutCards' }
                  | {
                      __typename: 'LayoutCollection';
                      collection?: {
                        __typename?: 'Collection';
                        title?: string | null;
                      } | null;
                    }
                  | { __typename?: 'LayoutContact' }
                  | { __typename?: 'LayoutContent' }
                  | {
                      __typename: 'LayoutPages';
                      title?: string | null;
                      description?: string | null;
                      pages?: Array<{
                        __typename?: 'Page';
                        id: string;
                        uri?: string | null;
                        slug?: string | null;
                        link?: string | null;
                        date?: string | null;
                        title?: string | null;
                        lead?: string | null;
                        featuredImage?: {
                          __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                          node: {
                            __typename?: 'MediaItem';
                            altText?: string | null;
                            mediaItemUrl?: string | null;
                          };
                        } | null;
                      } | null> | null;
                    }
                  | {
                      __typename: 'LayoutPagesCarousel';
                      title?: string | null;
                      description?: string | null;
                      pages?: Array<{
                        __typename?: 'Page';
                        id: string;
                        uri?: string | null;
                        slug?: string | null;
                        link?: string | null;
                        date?: string | null;
                        title?: string | null;
                        lead?: string | null;
                        featuredImage?: {
                          __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                          node: {
                            __typename?: 'MediaItem';
                            altText?: string | null;
                            mediaItemUrl?: string | null;
                          };
                        } | null;
                      } | null> | null;
                    }
                  | {
                      __typename: 'LocationsSelected';
                      title?: string | null;
                      locations?: Array<number | null> | null;
                      module?: string | null;
                    }
                  | {
                      __typename: 'LocationsSelectedCarousel';
                      title?: string | null;
                      locations?: Array<number | null> | null;
                      module?: string | null;
                    }
                  | null
                > | null;
              }
            | { __typename?: 'Post' }
            | { __typename?: 'Tag' };
        } | null;
      }>;
    } | null;
  } | null;
};

export type LayoutLinkListFragment = {
  __typename: 'LayoutLinkList';
  anchor?: string | null;
  title?: string | null;
  description?: string | null;
  links?: Array<{
    __typename?: 'Link';
    target?: string | null;
    title?: string | null;
    url?: string | null;
  } | null> | null;
};

export type LayoutArticlesFragment = {
  __typename: 'LayoutArticles';
  title?: string | null;
  showAllLink?: string | null;
  articles?: Array<{
    __typename?: 'Post';
    id: string;
    uri?: string | null;
    slug?: string | null;
    link?: string | null;
    date?: string | null;
    title?: string | null;
    lead?: string | null;
    featuredImage?: {
      __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
      node: {
        __typename?: 'MediaItem';
        altText?: string | null;
        mediaItemUrl?: string | null;
      };
    } | null;
    categories?: {
      __typename?: 'PostToCategoryConnection';
      nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
    } | null;
  } | null> | null;
};

export type LayoutArticlesCarouselFragment = {
  __typename: 'LayoutArticlesCarousel';
  title?: string | null;
  showMore?: Array<string | null> | null;
  showAllLink?: string | null;
  articles?: Array<{
    __typename?: 'Post';
    id: string;
    uri?: string | null;
    slug?: string | null;
    link?: string | null;
    date?: string | null;
    title?: string | null;
    lead?: string | null;
    featuredImage?: {
      __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
      node: {
        __typename?: 'MediaItem';
        altText?: string | null;
        mediaItemUrl?: string | null;
      };
    } | null;
    categories?: {
      __typename?: 'PostToCategoryConnection';
      nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
    } | null;
  } | null> | null;
};

export type LayoutPagesFragment = {
  __typename: 'LayoutPages';
  title?: string | null;
  description?: string | null;
  pages?: Array<{
    __typename?: 'Page';
    id: string;
    uri?: string | null;
    slug?: string | null;
    link?: string | null;
    date?: string | null;
    title?: string | null;
    lead?: string | null;
    featuredImage?: {
      __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
      node: {
        __typename?: 'MediaItem';
        altText?: string | null;
        mediaItemUrl?: string | null;
      };
    } | null;
  } | null> | null;
};

export type LayoutPagesCarouselFragment = {
  __typename: 'LayoutPagesCarousel';
  title?: string | null;
  description?: string | null;
  pages?: Array<{
    __typename?: 'Page';
    id: string;
    uri?: string | null;
    slug?: string | null;
    link?: string | null;
    date?: string | null;
    title?: string | null;
    lead?: string | null;
    featuredImage?: {
      __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
      node: {
        __typename?: 'MediaItem';
        altText?: string | null;
        mediaItemUrl?: string | null;
      };
    } | null;
  } | null> | null;
};

export type EventSearchFragment = {
  __typename: 'EventSearch';
  title?: string | null;
  url?: string | null;
  module?: string | null;
  showAllLink?: string | null;
};

export type EventSelectedFragment = {
  __typename: 'EventSelected';
  title?: string | null;
  events?: Array<string | null> | null;
  module?: string | null;
};

export type EventSearchCarouselFragment = {
  __typename: 'EventSearchCarousel';
  title?: string | null;
  url?: string | null;
  orderNewestFirst?: boolean | null;
  eventsNearby?: boolean | null;
  amountOfCards?: number | null;
  showAllLink?: string | null;
};

export type EventSelectedCarouselFragment = {
  __typename: 'EventSelectedCarousel';
  title?: string | null;
  module?: string | null;
  eventsNearby?: boolean | null;
  events?: Array<string | null> | null;
  amountOfCardsPerRow?: number | null;
  amountOfCards?: number | null;
};

export type LayoutCollectionFragment = {
  __typename: 'LayoutCollection';
  collection?: { __typename?: 'Collection'; title?: string | null } | null;
};

export type LayoutArticleHighlightsFragment = {
  __typename: 'LayoutArticleHighlights';
};

export type LayoutContactFragment = { __typename: 'LayoutContact' };

export type LocationsSelectedFragment = {
  __typename: 'LocationsSelected';
  title?: string | null;
  locations?: Array<number | null> | null;
  module?: string | null;
};

export type LocationsSelectedCarouselFragment = {
  __typename: 'LocationsSelectedCarousel';
  title?: string | null;
  locations?: Array<number | null> | null;
  module?: string | null;
};

export type NotificationQueryVariables = Exact<{
  language?: Scalars['String'];
}>;

export type NotificationQuery = {
  __typename?: 'RootQuery';
  notification?: {
    __typename?: 'Notification';
    content?: string | null;
    title?: string | null;
    level?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    linkText?: string | null;
    linkUrl?: string | null;
  } | null;
};

export type PageFragment = {
  __typename?: 'Page';
  id: string;
  content?: string | null;
  slug?: string | null;
  title?: string | null;
  uri?: string | null;
  link?: string | null;
  lead?: string | null;
  seo?: {
    __typename?: 'SEO';
    title?: string | null;
    description?: string | null;
    openGraphTitle?: string | null;
    openGraphDescription?: string | null;
    openGraphType?: string | null;
    twitterTitle?: string | null;
    twitterDescription?: string | null;
    canonicalUrl?: string | null;
    socialImage?: {
      __typename?: 'MediaItem';
      mediaItemUrl?: string | null;
    } | null;
  } | null;
  language?: {
    __typename?: 'Language';
    code?: LanguageCodeEnum | null;
    id: string;
    locale?: string | null;
    name?: string | null;
    slug?: string | null;
  } | null;
  translations?: Array<{
    __typename?: 'Page';
    uri?: string | null;
    slug?: string | null;
    language?: {
      __typename?: 'Language';
      code?: LanguageCodeEnum | null;
      id: string;
      locale?: string | null;
      name?: string | null;
      slug?: string | null;
    } | null;
    seo?: {
      __typename?: 'SEO';
      title?: string | null;
      description?: string | null;
      openGraphTitle?: string | null;
      openGraphDescription?: string | null;
      openGraphType?: string | null;
      twitterTitle?: string | null;
      twitterDescription?: string | null;
      canonicalUrl?: string | null;
      socialImage?: {
        __typename?: 'MediaItem';
        mediaItemUrl?: string | null;
      } | null;
    } | null;
  } | null> | null;
  featuredImage?: {
    __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
    node: {
      __typename?: 'MediaItem';
      mediaItemUrl?: string | null;
      link?: string | null;
      altText?: string | null;
      mimeType?: string | null;
      title?: string | null;
      uri?: string | null;
    };
  } | null;
  sidebar?: Array<
    | {
        __typename: 'LayoutArticles';
        title?: string | null;
        showAllLink?: string | null;
        articles?: Array<{
          __typename?: 'Post';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
          categories?: {
            __typename?: 'PostToCategoryConnection';
            nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
          } | null;
        } | null> | null;
      }
    | { __typename?: 'LayoutCards' }
    | {
        __typename: 'LayoutLinkList';
        anchor?: string | null;
        title?: string | null;
        description?: string | null;
        links?: Array<{
          __typename?: 'Link';
          target?: string | null;
          title?: string | null;
          url?: string | null;
        } | null> | null;
      }
    | {
        __typename: 'LayoutPages';
        title?: string | null;
        description?: string | null;
        pages?: Array<{
          __typename?: 'Page';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
        } | null> | null;
      }
    | null
  > | null;
  modules?: Array<
    | {
        __typename: 'EventSearch';
        title?: string | null;
        url?: string | null;
        module?: string | null;
        showAllLink?: string | null;
      }
    | {
        __typename: 'EventSearchCarousel';
        title?: string | null;
        url?: string | null;
        orderNewestFirst?: boolean | null;
        eventsNearby?: boolean | null;
        amountOfCards?: number | null;
        showAllLink?: string | null;
      }
    | {
        __typename: 'EventSelected';
        title?: string | null;
        events?: Array<string | null> | null;
        module?: string | null;
      }
    | {
        __typename: 'EventSelectedCarousel';
        title?: string | null;
        module?: string | null;
        eventsNearby?: boolean | null;
        events?: Array<string | null> | null;
        amountOfCardsPerRow?: number | null;
        amountOfCards?: number | null;
      }
    | { __typename?: 'LayoutArticleHighlights' }
    | {
        __typename: 'LayoutArticles';
        title?: string | null;
        showAllLink?: string | null;
        articles?: Array<{
          __typename?: 'Post';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
          categories?: {
            __typename?: 'PostToCategoryConnection';
            nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
          } | null;
        } | null> | null;
      }
    | {
        __typename: 'LayoutArticlesCarousel';
        title?: string | null;
        showMore?: Array<string | null> | null;
        showAllLink?: string | null;
        articles?: Array<{
          __typename?: 'Post';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
          categories?: {
            __typename?: 'PostToCategoryConnection';
            nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
          } | null;
        } | null> | null;
      }
    | { __typename?: 'LayoutCards' }
    | {
        __typename: 'LayoutCollection';
        collection?: {
          __typename?: 'Collection';
          title?: string | null;
        } | null;
      }
    | { __typename?: 'LayoutContact' }
    | { __typename?: 'LayoutContent' }
    | {
        __typename: 'LayoutPages';
        title?: string | null;
        description?: string | null;
        pages?: Array<{
          __typename?: 'Page';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
        } | null> | null;
      }
    | {
        __typename: 'LayoutPagesCarousel';
        title?: string | null;
        description?: string | null;
        pages?: Array<{
          __typename?: 'Page';
          id: string;
          uri?: string | null;
          slug?: string | null;
          link?: string | null;
          date?: string | null;
          title?: string | null;
          lead?: string | null;
          featuredImage?: {
            __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
            node: {
              __typename?: 'MediaItem';
              altText?: string | null;
              mediaItemUrl?: string | null;
            };
          } | null;
        } | null> | null;
      }
    | {
        __typename: 'LocationsSelected';
        title?: string | null;
        locations?: Array<number | null> | null;
        module?: string | null;
      }
    | {
        __typename: 'LocationsSelectedCarousel';
        title?: string | null;
        locations?: Array<number | null> | null;
        module?: string | null;
      }
    | null
  > | null;
};

export type PageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PageQuery = {
  __typename?: 'RootQuery';
  page?: {
    __typename?: 'Page';
    id: string;
    content?: string | null;
    slug?: string | null;
    title?: string | null;
    uri?: string | null;
    link?: string | null;
    lead?: string | null;
    seo?: {
      __typename?: 'SEO';
      title?: string | null;
      description?: string | null;
      openGraphTitle?: string | null;
      openGraphDescription?: string | null;
      openGraphType?: string | null;
      twitterTitle?: string | null;
      twitterDescription?: string | null;
      canonicalUrl?: string | null;
      socialImage?: {
        __typename?: 'MediaItem';
        mediaItemUrl?: string | null;
      } | null;
    } | null;
    language?: {
      __typename?: 'Language';
      code?: LanguageCodeEnum | null;
      id: string;
      locale?: string | null;
      name?: string | null;
      slug?: string | null;
    } | null;
    translations?: Array<{
      __typename?: 'Page';
      uri?: string | null;
      slug?: string | null;
      language?: {
        __typename?: 'Language';
        code?: LanguageCodeEnum | null;
        id: string;
        locale?: string | null;
        name?: string | null;
        slug?: string | null;
      } | null;
      seo?: {
        __typename?: 'SEO';
        title?: string | null;
        description?: string | null;
        openGraphTitle?: string | null;
        openGraphDescription?: string | null;
        openGraphType?: string | null;
        twitterTitle?: string | null;
        twitterDescription?: string | null;
        canonicalUrl?: string | null;
        socialImage?: {
          __typename?: 'MediaItem';
          mediaItemUrl?: string | null;
        } | null;
      } | null;
    } | null> | null;
    featuredImage?: {
      __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
      node: {
        __typename?: 'MediaItem';
        mediaItemUrl?: string | null;
        link?: string | null;
        altText?: string | null;
        mimeType?: string | null;
        title?: string | null;
        uri?: string | null;
      };
    } | null;
    sidebar?: Array<
      | {
          __typename: 'LayoutArticles';
          title?: string | null;
          showAllLink?: string | null;
          articles?: Array<{
            __typename?: 'Post';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
            categories?: {
              __typename?: 'PostToCategoryConnection';
              nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
            } | null;
          } | null> | null;
        }
      | { __typename?: 'LayoutCards' }
      | {
          __typename: 'LayoutLinkList';
          anchor?: string | null;
          title?: string | null;
          description?: string | null;
          links?: Array<{
            __typename?: 'Link';
            target?: string | null;
            title?: string | null;
            url?: string | null;
          } | null> | null;
        }
      | {
          __typename: 'LayoutPages';
          title?: string | null;
          description?: string | null;
          pages?: Array<{
            __typename?: 'Page';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
          } | null> | null;
        }
      | null
    > | null;
    modules?: Array<
      | {
          __typename: 'EventSearch';
          title?: string | null;
          url?: string | null;
          module?: string | null;
          showAllLink?: string | null;
        }
      | {
          __typename: 'EventSearchCarousel';
          title?: string | null;
          url?: string | null;
          orderNewestFirst?: boolean | null;
          eventsNearby?: boolean | null;
          amountOfCards?: number | null;
          showAllLink?: string | null;
        }
      | {
          __typename: 'EventSelected';
          title?: string | null;
          events?: Array<string | null> | null;
          module?: string | null;
        }
      | {
          __typename: 'EventSelectedCarousel';
          title?: string | null;
          module?: string | null;
          eventsNearby?: boolean | null;
          events?: Array<string | null> | null;
          amountOfCardsPerRow?: number | null;
          amountOfCards?: number | null;
        }
      | { __typename?: 'LayoutArticleHighlights' }
      | {
          __typename: 'LayoutArticles';
          title?: string | null;
          showAllLink?: string | null;
          articles?: Array<{
            __typename?: 'Post';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
            categories?: {
              __typename?: 'PostToCategoryConnection';
              nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
            } | null;
          } | null> | null;
        }
      | {
          __typename: 'LayoutArticlesCarousel';
          title?: string | null;
          showMore?: Array<string | null> | null;
          showAllLink?: string | null;
          articles?: Array<{
            __typename?: 'Post';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
            categories?: {
              __typename?: 'PostToCategoryConnection';
              nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
            } | null;
          } | null> | null;
        }
      | { __typename?: 'LayoutCards' }
      | {
          __typename: 'LayoutCollection';
          collection?: {
            __typename?: 'Collection';
            title?: string | null;
          } | null;
        }
      | { __typename?: 'LayoutContact' }
      | { __typename?: 'LayoutContent' }
      | {
          __typename: 'LayoutPages';
          title?: string | null;
          description?: string | null;
          pages?: Array<{
            __typename?: 'Page';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
          } | null> | null;
        }
      | {
          __typename: 'LayoutPagesCarousel';
          title?: string | null;
          description?: string | null;
          pages?: Array<{
            __typename?: 'Page';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
          } | null> | null;
        }
      | {
          __typename: 'LocationsSelected';
          title?: string | null;
          locations?: Array<number | null> | null;
          module?: string | null;
        }
      | {
          __typename: 'LocationsSelectedCarousel';
          title?: string | null;
          locations?: Array<number | null> | null;
          module?: string | null;
        }
      | null
    > | null;
  } | null;
};

export type PageByTemplateQueryVariables = Exact<{
  template?: InputMaybe<TemplateEnum>;
  language?: InputMaybe<Scalars['String']>;
}>;

export type PageByTemplateQuery = {
  __typename?: 'RootQuery';
  pageByTemplate?: {
    __typename?: 'Page';
    id: string;
    content?: string | null;
    slug?: string | null;
    title?: string | null;
    uri?: string | null;
    link?: string | null;
    lead?: string | null;
    seo?: {
      __typename?: 'SEO';
      title?: string | null;
      description?: string | null;
      openGraphTitle?: string | null;
      openGraphDescription?: string | null;
      openGraphType?: string | null;
      twitterTitle?: string | null;
      twitterDescription?: string | null;
      canonicalUrl?: string | null;
      socialImage?: {
        __typename?: 'MediaItem';
        mediaItemUrl?: string | null;
      } | null;
    } | null;
    language?: {
      __typename?: 'Language';
      code?: LanguageCodeEnum | null;
      id: string;
      locale?: string | null;
      name?: string | null;
      slug?: string | null;
    } | null;
    translations?: Array<{
      __typename?: 'Page';
      uri?: string | null;
      slug?: string | null;
      language?: {
        __typename?: 'Language';
        code?: LanguageCodeEnum | null;
        id: string;
        locale?: string | null;
        name?: string | null;
        slug?: string | null;
      } | null;
      seo?: {
        __typename?: 'SEO';
        title?: string | null;
        description?: string | null;
        openGraphTitle?: string | null;
        openGraphDescription?: string | null;
        openGraphType?: string | null;
        twitterTitle?: string | null;
        twitterDescription?: string | null;
        canonicalUrl?: string | null;
        socialImage?: {
          __typename?: 'MediaItem';
          mediaItemUrl?: string | null;
        } | null;
      } | null;
    } | null> | null;
    featuredImage?: {
      __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
      node: {
        __typename?: 'MediaItem';
        mediaItemUrl?: string | null;
        link?: string | null;
        altText?: string | null;
        mimeType?: string | null;
        title?: string | null;
        uri?: string | null;
      };
    } | null;
    sidebar?: Array<
      | {
          __typename: 'LayoutArticles';
          title?: string | null;
          showAllLink?: string | null;
          articles?: Array<{
            __typename?: 'Post';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
            categories?: {
              __typename?: 'PostToCategoryConnection';
              nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
            } | null;
          } | null> | null;
        }
      | { __typename?: 'LayoutCards' }
      | {
          __typename: 'LayoutLinkList';
          anchor?: string | null;
          title?: string | null;
          description?: string | null;
          links?: Array<{
            __typename?: 'Link';
            target?: string | null;
            title?: string | null;
            url?: string | null;
          } | null> | null;
        }
      | {
          __typename: 'LayoutPages';
          title?: string | null;
          description?: string | null;
          pages?: Array<{
            __typename?: 'Page';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
          } | null> | null;
        }
      | null
    > | null;
    modules?: Array<
      | {
          __typename: 'EventSearch';
          title?: string | null;
          url?: string | null;
          module?: string | null;
          showAllLink?: string | null;
        }
      | {
          __typename: 'EventSearchCarousel';
          title?: string | null;
          url?: string | null;
          orderNewestFirst?: boolean | null;
          eventsNearby?: boolean | null;
          amountOfCards?: number | null;
          showAllLink?: string | null;
        }
      | {
          __typename: 'EventSelected';
          title?: string | null;
          events?: Array<string | null> | null;
          module?: string | null;
        }
      | {
          __typename: 'EventSelectedCarousel';
          title?: string | null;
          module?: string | null;
          eventsNearby?: boolean | null;
          events?: Array<string | null> | null;
          amountOfCardsPerRow?: number | null;
          amountOfCards?: number | null;
        }
      | { __typename?: 'LayoutArticleHighlights' }
      | {
          __typename: 'LayoutArticles';
          title?: string | null;
          showAllLink?: string | null;
          articles?: Array<{
            __typename?: 'Post';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
            categories?: {
              __typename?: 'PostToCategoryConnection';
              nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
            } | null;
          } | null> | null;
        }
      | {
          __typename: 'LayoutArticlesCarousel';
          title?: string | null;
          showMore?: Array<string | null> | null;
          showAllLink?: string | null;
          articles?: Array<{
            __typename?: 'Post';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
            categories?: {
              __typename?: 'PostToCategoryConnection';
              nodes: Array<{ __typename?: 'Category'; name?: string | null }>;
            } | null;
          } | null> | null;
        }
      | { __typename?: 'LayoutCards' }
      | {
          __typename: 'LayoutCollection';
          collection?: {
            __typename?: 'Collection';
            title?: string | null;
          } | null;
        }
      | { __typename?: 'LayoutContact' }
      | { __typename?: 'LayoutContent' }
      | {
          __typename: 'LayoutPages';
          title?: string | null;
          description?: string | null;
          pages?: Array<{
            __typename?: 'Page';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
          } | null> | null;
        }
      | {
          __typename: 'LayoutPagesCarousel';
          title?: string | null;
          description?: string | null;
          pages?: Array<{
            __typename?: 'Page';
            id: string;
            uri?: string | null;
            slug?: string | null;
            link?: string | null;
            date?: string | null;
            title?: string | null;
            lead?: string | null;
            featuredImage?: {
              __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
              node: {
                __typename?: 'MediaItem';
                altText?: string | null;
                mediaItemUrl?: string | null;
              };
            } | null;
          } | null> | null;
        }
      | {
          __typename: 'LocationsSelected';
          title?: string | null;
          locations?: Array<number | null> | null;
          module?: string | null;
        }
      | {
          __typename: 'LocationsSelectedCarousel';
          title?: string | null;
          locations?: Array<number | null> | null;
          module?: string | null;
        }
      | null
    > | null;
  } | null;
};

export type PageChildrenSearchQueryVariables = Exact<{
  id: Scalars['ID'];
  idType?: InputMaybe<PageIdType>;
  search: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;

export type PageChildrenSearchQuery = {
  __typename?: 'RootQuery';
  page?: {
    __typename?: 'Page';
    id: string;
    children?: {
      __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
      pageInfo?: {
        __typename?: 'WPPageInfo';
        endCursor?: string | null;
        hasNextPage: boolean;
      } | null;
      edges: Array<{
        __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
        cursor?: string | null;
        node:
          | { __typename?: 'Collection' }
          | { __typename?: 'Contact' }
          | { __typename?: 'LandingPage' }
          | { __typename?: 'MediaItem' }
          | {
              __typename?: 'Page';
              id: string;
              content?: string | null;
              slug?: string | null;
              title?: string | null;
              uri?: string | null;
              link?: string | null;
              lead?: string | null;
              translations?: Array<{
                __typename?: 'Page';
                uri?: string | null;
                slug?: string | null;
                id: string;
                content?: string | null;
                title?: string | null;
                link?: string | null;
                lead?: string | null;
                language?: {
                  __typename?: 'Language';
                  code?: LanguageCodeEnum | null;
                  id: string;
                  locale?: string | null;
                  name?: string | null;
                  slug?: string | null;
                } | null;
                seo?: {
                  __typename?: 'SEO';
                  title?: string | null;
                  description?: string | null;
                  openGraphTitle?: string | null;
                  openGraphDescription?: string | null;
                  openGraphType?: string | null;
                  twitterTitle?: string | null;
                  twitterDescription?: string | null;
                  canonicalUrl?: string | null;
                  socialImage?: {
                    __typename?: 'MediaItem';
                    mediaItemUrl?: string | null;
                  } | null;
                } | null;
                translations?: Array<{
                  __typename?: 'Page';
                  uri?: string | null;
                  slug?: string | null;
                  language?: {
                    __typename?: 'Language';
                    code?: LanguageCodeEnum | null;
                    id: string;
                    locale?: string | null;
                    name?: string | null;
                    slug?: string | null;
                  } | null;
                  seo?: {
                    __typename?: 'SEO';
                    title?: string | null;
                    description?: string | null;
                    openGraphTitle?: string | null;
                    openGraphDescription?: string | null;
                    openGraphType?: string | null;
                    twitterTitle?: string | null;
                    twitterDescription?: string | null;
                    canonicalUrl?: string | null;
                    socialImage?: {
                      __typename?: 'MediaItem';
                      mediaItemUrl?: string | null;
                    } | null;
                  } | null;
                } | null> | null;
                featuredImage?: {
                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                  node: {
                    __typename?: 'MediaItem';
                    mediaItemUrl?: string | null;
                    link?: string | null;
                    altText?: string | null;
                    mimeType?: string | null;
                    title?: string | null;
                    uri?: string | null;
                  };
                } | null;
                sidebar?: Array<
                  | {
                      __typename: 'LayoutArticles';
                      title?: string | null;
                      showAllLink?: string | null;
                      articles?: Array<{
                        __typename?: 'Post';
                        id: string;
                        uri?: string | null;
                        slug?: string | null;
                        link?: string | null;
                        date?: string | null;
                        title?: string | null;
                        lead?: string | null;
                        featuredImage?: {
                          __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                          node: {
                            __typename?: 'MediaItem';
                            altText?: string | null;
                            mediaItemUrl?: string | null;
                          };
                        } | null;
                        categories?: {
                          __typename?: 'PostToCategoryConnection';
                          nodes: Array<{
                            __typename?: 'Category';
                            name?: string | null;
                          }>;
                        } | null;
                      } | null> | null;
                    }
                  | { __typename?: 'LayoutCards' }
                  | {
                      __typename: 'LayoutLinkList';
                      anchor?: string | null;
                      title?: string | null;
                      description?: string | null;
                      links?: Array<{
                        __typename?: 'Link';
                        target?: string | null;
                        title?: string | null;
                        url?: string | null;
                      } | null> | null;
                    }
                  | {
                      __typename: 'LayoutPages';
                      title?: string | null;
                      description?: string | null;
                      pages?: Array<{
                        __typename?: 'Page';
                        id: string;
                        uri?: string | null;
                        slug?: string | null;
                        link?: string | null;
                        date?: string | null;
                        title?: string | null;
                        lead?: string | null;
                        featuredImage?: {
                          __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                          node: {
                            __typename?: 'MediaItem';
                            altText?: string | null;
                            mediaItemUrl?: string | null;
                          };
                        } | null;
                      } | null> | null;
                    }
                  | null
                > | null;
                modules?: Array<
                  | {
                      __typename: 'EventSearch';
                      title?: string | null;
                      url?: string | null;
                      module?: string | null;
                      showAllLink?: string | null;
                    }
                  | {
                      __typename: 'EventSearchCarousel';
                      title?: string | null;
                      url?: string | null;
                      orderNewestFirst?: boolean | null;
                      eventsNearby?: boolean | null;
                      amountOfCards?: number | null;
                      showAllLink?: string | null;
                    }
                  | {
                      __typename: 'EventSelected';
                      title?: string | null;
                      events?: Array<string | null> | null;
                      module?: string | null;
                    }
                  | {
                      __typename: 'EventSelectedCarousel';
                      title?: string | null;
                      module?: string | null;
                      eventsNearby?: boolean | null;
                      events?: Array<string | null> | null;
                      amountOfCardsPerRow?: number | null;
                      amountOfCards?: number | null;
                    }
                  | { __typename?: 'LayoutArticleHighlights' }
                  | {
                      __typename: 'LayoutArticles';
                      title?: string | null;
                      showAllLink?: string | null;
                      articles?: Array<{
                        __typename?: 'Post';
                        id: string;
                        uri?: string | null;
                        slug?: string | null;
                        link?: string | null;
                        date?: string | null;
                        title?: string | null;
                        lead?: string | null;
                        featuredImage?: {
                          __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                          node: {
                            __typename?: 'MediaItem';
                            altText?: string | null;
                            mediaItemUrl?: string | null;
                          };
                        } | null;
                        categories?: {
                          __typename?: 'PostToCategoryConnection';
                          nodes: Array<{
                            __typename?: 'Category';
                            name?: string | null;
                          }>;
                        } | null;
                      } | null> | null;
                    }
                  | {
                      __typename: 'LayoutArticlesCarousel';
                      title?: string | null;
                      showMore?: Array<string | null> | null;
                      showAllLink?: string | null;
                      articles?: Array<{
                        __typename?: 'Post';
                        id: string;
                        uri?: string | null;
                        slug?: string | null;
                        link?: string | null;
                        date?: string | null;
                        title?: string | null;
                        lead?: string | null;
                        featuredImage?: {
                          __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                          node: {
                            __typename?: 'MediaItem';
                            altText?: string | null;
                            mediaItemUrl?: string | null;
                          };
                        } | null;
                        categories?: {
                          __typename?: 'PostToCategoryConnection';
                          nodes: Array<{
                            __typename?: 'Category';
                            name?: string | null;
                          }>;
                        } | null;
                      } | null> | null;
                    }
                  | { __typename?: 'LayoutCards' }
                  | {
                      __typename: 'LayoutCollection';
                      collection?: {
                        __typename?: 'Collection';
                        title?: string | null;
                      } | null;
                    }
                  | { __typename?: 'LayoutContact' }
                  | { __typename?: 'LayoutContent' }
                  | {
                      __typename: 'LayoutPages';
                      title?: string | null;
                      description?: string | null;
                      pages?: Array<{
                        __typename?: 'Page';
                        id: string;
                        uri?: string | null;
                        slug?: string | null;
                        link?: string | null;
                        date?: string | null;
                        title?: string | null;
                        lead?: string | null;
                        featuredImage?: {
                          __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                          node: {
                            __typename?: 'MediaItem';
                            altText?: string | null;
                            mediaItemUrl?: string | null;
                          };
                        } | null;
                      } | null> | null;
                    }
                  | {
                      __typename: 'LayoutPagesCarousel';
                      title?: string | null;
                      description?: string | null;
                      pages?: Array<{
                        __typename?: 'Page';
                        id: string;
                        uri?: string | null;
                        slug?: string | null;
                        link?: string | null;
                        date?: string | null;
                        title?: string | null;
                        lead?: string | null;
                        featuredImage?: {
                          __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                          node: {
                            __typename?: 'MediaItem';
                            altText?: string | null;
                            mediaItemUrl?: string | null;
                          };
                        } | null;
                      } | null> | null;
                    }
                  | {
                      __typename: 'LocationsSelected';
                      title?: string | null;
                      locations?: Array<number | null> | null;
                      module?: string | null;
                    }
                  | {
                      __typename: 'LocationsSelectedCarousel';
                      title?: string | null;
                      locations?: Array<number | null> | null;
                      module?: string | null;
                    }
                  | null
                > | null;
              } | null> | null;
              seo?: {
                __typename?: 'SEO';
                title?: string | null;
                description?: string | null;
                openGraphTitle?: string | null;
                openGraphDescription?: string | null;
                openGraphType?: string | null;
                twitterTitle?: string | null;
                twitterDescription?: string | null;
                canonicalUrl?: string | null;
                socialImage?: {
                  __typename?: 'MediaItem';
                  mediaItemUrl?: string | null;
                } | null;
              } | null;
              language?: {
                __typename?: 'Language';
                code?: LanguageCodeEnum | null;
                id: string;
                locale?: string | null;
                name?: string | null;
                slug?: string | null;
              } | null;
              featuredImage?: {
                __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                node: {
                  __typename?: 'MediaItem';
                  mediaItemUrl?: string | null;
                  link?: string | null;
                  altText?: string | null;
                  mimeType?: string | null;
                  title?: string | null;
                  uri?: string | null;
                };
              } | null;
              sidebar?: Array<
                | {
                    __typename: 'LayoutArticles';
                    title?: string | null;
                    showAllLink?: string | null;
                    articles?: Array<{
                      __typename?: 'Post';
                      id: string;
                      uri?: string | null;
                      slug?: string | null;
                      link?: string | null;
                      date?: string | null;
                      title?: string | null;
                      lead?: string | null;
                      featuredImage?: {
                        __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                        node: {
                          __typename?: 'MediaItem';
                          altText?: string | null;
                          mediaItemUrl?: string | null;
                        };
                      } | null;
                      categories?: {
                        __typename?: 'PostToCategoryConnection';
                        nodes: Array<{
                          __typename?: 'Category';
                          name?: string | null;
                        }>;
                      } | null;
                    } | null> | null;
                  }
                | { __typename?: 'LayoutCards' }
                | {
                    __typename: 'LayoutLinkList';
                    anchor?: string | null;
                    title?: string | null;
                    description?: string | null;
                    links?: Array<{
                      __typename?: 'Link';
                      target?: string | null;
                      title?: string | null;
                      url?: string | null;
                    } | null> | null;
                  }
                | {
                    __typename: 'LayoutPages';
                    title?: string | null;
                    description?: string | null;
                    pages?: Array<{
                      __typename?: 'Page';
                      id: string;
                      uri?: string | null;
                      slug?: string | null;
                      link?: string | null;
                      date?: string | null;
                      title?: string | null;
                      lead?: string | null;
                      featuredImage?: {
                        __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                        node: {
                          __typename?: 'MediaItem';
                          altText?: string | null;
                          mediaItemUrl?: string | null;
                        };
                      } | null;
                    } | null> | null;
                  }
                | null
              > | null;
              modules?: Array<
                | {
                    __typename: 'EventSearch';
                    title?: string | null;
                    url?: string | null;
                    module?: string | null;
                    showAllLink?: string | null;
                  }
                | {
                    __typename: 'EventSearchCarousel';
                    title?: string | null;
                    url?: string | null;
                    orderNewestFirst?: boolean | null;
                    eventsNearby?: boolean | null;
                    amountOfCards?: number | null;
                    showAllLink?: string | null;
                  }
                | {
                    __typename: 'EventSelected';
                    title?: string | null;
                    events?: Array<string | null> | null;
                    module?: string | null;
                  }
                | {
                    __typename: 'EventSelectedCarousel';
                    title?: string | null;
                    module?: string | null;
                    eventsNearby?: boolean | null;
                    events?: Array<string | null> | null;
                    amountOfCardsPerRow?: number | null;
                    amountOfCards?: number | null;
                  }
                | { __typename?: 'LayoutArticleHighlights' }
                | {
                    __typename: 'LayoutArticles';
                    title?: string | null;
                    showAllLink?: string | null;
                    articles?: Array<{
                      __typename?: 'Post';
                      id: string;
                      uri?: string | null;
                      slug?: string | null;
                      link?: string | null;
                      date?: string | null;
                      title?: string | null;
                      lead?: string | null;
                      featuredImage?: {
                        __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                        node: {
                          __typename?: 'MediaItem';
                          altText?: string | null;
                          mediaItemUrl?: string | null;
                        };
                      } | null;
                      categories?: {
                        __typename?: 'PostToCategoryConnection';
                        nodes: Array<{
                          __typename?: 'Category';
                          name?: string | null;
                        }>;
                      } | null;
                    } | null> | null;
                  }
                | {
                    __typename: 'LayoutArticlesCarousel';
                    title?: string | null;
                    showMore?: Array<string | null> | null;
                    showAllLink?: string | null;
                    articles?: Array<{
                      __typename?: 'Post';
                      id: string;
                      uri?: string | null;
                      slug?: string | null;
                      link?: string | null;
                      date?: string | null;
                      title?: string | null;
                      lead?: string | null;
                      featuredImage?: {
                        __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                        node: {
                          __typename?: 'MediaItem';
                          altText?: string | null;
                          mediaItemUrl?: string | null;
                        };
                      } | null;
                      categories?: {
                        __typename?: 'PostToCategoryConnection';
                        nodes: Array<{
                          __typename?: 'Category';
                          name?: string | null;
                        }>;
                      } | null;
                    } | null> | null;
                  }
                | { __typename?: 'LayoutCards' }
                | {
                    __typename: 'LayoutCollection';
                    collection?: {
                      __typename?: 'Collection';
                      title?: string | null;
                    } | null;
                  }
                | { __typename?: 'LayoutContact' }
                | { __typename?: 'LayoutContent' }
                | {
                    __typename: 'LayoutPages';
                    title?: string | null;
                    description?: string | null;
                    pages?: Array<{
                      __typename?: 'Page';
                      id: string;
                      uri?: string | null;
                      slug?: string | null;
                      link?: string | null;
                      date?: string | null;
                      title?: string | null;
                      lead?: string | null;
                      featuredImage?: {
                        __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                        node: {
                          __typename?: 'MediaItem';
                          altText?: string | null;
                          mediaItemUrl?: string | null;
                        };
                      } | null;
                    } | null> | null;
                  }
                | {
                    __typename: 'LayoutPagesCarousel';
                    title?: string | null;
                    description?: string | null;
                    pages?: Array<{
                      __typename?: 'Page';
                      id: string;
                      uri?: string | null;
                      slug?: string | null;
                      link?: string | null;
                      date?: string | null;
                      title?: string | null;
                      lead?: string | null;
                      featuredImage?: {
                        __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                        node: {
                          __typename?: 'MediaItem';
                          altText?: string | null;
                          mediaItemUrl?: string | null;
                        };
                      } | null;
                    } | null> | null;
                  }
                | {
                    __typename: 'LocationsSelected';
                    title?: string | null;
                    locations?: Array<number | null> | null;
                    module?: string | null;
                  }
                | {
                    __typename: 'LocationsSelectedCarousel';
                    title?: string | null;
                    locations?: Array<number | null> | null;
                    module?: string | null;
                  }
                | null
              > | null;
            }
          | { __typename?: 'Post' }
          | { __typename?: 'Release' }
          | { __typename?: 'Translation' };
      }>;
    } | null;
  } | null;
};

export type PagesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageCodeFilterEnum>;
}>;

export type PagesQuery = {
  __typename?: 'RootQuery';
  pages?: {
    __typename?: 'RootQueryToPageConnection';
    pageInfo?: {
      __typename?: 'WPPageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor?: string | null;
    } | null;
    edges: Array<{
      __typename?: 'RootQueryToPageConnectionEdge';
      cursor?: string | null;
      node: {
        __typename?: 'Page';
        id: string;
        content?: string | null;
        slug?: string | null;
        title?: string | null;
        uri?: string | null;
        link?: string | null;
        lead?: string | null;
        seo?: {
          __typename?: 'SEO';
          title?: string | null;
          description?: string | null;
          openGraphTitle?: string | null;
          openGraphDescription?: string | null;
          openGraphType?: string | null;
          twitterTitle?: string | null;
          twitterDescription?: string | null;
          canonicalUrl?: string | null;
          socialImage?: {
            __typename?: 'MediaItem';
            mediaItemUrl?: string | null;
          } | null;
        } | null;
        language?: {
          __typename?: 'Language';
          code?: LanguageCodeEnum | null;
          id: string;
          locale?: string | null;
          name?: string | null;
          slug?: string | null;
        } | null;
        translations?: Array<{
          __typename?: 'Page';
          uri?: string | null;
          slug?: string | null;
          language?: {
            __typename?: 'Language';
            code?: LanguageCodeEnum | null;
            id: string;
            locale?: string | null;
            name?: string | null;
            slug?: string | null;
          } | null;
          seo?: {
            __typename?: 'SEO';
            title?: string | null;
            description?: string | null;
            openGraphTitle?: string | null;
            openGraphDescription?: string | null;
            openGraphType?: string | null;
            twitterTitle?: string | null;
            twitterDescription?: string | null;
            canonicalUrl?: string | null;
            socialImage?: {
              __typename?: 'MediaItem';
              mediaItemUrl?: string | null;
            } | null;
          } | null;
        } | null> | null;
        featuredImage?: {
          __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
          node: {
            __typename?: 'MediaItem';
            mediaItemUrl?: string | null;
            link?: string | null;
            altText?: string | null;
            mimeType?: string | null;
            title?: string | null;
            uri?: string | null;
          };
        } | null;
        sidebar?: Array<
          | {
              __typename: 'LayoutArticles';
              title?: string | null;
              showAllLink?: string | null;
              articles?: Array<{
                __typename?: 'Post';
                id: string;
                uri?: string | null;
                slug?: string | null;
                link?: string | null;
                date?: string | null;
                title?: string | null;
                lead?: string | null;
                featuredImage?: {
                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                  node: {
                    __typename?: 'MediaItem';
                    altText?: string | null;
                    mediaItemUrl?: string | null;
                  };
                } | null;
                categories?: {
                  __typename?: 'PostToCategoryConnection';
                  nodes: Array<{
                    __typename?: 'Category';
                    name?: string | null;
                  }>;
                } | null;
              } | null> | null;
            }
          | { __typename?: 'LayoutCards' }
          | {
              __typename: 'LayoutLinkList';
              anchor?: string | null;
              title?: string | null;
              description?: string | null;
              links?: Array<{
                __typename?: 'Link';
                target?: string | null;
                title?: string | null;
                url?: string | null;
              } | null> | null;
            }
          | {
              __typename: 'LayoutPages';
              title?: string | null;
              description?: string | null;
              pages?: Array<{
                __typename?: 'Page';
                id: string;
                uri?: string | null;
                slug?: string | null;
                link?: string | null;
                date?: string | null;
                title?: string | null;
                lead?: string | null;
                featuredImage?: {
                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                  node: {
                    __typename?: 'MediaItem';
                    altText?: string | null;
                    mediaItemUrl?: string | null;
                  };
                } | null;
              } | null> | null;
            }
          | null
        > | null;
        modules?: Array<
          | {
              __typename: 'EventSearch';
              title?: string | null;
              url?: string | null;
              module?: string | null;
              showAllLink?: string | null;
            }
          | {
              __typename: 'EventSearchCarousel';
              title?: string | null;
              url?: string | null;
              orderNewestFirst?: boolean | null;
              eventsNearby?: boolean | null;
              amountOfCards?: number | null;
              showAllLink?: string | null;
            }
          | {
              __typename: 'EventSelected';
              title?: string | null;
              events?: Array<string | null> | null;
              module?: string | null;
            }
          | {
              __typename: 'EventSelectedCarousel';
              title?: string | null;
              module?: string | null;
              eventsNearby?: boolean | null;
              events?: Array<string | null> | null;
              amountOfCardsPerRow?: number | null;
              amountOfCards?: number | null;
            }
          | { __typename?: 'LayoutArticleHighlights' }
          | {
              __typename: 'LayoutArticles';
              title?: string | null;
              showAllLink?: string | null;
              articles?: Array<{
                __typename?: 'Post';
                id: string;
                uri?: string | null;
                slug?: string | null;
                link?: string | null;
                date?: string | null;
                title?: string | null;
                lead?: string | null;
                featuredImage?: {
                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                  node: {
                    __typename?: 'MediaItem';
                    altText?: string | null;
                    mediaItemUrl?: string | null;
                  };
                } | null;
                categories?: {
                  __typename?: 'PostToCategoryConnection';
                  nodes: Array<{
                    __typename?: 'Category';
                    name?: string | null;
                  }>;
                } | null;
              } | null> | null;
            }
          | {
              __typename: 'LayoutArticlesCarousel';
              title?: string | null;
              showMore?: Array<string | null> | null;
              showAllLink?: string | null;
              articles?: Array<{
                __typename?: 'Post';
                id: string;
                uri?: string | null;
                slug?: string | null;
                link?: string | null;
                date?: string | null;
                title?: string | null;
                lead?: string | null;
                featuredImage?: {
                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                  node: {
                    __typename?: 'MediaItem';
                    altText?: string | null;
                    mediaItemUrl?: string | null;
                  };
                } | null;
                categories?: {
                  __typename?: 'PostToCategoryConnection';
                  nodes: Array<{
                    __typename?: 'Category';
                    name?: string | null;
                  }>;
                } | null;
              } | null> | null;
            }
          | { __typename?: 'LayoutCards' }
          | {
              __typename: 'LayoutCollection';
              collection?: {
                __typename?: 'Collection';
                title?: string | null;
              } | null;
            }
          | { __typename?: 'LayoutContact' }
          | { __typename?: 'LayoutContent' }
          | {
              __typename: 'LayoutPages';
              title?: string | null;
              description?: string | null;
              pages?: Array<{
                __typename?: 'Page';
                id: string;
                uri?: string | null;
                slug?: string | null;
                link?: string | null;
                date?: string | null;
                title?: string | null;
                lead?: string | null;
                featuredImage?: {
                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                  node: {
                    __typename?: 'MediaItem';
                    altText?: string | null;
                    mediaItemUrl?: string | null;
                  };
                } | null;
              } | null> | null;
            }
          | {
              __typename: 'LayoutPagesCarousel';
              title?: string | null;
              description?: string | null;
              pages?: Array<{
                __typename?: 'Page';
                id: string;
                uri?: string | null;
                slug?: string | null;
                link?: string | null;
                date?: string | null;
                title?: string | null;
                lead?: string | null;
                featuredImage?: {
                  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
                  node: {
                    __typename?: 'MediaItem';
                    altText?: string | null;
                    mediaItemUrl?: string | null;
                  };
                } | null;
              } | null> | null;
            }
          | {
              __typename: 'LocationsSelected';
              title?: string | null;
              locations?: Array<number | null> | null;
              module?: string | null;
            }
          | {
              __typename: 'LocationsSelectedCarousel';
              title?: string | null;
              locations?: Array<number | null> | null;
              module?: string | null;
            }
          | null
        > | null;
      };
    }>;
  } | null;
};

export type SeoFragment = {
  __typename?: 'SEO';
  title?: string | null;
  description?: string | null;
  openGraphTitle?: string | null;
  openGraphDescription?: string | null;
  openGraphType?: string | null;
  twitterTitle?: string | null;
  twitterDescription?: string | null;
  canonicalUrl?: string | null;
  socialImage?: {
    __typename?: 'MediaItem';
    mediaItemUrl?: string | null;
  } | null;
};

export type TagQueryVariables = Exact<{
  id: Scalars['ID'];
  language: LanguageCodeEnum;
}>;

export type TagQuery = {
  __typename?: 'RootQuery';
  tag?: {
    __typename: 'Tag';
    id: string;
    databaseId: number;
    name?: string | null;
    slug?: string | null;
    translation?: {
      __typename?: 'Tag';
      name?: string | null;
      slug?: string | null;
      language?: {
        __typename?: 'Language';
        code?: LanguageCodeEnum | null;
        id: string;
        locale?: string | null;
        name?: string | null;
        slug?: string | null;
      } | null;
    } | null;
  } | null;
};

export type TagsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageCodeFilterEnum>;
}>;

export type TagsQuery = {
  __typename?: 'RootQuery';
  tags?: {
    __typename?: 'RootQueryToTagConnection';
    nodes: Array<{
      __typename: 'Tag';
      id: string;
      databaseId: number;
      name?: string | null;
      slug?: string | null;
      translations?: Array<{
        __typename?: 'Tag';
        name?: string | null;
        slug?: string | null;
        uri?: string | null;
        language?: {
          __typename?: 'Language';
          code?: LanguageCodeEnum | null;
          id: string;
          locale?: string | null;
          name?: string | null;
          slug?: string | null;
        } | null;
      } | null> | null;
    }>;
  } | null;
};

export const CategoriesFragmentDoc = gql`
  fragment Categories on PostToCategoryConnection {
    edges {
      node {
        id
        name
      }
    }
  }
`;
export const SeoFragmentDoc = gql`
  fragment SEO on SEO {
    title
    description
    openGraphTitle
    openGraphDescription
    openGraphType
    twitterTitle
    twitterDescription
    canonicalUrl
    socialImage {
      mediaItemUrl
    }
  }
`;
export const LanguageFragmentDoc = gql`
  fragment Language on Language {
    code
    id
    locale
    name
    slug
  }
`;
export const LayoutLinkListFragmentDoc = gql`
  fragment LayoutLinkList on LayoutLinkList {
    anchor
    title
    description
    links {
      target
      title
      url
    }
    __typename
  }
`;
export const LayoutArticlesFragmentDoc = gql`
  fragment LayoutArticles on LayoutArticles {
    title
    articles {
      id
      uri
      slug
      link
      date
      title
      lead
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
    showAllLink
    __typename
  }
`;
export const LayoutPagesFragmentDoc = gql`
  fragment LayoutPages on LayoutPages {
    title
    description
    pages {
      id
      uri
      slug
      link
      date
      title
      lead
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
    }
    __typename
  }
`;
export const LayoutArticlesCarouselFragmentDoc = gql`
  fragment LayoutArticlesCarousel on LayoutArticlesCarousel {
    title
    articles {
      id
      uri
      slug
      link
      date
      title
      lead
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
    showMore
    showAllLink
    __typename
  }
`;
export const LayoutPagesCarouselFragmentDoc = gql`
  fragment LayoutPagesCarousel on LayoutPagesCarousel {
    title
    description
    pages {
      id
      uri
      slug
      link
      date
      title
      lead
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
    }
    __typename
  }
`;
export const EventSearchFragmentDoc = gql`
  fragment EventSearch on EventSearch {
    title
    url
    module
    showAllLink
    __typename
  }
`;
export const EventSelectedFragmentDoc = gql`
  fragment EventSelected on EventSelected {
    title
    events
    module
    __typename
  }
`;
export const EventSearchCarouselFragmentDoc = gql`
  fragment EventSearchCarousel on EventSearchCarousel {
    title
    url
    orderNewestFirst
    eventsNearby
    amountOfCards
    showAllLink
    __typename
  }
`;
export const EventSelectedCarouselFragmentDoc = gql`
  fragment EventSelectedCarousel on EventSelectedCarousel {
    title
    module
    eventsNearby
    events
    amountOfCardsPerRow
    amountOfCards
    __typename
  }
`;
export const LayoutCollectionFragmentDoc = gql`
  fragment LayoutCollection on LayoutCollection {
    collection {
      title
    }
    __typename
  }
`;
export const LocationsSelectedFragmentDoc = gql`
  fragment LocationsSelected on LocationsSelected {
    title
    locations
    module
    __typename
  }
`;
export const LocationsSelectedCarouselFragmentDoc = gql`
  fragment LocationsSelectedCarousel on LocationsSelectedCarousel {
    title
    locations
    module
    __typename
  }
`;
export const PostFragmentDoc = gql`
  fragment Post on Post {
    id
    date
    content
    slug
    title
    uri
    link
    lead
    categories {
      ...Categories
    }
    seo {
      ...SEO
    }
    language {
      ...Language
    }
    translations {
      uri
      slug
      language {
        ...Language
      }
      seo {
        ...SEO
      }
    }
    featuredImage {
      node {
        mediaItemUrl
        link
        altText
        mimeType
        title
        uri
      }
    }
    sidebar {
      ... on LayoutLinkList {
        ...LayoutLinkList
      }
      ... on LayoutArticles {
        ...LayoutArticles
      }
      ... on LayoutPages {
        ...LayoutPages
      }
    }
    modules {
      ... on LayoutArticles {
        ...LayoutArticles
      }
      ... on LayoutArticlesCarousel {
        ...LayoutArticlesCarousel
      }
      ... on LayoutPages {
        ...LayoutPages
      }
      ... on LayoutPagesCarousel {
        ...LayoutPagesCarousel
      }
      ... on LayoutArticles {
        ...LayoutArticles
      }
      ... on LayoutArticlesCarousel {
        ...LayoutArticlesCarousel
      }
      ... on LayoutPages {
        ...LayoutPages
      }
      ... on LayoutPagesCarousel {
        ...LayoutPagesCarousel
      }
      ... on EventSearch {
        ...EventSearch
      }
      ... on EventSelected {
        ...EventSelected
      }
      ... on EventSearchCarousel {
        ...EventSearchCarousel
      }
      ... on EventSelectedCarousel {
        ...EventSelectedCarousel
      }
      ... on LayoutCollection {
        ...LayoutCollection
      }
      ... on LocationsSelected {
        ...LocationsSelected
      }
      ... on LocationsSelectedCarousel {
        ...LocationsSelectedCarousel
      }
    }
  }
  ${CategoriesFragmentDoc}
  ${SeoFragmentDoc}
  ${LanguageFragmentDoc}
  ${LayoutLinkListFragmentDoc}
  ${LayoutArticlesFragmentDoc}
  ${LayoutPagesFragmentDoc}
  ${LayoutArticlesCarouselFragmentDoc}
  ${LayoutPagesCarouselFragmentDoc}
  ${EventSearchFragmentDoc}
  ${EventSelectedFragmentDoc}
  ${EventSearchCarouselFragmentDoc}
  ${EventSelectedCarouselFragmentDoc}
  ${LayoutCollectionFragmentDoc}
  ${LocationsSelectedFragmentDoc}
  ${LocationsSelectedCarouselFragmentDoc}
`;
export const PageFragmentDoc = gql`
  fragment Page on Page {
    id
    content
    slug
    title
    uri
    link
    lead
    seo {
      ...SEO
    }
    language {
      ...Language
    }
    translations {
      uri
      slug
      language {
        ...Language
      }
      seo {
        ...SEO
      }
    }
    featuredImage {
      node {
        mediaItemUrl
        link
        altText
        mimeType
        title
        uri
      }
    }
    sidebar {
      ... on LayoutLinkList {
        ...LayoutLinkList
      }
      ... on LayoutArticles {
        ...LayoutArticles
      }
      ... on LayoutPages {
        ...LayoutPages
      }
    }
    modules {
      ... on LayoutArticles {
        ...LayoutArticles
      }
      ... on LayoutArticlesCarousel {
        ...LayoutArticlesCarousel
      }
      ... on LayoutPages {
        ...LayoutPages
      }
      ... on LayoutPagesCarousel {
        ...LayoutPagesCarousel
      }
      ... on EventSearch {
        ...EventSearch
      }
      ... on EventSelected {
        ...EventSelected
      }
      ... on EventSearchCarousel {
        ...EventSearchCarousel
      }
      ... on EventSelectedCarousel {
        ...EventSelectedCarousel
      }
      ... on LayoutCollection {
        ...LayoutCollection
      }
      ... on LocationsSelected {
        ...LocationsSelected
      }
      ... on LocationsSelectedCarousel {
        ...LocationsSelectedCarousel
      }
    }
  }
  ${SeoFragmentDoc}
  ${LanguageFragmentDoc}
  ${LayoutLinkListFragmentDoc}
  ${LayoutArticlesFragmentDoc}
  ${LayoutPagesFragmentDoc}
  ${LayoutArticlesCarouselFragmentDoc}
  ${LayoutPagesCarouselFragmentDoc}
  ${EventSearchFragmentDoc}
  ${EventSelectedFragmentDoc}
  ${EventSearchCarouselFragmentDoc}
  ${EventSelectedCarouselFragmentDoc}
  ${LayoutCollectionFragmentDoc}
  ${LocationsSelectedFragmentDoc}
  ${LocationsSelectedCarouselFragmentDoc}
`;
export const MenuPageFieldsFragmentDoc = gql`
  fragment menuPageFields on Page {
    ...Page
    translations {
      ...Page
    }
  }
  ${PageFragmentDoc}
`;
export const MenuItemFragmentDoc = gql`
  fragment MenuItem on MenuItem {
    id
    order
    target
    title
    path
    label
    connectedNode {
      node {
        ... on Page {
          ...menuPageFields
          children {
            nodes {
              ...menuPageFields
            }
          }
        }
      }
    }
  }
  ${MenuPageFieldsFragmentDoc}
`;
export const LayoutArticleHighlightsFragmentDoc = gql`
  fragment LayoutArticleHighlights on LayoutArticleHighlights {
    __typename
  }
`;
export const LayoutContactFragmentDoc = gql`
  fragment LayoutContact on LayoutContact {
    __typename
  }
`;
export const ArticleDocument = gql`
  query article($id: ID!) {
    post(id: $id, idType: URI) {
      ...Post
    }
  }
  ${PostFragmentDoc}
`;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArticleQuery(
  baseOptions: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(
    ArticleDocument,
    options,
  );
}
export function useArticleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ArticleQuery,
    ArticleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(
    ArticleDocument,
    options,
  );
}
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = Apollo.QueryResult<
  ArticleQuery,
  ArticleQueryVariables
>;
export const PostsDocument = gql`
  query posts(
    $first: Int
    $after: String
    $search: String
    $language: LanguageCodeFilterEnum
    $categories: [ID]
    $tags: [String]
  ) {
    posts(
      first: $first
      after: $after
      where: {
        search: $search
        language: $language
        categoryIn: $categories
        tagSlugIn: $tags
      }
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...Post
        }
      }
    }
  }
  ${PostFragmentDoc}
`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      search: // value for 'search'
 *      language: // value for 'language'
 *      categories: // value for 'categories'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function usePostsQuery(
  baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options,
  );
}
export function usePostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options,
  );
}
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<
  PostsQuery,
  PostsQueryVariables
>;
export const CategoriesDocument = gql`
  query categories(
    $first: Int
    $after: String
    $search: String
    $language: LanguageCodeFilterEnum
  ) {
    categories(
      first: $first
      after: $after
      where: { language: $language, search: $search }
    ) {
      nodes {
        id
        databaseId
        name
        slug
        uri
        translations {
          name
          slug
          uri
          language {
            ...Language
          }
        }
        __typename
      }
    }
  }
  ${LanguageFragmentDoc}
`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      search: // value for 'search'
 *      language: // value for 'language'
 *   },
 * });
 */
export function useCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    options,
  );
}
export function useCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    options,
  );
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<
  typeof useCategoriesLazyQuery
>;
export type CategoriesQueryResult = Apollo.QueryResult<
  CategoriesQuery,
  CategoriesQueryVariables
>;
export const CategoryDocument = gql`
  query category($id: ID!, $language: LanguageCodeEnum!) {
    category(id: $id, idType: SLUG) {
      id
      databaseId
      name
      slug
      translation(language: $language) {
        name
        slug
        language {
          ...Language
        }
      }
      __typename
    }
  }
  ${LanguageFragmentDoc}
`;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *      language: // value for 'language'
 *   },
 * });
 */
export function useCategoryQuery(
  baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(
    CategoryDocument,
    options,
  );
}
export function useCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoryQuery,
    CategoryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(
    CategoryDocument,
    options,
  );
}
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<
  typeof useCategoryLazyQuery
>;
export type CategoryQueryResult = Apollo.QueryResult<
  CategoryQuery,
  CategoryQueryVariables
>;
export const LandingPageDocument = gql`
  query landingPage($id: ID!, $languageCode: LanguageCodeEnum!) {
    landingPage(id: $id, idType: SLUG) {
      id
      desktopImage {
        edges {
          node {
            mediaItemUrl
          }
        }
      }
      translation(language: $languageCode) {
        title
        description
        heroLink
      }
    }
  }
`;

/**
 * __useLandingPageQuery__
 *
 * To run a query within a React component, call `useLandingPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useLandingPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLandingPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *      languageCode: // value for 'languageCode'
 *   },
 * });
 */
export function useLandingPageQuery(
  baseOptions: Apollo.QueryHookOptions<
    LandingPageQuery,
    LandingPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LandingPageQuery, LandingPageQueryVariables>(
    LandingPageDocument,
    options,
  );
}
export function useLandingPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LandingPageQuery,
    LandingPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LandingPageQuery, LandingPageQueryVariables>(
    LandingPageDocument,
    options,
  );
}
export type LandingPageQueryHookResult = ReturnType<typeof useLandingPageQuery>;
export type LandingPageLazyQueryHookResult = ReturnType<
  typeof useLandingPageLazyQuery
>;
export type LandingPageQueryResult = Apollo.QueryResult<
  LandingPageQuery,
  LandingPageQueryVariables
>;
export const LanguagesDocument = gql`
  query languages {
    languages {
      ...Language
    }
  }
  ${LanguageFragmentDoc}
`;

/**
 * __useLanguagesQuery__
 *
 * To run a query within a React component, call `useLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLanguagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useLanguagesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    LanguagesQuery,
    LanguagesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LanguagesQuery, LanguagesQueryVariables>(
    LanguagesDocument,
    options,
  );
}
export function useLanguagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LanguagesQuery,
    LanguagesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LanguagesQuery, LanguagesQueryVariables>(
    LanguagesDocument,
    options,
  );
}
export type LanguagesQueryHookResult = ReturnType<typeof useLanguagesQuery>;
export type LanguagesLazyQueryHookResult = ReturnType<
  typeof useLanguagesLazyQuery
>;
export type LanguagesQueryResult = Apollo.QueryResult<
  LanguagesQuery,
  LanguagesQueryVariables
>;
export const MenuDocument = gql`
  query menu($id: ID!) {
    menu(idType: NAME, id: $id) {
      id
      menuItems {
        nodes {
          ...MenuItem
        }
      }
    }
  }
  ${MenuItemFragmentDoc}
`;

/**
 * __useMenuQuery__
 *
 * To run a query within a React component, call `useMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMenuQuery(
  baseOptions: Apollo.QueryHookOptions<MenuQuery, MenuQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MenuQuery, MenuQueryVariables>(MenuDocument, options);
}
export function useMenuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MenuQuery, MenuQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MenuQuery, MenuQueryVariables>(
    MenuDocument,
    options,
  );
}
export type MenuQueryHookResult = ReturnType<typeof useMenuQuery>;
export type MenuLazyQueryHookResult = ReturnType<typeof useMenuLazyQuery>;
export type MenuQueryResult = Apollo.QueryResult<MenuQuery, MenuQueryVariables>;
export const NotificationDocument = gql`
  query notification($language: String! = "fi") {
    notification(language: $language) {
      content
      title
      level
      startDate
      endDate
      linkText
      linkUrl
    }
  }
`;

/**
 * __useNotificationQuery__
 *
 * To run a query within a React component, call `useNotificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationQuery({
 *   variables: {
 *      language: // value for 'language'
 *   },
 * });
 */
export function useNotificationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    NotificationQuery,
    NotificationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<NotificationQuery, NotificationQueryVariables>(
    NotificationDocument,
    options,
  );
}
export function useNotificationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NotificationQuery,
    NotificationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<NotificationQuery, NotificationQueryVariables>(
    NotificationDocument,
    options,
  );
}
export type NotificationQueryHookResult = ReturnType<
  typeof useNotificationQuery
>;
export type NotificationLazyQueryHookResult = ReturnType<
  typeof useNotificationLazyQuery
>;
export type NotificationQueryResult = Apollo.QueryResult<
  NotificationQuery,
  NotificationQueryVariables
>;
export const PageDocument = gql`
  query page($id: ID!) {
    page(id: $id, idType: URI) {
      ...Page
    }
  }
  ${PageFragmentDoc}
`;

/**
 * __usePageQuery__
 *
 * To run a query within a React component, call `usePageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePageQuery(
  baseOptions: Apollo.QueryHookOptions<PageQuery, PageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PageQuery, PageQueryVariables>(PageDocument, options);
}
export function usePageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageQuery, PageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PageQuery, PageQueryVariables>(
    PageDocument,
    options,
  );
}
export type PageQueryHookResult = ReturnType<typeof usePageQuery>;
export type PageLazyQueryHookResult = ReturnType<typeof usePageLazyQuery>;
export type PageQueryResult = Apollo.QueryResult<PageQuery, PageQueryVariables>;
export const PageByTemplateDocument = gql`
  query pageByTemplate($template: TemplateEnum, $language: String) {
    pageByTemplate(template: $template, language: $language) {
      ...Page
    }
  }
  ${PageFragmentDoc}
`;

/**
 * __usePageByTemplateQuery__
 *
 * To run a query within a React component, call `usePageByTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageByTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageByTemplateQuery({
 *   variables: {
 *      template: // value for 'template'
 *      language: // value for 'language'
 *   },
 * });
 */
export function usePageByTemplateQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PageByTemplateQuery,
    PageByTemplateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PageByTemplateQuery, PageByTemplateQueryVariables>(
    PageByTemplateDocument,
    options,
  );
}
export function usePageByTemplateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PageByTemplateQuery,
    PageByTemplateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PageByTemplateQuery, PageByTemplateQueryVariables>(
    PageByTemplateDocument,
    options,
  );
}
export type PageByTemplateQueryHookResult = ReturnType<
  typeof usePageByTemplateQuery
>;
export type PageByTemplateLazyQueryHookResult = ReturnType<
  typeof usePageByTemplateLazyQuery
>;
export type PageByTemplateQueryResult = Apollo.QueryResult<
  PageByTemplateQuery,
  PageByTemplateQueryVariables
>;
export const PageChildrenSearchDocument = gql`
  query PageChildrenSearch(
    $id: ID!
    $idType: PageIdType
    $search: String!
    $first: Int
    $after: String
  ) {
    page(id: $id, idType: $idType) {
      id
      children(where: { search: $search }, first: $first, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            ... on Page {
              ...Page
              translations {
                ...Page
              }
            }
          }
        }
      }
    }
  }
  ${PageFragmentDoc}
`;

/**
 * __usePageChildrenSearchQuery__
 *
 * To run a query within a React component, call `usePageChildrenSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageChildrenSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageChildrenSearchQuery({
 *   variables: {
 *      id: // value for 'id'
 *      idType: // value for 'idType'
 *      search: // value for 'search'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function usePageChildrenSearchQuery(
  baseOptions: Apollo.QueryHookOptions<
    PageChildrenSearchQuery,
    PageChildrenSearchQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PageChildrenSearchQuery,
    PageChildrenSearchQueryVariables
  >(PageChildrenSearchDocument, options);
}
export function usePageChildrenSearchLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PageChildrenSearchQuery,
    PageChildrenSearchQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PageChildrenSearchQuery,
    PageChildrenSearchQueryVariables
  >(PageChildrenSearchDocument, options);
}
export type PageChildrenSearchQueryHookResult = ReturnType<
  typeof usePageChildrenSearchQuery
>;
export type PageChildrenSearchLazyQueryHookResult = ReturnType<
  typeof usePageChildrenSearchLazyQuery
>;
export type PageChildrenSearchQueryResult = Apollo.QueryResult<
  PageChildrenSearchQuery,
  PageChildrenSearchQueryVariables
>;
export const PagesDocument = gql`
  query pages(
    $first: Int
    $after: String
    $search: String
    $language: LanguageCodeFilterEnum
  ) {
    pages(
      first: $first
      after: $after
      where: { search: $search, language: $language }
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...Page
        }
      }
    }
  }
  ${PageFragmentDoc}
`;

/**
 * __usePagesQuery__
 *
 * To run a query within a React component, call `usePagesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      search: // value for 'search'
 *      language: // value for 'language'
 *   },
 * });
 */
export function usePagesQuery(
  baseOptions?: Apollo.QueryHookOptions<PagesQuery, PagesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PagesQuery, PagesQueryVariables>(
    PagesDocument,
    options,
  );
}
export function usePagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PagesQuery, PagesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PagesQuery, PagesQueryVariables>(
    PagesDocument,
    options,
  );
}
export type PagesQueryHookResult = ReturnType<typeof usePagesQuery>;
export type PagesLazyQueryHookResult = ReturnType<typeof usePagesLazyQuery>;
export type PagesQueryResult = Apollo.QueryResult<
  PagesQuery,
  PagesQueryVariables
>;
export const TagDocument = gql`
  query tag($id: ID!, $language: LanguageCodeEnum!) {
    tag(id: $id, idType: SLUG) {
      id
      databaseId
      name
      slug
      translation(language: $language) {
        name
        slug
        language {
          ...Language
        }
      }
      __typename
    }
  }
  ${LanguageFragmentDoc}
`;

/**
 * __useTagQuery__
 *
 * To run a query within a React component, call `useTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagQuery({
 *   variables: {
 *      id: // value for 'id'
 *      language: // value for 'language'
 *   },
 * });
 */
export function useTagQuery(
  baseOptions: Apollo.QueryHookOptions<TagQuery, TagQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TagQuery, TagQueryVariables>(TagDocument, options);
}
export function useTagLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TagQuery, TagQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TagQuery, TagQueryVariables>(TagDocument, options);
}
export type TagQueryHookResult = ReturnType<typeof useTagQuery>;
export type TagLazyQueryHookResult = ReturnType<typeof useTagLazyQuery>;
export type TagQueryResult = Apollo.QueryResult<TagQuery, TagQueryVariables>;
export const TagsDocument = gql`
  query tags(
    $first: Int
    $after: String
    $search: String
    $language: LanguageCodeFilterEnum
  ) {
    tags(
      first: $first
      after: $after
      where: { language: $language, search: $search }
    ) {
      nodes {
        id
        databaseId
        name
        slug
        translations {
          name
          slug
          uri
          language {
            ...Language
          }
        }
        __typename
      }
    }
  }
  ${LanguageFragmentDoc}
`;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      search: // value for 'search'
 *      language: // value for 'language'
 *   },
 * });
 */
export function useTagsQuery(
  baseOptions?: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
}
export function useTagsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(
    TagsDocument,
    options,
  );
}
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;
