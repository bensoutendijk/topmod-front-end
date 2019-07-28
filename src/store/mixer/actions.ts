import {
  MixerActionTypes,
  GET_MIXER_USER_PENDING,
  GET_MIXER_USER_FULFILLED,
  GET_MIXER_USER_REJECTED,
  GET_MIXER_VIEWERS_PENDING,
  GET_MIXER_VIEWERS_FULFILLED,
  GET_MIXER_VIEWERS_REJECTED,
  GET_MIXER_CHAT_MODS_PENDING,
  GET_MIXER_CHAT_MODS_FULFILLED,
  GET_MIXER_CHAT_MODS_REJECTED,
  GET_MIXER_CHAT_HISTORY_PENDING,
  GET_MIXER_CHAT_HISTORY_FULFILLED,
  GET_MIXER_CHAT_HISTORY_REJECTED,
  GET_MIXER_CHAT_CLIENT_PENDING,
  GET_MIXER_CHAT_CLIENT_FULFILLED,
  GET_MIXER_CHAT_CLIENT_REJECTED,
  UPDATE_MIXER_CHAT,
  IMixerUser,
  IMixerUserErrors,
  IMixerViewer,
  IMixerChatEvent,
  IMixerChatClient,
} from './types'

export function getMixerUser(): MixerActionTypes {
  return {
    type: GET_MIXER_USER_PENDING
  }
}

export function getMixerUserSuccess(data: IMixerUser): MixerActionTypes {
  return {
    type: GET_MIXER_USER_FULFILLED,
    payload: data
  }
}

export function getMixerUserFailure(data: IMixerUserErrors): MixerActionTypes {
  return {
    type: GET_MIXER_USER_REJECTED,
    payload: data
  }
}

export function getMixerViewers(): MixerActionTypes {
  return {
    type: GET_MIXER_VIEWERS_PENDING
  }
}

export function getMixerViewersSuccess(data: [IMixerViewer]): MixerActionTypes {
  return {
    type: GET_MIXER_VIEWERS_FULFILLED,
    payload: data
  }
}

export function getMixerViewersFailure(): MixerActionTypes {
  return {
    type: GET_MIXER_VIEWERS_REJECTED
  }
}

export function getMixerChatMods(): MixerActionTypes {
  return {
    type: GET_MIXER_CHAT_MODS_PENDING
  }
}

export function getMixerChatModsSuccess(data: [IMixerViewer]): MixerActionTypes {
  return {
    type: GET_MIXER_CHAT_MODS_FULFILLED,
    payload: data
  }
}

export function getMixerChatModsFailure(): MixerActionTypes {
  return {
    type: GET_MIXER_CHAT_MODS_REJECTED
  }
}

export function getMixerChatHistory(): MixerActionTypes {
  return {
    type: GET_MIXER_CHAT_HISTORY_PENDING
  }
}

export function getMixerChatHistorySuccess(data: [IMixerChatEvent]): MixerActionTypes {
  return {
    type: GET_MIXER_CHAT_HISTORY_FULFILLED,
    payload: data
  }
}

export function getMixerChatHistoryFailure(): MixerActionTypes {
  return {
    type: GET_MIXER_CHAT_HISTORY_REJECTED
  }
}

export function getMixerChatClient(): MixerActionTypes {
  return {
    type: GET_MIXER_CHAT_CLIENT_PENDING
  }
}

export function getMixerChatClientSuccess(data: IMixerChatClient): MixerActionTypes {
  return {
    type: GET_MIXER_CHAT_CLIENT_FULFILLED,
    payload: data
  }
}

export function getMixerChatClientFailure(): MixerActionTypes {
  return {
    type: GET_MIXER_CHAT_CLIENT_REJECTED
  }
}

export function updateMixerChat(data: IMixerChatEvent): MixerActionTypes {
  return {
    type: UPDATE_MIXER_CHAT,
    payload: data
  }
}