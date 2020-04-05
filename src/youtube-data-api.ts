/*  The YouTube Data API lets you incorporate functions normally executed
 *   on the YouTube website into your own website or application.
 */

import ky from "https://unpkg.com/ky/index.js";

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

export class YouTubeDataAPI {
  key: string;
  token: (string | boolean);
  headers: header = {};

  constructor(readonly api_key: string, access_token: (boolean | string)) {
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
  }

  private build_insert_headers() {
    this.headers["Content-Type"] = "application/json";
  }

  private create_url(method: string) {
    let url = root_url + method;
    return url;
  }

  // API METHODS

  /**
   * youtube.activities.list
   * @desc Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel, events associated with the user's subscriptions and Google+ friends, or the YouTube home page feed, which is customized for each user.
   *
   * @param {object} params Parameters for request
   * @param {string=} params.channelId The channelId parameter specifies a unique YouTube channel ID. The API will then return a list of that channel's activities.
   * @param {boolean=} params.home Set this parameter's value to true to retrieve the activity feed that displays on the YouTube home page for the currently authenticated user.
   * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
   * @param {boolean=} params.mine Set this parameter's value to true to retrieve a feed of the authenticated user's activities.
   * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
   * @param {string} params.part The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set part=snippet, the API response will also contain all of those nested properties.
   * @param {string=} params.publishedAfter The publishedAfter parameter specifies the earliest date and time that an activity could have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be included in the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
   * @param {string=} params.publishedBefore The publishedBefore parameter specifies the date and time before which an activity must have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be excluded from the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
   * @param {string=} params.regionCode The regionCode parameter instructs the API to return results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code. YouTube uses this value when the authorized user's previous activity on YouTube does not provide enough information to generate the activity feed.
   * @return {object} Rsponse JSON
   */

  activities_list(
    params?: param,
    part?: string,
    channelId?: string,
    home?: boolean,
    maxResults?: number,
    mine?: boolean,
    pageToken?: string,
    publishedAfter?: string,
    publishedBefore?: string,
    regionCode?: string,
  ) {
    // change to take only obj as function param

    let query_params: param = { "key": this.key, "part": part };
    if (params === undefined) {
      if (!(channelId === undefined)) query_params["channelId"] = channelId;
      if (!(home === undefined)) query_params["home"] = home;
      if (!(maxResults === undefined)) query_params["maxResults"] = maxResults;
      if (!(mine === undefined)) query_params["mine"] = mine;
      if (!(pageToken === undefined)) query_params["pageToken"] = pageToken;
      if (!(publishedAfter === undefined)) {
        query_params["publishedAfter"] = publishedAfter;
      }
      if (!(publishedBefore === undefined)) {
        query_params["publishedBefore"] = publishedBefore;
      }
      if (!(regionCode === undefined)) query_params["regionCode"] = regionCode;
    } else {
      query_params = params;
    }

    let request_url = this.create_url("activities");
    let options = { headers: this.headers, searchParams: query_params };
    let response = ky.get(request_url, options).json();

    return response;
  }

  // this is made only for testing... isko hatana h baad me
  search_list(params: param) {
    params["key"] = this.key;

    let request_url = this.create_url("search");
    let options = { headers: this.headers, searchParams: params };
    let response = ky.get(request_url, options);
    let responseJSON = response;

    return responseJSON;
  }
}

// this is just to test for now
let obj = new YouTubeDataAPI("", false); //put your key here

let s = obj.search_list({ "part": "snippet", "maxResults": 5 });
console.log(s);
