// This module creates the OAuth authentication url of a user.

import { param } from "./schemas.ts";

const oauthEndpoint = "https://accounts.google.com/o/oauth2/v2/auth";
export const scopes = [
  "https://www.googleapis.com/auth/youtube",
  "https://www.googleapis.com/auth/youtube.channel-memberships.creator",
  "https://www.googleapis.com/auth/youtube.force-ssl",
  "https://www.googleapis.com/auth/youtube.readonly",
  "https://www.googleapis.com/auth/youtube.upload",
  "https://www.googleapis.com/auth/youtubepartner",
  "https://www.googleapis.com/auth/youtubepartner-channel-audit",
];

export interface authParams extends param {
  client_id: string;
  redirect_uri: string;
  response_type?: "code" | "token";
  scope: string;
  access_type?: "online" | "offline"; // TODO: handle refreshing
  state?: string;
  include_granted_scopes?: boolean;
  login_hint?: string;
  prompt?: "none" | "consent select_account" | "consent" | "select_account";
}

export class authenticator {
  private create_url(creds: authParams): string {
    let url: string = oauthEndpoint + "?response_type=token";

    for (const p in creds) {
      if (p == "response_type") {
        // Don't add to url (pass)
      } else if (p == "scope") {
        url += "&scope=";
        const scopeList: string[] = creds[p].split(" ");
        for (const s of scopeList) {
          if (scopes.includes(s) == false) {
            throw new Error("Invalid scope: " + s);
          }
        }
        const addScopes: string = scopeList.join("+");
        url += addScopes;
      } else {
        url += `&${p}=${creds[p].toString()}`;
      }
    }

    return url;
  }

  authenticate(credentials: authParams): string {
    const authUrl: string = this.create_url(credentials);

    // open this authUrl in browser and get the token
    return authUrl;
  }
}
