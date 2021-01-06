
// Schemas for various function parameters.

export interface param {
  // deno-lint-ignore no-explicit-any
  [parameter: string]: any;
}

// ----------Parameter schemas for different methods----------

export interface schema_live_LiveBroadcasts_list extends param {
  part: string;
  broadcastStatus?: string;
  broadcastType?: string;
  id?: string;
  maxResults?: number;
  mine?: boolean;
  onBehalfOfContentOwner?: string;
  onBehalfOfContentOwnerChannel?: string;
  pageToken?: string;
}

export interface schema_live_liveChat_list extends param {
  part: string;
  liveChatId?: string;
  maxResults?: number;
  hl?: boolean;
  pageToken?: string;
  onBehalfOfContentOwnerChannel?: string;
  profileImageSize?: string;
}

export interface schema_live_superChatEvent_list extends param {
  part: string;
  maxResults?: number;
  hl?: boolean;
  pageToken?: string;
}
