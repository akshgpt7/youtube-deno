/*  The YouTube Data API lets you incorporate functions normally executed
 *  on the YouTube website into your own website or application.
 */


/* Issues:
 *  make schema for all resource types for sending as request body
 *  add standard parameters interface and extend it to all schemas
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


// Parameter schemas for different methods


interface schema_activities_list extends param {
  part: string;
  channelId?: string;
  mine?: boolean;
  maxResults?: number;
  pageToken?: string;
  publishedAfter?: string;
  publishedBefore?: string;
  regionCode?: string;
}

interface schema_activities_insert extends param {
  part: string;
}

interface schema_captions_list extends param {
  part: string;
  videoId: string;
  id?: string;
  onBehalfOfContentOwner?: string;
  onBehalfOf?: string;
}

interface schema_captions_insert extends param {
  part: string;
  onBehalfOf?: string;
  onBehalfOfContentOwner?: string;
  sync?: boolean;
}

interface schema_captions_update extends param {
  part: string;
  onBehalfOf?: string;
  onBehalfOfContentOwner?: string;
  sync?: boolean;
}

interface schema_captions_download extends param {
  id: string;
  onBehalfOf?: string;
  onBehalfOfContentOwner?: string;
  tfmt?: "sbv" | "scc" | "srt" | "ttml" | "vtt";
  tlang?: string;
}

interface schema_captions_delete extends param {
  id: string;
  onBehalfOf?: string;
  onBehalfOfContentOwner?: string;
}

interface schema_channelBanners_insert extends param {
  channelId?: string;
  onBehalfOfContentOwner?: string;
}

interface schema_channels_list extends param {
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

interface schema_channels_update extends param {
  part: string;
  onBehalfOfContentOwner?: string;
}

interface schema_channelSections_list extends param {
  part: string;
  channelId?: string;
  hl?: string;
  id?: string;
  mine?: boolean;
  onBehalfOfContentOwner?: string;
}

interface schema_channelSections_insert extends param {
  part: string;
  onBehalfOfContentOwner?: string;
  onBehalfOfContentOwnerChannel?: string;
}

interface schema_channelSections_update extends param {
  part: string;
  onBehalfOfContentOwner?: string;
}

interface schema_channelSections_delete extends param {
  id: string;
  onBehalfOfContentOwner?: string;
}

export class YouTubeDataAPI {
  key: string;
  token: (string | boolean);
  headers: header = {};
  content_headers: header = {};
  resp: any;

  constructor(readonly api_key:string, access_token:(boolean | string)) {
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


  private create_url(method:string, params?:param) {
    let url = root_url + method + `?key=${this.key}`;

    if (params !== undefined){
      for (let p in params){
        url += `&${p}=${params[p].toString()}`;
      }
    }

    return url;
  }


  // API METHODS


  activities_list(params:schema_activities_list) {
    let method = "activities";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
    .then(function(response){
      return response.json();
    });
  }

  activities_insert(params:schema_activities_insert, body:object) {
    let method = "activities";
    let request_url = this.create_url(method, params);

    let init = { headers: this.content_headers, body: body.toString(), method: "POST" };

    return fetch(request_url, init)
    .then(function(response){
      return response.json();
    });
  }

  captions_list(params:schema_captions_list) {
    let method = "captions";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
    .then(function(response){
      return response.json();
    });
  }

  captions_insert(params:schema_captions_insert, body:object) {
    let method = "captions";
    let request_url = this.create_url(method, params);

    let init = { headers: this.content_headers, body: body.toString(), method: "POST" };

    return fetch(request_url, init)
    .then(function(response){
      return response.json();
    });
  }

  captions_update(params:schema_captions_update, body:object) {
    let method = "captions";
    let request_url = this.create_url(method, params);

    let init = { headers: this.content_headers, body: body.toString(), method: "PUT" };

    return fetch(request_url, init)
    .then(function(response){
      return response.json();
    });
  }

  captions_download(params:schema_captions_download) {
    let id = params["id"];
    let no_id_params: param = {};
    for (let i in params) {
      if (i == "id") {
        continue;
      }
      else {
        no_id_params[i] = params[i];
      }
    }

    let method = "captions/" + id;
    let request_url = this.create_url(method, no_id_params);

    let init = { headers: this.headers };

    return fetch(request_url, init);
  }

  captions_delete(params:schema_captions_delete) {
    let method = "captions";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
    .then(function(response){
      return response.json();
    });
  }

  channelBanners_insert(params?:schema_channelBanners_insert, body?:object) {
    let method = "channelBanners/insert";
    let request_url = this.create_url(method, params);

    let init: object;
    if (body !== undefined){
      init = { headers: this.content_headers, body: body.toString(), method: "POST" };
    }
    else{
      init = { headers: this.content_headers, method: "POST" };
    }
    return fetch(request_url, init)
    .then(function(response){
      return response.json();
    });
  }

  channels_list(params:schema_channels_list) {
    let method = "channels";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
    .then(function(response){
      return response.json();
    });
  }

  channels_update(params:schema_channels_update, body:object) {
    let method = "channels";
    let request_url = this.create_url(method, params);

    let init = { headers: this.content_headers, body: body.toString(), method: "PUT" };

    return fetch(request_url, init)
    .then(function(response){
      return response.json();
    });
  }

  channelSections_list(params:schema_channelSections_list) {
    let method = "channelSections";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
    .then(function(response){
      return response.json();
    });
  }

  channelSections_insert(params:schema_channelBanners_insert, body:object) {
    let method = "channelSections";
    let request_url = this.create_url(method, params);

    let init = { headers: this.content_headers, body: body.toString(), method: "POST" };

    return fetch(request_url, init)
    .then(function(response){
      return response.json();
    });
  }

  channelSections_update(params:schema_channelSections_update, body:object) {
    let method = "channelSections";
    let request_url = this.create_url(method, params);

    let init = { headers: this.content_headers, body: body.toString(), method: "PUT" };

    return fetch(request_url, init)
    .then(function(response){
      return response.json();
    });
  }

  channelSections_delete(params:schema_channelSections_delete) {
    let method = "channelSections";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers, method: "DELETE" };

    return fetch(request_url, init)
    .then(function(response){
      return response.json();
    });
  }







}



// test calls

 let obj = new YouTubeDataAPI("", false);

 obj.channelSections_delete({id: "snippet"}).then(function(response){
   console.log(response);
 });







// this section is made only for testing.
/* search_list() {
//  params["key"] = this.key;

  let request_url = this.create_url("search?part=snippet&key=");  // add key here
  let options = { headers: this.headers };

  return fetch(request_url, options)
  .then(function(response){
    return response.json();
  });

}

// this is just to test for now
let obj = new YouTubeDataAPI('', false); //put your key here

obj.search_list().then(function(response){
  console.log(response)
});
*/
