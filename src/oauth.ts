// This module handles the OAuth authentication of a user.

import { open } from "./deps.ts";
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

interface queryParams extends param {
  client_id: string;
  redirect_uri: string;
  response_type?: "code" | "token";
  scope: string;
  access_type?: "online" | "offline"; ///////////// read more
  state?: string;
  include_granted_scopes?: boolean;
  login_hint?: string;
  prompt?: "none" | "consent select_account" | "consent" | "select_account";
}

export class authenticator {
  private create_url(creds: queryParams) {
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

  async authenticate(credentials: queryParams) {
    let auth_url: string = this.create_url(credentials);
    await open(auth_url);
    return fetch(auth_url);
  }
}

///// testing call
let obj = new authenticator();
let creds: queryParams = {
  client_id:
    "358555026629-51shvhftohpvbf3871m84k36ef2692d6.apps.googleusercontent.com",
  redirect_uri: "https://localhost:8080",
  scope: "https://www.googleapis.com/auth/youtube",
  prompt: "consent",
};

obj.authenticate(creds).then(function (response) {
  console.log(response);
});
