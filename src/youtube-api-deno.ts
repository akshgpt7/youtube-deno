/*  The YouTube Data API lets you incorporate functions normally executed
 *  on the YouTube website into your own website or application.
 */


const service = "/youtube";
const version = "/v3";
const base_url: string = "https://www.googleapis.com";
const root_url: string = base_url + service + version + "/";

interface header {
  [key: string]: string;
}

interface param {
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

// MAIN YouTube CLASS

export class YouTube {
  key: string;
  token: (string | boolean);
  headers: header = {};
  content_headers: header = {};

  constructor(readonly api_key: string, access_token: (boolean | string)) {
    this.key = api_key;
    this.token = access_token;
    if (this.token == false) {
      this.headers = { "Accept": "application/json" };
    } else {
      this.headers = {
        "Authorization": `Bearer ${this.token}`,
        "Accept": "application/json",
      };
    }

    this.content_headers = this.headers;
    this.content_headers["Content-Type"] = "application/json";
  }

  private create_url(method: string, params?: param) {
    let url = root_url + method + `?key=${this.key}`;

    if (params !== undefined) {
      for (let p in params) {
        url += `&${p}=${params[p].toString()}`;
      }
    }

    return url;
  }

  // ---------------API METHODS---------------

  activities_list(params: schema_activities_list) {
    let method = "activities";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  activities_insert(params: schema_activities_insert, body: object) {
    let method = "activities";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "POST",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  captions_list(params: schema_captions_list) {
    let method = "captions";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  captions_insert(params: schema_captions_insert, body: object) {
    let method = "captions";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "POST",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  captions_update(params: schema_captions_update, body: object) {
    let method = "captions";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "PUT",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  captions_download(params: schema_captions_download) {
    let id = params["id"];
    let no_id_params: param = {};
    for (let i in params) {
      if (i == "id") {
        continue;
      } else {
        no_id_params[i] = params[i];
      }
    }

    let method = "captions/" + id;
    let request_url = this.create_url(method, no_id_params);

    let init = { headers: this.headers };

    return fetch(request_url, init);
  }

  captions_delete(params: schema_captions_delete) {
    let method = "captions";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  channelBanners_insert(params: schema_channelBanners_insert, body?: object) {
    // Provide an empty object {} as first function parameter if you do not
    // want to pass any optional parameters.
    // The second parameter being body.
    let method = "channelBanners/insert";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body?.toString(),
      method: "POST",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  channels_list(params: schema_channels_list) {
    let method = "channels";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  channels_update(params: schema_channels_update, body: object) {
    let method = "channels";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "PUT",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  channelSections_list(params: schema_channelSections_list) {
    let method = "channelSections";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  channelSections_insert(params: schema_channelBanners_insert, body: object) {
    let method = "channelSections";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "POST",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  channelSections_update(params: schema_channelSections_update, body: object) {
    let method = "channelSections";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "PUT",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  channelSections_delete(params: schema_channelSections_delete) {
    let method = "channelSections";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_list(params: schema_comments_list) {
    let method = "comments";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_insert(params: schema_comments_insert, body: object) {
    let method = "comments";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "POST",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_update(params: schema_comments_update, body?: object) {
    let method = "comments";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body?.toString(),
      method: "PUT",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_markAsSpam(params: schema_comments_markAsSpam) {
    let method = "comments/markAsSpam";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "POST" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_setModerationStatus(params: schema_comments_setModerationStatus) {
    let method = "comments/setModerationStatus";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "POST" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_delete(params: schema_comments_delete) {
    let method = "comments";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  commentThreads_list(params: schema_commentThreads_list) {
    let method = "commentThreads";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  commentThreads_insert(params: schema_commentThreads_insert, body: object) {
    let method = "commentThreads";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "POST",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  commentThreads_update(params: schema_commentThreads_update, body: object) {
    let method = "commentThreads";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "PUT",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  guideCategories_list(params: schema_guideCategories_list) {
    let method = "guideCategories";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  i18nLanguages_list(params: schema_i18nLanguages_list) {
    let method = "i18nLanguages";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  i18nRegions_list(params: schema_i18nRegions_list) {
    let method = "i18nRegions";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  // NOTE: The members.list and membershipsLevels.list methods of the API
  // require prior approval from YouTube,
  // hence we've not included those methods in this client library.

  playlistItems_list(params: schema_playlistItems_list) {
    let method = "playlistItems";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlistItems_insert(params: schema_playlistItems_insert, body: object) {
    let method = "playlistItems";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "POST",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlistItems_update(params: schema_playlistItems_update, body: object) {
    let method = "playlistItems";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "PUT",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlistItems_delete(params: schema_playlistItems_delete) {
    let method = "playlistItems";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlists_list(params: schema_playlists_list) {
    let method = "playlists";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlists_insert(params: schema_playlists_insert, body: object) {
    let method = "playlists";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "POST",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlists_update(params: schema_playlists_update, body: object) {
    let method = "playlists";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "PUT",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlists_delete(params: schema_playlists_delete) {
    let method = "playlists";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  search_list(params: schema_search_list) {
    let method = "search";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  subscriptions_list(params: schema_subscriptions_list) {
    let method = "subscriptions";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  subscriptions_insert(params: schema_subscriptions_insert, body: object) {
    let method = "subscriptions";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "POST",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  subscriptions_delete(params: schema_subscriptions_delete) {
    let method = "subscriptions";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  thumbnails_set(params: schema_thumbnails_set, body?: object) {
    let method = "thumbnails/set";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.headers,
      body: body?.toString(),
      method: "POST",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  videoAbuseReportReasons_list(params: schema_videoAbuseReportReasons_list) {
    let method = "videoAbuseReportReasons";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  videoCategories_list(params: schema_videoCategories_list) {
    let method = "videoCategories";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_list(params: schema_videos_list) {
    let method = "videos";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_insert(params: schema_videos_insert, body: object) {
    let method = "videos";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "POST",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_update(params: schema_videos_update, body: object) {
    let method = "videos";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "PUT",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_rate(params: schema_videos_rate) {
    let method = "videos/rate";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "POST" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_getRating(params: schema_videos_getRating) {
    let method = "videos/getRating";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_reportAbuse(params: schema_videos_reportAbuse, body: object) {
    // Provide an empty object {} as first function parameter if you do not
    // want to pass any optional url parameters.
    // The second parameter being body.
    let method = "videos/reportAbuse";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "POST",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_delete(params: schema_videos_delete) {
    let method = "videos";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  watermarks_set(params: schema_watermarks_set, body: object) {
    let method = "watermarks/set";
    let request_url = this.create_url(method, params);

    let init = {
      headers: this.content_headers,
      body: body.toString(),
      method: "POST",
    };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  watermarks_unset(params: schema_watermarks_unset) {
    let method = "watermarks/unset";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "POST" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }
}

// test calls
//
// let obj = new YouTube("keyyyy", false);
//
// obj.search_list({part: "snippet"}).then(function(response){
//   console.log(response);
// });
