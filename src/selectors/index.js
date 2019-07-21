import { createSelector } from 'reselect';

export const selectMixerChatMessages = createSelector(
  state => state.mixer.chat.data,
  chat => chat.filter(chatEvent => chatEvent.event === 'ChatMessage')
);