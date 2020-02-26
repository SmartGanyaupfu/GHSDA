export interface WpPost {
  id: number;
  date: string;
  
  title: Title;
  content: Content;
  excerpt: Excerpt;
  
  featured_media: number;
  
}

export interface media {

}

export interface Guid {
  rendered: string;
}

export interface Title {
  rendered: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Links {
  self: Self[];
  collection: Collection[];
  about: About[];
  author: Author[];
 
  "wp:featuredmedia": Featuredmedum[];
  
}

export interface Self {
  href: string;
}

export interface Collection {
  href: string;
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

//export interface Reply {
//  embeddable: boolean;
//  href: string;
//}

//export interface VersionHistory {
//  count: number;
//  href: string;
//}

//export interface PredecessorVersion {
//  id: number;
//  href: string;
//}

export interface Featuredmedum {
  embeddable: boolean;
  href: string;
}

//export interface WpAttachment {
//  href: string;
//}

//export interface WpTerm {
//  taxonomy: string;
//  embeddable: boolean;
//  href: string;
//}

//export interface Cury {
//  name: string;
//  href: string;
//  templated: boolean;
//}

export interface FeatureImage {
  id?: number;
 
  description?: Description;
  caption?: Caption;
  
  source_url: string;
  
}

export interface Guid {
  rendered: string;
}

export interface Title {
  rendered: string;
}

export interface Description {
  rendered: string;
}

export interface Caption {
  rendered: string;
}

export interface MediaDetails {
  width: number;
  height: number;
  file: string;
  sizes: Sizes;
  image_meta: ImageMeta;
}

export interface Sizes {
  thumbnail: Thumbnail;
  medium: Medium;
  medium_large: MediumLarge;
  large: Large;
  "amp-wp-small": AmpWpSmall;
  "amp-wp-large": AmpWpLarge;
  "amp-wp-normal": AmpWpNormal;
  "post-thumbnail": PostThumbnail;
  "schedule-thumb": ScheduleThumb;
  "schedule-thumb-small": ScheduleThumbSmall;
  "schedule-thumb-widget": ScheduleThumbWidget;
  gridthumb: Gridthumb;
  widget_thumb: WidgetThumb;
  full: Full;
}

export interface Thumbnail {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface Medium {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface MediumLarge {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface Large {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface AmpWpSmall {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface AmpWpLarge {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface AmpWpNormal {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface PostThumbnail {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface ScheduleThumb {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface ScheduleThumbSmall {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface ScheduleThumbWidget {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface Gridthumb {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface WidgetThumb {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface Full {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface ImageMeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Links {
  self: Self[];
  collection: Collection[];
  about: About[];
  author: Author[];
}

export interface Self {
  href: string;
}

export interface Collection {
  href: string;
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}
