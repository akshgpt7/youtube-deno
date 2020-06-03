// This module handles the OAuth authentication of a user.

import { param } from "./youtube-api-deno.ts";

const oauthEndpoint = "https://accounts.google.com/o/oauth2/v2/auth";
const scopes = [
  "https://www.googleapis.com/auth/youtube",
  "https://www.googleapis.com/auth/youtube.channel-memberships.creator",
  "https://www.googleapis.com/auth/youtube.force-ssl",
  "https://www.googleapis.com/auth/youtube.readonly",
  "https://www.googleapis.com/auth/youtube.upload",
  "https://www.googleapis.com/auth/youtubepartner",
  "https://www.googleapis.com/auth/youtubepartner-channel-audit",
];

export interface queryParams extends param {
  client_id: string;
  redirect_uri: string;
  response_type?: "code" | "token";
  scope: string;
  access_type?: "online" | "offline"; //////////////////////////////////////////////////////////// read more
  state?: string;
  include_granted_scopes?: boolean;
  login_hint?: string;
  prompt?: "none" | "consent select_account" | "consent" | "select_account";
}


export class authenticator {
  private create_url(creds: queryParams): string {
    let url: string = oauthEndpoint + "?response_type=token";

    for (let p in creds) {
      if (p == "response_type") {}
      else if (p == "scope") {
        url += "&scope=";
        let scope_list: string[] = creds[p].split(" ");
        for (let s of scope_list) {
          if (scopes.includes(s) == false) {
            throw new Error("Invalid scope: " + s);
          }
        }
        let add_scopes: string = scope_list.join("+");
        url += add_scopes;
      } else {
        url += `&${p}=${creds[p].toString()}`;
      }
    }

    return url;
  }

  authenticate(credentials: queryParams): string {
    let auth_url: string = this.create_url(credentials);

    // open this auth_url in browser and get the token
    return auth_url;
  }
}




///// testing call
let obj = new authenticator();
let creds: queryParams = {
  client_id: "REDACTED",
  redirect_uri: "https://localhost:8080",
  scope: "https://www.googleapis.com/auth/youtube",
};

let auth_url: string = obj.authenticate(creds);
console.log(auth_url);

