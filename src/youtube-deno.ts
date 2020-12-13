/*  The YouTube Data API lets you incorporate functions normally executed
 *  on the YouTube website into your own website or application.
 */

import * as schemas from "./schemas.ts";

const service = "/youtube";
const version = "/v3";
const baseUrl = "https://www.googleapis.com";
const rootUrl: string = baseUrl + service + version + "/";

interface header {
  [key: string]: string;
}

// ---------- MAIN YouTube CLASS ----------

export class YouTube {
  key: string;
  token: (string | boolean);
  headers: header = {};
  contentHeaders: header = {};

  constructor(readonly apiKey: string, accessToken: (boolean | string)) {
    this.key = apiKey;
    this.token = accessToken;
    if (this.token == false) {
      this.headers = { "Accept": "application/json" };
    } else {
      this.headers = {
        "Authorization": `Bearer ${this.token}`,
        "Accept": "application/json",
      };
    }

    this.contentHeaders = this.headers;
    this.contentHeaders["Content-Type"] = "application/json";
  }

  private create_url(method: string, params?: schemas.param) {
    let url = rootUrl + method + `?key=${this.key}`;

    if (params !== undefined) {
      for (const p in params) {
        url += `&${p}=${params[p].toString()}`;
      }
    }

    return url;
  }

  // ---------------API METHODS---------------

  activities_list(params: schemas.schema_activities_list) {
    const method = "activities";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  captions_list(params: schemas.schema_captions_list) {
    const method = "captions";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  captions_insert(
    params: schemas.schema_captions_insert,
    body: Record<string, unknown>,
  ) {
    const method = "captions";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "POST",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  captions_update(
    params: schemas.schema_captions_update,
    body: Record<string, unknown>,
  ) {
    const method = "captions";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "PUT",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  captions_download(params: schemas.schema_captions_download) {
    const id = params["id"];
    const noIdParams: schemas.param = {};
    for (const i in params) {
      if (i == "id") {
        continue;
      } else {
        noIdParams[i] = params[i];
      }
    }

    const method = "captions/" + id;
    const requestUrl = this.create_url(method, noIdParams);

    const init = { headers: this.headers };

    return fetch(requestUrl, init);
  }

  captions_delete(params: schemas.schema_captions_delete) {
    const method = "captions";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers, method: "DELETE" };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  channelBanners_insert(
    params: schemas.schema_channelBanners_insert,
    body?: Record<string, unknown>,
  ) {
    // Provide an empty object {} as first function parameter if you do not
    // want to pass any optional parameters.
    // The second parameter being body.
    const method = "channelBanners/insert";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body?.toString(),
      method: "POST",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  channels_list(params: schemas.schema_channels_list) {
    const method = "channels";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  channels_update(
    params: schemas.schema_channels_update,
    body: Record<string, unknown>,
  ) {
    const method = "channels";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "PUT",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  channelSections_list(params: schemas.schema_channelSections_list) {
    const method = "channelSections";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  channelSections_insert(
    params: schemas.schema_channelBanners_insert,
    body: Record<string, unknown>,
  ) {
    const method = "channelSections";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "POST",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  channelSections_update(
    params: schemas.schema_channelSections_update,
    body: Record<string, unknown>,
  ) {
    const method = "channelSections";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "PUT",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  channelSections_delete(params: schemas.schema_channelSections_delete) {
    const method = "channelSections";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers, method: "DELETE" };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_list(params: schemas.schema_comments_list) {
    const method = "comments";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_insert(
    params: schemas.schema_comments_insert,
    body: Record<string, unknown>,
  ) {
    const method = "comments";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "POST",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_update(
    params: schemas.schema_comments_update,
    body?: Record<string, unknown>,
  ) {
    const method = "comments";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body?.toString(),
      method: "PUT",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_markAsSpam(params: schemas.schema_comments_markAsSpam) {
    const method = "comments/markAsSpam";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers, method: "POST" };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_setModerationStatus(
    params: schemas.schema_comments_setModerationStatus,
  ) {
    const method = "comments/setModerationStatus";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers, method: "POST" };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_delete(params: schemas.schema_comments_delete) {
    const method = "comments";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers, method: "DELETE" };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  commentThreads_list(params: schemas.schema_commentThreads_list) {
    const method = "commentThreads";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  commentThreads_insert(
    params: schemas.schema_commentThreads_insert,
    body: Record<string, unknown>,
  ) {
    const method = "commentThreads";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "POST",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  commentThreads_update(
    params: schemas.schema_commentThreads_update,
    body: Record<string, unknown>,
  ) {
    const method = "commentThreads";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "PUT",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  i18nLanguages_list(params: schemas.schema_i18nLanguages_list) {
    const method = "i18nLanguages";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  i18nRegions_list(params: schemas.schema_i18nRegions_list) {
    const method = "i18nRegions";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  // NOTE: The members.list and membershipsLevels.list methods of the API
  // require prior approval from YouTube,
  // hence we've not included those methods in this client library.

  playlistItems_list(params: schemas.schema_playlistItems_list) {
    const method = "playlistItems";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlistItems_insert(
    params: schemas.schema_playlistItems_insert,
    body: Record<string, unknown>,
  ) {
    const method = "playlistItems";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "POST",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlistItems_update(
    params: schemas.schema_playlistItems_update,
    body: Record<string, unknown>,
  ) {
    const method = "playlistItems";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "PUT",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlistItems_delete(params: schemas.schema_playlistItems_delete) {
    const method = "playlistItems";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers, method: "DELETE" };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlists_list(params: schemas.schema_playlists_list) {
    const method = "playlists";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlists_insert(
    params: schemas.schema_playlists_insert,
    body: Record<string, unknown>,
  ) {
    const method = "playlists";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "POST",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlists_update(
    params: schemas.schema_playlists_update,
    body: Record<string, unknown>,
  ) {
    const method = "playlists";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "PUT",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlists_delete(params: schemas.schema_playlists_delete) {
    const method = "playlists";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers, method: "DELETE" };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  search_list(params: schemas.schema_search_list) {
    const method = "search";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  subscriptions_list(params: schemas.schema_subscriptions_list) {
    const method = "subscriptions";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  subscriptions_insert(
    params: schemas.schema_subscriptions_insert,
    body: Record<string, unknown>,
  ) {
    const method = "subscriptions";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "POST",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  subscriptions_delete(params: schemas.schema_subscriptions_delete) {
    const method = "subscriptions";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers, method: "DELETE" };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  thumbnails_set(
    params: schemas.schema_thumbnails_set,
    body?: Record<string, unknown>,
  ) {
    const method = "thumbnails/set";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.headers,
      body: body?.toString(),
      method: "POST",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  videoAbuseReportReasons_list(
    params: schemas.schema_videoAbuseReportReasons_list,
  ) {
    const method = "videoAbuseReportReasons";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  videoCategories_list(params: schemas.schema_videoCategories_list) {
    const method = "videoCategories";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_list(params: schemas.schema_videos_list) {
    const method = "videos";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_insert(
    params: schemas.schema_videos_insert,
    body: Record<string, unknown>,
  ) {
    const method = "videos";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "POST",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_update(
    params: schemas.schema_videos_update,
    body: Record<string, unknown>,
  ) {
    const method = "videos";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "PUT",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_rate(params: schemas.schema_videos_rate) {
    const method = "videos/rate";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers, method: "POST" };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_getRating(params: schemas.schema_videos_getRating) {
    const method = "videos/getRating";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_reportAbuse(
    params: schemas.schema_videos_reportAbuse,
    body: Record<string, unknown>,
  ) {
    // Provide an empty object {} as first function parameter if you do not
    // want to pass any optional url parameters.
    // The second parameter being body.
    const method = "videos/reportAbuse";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "POST",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_delete(params: schemas.schema_videos_delete) {
    const method = "videos";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers, method: "DELETE" };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  watermarks_set(
    params: schemas.schema_watermarks_set,
    body: Record<string, unknown>,
  ) {
    const method = "watermarks/set";
    const requestUrl = this.create_url(method, params);

    const init = {
      headers: this.contentHeaders,
      body: body.toString(),
      method: "POST",
    };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }

  watermarks_unset(params: schemas.schema_watermarks_unset) {
    const method = "watermarks/unset";
    const requestUrl = this.create_url(method, params);

    const init = { headers: this.headers, method: "POST" };

    return fetch(requestUrl, init)
      .then(function (response) {
        return response.json();
      });
  }
}
