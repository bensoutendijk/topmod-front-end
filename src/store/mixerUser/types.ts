export const GET_MIXER_PENDING = 'GET_MIXER_PENDING'
export const GET_MIXER_FULFILLED = 'GET_MIXER_FULFILLED'
export const GET_MIXER_REJECTED = 'GET_MIXER_REJECTED'
export const GET_MIXER_VIEWERS_PENDING = 'GET_MIXER_VIEWERS_PENDING'
export const GET_MIXER_VIEWERS_FULFILLED = 'GET_MIXER_VIEWERS_FULFILLED'
export const GET_MIXER_VIEWERS_REJECTED = 'GET_MIXER_VIEWERS_REJECTED'
export const GET_MIXER_VIEWERSHIP_PENDING = 'GET_MIXER_VIEWERSHIP_PENDING'
export const GET_MIXER_VIEWERSHIP_FULFILLED = 'GET_MIXER_VIEWERSHIP_FULFILLED'
export const GET_MIXER_VIEWERSHIP_REJECTED = 'GET_MIXER_VIEWERSHIP_REJECTED'
export const GET_MIXER_MOD_LIST_PENDING = 'GET_MIXER_MOD_LIST_PENDING'
export const GET_MIXER_MOD_LIST_FULFILLED = 'GET_MIXER_MOD_LIST_FULFILLED'
export const GET_MIXER_MOD_LIST_REJECTED = 'GET_MIXER_MOD_LIST_REJECTED'
export const GET_MIXER_CHAT_HISTORY_PENDING = 'GET_MIXER_CHAT_HISTORY_PENDING'
export const GET_MIXER_CHAT_HISTORY_FULFILLED = 'GET_MIXER_CHAT_HISTORY_FULFILLED'
export const GET_MIXER_CHAT_HISTORY_REJECTED = 'GET_MIXER_CHAT_HISTORY_REJECTED'
export const GET_MIXER_CHAT_PENDING = 'GET_MIXER_CHAT_PENDING'
export const GET_MIXER_CHAT_FULFILLED = 'GET_MIXER_CHAT_FULFILLED'
export const GET_MIXER_CHAT_REJECTED = 'GET_MIXER_CHAT_REJECTED'
export const UPDATE_MIXER_CHAT = 'UPDATE_MIXER_CHAT'

export interface IMixerState {
  user: {
    fetching: boolean
    fetched: boolean
    data?: IMixerUser
    errors: IMixerUserErrors
  }
  chat: {
    fetching: boolean
    fetched: boolean
    data: [IMixerMessage]
    client: IMixerChatClient
    viewers: [IMixerViewer]
    errors: IMixerChatErrors
  }
  streams: {
    fetching: boolean
    fetched: boolean
    data: [IMixerStream]
    errors: IMixerStreamErrors
  }
}

export interface IMixerUser {
  username: string
  userid: number
  channelid: number
}

export interface IMixerUserErrors {
  user: 'not authorized' | 'not authenticated'
}

export interface IMixerMessage {

}

export interface IMixerChatClient {

}

export interface IMixerViewer {

}

export interface IMixerChatErrors {

}

export interface IMixerStream {

}

export interface IMixerStreamErrors {
  
}