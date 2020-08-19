<div align="center">

# youtube-deno : A [Deno](https://deno.land/) client for the [YouTube Data API](https://developers.google.com/youtube/v3/docs) 

Lets you incorporate core YouTube features, such as uploading videos, creating and managing playlists, searching for content, and almost any interaction with YouTube in your Deno application.
<br><br>
This library is a part of <br>
<a href="https://deno.land/x/">
<img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/deno-64.png">
</a>

[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/youtube-deno)

<hr>

![Maintained](https://img.shields.io/maintenance/yes/2020?style=for-the-badge&logo=github)
[![Stars](https://img.shields.io/github/stars/akshgpt7/youtube-deno?style=for-the-badge&logo=reverbnation)](hhttps://github.com/akshgpt7/youtube-deno/stargazers)

</div>

---
<br>

## Why?
- Actively maintained.
- Supports latest YouTube Data API v3.
- OAuth 2.0 support out of the box.
- Easy to use.
- All functionality just a function call away.
- Usable for both Web Applications and personal CLI applications. 
- Asynchronous requests.
- No external dependencies.
<br>

## Installing
*Deno allows you to directly import modules from URLs!*
To import and use the client in your file, add the following import statement:
```ts
import { YouTube } from 'https://deno.land/x/youtube_deno/mod.ts';
```
<br>

## Usage

### Configuring your App
Firstly, you'll have to register your app in the [Google Developers Console](https://console.developers.google.com/apis/dashboard).<br>
 Browse the console and select "New Project".<br>
 
After registering your app, enable the YouTube API for your app by clicking on the "ENABLE APIS AND SERVICES" button and selecting **"YouTube Data API v3"**.<br>
 
After this, you'll need to create some credentials through the console depending on what you want to do, to be able to make API requests. <br>
There are two types of objects you can make according to your requirement:

### Objects that do not require user interactions
If you only need to fetch public data from YouTube, then all you need is an API key. <br><br>
Click on the "CREATE CREDENTIALS" button in the console and select **"API key"** from the options. <br>
**(Note that an API key is required for making each and every request to this API, so this step is mandatory)**
<br><br>
To create an object which uses this API key only for authentication:
```ts
let yt = new YouTube("Your-api-key-here", false); // The false is for access token
```
(Remember: This object is not allowed to perform any account related operation, so you won’t be able to like a video, subscribe to a channel or delete a playlist etc. from a specific account. You will only be able to retrieve read-only public data. For these operations, create an [OAuth authorized object](#objects-that-require-user-interactions-user-consent-by-oauth-20-authorization))

Now, to use this object, just call [any function](https://github.com/akshgpt7/youtube-deno#calling-available-functions) that only lists read-only public data. For example:
```ts
yt1.search_list({part: "snippet"}).then(function(response){
 console.log(response);
});
```

### Objects that require user interactions (user consent by [OAuth 2.0](https://developers.google.com/identity/protocols/oauth2) authorization)
(Note: Creating the API key from the previous section is mandatory.)<br><br>
If you need to make requests that involve access to a YouTube account, you need the owner of each account to authorize your app. For that, you need an access token to be passed to the object you create. This can have the following cases:

**Case 1: You already have an access token**<br>
If you already have an access token, you simply have to pass it while creating the object:
```ts
let yt = new YouTube("your-api-key-here", "access-token-here");
```
Now, using this object you can call [functions](https://github.com/akshgpt7/youtube-deno#calling-available-functions) (by passing the apt parameters) which require YouTube account interactions.
<br>

**Case 2: You do not have an access token**<br>
If you do not have an access token already, you can generate it using our `authenticator` class. For that, follow these steps:
- You first need to create some more credentials. Head to the [Google Developers Console](https://console.developers.google.com/apis/credentials) and under "CREATE CREDENTIALS", select "OAuth client ID".
- Select "Web Application" under Application type.
- Fill the "Authorized Redirect URI" textarea with the URL where you want to redirect users after they authorize their YouTube account. (Note: If you're making a CLI application for your own use, you can enter this as `https://localhost:8080`)
- Now, use the following code snippet (replacing with your own keys) to create an authentication URL:
```ts
import { authenticator, authParams } from 'https://deno.land/x/youtube_deno/src/mod.ts';

let auth = new authenticator();
let creds: authParams = {
	client_id: "your-client-id",
	redirect_uri: "your-redirect-uri",
	scope: "your-decided-scopes"
};

let auth_url: string = auth.authenticate(creds);
```
Here, copy the client ID that you just created from the console under `client-id` field. The `redirect_uri` field must contain the same one as you filled in the form at the Developer console. The `scope` field tells how much access you want the user to grant to your app, decide the scopes [from here](https://developers.google.com/identity/protocols/oauth2/scopes#youtube) and add space delimited values in the string for multiple scopes (Exapmle: `scope: "https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.upload"`).
- The `auth_url` variable made stores the created URL. If you're making a web application, redirect the user to this URL through a button in your app. Then the user will be prompted to decide if they want to grant access or not. Every user who authorizes your app will be redirected to the `redirect_uri` with an extra `#access_token` parameter that is a long random string. Just fetch this access token from the URL and pass it to the object that you create:
```ts
let yt = new YouTube("your-api-key-here", "access-token-here");
```
Now, using this object you can call [functions](https://github.com/akshgpt7/youtube-deno#calling-available-functions) (by passing the apt parameters) which require YouTube account interactions.

*(Note: For CLI applications for personal use, you can open the `auth_url` manually in a browser and after giving access, you'll be redirected to the `redirect_uri` with an extra `#access_token` parameter which you can copy into the object created above)*

<br><br>
## Calling available functions
**For the detailed API docs of this client library, look [here](https://doc.deno.land/https/raw.githubusercontent.com/akshgpt7/youtube-api-deno/master/src/mod.ts).**<br>
**For a better understanding of a particular function and parameters information, refer the [YouTube Data API docs](https://developers.google.com/youtube/v3/docs) for that function.**<br><br>

The following is a list of functions that you can call using one of the objects created above:<br>

The `params` parameter for each function must be an object type, following its [schema](https://doc.deno.land/https/raw.githubusercontent.com/akshgpt7/youtube-api-deno/master/src/mod.ts#schema_activities_insert). 

  - `activities_list(params: schema_activities_list)`
  - `captions_list(params: schema_captions_list)`
  - `captions_insert(params: schema_captions_insert, body: object)`
  - `captions_update(params: schema_captions_update, body: object)`
  - `captions_download(params: schema_captions_download)`
  - `captions_delete(params: schema_captions_delete)`
  - `channelBanners_insert(params: schema_channelBanners_insert, body?: object)`
  - `channels_list(params: schema_channels_list)`
  - `channels_update(params: schema_channels_update, body: object)`
  - `channelSections_list(params: schema_channelSections_list)`
  - `channelSections_insert(params: schema_channelBanners_insert, body: object)`
  - `channelSections_update(params: schema_channelSections_update, body: object)`
  - `channelSections_delete(params: schema_channelSections_delete)`
  - `comments_list(params: schema_comments_list)`
  - `comments_insert(params: schema_comments_insert, body: object)`
  - `comments_update(params: schema_comments_update, body?: object)`
  - `comments_markAsSpam(params: schema_comments_markAsSpam)`
  - `comments_setModerationStatus(params: schema_comments_setModerationStatus)`
  - `comments_delete(params: schema_comments_delete)`
  - `commentThreads_list(params: schema_commentThreads_list)`
  - `commentThreads_insert(params: schema_commentThreads_insert, body: object)`
  - `commentThreads_update(params: schema_commentThreads_update, body: object)`
  - `i18nLanguages_list(params: schema_i18nLanguages_list)`
  - `i18nRegions_list(params: schema_i18nRegions_list)`
  - `playlistItems_list(params: schema_playlistItems_list)`
  - `playlistItems_insert(params: schema_playlistItems_insert, body: object)`
  - `playlistItems_update(params: schema_playlistItems_update, body: object)`
  - `playlistItems_delete(params: schema_playlistItems_delete)`
  - `playlists_list(params: schema_playlists_list)`
  - `playlists_insert(params: schema_playlists_insert, body: object)`
  - `playlists_update(params: schema_playlists_update, body: object)`
  - `playlists_delete(params: schema_playlists_delete)`
  - `search_list(params: schema_search_list)`
  - `subscriptions_list(params: schema_subscriptions_list)`
  - `subscriptions_insert(params: schema_subscriptions_insert, body: object)`
  - `subscriptions_delete(params: schema_subscriptions_delete)`
  - `thumbnails_set(params: schema_thumbnails_set, body?: object)`
  - `videoAbuseReportReasons_list(params: schema_videoAbuseReportReasons_list)`
  - `videoCategories_list(params: schema_videoCategories_list)`
  - `videos_list(params: schema_videos_list)`
  - `videos_insert(params: schema_videos_insert, body: object)`
  - `videos_update(params: schema_videos_update, body: object)`
  - `videos_rate(params: schema_videos_rate)`
  - `videos_getRating(params: schema_videos_getRating)`
  - `videos_reportAbuse(params: schema_videos_reportAbuse, body: object)`
  - `videos_delete(params: schema_videos_delete)`
  - `watermarks_set(params: schema_watermarks_set, body: object)`
  - `watermarks_unset(params: schema_watermarks_unset)`
<br>

*All the functions return the response JSON after making the request.*
<br>

## Examples
```ts
// A simple example to call the search_list() function and log the response json.
import { YouTube } from 'https://deno.land/x/youtube_deno/mod.ts';

let obj = new YouTube("your-api-key-here", false);

obj.search_list({part: "snippet", q: "coldplay"}).then(function(response){
 console.log(response);
});

```

```ts
// An example to call the activities_list() function using an authorized access token and log the response json.
import { YouTube } from 'https://deno.land/x/youtube_deno/mod.ts';

let obj = new YouTube("your-api-key-here", "access-token-here");

obj.activities_list({part: "snippet", mine: true}).then(function(response){
 console.log(response);
});


```
<br>

## Contributing
youtube-deno needs your support! The goal of youtube-deno is to ease the usage of the YouTube API with Deno, which is a great piece of software!

If you find that a method is missing, find a change in YouTube Data API v3, notice a bug or issue, just fork the project, add the missing code, write the appropriate tests, then submit a pull request, and it will gladly be merged!
  
