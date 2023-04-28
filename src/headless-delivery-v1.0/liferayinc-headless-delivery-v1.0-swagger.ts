/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BlogPostingImage {
  /** The image's relative URL. */
  contentUrl?: string;
  /** optional field with the content of the image in Base64, can be embedded with nestedFields */
  contentValue?: string;
  /** The image's content type (e.g., `application/png`, etc.). */
  encodingFormat?: string;
  /** The image's file extension. */
  fileExtension?: string;
  /**
   * The image's ID.
   * @format int64
   */
  id?: number;
  /**
   * The image's size in bytes.
   * @format int64
   */
  sizeInBytes?: number;
  /** The image's title text. */
  title?: string;
  viewableBy?: "Anyone" | "Members" | "Owner";
  /** @default "com.liferay.headless.delivery.dto.v1_0.BlogPostingImage" */
  "x-class-name"?: string;
}

export interface Facet {
  facetCriteria?: string;
  facetValues?: FacetValue[];
}

export interface FacetValue {
  /** @format int32 */
  numberOfOccurrences?: number;
  term?: string;
}

export interface PageBlogPostingImage {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: BlogPostingImage[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

export interface MultipartBody {
  values?: Record<string, string>;
}

/** The blog post's average rating. */
export interface AggregateRating {
  /**
   * The highest possible rating (by default normalized to 1.0).
   * @format double
   */
  bestRating?: number;
  /**
   * The average rating.
   * @format double
   */
  ratingAverage?: number;
  /**
   * The number of ratings.
   * @format int32
   */
  ratingCount?: number;
  /**
   * The rating value.
   * @format double
   */
  ratingValue?: number;
  /**
   * The lowest possible rating (by default normalized to 0.0).
   * @format double
   */
  worstRating?: number;
  /** @default "com.liferay.headless.delivery.dto.v1_0.AggregateRating" */
  "x-class-name"?: string;
}

/** Represents a blog post. See [BlogPosting](https://www.schema.org/BlogPosting) for more information. */
export interface BlogPosting {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The blog post's average rating. */
  aggregateRating?: AggregateRating;
  /** The blog post's subtitle. */
  alternativeHeadline?: string;
  /** The blog post's body (content). */
  articleBody: string;
  /** The wiki page's creator. */
  creator?: Creator;
  /** A list of the custom fields associated with the blog post. */
  customFields?: CustomField[];
  /**
   * The blog post's creation date.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The blog post's most recent modification date.
   * @format date-time
   */
  dateModified?: string;
  /**
   * The blog post's publication date.
   * @format date-time
   */
  datePublished?: string;
  /** The blog post's description. */
  description?: string;
  /** The blog post's media format (e.g., HTML, BBCode, etc.). */
  encodingFormat?: string;
  /** The blog post's external reference code. */
  externalReferenceCode?: string;
  /** The blog post's relative URL. */
  friendlyUrlPath?: string;
  /** The blog post's main title. */
  headline: string;
  /**
   * The blog post's identifier.
   * @format int64
   */
  id?: number;
  /** The blog post's cover image. */
  image?: Image;
  /** A list of keywords describing the blog post. */
  keywords?: string[];
  /**
   * The number of comments this blog post has received.
   * @format int32
   */
  numberOfComments?: number;
  /** A list of related contents to this blog post. */
  relatedContents?: RelatedContent[];
  /** A list of rendered blogs posts, which results from using a display page to process the blogs post and return HTML. */
  renderedContents?: RenderedContent[];
  /**
   * The ID of the site to which this blog post is scoped.
   * @format int64
   */
  siteId?: number;
  /** The categories associated with this blog post. */
  taxonomyCategoryBriefs?: TaxonomyCategoryBrief[];
  taxonomyCategoryIds?: number[];
  viewableBy?: "Anyone" | "Members" | "Owner";
  /** @default "com.liferay.headless.delivery.dto.v1_0.BlogPosting" */
  "x-class-name"?: string;
}

/** The wiki page's creator. */
export interface Creator {
  /** The author's additional name (e.g., middle name). */
  additionalName?: string;
  /** The type of the content. */
  contentType?: string;
  /** The author's surname. */
  familyName?: string;
  /** The author's first name. */
  givenName?: string;
  /**
   * The author's ID.
   * @format int64
   */
  id?: number;
  /** A relative URL to the author's profile image. */
  image?: string;
  /** The author's full name. */
  name?: string;
  /** A relative URL to the author's user profile. Optional field, can be embedded with nestedFields. */
  profileURL?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.Creator" */
  "x-class-name"?: string;
}

/** A list of the custom fields associated with the wiki page. */
export interface CustomField {
  /** The field's value. */
  customValue?: CustomValue;
  /** The field type (e.g., image, text, etc.). */
  dataType?: string;
  /** The field's internal name. This is valid for comparisons and unique in the structured content. */
  name?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.CustomField" */
  "x-class-name"?: string;
}

/** The field's value. */
export interface CustomValue {
  /** The field's content value for simple types. */
  data?: object;
  /** The localized field's content values for simple types. */
  data_i18n?: Record<string, string>;
  /** A point determined by latitude and longitude. */
  geo?: Geo;
  /** @default "com.liferay.headless.delivery.dto.v1_0.CustomValue" */
  "x-class-name"?: string;
}

/** A point determined by latitude and longitude. */
export interface Geo {
  /**
   * The latitude of a point in space.
   * @format double
   */
  latitude?: number;
  /**
   * The longitude of a point in space.
   * @format double
   */
  longitude?: number;
  /** @default "com.liferay.headless.delivery.dto.v1_0.Geo" */
  "x-class-name"?: string;
}

/** The blog post's cover image. */
export interface Image {
  /** The text describing the image. */
  caption?: string;
  /** The image's relative URL. */
  contentUrl?: string;
  /** optional field with the content of the image in Base64, can be embedded with nestedFields */
  contentValue?: string;
  /**
   * The image's ID. This can be used to retrieve more information in the `Document` API.
   * @format int64
   */
  imageId?: number;
  /** @default "com.liferay.headless.delivery.dto.v1_0.Image" */
  "x-class-name"?: string;
}

/** A list of related contents to this wiki page. */
export interface RelatedContent {
  /** The type of the content. */
  contentType?: string;
  /**
   * The identifier of the resource.
   * @format int64
   */
  id?: number;
  /** The title of the content. */
  title?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.RelatedContent" */
  "x-class-name"?: string;
}

/** A list of rendered content, which results from using a template to process the content and return HTML. */
export interface RenderedContent {
  /** The ID of the template or display page used to render the content. */
  contentTemplateId?: string;
  /** The name of the template or display page used to render the content. */
  contentTemplateName?: string;
  /** The localized names of the template or display page used to render the content. */
  contentTemplateName_i18n?: Record<string, string>;
  /** Specifies if the template or display page are marked as default to display the content. */
  markedAsDefault?: boolean;
  /** An absolute URL to the rendered content. */
  renderedContentURL?: string;
  /** Optional field with the rendered content, can be embedded with nestedFields. */
  renderedContentValue?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.RenderedContent" */
  "x-class-name"?: string;
}

/** The categories associated with this wiki page. */
export interface TaxonomyCategoryBrief {
  /** Optional field with the embedded taxonomy category, can be embedded with nestedFields */
  embeddedTaxonomyCategory?: object;
  /**
   * The category's ID. This can be used to retrieve more information in the `TaxonomyCategory` API.
   * @format int64
   */
  taxonomyCategoryId?: number;
  /** The category's name. */
  taxonomyCategoryName?: string;
  /** The localized category's names. */
  taxonomyCategoryName_i18n?: Record<string, string>;
  /** @default "com.liferay.headless.delivery.dto.v1_0.TaxonomyCategoryBrief" */
  "x-class-name"?: string;
}

export interface Rating {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /**
   * The best possible rating an asset can receive (normalized to 1.0 by default).
   * @format double
   */
  bestRating?: number;
  /** The wiki page's creator. */
  creator?: Creator;
  /**
   * The rating's creation date.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time a field of the rating changed.
   * @format date-time
   */
  dateModified?: string;
  /**
   * The rating's ID.
   * @format int64
   */
  id?: number;
  /**
   * The rating's value.
   * @format double
   */
  ratingValue?: number;
  /**
   * The worst possible rating an asset can receive (normalized to 0.0 by default).
   * @format double
   */
  worstRating?: number;
  /** @default "com.liferay.headless.delivery.dto.v1_0.Rating" */
  "x-class-name"?: string;
}

export interface PageBlogPosting {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: BlogPosting[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

export interface PagePermission {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: Permission[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

export interface Permission {
  actionIds?: string[];
  roleName?: string;
}

export interface Comment {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The wiki page's creator. */
  creator?: Creator;
  /**
   * The comment's creation date.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The comment's latest modification date.
   * @format date-time
   */
  dateModified?: string;
  /**
   * The comment's ID.
   * @format int64
   */
  id?: number;
  /**
   * The number of child comments on this comment.
   * @format int32
   */
  numberOfComments?: number;
  /**
   * the ID of the comment's parent, if it exists.
   * @format int64
   */
  parentCommentId?: number;
  /** The comment's text content. */
  text?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.Comment" */
  "x-class-name"?: string;
}

export interface PageComment {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: Comment[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

export interface ContentElement {
  /** The content's fields. */
  content?: object;
  /** The content set element's type. */
  contentType?: string;
  /**
   * The content set element's ID.
   * @format int64
   */
  id?: number;
  /** The content's title. */
  title?: string;
  /** The localized content's titles. */
  title_i18n?: Record<string, string>;
  /** @default "com.liferay.headless.delivery.dto.v1_0.ContentElement" */
  "x-class-name"?: string;
}

export interface PageContentElement {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: ContentElement[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

export interface ContentSetElement {
  /** The content's fields. */
  content?: object;
  /** The content set element's type. */
  contentType?: string;
  /**
   * The content set element's ID.
   * @format int64
   */
  id?: number;
  /** The content's title. */
  title?: string;
  /** The localized content's titles. */
  title_i18n?: Record<string, string>;
  /** @default "com.liferay.headless.delivery.dto.v1_0.ContentSetElement" */
  "x-class-name"?: string;
}

export interface PageContentSetElement {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: ContentSetElement[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

export interface ContentStructure {
  /** The key of the asset library to which the content structure is scoped. */
  assetLibraryKey?: string;
  /** The list of languages the content structure has a translation for. */
  availableLanguages?: string[];
  /** The list of the content structure's fields. */
  contentStructureFields?: ContentStructureField[];
  /** The wiki page's creator. */
  creator?: Creator;
  /**
   * The content structure's creation date.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time a field of the content structure changed.
   * @format date-time
   */
  dateModified?: string;
  /** The content structure's description. */
  description?: string;
  /** The localized content structure's description. */
  description_i18n?: Record<string, string>;
  /**
   * The content structure's ID.
   * @format int64
   */
  id?: number;
  /** The content structure's name. */
  name?: string;
  /** The localized content structure's names. */
  name_i18n?: Record<string, string>;
  /**
   * The ID of the site to which the content structure is scoped.
   * @format int64
   */
  siteId?: number;
  /** @default "com.liferay.headless.delivery.dto.v1_0.ContentStructure" */
  "x-class-name"?: string;
}

/** The list of the content structure's fields. */
export interface ContentStructureField {
  /** The form field's type (e.g., date, geolocation, text, etc.). */
  dataType?: string;
  /** The form field's input control type (e.g., text, textarea, select field, etc.). */
  inputControl?: string;
  /** The form field's label. */
  label?: string;
  /** The form field's labels. */
  label_i18n?: Record<string, string>;
  /** A flag that indicates whether the content is accessible in different languages. */
  localizable?: boolean;
  /** A flag that indicates whether the form field can have several values. */
  multiple?: boolean;
  /** The form field's name. */
  name?: string;
  /** The child content structure fields that depend on this form field. */
  nestedContentStructureFields?: ContentStructureField[];
  /** The list of different possible values. */
  options?: Option[];
  /** The form field's default value. */
  predefinedValue?: string;
  /** The localized form field's default values. */
  predefinedValue_i18n?: Record<string, string>;
  /** A flag that indicates whether this content can be rendered (and answered) several times. */
  repeatable?: boolean;
  /** A flag that indicates whether this form field is required. */
  required?: boolean;
  /** A flag that indicates whether the structure's end target should render the field label. */
  showLabel?: boolean;
  /** @default "com.liferay.headless.delivery.dto.v1_0.ContentStructureField" */
  "x-class-name"?: string;
}

/** The list of different possible values. */
export interface Option {
  /** The option's label. */
  label?: string;
  /** The localized option's labels. */
  label_i18n?: Record<string, string>;
  /** The internal value of the field option. */
  value?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.Option" */
  "x-class-name"?: string;
}

export interface PageContentStructure {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: ContentStructure[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

/** Represents a content template. */
export interface ContentTemplate {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The key of the asset library to which the content template is scoped. */
  assetLibraryKey?: string;
  /** The list of languages the content template has a translation for. */
  availableLanguages?: string[];
  /**
   * The ID of the `ContentStructure`.
   * @format int64
   */
  contentStructureId: number;
  /** The wiki page's creator. */
  creator?: Creator;
  /**
   * The content template's creation date.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time the content template changed.
   * @format date-time
   */
  dateModified?: string;
  /** the content template's description. */
  description?: string;
  /** the localized content template's descriptions. */
  description_i18n?: Record<string, string>;
  /** The content template's ID. */
  id?: string;
  /** the content template's name. */
  name: string;
  /** the localized content template's name. */
  name_i18n?: Record<string, string>;
  /** the content template's programming language. */
  programmingLanguage?: string;
  /**
   * The ID of the site to which the content template is scoped.
   * @format int64
   */
  siteId?: number;
  /** The content template's script. */
  templateScript?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.ContentTemplate" */
  "x-class-name"?: string;
}

export interface PageContentTemplate {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: ContentTemplate[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

/** Represents a document folder that can contain documents and other folders. */
export interface DocumentFolder {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The key of the asset library to which the folder is scoped. */
  assetLibraryKey?: string;
  /** The wiki page's creator. */
  creator?: Creator;
  /** A list of the custom fields associated with the folder. */
  customFields?: CustomField[];
  /**
   * The folder's creation date.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time a field of the folder changed.
   * @format date-time
   */
  dateModified?: string;
  /** The folder's description. */
  description?: string;
  /**
   * The folder's ID.
   * @format int64
   */
  id?: number;
  /** The folder's main title/name. */
  name: string;
  /**
   * The number of this folder's child folders.
   * @format int32
   */
  numberOfDocumentFolders?: number;
  /**
   * The number of documents in this folder.
   * @format int32
   */
  numberOfDocuments?: number;
  /**
   * The ID of the folder's parent, if it exists.
   * @format int64
   */
  parentDocumentFolderId?: number;
  /**
   * The ID of the site to which this folder is scoped.
   * @format int64
   */
  siteId?: number;
  /** A flag that indicates whether the user making the requests is subscribed to this folder. */
  subscribed?: boolean;
  viewableBy?: "Anyone" | "Members" | "Owner";
  /** @default "com.liferay.headless.delivery.dto.v1_0.DocumentFolder" */
  "x-class-name"?: string;
}

export interface PageDocumentFolder {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: DocumentFolder[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

/** An array of images in several resolutions and sizes, created by the Adaptive Media framework. */
export interface AdaptedImage {
  /** The image's relative URL. */
  contentUrl?: string;
  /** Optional field with the content of the image in Base64, can be embedded with nestedFields. */
  contentValue?: string;
  /**
   * The image's height in pixels.
   * @format int32
   */
  height?: number;
  /** The name of the image's Adaptive Media image resolution. */
  resolutionName?: string;
  /**
   * The image's size in bytes.
   * @format int64
   */
  sizeInBytes?: number;
  /**
   * The image's width in pixels.
   * @format int32
   */
  width?: number;
  /** @default "com.liferay.headless.delivery.dto.v1_0.AdaptedImage" */
  "x-class-name"?: string;
}

/** A content document element that stores an image file. */
export interface ContentDocument {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The type of content. */
  contentType?: string;
  /** The document's relative URL. */
  contentUrl?: string;
  /** optional field with the content of the document in Base64, can be embedded with nestedFields */
  contentValue?: string;
  /** The document's description. */
  description?: string;
  /** The document's content type (e.g., `application/pdf`, etc.). */
  encodingFormat?: string;
  /** The document's file extension. */
  fileExtension?: string;
  /**
   * The document's ID.
   * @format int64
   */
  id?: number;
  /**
   * The document's file size in bytes.
   * @format int64
   */
  sizeInBytes?: number;
  /** The document's title. */
  title?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.ContentDocument" */
  "x-class-name"?: string;
}

/** The list of fields that store the structured content's information. */
export interface ContentField {
  /** The localized field's values. */
  contentFieldValue?: ContentFieldValue;
  /** The localized field's values. */
  contentFieldValue_i18n?: Record<string, ContentFieldValue>;
  /** The field type (e.g., image, text, etc.). */
  dataType?: string;
  /** The field's control type (e.g., text, text area, etc.). */
  inputControl?: string;
  /** The field's label. */
  label?: string;
  /** The localized field's labels. */
  label_i18n?: Record<string, string>;
  /** The field's internal name. This is valid for comparisons and unique in the structured content. */
  name?: string;
  /** A list of child content fields that depend on this resource. */
  nestedContentFields?: ContentField[];
  /** A flag that indicates whether this field can be rendered multiple times. */
  repeatable?: boolean;
  /** @default "com.liferay.headless.delivery.dto.v1_0.ContentField" */
  "x-class-name"?: string;
}

/** The localized field's values. */
export interface ContentFieldValue {
  /** The field's content for simple types. */
  data?: string;
  /** A content document element that stores an image file. */
  document?: ContentDocument;
  /** A point determined by latitude and longitude. */
  geo?: Geo;
  /** A content document element that stores an image file. */
  image?: ContentDocument;
  /** A link to a page on the server. */
  link?: string;
  /** A link to structured content on the server. */
  structuredContentLink?: StructuredContentLink;
  /** @default "com.liferay.headless.delivery.dto.v1_0.ContentFieldValue" */
  "x-class-name"?: string;
}

export interface Document {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** An array of images in several resolutions and sizes, created by the Adaptive Media framework. */
  adaptedImages?: AdaptedImage[];
  /** The blog post's average rating. */
  aggregateRating?: AggregateRating;
  /** The key of the asset library to which the document is scoped. */
  assetLibraryKey?: string;
  /** The document's relative URL. */
  contentUrl?: string;
  /** The optional field with the content of the document in Base64, can be embedded with nestedFields. */
  contentValue?: string;
  /** The wiki page's creator. */
  creator?: Creator;
  /** A list of the custom fields associated with the document. */
  customFields?: CustomField[];
  /**
   * The document's creation date.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time a field of the document changed.
   * @format date-time
   */
  dateModified?: string;
  /** The document's description. */
  description?: string;
  /**
   * The ID of the `DocumentFolder` where this document is stored.
   * @format int64
   */
  documentFolderId?: number;
  documentType?: DocumentType;
  /** The document's content type (e.g., `application/pdf`, etc.). */
  encodingFormat?: string;
  /** The document's external reference code. */
  externalReferenceCode?: string;
  /** The document's file extension. */
  fileExtension?: string;
  /**
   * The document's ID.
   * @format int64
   */
  id?: number;
  /** A list of keywords describing the document. */
  keywords?: string[];
  /**
   * The number of comments on the document.
   * @format int32
   */
  numberOfComments?: number;
  /** A list of related contents to this document. */
  relatedContents?: RelatedContent[];
  /** A list of rendered documents, which results from using a display page to process the document and return HTML. */
  renderedContents?: RenderedContent[];
  /**
   * The ID of the site to which this document is scoped.
   * @format int64
   */
  siteId?: number;
  /**
   * The document's size in bytes.
   * @format int64
   */
  sizeInBytes?: number;
  /** The categories associated with this document. */
  taxonomyCategoryBriefs?: TaxonomyCategoryBrief[];
  taxonomyCategoryIds?: number[];
  /** The document's main title/name. */
  title?: string;
  viewableBy?: "Anyone" | "Members" | "Owner";
  /** @default "com.liferay.headless.delivery.dto.v1_0.Document" */
  "x-class-name"?: string;
}

export interface DocumentType {
  /** The list of languages the document type has a translation for. */
  availableLanguages?: string[];
  /** The list of content fields the document type has. */
  contentFields?: ContentField[];
  /** The document type's description. */
  description?: string;
  /** The localized document type's description. */
  description_i18n?: Record<string, string>;
  /** The document type's name. */
  name?: string;
  /** The localized document type's name. */
  name_i18n?: Record<string, string>;
  /** @default "com.liferay.headless.delivery.dto.v1_0.DocumentType" */
  "x-class-name"?: string;
}

export interface PageDocument {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: Document[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

/** Represents content that has fields and is rendered by a template backed by a `ContentStructure`. This is modeled internally as a `JournalArticle`. */
export interface StructuredContent {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The blog post's average rating. */
  aggregateRating?: AggregateRating;
  /** The key of the asset library to which the structure content is scoped. */
  assetLibraryKey?: string;
  /** The list of languages the structured content has a translation for. */
  availableLanguages?: string[];
  /** The list of fields that store the structured content's information. */
  contentFields?: ContentField[];
  /**
   * The ID of the `ContentStructure`.
   * @format int64
   */
  contentStructureId: number;
  /** The wiki page's creator. */
  creator?: Creator;
  /** A list of the custom fields associated with the structured content. */
  customFields?: CustomField[];
  /**
   * The structured content's creation date.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time any field of the structured content was changed.
   * @format date-time
   */
  dateModified?: string;
  /**
   * The structured content's most recent publication date.
   * @format date-time
   */
  datePublished?: string;
  /** The structured content's description. */
  description?: string;
  /** The localized structured content's descriptions. */
  description_i18n?: Record<string, string>;
  /** The structured content's external reference code. */
  externalReferenceCode?: string;
  /** A relative URL to the structured content's rendered content. */
  friendlyUrlPath?: string;
  /** The localized relative URLs to the structured content's rendered content. */
  friendlyUrlPath_i18n?: Record<string, string>;
  /**
   * The structured content's ID.
   * @format int64
   */
  id?: number;
  /** An identifier, independent of the database, that can be used to reference the structured content. */
  key?: string;
  /** A list of keywords describing the structured content. */
  keywords?: string[];
  /**
   * The number of comments the structured content has received.
   * @format int32
   */
  numberOfComments?: number;
  /** A list of related contents to this structured content. */
  relatedContents?: RelatedContent[];
  /** A list of rendered content, which results from using a template to process the content and return HTML. */
  renderedContents?: RenderedContent[];
  /**
   * The ID of the site to which this structured content is scoped.
   * @format int64
   */
  siteId?: number;
  /** A flag that indicates whether the user making the requests is subscribed to this structured content. */
  subscribed?: boolean;
  /** The categories associated with this structured content. */
  taxonomyCategoryBriefs?: TaxonomyCategoryBrief[];
  taxonomyCategoryIds?: number[];
  /** The structured content's main title. */
  title: string;
  /** The localized structured content's main titles. */
  title_i18n?: Record<string, string>;
  /** A valid external identifier to reference this structured content. */
  uuid?: string;
  viewableBy?: "Anyone" | "Members" | "Owner";
  /** @default "com.liferay.headless.delivery.dto.v1_0.StructuredContent" */
  "x-class-name"?: string;
}

/** A link to structured content on the server. */
export interface StructuredContentLink {
  /** The type of content. */
  contentType?: string;
  /** Represents content that has fields and is rendered by a template backed by a `ContentStructure`. This is modeled internally as a `JournalArticle`. */
  embeddedStructuredContent?: StructuredContent;
  /**
   * The resource's ID.
   * @format int64
   */
  id?: number;
  /** The resource's title. */
  title?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.StructuredContentLink" */
  "x-class-name"?: string;
}

/** Represents a Knowledge Base article (`KBArticle`), the main entity in the Knowledge Base API. */
export interface KnowledgeBaseArticle {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The blog post's average rating. */
  aggregateRating?: AggregateRating;
  /** The article's main content. */
  articleBody: string;
  /** The wiki page's creator. */
  creator?: Creator;
  /** A list of the custom fields associated with the article. */
  customFields?: CustomField[];
  /**
   * The date the article was created.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time the article's content or metadata changed.
   * @format date-time
   */
  dateModified?: string;
  /** The article's description. */
  description?: string;
  /** The article's media type (e.g., HTML, BBCode, etc.). */
  encodingFormat?: string;
  /** The article's external reference code. */
  externalReferenceCode?: string;
  /** The article's relative URL. */
  friendlyUrlPath?: string;
  /**
   * The article's ID.
   * @format int64
   */
  id?: number;
  /** A list of keywords describing the article. */
  keywords?: string[];
  /**
   * The article's number attachments.
   * @format int32
   */
  numberOfAttachments?: number;
  /**
   * The number of this article's child articles.
   * @format int32
   */
  numberOfKnowledgeBaseArticles?: number;
  /**
   * The ID of the article's parent, if it exists.
   * @format int64
   */
  parentKnowledgeBaseArticleId?: number;
  /** The folder's parent Knowledge Base folder, if it exists. */
  parentKnowledgeBaseFolder?: ParentKnowledgeBaseFolder;
  /** @format int64 */
  parentKnowledgeBaseFolderId?: number;
  /** A list of related contents to this article. */
  relatedContents?: RelatedContent[];
  /**
   * The ID of the site to which this article is scoped.
   * @format int64
   */
  siteId?: number;
  /** A flag that indicates whether the user making the requests is subscribed to this article. */
  subscribed?: boolean;
  /** The categories associated with this article. */
  taxonomyCategoryBriefs?: TaxonomyCategoryBrief[];
  taxonomyCategoryIds?: number[];
  /** The article's main title. */
  title: string;
  viewableBy?: "Anyone" | "Members" | "Owner";
  /** @default "com.liferay.headless.delivery.dto.v1_0.KnowledgeBaseArticle" */
  "x-class-name"?: string;
}

export interface PageKnowledgeBaseArticle {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: KnowledgeBaseArticle[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

/** The folder's parent Knowledge Base folder, if it exists. */
export interface ParentKnowledgeBaseFolder {
  /**
   * The parent folder's ID.
   * @format int64
   */
  folderId?: number;
  /** The parent folder's name. */
  folderName?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.ParentKnowledgeBaseFolder" */
  "x-class-name"?: string;
}

export interface KnowledgeBaseAttachment {
  /** The file's relative URL. */
  contentUrl?: string;
  /** optional field with the content of the document in Base64, can be embedded with nestedFields */
  contentValue?: string;
  /** The file's media type (e.g., application/pdf, etc.). */
  encodingFormat?: string;
  /** The file's extension. */
  fileExtension?: string;
  /**
   * The file's ID.
   * @format int64
   */
  id?: number;
  /**
   * The file's size in bytes.
   * @format int64
   */
  sizeInBytes?: number;
  /** The file's main title. */
  title?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.KnowledgeBaseAttachment" */
  "x-class-name"?: string;
}

export interface PageKnowledgeBaseAttachment {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: KnowledgeBaseAttachment[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

/** Represents a folder for organizing Knowledge Base articles. */
export interface KnowledgeBaseFolder {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The wiki page's creator. */
  creator?: Creator;
  /** A list of the custom fields associated with the folder. */
  customFields?: CustomField[];
  /**
   * The date the folder was created.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time the folder was modified.
   * @format date-time
   */
  dateModified?: string;
  /** The folder's description. */
  description?: string;
  /** The folder's external reference code. */
  externalReferenceCode?: string;
  /**
   * The folder's ID.
   * @format int64
   */
  id?: number;
  /** The folder's main title/name. */
  name: string;
  /**
   * The number of Knowledge Base articles in this folder.
   * @format int32
   */
  numberOfKnowledgeBaseArticles?: number;
  /**
   * The number of Knowledge Base folders in this folder.
   * @format int32
   */
  numberOfKnowledgeBaseFolders?: number;
  /** The folder's parent Knowledge Base folder, if it exists. */
  parentKnowledgeBaseFolder?: ParentKnowledgeBaseFolder;
  /** @format int64 */
  parentKnowledgeBaseFolderId?: number;
  /**
   * The ID of the site to which this folder is scoped.
   * @format int64
   */
  siteId?: number;
  viewableBy?: "Anyone" | "Members" | "Owner";
  /** @default "com.liferay.headless.delivery.dto.v1_0.KnowledgeBaseFolder" */
  "x-class-name"?: string;
}

export interface PageKnowledgeBaseFolder {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: KnowledgeBaseFolder[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

export interface Language {
  /** The language's contry name. */
  countryName?: string;
  /** The localized language's country name values. */
  countryName_i18n?: Record<string, string>;
  /** The language's ID. */
  id?: string;
  /** A flag that indicates whether the language has benn marked as default language. */
  markedAsDefault?: boolean;
  /** The language's name. */
  name?: string;
  /** The localized language's name values. */
  name_i18n?: Record<string, string>;
  /** @default "com.liferay.headless.delivery.dto.v1_0.Language" */
  "x-class-name"?: string;
}

export interface PageLanguage {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: Language[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

export interface MessageBoardAttachment {
  /** The file's relative URL. */
  contentUrl?: string;
  /** optional field with the content of the document in Base64, can be embedded with nestedFields */
  contentValue?: string;
  /** The file's media format (e.g., application/pdf, etc.). */
  encodingFormat?: string;
  /** The file's extension. */
  fileExtension?: string;
  /**
   * The file's ID.
   * @format int64
   */
  id?: number;
  /**
   * The file's size in bytes.
   * @format int64
   */
  sizeInBytes?: number;
  /** The file's title. */
  title?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.MessageBoardAttachment" */
  "x-class-name"?: string;
}

export interface PageMessageBoardAttachment {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: MessageBoardAttachment[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

/** The thread's creator statistics (rank, join date, number of posts, ...) */
export interface CreatorStatistics {
  /**
   * Join date of the author.
   * @format date-time
   */
  joinDate?: string;
  /**
   * Last post created by the author.
   * @format date-time
   */
  lastPostDate?: string;
  /**
   * Number of posts publicated by the author.
   * @format int32
   */
  postsNumber?: number;
  /** The rank of the author. */
  rank?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.CreatorStatistics" */
  "x-class-name"?: string;
}

export interface MessageBoardMessage {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The blog post's average rating. */
  aggregateRating?: AggregateRating;
  /** A flag that indicates whether the message's author is anonymous. */
  anonymous?: boolean;
  /** The message's main content. */
  articleBody?: string;
  /** The wiki page's creator. */
  creator?: Creator;
  /** The thread's creator statistics (rank, join date, number of posts, ...) */
  creatorStatistics?: CreatorStatistics;
  /** A list of the custom fields associated with the blog post. */
  customFields?: CustomField[];
  /**
   * The date the message was created.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time the content or metadata of the message was changed.
   * @format date-time
   */
  dateModified?: string;
  /** The message's media format (e.g., HTML, BBCode, etc.). */
  encodingFormat?: string;
  /** The message's external reference code. */
  externalReferenceCode?: string;
  friendlyUrlPath?: string;
  /** The message's main title. */
  headline?: string;
  /**
   * The message's ID.
   * @format int64
   */
  id?: number;
  /** A list of keywords describing the message. */
  keywords?: string[];
  /**
   * The ID of the Message Board Section to which this message is scoped.
   * @format int64
   */
  messageBoardSectionId?: number;
  /**
   * The ID of the Message Board Thread to which this message is scoped.
   * @format int64
   */
  messageBoardThreadId?: number;
  /**
   * The number of the message's attachments.
   * @format int32
   */
  numberOfMessageBoardAttachments?: number;
  /**
   * The number of the message's child messages.
   * @format int32
   */
  numberOfMessageBoardMessages?: number;
  /**
   * The ID of the message's parent, if it exists.
   * @format int64
   */
  parentMessageBoardMessageId?: number;
  /** A list of related contents to this message. */
  relatedContents?: RelatedContent[];
  /** A flag that indicates whether the message is answering a question. */
  showAsAnswer?: boolean;
  /**
   * The ID of the site to which this message is scoped.
   * @format int64
   */
  siteId?: number;
  /** The message's status. */
  status?: string;
  /** A flag that indicates whether the user making the requests is subscribed to this message. */
  subscribed?: boolean;
  viewableBy?: "Anyone" | "Members" | "Owner";
  /** @default "com.liferay.headless.delivery.dto.v1_0.MessageBoardMessage" */
  "x-class-name"?: string;
}

export interface PageMessageBoardMessage {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: MessageBoardMessage[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

/** Represents a section/folder on a message board, used to organize messages. */
export interface MessageBoardSection {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The wiki page's creator. */
  creator?: Creator;
  /** A list of the custom fields associated with the section. */
  customFields?: CustomField[];
  /**
   * The date the section was created.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time the section was changed.
   * @format date-time
   */
  dateModified?: string;
  /** The section's description. */
  description?: string;
  /**
   * The section's ID.
   * @format int64
   */
  id?: number;
  /**
   * The number of this section's child sections.
   * @format int32
   */
  numberOfMessageBoardSections?: number;
  /**
   * The number of message board threads in this section.
   * @format int32
   */
  numberOfMessageBoardThreads?: number;
  /**
   * The ID of the section parent's, if it exists.
   * @format int64
   */
  parentMessageBoardSectionId?: number;
  /**
   * The ID of the site to which this section is scoped.
   * @format int64
   */
  siteId?: number;
  /** A flag that indicates whether the user making the requests is subscribed to this section. */
  subscribed?: boolean;
  /** The section's main title. */
  title: string;
  viewableBy?: "Anyone" | "Members" | "Owner";
  /** @default "com.liferay.headless.delivery.dto.v1_0.MessageBoardSection" */
  "x-class-name"?: string;
}

export interface PageMessageBoardSection {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: MessageBoardSection[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

/** Represents a discussion thread in a message board. */
export interface MessageBoardThread {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The blog post's average rating. */
  aggregateRating?: AggregateRating;
  /** The thread's main body content (the message written as the thread's description). */
  articleBody?: string;
  /** The wiki page's creator. */
  creator?: Creator;
  /** The thread's creator statistics (rank, join date, number of posts, ...) */
  creatorStatistics?: CreatorStatistics;
  /** A list of the custom fields associated with the thread. */
  customFields?: CustomField[];
  /**
   * The date the thread was created.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time any field of the thread changed.
   * @format date-time
   */
  dateModified?: string;
  /** The media format of the thread's content (e.g., HTML, BBCode, etc.). */
  encodingFormat?: string;
  friendlyUrlPath?: string;
  /** A flag that indicates whether this thread has a message considered as valid */
  hasValidAnswer?: boolean;
  /** The thread's main title. */
  headline: string;
  /**
   * The thread's ID.
   * @format int64
   */
  id?: number;
  /** A list of keywords describing the thread. */
  keywords?: string[];
  /** A flag that indicates whether this thread is locked. */
  locked?: boolean;
  /**
   * The ID of the Message Board Section to which this message is scoped.
   * @format int64
   */
  messageBoardSectionId?: number;
  /**
   * The number of the thread's attachments.
   * @format int32
   */
  numberOfMessageBoardAttachments?: number;
  /**
   * The number of the thread's messages.
   * @format int32
   */
  numberOfMessageBoardMessages?: number;
  /** A list of related contents to this thread. */
  relatedContents?: RelatedContent[];
  /** A flag that indicates whether this thread has been seen. */
  seen?: boolean;
  /** A flag that indicates whether this thread was posted as a question that can receive approved answers. */
  showAsQuestion?: boolean;
  /**
   * The ID of the site to which this thread is scoped.
   * @format int64
   */
  siteId?: number;
  /** The thread's status. */
  status?: string;
  /** A flag that indicates whether the user making the requests is subscribed to this thread. */
  subscribed?: boolean;
  /** The categories associated with this thread. */
  taxonomyCategoryBriefs?: TaxonomyCategoryBrief[];
  taxonomyCategoryIds?: number[];
  /** The thread's type. */
  threadType?: string;
  /**
   * The number of views of this thread.
   * @format int64
   */
  viewCount?: number;
  viewableBy?: "Anyone" | "Members" | "Owner";
  /** @default "com.liferay.headless.delivery.dto.v1_0.MessageBoardThread" */
  "x-class-name"?: string;
}

export interface PageMessageBoardThread {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: MessageBoardThread[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

export interface NavigationMenu {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The wiki page's creator. */
  creator?: Creator;
  /**
   * The navigation menu's creation date.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time the navigation menu changed.
   * @format date-time
   */
  dateModified?: string;
  /**
   * The navigation menu's ID.
   * @format int64
   */
  id?: number;
  /** The navigation menu's name. */
  name?: string;
  /** The list of navigation menu items this navigation menu has. */
  navigationMenuItems?: NavigationMenuItem[];
  /** The navigation menu's type (primary, secondary, social). */
  navigationType?: "Primary" | "Secondary" | "Social";
  /**
   * The ID of the site to which this navigation menu is scoped.
   * @format int64
   */
  siteId?: number;
  /** @default "com.liferay.headless.delivery.dto.v1_0.NavigationMenu" */
  "x-class-name"?: string;
}

/** The list of navigation menu items this navigation menu has. */
export interface NavigationMenuItem {
  /** The list of languages the navigation menu item has a translation for. */
  availableLanguages?: string[];
  /** The wiki page's creator. */
  creator?: Creator;
  /**
   * The navigation menu item's creation date.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time the navigation menu item changed.
   * @format date-time
   */
  dateModified?: string;
  /**
   * The navigation menu item's ID.
   * @format int64
   */
  id?: number;
  /** The link to a page on the server. */
  link?: string;
  /** The localized links to a page on the server. */
  link_i18n?: Record<string, string>;
  /** The navigation menu item's name. */
  name?: string;
  /** The localized navigation menu item's names. */
  name_i18n?: Record<string, string>;
  /** The navigation menu items this navigation menu item has. */
  navigationMenuItems?: NavigationMenuItem[];
  /**
   * The ID of the navigation menu item's parent.
   * @format int64
   */
  parentNavigationMenuId?: number;
  /** The navigation menu item's linked site page URL. */
  sitePageURL?: string;
  /** The navigation menu item's type. */
  type?: string;
  /** The navigation menu item's linked URL. */
  url?: string;
  useCustomName?: boolean;
  /** @default "com.liferay.headless.delivery.dto.v1_0.NavigationMenuItem" */
  "x-class-name"?: string;
}

export interface PageNavigationMenu {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: NavigationMenu[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

/** A list of custom metatags this page has. */
export interface CustomMetaTag {
  /** The custom metatag's key. */
  key?: string;
  /** The custom metatag's value */
  value?: string;
  /** The localized custom metatag's values. */
  value_i18n?: Record<string, string>;
  /** @default "com.liferay.headless.delivery.dto.v1_0.CustomMetaTag" */
  "x-class-name"?: string;
}

/** Experience of the page that it's being retrieved. */
export interface Experience {
  /** the experience's key. */
  key?: string;
  /** the experience's name. */
  name?: string;
  /** the localized experience's names. */
  name_i18n?: Record<string, string>;
  /** A list of segments the experience is used for. */
  segments?: Segment[];
  /** @default "com.liferay.headless.delivery.dto.v1_0.Experience" */
  "x-class-name"?: string;
}

/** The page's master page. */
export interface MasterPage {
  /** The master page's key. */
  key?: string;
  /** The master page's name. */
  name?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.MasterPage" */
  "x-class-name"?: string;
}

/** The page's Open Graph settings. */
export interface OpenGraphSettings {
  /** The Open Graph's description. */
  description?: string;
  /** The localized Open Graph's descriptions. */
  description_i18n?: Record<string, string>;
  /** A content document element that stores an image file. */
  image?: ContentDocument;
  /** The Open Graph's title. */
  title?: string;
  /** The localized Open Graph's titles. */
  title_i18n?: Record<string, string>;
  /** @default "com.liferay.headless.delivery.dto.v1_0.OpenGraphSettings" */
  "x-class-name"?: string;
}

/** Optional field with the structure of all the elements of the page. Can be embedded with nestedFields when retrieving the collection of site pages. When retrieving a single site page, it will automatically be included. */
export interface PageDefinition {
  /** The page's page element. */
  pageElement?: PageElement;
  /** The page's settings. */
  settings?: Settings;
  /**
   * The version of the JSON generated by page definition.
   * @format double
   */
  version?: number;
  /** @default "com.liferay.headless.delivery.dto.v1_0.PageDefinition" */
  "x-class-name"?: string;
}

/** The page's page element. */
export interface PageElement {
  /** The page element's definition. */
  definition?: object;
  /** A list of the page elements this page element has. */
  pageElements?: PageElement[];
  /** The page element's type (collection, collection item,, column, drop zone, fragment, fragment drop zone, root, row, section or widget). */
  type?:
    | "Collection"
    | "CollectionItem"
    | "Column"
    | "DropZone"
    | "Fragment"
    | "FragmentDropZone"
    | "Root"
    | "Row"
    | "Section"
    | "Widget";
  /** @default "com.liferay.headless.delivery.dto.v1_0.PageElement" */
  "x-class-name"?: string;
}

/** Settings of the page, such as SEO or OpenGraph. */
export interface PageSettings {
  /** A list of custom metatags this page has. */
  customMetaTags?: CustomMetaTag[];
  /** A flag that indicates whether the page is hidden from navigation. */
  hiddenFromNavigation?: boolean;
  /** The page's Open Graph settings. */
  openGraphSettings?: OpenGraphSettings;
  /** The page's SEO settings. */
  seoSettings?: SEOSettings;
  /** @default "com.liferay.headless.delivery.dto.v1_0.PageSettings" */
  "x-class-name"?: string;
}

/** Metadata of the page such as it's master page and template. */
export interface RenderedPage {
  /** The ID of the master page used to render the content. */
  masterPageId?: string;
  /** The name of the master page used to render the content. */
  masterPageName?: string;
  /** The ID of the template used to render the content. */
  pageTemplateId?: string;
  /** The name of the template used to render the content. */
  pageTemplateName?: string;
  /** An absolute URL to the rendered page. */
  renderedPageURL?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.RenderedPage" */
  "x-class-name"?: string;
}

/** The page's SEO settings. */
export interface SEOSettings {
  /** The canonical URL of the page, if it exists. */
  customCanonicalURL?: string;
  /** The localized canonical URL of the page, if it exists. */
  customCanonicalURL_i18n?: Record<string, string>;
  /** The page's description to be used as summary for search engines. */
  description?: string;
  /** The localized descriptions of the page to be used as summary for search engines. */
  description_i18n?: Record<string, string>;
  /** The page's main title to be used by search engines. */
  htmlTitle?: string;
  /** The localized main titles of the page to be used by search engines. */
  htmlTitle_i18n?: Record<string, string>;
  /** A tag telling search engines if and how they should crawl the page. */
  robots?: string;
  /** A localized tag telling search engines if and how they should crawl the page. */
  robots_i18n?: Record<string, string>;
  /** A list of target keywords of the page to be used by search engines. */
  seoKeywords?: string;
  /** A list of localized target keywords of the page to be used by search engines. */
  seoKeywords_i18n?: Record<string, string>;
  /** @default "com.liferay.headless.delivery.dto.v1_0.SEOSettings" */
  "x-class-name"?: string;
}

/** Represents a set of users that meet certain criteria. Segments may be used to create customized experiences for users. */
export enum Segment {
  Criteria = "criteria",
  Name = "name",
}

/** The page's settings. */
export interface Settings {
  /** The page's color scheme name. */
  colorSchemeName?: string;
  /** The page's CSS. */
  css?: string;
  /** The page's JavaScript. */
  javascript?: string;
  /** The page's master page. */
  masterPage?: MasterPage;
  /** The StyleBook that is applied to the page. */
  styleBook?: StyleBook;
  /** The page's theme name. */
  themeName?: string;
  /** The page's theme settings. */
  themeSettings?: object;
  /** @default "com.liferay.headless.delivery.dto.v1_0.Settings" */
  "x-class-name"?: string;
}

/** Represents a site page. This is modeled internally as a `Layout`. */
export interface SitePage {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The blog post's average rating. */
  aggregateRating?: AggregateRating;
  /** The list of languages the page has a translation for. */
  availableLanguages?: string[];
  /** The wiki page's creator. */
  creator?: Creator;
  /** Custom fields associated with the page. */
  customFields?: CustomField[];
  /**
   * The page's creation date.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time any field of the page was changed.
   * @format date-time
   */
  dateModified?: string;
  /**
   * The page's most recent publication date.
   * @format date-time
   */
  datePublished?: string;
  /** Experience of the page that it's being retrieved. */
  experience?: Experience;
  /** A relative URL to the page's rendered content. */
  friendlyUrlPath?: string;
  /** The localized relative URLs to the page's rendered content. */
  friendlyUrlPath_i18n?: Record<string, string>;
  /** A list of keywords describing the page. */
  keywords?: string[];
  /** Optional field with the structure of all the elements of the page. Can be embedded with nestedFields when retrieving the collection of site pages. When retrieving a single site page, it will automatically be included. */
  pageDefinition?: PageDefinition;
  /** Settings of the page, such as SEO or OpenGraph. */
  pageSettings?: PageSettings;
  /** The type of the page. */
  pageType?: string;
  /** Metadata of the page such as it's master page and template. */
  renderedPage?: RenderedPage;
  /**
   * The ID of the site to which this page is scoped.
   * @format int64
   */
  siteId?: number;
  /** The categories associated with this page. */
  taxonomyCategoryBriefs?: TaxonomyCategoryBrief[];
  taxonomyCategoryIds?: number[];
  /** The page's title. */
  title: string;
  /** The localized page's titles. */
  title_i18n?: Record<string, string>;
  /** A valid external identifier to reference this page. */
  uuid?: string;
  viewableBy?: "Anyone" | "Members" | "Owner";
  /** @default "com.liferay.headless.delivery.dto.v1_0.SitePage" */
  "x-class-name"?: string;
}

/** The StyleBook that is applied to the page. */
export interface StyleBook {
  /** The stylebook's key. */
  key?: string;
  /** The stylebook's name. */
  name?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.StyleBook" */
  "x-class-name"?: string;
}

export interface PageSitePage {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: SitePage[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

export interface PageStructuredContentFolder {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: StructuredContentFolder[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

/** Represents a folder that can be used to organize structured content. */
export interface StructuredContentFolder {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The key of the asset library to which the folder is scoped. */
  assetLibraryKey?: string;
  /** The wiki page's creator. */
  creator?: Creator;
  /** A list of the custom fields associated with the folder. */
  customFields?: CustomField[];
  /**
   * The date the folder was created.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time any of the folder's fields changed.
   * @format date-time
   */
  dateModified?: string;
  /** The folder's description. */
  description?: string;
  /**
   * The folder's ID.
   * @format int64
   */
  id?: number;
  /** The folder's name. */
  name: string;
  /**
   * The number of structured content folders inside this folder.
   * @format int32
   */
  numberOfStructuredContentFolders?: number;
  /**
   * The number of structured content objects inside this folder.
   * @format int32
   */
  numberOfStructuredContents?: number;
  /**
   * The ID of the folder's parent, if it exists.
   * @format int64
   */
  parentStructuredContentFolderId?: number;
  /**
   * The ID of the site to which this folder is scoped.
   * @format int64
   */
  siteId?: number;
  /** A flag that indicates whether the user making the requests is subscribed to this folder. */
  subscribed?: boolean;
  viewableBy?: "Anyone" | "Members" | "Owner";
  /** @default "com.liferay.headless.delivery.dto.v1_0.StructuredContentFolder" */
  "x-class-name"?: string;
}

export interface PageStructuredContent {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: StructuredContent[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

export interface WikiNode {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The wiki page's creator. */
  creator?: Creator;
  /**
   * The date the wiki node was created.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time any of the wiki node's fields changed.
   * @format date-time
   */
  dateModified?: string;
  /** The wiki node's description. */
  description?: string;
  /** The wiki node's external reference code. */
  externalReferenceCode?: string;
  /**
   * The wiki node's ID.
   * @format int64
   */
  id?: number;
  /** The wiki node's name. */
  name?: string;
  /**
   * The number of child wiki page on this wiki node.
   * @format int32
   */
  numberOfWikiPages?: number;
  /**
   * The ID of the site to which this wiki node is scoped.
   * @format int64
   */
  siteId?: number;
  /** A flag that indicates whether the user making the requests is subscribed to this wiki node. */
  subscribed?: boolean;
  viewableBy?: "Anyone" | "Members" | "Owner";
  /** @default "com.liferay.headless.delivery.dto.v1_0.WikiNode" */
  "x-class-name"?: string;
}

export interface PageWikiNode {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: WikiNode[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

export interface PageWikiPageAttachment {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: WikiPageAttachment[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

export interface WikiPageAttachment {
  /** The file's relative URL. */
  contentUrl?: string;
  /** Optional field with the content of the document in Base64, can be embedded with nestedFields. */
  contentValue?: string;
  /** The file's media format (e.g., application/pdf, etc.). */
  encodingFormat?: string;
  /** The file's extension. */
  fileExtension?: string;
  /**
   * The file's ID.
   * @format int64
   */
  id?: number;
  /**
   * The file's size in bytes.
   * @format int64
   */
  sizeInBytes?: number;
  /** The file's title. */
  title?: string;
  /** @default "com.liferay.headless.delivery.dto.v1_0.WikiPageAttachment" */
  "x-class-name"?: string;
}

/** Represents a wiki page. */
export interface WikiPage {
  /** Block of actions allowed by the user making the request. */
  actions?: Record<string, Record<string, string>>;
  /** The blog post's average rating. */
  aggregateRating?: AggregateRating;
  /** The wiki page's content. */
  content?: string;
  /** The wiki page's creator. */
  creator?: Creator;
  /** A list of the custom fields associated with the wiki page. */
  customFields?: CustomField[];
  /**
   * The date the wiki page was created.
   * @format date-time
   */
  dateCreated?: string;
  /**
   * The last time any of the wiki page's fields changed.
   * @format date-time
   */
  dateModified?: string;
  /** The wiki page's description. */
  description?: string;
  /** The wiki page's media format (e.g., HTML, BBCode, etc.). */
  encodingFormat: string;
  /** The wiki page's external reference code. */
  externalReferenceCode?: string;
  /** The wiki page's main title. */
  headline: string;
  /**
   * The wiki page's ID.
   * @format int64
   */
  id?: number;
  /** A list of keywords describing the blog post. */
  keywords?: string[];
  /**
   * The wiki page's number attachments.
   * @format int32
   */
  numberOfAttachments?: number;
  /**
   * The number of child wiki page on this wiki page.
   * @format int32
   */
  numberOfWikiPages?: number;
  /**
   * The ID of the wiki page's parent, if it exists.
   * @format int64
   */
  parentWikiPageId?: number;
  /** A list of related contents to this wiki page. */
  relatedContents?: RelatedContent[];
  /**
   * The ID of the site to which this wiki page is scoped.
   * @format int64
   */
  siteId?: number;
  /** A flag that indicates whether the user making the requests is subscribed to this wiki page. */
  subscribed?: boolean;
  /** The categories associated with this wiki page. */
  taxonomyCategoryBriefs?: TaxonomyCategoryBrief[];
  taxonomyCategoryIds?: number[];
  viewableBy?: "Anyone" | "Members" | "Owner";
  /**
   * The ID of the wiki node to which the wiki page belongs.
   * @format int64
   */
  wikiNodeId?: number;
  /** @default "com.liferay.headless.delivery.dto.v1_0.WikiPage" */
  "x-class-name"?: string;
}

export interface PageWikiPage {
  /** @format int64 */
  lastPage?: number;
  /** @format int64 */
  totalCount?: number;
  items?: WikiPage[];
  /** @format int64 */
  pageSize?: number;
  facets?: Facet[];
  /** @format int64 */
  page?: number;
  actions?: Record<string, Record<string, string>>;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://virtserver.swaggerhub.com/liferayinc/headless-delivery/v1.0";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Headless Delivery
 * @version v1.0
 * @license Apache 2.0 (http://www.apache.org/licenses/LICENSE-2.0.html)
 * @baseUrl https://virtserver.swaggerhub.com/liferayinc/headless-delivery/v1.0
 *
 * A Java client JAR is available for use with the group ID 'com.liferay', artifact ID 'com.liferay.headless.delivery.client', and version '4.0.15'.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v10 = {
    /**
     * @description Retrieves the site's blog post images. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags BlogPostingImage
     * @name GetSiteBlogPostingImagesPage
     * @request GET:/v1.0/sites/{siteId}/blog-posting-images
     */
    getSiteBlogPostingImagesPage: (
      siteId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageBlogPostingImage>({
        path: `/v1.0/sites/${siteId}/blog-posting-images`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a blog post image. The request body must be `multipart/form-data` with two parts, the file's bytes (`file`), and an optional JSON string (`blogPostingImage`) with the metadata.
     *
     * @tags BlogPostingImage
     * @name PostSiteBlogPostingImage
     * @request POST:/v1.0/sites/{siteId}/blog-posting-images
     */
    postSiteBlogPostingImage: (siteId: string, data: MultipartBody, params: RequestParams = {}) =>
      this.request<any, BlogPostingImage>({
        path: `/v1.0/sites/${siteId}/blog-posting-images`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Retrieves the blog post's image. The binary image is returned as a relative URL to the image itself.
     *
     * @tags BlogPostingImage
     * @name GetBlogPostingImage
     * @request GET:/v1.0/blog-posting-images/{blogPostingImageId}
     */
    getBlogPostingImage: (blogPostingImageId: string, params: RequestParams = {}) =>
      this.request<any, BlogPostingImage>({
        path: `/v1.0/blog-posting-images/${blogPostingImageId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Deletes the blog post's image.
     *
     * @tags BlogPostingImage
     * @name DeleteBlogPostingImage
     * @request DELETE:/v1.0/blog-posting-images/{blogPostingImageId}
     */
    deleteBlogPostingImage: (blogPostingImageId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/blog-posting-images/${blogPostingImageId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BlogPostingImage
     * @name DeleteBlogPostingImageBatch
     * @request DELETE:/v1.0/blog-posting-images/batch
     */
    deleteBlogPostingImageBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/blog-posting-images/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BlogPostingImage
     * @name PostSiteBlogPostingImageBatch
     * @request POST:/v1.0/sites/{siteId}/blog-posting-images/batch
     */
    postSiteBlogPostingImageBatch: (
      siteId: string,
      data: MultipartBody,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/blog-posting-images/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BlogPosting
     * @name PutSiteBlogPostingUnsubscribe
     * @request PUT:/v1.0/sites/{siteId}/blog-postings/unsubscribe
     */
    putSiteBlogPostingUnsubscribe: (siteId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/blog-postings/unsubscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BlogPosting
     * @name PutSiteBlogPostingSubscribe
     * @request PUT:/v1.0/sites/{siteId}/blog-postings/subscribe
     */
    putSiteBlogPostingSubscribe: (siteId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/blog-postings/subscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * @description Retrieves the blog post rating of the user who authenticated the request.
     *
     * @tags BlogPosting
     * @name GetBlogPostingMyRating
     * @request GET:/v1.0/blog-postings/{blogPostingId}/my-rating
     */
    getBlogPostingMyRating: (blogPostingId: string, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/blog-postings/${blogPostingId}/my-rating`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces an existing blog post rating by the user who authenticated the request.
     *
     * @tags BlogPosting
     * @name PutBlogPostingMyRating
     * @request PUT:/v1.0/blog-postings/{blogPostingId}/my-rating
     */
    putBlogPostingMyRating: (blogPostingId: string, data: Rating, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/blog-postings/${blogPostingId}/my-rating`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Creates a new blog post rating by the user who authenticated the request.
     *
     * @tags BlogPosting
     * @name PostBlogPostingMyRating
     * @request POST:/v1.0/blog-postings/{blogPostingId}/my-rating
     */
    postBlogPostingMyRating: (blogPostingId: string, data: Rating, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/blog-postings/${blogPostingId}/my-rating`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the blog post rating of the user who authenticated the request.
     *
     * @tags BlogPosting
     * @name DeleteBlogPostingMyRating
     * @request DELETE:/v1.0/blog-postings/{blogPostingId}/my-rating
     */
    deleteBlogPostingMyRating: (blogPostingId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/blog-postings/${blogPostingId}/my-rating`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves the blog post.
     *
     * @tags BlogPosting
     * @name GetBlogPosting
     * @request GET:/v1.0/blog-postings/{blogPostingId}
     */
    getBlogPosting: (blogPostingId: string, params: RequestParams = {}) =>
      this.request<any, BlogPosting>({
        path: `/v1.0/blog-postings/${blogPostingId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the blog post with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags BlogPosting
     * @name PutBlogPosting
     * @request PUT:/v1.0/blog-postings/{blogPostingId}
     */
    putBlogPosting: (blogPostingId: string, data: BlogPosting, params: RequestParams = {}) =>
      this.request<any, BlogPosting>({
        path: `/v1.0/blog-postings/${blogPostingId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the blog post and returns a 204 if the operation succeeds.
     *
     * @tags BlogPosting
     * @name DeleteBlogPosting
     * @request DELETE:/v1.0/blog-postings/{blogPostingId}
     */
    deleteBlogPosting: (blogPostingId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/blog-postings/${blogPostingId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Updates the blog post using only the fields received in the request body. Any other fields are left untouched. Returns the updated blog post.
     *
     * @tags BlogPosting
     * @name PatchBlogPosting
     * @request PATCH:/v1.0/blog-postings/{blogPostingId}
     */
    patchBlogPosting: (blogPostingId: string, data: BlogPosting, params: RequestParams = {}) =>
      this.request<any, BlogPosting>({
        path: `/v1.0/blog-postings/${blogPostingId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the site's blog postings. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags BlogPosting
     * @name GetSiteBlogPostingsPage
     * @request GET:/v1.0/sites/{siteId}/blog-postings
     */
    getSiteBlogPostingsPage: (
      siteId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageBlogPosting>({
        path: `/v1.0/sites/${siteId}/blog-postings`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new blog post.
     *
     * @tags BlogPosting
     * @name PostSiteBlogPosting
     * @request POST:/v1.0/sites/{siteId}/blog-postings
     */
    postSiteBlogPosting: (siteId: string, data: BlogPosting, params: RequestParams = {}) =>
      this.request<any, BlogPosting>({
        path: `/v1.0/sites/${siteId}/blog-postings`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the blog post's rendered display page
     *
     * @tags BlogPosting
     * @name GetBlogPostingRenderedContentByDisplayPageDisplayPageKey
     * @request GET:/v1.0/blog-postings/{blogPostingId}/rendered-content-by-display-page/{displayPageKey}
     */
    getBlogPostingRenderedContentByDisplayPageDisplayPageKey: (
      blogPostingId: string,
      displayPageKey: string,
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/v1.0/blog-postings/${blogPostingId}/rendered-content-by-display-page/${displayPageKey}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Retrieves the site's blog post by external reference code.
     *
     * @tags BlogPosting
     * @name GetSiteBlogPostingByExternalReferenceCode
     * @request GET:/v1.0/sites/{siteId}/blog-postings/by-external-reference-code/{externalReferenceCode}
     */
    getSiteBlogPostingByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, BlogPosting>({
        path: `/v1.0/sites/${siteId}/blog-postings/by-external-reference-code/${externalReferenceCode}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Updates the site's blog post with the given external reference code, or creates it if it not exists.
     *
     * @tags BlogPosting
     * @name PutSiteBlogPostingByExternalReferenceCode
     * @request PUT:/v1.0/sites/{siteId}/blog-postings/by-external-reference-code/{externalReferenceCode}
     */
    putSiteBlogPostingByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      data: BlogPosting,
      params: RequestParams = {},
    ) =>
      this.request<any, BlogPosting>({
        path: `/v1.0/sites/${siteId}/blog-postings/by-external-reference-code/${externalReferenceCode}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the blog post by external reference code.
     *
     * @tags BlogPosting
     * @name DeleteSiteBlogPostingByExternalReferenceCode
     * @request DELETE:/v1.0/sites/{siteId}/blog-postings/by-external-reference-code/{externalReferenceCode}
     */
    deleteSiteBlogPostingByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/blog-postings/by-external-reference-code/${externalReferenceCode}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BlogPosting
     * @name GetBlogPostingPermissionsPage
     * @request GET:/v1.0/blog-postings/{blogPostingId}/permissions
     */
    getBlogPostingPermissionsPage: (
      blogPostingId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/blog-postings/${blogPostingId}/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BlogPosting
     * @name PutBlogPostingPermissionsPage
     * @request PUT:/v1.0/blog-postings/{blogPostingId}/permissions
     */
    putBlogPostingPermissionsPage: (blogPostingId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/blog-postings/${blogPostingId}/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BlogPosting
     * @name GetSiteBlogPostingPermissionsPage
     * @request GET:/v1.0/sites/{siteId}/blog-postings/permissions
     */
    getSiteBlogPostingPermissionsPage: (
      siteId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/blog-postings/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BlogPosting
     * @name PutSiteBlogPostingPermissionsPage
     * @request PUT:/v1.0/sites/{siteId}/blog-postings/permissions
     */
    putSiteBlogPostingPermissionsPage: (siteId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/blog-postings/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BlogPosting
     * @name PostSiteBlogPostingBatch
     * @request POST:/v1.0/sites/{siteId}/blog-postings/batch
     */
    postSiteBlogPostingBatch: (
      siteId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/blog-postings/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BlogPosting
     * @name PutBlogPostingBatch
     * @request PUT:/v1.0/blog-postings/batch
     */
    putBlogPostingBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/blog-postings/batch`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BlogPosting
     * @name DeleteBlogPostingBatch
     * @request DELETE:/v1.0/blog-postings/batch
     */
    deleteBlogPostingBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/blog-postings/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the blog post's comments in a list. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags Comment
     * @name GetBlogPostingCommentsPage
     * @request GET:/v1.0/blog-postings/{blogPostingId}/comments
     */
    getBlogPostingCommentsPage: (
      blogPostingId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageComment>({
        path: `/v1.0/blog-postings/${blogPostingId}/comments`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new comment on the blog post.
     *
     * @tags Comment
     * @name PostBlogPostingComment
     * @request POST:/v1.0/blog-postings/{blogPostingId}/comments
     */
    postBlogPostingComment: (blogPostingId: string, data: Comment, params: RequestParams = {}) =>
      this.request<any, Comment>({
        path: `/v1.0/blog-postings/${blogPostingId}/comments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the structured content's comments. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags Comment
     * @name GetStructuredContentCommentsPage
     * @request GET:/v1.0/structured-contents/{structuredContentId}/comments
     */
    getStructuredContentCommentsPage: (
      structuredContentId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageComment>({
        path: `/v1.0/structured-contents/${structuredContentId}/comments`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new comment on the structured content.
     *
     * @tags Comment
     * @name PostStructuredContentComment
     * @request POST:/v1.0/structured-contents/{structuredContentId}/comments
     */
    postStructuredContentComment: (structuredContentId: string, data: Comment, params: RequestParams = {}) =>
      this.request<any, Comment>({
        path: `/v1.0/structured-contents/${structuredContentId}/comments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the comment.
     *
     * @tags Comment
     * @name GetComment
     * @request GET:/v1.0/comments/{commentId}
     */
    getComment: (commentId: string, params: RequestParams = {}) =>
      this.request<any, Comment>({
        path: `/v1.0/comments/${commentId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the comment with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags Comment
     * @name PutComment
     * @request PUT:/v1.0/comments/{commentId}
     */
    putComment: (commentId: string, data: Comment, params: RequestParams = {}) =>
      this.request<any, Comment>({
        path: `/v1.0/comments/${commentId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the comment and returns a 204 if the operation succeeded.
     *
     * @tags Comment
     * @name DeleteComment
     * @request DELETE:/v1.0/comments/{commentId}
     */
    deleteComment: (commentId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/comments/${commentId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves the parent comment's child comments. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags Comment
     * @name GetCommentCommentsPage
     * @request GET:/v1.0/comments/{parentCommentId}/comments
     */
    getCommentCommentsPage: (
      parentCommentId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageComment>({
        path: `/v1.0/comments/${parentCommentId}/comments`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new child comment of the existing comment.
     *
     * @tags Comment
     * @name PostCommentComment
     * @request POST:/v1.0/comments/{parentCommentId}/comments
     */
    postCommentComment: (parentCommentId: string, data: Comment, params: RequestParams = {}) =>
      this.request<any, Comment>({
        path: `/v1.0/comments/${parentCommentId}/comments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the document's comments. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags Comment
     * @name GetDocumentCommentsPage
     * @request GET:/v1.0/documents/{documentId}/comments
     */
    getDocumentCommentsPage: (
      documentId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageComment>({
        path: `/v1.0/documents/${documentId}/comments`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new comment on the document.
     *
     * @tags Comment
     * @name PostDocumentComment
     * @request POST:/v1.0/documents/{documentId}/comments
     */
    postDocumentComment: (documentId: string, data: Comment, params: RequestParams = {}) =>
      this.request<any, Comment>({
        path: `/v1.0/documents/${documentId}/comments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comment
     * @name PostBlogPostingCommentBatch
     * @request POST:/v1.0/blog-postings/{blogPostingId}/comments/batch
     */
    postBlogPostingCommentBatch: (
      blogPostingId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/blog-postings/${blogPostingId}/comments/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comment
     * @name PostStructuredContentCommentBatch
     * @request POST:/v1.0/structured-contents/{structuredContentId}/comments/batch
     */
    postStructuredContentCommentBatch: (
      structuredContentId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/structured-contents/${structuredContentId}/comments/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comment
     * @name PutCommentBatch
     * @request PUT:/v1.0/comments/batch
     */
    putCommentBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/comments/batch`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comment
     * @name DeleteCommentBatch
     * @request DELETE:/v1.0/comments/batch
     */
    deleteCommentBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/comments/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comment
     * @name PostDocumentCommentBatch
     * @request POST:/v1.0/documents/{documentId}/comments/batch
     */
    postDocumentCommentBatch: (
      documentId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/documents/${documentId}/comments/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContentElement
     * @name GetAssetLibraryContentElementsPage
     * @request GET:/v1.0/asset-libraries/{assetLibraryId}/content-elements
     */
    getAssetLibraryContentElementsPage: (
      assetLibraryId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageContentElement>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/content-elements`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContentElement
     * @name GetSiteContentElementsPage
     * @request GET:/v1.0/sites/{siteId}/content-elements
     */
    getSiteContentElementsPage: (
      siteId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageContentElement>({
        path: `/v1.0/sites/${siteId}/content-elements`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Retrieves the content set's elements (e.g., structured content, blogs, etc.). Results can be paginated. The set of available headers are: Accept-Language (string), Host (string), User-Agent (string), X-Browser (string), X-Cookies (collection string), X-Device-Brand (string), X-Device-Model (string), X-Device-Screen-Resolution-Height (double), X-Device-Screen-Resolution-Width (double), X-Last-Sign-In-Date-Time (date time) and X-Signed-In (boolean). Local date will be always present in the request.
     *
     * @tags ContentSetElement
     * @name GetContentSetContentSetElementsPage
     * @request GET:/v1.0/content-sets/{contentSetId}/content-set-elements
     */
    getContentSetContentSetElementsPage: (
      contentSetId: string,
      query?: {
        page?: string;
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageContentSetElement>({
        path: `/v1.0/content-sets/${contentSetId}/content-set-elements`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContentSetElement
     * @name GetAssetLibraryContentSetByKeyContentSetElementsPage
     * @request GET:/v1.0/asset-libraries/{assetLibraryId}/content-sets/by-key/{key}/content-set-elements
     */
    getAssetLibraryContentSetByKeyContentSetElementsPage: (
      assetLibraryId: string,
      key: string,
      query?: {
        page?: string;
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageContentSetElement>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/content-sets/by-key/${key}/content-set-elements`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContentSetElement
     * @name GetAssetLibraryContentSetByUuidContentSetElementsPage
     * @request GET:/v1.0/asset-libraries/{assetLibraryId}/content-sets/by-uuid/{uuid}/content-set-elements
     */
    getAssetLibraryContentSetByUuidContentSetElementsPage: (
      assetLibraryId: string,
      uuid: string,
      query?: {
        page?: string;
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageContentSetElement>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/content-sets/by-uuid/${uuid}/content-set-elements`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Retrieves the content set elements by key. Results can be paginated.
     *
     * @tags ContentSetElement
     * @name GetSiteContentSetByKeyContentSetElementsPage
     * @request GET:/v1.0/sites/{siteId}/content-sets/by-key/{key}/content-set-elements
     */
    getSiteContentSetByKeyContentSetElementsPage: (
      siteId: string,
      key: string,
      query?: {
        page?: string;
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageContentSetElement>({
        path: `/v1.0/sites/${siteId}/content-sets/by-key/${key}/content-set-elements`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Retrieves the content set elements by UUID. Results can be paginated.
     *
     * @tags ContentSetElement
     * @name GetSiteContentSetByUuidContentSetElementsPage
     * @request GET:/v1.0/sites/{siteId}/content-sets/by-uuid/{uuid}/content-set-elements
     */
    getSiteContentSetByUuidContentSetElementsPage: (
      siteId: string,
      uuid: string,
      query?: {
        page?: string;
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageContentSetElement>({
        path: `/v1.0/sites/${siteId}/content-sets/by-uuid/${uuid}/content-set-elements`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContentStructure
     * @name GetAssetLibraryContentStructuresPage
     * @request GET:/v1.0/asset-libraries/{assetLibraryId}/content-structures
     */
    getAssetLibraryContentStructuresPage: (
      assetLibraryId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageContentStructure>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/content-structures`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Retrieves the site's content structures. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags ContentStructure
     * @name GetSiteContentStructuresPage
     * @request GET:/v1.0/sites/{siteId}/content-structures
     */
    getSiteContentStructuresPage: (
      siteId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageContentStructure>({
        path: `/v1.0/sites/${siteId}/content-structures`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Retrieves the content structure.
     *
     * @tags ContentStructure
     * @name GetContentStructure
     * @request GET:/v1.0/content-structures/{contentStructureId}
     */
    getContentStructure: (contentStructureId: string, params: RequestParams = {}) =>
      this.request<any, ContentStructure>({
        path: `/v1.0/content-structures/${contentStructureId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContentStructure
     * @name GetSiteContentStructurePermissionsPage
     * @request GET:/v1.0/sites/{siteId}/content-structures/permissions
     */
    getSiteContentStructurePermissionsPage: (
      siteId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/content-structures/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContentStructure
     * @name PutSiteContentStructurePermissionsPage
     * @request PUT:/v1.0/sites/{siteId}/content-structures/permissions
     */
    putSiteContentStructurePermissionsPage: (siteId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/content-structures/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContentStructure
     * @name GetContentStructurePermissionsPage
     * @request GET:/v1.0/content-structures/{contentStructureId}/permissions
     */
    getContentStructurePermissionsPage: (
      contentStructureId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/content-structures/${contentStructureId}/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContentStructure
     * @name PutContentStructurePermissionsPage
     * @request PUT:/v1.0/content-structures/{contentStructureId}/permissions
     */
    putContentStructurePermissionsPage: (contentStructureId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/content-structures/${contentStructureId}/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContentStructure
     * @name GetAssetLibraryContentStructurePermissionsPage
     * @request GET:/v1.0/asset-libraries/{assetLibraryId}/content-structures/permissions
     */
    getAssetLibraryContentStructurePermissionsPage: (
      assetLibraryId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/content-structures/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContentStructure
     * @name PutAssetLibraryContentStructurePermissionsPage
     * @request PUT:/v1.0/asset-libraries/{assetLibraryId}/content-structures/permissions
     */
    putAssetLibraryContentStructurePermissionsPage: (
      assetLibraryId: string,
      data: Permission[],
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/content-structures/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContentTemplate
     * @name GetSiteContentTemplatesPage
     * @request GET:/v1.0/sites/{siteId}/content-templates
     */
    getSiteContentTemplatesPage: (
      siteId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageContentTemplate>({
        path: `/v1.0/sites/${siteId}/content-templates`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContentTemplate
     * @name GetAssetLibraryContentTemplatesPage
     * @request GET:/v1.0/asset-libraries/{assetLibraryId}/content-templates
     */
    getAssetLibraryContentTemplatesPage: (
      assetLibraryId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageContentTemplate>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/content-templates`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContentTemplate
     * @name GetSiteContentTemplate
     * @request GET:/v1.0/sites/{siteId}/content-templates/{contentTemplateId}
     */
    getSiteContentTemplate: (siteId: string, contentTemplateId: string, params: RequestParams = {}) =>
      this.request<any, ContentTemplate>({
        path: `/v1.0/sites/${siteId}/content-templates/${contentTemplateId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentFolder
     * @name GetAssetLibraryDocumentFoldersPage
     * @request GET:/v1.0/asset-libraries/{assetLibraryId}/document-folders
     */
    getAssetLibraryDocumentFoldersPage: (
      assetLibraryId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageDocumentFolder>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/document-folders`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentFolder
     * @name PostAssetLibraryDocumentFolder
     * @request POST:/v1.0/asset-libraries/{assetLibraryId}/document-folders
     */
    postAssetLibraryDocumentFolder: (assetLibraryId: string, data: DocumentFolder, params: RequestParams = {}) =>
      this.request<any, DocumentFolder>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/document-folders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the folder's subfolders. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags DocumentFolder
     * @name GetDocumentFolderDocumentFoldersPage
     * @request GET:/v1.0/document-folders/{parentDocumentFolderId}/document-folders
     */
    getDocumentFolderDocumentFoldersPage: (
      parentDocumentFolderId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageDocumentFolder>({
        path: `/v1.0/document-folders/${parentDocumentFolderId}/document-folders`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new folder in a folder identified by `parentDocumentFolderId`.
     *
     * @tags DocumentFolder
     * @name PostDocumentFolderDocumentFolder
     * @request POST:/v1.0/document-folders/{parentDocumentFolderId}/document-folders
     */
    postDocumentFolderDocumentFolder: (
      parentDocumentFolderId: string,
      data: DocumentFolder,
      params: RequestParams = {},
    ) =>
      this.request<any, DocumentFolder>({
        path: `/v1.0/document-folders/${parentDocumentFolderId}/document-folders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the site's document folders. Results can be paginated, filtered, searched, flattened, and sorted.
     *
     * @tags DocumentFolder
     * @name GetSiteDocumentFoldersPage
     * @request GET:/v1.0/sites/{siteId}/document-folders
     */
    getSiteDocumentFoldersPage: (
      siteId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageDocumentFolder>({
        path: `/v1.0/sites/${siteId}/document-folders`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new document folder.
     *
     * @tags DocumentFolder
     * @name PostSiteDocumentFolder
     * @request POST:/v1.0/sites/{siteId}/document-folders
     */
    postSiteDocumentFolder: (siteId: string, data: DocumentFolder, params: RequestParams = {}) =>
      this.request<any, DocumentFolder>({
        path: `/v1.0/sites/${siteId}/document-folders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentFolder
     * @name PutDocumentFolderSubscribe
     * @request PUT:/v1.0/document-folders/{documentFolderId}/subscribe
     */
    putDocumentFolderSubscribe: (documentFolderId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/document-folders/${documentFolderId}/subscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentFolder
     * @name PutDocumentFolderUnsubscribe
     * @request PUT:/v1.0/document-folders/{documentFolderId}/unsubscribe
     */
    putDocumentFolderUnsubscribe: (documentFolderId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/document-folders/${documentFolderId}/unsubscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * @description Retrieves the document folder.
     *
     * @tags DocumentFolder
     * @name GetDocumentFolder
     * @request GET:/v1.0/document-folders/{documentFolderId}
     */
    getDocumentFolder: (documentFolderId: string, params: RequestParams = {}) =>
      this.request<any, DocumentFolder>({
        path: `/v1.0/document-folders/${documentFolderId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the document folder with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags DocumentFolder
     * @name PutDocumentFolder
     * @request PUT:/v1.0/document-folders/{documentFolderId}
     */
    putDocumentFolder: (documentFolderId: string, data: DocumentFolder, params: RequestParams = {}) =>
      this.request<any, DocumentFolder>({
        path: `/v1.0/document-folders/${documentFolderId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the document folder and returns a 204 if the operation succeeds.
     *
     * @tags DocumentFolder
     * @name DeleteDocumentFolder
     * @request DELETE:/v1.0/document-folders/{documentFolderId}
     */
    deleteDocumentFolder: (documentFolderId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/document-folders/${documentFolderId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Updates only the fields received in the request body. Any other fields are left untouched.
     *
     * @tags DocumentFolder
     * @name PatchDocumentFolder
     * @request PATCH:/v1.0/document-folders/{documentFolderId}
     */
    patchDocumentFolder: (documentFolderId: string, data: DocumentFolder, params: RequestParams = {}) =>
      this.request<any, DocumentFolder>({
        path: `/v1.0/document-folders/${documentFolderId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentFolder
     * @name PostAssetLibraryDocumentFolderBatch
     * @request POST:/v1.0/asset-libraries/{assetLibraryId}/document-folders/batch
     */
    postAssetLibraryDocumentFolderBatch: (
      assetLibraryId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/document-folders/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentFolder
     * @name PutDocumentFolderBatch
     * @request PUT:/v1.0/document-folders/batch
     */
    putDocumentFolderBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/document-folders/batch`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentFolder
     * @name DeleteDocumentFolderBatch
     * @request DELETE:/v1.0/document-folders/batch
     */
    deleteDocumentFolderBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/document-folders/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentFolder
     * @name GetDocumentFolderPermissionsPage
     * @request GET:/v1.0/document-folders/{documentFolderId}/permissions
     */
    getDocumentFolderPermissionsPage: (
      documentFolderId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/document-folders/${documentFolderId}/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentFolder
     * @name PutDocumentFolderPermissionsPage
     * @request PUT:/v1.0/document-folders/{documentFolderId}/permissions
     */
    putDocumentFolderPermissionsPage: (documentFolderId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/document-folders/${documentFolderId}/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentFolder
     * @name PostSiteDocumentFolderBatch
     * @request POST:/v1.0/sites/{siteId}/document-folders/batch
     */
    postSiteDocumentFolderBatch: (
      siteId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/document-folders/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentFolder
     * @name GetSiteDocumentFolderPermissionsPage
     * @request GET:/v1.0/sites/{siteId}/document-folders/permissions
     */
    getSiteDocumentFolderPermissionsPage: (
      siteId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/document-folders/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentFolder
     * @name PutSiteDocumentFolderPermissionsPage
     * @request PUT:/v1.0/sites/{siteId}/document-folders/permissions
     */
    putSiteDocumentFolderPermissionsPage: (siteId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/document-folders/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentFolder
     * @name GetAssetLibraryDocumentFolderPermissionsPage
     * @request GET:/v1.0/asset-libraries/{assetLibraryId}/document-folders/permissions
     */
    getAssetLibraryDocumentFolderPermissionsPage: (
      assetLibraryId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/document-folders/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentFolder
     * @name PutAssetLibraryDocumentFolderPermissionsPage
     * @request PUT:/v1.0/asset-libraries/{assetLibraryId}/document-folders/permissions
     */
    putAssetLibraryDocumentFolderPermissionsPage: (
      assetLibraryId: string,
      data: Permission[],
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/document-folders/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name GetAssetLibraryDocumentsPage
     * @request GET:/v1.0/asset-libraries/{assetLibraryId}/documents
     */
    getAssetLibraryDocumentsPage: (
      assetLibraryId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageDocument>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/documents`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name PostAssetLibraryDocument
     * @request POST:/v1.0/asset-libraries/{assetLibraryId}/documents
     */
    postAssetLibraryDocument: (assetLibraryId: string, data: MultipartBody, params: RequestParams = {}) =>
      this.request<any, Document>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/documents`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Retrieves the folder's documents. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags Document
     * @name GetDocumentFolderDocumentsPage
     * @request GET:/v1.0/document-folders/{documentFolderId}/documents
     */
    getDocumentFolderDocumentsPage: (
      documentFolderId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageDocument>({
        path: `/v1.0/document-folders/${documentFolderId}/documents`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new document inside the folder identified by `documentFolderId`. The request body must be `multipart/form-data` with two parts, the file's bytes (`file`), and an optional JSON string (`document`) with the metadata.
     *
     * @tags Document
     * @name PostDocumentFolderDocument
     * @request POST:/v1.0/document-folders/{documentFolderId}/documents
     */
    postDocumentFolderDocument: (documentFolderId: string, data: MultipartBody, params: RequestParams = {}) =>
      this.request<any, Document>({
        path: `/v1.0/document-folders/${documentFolderId}/documents`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Retrieves the site's document by external reference code.
     *
     * @tags Document
     * @name GetSiteDocumentByExternalReferenceCode
     * @request GET:/v1.0/sites/{siteId}/documents/by-external-reference-code/{externalReferenceCode}
     */
    getSiteDocumentByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, Document>({
        path: `/v1.0/sites/${siteId}/documents/by-external-reference-code/${externalReferenceCode}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the document by external reference code with the information sent in the request body, or replaces it if it not exists. Any missing fields are deleted, unless they are required. The request body must be `multipart/form-data` with two parts, the file'sbytes (`file`), and an optional JSON string (`document`) with the metadata.
     *
     * @tags Document
     * @name PutSiteDocumentByExternalReferenceCode
     * @request PUT:/v1.0/sites/{siteId}/documents/by-external-reference-code/{externalReferenceCode}
     */
    putSiteDocumentByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      data: MultipartBody,
      params: RequestParams = {},
    ) =>
      this.request<any, Document>({
        path: `/v1.0/sites/${siteId}/documents/by-external-reference-code/${externalReferenceCode}`,
        method: "PUT",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Deletes the site's document by external reference code returns a 204 if the operation succeeds.
     *
     * @tags Document
     * @name DeleteSiteDocumentByExternalReferenceCode
     * @request DELETE:/v1.0/sites/{siteId}/documents/by-external-reference-code/{externalReferenceCode}
     */
    deleteSiteDocumentByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/documents/by-external-reference-code/${externalReferenceCode}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves the document's rating.
     *
     * @tags Document
     * @name GetDocumentMyRating
     * @request GET:/v1.0/documents/{documentId}/my-rating
     */
    getDocumentMyRating: (documentId: string, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/documents/${documentId}/my-rating`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the rating with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags Document
     * @name PutDocumentMyRating
     * @request PUT:/v1.0/documents/{documentId}/my-rating
     */
    putDocumentMyRating: (documentId: string, data: Rating, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/documents/${documentId}/my-rating`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Creates a new rating for the document, by the user who authenticated the request.
     *
     * @tags Document
     * @name PostDocumentMyRating
     * @request POST:/v1.0/documents/{documentId}/my-rating
     */
    postDocumentMyRating: (documentId: string, data: Rating, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/documents/${documentId}/my-rating`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the document's rating and returns a 204 if the operation succeeded.
     *
     * @tags Document
     * @name DeleteDocumentMyRating
     * @request DELETE:/v1.0/documents/{documentId}/my-rating
     */
    deleteDocumentMyRating: (documentId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/documents/${documentId}/my-rating`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves the document.
     *
     * @tags Document
     * @name GetDocument
     * @request GET:/v1.0/documents/{documentId}
     */
    getDocument: (documentId: string, params: RequestParams = {}) =>
      this.request<any, Document>({
        path: `/v1.0/documents/${documentId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the document with the information sent in the request body. Any missing fields are deleted, unless they are required. The request body must be `multipart/form-data` with two parts, the file's bytes (`file`), and an optional JSON string (`document`) with the metadata.
     *
     * @tags Document
     * @name PutDocument
     * @request PUT:/v1.0/documents/{documentId}
     */
    putDocument: (documentId: string, data: MultipartBody, params: RequestParams = {}) =>
      this.request<any, Document>({
        path: `/v1.0/documents/${documentId}`,
        method: "PUT",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Deletes the document and returns a 204 if the operation succeeds.
     *
     * @tags Document
     * @name DeleteDocument
     * @request DELETE:/v1.0/documents/{documentId}
     */
    deleteDocument: (documentId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/documents/${documentId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Updates only the fields received in the request body, leaving any other fields untouched. The request body must be `multipart/form-data` with two parts, the file's bytes (`file`), and an optional JSON string (`document`) with the metadata.
     *
     * @tags Document
     * @name PatchDocument
     * @request PATCH:/v1.0/documents/{documentId}
     */
    patchDocument: (documentId: string, data: MultipartBody, params: RequestParams = {}) =>
      this.request<any, Document>({
        path: `/v1.0/documents/${documentId}`,
        method: "PATCH",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Retrieves the documents in the site's root folder. Results can be paginated, filtered, searched, flattened, and sorted.
     *
     * @tags Document
     * @name GetSiteDocumentsPage
     * @request GET:/v1.0/sites/{siteId}/documents
     */
    getSiteDocumentsPage: (
      siteId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageDocument>({
        path: `/v1.0/sites/${siteId}/documents`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new document. The request body must be `multipart/form-data` with two parts, the file's bytes (`file`), and an optional JSON string (`document`) with the metadata.
     *
     * @tags Document
     * @name PostSiteDocument
     * @request POST:/v1.0/sites/{siteId}/documents
     */
    postSiteDocument: (siteId: string, data: MultipartBody, params: RequestParams = {}) =>
      this.request<any, Document>({
        path: `/v1.0/sites/${siteId}/documents`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Retrieves the document's rendered display page
     *
     * @tags Document
     * @name GetDocumentRenderedContentByDisplayPageDisplayPageKey
     * @request GET:/v1.0/documents/{documentId}/rendered-content-by-display-page/{displayPageKey}
     */
    getDocumentRenderedContentByDisplayPageDisplayPageKey: (
      documentId: string,
      displayPageKey: string,
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/v1.0/documents/${documentId}/rendered-content-by-display-page/${displayPageKey}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name PostAssetLibraryDocumentBatch
     * @request POST:/v1.0/asset-libraries/{assetLibraryId}/documents/batch
     */
    postAssetLibraryDocumentBatch: (
      assetLibraryId: string,
      data: MultipartBody,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/documents/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name GetAssetLibraryDocumentPermissionsPage
     * @request GET:/v1.0/asset-libraries/{assetLibraryId}/documents/permissions
     */
    getAssetLibraryDocumentPermissionsPage: (
      assetLibraryId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/documents/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name PutAssetLibraryDocumentPermissionsPage
     * @request PUT:/v1.0/asset-libraries/{assetLibraryId}/documents/permissions
     */
    putAssetLibraryDocumentPermissionsPage: (assetLibraryId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/documents/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name PostDocumentFolderDocumentBatch
     * @request POST:/v1.0/document-folders/{documentFolderId}/documents/batch
     */
    postDocumentFolderDocumentBatch: (
      documentFolderId: string,
      data: MultipartBody,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/document-folders/${documentFolderId}/documents/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name GetDocumentPermissionsPage
     * @request GET:/v1.0/documents/{documentId}/permissions
     */
    getDocumentPermissionsPage: (
      documentId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/documents/${documentId}/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name PutDocumentPermissionsPage
     * @request PUT:/v1.0/documents/{documentId}/permissions
     */
    putDocumentPermissionsPage: (documentId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/documents/${documentId}/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name GetSiteDocumentPermissionsPage
     * @request GET:/v1.0/sites/{siteId}/documents/permissions
     */
    getSiteDocumentPermissionsPage: (
      siteId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/documents/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name PutSiteDocumentPermissionsPage
     * @request PUT:/v1.0/sites/{siteId}/documents/permissions
     */
    putSiteDocumentPermissionsPage: (siteId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/documents/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name PutDocumentBatch
     * @request PUT:/v1.0/documents/batch
     */
    putDocumentBatch: (
      data: MultipartBody,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/documents/batch`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name DeleteDocumentBatch
     * @request DELETE:/v1.0/documents/batch
     */
    deleteDocumentBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/documents/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name PostSiteDocumentBatch
     * @request POST:/v1.0/sites/{siteId}/documents/batch
     */
    postSiteDocumentBatch: (
      siteId: string,
      data: MultipartBody,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/documents/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the knowledge base article's rating.
     *
     * @tags KnowledgeBaseArticle
     * @name GetKnowledgeBaseArticleMyRating
     * @request GET:/v1.0/knowledge-base-articles/{knowledgeBaseArticleId}/my-rating
     */
    getKnowledgeBaseArticleMyRating: (knowledgeBaseArticleId: string, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/knowledge-base-articles/${knowledgeBaseArticleId}/my-rating`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the rating with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags KnowledgeBaseArticle
     * @name PutKnowledgeBaseArticleMyRating
     * @request PUT:/v1.0/knowledge-base-articles/{knowledgeBaseArticleId}/my-rating
     */
    putKnowledgeBaseArticleMyRating: (knowledgeBaseArticleId: string, data: Rating, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/knowledge-base-articles/${knowledgeBaseArticleId}/my-rating`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Creates a rating for the knowledge base article.
     *
     * @tags KnowledgeBaseArticle
     * @name PostKnowledgeBaseArticleMyRating
     * @request POST:/v1.0/knowledge-base-articles/{knowledgeBaseArticleId}/my-rating
     */
    postKnowledgeBaseArticleMyRating: (knowledgeBaseArticleId: string, data: Rating, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/knowledge-base-articles/${knowledgeBaseArticleId}/my-rating`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the knowledge base article's rating and returns a 204 if the operation succeeds.
     *
     * @tags KnowledgeBaseArticle
     * @name DeleteKnowledgeBaseArticleMyRating
     * @request DELETE:/v1.0/knowledge-base-articles/{knowledgeBaseArticleId}/my-rating
     */
    deleteKnowledgeBaseArticleMyRating: (knowledgeBaseArticleId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/knowledge-base-articles/${knowledgeBaseArticleId}/my-rating`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves the site's knowledge base articles. Results can be paginated, filtered, searched, flattened, and sorted.
     *
     * @tags KnowledgeBaseArticle
     * @name GetSiteKnowledgeBaseArticlesPage
     * @request GET:/v1.0/sites/{siteId}/knowledge-base-articles
     */
    getSiteKnowledgeBaseArticlesPage: (
      siteId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageKnowledgeBaseArticle>({
        path: `/v1.0/sites/${siteId}/knowledge-base-articles`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new knowledge base article.
     *
     * @tags KnowledgeBaseArticle
     * @name PostSiteKnowledgeBaseArticle
     * @request POST:/v1.0/sites/{siteId}/knowledge-base-articles
     */
    postSiteKnowledgeBaseArticle: (siteId: string, data: KnowledgeBaseArticle, params: RequestParams = {}) =>
      this.request<any, KnowledgeBaseArticle>({
        path: `/v1.0/sites/${siteId}/knowledge-base-articles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseArticle
     * @name PutKnowledgeBaseArticleSubscribe
     * @request PUT:/v1.0/knowledge-base-articles/{knowledgeBaseArticleId}/subscribe
     */
    putKnowledgeBaseArticleSubscribe: (knowledgeBaseArticleId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/knowledge-base-articles/${knowledgeBaseArticleId}/subscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseArticle
     * @name PutKnowledgeBaseArticleUnsubscribe
     * @request PUT:/v1.0/knowledge-base-articles/{knowledgeBaseArticleId}/unsubscribe
     */
    putKnowledgeBaseArticleUnsubscribe: (knowledgeBaseArticleId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/knowledge-base-articles/${knowledgeBaseArticleId}/unsubscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseArticle
     * @name PutSiteKnowledgeBaseArticleSubscribe
     * @request PUT:/v1.0/sites/{siteId}/knowledge-base-articles/subscribe
     */
    putSiteKnowledgeBaseArticleSubscribe: (siteId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/knowledge-base-articles/subscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseArticle
     * @name PutSiteKnowledgeBaseArticleUnsubscribe
     * @request PUT:/v1.0/sites/{siteId}/knowledge-base-articles/unsubscribe
     */
    putSiteKnowledgeBaseArticleUnsubscribe: (siteId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/knowledge-base-articles/unsubscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * @description Retrieves the knowledge base article.
     *
     * @tags KnowledgeBaseArticle
     * @name GetKnowledgeBaseArticle
     * @request GET:/v1.0/knowledge-base-articles/{knowledgeBaseArticleId}
     */
    getKnowledgeBaseArticle: (knowledgeBaseArticleId: string, params: RequestParams = {}) =>
      this.request<any, KnowledgeBaseArticle>({
        path: `/v1.0/knowledge-base-articles/${knowledgeBaseArticleId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the knowledge base article with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags KnowledgeBaseArticle
     * @name PutKnowledgeBaseArticle
     * @request PUT:/v1.0/knowledge-base-articles/{knowledgeBaseArticleId}
     */
    putKnowledgeBaseArticle: (knowledgeBaseArticleId: string, data: KnowledgeBaseArticle, params: RequestParams = {}) =>
      this.request<any, KnowledgeBaseArticle>({
        path: `/v1.0/knowledge-base-articles/${knowledgeBaseArticleId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the knowledge base article and returns a 204 if the operation succeeds.
     *
     * @tags KnowledgeBaseArticle
     * @name DeleteKnowledgeBaseArticle
     * @request DELETE:/v1.0/knowledge-base-articles/{knowledgeBaseArticleId}
     */
    deleteKnowledgeBaseArticle: (knowledgeBaseArticleId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/knowledge-base-articles/${knowledgeBaseArticleId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Updates only the fields received in the request body, leaving any other fields untouched.
     *
     * @tags KnowledgeBaseArticle
     * @name PatchKnowledgeBaseArticle
     * @request PATCH:/v1.0/knowledge-base-articles/{knowledgeBaseArticleId}
     */
    patchKnowledgeBaseArticle: (
      knowledgeBaseArticleId: string,
      data: KnowledgeBaseArticle,
      params: RequestParams = {},
    ) =>
      this.request<any, KnowledgeBaseArticle>({
        path: `/v1.0/knowledge-base-articles/${knowledgeBaseArticleId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the folder's knowledge base articles. Results can be paginated, filtered, searched, flattened, and sorted.
     *
     * @tags KnowledgeBaseArticle
     * @name GetKnowledgeBaseFolderKnowledgeBaseArticlesPage
     * @request GET:/v1.0/knowledge-base-folders/{knowledgeBaseFolderId}/knowledge-base-articles
     */
    getKnowledgeBaseFolderKnowledgeBaseArticlesPage: (
      knowledgeBaseFolderId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageKnowledgeBaseArticle>({
        path: `/v1.0/knowledge-base-folders/${knowledgeBaseFolderId}/knowledge-base-articles`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new knowledge base article in the folder.
     *
     * @tags KnowledgeBaseArticle
     * @name PostKnowledgeBaseFolderKnowledgeBaseArticle
     * @request POST:/v1.0/knowledge-base-folders/{knowledgeBaseFolderId}/knowledge-base-articles
     */
    postKnowledgeBaseFolderKnowledgeBaseArticle: (
      knowledgeBaseFolderId: string,
      data: KnowledgeBaseArticle,
      params: RequestParams = {},
    ) =>
      this.request<any, KnowledgeBaseArticle>({
        path: `/v1.0/knowledge-base-folders/${knowledgeBaseFolderId}/knowledge-base-articles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the site's knowledge base article by external reference code.
     *
     * @tags KnowledgeBaseArticle
     * @name GetSiteKnowledgeBaseArticleByExternalReferenceCode
     * @request GET:/v1.0/sites/{siteId}/knowledge-base-articles/by-external-reference-code/{externalReferenceCode}
     */
    getSiteKnowledgeBaseArticleByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, KnowledgeBaseArticle>({
        path: `/v1.0/sites/${siteId}/knowledge-base-articles/by-external-reference-code/${externalReferenceCode}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Updates the site's knowledge base article with the given external reference code, or creates it if it not exists.
     *
     * @tags KnowledgeBaseArticle
     * @name PutSiteKnowledgeBaseArticleByExternalReferenceCode
     * @request PUT:/v1.0/sites/{siteId}/knowledge-base-articles/by-external-reference-code/{externalReferenceCode}
     */
    putSiteKnowledgeBaseArticleByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      data: KnowledgeBaseArticle,
      params: RequestParams = {},
    ) =>
      this.request<any, KnowledgeBaseArticle>({
        path: `/v1.0/sites/${siteId}/knowledge-base-articles/by-external-reference-code/${externalReferenceCode}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the knowledge base article by external reference code.
     *
     * @tags KnowledgeBaseArticle
     * @name DeleteSiteKnowledgeBaseArticleByExternalReferenceCode
     * @request DELETE:/v1.0/sites/{siteId}/knowledge-base-articles/by-external-reference-code/{externalReferenceCode}
     */
    deleteSiteKnowledgeBaseArticleByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/knowledge-base-articles/by-external-reference-code/${externalReferenceCode}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves the parent knowledge base article's child knowledge base articles. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags KnowledgeBaseArticle
     * @name GetKnowledgeBaseArticleKnowledgeBaseArticlesPage
     * @request GET:/v1.0/knowledge-base-articles/{parentKnowledgeBaseArticleId}/knowledge-base-articles
     */
    getKnowledgeBaseArticleKnowledgeBaseArticlesPage: (
      parentKnowledgeBaseArticleId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageKnowledgeBaseArticle>({
        path: `/v1.0/knowledge-base-articles/${parentKnowledgeBaseArticleId}/knowledge-base-articles`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a child knowledge base article of the knowledge base article identified by `parentKnowledgeBaseArticleId`.
     *
     * @tags KnowledgeBaseArticle
     * @name PostKnowledgeBaseArticleKnowledgeBaseArticle
     * @request POST:/v1.0/knowledge-base-articles/{parentKnowledgeBaseArticleId}/knowledge-base-articles
     */
    postKnowledgeBaseArticleKnowledgeBaseArticle: (
      parentKnowledgeBaseArticleId: string,
      data: KnowledgeBaseArticle,
      params: RequestParams = {},
    ) =>
      this.request<any, KnowledgeBaseArticle>({
        path: `/v1.0/knowledge-base-articles/${parentKnowledgeBaseArticleId}/knowledge-base-articles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseArticle
     * @name PutKnowledgeBaseArticleBatch
     * @request PUT:/v1.0/knowledge-base-articles/batch
     */
    putKnowledgeBaseArticleBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/knowledge-base-articles/batch`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseArticle
     * @name DeleteKnowledgeBaseArticleBatch
     * @request DELETE:/v1.0/knowledge-base-articles/batch
     */
    deleteKnowledgeBaseArticleBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/knowledge-base-articles/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseArticle
     * @name GetKnowledgeBaseArticlePermissionsPage
     * @request GET:/v1.0/knowledge-base-articles/{knowledgeBaseArticleId}/permissions
     */
    getKnowledgeBaseArticlePermissionsPage: (
      knowledgeBaseArticleId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/knowledge-base-articles/${knowledgeBaseArticleId}/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseArticle
     * @name PutKnowledgeBaseArticlePermissionsPage
     * @request PUT:/v1.0/knowledge-base-articles/{knowledgeBaseArticleId}/permissions
     */
    putKnowledgeBaseArticlePermissionsPage: (
      knowledgeBaseArticleId: string,
      data: Permission[],
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/knowledge-base-articles/${knowledgeBaseArticleId}/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseArticle
     * @name PostSiteKnowledgeBaseArticleBatch
     * @request POST:/v1.0/sites/{siteId}/knowledge-base-articles/batch
     */
    postSiteKnowledgeBaseArticleBatch: (
      siteId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/knowledge-base-articles/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseArticle
     * @name PostKnowledgeBaseFolderKnowledgeBaseArticleBatch
     * @request POST:/v1.0/knowledge-base-folders/{knowledgeBaseFolderId}/knowledge-base-articles/batch
     */
    postKnowledgeBaseFolderKnowledgeBaseArticleBatch: (
      knowledgeBaseFolderId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/knowledge-base-folders/${knowledgeBaseFolderId}/knowledge-base-articles/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseArticle
     * @name GetSiteKnowledgeBaseArticlePermissionsPage
     * @request GET:/v1.0/sites/{siteId}/knowledge-base-articles/permissions
     */
    getSiteKnowledgeBaseArticlePermissionsPage: (
      siteId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/knowledge-base-articles/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseArticle
     * @name PutSiteKnowledgeBaseArticlePermissionsPage
     * @request PUT:/v1.0/sites/{siteId}/knowledge-base-articles/permissions
     */
    putSiteKnowledgeBaseArticlePermissionsPage: (siteId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/knowledge-base-articles/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * @description Retrieves the knowledge base attachment.
     *
     * @tags KnowledgeBaseAttachment
     * @name GetKnowledgeBaseAttachment
     * @request GET:/v1.0/knowledge-base-attachments/{knowledgeBaseAttachmentId}
     */
    getKnowledgeBaseAttachment: (knowledgeBaseAttachmentId: string, params: RequestParams = {}) =>
      this.request<any, KnowledgeBaseAttachment>({
        path: `/v1.0/knowledge-base-attachments/${knowledgeBaseAttachmentId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Deletes the knowledge base file attachment and returns a 204 if the operation succeeds.
     *
     * @tags KnowledgeBaseAttachment
     * @name DeleteKnowledgeBaseAttachment
     * @request DELETE:/v1.0/knowledge-base-attachments/{knowledgeBaseAttachmentId}
     */
    deleteKnowledgeBaseAttachment: (knowledgeBaseAttachmentId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/knowledge-base-attachments/${knowledgeBaseAttachmentId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves the knowledge base article's attachments.
     *
     * @tags KnowledgeBaseAttachment
     * @name GetKnowledgeBaseArticleKnowledgeBaseAttachmentsPage
     * @request GET:/v1.0/knowledge-base-articles/{knowledgeBaseArticleId}/knowledge-base-attachments
     */
    getKnowledgeBaseArticleKnowledgeBaseAttachmentsPage: (knowledgeBaseArticleId: string, params: RequestParams = {}) =>
      this.request<any, PageKnowledgeBaseAttachment>({
        path: `/v1.0/knowledge-base-articles/${knowledgeBaseArticleId}/knowledge-base-attachments`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Creates a new attachment for an existing knowledge base article. The request body must be `multipart/form-data` with two parts, a `file` part with the file's bytes, and an optional JSON string (`knowledgeBaseAttachment`) with the metadata.
     *
     * @tags KnowledgeBaseAttachment
     * @name PostKnowledgeBaseArticleKnowledgeBaseAttachment
     * @request POST:/v1.0/knowledge-base-articles/{knowledgeBaseArticleId}/knowledge-base-attachments
     */
    postKnowledgeBaseArticleKnowledgeBaseAttachment: (
      knowledgeBaseArticleId: string,
      data: MultipartBody,
      params: RequestParams = {},
    ) =>
      this.request<any, KnowledgeBaseAttachment>({
        path: `/v1.0/knowledge-base-articles/${knowledgeBaseArticleId}/knowledge-base-attachments`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseAttachment
     * @name DeleteKnowledgeBaseAttachmentBatch
     * @request DELETE:/v1.0/knowledge-base-attachments/batch
     */
    deleteKnowledgeBaseAttachmentBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/knowledge-base-attachments/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseAttachment
     * @name PostKnowledgeBaseArticleKnowledgeBaseAttachmentBatch
     * @request POST:/v1.0/knowledge-base-articles/{knowledgeBaseArticleId}/knowledge-base-attachments/batch
     */
    postKnowledgeBaseArticleKnowledgeBaseAttachmentBatch: (
      knowledgeBaseArticleId: string,
      data: MultipartBody,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/knowledge-base-articles/${knowledgeBaseArticleId}/knowledge-base-attachments/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the knowledge base folder.
     *
     * @tags KnowledgeBaseFolder
     * @name GetKnowledgeBaseFolder
     * @request GET:/v1.0/knowledge-base-folders/{knowledgeBaseFolderId}
     */
    getKnowledgeBaseFolder: (knowledgeBaseFolderId: string, params: RequestParams = {}) =>
      this.request<any, KnowledgeBaseFolder>({
        path: `/v1.0/knowledge-base-folders/${knowledgeBaseFolderId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the knowledge base folder with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags KnowledgeBaseFolder
     * @name PutKnowledgeBaseFolder
     * @request PUT:/v1.0/knowledge-base-folders/{knowledgeBaseFolderId}
     */
    putKnowledgeBaseFolder: (knowledgeBaseFolderId: string, data: KnowledgeBaseFolder, params: RequestParams = {}) =>
      this.request<any, KnowledgeBaseFolder>({
        path: `/v1.0/knowledge-base-folders/${knowledgeBaseFolderId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the knowledge base folder and returns a 204 if the operation succeeds.
     *
     * @tags KnowledgeBaseFolder
     * @name DeleteKnowledgeBaseFolder
     * @request DELETE:/v1.0/knowledge-base-folders/{knowledgeBaseFolderId}
     */
    deleteKnowledgeBaseFolder: (knowledgeBaseFolderId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/knowledge-base-folders/${knowledgeBaseFolderId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Updates only the fields received in the request body, leaving any other fields untouched.
     *
     * @tags KnowledgeBaseFolder
     * @name PatchKnowledgeBaseFolder
     * @request PATCH:/v1.0/knowledge-base-folders/{knowledgeBaseFolderId}
     */
    patchKnowledgeBaseFolder: (knowledgeBaseFolderId: string, data: KnowledgeBaseFolder, params: RequestParams = {}) =>
      this.request<any, KnowledgeBaseFolder>({
        path: `/v1.0/knowledge-base-folders/${knowledgeBaseFolderId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the site's knowledge base folders. Results can be paginated.
     *
     * @tags KnowledgeBaseFolder
     * @name GetSiteKnowledgeBaseFoldersPage
     * @request GET:/v1.0/sites/{siteId}/knowledge-base-folders
     */
    getSiteKnowledgeBaseFoldersPage: (
      siteId: string,
      query?: {
        page?: string;
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageKnowledgeBaseFolder>({
        path: `/v1.0/sites/${siteId}/knowledge-base-folders`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new knowledge base folder.
     *
     * @tags KnowledgeBaseFolder
     * @name PostSiteKnowledgeBaseFolder
     * @request POST:/v1.0/sites/{siteId}/knowledge-base-folders
     */
    postSiteKnowledgeBaseFolder: (siteId: string, data: KnowledgeBaseFolder, params: RequestParams = {}) =>
      this.request<any, KnowledgeBaseFolder>({
        path: `/v1.0/sites/${siteId}/knowledge-base-folders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the site's knowledge base folder by external reference code.
     *
     * @tags KnowledgeBaseFolder
     * @name GetSiteKnowledgeBaseFolderByExternalReferenceCode
     * @request GET:/v1.0/sites/{siteId}/knowledge-base-folders/by-external-reference-code/{externalReferenceCode}
     */
    getSiteKnowledgeBaseFolderByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, KnowledgeBaseFolder>({
        path: `/v1.0/sites/${siteId}/knowledge-base-folders/by-external-reference-code/${externalReferenceCode}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Updates the site's knowledge base folder with the given external reference code, or creates it if it not exists.
     *
     * @tags KnowledgeBaseFolder
     * @name PutSiteKnowledgeBaseFolderByExternalReferenceCode
     * @request PUT:/v1.0/sites/{siteId}/knowledge-base-folders/by-external-reference-code/{externalReferenceCode}
     */
    putSiteKnowledgeBaseFolderByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      data: KnowledgeBaseFolder,
      params: RequestParams = {},
    ) =>
      this.request<any, KnowledgeBaseFolder>({
        path: `/v1.0/sites/${siteId}/knowledge-base-folders/by-external-reference-code/${externalReferenceCode}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the knowledge base folder by external reference code.
     *
     * @tags KnowledgeBaseFolder
     * @name DeleteSiteKnowledgeBaseFolderByExternalReferenceCode
     * @request DELETE:/v1.0/sites/{siteId}/knowledge-base-folders/by-external-reference-code/{externalReferenceCode}
     */
    deleteSiteKnowledgeBaseFolderByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/knowledge-base-folders/by-external-reference-code/${externalReferenceCode}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves the knowledge base folder's subfolders.
     *
     * @tags KnowledgeBaseFolder
     * @name GetKnowledgeBaseFolderKnowledgeBaseFoldersPage
     * @request GET:/v1.0/knowledge-base-folders/{parentKnowledgeBaseFolderId}/knowledge-base-folders
     */
    getKnowledgeBaseFolderKnowledgeBaseFoldersPage: (
      parentKnowledgeBaseFolderId: string,
      query?: {
        page?: string;
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageKnowledgeBaseFolder>({
        path: `/v1.0/knowledge-base-folders/${parentKnowledgeBaseFolderId}/knowledge-base-folders`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a knowledge base folder inside the parent folder.
     *
     * @tags KnowledgeBaseFolder
     * @name PostKnowledgeBaseFolderKnowledgeBaseFolder
     * @request POST:/v1.0/knowledge-base-folders/{parentKnowledgeBaseFolderId}/knowledge-base-folders
     */
    postKnowledgeBaseFolderKnowledgeBaseFolder: (
      parentKnowledgeBaseFolderId: string,
      data: KnowledgeBaseFolder,
      params: RequestParams = {},
    ) =>
      this.request<any, KnowledgeBaseFolder>({
        path: `/v1.0/knowledge-base-folders/${parentKnowledgeBaseFolderId}/knowledge-base-folders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseFolder
     * @name PutKnowledgeBaseFolderBatch
     * @request PUT:/v1.0/knowledge-base-folders/batch
     */
    putKnowledgeBaseFolderBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/knowledge-base-folders/batch`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseFolder
     * @name DeleteKnowledgeBaseFolderBatch
     * @request DELETE:/v1.0/knowledge-base-folders/batch
     */
    deleteKnowledgeBaseFolderBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/knowledge-base-folders/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseFolder
     * @name GetKnowledgeBaseFolderPermissionsPage
     * @request GET:/v1.0/knowledge-base-folders/{knowledgeBaseFolderId}/permissions
     */
    getKnowledgeBaseFolderPermissionsPage: (
      knowledgeBaseFolderId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/knowledge-base-folders/${knowledgeBaseFolderId}/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseFolder
     * @name PutKnowledgeBaseFolderPermissionsPage
     * @request PUT:/v1.0/knowledge-base-folders/{knowledgeBaseFolderId}/permissions
     */
    putKnowledgeBaseFolderPermissionsPage: (
      knowledgeBaseFolderId: string,
      data: Permission[],
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/knowledge-base-folders/${knowledgeBaseFolderId}/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseFolder
     * @name PostSiteKnowledgeBaseFolderBatch
     * @request POST:/v1.0/sites/{siteId}/knowledge-base-folders/batch
     */
    postSiteKnowledgeBaseFolderBatch: (
      siteId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/knowledge-base-folders/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseFolder
     * @name GetSiteKnowledgeBaseFolderPermissionsPage
     * @request GET:/v1.0/sites/{siteId}/knowledge-base-folders/permissions
     */
    getSiteKnowledgeBaseFolderPermissionsPage: (
      siteId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/knowledge-base-folders/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags KnowledgeBaseFolder
     * @name PutSiteKnowledgeBaseFolderPermissionsPage
     * @request PUT:/v1.0/sites/{siteId}/knowledge-base-folders/permissions
     */
    putSiteKnowledgeBaseFolderPermissionsPage: (siteId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/knowledge-base-folders/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * @description Retrieves the asset libraries languages.
     *
     * @tags Language
     * @name GetAssetLibraryLanguagesPage
     * @request GET:/v1.0/asset-libraries/{assetLibraryId}/languages
     */
    getAssetLibraryLanguagesPage: (assetLibraryId: string, params: RequestParams = {}) =>
      this.request<any, PageLanguage>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/languages`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Retrieves the site's languages.
     *
     * @tags Language
     * @name GetSiteLanguagesPage
     * @request GET:/v1.0/sites/{siteId}/languages
     */
    getSiteLanguagesPage: (siteId: string, params: RequestParams = {}) =>
      this.request<any, PageLanguage>({
        path: `/v1.0/sites/${siteId}/languages`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Retrieves the message board attachment.
     *
     * @tags MessageBoardAttachment
     * @name GetMessageBoardAttachment
     * @request GET:/v1.0/message-board-attachments/{messageBoardAttachmentId}
     */
    getMessageBoardAttachment: (messageBoardAttachmentId: string, params: RequestParams = {}) =>
      this.request<any, MessageBoardAttachment>({
        path: `/v1.0/message-board-attachments/${messageBoardAttachmentId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Deletes the message board attachment and returns a 204 if the operation succeeds.
     *
     * @tags MessageBoardAttachment
     * @name DeleteMessageBoardAttachment
     * @request DELETE:/v1.0/message-board-attachments/{messageBoardAttachmentId}
     */
    deleteMessageBoardAttachment: (messageBoardAttachmentId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/message-board-attachments/${messageBoardAttachmentId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves the message board message's attachments.
     *
     * @tags MessageBoardAttachment
     * @name GetMessageBoardMessageMessageBoardAttachmentsPage
     * @request GET:/v1.0/message-board-messages/{messageBoardMessageId}/message-board-attachments
     */
    getMessageBoardMessageMessageBoardAttachmentsPage: (messageBoardMessageId: string, params: RequestParams = {}) =>
      this.request<any, PageMessageBoardAttachment>({
        path: `/v1.0/message-board-messages/${messageBoardMessageId}/message-board-attachments`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Creates an attachment for the message board message. The request body must be `multipart/form-data` with two parts, the file's bytes (`file`), and an optional JSON string (`MessageBoardAttachment`) with the metadata.
     *
     * @tags MessageBoardAttachment
     * @name PostMessageBoardMessageMessageBoardAttachment
     * @request POST:/v1.0/message-board-messages/{messageBoardMessageId}/message-board-attachments
     */
    postMessageBoardMessageMessageBoardAttachment: (
      messageBoardMessageId: string,
      data: MultipartBody,
      params: RequestParams = {},
    ) =>
      this.request<any, MessageBoardAttachment>({
        path: `/v1.0/message-board-messages/${messageBoardMessageId}/message-board-attachments`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Retrieves the message board thread's attachments.
     *
     * @tags MessageBoardAttachment
     * @name GetMessageBoardThreadMessageBoardAttachmentsPage
     * @request GET:/v1.0/message-board-threads/{messageBoardThreadId}/message-board-attachments
     */
    getMessageBoardThreadMessageBoardAttachmentsPage: (messageBoardThreadId: string, params: RequestParams = {}) =>
      this.request<any, PageMessageBoardAttachment>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}/message-board-attachments`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Creates a new attachment for the message board thread. The request body should be `multipart/form-data` with two parts, the file's bytes (`file`), and an optional JSON string (`knowledgeBaseAttachment`) with the metadata.
     *
     * @tags MessageBoardAttachment
     * @name PostMessageBoardThreadMessageBoardAttachment
     * @request POST:/v1.0/message-board-threads/{messageBoardThreadId}/message-board-attachments
     */
    postMessageBoardThreadMessageBoardAttachment: (
      messageBoardThreadId: string,
      data: MultipartBody,
      params: RequestParams = {},
    ) =>
      this.request<any, MessageBoardAttachment>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}/message-board-attachments`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardAttachment
     * @name DeleteMessageBoardAttachmentBatch
     * @request DELETE:/v1.0/message-board-attachments/batch
     */
    deleteMessageBoardAttachmentBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/message-board-attachments/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardAttachment
     * @name PostMessageBoardMessageMessageBoardAttachmentBatch
     * @request POST:/v1.0/message-board-messages/{messageBoardMessageId}/message-board-attachments/batch
     */
    postMessageBoardMessageMessageBoardAttachmentBatch: (
      messageBoardMessageId: string,
      data: MultipartBody,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/message-board-messages/${messageBoardMessageId}/message-board-attachments/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardAttachment
     * @name PostMessageBoardThreadMessageBoardAttachmentBatch
     * @request POST:/v1.0/message-board-threads/{messageBoardThreadId}/message-board-attachments/batch
     */
    postMessageBoardThreadMessageBoardAttachmentBatch: (
      messageBoardThreadId: string,
      data: MultipartBody,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}/message-board-attachments/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the message board message's rating.
     *
     * @tags MessageBoardMessage
     * @name GetMessageBoardMessageMyRating
     * @request GET:/v1.0/message-board-messages/{messageBoardMessageId}/my-rating
     */
    getMessageBoardMessageMyRating: (messageBoardMessageId: string, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/message-board-messages/${messageBoardMessageId}/my-rating`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the rating with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags MessageBoardMessage
     * @name PutMessageBoardMessageMyRating
     * @request PUT:/v1.0/message-board-messages/{messageBoardMessageId}/my-rating
     */
    putMessageBoardMessageMyRating: (messageBoardMessageId: string, data: Rating, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/message-board-messages/${messageBoardMessageId}/my-rating`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Creates a rating for the message board message.
     *
     * @tags MessageBoardMessage
     * @name PostMessageBoardMessageMyRating
     * @request POST:/v1.0/message-board-messages/{messageBoardMessageId}/my-rating
     */
    postMessageBoardMessageMyRating: (messageBoardMessageId: string, data: Rating, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/message-board-messages/${messageBoardMessageId}/my-rating`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the message board message's rating and returns a 204 if the operation succeeds.
     *
     * @tags MessageBoardMessage
     * @name DeleteMessageBoardMessageMyRating
     * @request DELETE:/v1.0/message-board-messages/{messageBoardMessageId}/my-rating
     */
    deleteMessageBoardMessageMyRating: (messageBoardMessageId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/message-board-messages/${messageBoardMessageId}/my-rating`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves the site's message board messages.
     *
     * @tags MessageBoardMessage
     * @name GetSiteMessageBoardMessagesPage
     * @request GET:/v1.0/sites/{siteId}/message-board-messages
     */
    getSiteMessageBoardMessagesPage: (
      siteId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageMessageBoardMessage>({
        path: `/v1.0/sites/${siteId}/message-board-messages`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardMessage
     * @name PutMessageBoardMessageSubscribe
     * @request PUT:/v1.0/message-board-messages/{messageBoardMessageId}/subscribe
     */
    putMessageBoardMessageSubscribe: (messageBoardMessageId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/message-board-messages/${messageBoardMessageId}/subscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardMessage
     * @name PutMessageBoardMessageUnsubscribe
     * @request PUT:/v1.0/message-board-messages/{messageBoardMessageId}/unsubscribe
     */
    putMessageBoardMessageUnsubscribe: (messageBoardMessageId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/message-board-messages/${messageBoardMessageId}/unsubscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * @description Retrieves the message board message.
     *
     * @tags MessageBoardMessage
     * @name GetMessageBoardMessage
     * @request GET:/v1.0/message-board-messages/{messageBoardMessageId}
     */
    getMessageBoardMessage: (messageBoardMessageId: string, params: RequestParams = {}) =>
      this.request<any, MessageBoardMessage>({
        path: `/v1.0/message-board-messages/${messageBoardMessageId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the message board message with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags MessageBoardMessage
     * @name PutMessageBoardMessage
     * @request PUT:/v1.0/message-board-messages/{messageBoardMessageId}
     */
    putMessageBoardMessage: (messageBoardMessageId: string, data: MessageBoardMessage, params: RequestParams = {}) =>
      this.request<any, MessageBoardMessage>({
        path: `/v1.0/message-board-messages/${messageBoardMessageId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the message board message and returns a 204 if the operation succeeds.
     *
     * @tags MessageBoardMessage
     * @name DeleteMessageBoardMessage
     * @request DELETE:/v1.0/message-board-messages/{messageBoardMessageId}
     */
    deleteMessageBoardMessage: (messageBoardMessageId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/message-board-messages/${messageBoardMessageId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Updates only the fields received in the request body, leaving any other fields untouched.
     *
     * @tags MessageBoardMessage
     * @name PatchMessageBoardMessage
     * @request PATCH:/v1.0/message-board-messages/{messageBoardMessageId}
     */
    patchMessageBoardMessage: (messageBoardMessageId: string, data: MessageBoardMessage, params: RequestParams = {}) =>
      this.request<any, MessageBoardMessage>({
        path: `/v1.0/message-board-messages/${messageBoardMessageId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the parent message board message's child messages. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags MessageBoardMessage
     * @name GetMessageBoardMessageMessageBoardMessagesPage
     * @request GET:/v1.0/message-board-messages/{parentMessageBoardMessageId}/message-board-messages
     */
    getMessageBoardMessageMessageBoardMessagesPage: (
      parentMessageBoardMessageId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageMessageBoardMessage>({
        path: `/v1.0/message-board-messages/${parentMessageBoardMessageId}/message-board-messages`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a child message board message of the parent message.
     *
     * @tags MessageBoardMessage
     * @name PostMessageBoardMessageMessageBoardMessage
     * @request POST:/v1.0/message-board-messages/{parentMessageBoardMessageId}/message-board-messages
     */
    postMessageBoardMessageMessageBoardMessage: (
      parentMessageBoardMessageId: string,
      data: MessageBoardMessage,
      params: RequestParams = {},
    ) =>
      this.request<any, MessageBoardMessage>({
        path: `/v1.0/message-board-messages/${parentMessageBoardMessageId}/message-board-messages`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the message board thread's messages. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags MessageBoardMessage
     * @name GetMessageBoardThreadMessageBoardMessagesPage
     * @request GET:/v1.0/message-board-threads/{messageBoardThreadId}/message-board-messages
     */
    getMessageBoardThreadMessageBoardMessagesPage: (
      messageBoardThreadId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageMessageBoardMessage>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}/message-board-messages`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new message in the message board thread.
     *
     * @tags MessageBoardMessage
     * @name PostMessageBoardThreadMessageBoardMessage
     * @request POST:/v1.0/message-board-threads/{messageBoardThreadId}/message-board-messages
     */
    postMessageBoardThreadMessageBoardMessage: (
      messageBoardThreadId: string,
      data: MessageBoardMessage,
      params: RequestParams = {},
    ) =>
      this.request<any, MessageBoardMessage>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}/message-board-messages`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the site's message board message by external reference code.
     *
     * @tags MessageBoardMessage
     * @name GetSiteMessageBoardMessageByExternalReferenceCode
     * @request GET:/v1.0/sites/{siteId}/message-board-messages/by-external-reference-code/{externalReferenceCode}
     */
    getSiteMessageBoardMessageByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, MessageBoardMessage>({
        path: `/v1.0/sites/${siteId}/message-board-messages/by-external-reference-code/${externalReferenceCode}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Updates the site's message board message with the given external reference code, or creates it if it not exists.
     *
     * @tags MessageBoardMessage
     * @name PutSiteMessageBoardMessageByExternalReferenceCode
     * @request PUT:/v1.0/sites/{siteId}/message-board-messages/by-external-reference-code/{externalReferenceCode}
     */
    putSiteMessageBoardMessageByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      data: MessageBoardMessage,
      params: RequestParams = {},
    ) =>
      this.request<any, MessageBoardMessage>({
        path: `/v1.0/sites/${siteId}/message-board-messages/by-external-reference-code/${externalReferenceCode}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the site's message board message by external reference code.
     *
     * @tags MessageBoardMessage
     * @name DeleteSiteMessageBoardMessageByExternalReferenceCode
     * @request DELETE:/v1.0/sites/{siteId}/message-board-messages/by-external-reference-code/{externalReferenceCode}
     */
    deleteSiteMessageBoardMessageByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/message-board-messages/by-external-reference-code/${externalReferenceCode}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardMessage
     * @name GetSiteMessageBoardMessageByFriendlyUrlPath
     * @request GET:/v1.0/sites/{siteId}/message-board-messages/by-friendly-url-path/{friendlyUrlPath}
     */
    getSiteMessageBoardMessageByFriendlyUrlPath: (
      siteId: string,
      friendlyUrlPath: string,
      params: RequestParams = {},
    ) =>
      this.request<any, MessageBoardMessage>({
        path: `/v1.0/sites/${siteId}/message-board-messages/by-friendly-url-path/${friendlyUrlPath}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardMessage
     * @name PutMessageBoardMessageBatch
     * @request PUT:/v1.0/message-board-messages/batch
     */
    putMessageBoardMessageBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/message-board-messages/batch`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardMessage
     * @name DeleteMessageBoardMessageBatch
     * @request DELETE:/v1.0/message-board-messages/batch
     */
    deleteMessageBoardMessageBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/message-board-messages/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardMessage
     * @name GetMessageBoardMessagePermissionsPage
     * @request GET:/v1.0/message-board-messages/{messageBoardMessageId}/permissions
     */
    getMessageBoardMessagePermissionsPage: (
      messageBoardMessageId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/message-board-messages/${messageBoardMessageId}/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardMessage
     * @name PutMessageBoardMessagePermissionsPage
     * @request PUT:/v1.0/message-board-messages/{messageBoardMessageId}/permissions
     */
    putMessageBoardMessagePermissionsPage: (
      messageBoardMessageId: string,
      data: Permission[],
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/message-board-messages/${messageBoardMessageId}/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardMessage
     * @name PostMessageBoardThreadMessageBoardMessageBatch
     * @request POST:/v1.0/message-board-threads/{messageBoardThreadId}/message-board-messages/batch
     */
    postMessageBoardThreadMessageBoardMessageBatch: (
      messageBoardThreadId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}/message-board-messages/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardMessage
     * @name GetSiteMessageBoardMessagePermissionsPage
     * @request GET:/v1.0/sites/{siteId}/message-board-messages/permissions
     */
    getSiteMessageBoardMessagePermissionsPage: (
      siteId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/message-board-messages/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardMessage
     * @name PutSiteMessageBoardMessagePermissionsPage
     * @request PUT:/v1.0/sites/{siteId}/message-board-messages/permissions
     */
    putSiteMessageBoardMessagePermissionsPage: (siteId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/message-board-messages/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * @description Retrieves the message board section.
     *
     * @tags MessageBoardSection
     * @name GetMessageBoardSection
     * @request GET:/v1.0/message-board-sections/{messageBoardSectionId}
     */
    getMessageBoardSection: (messageBoardSectionId: string, params: RequestParams = {}) =>
      this.request<any, MessageBoardSection>({
        path: `/v1.0/message-board-sections/${messageBoardSectionId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the message board section with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags MessageBoardSection
     * @name PutMessageBoardSection
     * @request PUT:/v1.0/message-board-sections/{messageBoardSectionId}
     */
    putMessageBoardSection: (messageBoardSectionId: string, data: MessageBoardSection, params: RequestParams = {}) =>
      this.request<any, MessageBoardSection>({
        path: `/v1.0/message-board-sections/${messageBoardSectionId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the message board section and returns a 204 if the operation succeeds.
     *
     * @tags MessageBoardSection
     * @name DeleteMessageBoardSection
     * @request DELETE:/v1.0/message-board-sections/{messageBoardSectionId}
     */
    deleteMessageBoardSection: (messageBoardSectionId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/message-board-sections/${messageBoardSectionId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Updates only the fields received in the request body, leaving any other fields untouched.
     *
     * @tags MessageBoardSection
     * @name PatchMessageBoardSection
     * @request PATCH:/v1.0/message-board-sections/{messageBoardSectionId}
     */
    patchMessageBoardSection: (messageBoardSectionId: string, data: MessageBoardSection, params: RequestParams = {}) =>
      this.request<any, MessageBoardSection>({
        path: `/v1.0/message-board-sections/${messageBoardSectionId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the site's message board sections. Results can be paginated, filtered, searched, flattened, and sorted.
     *
     * @tags MessageBoardSection
     * @name GetSiteMessageBoardSectionsPage
     * @request GET:/v1.0/sites/{siteId}/message-board-sections
     */
    getSiteMessageBoardSectionsPage: (
      siteId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageMessageBoardSection>({
        path: `/v1.0/sites/${siteId}/message-board-sections`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new message board section.
     *
     * @tags MessageBoardSection
     * @name PostSiteMessageBoardSection
     * @request POST:/v1.0/sites/{siteId}/message-board-sections
     */
    postSiteMessageBoardSection: (siteId: string, data: MessageBoardSection, params: RequestParams = {}) =>
      this.request<any, MessageBoardSection>({
        path: `/v1.0/sites/${siteId}/message-board-sections`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardSection
     * @name PutMessageBoardSectionSubscribe
     * @request PUT:/v1.0/message-board-sections/{messageBoardSectionId}/subscribe
     */
    putMessageBoardSectionSubscribe: (messageBoardSectionId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/message-board-sections/${messageBoardSectionId}/subscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardSection
     * @name PutMessageBoardSectionUnsubscribe
     * @request PUT:/v1.0/message-board-sections/{messageBoardSectionId}/unsubscribe
     */
    putMessageBoardSectionUnsubscribe: (messageBoardSectionId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/message-board-sections/${messageBoardSectionId}/unsubscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * @description Retrieves the parent message board section's subsections. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags MessageBoardSection
     * @name GetMessageBoardSectionMessageBoardSectionsPage
     * @request GET:/v1.0/message-board-sections/{parentMessageBoardSectionId}/message-board-sections
     */
    getMessageBoardSectionMessageBoardSectionsPage: (
      parentMessageBoardSectionId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageMessageBoardSection>({
        path: `/v1.0/message-board-sections/${parentMessageBoardSectionId}/message-board-sections`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new message board section in the parent section.
     *
     * @tags MessageBoardSection
     * @name PostMessageBoardSectionMessageBoardSection
     * @request POST:/v1.0/message-board-sections/{parentMessageBoardSectionId}/message-board-sections
     */
    postMessageBoardSectionMessageBoardSection: (
      parentMessageBoardSectionId: string,
      data: MessageBoardSection,
      params: RequestParams = {},
    ) =>
      this.request<any, MessageBoardSection>({
        path: `/v1.0/message-board-sections/${parentMessageBoardSectionId}/message-board-sections`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardSection
     * @name PutMessageBoardSectionBatch
     * @request PUT:/v1.0/message-board-sections/batch
     */
    putMessageBoardSectionBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/message-board-sections/batch`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardSection
     * @name DeleteMessageBoardSectionBatch
     * @request DELETE:/v1.0/message-board-sections/batch
     */
    deleteMessageBoardSectionBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/message-board-sections/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardSection
     * @name GetMessageBoardSectionPermissionsPage
     * @request GET:/v1.0/message-board-sections/{messageBoardSectionId}/permissions
     */
    getMessageBoardSectionPermissionsPage: (
      messageBoardSectionId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/message-board-sections/${messageBoardSectionId}/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardSection
     * @name PutMessageBoardSectionPermissionsPage
     * @request PUT:/v1.0/message-board-sections/{messageBoardSectionId}/permissions
     */
    putMessageBoardSectionPermissionsPage: (
      messageBoardSectionId: string,
      data: Permission[],
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/message-board-sections/${messageBoardSectionId}/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardSection
     * @name PostSiteMessageBoardSectionBatch
     * @request POST:/v1.0/sites/{siteId}/message-board-sections/batch
     */
    postSiteMessageBoardSectionBatch: (
      siteId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/message-board-sections/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardSection
     * @name GetSiteMessageBoardSectionPermissionsPage
     * @request GET:/v1.0/sites/{siteId}/message-board-sections/permissions
     */
    getSiteMessageBoardSectionPermissionsPage: (
      siteId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/message-board-sections/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardSection
     * @name PutSiteMessageBoardSectionPermissionsPage
     * @request PUT:/v1.0/sites/{siteId}/message-board-sections/permissions
     */
    putSiteMessageBoardSectionPermissionsPage: (siteId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/message-board-sections/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * @description Retrieves the message board thread's rating.
     *
     * @tags MessageBoardThread
     * @name GetMessageBoardThreadMyRating
     * @request GET:/v1.0/message-board-threads/{messageBoardThreadId}/my-rating
     */
    getMessageBoardThreadMyRating: (messageBoardThreadId: string, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}/my-rating`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the rating with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags MessageBoardThread
     * @name PutMessageBoardThreadMyRating
     * @request PUT:/v1.0/message-board-threads/{messageBoardThreadId}/my-rating
     */
    putMessageBoardThreadMyRating: (messageBoardThreadId: string, data: Rating, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}/my-rating`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Creates the message board thread's rating.
     *
     * @tags MessageBoardThread
     * @name PostMessageBoardThreadMyRating
     * @request POST:/v1.0/message-board-threads/{messageBoardThreadId}/my-rating
     */
    postMessageBoardThreadMyRating: (messageBoardThreadId: string, data: Rating, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}/my-rating`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the message board thread's rating and returns a 204 if the operation succeeds.
     *
     * @tags MessageBoardThread
     * @name DeleteMessageBoardThreadMyRating
     * @request DELETE:/v1.0/message-board-threads/{messageBoardThreadId}/my-rating
     */
    deleteMessageBoardThreadMyRating: (messageBoardThreadId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}/my-rating`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardThread
     * @name GetMessageBoardThreadsRankedPage
     * @request GET:/v1.0/message-board-threads/ranked
     */
    getMessageBoardThreadsRankedPage: (
      query?: {
        dateCreated?: string;
        dateModified?: string;
        messageBoardSectionId?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageMessageBoardThread>({
        path: `/v1.0/message-board-threads/ranked`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Retrieves the site's message board threads. Results can be paginated, filtered, searched, flattened, and sorted.
     *
     * @tags MessageBoardThread
     * @name GetSiteMessageBoardThreadsPage
     * @request GET:/v1.0/sites/{siteId}/message-board-threads
     */
    getSiteMessageBoardThreadsPage: (
      siteId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageMessageBoardThread>({
        path: `/v1.0/sites/${siteId}/message-board-threads`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new message board thread.
     *
     * @tags MessageBoardThread
     * @name PostSiteMessageBoardThread
     * @request POST:/v1.0/sites/{siteId}/message-board-threads
     */
    postSiteMessageBoardThread: (siteId: string, data: MessageBoardThread, params: RequestParams = {}) =>
      this.request<any, MessageBoardThread>({
        path: `/v1.0/sites/${siteId}/message-board-threads`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardThread
     * @name PutMessageBoardThreadSubscribe
     * @request PUT:/v1.0/message-board-threads/{messageBoardThreadId}/subscribe
     */
    putMessageBoardThreadSubscribe: (messageBoardThreadId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}/subscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardThread
     * @name PutMessageBoardThreadUnsubscribe
     * @request PUT:/v1.0/message-board-threads/{messageBoardThreadId}/unsubscribe
     */
    putMessageBoardThreadUnsubscribe: (messageBoardThreadId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}/unsubscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * @description Retrieves the message board thread.
     *
     * @tags MessageBoardThread
     * @name GetMessageBoardThread
     * @request GET:/v1.0/message-board-threads/{messageBoardThreadId}
     */
    getMessageBoardThread: (messageBoardThreadId: string, params: RequestParams = {}) =>
      this.request<any, MessageBoardThread>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the message board thread with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags MessageBoardThread
     * @name PutMessageBoardThread
     * @request PUT:/v1.0/message-board-threads/{messageBoardThreadId}
     */
    putMessageBoardThread: (messageBoardThreadId: string, data: MessageBoardThread, params: RequestParams = {}) =>
      this.request<any, MessageBoardThread>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the message board thread and returns a 204 if the operation succeeds.
     *
     * @tags MessageBoardThread
     * @name DeleteMessageBoardThread
     * @request DELETE:/v1.0/message-board-threads/{messageBoardThreadId}
     */
    deleteMessageBoardThread: (messageBoardThreadId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Updates only the fields received in the request body, leaving any other fields untouched.
     *
     * @tags MessageBoardThread
     * @name PatchMessageBoardThread
     * @request PATCH:/v1.0/message-board-threads/{messageBoardThreadId}
     */
    patchMessageBoardThread: (messageBoardThreadId: string, data: MessageBoardThread, params: RequestParams = {}) =>
      this.request<any, MessageBoardThread>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the message board section's threads. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags MessageBoardThread
     * @name GetMessageBoardSectionMessageBoardThreadsPage
     * @request GET:/v1.0/message-board-sections/{messageBoardSectionId}/message-board-threads
     */
    getMessageBoardSectionMessageBoardThreadsPage: (
      messageBoardSectionId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageMessageBoardThread>({
        path: `/v1.0/message-board-sections/${messageBoardSectionId}/message-board-threads`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new message board thread inside a section.
     *
     * @tags MessageBoardThread
     * @name PostMessageBoardSectionMessageBoardThread
     * @request POST:/v1.0/message-board-sections/{messageBoardSectionId}/message-board-threads
     */
    postMessageBoardSectionMessageBoardThread: (
      messageBoardSectionId: string,
      data: MessageBoardThread,
      params: RequestParams = {},
    ) =>
      this.request<any, MessageBoardThread>({
        path: `/v1.0/message-board-sections/${messageBoardSectionId}/message-board-threads`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardThread
     * @name GetSiteMessageBoardThreadByFriendlyUrlPath
     * @request GET:/v1.0/sites/{siteId}/message-board-threads/by-friendly-url-path/{friendlyUrlPath}
     */
    getSiteMessageBoardThreadByFriendlyUrlPath: (siteId: string, friendlyUrlPath: string, params: RequestParams = {}) =>
      this.request<any, MessageBoardThread>({
        path: `/v1.0/sites/${siteId}/message-board-threads/by-friendly-url-path/${friendlyUrlPath}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardThread
     * @name PutMessageBoardThreadBatch
     * @request PUT:/v1.0/message-board-threads/batch
     */
    putMessageBoardThreadBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/message-board-threads/batch`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardThread
     * @name DeleteMessageBoardThreadBatch
     * @request DELETE:/v1.0/message-board-threads/batch
     */
    deleteMessageBoardThreadBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/message-board-threads/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardThread
     * @name GetMessageBoardThreadPermissionsPage
     * @request GET:/v1.0/message-board-threads/{messageBoardThreadId}/permissions
     */
    getMessageBoardThreadPermissionsPage: (
      messageBoardThreadId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardThread
     * @name PutMessageBoardThreadPermissionsPage
     * @request PUT:/v1.0/message-board-threads/{messageBoardThreadId}/permissions
     */
    putMessageBoardThreadPermissionsPage: (
      messageBoardThreadId: string,
      data: Permission[],
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/message-board-threads/${messageBoardThreadId}/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardThread
     * @name PostSiteMessageBoardThreadBatch
     * @request POST:/v1.0/sites/{siteId}/message-board-threads/batch
     */
    postSiteMessageBoardThreadBatch: (
      siteId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/message-board-threads/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardThread
     * @name GetSiteMessageBoardThreadPermissionsPage
     * @request GET:/v1.0/sites/{siteId}/message-board-threads/permissions
     */
    getSiteMessageBoardThreadPermissionsPage: (
      siteId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/message-board-threads/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardThread
     * @name PutSiteMessageBoardThreadPermissionsPage
     * @request PUT:/v1.0/sites/{siteId}/message-board-threads/permissions
     */
    putSiteMessageBoardThreadPermissionsPage: (siteId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/message-board-threads/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MessageBoardThread
     * @name PostMessageBoardSectionMessageBoardThreadBatch
     * @request POST:/v1.0/message-board-sections/{messageBoardSectionId}/message-board-threads/batch
     */
    postMessageBoardSectionMessageBoardThreadBatch: (
      messageBoardSectionId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/message-board-sections/${messageBoardSectionId}/message-board-threads/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NavigationMenu
     * @name GetSiteNavigationMenusPage
     * @request GET:/v1.0/sites/{siteId}/navigation-menus
     */
    getSiteNavigationMenusPage: (
      siteId: string,
      query?: {
        page?: string;
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageNavigationMenu>({
        path: `/v1.0/sites/${siteId}/navigation-menus`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new navigation menu.
     *
     * @tags NavigationMenu
     * @name PostSiteNavigationMenu
     * @request POST:/v1.0/sites/{siteId}/navigation-menus
     */
    postSiteNavigationMenu: (siteId: string, data: NavigationMenu, params: RequestParams = {}) =>
      this.request<any, NavigationMenu>({
        path: `/v1.0/sites/${siteId}/navigation-menus`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NavigationMenu
     * @name GetNavigationMenu
     * @request GET:/v1.0/navigation-menus/{navigationMenuId}
     */
    getNavigationMenu: (navigationMenuId: string, params: RequestParams = {}) =>
      this.request<any, NavigationMenu>({
        path: `/v1.0/navigation-menus/${navigationMenuId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the navigation menu with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags NavigationMenu
     * @name PutNavigationMenu
     * @request PUT:/v1.0/navigation-menus/{navigationMenuId}
     */
    putNavigationMenu: (navigationMenuId: string, data: NavigationMenu, params: RequestParams = {}) =>
      this.request<any, NavigationMenu>({
        path: `/v1.0/navigation-menus/${navigationMenuId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the navigation menu and returns a 204 if the operation succeeds
     *
     * @tags NavigationMenu
     * @name DeleteNavigationMenu
     * @request DELETE:/v1.0/navigation-menus/{navigationMenuId}
     */
    deleteNavigationMenu: (navigationMenuId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/navigation-menus/${navigationMenuId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NavigationMenu
     * @name PutNavigationMenuBatch
     * @request PUT:/v1.0/navigation-menus/batch
     */
    putNavigationMenuBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/navigation-menus/batch`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NavigationMenu
     * @name DeleteNavigationMenuBatch
     * @request DELETE:/v1.0/navigation-menus/batch
     */
    deleteNavigationMenuBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/navigation-menus/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NavigationMenu
     * @name GetNavigationMenuPermissionsPage
     * @request GET:/v1.0/navigation-menus/{navigationMenuId}/permissions
     */
    getNavigationMenuPermissionsPage: (
      navigationMenuId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/navigation-menus/${navigationMenuId}/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NavigationMenu
     * @name PutNavigationMenuPermissionsPage
     * @request PUT:/v1.0/navigation-menus/{navigationMenuId}/permissions
     */
    putNavigationMenuPermissionsPage: (navigationMenuId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/navigation-menus/${navigationMenuId}/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NavigationMenu
     * @name PostSiteNavigationMenuBatch
     * @request POST:/v1.0/sites/{siteId}/navigation-menus/batch
     */
    postSiteNavigationMenuBatch: (
      siteId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/navigation-menus/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NavigationMenu
     * @name GetSiteNavigationMenuPermissionsPage
     * @request GET:/v1.0/sites/{siteId}/navigation-menus/permissions
     */
    getSiteNavigationMenuPermissionsPage: (
      siteId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/navigation-menus/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NavigationMenu
     * @name PutSiteNavigationMenuPermissionsPage
     * @request PUT:/v1.0/sites/{siteId}/navigation-menus/permissions
     */
    putSiteNavigationMenuPermissionsPage: (siteId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/navigation-menus/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @name GetOpenApi
     * @request GET:/v1.0/openapi.{type}
     */
    getOpenApi: (type: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/openapi.${type}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Retrieves a specific public page of a site for a given experience
     *
     * @tags SitePage
     * @name GetSiteSitePageExperienceExperienceKey
     * @request GET:/v1.0/sites/{siteId}/site-pages/{friendlyUrlPath}/experiences/{experienceKey}
     */
    getSiteSitePageExperienceExperienceKey: (
      siteId: string,
      friendlyUrlPath: string,
      experienceKey: string,
      params: RequestParams = {},
    ) =>
      this.request<any, SitePage>({
        path: `/v1.0/sites/${siteId}/site-pages/${friendlyUrlPath}/experiences/${experienceKey}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Retrieves the rendered content of a given public page.
     *
     * @tags SitePage
     * @name GetSiteSitePageRenderedPage
     * @request GET:/v1.0/sites/{siteId}/site-pages/{friendlyUrlPath}/rendered-page
     */
    getSiteSitePageRenderedPage: (siteId: string, friendlyUrlPath: string, params: RequestParams = {}) =>
      this.request<any, string>({
        path: `/v1.0/sites/${siteId}/site-pages/${friendlyUrlPath}/rendered-page`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Retrieves the experiences of a given Page
     *
     * @tags SitePage
     * @name GetSiteSitePagesExperiencesPage
     * @request GET:/v1.0/sites/{siteId}/site-pages/{friendlyUrlPath}/experiences
     */
    getSiteSitePagesExperiencesPage: (siteId: string, friendlyUrlPath: string, params: RequestParams = {}) =>
      this.request<any, PageSitePage>({
        path: `/v1.0/sites/${siteId}/site-pages/${friendlyUrlPath}/experiences`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Retrieves a specific public page of a site
     *
     * @tags SitePage
     * @name GetSiteSitePage
     * @request GET:/v1.0/sites/{siteId}/site-pages/{friendlyUrlPath}
     */
    getSiteSitePage: (siteId: string, friendlyUrlPath: string, params: RequestParams = {}) =>
      this.request<any, SitePage>({
        path: `/v1.0/sites/${siteId}/site-pages/${friendlyUrlPath}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Retrieves the public pages of the site
     *
     * @tags SitePage
     * @name GetSiteSitePagesPage
     * @request GET:/v1.0/sites/{siteId}/site-pages
     */
    getSiteSitePagesPage: (
      siteId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageSitePage>({
        path: `/v1.0/sites/${siteId}/site-pages`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Retrieves the rendered content of a given public page for a given experience.
     *
     * @tags SitePage
     * @name GetSiteSitePageExperienceExperienceKeyRenderedPage
     * @request GET:/v1.0/sites/{siteId}/site-pages/{friendlyUrlPath}/experiences/{experienceKey}/rendered-page
     */
    getSiteSitePageExperienceExperienceKeyRenderedPage: (
      siteId: string,
      friendlyUrlPath: string,
      experienceKey: string,
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/v1.0/sites/${siteId}/site-pages/${friendlyUrlPath}/experiences/${experienceKey}/rendered-page`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Retrieves the structured content folder.
     *
     * @tags StructuredContentFolder
     * @name GetStructuredContentFolder
     * @request GET:/v1.0/structured-content-folders/{structuredContentFolderId}
     */
    getStructuredContentFolder: (structuredContentFolderId: string, params: RequestParams = {}) =>
      this.request<any, StructuredContentFolder>({
        path: `/v1.0/structured-content-folders/${structuredContentFolderId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the structured content folder with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags StructuredContentFolder
     * @name PutStructuredContentFolder
     * @request PUT:/v1.0/structured-content-folders/{structuredContentFolderId}
     */
    putStructuredContentFolder: (
      structuredContentFolderId: string,
      data: StructuredContentFolder,
      params: RequestParams = {},
    ) =>
      this.request<any, StructuredContentFolder>({
        path: `/v1.0/structured-content-folders/${structuredContentFolderId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the structured content folder and returns a 204 if the operation succeeds.
     *
     * @tags StructuredContentFolder
     * @name DeleteStructuredContentFolder
     * @request DELETE:/v1.0/structured-content-folders/{structuredContentFolderId}
     */
    deleteStructuredContentFolder: (structuredContentFolderId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/structured-content-folders/${structuredContentFolderId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Updates only the fields received in the request body, leaving any other fields untouched.
     *
     * @tags StructuredContentFolder
     * @name PatchStructuredContentFolder
     * @request PATCH:/v1.0/structured-content-folders/{structuredContentFolderId}
     */
    patchStructuredContentFolder: (
      structuredContentFolderId: string,
      data: StructuredContentFolder,
      params: RequestParams = {},
    ) =>
      this.request<any, StructuredContentFolder>({
        path: `/v1.0/structured-content-folders/${structuredContentFolderId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the site's structured content folders. Results can be paginated, filtered, searched, flattened, and sorted.
     *
     * @tags StructuredContentFolder
     * @name GetSiteStructuredContentFoldersPage
     * @request GET:/v1.0/sites/{siteId}/structured-content-folders
     */
    getSiteStructuredContentFoldersPage: (
      siteId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageStructuredContentFolder>({
        path: `/v1.0/sites/${siteId}/structured-content-folders`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new structured content folder.
     *
     * @tags StructuredContentFolder
     * @name PostSiteStructuredContentFolder
     * @request POST:/v1.0/sites/{siteId}/structured-content-folders
     */
    postSiteStructuredContentFolder: (siteId: string, data: StructuredContentFolder, params: RequestParams = {}) =>
      this.request<any, StructuredContentFolder>({
        path: `/v1.0/sites/${siteId}/structured-content-folders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContentFolder
     * @name GetAssetLibraryStructuredContentFoldersPage
     * @request GET:/v1.0/asset-libraries/{assetLibraryId}/structured-content-folders
     */
    getAssetLibraryStructuredContentFoldersPage: (
      assetLibraryId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageStructuredContentFolder>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/structured-content-folders`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContentFolder
     * @name PostAssetLibraryStructuredContentFolder
     * @request POST:/v1.0/asset-libraries/{assetLibraryId}/structured-content-folders
     */
    postAssetLibraryStructuredContentFolder: (
      assetLibraryId: string,
      data: StructuredContentFolder,
      params: RequestParams = {},
    ) =>
      this.request<any, StructuredContentFolder>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/structured-content-folders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContentFolder
     * @name PutStructuredContentFolderSubscribe
     * @request PUT:/v1.0/structured-content-folders/{structuredContentFolderId}/subscribe
     */
    putStructuredContentFolderSubscribe: (structuredContentFolderId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/structured-content-folders/${structuredContentFolderId}/subscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContentFolder
     * @name PutStructuredContentFolderUnsubscribe
     * @request PUT:/v1.0/structured-content-folders/{structuredContentFolderId}/unsubscribe
     */
    putStructuredContentFolderUnsubscribe: (structuredContentFolderId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/structured-content-folders/${structuredContentFolderId}/unsubscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * @description Retrieves the parent structured content folder's subfolders. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags StructuredContentFolder
     * @name GetStructuredContentFolderStructuredContentFoldersPage
     * @request GET:/v1.0/structured-content-folders/{parentStructuredContentFolderId}/structured-content-folders
     */
    getStructuredContentFolderStructuredContentFoldersPage: (
      parentStructuredContentFolderId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageStructuredContentFolder>({
        path: `/v1.0/structured-content-folders/${parentStructuredContentFolderId}/structured-content-folders`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new structured content folder in an existing folder.
     *
     * @tags StructuredContentFolder
     * @name PostStructuredContentFolderStructuredContentFolder
     * @request POST:/v1.0/structured-content-folders/{parentStructuredContentFolderId}/structured-content-folders
     */
    postStructuredContentFolderStructuredContentFolder: (
      parentStructuredContentFolderId: string,
      data: StructuredContentFolder,
      params: RequestParams = {},
    ) =>
      this.request<any, StructuredContentFolder>({
        path: `/v1.0/structured-content-folders/${parentStructuredContentFolderId}/structured-content-folders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContentFolder
     * @name PostSiteStructuredContentFolderBatch
     * @request POST:/v1.0/sites/{siteId}/structured-content-folders/batch
     */
    postSiteStructuredContentFolderBatch: (
      siteId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/structured-content-folders/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContentFolder
     * @name PutStructuredContentFolderBatch
     * @request PUT:/v1.0/structured-content-folders/batch
     */
    putStructuredContentFolderBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/structured-content-folders/batch`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContentFolder
     * @name DeleteStructuredContentFolderBatch
     * @request DELETE:/v1.0/structured-content-folders/batch
     */
    deleteStructuredContentFolderBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/structured-content-folders/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContentFolder
     * @name PostAssetLibraryStructuredContentFolderBatch
     * @request POST:/v1.0/asset-libraries/{assetLibraryId}/structured-content-folders/batch
     */
    postAssetLibraryStructuredContentFolderBatch: (
      assetLibraryId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/structured-content-folders/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContentFolder
     * @name GetAssetLibraryStructuredContentFolderPermissionsPage
     * @request GET:/v1.0/asset-libraries/{assetLibraryId}/structured-content-folders/permissions
     */
    getAssetLibraryStructuredContentFolderPermissionsPage: (
      assetLibraryId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/structured-content-folders/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContentFolder
     * @name PutAssetLibraryStructuredContentFolderPermissionsPage
     * @request PUT:/v1.0/asset-libraries/{assetLibraryId}/structured-content-folders/permissions
     */
    putAssetLibraryStructuredContentFolderPermissionsPage: (
      assetLibraryId: string,
      data: Permission[],
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/structured-content-folders/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContentFolder
     * @name GetSiteStructuredContentFolderPermissionsPage
     * @request GET:/v1.0/sites/{siteId}/structured-content-folders/permissions
     */
    getSiteStructuredContentFolderPermissionsPage: (
      siteId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/structured-content-folders/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContentFolder
     * @name PutSiteStructuredContentFolderPermissionsPage
     * @request PUT:/v1.0/sites/{siteId}/structured-content-folders/permissions
     */
    putSiteStructuredContentFolderPermissionsPage: (siteId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/structured-content-folders/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContentFolder
     * @name GetStructuredContentFolderPermissionsPage
     * @request GET:/v1.0/structured-content-folder/{structuredContentFolderId}/permissions
     */
    getStructuredContentFolderPermissionsPage: (
      structuredContentFolderId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/structured-content-folder/${structuredContentFolderId}/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContentFolder
     * @name PutStructuredContentFolderPermissionsPage
     * @request PUT:/v1.0/structured-content-folder/{structuredContentFolderId}/permissions
     */
    putStructuredContentFolderPermissionsPage: (
      structuredContentFolderId: string,
      data: Permission[],
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/structured-content-folder/${structuredContentFolderId}/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * @description Retrieves the site's structured content. Results can be paginated, filtered, searched, flattened, and sorted.
     *
     * @tags StructuredContent
     * @name GetSiteStructuredContentsPage
     * @request GET:/v1.0/sites/{siteId}/structured-contents
     */
    getSiteStructuredContentsPage: (
      siteId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageStructuredContent>({
        path: `/v1.0/sites/${siteId}/structured-contents`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new structured content.
     *
     * @tags StructuredContent
     * @name PostSiteStructuredContent
     * @request POST:/v1.0/sites/{siteId}/structured-contents
     */
    postSiteStructuredContent: (siteId: string, data: StructuredContent, params: RequestParams = {}) =>
      this.request<any, StructuredContent>({
        path: `/v1.0/sites/${siteId}/structured-contents`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContent
     * @name GetAssetLibraryStructuredContentsPage
     * @request GET:/v1.0/asset-libraries/{assetLibraryId}/structured-contents
     */
    getAssetLibraryStructuredContentsPage: (
      assetLibraryId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageStructuredContent>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/structured-contents`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContent
     * @name PostAssetLibraryStructuredContent
     * @request POST:/v1.0/asset-libraries/{assetLibraryId}/structured-contents
     */
    postAssetLibraryStructuredContent: (assetLibraryId: string, data: StructuredContent, params: RequestParams = {}) =>
      this.request<any, StructuredContent>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/structured-contents`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the structured content's rating.
     *
     * @tags StructuredContent
     * @name GetStructuredContentMyRating
     * @request GET:/v1.0/structured-contents/{structuredContentId}/my-rating
     */
    getStructuredContentMyRating: (structuredContentId: string, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/structured-contents/${structuredContentId}/my-rating`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the rating with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags StructuredContent
     * @name PutStructuredContentMyRating
     * @request PUT:/v1.0/structured-contents/{structuredContentId}/my-rating
     */
    putStructuredContentMyRating: (structuredContentId: string, data: Rating, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/structured-contents/${structuredContentId}/my-rating`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Create a rating for the structured content.
     *
     * @tags StructuredContent
     * @name PostStructuredContentMyRating
     * @request POST:/v1.0/structured-contents/{structuredContentId}/my-rating
     */
    postStructuredContentMyRating: (structuredContentId: string, data: Rating, params: RequestParams = {}) =>
      this.request<any, Rating>({
        path: `/v1.0/structured-contents/${structuredContentId}/my-rating`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the structured content's rating and returns a 204 if the operation succeeds.
     *
     * @tags StructuredContent
     * @name DeleteStructuredContentMyRating
     * @request DELETE:/v1.0/structured-contents/{structuredContentId}/my-rating
     */
    deleteStructuredContentMyRating: (structuredContentId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/structured-contents/${structuredContentId}/my-rating`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves a structured content by its key (`articleKey`).
     *
     * @tags StructuredContent
     * @name GetSiteStructuredContentByKey
     * @request GET:/v1.0/sites/{siteId}/structured-contents/by-key/{key}
     */
    getSiteStructuredContentByKey: (siteId: string, key: string, params: RequestParams = {}) =>
      this.request<any, StructuredContent>({
        path: `/v1.0/sites/${siteId}/structured-contents/by-key/${key}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Retrieves a structured content by its UUID.
     *
     * @tags StructuredContent
     * @name GetSiteStructuredContentByUuid
     * @request GET:/v1.0/sites/{siteId}/structured-contents/by-uuid/{uuid}
     */
    getSiteStructuredContentByUuid: (siteId: string, uuid: string, params: RequestParams = {}) =>
      this.request<any, StructuredContent>({
        path: `/v1.0/sites/${siteId}/structured-contents/by-uuid/${uuid}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContent
     * @name PutStructuredContentSubscribe
     * @request PUT:/v1.0/structured-contents/{structuredContentId}/subscribe
     */
    putStructuredContentSubscribe: (structuredContentId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/structured-contents/${structuredContentId}/subscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContent
     * @name PutStructuredContentUnsubscribe
     * @request PUT:/v1.0/structured-contents/{structuredContentId}/unsubscribe
     */
    putStructuredContentUnsubscribe: (structuredContentId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/structured-contents/${structuredContentId}/unsubscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * @description Retrieves the structured content via its ID.
     *
     * @tags StructuredContent
     * @name GetStructuredContent
     * @request GET:/v1.0/structured-contents/{structuredContentId}
     */
    getStructuredContent: (structuredContentId: string, params: RequestParams = {}) =>
      this.request<any, StructuredContent>({
        path: `/v1.0/structured-contents/${structuredContentId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the structured content with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags StructuredContent
     * @name PutStructuredContent
     * @request PUT:/v1.0/structured-contents/{structuredContentId}
     */
    putStructuredContent: (structuredContentId: string, data: StructuredContent, params: RequestParams = {}) =>
      this.request<any, StructuredContent>({
        path: `/v1.0/structured-contents/${structuredContentId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the structured content and returns a 204 if the operation succeeds.
     *
     * @tags StructuredContent
     * @name DeleteStructuredContent
     * @request DELETE:/v1.0/structured-contents/{structuredContentId}
     */
    deleteStructuredContent: (structuredContentId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/structured-contents/${structuredContentId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Updates only the fields received in the request body, leaving any other fields untouched.
     *
     * @tags StructuredContent
     * @name PatchStructuredContent
     * @request PATCH:/v1.0/structured-contents/{structuredContentId}
     */
    patchStructuredContent: (structuredContentId: string, data: StructuredContent, params: RequestParams = {}) =>
      this.request<any, StructuredContent>({
        path: `/v1.0/structured-contents/${structuredContentId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the site's structured content by external reference code.
     *
     * @tags StructuredContent
     * @name GetSiteStructuredContentByExternalReferenceCode
     * @request GET:/v1.0/sites/{siteId}/structured-contents/by-external-reference-code/{externalReferenceCode}
     */
    getSiteStructuredContentByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, StructuredContent>({
        path: `/v1.0/sites/${siteId}/structured-contents/by-external-reference-code/${externalReferenceCode}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Updates the site's structured content with the given external reference code, or creates it if it not exists.
     *
     * @tags StructuredContent
     * @name PutSiteStructuredContentByExternalReferenceCode
     * @request PUT:/v1.0/sites/{siteId}/structured-contents/by-external-reference-code/{externalReferenceCode}
     */
    putSiteStructuredContentByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      data: StructuredContent,
      params: RequestParams = {},
    ) =>
      this.request<any, StructuredContent>({
        path: `/v1.0/sites/${siteId}/structured-contents/by-external-reference-code/${externalReferenceCode}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the site's structured content by external reference code.
     *
     * @tags StructuredContent
     * @name DeleteSiteStructuredContentByExternalReferenceCode
     * @request DELETE:/v1.0/sites/{siteId}/structured-contents/by-external-reference-code/{externalReferenceCode}
     */
    deleteSiteStructuredContentByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/structured-contents/by-external-reference-code/${externalReferenceCode}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves a list of the content structure's structured content. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags StructuredContent
     * @name GetContentStructureStructuredContentsPage
     * @request GET:/v1.0/content-structures/{contentStructureId}/structured-contents
     */
    getContentStructureStructuredContentsPage: (
      contentStructureId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageStructuredContent>({
        path: `/v1.0/content-structures/${contentStructureId}/structured-contents`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Retrieves the folder's structured content. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags StructuredContent
     * @name GetStructuredContentFolderStructuredContentsPage
     * @request GET:/v1.0/structured-content-folders/{structuredContentFolderId}/structured-contents
     */
    getStructuredContentFolderStructuredContentsPage: (
      structuredContentFolderId: string,
      query?: {
        flatten?: string;
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageStructuredContent>({
        path: `/v1.0/structured-content-folders/${structuredContentFolderId}/structured-contents`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new structured content in the folder.
     *
     * @tags StructuredContent
     * @name PostStructuredContentFolderStructuredContent
     * @request POST:/v1.0/structured-content-folders/{structuredContentFolderId}/structured-contents
     */
    postStructuredContentFolderStructuredContent: (
      structuredContentFolderId: string,
      data: StructuredContent,
      params: RequestParams = {},
    ) =>
      this.request<any, StructuredContent>({
        path: `/v1.0/structured-content-folders/${structuredContentFolderId}/structured-contents`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the structured content's rendered template (the result of applying the structure's values to a template).
     *
     * @tags StructuredContent
     * @name GetStructuredContentRenderedContentContentTemplate
     * @request GET:/v1.0/structured-contents/{structuredContentId}/rendered-content/{contentTemplateId}
     */
    getStructuredContentRenderedContentContentTemplate: (
      structuredContentId: string,
      contentTemplateId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/v1.0/structured-contents/${structuredContentId}/rendered-content/${contentTemplateId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Retrieves the structured content's rendered display page
     *
     * @tags StructuredContent
     * @name GetStructuredContentRenderedContentByDisplayPageDisplayPageKey
     * @request GET:/v1.0/structured-contents/{structuredContentId}/rendered-content-by-display-page/{displayPageKey}
     */
    getStructuredContentRenderedContentByDisplayPageDisplayPageKey: (
      structuredContentId: string,
      displayPageKey: string,
      params: RequestParams = {},
    ) =>
      this.request<any, string>({
        path: `/v1.0/structured-contents/${structuredContentId}/rendered-content-by-display-page/${displayPageKey}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContent
     * @name PostAssetLibraryStructuredContentBatch
     * @request POST:/v1.0/asset-libraries/{assetLibraryId}/structured-contents/batch
     */
    postAssetLibraryStructuredContentBatch: (
      assetLibraryId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/structured-contents/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContent
     * @name PostSiteStructuredContentBatch
     * @request POST:/v1.0/sites/{siteId}/structured-contents/batch
     */
    postSiteStructuredContentBatch: (
      siteId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/structured-contents/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContent
     * @name GetSiteStructuredContentPermissionsPage
     * @request GET:/v1.0/sites/{siteId}/structured-contents/permissions
     */
    getSiteStructuredContentPermissionsPage: (
      siteId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/structured-contents/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContent
     * @name PutSiteStructuredContentPermissionsPage
     * @request PUT:/v1.0/sites/{siteId}/structured-contents/permissions
     */
    putSiteStructuredContentPermissionsPage: (siteId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/structured-contents/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContent
     * @name PutStructuredContentBatch
     * @request PUT:/v1.0/structured-contents/batch
     */
    putStructuredContentBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/structured-contents/batch`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContent
     * @name DeleteStructuredContentBatch
     * @request DELETE:/v1.0/structured-contents/batch
     */
    deleteStructuredContentBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/structured-contents/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContent
     * @name GetStructuredContentPermissionsPage
     * @request GET:/v1.0/structured-contents/{structuredContentId}/permissions
     */
    getStructuredContentPermissionsPage: (
      structuredContentId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/structured-contents/${structuredContentId}/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContent
     * @name PutStructuredContentPermissionsPage
     * @request PUT:/v1.0/structured-contents/{structuredContentId}/permissions
     */
    putStructuredContentPermissionsPage: (
      structuredContentId: string,
      data: Permission[],
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/structured-contents/${structuredContentId}/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContent
     * @name GetAssetLibraryStructuredContentPermissionsPage
     * @request GET:/v1.0/asset-libraries/{assetLibraryId}/structured-contents/permissions
     */
    getAssetLibraryStructuredContentPermissionsPage: (
      assetLibraryId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/structured-contents/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContent
     * @name PutAssetLibraryStructuredContentPermissionsPage
     * @request PUT:/v1.0/asset-libraries/{assetLibraryId}/structured-contents/permissions
     */
    putAssetLibraryStructuredContentPermissionsPage: (
      assetLibraryId: string,
      data: Permission[],
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/asset-libraries/${assetLibraryId}/structured-contents/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags StructuredContent
     * @name PostStructuredContentFolderStructuredContentBatch
     * @request POST:/v1.0/structured-content-folders/{structuredContentFolderId}/structured-contents/batch
     */
    postStructuredContentFolderStructuredContentBatch: (
      structuredContentFolderId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/structured-content-folders/${structuredContentFolderId}/structured-contents/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the site's wiki node by external reference code.
     *
     * @tags WikiNode
     * @name GetSiteWikiNodeByExternalReferenceCode
     * @request GET:/v1.0/sites/{siteId}/wiki-nodes/by-external-reference-code/{externalReferenceCode}
     */
    getSiteWikiNodeByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, WikiNode>({
        path: `/v1.0/sites/${siteId}/wiki-nodes/by-external-reference-code/${externalReferenceCode}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Updates the site's wiki node with the given external reference code, or creates it if it not exists.
     *
     * @tags WikiNode
     * @name PutSiteWikiNodeByExternalReferenceCode
     * @request PUT:/v1.0/sites/{siteId}/wiki-nodes/by-external-reference-code/{externalReferenceCode}
     */
    putSiteWikiNodeByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      data: WikiNode,
      params: RequestParams = {},
    ) =>
      this.request<any, WikiNode>({
        path: `/v1.0/sites/${siteId}/wiki-nodes/by-external-reference-code/${externalReferenceCode}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the site's wiki node by external reference code.
     *
     * @tags WikiNode
     * @name DeleteSiteWikiNodeByExternalReferenceCode
     * @request DELETE:/v1.0/sites/{siteId}/wiki-nodes/by-external-reference-code/{externalReferenceCode}
     */
    deleteSiteWikiNodeByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/wiki-nodes/by-external-reference-code/${externalReferenceCode}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves the wiki node
     *
     * @tags WikiNode
     * @name GetWikiNode
     * @request GET:/v1.0/wiki-nodes/{wikiNodeId}
     */
    getWikiNode: (wikiNodeId: string, params: RequestParams = {}) =>
      this.request<any, WikiNode>({
        path: `/v1.0/wiki-nodes/${wikiNodeId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the wiki node with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags WikiNode
     * @name PutWikiNode
     * @request PUT:/v1.0/wiki-nodes/{wikiNodeId}
     */
    putWikiNode: (wikiNodeId: string, data: WikiNode, params: RequestParams = {}) =>
      this.request<any, WikiNode>({
        path: `/v1.0/wiki-nodes/${wikiNodeId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the wiki node and returns a 204 if the operation succeeds.
     *
     * @tags WikiNode
     * @name DeleteWikiNode
     * @request DELETE:/v1.0/wiki-nodes/{wikiNodeId}
     */
    deleteWikiNode: (wikiNodeId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/wiki-nodes/${wikiNodeId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves the wiki node's of a site. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags WikiNode
     * @name GetSiteWikiNodesPage
     * @request GET:/v1.0/sites/{siteId}/wiki-nodes
     */
    getSiteWikiNodesPage: (
      siteId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageWikiNode>({
        path: `/v1.0/sites/${siteId}/wiki-nodes`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new wiki node
     *
     * @tags WikiNode
     * @name PostSiteWikiNode
     * @request POST:/v1.0/sites/{siteId}/wiki-nodes
     */
    postSiteWikiNode: (siteId: string, data: WikiNode, params: RequestParams = {}) =>
      this.request<any, WikiNode>({
        path: `/v1.0/sites/${siteId}/wiki-nodes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiNode
     * @name PutWikiNodeSubscribe
     * @request PUT:/v1.0/wiki-nodes/{wikiNodeId}/subscribe
     */
    putWikiNodeSubscribe: (wikiNodeId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/wiki-nodes/${wikiNodeId}/subscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiNode
     * @name PutWikiNodeUnsubscribe
     * @request PUT:/v1.0/wiki-nodes/{wikiNodeId}/unsubscribe
     */
    putWikiNodeUnsubscribe: (wikiNodeId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/wiki-nodes/${wikiNodeId}/unsubscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiNode
     * @name GetSiteWikiNodePermissionsPage
     * @request GET:/v1.0/sites/{siteId}/wiki-nodes/permissions
     */
    getSiteWikiNodePermissionsPage: (
      siteId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/wiki-nodes/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiNode
     * @name PutSiteWikiNodePermissionsPage
     * @request PUT:/v1.0/sites/{siteId}/wiki-nodes/permissions
     */
    putSiteWikiNodePermissionsPage: (siteId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/sites/${siteId}/wiki-nodes/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiNode
     * @name GetWikiNodePermissionsPage
     * @request GET:/v1.0/wiki-nodes/{wikiNodeId}/permissions
     */
    getWikiNodePermissionsPage: (
      wikiNodeId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/wiki-nodes/${wikiNodeId}/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiNode
     * @name PutWikiNodePermissionsPage
     * @request PUT:/v1.0/wiki-nodes/{wikiNodeId}/permissions
     */
    putWikiNodePermissionsPage: (wikiNodeId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/wiki-nodes/${wikiNodeId}/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiNode
     * @name PostSiteWikiNodeBatch
     * @request POST:/v1.0/sites/{siteId}/wiki-nodes/batch
     */
    postSiteWikiNodeBatch: (
      siteId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/wiki-nodes/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiNode
     * @name PutWikiNodeBatch
     * @request PUT:/v1.0/wiki-nodes/batch
     */
    putWikiNodeBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/wiki-nodes/batch`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiNode
     * @name DeleteWikiNodeBatch
     * @request DELETE:/v1.0/wiki-nodes/batch
     */
    deleteWikiNodeBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/wiki-nodes/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the wiki page's attachments.
     *
     * @tags WikiPageAttachment
     * @name GetWikiPageWikiPageAttachmentsPage
     * @request GET:/v1.0/wiki-pages/{wikiPageId}/wiki-page-attachments
     */
    getWikiPageWikiPageAttachmentsPage: (wikiPageId: string, params: RequestParams = {}) =>
      this.request<any, PageWikiPageAttachment>({
        path: `/v1.0/wiki-pages/${wikiPageId}/wiki-page-attachments`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Creates an attachment for the wiki page. The request body must be `multipart/form-data` with two parts, the file's bytes (`file`), and an optional JSON string (`WikiPageAttachment`) with the metadata.
     *
     * @tags WikiPageAttachment
     * @name PostWikiPageWikiPageAttachment
     * @request POST:/v1.0/wiki-pages/{wikiPageId}/wiki-page-attachments
     */
    postWikiPageWikiPageAttachment: (wikiPageId: string, data: MultipartBody, params: RequestParams = {}) =>
      this.request<any, WikiPageAttachment>({
        path: `/v1.0/wiki-pages/${wikiPageId}/wiki-page-attachments`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Retrieves the wiki page attachment.
     *
     * @tags WikiPageAttachment
     * @name GetWikiPageAttachment
     * @request GET:/v1.0/wiki-page-attachments/{wikiPageAttachmentId}
     */
    getWikiPageAttachment: (wikiPageAttachmentId: string, params: RequestParams = {}) =>
      this.request<any, WikiPageAttachment>({
        path: `/v1.0/wiki-page-attachments/${wikiPageAttachmentId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Deletes the wiki page attachment and returns a 204 if the operation succeeds.
     *
     * @tags WikiPageAttachment
     * @name DeleteWikiPageAttachment
     * @request DELETE:/v1.0/wiki-page-attachments/{wikiPageAttachmentId}
     */
    deleteWikiPageAttachment: (wikiPageAttachmentId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/wiki-page-attachments/${wikiPageAttachmentId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiPageAttachment
     * @name DeleteWikiPageAttachmentBatch
     * @request DELETE:/v1.0/wiki-page-attachments/batch
     */
    deleteWikiPageAttachmentBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/wiki-page-attachments/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiPageAttachment
     * @name PostWikiPageWikiPageAttachmentBatch
     * @request POST:/v1.0/wiki-pages/{wikiPageId}/wiki-page-attachments/batch
     */
    postWikiPageWikiPageAttachmentBatch: (
      wikiPageId: string,
      data: MultipartBody,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/wiki-pages/${wikiPageId}/wiki-page-attachments/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the wiki page by external reference code
     *
     * @tags WikiPage
     * @name GetSiteWikiPageByExternalReferenceCode
     * @request GET:/v1.0/sites/{siteId}/wiki-pages/by-external-reference-code/{externalReferenceCode}
     */
    getSiteWikiPageByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, WikiPage>({
        path: `/v1.0/sites/${siteId}/wiki-pages/by-external-reference-code/${externalReferenceCode}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Updates the wiki page with the given external reference code, or creates it if it not exists.
     *
     * @tags WikiPage
     * @name PutSiteWikiPageByExternalReferenceCode
     * @request PUT:/v1.0/sites/{siteId}/wiki-pages/by-external-reference-code/{externalReferenceCode}
     */
    putSiteWikiPageByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      data: WikiPage,
      params: RequestParams = {},
    ) =>
      this.request<any, WikiPage>({
        path: `/v1.0/sites/${siteId}/wiki-pages/by-external-reference-code/${externalReferenceCode}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the wiki page by external reference code.
     *
     * @tags WikiPage
     * @name DeleteSiteWikiPageByExternalReferenceCode
     * @request DELETE:/v1.0/sites/{siteId}/wiki-pages/by-external-reference-code/{externalReferenceCode}
     */
    deleteSiteWikiPageByExternalReferenceCode: (
      siteId: string,
      externalReferenceCode: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/sites/${siteId}/wiki-pages/by-external-reference-code/${externalReferenceCode}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves the wiki page
     *
     * @tags WikiPage
     * @name GetWikiPage
     * @request GET:/v1.0/wiki-pages/{wikiPageId}
     */
    getWikiPage: (wikiPageId: string, params: RequestParams = {}) =>
      this.request<any, WikiPage>({
        path: `/v1.0/wiki-pages/${wikiPageId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Replaces the wiki page with the information sent in the request body. Any missing fields are deleted, unless they are required.
     *
     * @tags WikiPage
     * @name PutWikiPage
     * @request PUT:/v1.0/wiki-pages/{wikiPageId}
     */
    putWikiPage: (wikiPageId: string, data: WikiPage, params: RequestParams = {}) =>
      this.request<any, WikiPage>({
        path: `/v1.0/wiki-pages/${wikiPageId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the wiki page and returns a 204 if the operation succeeds.
     *
     * @tags WikiPage
     * @name DeleteWikiPage
     * @request DELETE:/v1.0/wiki-pages/{wikiPageId}
     */
    deleteWikiPage: (wikiPageId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/wiki-pages/${wikiPageId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves the wiki page's of a node. Results can be paginated, filtered, searched, and sorted.
     *
     * @tags WikiPage
     * @name GetWikiNodeWikiPagesPage
     * @request GET:/v1.0/wiki-nodes/{wikiNodeId}/wiki-pages
     */
    getWikiNodeWikiPagesPage: (
      wikiNodeId: string,
      query?: {
        search?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PageWikiPage>({
        path: `/v1.0/wiki-nodes/${wikiNodeId}/wiki-pages`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new wiki page
     *
     * @tags WikiPage
     * @name PostWikiNodeWikiPage
     * @request POST:/v1.0/wiki-nodes/{wikiNodeId}/wiki-pages
     */
    postWikiNodeWikiPage: (wikiNodeId: string, data: WikiPage, params: RequestParams = {}) =>
      this.request<any, WikiPage>({
        path: `/v1.0/wiki-nodes/${wikiNodeId}/wiki-pages`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves the child wiki page's of a wiki page.
     *
     * @tags WikiPage
     * @name GetWikiPageWikiPagesPage
     * @request GET:/v1.0/wiki-pages/{parentWikiPageId}/wiki-pages
     */
    getWikiPageWikiPagesPage: (parentWikiPageId: string, params: RequestParams = {}) =>
      this.request<any, PageWikiPage>({
        path: `/v1.0/wiki-pages/${parentWikiPageId}/wiki-pages`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Creates a child wiki page of the parent wiki page.
     *
     * @tags WikiPage
     * @name PostWikiPageWikiPage
     * @request POST:/v1.0/wiki-pages/{parentWikiPageId}/wiki-pages
     */
    postWikiPageWikiPage: (parentWikiPageId: string, data: WikiPage, params: RequestParams = {}) =>
      this.request<any, WikiPage>({
        path: `/v1.0/wiki-pages/${parentWikiPageId}/wiki-pages`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiPage
     * @name PutWikiPageSubscribe
     * @request PUT:/v1.0/wiki-pages/{wikiPageId}/subscribe
     */
    putWikiPageSubscribe: (wikiPageId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/wiki-pages/${wikiPageId}/subscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiPage
     * @name PutWikiPageUnsubscribe
     * @request PUT:/v1.0/wiki-pages/{wikiPageId}/unsubscribe
     */
    putWikiPageUnsubscribe: (wikiPageId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/v1.0/wiki-pages/${wikiPageId}/unsubscribe`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiPage
     * @name PostWikiNodeWikiPageBatch
     * @request POST:/v1.0/wiki-nodes/{wikiNodeId}/wiki-pages/batch
     */
    postWikiNodeWikiPageBatch: (
      wikiNodeId: string,
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/wiki-nodes/${wikiNodeId}/wiki-pages/batch`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiPage
     * @name GetWikiPagePermissionsPage
     * @request GET:/v1.0/wiki-pages/{wikiPageId}/permissions
     */
    getWikiPagePermissionsPage: (
      wikiPageId: string,
      query?: {
        roleNames?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, PagePermission>({
        path: `/v1.0/wiki-pages/${wikiPageId}/permissions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiPage
     * @name PutWikiPagePermissionsPage
     * @request PUT:/v1.0/wiki-pages/{wikiPageId}/permissions
     */
    putWikiPagePermissionsPage: (wikiPageId: string, data: Permission[], params: RequestParams = {}) =>
      this.request<any, PagePermission>({
        path: `/v1.0/wiki-pages/${wikiPageId}/permissions`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiPage
     * @name PutWikiPageBatch
     * @request PUT:/v1.0/wiki-pages/batch
     */
    putWikiPageBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/wiki-pages/batch`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WikiPage
     * @name DeleteWikiPageBatch
     * @request DELETE:/v1.0/wiki-pages/batch
     */
    deleteWikiPageBatch: (
      data: object,
      query?: {
        callbackURL?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/v1.0/wiki-pages/batch`,
        method: "DELETE",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
}
