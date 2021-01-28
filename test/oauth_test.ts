import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.80.0/testing/asserts.ts";
import { authenticator, authParams, scopes } from "../mod.ts";

Deno.test({
  name: "testing when created url successfully",
  fn(): void {
    for (const s of scopes) {
      const auth = new authenticator();
      const creds: authParams = {
        "client_id": "testId",
        "redirect_uri": "testhost",
        scope: s,
      };
      const createdUrl: string = auth.authenticate(creds);
      const expectedUrl =
        "https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=" +
        `${creds.client_id}` + "&redirect_uri=" +
        `${creds.redirect_uri}` + "&scope=" +
        `${s}`;
      assertEquals(createdUrl, expectedUrl);
    }
  },
});

Deno.test({
  name: "testing when created url with mutiple scopes",
  fn(): void {
    for (const s of scopes) {
      const auth = new authenticator();
      const creds: authParams = {
        "client_id": "testId",
        "redirect_uri": "testhost",
        scope: s,
        "response_type": "code",
        "access_type": "online",
        state: "CN",
        "include_granted_scopes": true,
        "login_hint": "testhint",
        prompt: "consent",
      };
      const createdUrl: string = auth.authenticate(creds);
      const expectedUrl =
        "https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=" +
        `${creds.client_id}` + "&redirect_uri=" +
        `${creds.redirect_uri}` + "&scope=" +
        `${s}` + "&access_type=" +
        `${creds.access_type}` + "&state=" +
        `${creds.state}` + "&include_granted_scopes=" +
        `${creds.include_granted_scopes}` + "&login_hint=" +
        `${creds.login_hint}` + "&prompt=" +
        `${creds.prompt}`;
      assertEquals(createdUrl, expectedUrl);
    }
  },
});

Deno.test({
  name: "testing when scope is invalid",
  fn(): void {
    const creds: authParams = {
      "client_id": "testId",
      "redirect_uri": "testhost",
      scope: "http://invalidscope",
    };
    assertThrows((): void => {
      throw new TypeError("Invalid scope: " + creds.scope);
    });
  },
});

Deno.test({
  name: "testing when missing the required parameters",
  fn(): void {
    const creds: authParams = {
      "client_id": "testId",
      "redirect_uri": "",
      scope: "https://www.googleapis.com/auth/youtube",
    };
    assertThrows((): void => {
      throw new TypeError("Missing the required parameters");
    });
  },
});
