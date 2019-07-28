import { ASyncState } from '../types'

export const GET_MIXER_USER_PENDING = 'GET_MIXER_USER_PENDING'
export const GET_MIXER_USER_FULFILLED = 'GET_MIXER_USER_FULFILLED'
export const GET_MIXER_USER_REJECTED = 'GET_MIXER_USER_REJECTED'
export const GET_MIXER_VIEWERS_PENDING = 'GET_MIXER_VIEWERS_PENDING'
export const GET_MIXER_VIEWERS_FULFILLED = 'GET_MIXER_VIEWERS_FULFILLED'
export const GET_MIXER_VIEWERS_REJECTED = 'GET_MIXER_VIEWERS_REJECTED'
export const GET_MIXER_VIEWERSHIP_PENDING = 'GET_MIXER_VIEWERSHIP_PENDING'
export const GET_MIXER_VIEWERSHIP_FULFILLED = 'GET_MIXER_VIEWERSHIP_FULFILLED'
export const GET_MIXER_VIEWERSHIP_REJECTED = 'GET_MIXER_VIEWERSHIP_REJECTED'
export const GET_MIXER_CHAT_MODS_PENDING = 'GET_MIXER_CHAT_MODS_PENDING'
export const GET_MIXER_CHAT_MODS_FULFILLED = 'GET_MIXER_CHAT_MODS_FULFILLED'
export const GET_MIXER_CHAT_MODS_REJECTED = 'GET_MIXER_CHAT_MODS_REJECTED'
export const GET_MIXER_CHAT_HISTORY_PENDING = 'GET_MIXER_CHAT_HISTORY_PENDING'
export const GET_MIXER_CHAT_HISTORY_FULFILLED = 'GET_MIXER_CHAT_HISTORY_FULFILLED'
export const GET_MIXER_CHAT_HISTORY_REJECTED = 'GET_MIXER_CHAT_HISTORY_REJECTED'
export const GET_MIXER_CHAT_CLIENT_PENDING = 'GET_MIXER_CHAT_CLIENT_PENDING'
export const GET_MIXER_CHAT_CLIENT_FULFILLED = 'GET_MIXER_CHAT_CLIENT_FULFILLED'
export const GET_MIXER_CHAT_CLIENT_REJECTED = 'GET_MIXER_CHAT_CLIENT_REJECTED'
export const GET_MIXER_STREAMS_PENDING = 'GET_MIXER_STREAMS_PENDING'
export const GET_MIXER_STREAMS_FULFILLED = 'GET_MIXER_STREAMS_FULFILLED'
export const GET_MIXER_STREAMS_REJECTED = 'GET_MIXER_STREAMS_REJECTED'
export const UPDATE_MIXER_CHAT = 'UPDATE_MIXER_CHAT'

export type MixerViewerPermissions = 'connect' | 'view_deleted'
export type MixerViewerRoles = 'owner' | 'mod' | 'subscriber'

export interface MixerState {
  user: ASyncState & {
    data?: IMixerUser
    errors?: IMixerUserErrors
  }
  chat: ASyncState & {
    data?: [IMixerChatEvent]
  }
  chatClient: ASyncState & {
    data?: IMixerChatClient
  }
  chatViewers: ASyncState & {
    data?: [IMixerViewer]
  }
  chatMods: ASyncState & {
    data?: [IMixerViewer]
  }
  streams: ASyncState & {
    data?: [IMixerStream]
  }
}

export interface IMixerUser {
  id: number
  username: string
  channelId: number
}

export interface IMixerUserErrors {
  user: 'not authorized' | 'not authenticated'
}

export interface IMixerChatEvent {
  id: string
  channelId: number
  type: string
  message: [IMixerMessage]
  viewer: IMixerViewer
}

export interface IMixerMessage {
  type: string
  data: string
  text: string
}

export interface IMixerChatClient extends ASyncState {
  roles: [MixerViewerRoles]
  authkey: string
  permissions: [MixerViewerPermissions]
  endpoints: [string]
}

export interface IMixerViewer extends IMixerUser {
  roles: [MixerViewerRoles]
  ascension: number
}

export interface IMixerStream {
  id: number
  time: Date
  channelId: number
  duration: number
  online: boolean
  partnered: boolean
  type: IMixerGame
  viewership: [IMixerViewerAnalytic]
  followers: [IMixerFollowerAnalytic]
  subscribers: [IMixerSubscriberAnalytic]
}

export interface IMixerGame {
  id: number
  name: string
  description: string
  source: string
  coverUrl: string
  backgroundUrl: string
}

export interface IMixerViewerAnalytic extends IMixerChannelAnalytic {
  anon: number
  authed: number
}

export interface IMixerFollowerAnalytic extends IMixerChannelAnalytic {
  delta: number
  total: number
  userId?: number
}

export interface IMixerSubscriberAnalytic extends IMixerChannelAnalytic {
  delta: number
  total: number
  userId?: number
}

export interface IMixerChannelAnalytic {
  channelId: number
  time: Date
}

interface getMixerUser {
  type: typeof GET_MIXER_USER_PENDING
}

interface getMixerUserSuccess {
  type: typeof GET_MIXER_USER_FULFILLED
  payload: IMixerUser
}

interface getMixerUserFailure{
  type: typeof GET_MIXER_USER_REJECTED
  payload: IMixerUserErrors
}

interface getMixerViewers {
  type: typeof GET_MIXER_VIEWERS_PENDING
}

interface getMixerViewersSuccess {
  type: typeof GET_MIXER_VIEWERS_FULFILLED
  payload: [IMixerViewer]
}

interface getMixerViewersFailure {
  type: typeof GET_MIXER_VIEWERS_REJECTED
}

interface getMixerChatMods {
  type: typeof GET_MIXER_CHAT_MODS_PENDING
}

interface getMixerChatModsSuccess {
  type: typeof GET_MIXER_CHAT_MODS_FULFILLED
  payload: [IMixerViewer]
}

interface getMixerChatModsFailure {
  type: typeof GET_MIXER_CHAT_MODS_REJECTED
}

interface getMixerChatHistory {
  type: typeof GET_MIXER_CHAT_HISTORY_PENDING
}

interface getMixerChatHistorySuccess {
  type: typeof GET_MIXER_CHAT_HISTORY_FULFILLED
  payload: [IMixerChatEvent]
}

interface getMixerChatHistoryFailure {
  type: typeof GET_MIXER_CHAT_HISTORY_REJECTED
}

interface getMixerChatClient {
  type: typeof GET_MIXER_CHAT_CLIENT_PENDING
}

interface getMixerChatClientSuccess {
  type: typeof GET_MIXER_CHAT_CLIENT_FULFILLED
  payload: IMixerChatClient
}

interface getMixerChatClientFailure {
  type: typeof GET_MIXER_CHAT_CLIENT_REJECTED
}

interface updateMixerChat {
  type: typeof UPDATE_MIXER_CHAT
  payload: IMixerChatEvent
}

interface getMixerStreams {
  type: typeof GET_MIXER_STREAMS_PENDING
}

interface getMixerStreamsSuccess {
  type: typeof GET_MIXER_STREAMS_FULFILLED
  payload: [IMixerStream]
}

interface getMixerStreamsFailure {
  type: typeof GET_MIXER_STREAMS_REJECTED
}

export type MixerActionTypes = (
  getMixerUser |
  getMixerUserSuccess |
  getMixerUserFailure |
  getMixerViewers |
  getMixerViewersSuccess |
  getMixerViewersFailure |
  getMixerChatMods |
  getMixerChatModsSuccess |
  getMixerChatModsFailure |
  getMixerChatHistory |
  getMixerChatHistorySuccess |
  getMixerChatHistoryFailure |
  getMixerChatClient |
  getMixerChatClientSuccess |
  getMixerChatClientFailure |
  updateMixerChat |
  getMixerStreams |
  getMixerStreamsSuccess |
  getMixerStreamsFailure
)