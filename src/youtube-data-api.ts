/*  The YouTube Data API lets you incorporate functions normally executed
 *   on the YouTube website into your own website or application.
 */

import ky from 'https://unpkg.com/ky/index.js';

const provider = '/youtube';
const version = '/v3';
const base_url: string = 'https://www.googleapis.com';
const root_url: string = base_url + provider + version;

interface header {
  [key: string]: any;
}

interface param {
  key: string;
}


export class YouTubeDataAPI {
  key: string;
  token: (string|boolean);
  headers: header = {};

  constructor(readonly api_key: string, access_token:(boolean|string)) {
    this.key = api_key;
    this.token = access_token;
    if (this.token == false){
          this.headers = {'Accept': 'application/json'};
    }
    else {
      this.headers = {'Authorization': 'Bearer ${this.token}', 'Accept': 'application/json'};
    }
  }

  private build_insert_headers() {
    this.headers['Content-Type'] = 'application/json';
  }

  private create_url(method: string) {
    let url = root_url + method;
    return url;
  }


// API METHODS

  activities_list(part:string, channelId:string, home:boolean, maxResults:number, mine:boolean, pageToken:string, publishedAfter:string, publishedBefore:string, regionCode:string) {
    let request = this.create_url("activities");

    let options = {headers: this.headers, searchParams: params};
    let response = ky.get(request, options=options).json();

    return response;
  }



}
