<div align="center">

# youtube-deno : A [Deno](https://deno.land/) client for the [YouTube Data API](https://developers.google.com/youtube/v3/docs) 

Lets you incorporate core YouTube features, such as uploading videos, creating and managing playlists, searching for content, and almost any interaction with YouTube in your Deno application.
<br><br>
This library is a part of <br>
<a href="https://deno.land/x/">
<img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/deno-64.png">
</a>

</div>

---
<br>

## Installing
*Deno allows you to directly import modules from URLs!*
To import and use the client in your file, add the following import statement:
```ts
import {YouTube} from 'https://deno.land/x/youtube_deno/src/mod.ts';
```
<br>

## Usage

### Configuring your App
Firstly, you'll have to register your app in the [Google Developers Console](https://console.developers.google.com/apis/dashboard).<br>
 Browse the console and select "New Project".<br>
 
After registering your app, enable the YouTube API for your app by clicking on the "ENABLE APIS AND SERVICES" button and selecting **"YouTube Data API v3"**.<br>
 
After this, you'll need to create some credentials through the console to be able to make API requests.

### Objects that do not require user interactions
If you only need to fetch public data from YouTube, then all you need is an API key. <br><br>
Click on the "CREATE CREDENTIALS" button in the console and select **"API key"** from the options (Note that an API key is required for making each and every request to this API, so this step is mandatory).
<br><br>
To create an object which uses this API key only for authentication:
```ts
let yt1 = new YouTube("Your-api-key-here", false); // The false if for access token
```
(Remember: this object is not allowed to perform any account related operation, so you won’t be able to like a video, subscribe to a channel or delete a playlist etc. from a specific account. You will only be able to retrieve read-only public data. For these operations, create an [OAuth authorized object](#objects-that-require-user-interactions-user-consent-by-oauth-20-authorization))

Now, to use this object, just call [any function](https://github.com/akshgpt7/youtube-deno#available-functions) that only lists read-only public data. For example:
```ts
yt1.search_list({part: "snippet"}).then(function(response){
 console.log(response);
});
```

### Objects that require user interactions (user consent by [OAuth 2.0](https://developers.google.com/identity/protocols/oauth2) authorization)
If you need to make requests that involve access to a YouTube account, you need the owner of each account to authorize your app. For that, you need an access token to be passed to the object you create.

After obtaining an access token by following [these steps](https://developers.google.com/identity/protocols/oauth2/web-server#httprest) ([or this](https://developers.google.com/identity/protocols/oauth2)), create an object like this:
```ts
let yt2 = new YouTube("your-api-key-here", "access-token-here");
```
Now, using this object you can call [functions](https://github.com/akshgpt7/youtube-deno#available-functions) (by passing the apt parameters) which require YouTube account interactions.
<br><br>

## Available functions
**For a detailed documentation of this client library, look [here](https://doc.deno.land/https/raw.githubusercontent.com/akshgpt7/youtube-api-deno/master/src/mod.ts).**<br>
**For a better understanding of a particular function, refer the [YouTube Data API docs](https://developers.google.com/youtube/v3/docs) for that function.**<br><br>

The following is a list of functions that you can call using one of the objects created above:<br>

The `param` parameter for each function must be an object type, following its [schema](https://doc.deno.land/https/raw.githubusercontent.com/akshgpt7/youtube-api-deno/master/src/mod.ts#schema_activities_insert). 

  - `activities_list(params: schema_activities_list)`
  - `activities_insert(params: schema_activities_insert, body: object)`
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
  - `guideCategories_list(params: schema_guideCategories_list)`
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

## Examples
```ts
// A simple example to call the search_list function and log the response json.
import {YouTube} from 'https://deno.land/x/youtube_deno/src/mod.ts';

let obj = new YouTube("your-api-key-here", false);

obj.search_list({part: "snippet", q: "coldplay"}).then(function(response){
 console.log(response);
});

```
<br>

## Contributing
youtube-deno needs your support! The goal of youtube-deno is to ease the usage of the YouTube API with Deno, which is a great piece of software!

If you find that a method is missing, find a change in YouTube Data API v3, notice a bug or issue, just fork the project, add the missing code, write the appropriate tests, then submit a pull request, and it will gladly be merged!
  
