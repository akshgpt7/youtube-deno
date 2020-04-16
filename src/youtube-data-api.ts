/*  The YouTube Data API lets you incorporate functions normally executed
 *  on the YouTube website into your own website or application.
 */


/* Issues:
 *  make schema for activity resource and add to body of schema_activities_insert (https://developers.google.com/youtube/v3/docs/activities#resource)
 */

const provider = "/youtube";
const version = "/v3";
const base_url: string = "https://www.googleapis.com";
const root_url: string = base_url + provider + version + "/";

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


export class YouTubeDataAPI {
  key: string;
  token: (string | boolean);
  headers: header = {};
  POST_headers: header = {};
  resp: any;

  constructor(readonly api_key:string, access_token:(boolean | string)) {
    this.key = api_key;
    this.token = access_token;
    if (this.token == false) {
      this.headers = { "Accept": "application/json" };
    } else {
      this.headers = {
        "Authorization": "Bearer ${this.token}",
        "Accept": "application/json",
      };
    }

    this.POST_headers = this.headers;
    this.POST_headers["Content-Type"] = "application/json";
  }


  private create_url(method:string, params?:param) {
    let url = root_url + method + "?key=" + this.key;

    for (let p in params){
      url += ("&" + p + "=" + params[p].toString());
    }

    return url;
  }


  // API METHODS


  activities_list(params?:schema_activities_list) {
    let method = "activities";
    let request_url = this.create_url(method, params);

    let init = { headers: this.headers };

    return fetch(request_url, init)
    .then(function(response){
      return response.json();
    });
  }

  activities_insert(body:object, params?:schema_activities_insert){
    let method = "activities";
    let request_url = this.create_url(method, params);

    let init = { headers: this.POST_headers, body: body.toString(), method: "POST" };

    return fetch(request_url, init)
    .then(function(response){
      return response.json();
    });
  }









}



















































// this is made only for testing... isko hatana h baad me
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
