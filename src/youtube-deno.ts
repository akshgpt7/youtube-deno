/*  The YouTube Data API lets you incorporate functions normally executed
 *  on the YouTube website into your own website or application.
 */

import * as schemas from "./schemas.ts";

const service = "/youtube";
const version = "/v3";
const base_url = "https://www.googleapis.com";
const root_url: string = base_url + service + version + "/";

interface header {
  [key: string]: string;
}

// ---------- MAIN YouTube CLASS ----------

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

  private create_url(method: string, params?: schemas.param) {
    let url = root_url + method + `?key=${this.key}`;

    if (params !== undefined) {
      for (let p in params) {
        url += `&${p}=${params[p].toString()}`;
      }
    }

    return url;
  }

  // ---------------API METHODS---------------

  activities_list(params: schemas.schema_activities_list) {
    let method = "activities";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  captions_list(params: schemas.schema_captions_list) {
    let method = "captions";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  captions_insert(params: schemas.schema_captions_insert, body: object) {
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

  captions_update(params: schemas.schema_captions_update, body: object) {
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

  captions_download(params: schemas.schema_captions_download) {
    let id = params["id"];
    let no_id_params: schemas.param = {};
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

  captions_delete(params: schemas.schema_captions_delete) {
    let method = "captions";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  channelBanners_insert(
    params: schemas.schema_channelBanners_insert,
    body?: object,
  ) {
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

  channels_list(params: schemas.schema_channels_list) {
    let method = "channels";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  channels_update(params: schemas.schema_channels_update, body: object) {
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

  channelSections_list(params: schemas.schema_channelSections_list) {
    let method = "channelSections";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  channelSections_insert(
    params: schemas.schema_channelBanners_insert,
    body: object,
  ) {
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

  channelSections_update(
    params: schemas.schema_channelSections_update,
    body: object,
  ) {
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

  channelSections_delete(params: schemas.schema_channelSections_delete) {
    let method = "channelSections";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_list(params: schemas.schema_comments_list) {
    let method = "comments";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_insert(params: schemas.schema_comments_insert, body: object) {
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

  comments_update(params: schemas.schema_comments_update, body?: object) {
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

  comments_markAsSpam(params: schemas.schema_comments_markAsSpam) {
    let method = "comments/markAsSpam";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "POST" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_setModerationStatus(
    params: schemas.schema_comments_setModerationStatus,
  ) {
    let method = "comments/setModerationStatus";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "POST" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  comments_delete(params: schemas.schema_comments_delete) {
    let method = "comments";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  commentThreads_list(params: schemas.schema_commentThreads_list) {
    let method = "commentThreads";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  commentThreads_insert(
    params: schemas.schema_commentThreads_insert,
    body: object,
  ) {
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

  commentThreads_update(
    params: schemas.schema_commentThreads_update,
    body: object,
  ) {
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

  i18nLanguages_list(params: schemas.schema_i18nLanguages_list) {
    let method = "i18nLanguages";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  i18nRegions_list(params: schemas.schema_i18nRegions_list) {
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

  playlistItems_list(params: schemas.schema_playlistItems_list) {
    let method = "playlistItems";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlistItems_insert(
    params: schemas.schema_playlistItems_insert,
    body: object,
  ) {
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

  playlistItems_update(
    params: schemas.schema_playlistItems_update,
    body: object,
  ) {
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

  playlistItems_delete(params: schemas.schema_playlistItems_delete) {
    let method = "playlistItems";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlists_list(params: schemas.schema_playlists_list) {
    let method = "playlists";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  playlists_insert(params: schemas.schema_playlists_insert, body: object) {
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

  playlists_update(params: schemas.schema_playlists_update, body: object) {
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

  playlists_delete(params: schemas.schema_playlists_delete) {
    let method = "playlists";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  search_list(params: schemas.schema_search_list) {
    let method = "search";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  subscriptions_list(params: schemas.schema_subscriptions_list) {
    let method = "subscriptions";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  subscriptions_insert(
    params: schemas.schema_subscriptions_insert,
    body: object,
  ) {
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

  subscriptions_delete(params: schemas.schema_subscriptions_delete) {
    let method = "subscriptions";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  thumbnails_set(params: schemas.schema_thumbnails_set, body?: object) {
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

  videoAbuseReportReasons_list(
    params: schemas.schema_videoAbuseReportReasons_list,
  ) {
    let method = "videoAbuseReportReasons";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  videoCategories_list(params: schemas.schema_videoCategories_list) {
    let method = "videoCategories";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_list(params: schemas.schema_videos_list) {
    let method = "videos";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_insert(params: schemas.schema_videos_insert, body: object) {
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

  videos_update(params: schemas.schema_videos_update, body: object) {
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

  videos_rate(params: schemas.schema_videos_rate) {
    let method = "videos/rate";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "POST" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_getRating(params: schemas.schema_videos_getRating) {
    let method = "videos/getRating";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  videos_reportAbuse(params: schemas.schema_videos_reportAbuse, body: object) {
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

  videos_delete(params: schemas.schema_videos_delete) {
    let method = "videos";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }

  watermarks_set(params: schemas.schema_watermarks_set, body: object) {
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

  watermarks_unset(params: schemas.schema_watermarks_unset) {
    let method = "watermarks/unset";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "POST" };

    return fetch(request_url, init)
      .then(function (response) {
        return response.json();
      });
  }
}
