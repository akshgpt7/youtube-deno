import * as schemas from "./schemas.ts";
import { YouTube } from "./youtube-deno.ts";

export class YouTube_live extends YouTube {
  key: string;
  token: (string | boolean);
  headers: schemas.header = {};
  contentHeaders: schemas.header = {};

  constructor(readonly apiKey: string, accessToken: (boolean | string)) {
    super(apiKey, accessToken);
    this.key = apiKey;
    this.token = accessToken;
    if (this.token == false) {
      this.headers = {
        "Accept": "application/json",
      };
    } else {
      this.headers = {
        "Authorization": `Bearer ${this.token}`,
        "Accept": "application/json",
      };
    }

    this.contentHeaders = this.headers;
    this.contentHeaders["Content-Type"] = "application/json";
  }

  liveBroadcasts_list(params: schemas.schema_live_LiveBroadcasts_list) {
    const method = "liveBroadcasts";
    const request_url = this.create_url(method, params);

    const init = {
      headers: this.headers,
    };

    return fetch(request_url, init).then(function (response) {
      return response.json();
    });
  }

  liveChat_list(params: schemas.schema_live_liveChat_list) {
    const method = "liveChat/messages";
    const request_url = this.create_url(method, params);

    const init = {
      headers: this.headers,
    };

    return fetch(request_url, init).then(function (response) {
      return response.json();
    });
  }

  liveSuperChatEvents_list(params: schemas.schema_live_superChatEvent_list) {
    const method = "superChatEvents";
    const request_url = this.create_url(method, params);

    const init = {
      headers: this.headers,
    };

    return fetch(request_url, init).then(function (response) {
      return response.json();
    });
  }
}
