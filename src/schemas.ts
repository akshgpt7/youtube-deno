// Schemas for various function parameters.

export interface param {
  [parameter: string]: any;
}

// ----------Parameter schemas for different methods----------

export interface schema_activities_list extends param {
  part: string;
  channelId?: string;
  mine?: boolean;
  maxResults?: number;
  pageToken?: string;
  publishedAfter?: string;
  publishedBefore?: string;
  regionCode?: string;
}

export interface schema_activities_insert extends param {
  part: string;
}

export interface schema_captions_list extends param {
  part: string;
  videoId: string;
  id?: string;
  onBehalfOfContentOwner?: string;
  onBehalfOf?: string;
}

export interface schema_captions_insert extends param {
  part: string;
  onBehalfOf?: string;
  onBehalfOfContentOwner?: string;
  sync?: boolean;
}

export interface schema_captions_update extends param {
  part: string;
  onBehalfOf?: string;
  onBehalfOfContentOwner?: string;
  sync?: boolean;
}

export interface schema_captions_download extends param {
  id: string;
  onBehalfOf?: string;
  onBehalfOfContentOwner?: string;
  tfmt?: "sbv" | "scc" | "srt" | "ttml" | "vtt";
  tlang?: string;
}

export interface schema_captions_delete extends param {
  id: string;
  onBehalfOf?: string;
  onBehalfOfContentOwner?: string;
}

export interface schema_channelBanners_insert extends param {
  channelId?: string;
  onBehalfOfContentOwner?: string;
}

export interface schema_channels_list extends param {
  part: string;
  categoryId?: string;
  forUsername?: string;
  hl?: string;
  id?: string;
  managedByMe?: boolean;
  maxResults?: number;
  mine?: boolean;
  mySubscribers?: boolean;
  onBehalfOfContentOwner?: string;
  pageToken?: string;
}

export interface schema_channels_update extends param {
  part: string;
  onBehalfOfContentOwner?: string;
}

export interface schema_channelSections_list extends param {
  part: string;
  channelId?: string;
  hl?: string;
  id?: string;
  mine?: boolean;
  onBehalfOfContentOwner?: string;
}

export interface schema_channelSections_insert extends param {
  part: string;
  onBehalfOfContentOwner?: string;
  onBehalfOfContentOwnerChannel?: string;
}

export interface schema_channelSections_update extends param {
  part: string;
  onBehalfOfContentOwner?: string;
}

export interface schema_channelSections_delete extends param {
  id: string;
  onBehalfOfContentOwner?: string;
}

export interface schema_comments_list extends param {
  part: string;
  id?: string;
  maxResults?: number;
  pageToken?: string;
  parentId?: string;
  textFormat?: "html" | "plainText";
}

export interface schema_comments_insert extends param {
  part: string;
}

export interface schema_comments_update extends param {
  part: string;
}

export interface schema_comments_markAsSpam extends param {
  id: string;
}

export interface schema_comments_setModerationStatus extends param {
  id: string;
  moderationStatus: "heldForReview" | "published" | "rejected";
  banAuthor?: boolean;
}

export interface schema_comments_markAsSpam extends param {
  id: string;
}

export interface schema_comments_delete extends param {
  id: string;
}

export interface schema_commentThreads_list extends param {
  part: string;
  allThreadsRelatedToChannelId?: string;
  channelId?: string;
  id?: string;
  maxResults?: number;
  moderationStatus?: "heldForReview" | "likelySpam" | "published";
  order?: "relevance" | "time";
  pageToken?: string;
  searchTerms?: string;
  textFormat?: "html" | "plainText";
  videoId?: string;
}

export interface schema_commentThreads_insert extends param {
  part: string;
}

export interface schema_commentThreads_update extends param {
  part: string;
}

export interface schema_guideCategories_list extends param {
  part: string;
  hl?: string;
  id?: string;
  regionCode?: string;
}

export interface schema_i18nLanguages_list extends param {
  part: string;
  hl?: string;
}

export interface schema_i18nRegions_list extends param {
  part: string;
  hl?: string;
}

export interface schema_playlistItems_list extends param {
  part: string;
  id?: string;
  maxResults?: number;
  onBehalfOfContentOwner?: string;
  pageToken?: string;
  playlistId?: string;
  videoId?: string;
}

export interface schema_playlistItems_insert extends param {
  part: string;
  onBehalfOfContentOwner?: string;
}

export interface schema_playlistItems_update extends param {
  part: string;
  onBehalfOfContentOwner?: string;
}

export interface schema_playlistItems_delete extends param {
  id: string;
  onBehalfOfContentOwner?: string;
}

export interface schema_playlists_list extends param {
  part: string;
  channelId?: string;
  hl?: string;
  id?: string;
  maxResults?: number;
  mine?: boolean;
  onBehalfOfContentOwner?: string;
  onBehalfOfContentOwnerChannel?: string;
  pageToken?: string;
}

export interface schema_playlists_insert extends param {
  part: string;
  onBehalfOfContentOwner?: string;
  onBehalfOfContentOwnerChannel?: string;
}

export interface schema_playlists_update extends param {
  part: string;
  onBehalfOfContentOwner?: string;
}

export interface schema_playlists_delete extends param {
  id: string;
  onBehalfOfContentOwner?: string;
}

export interface schema_search_list extends param {
  part: string;
  channelId?: string;
  channelType?: "any" | "show";
  eventType?: "completed" | "live" | "upcoming";
  forContentOwner?: boolean;
  forDeveloper?: boolean;
  forMine?: boolean;
  location?: string;
  locationRadius?: string;
  maxResults?: number;
  onBehalfOfContentOwner?: string;
  order?:
    | "date"
    | "rating"
    | "relevance"
    | "title"
    | "videoCount"
    | "viewCount";
  pageToken?: string;
  publishedAfter?: string;
  publishedBefore?: string;
  q?: string;
  regionCode?: string;
  relatedToVideoId?: string;
  relevanceLanguage?: string;
  safeSearch?: "moderate" | "none" | "strict";
  topicId?: string;
  type?: string;
  videoCaption?: "any" | "closedCaption" | "none";
  videoCategoryId?: string;
  videoDefinition?: "any" | "high" | "standard";
  videoDimension?: "2d" | "3d" | "any";
  videoDuration?: "any" | "long" | "medium" | "short";
  videoEmbeddable?: "any" | "true";
  videoLicense?: "any" | "creativeCommon" | "youtube";
  videoSyndicated?: "any" | "true";
  videoType?: "any" | "episode" | "movie";
}

export interface schema_subscriptions_list extends param {
  part: string;
  channelId?: string;
  forChannelId?: string;
  id?: string;
  maxResults?: number;
  mine?: boolean;
  myRecentSubscribers?: boolean;
  mySubscribers?: boolean;
  onBehalfOfContentOwner?: string;
  onBehalfOfContentOwnerChannel?: string;
  order?: "alphabetical" | "relevance" | "unread";
  pageToken?: string;
}

export interface schema_subscriptions_insert extends param {
  part: string;
}

export interface schema_subscriptions_delete extends param {
  id: string;
}

export interface schema_thumbnails_set extends param {
  videoId: string;
  onBehalfOfContentOwner?: string;
}

export interface schema_videoAbuseReportReasons_list extends param {
  part: string;
  hl?: string;
}

export interface schema_videoCategories_list extends param {
  part: string;
  hl?: string;
  id?: string;
  regionCode?: string;
}

export interface schema_videos_list extends param {
  part: string;
  chart?: "mostPopular";
  hl?: string;
  id?: string;
  locale?: string;
  maxHeight?: number;
  maxResults?: number;
  maxWidth?: number;
  myRating?: "dislike" | "like";
  onBehalfOfContentOwner?: string;
  pageToken?: string;
  regionCode?: string;
  videoCategoryId?: string;
}

export interface schema_videos_insert extends param {
  part: string;
  autoLevels?: boolean;
  notifySubscribers?: boolean;
  onBehalfOfContentOwner?: string;
  onBehalfOfContentOwnerChannel?: string;
  stabilize?: boolean;
}

export interface schema_videos_update extends param {
  part: string;
  onBehalfOfContentOwner?: string;
}

export interface schema_videos_rate extends param {
  id: string;
  rating?: "dislike" | "like" | "none";
}

export interface schema_videos_getRating extends param {
  id: string;
  onBehalfOfContentOwner?: string;
}

export interface schema_videos_reportAbuse extends param {
  onBehalfOfContentOwner?: string;
}

export interface schema_videos_delete extends param {
  id: string;
  onBehalfOfContentOwner?: string;
}

export interface schema_watermarks_set extends param {
  channelId: string;
  onBehalfOfContentOwner?: string;
}

export interface schema_watermarks_unset extends param {
  channelId: string;
  onBehalfOfContentOwner?: string;
}
